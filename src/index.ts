#!/usr/bin/env node

import {Argument, program} from 'commander';

program
	.name('node-typescript-cli')
	.description('Base for creating Node tools with Typescript')
	.version('1.0.0')
	.action((str, options) => {
		//Do some work here
	});

program.parse();

