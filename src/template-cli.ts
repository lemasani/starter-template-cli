import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import gradient from 'gradient-string';
import figlet from 'figlet';
import boxen from 'boxen';
import ora from 'ora';
import { input, select } from '@inquirer/prompts';

// Define a more comprehensive template configuration
interface TemplateConfig {
	name: string;
	description: string;
	path: string;
	tags: string[];
	complexity: 'Beginner' | 'Intermediate' | 'Advanced';
	icon?: string;
}

class TemplateCLI {
	private templatesDir: string;
	private templates: TemplateConfig[];
	
	constructor() {
		this.templatesDir = path.join(__dirname, 'templates');
		this.templates = this.loadTemplates();
	}
	
	// Fancy welcome screen
	private displayWelcomeScreen() {
		console.clear();
		
		// Gradient ASCII title
		const title = figlet.textSync('NextJS Templates', {
			font: 'Big',
			horizontalLayout: 'default',
			verticalLayout: 'default'
		});
		
		console.log(
			gradient.rainbow(title)
		);
		
		console.log(
			boxen(
				chalk.bold.cyan('🚀 Welcome to NextJS Template Generator') +
				'\n' +
				chalk.italic.green('Quickly bootstrap your next project with our curated templates!'),
				{
					padding: 1,
					margin: 1,
					borderStyle: 'round',
					borderColor: 'green'
				}
			)
		);
	}
	
	private loadTemplates(): TemplateConfig[] {
		const templatePaths = fs.readdirSync(this.templatesDir)
			.filter(file => fs.statSync(path.join(this.templatesDir, file)).isDirectory());
		
		return templatePaths.map(templateName => ({
			name: templateName,
			description: this.readTemplateDescription(templateName),
			path: path.join(this.templatesDir, templateName),
			tags: this.readTemplateTags(templateName),
			complexity: this.determineTemplateComplexity(templateName),
			icon: this.getTemplateIcon(templateName)
		}));
	}
	
	private readTemplateDescription(templateName: string): string {
		try {
			const descPath = path.join(this.templatesDir, templateName, 'description.txt');
			return fs.readFileSync(descPath, 'utf-8').trim();
		} catch {
			return 'No description available';
		}
	}
	
	private readTemplateTags(templateName: string): string[] {
		try {
			const tagsPath = path.join(this.templatesDir, templateName, 'tags.txt');
			return fs.readFileSync(tagsPath, 'utf-8').split(',').map(tag => tag.trim());
		} catch {
			return [];
		}
	}
	
	private determineTemplateComplexity(templateName: string): TemplateConfig['complexity'] {
		// Simple logic to determine complexity
		if (templateName.includes('basic')) return 'Beginner';
		if (templateName.includes('intermediate')) return 'Intermediate';
		return 'Advanced';
	}
	
	private getTemplateIcon(templateName: string): string {
		const icons: {[key: string]: string} = {
			'blog': '📝',
			'dashboard': '📊',
			'saas': '💼',
			'portfolio': '🌟',
			'ecommerce': '🛍️'
		};
		
		return Object.keys(icons).find(key => templateName.includes(key))
			? icons[Object.keys(icons).find(key => templateName.includes(key))!]
			: '🚀';
	}
	
	private formatTemplateChoice(template: TemplateConfig) {
		return [
			`${template.icon} ${chalk.bold(template.name)}`,
			chalk.gray(`[${template.complexity}]`),
			chalk.italic.blue(template.description),
			chalk.green(template.tags.map(tag => `#${tag}`).join(' '))
		].join(' ');
	}
	
	async selectTemplate(): Promise<TemplateConfig | null> {
		this.displayWelcomeScreen();
		
		const selectedTemplate = await select({
			message: chalk.bold.magenta('Choose your Next.js starter template'),
			choices: this.templates.map(template => ({
				name: this.formatTemplateChoice(template),
				value: template
			}))
		});
		
		return selectedTemplate;
	}
	
	async createProject(template: TemplateConfig) {
		const projectName = await input({
			message: chalk.bold.cyan('Name your project:'),
			default: `${template.name}-project`,
			validate: (projectInput: string) => projectInput.length > 0 ? true : 'Project name cannot be empty'
		});
		
		const projectPath = path.join(process.cwd(), projectName);
		
		const spinner = ora({
			text: gradient.morning(`Creating ${projectName} with ${template.name} template...`),
			color: 'yellow'
		}).start();
		
		try {
			// Copy template files
			fs.copySync(template.path, projectPath);
			
			// Update package.json
			this.updatePackageJsonFile(projectPath, projectName);
			
			// Initialize git repository
			this.initializeGitRepository(projectPath);
			
			// Install project dependencies
			this.installProjectDependencies(projectPath);
			
			spinner.succeed(
				boxen(
					chalk.green(`✨ Project ${chalk.bold(projectName)} created successfully! 🎉`) +
					'\n\n' +
					chalk.cyan('Next steps:') +
					'\n' +
					chalk.yellow(`cd ${projectName}`) +
					'\n' +
					chalk.yellow('npm run dev'),
					{
						padding: 1,
						borderColor: 'green',
						borderStyle: 'round'
					}
				)
			);
			
		} catch (error) {
			spinner.fail(
				boxen(
					chalk.red(`Failed to create project: ${(error as Error).message}`),
					{
						padding: 1,
						borderColor: 'red',
						borderStyle: 'bold'
					}
				)
			);
		}
	}
	
	private updatePackageJsonFile(projectPath: string, projectName: string) {
		const packageJsonPath = path.join(projectPath, 'package.json');
		const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
		packageJson.name = projectName;
		fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
	}
	
	private initializeGitRepository(projectPath: string) {
		try {
			// Change to project directory
			process.chdir(projectPath);
			
			// Initialize git repository
			execSync('git init');
			execSync('git add .');
			execSync('git commit -m "Initial commit: Created from Next.js starter template"');
			
			console.log(chalk.green('Git repository initialized'));
		} catch (error) {
			console.error(chalk.red('Failed to initialize git repository'), error);
		}
	}
	
	private installProjectDependencies(projectPath: string) {
		try {
			// Change to project directory
			process.chdir(projectPath);
			
			// Install dependencies
			const spinner = ora('Installing dependencies...').start();
			execSync('npm install');
			spinner.succeed(chalk.green('Dependencies installed'));
		} catch (error) {
			console.error(chalk.red('Failed to install dependencies'), error);
		}
	}
	
	async run() {
		const template = await this.selectTemplate();
		if (template) {
			await this.createProject(template);
		}
	}
}

export default TemplateCLI;