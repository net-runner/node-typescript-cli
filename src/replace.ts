import {replaceInFile, ReplaceInFileConfig} from 'replace-in-file';
import {log} from './log';

export const replace = async (options: ReplaceInFileConfig) => {
	try {
		const results = await replaceInFile(options);
		log('Replacement results:', results);
	} catch (error) {
		console.error('Error occurred:', error);
	}
};
