import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

// /lib/index.js
export const filename = fileURLToPath(import.meta.url);

export const currentWorkingDirectory = process.cwd();

export const directoryPath = (repoName: string) => path.join(currentWorkingDirectory, repoName);
export const navigateToProjectFolder = (repoName: string) => `cd ${repoName} &&`;
