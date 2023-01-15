import {execSync} from 'child_process';
import logSymbols from 'log-symbols';
import {navigateToProjectFolder} from './directory';

export const runCommand = (command: string, isVerbose: boolean, repoName: string) => {
	try {
		execSync(`${navigateToProjectFolder(repoName)} ${command}`, {stdio: isVerbose ? 'inherit' : 'ignore'});
	} catch (e) {
		console.error(logSymbols.error, `Failed to execute ${command}`, e);
	}
	return true;
};

export const runCommandWithOutput = (command: string, isVerbose: boolean, repoName: string) => {
	try {
		return execSync(`${command}`).toString();
	} catch (e) {
		console.error(logSymbols.error, `Failed to execute ${command}`, e);
	}
};
