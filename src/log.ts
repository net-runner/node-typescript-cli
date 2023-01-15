import logSymbols from 'log-symbols';

export const log = console.log;

export const logError = (message: string | string[]) => console.error(logSymbols.error, message);
