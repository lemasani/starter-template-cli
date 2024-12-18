#!/usr/bin/env node
import TemplateCLI from './template-cli';

async function main() {
	const cli = new TemplateCLI();
	await cli.run();
}

main().catch(console.error);