"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const chalk_1 = __importDefault(require("chalk"));
const gradient_string_1 = __importDefault(require("gradient-string"));
const figlet_1 = __importDefault(require("figlet"));
const boxen_1 = __importDefault(require("boxen"));
const ora_1 = __importDefault(require("ora"));
const prompts_1 = require("@inquirer/prompts");
class TemplateCLI {
    constructor() {
        this.templatesDir = path_1.default.join(__dirname, 'templates');
        this.templates = this.loadTemplates();
    }
    // Fancy welcome screen
    displayWelcomeScreen() {
        console.clear();
        // Gradient ASCII title
        const title = figlet_1.default.textSync('NextJS Templates', {
            font: 'Big',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        });
        console.log(gradient_string_1.default.rainbow(title));
        console.log((0, boxen_1.default)(chalk_1.default.bold.cyan('🚀 Welcome to NextJS Template Generator') +
            '\n' +
            chalk_1.default.italic.green('Quickly bootstrap your next project with our curated templates!'), {
            padding: 1,
            margin: 1,
            borderStyle: 'round',
            borderColor: 'green'
        }));
    }
    loadTemplates() {
        const templatePaths = fs_extra_1.default.readdirSync(this.templatesDir)
            .filter(file => fs_extra_1.default.statSync(path_1.default.join(this.templatesDir, file)).isDirectory());
        return templatePaths.map(templateName => ({
            name: templateName,
            description: this.readTemplateDescription(templateName),
            path: path_1.default.join(this.templatesDir, templateName),
            tags: this.readTemplateTags(templateName),
            complexity: this.determineTemplateComplexity(templateName),
            icon: this.getTemplateIcon(templateName)
        }));
    }
    readTemplateDescription(templateName) {
        try {
            const descPath = path_1.default.join(this.templatesDir, templateName, 'description.txt');
            return fs_extra_1.default.readFileSync(descPath, 'utf-8').trim();
        }
        catch {
            return 'No description available';
        }
    }
    readTemplateTags(templateName) {
        try {
            const tagsPath = path_1.default.join(this.templatesDir, templateName, 'tags.txt');
            return fs_extra_1.default.readFileSync(tagsPath, 'utf-8').split(',').map(tag => tag.trim());
        }
        catch {
            return [];
        }
    }
    determineTemplateComplexity(templateName) {
        // Simple logic to determine complexity
        if (templateName.includes('basic'))
            return 'Beginner';
        if (templateName.includes('intermediate'))
            return 'Intermediate';
        return 'Advanced';
    }
    getTemplateIcon(templateName) {
        const icons = {
            'blog': '📝',
            'dashboard': '📊',
            'saas': '💼',
            'portfolio': '🌟',
            'ecommerce': '🛍️'
        };
        return Object.keys(icons).find(key => templateName.includes(key))
            ? icons[Object.keys(icons).find(key => templateName.includes(key))]
            : '🚀';
    }
    formatTemplateChoice(template) {
        return [
            `${template.icon} ${chalk_1.default.bold(template.name)}`,
            chalk_1.default.gray(`[${template.complexity}]`),
            chalk_1.default.italic.blue(template.description),
            chalk_1.default.green(template.tags.map(tag => `#${tag}`).join(' '))
        ].join(' ');
    }
    async selectTemplate() {
        this.displayWelcomeScreen();
        const selectedTemplate = await (0, prompts_1.select)({
            message: chalk_1.default.bold.magenta('Choose your Next.js starter template'),
            choices: this.templates.map(template => ({
                name: this.formatTemplateChoice(template),
                value: template
            }))
        });
        return selectedTemplate;
    }
    async createProject(template) {
        const projectName = await (0, prompts_1.input)({
            message: chalk_1.default.bold.cyan('Name your project:'),
            default: `${template.name}-project`,
            validate: (projectInput) => projectInput.length > 0 ? true : 'Project name cannot be empty'
        });
        const projectPath = path_1.default.join(process.cwd(), projectName);
        const spinner = (0, ora_1.default)({
            text: gradient_string_1.default.morning(`Creating ${projectName} with ${template.name} template...`),
            color: 'yellow'
        }).start();
        try {
            // Copy template files
            fs_extra_1.default.copySync(template.path, projectPath);
            // Update package.json
            this.updatePackageJsonFile(projectPath, projectName);
            // Initialize git repository
            this.initializeGitRepository(projectPath);
            // Install project dependencies
            this.installProjectDependencies(projectPath);
            spinner.succeed((0, boxen_1.default)(chalk_1.default.green(`✨ Project ${chalk_1.default.bold(projectName)} created successfully! 🎉`) +
                '\n\n' +
                chalk_1.default.cyan('Next steps:') +
                '\n' +
                chalk_1.default.yellow(`cd ${projectName}`) +
                '\n' +
                chalk_1.default.yellow('npm run dev'), {
                padding: 1,
                borderColor: 'green',
                borderStyle: 'round'
            }));
        }
        catch (error) {
            spinner.fail((0, boxen_1.default)(chalk_1.default.red(`Failed to create project: ${error.message}`), {
                padding: 1,
                borderColor: 'red',
                borderStyle: 'bold'
            }));
        }
    }
    updatePackageJsonFile(projectPath, projectName) {
        const packageJsonPath = path_1.default.join(projectPath, 'package.json');
        const packageJson = JSON.parse(fs_extra_1.default.readFileSync(packageJsonPath, 'utf-8'));
        packageJson.name = projectName;
        fs_extra_1.default.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    }
    initializeGitRepository(projectPath) {
        try {
            // Change to project directory
            process.chdir(projectPath);
            // Initialize git repository
            (0, child_process_1.execSync)('git init');
            (0, child_process_1.execSync)('git add .');
            (0, child_process_1.execSync)('git commit -m "Initial commit: Created from Next.js starter template"');
            console.log(chalk_1.default.green('Git repository initialized'));
        }
        catch (error) {
            console.error(chalk_1.default.red('Failed to initialize git repository'), error);
        }
    }
    installProjectDependencies(projectPath) {
        try {
            // Change to project directory
            process.chdir(projectPath);
            // Install dependencies
            const spinner = (0, ora_1.default)('Installing dependencies...').start();
            (0, child_process_1.execSync)('npm install');
            spinner.succeed(chalk_1.default.green('Dependencies installed'));
        }
        catch (error) {
            console.error(chalk_1.default.red('Failed to install dependencies'), error);
        }
    }
    async run() {
        const template = await this.selectTemplate();
        if (template) {
            await this.createProject(template);
        }
    }
}
exports.default = TemplateCLI;
