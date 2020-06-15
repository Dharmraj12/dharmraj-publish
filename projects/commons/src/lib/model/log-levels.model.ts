export class LogLevelsEnum extends Number {
    static TRACE = 5;
    static DEBUG = 1;
    static INFO = 2;
    static WARN = 3;
    static ERROR = 4;
    static SILENT = 0;
}

export let logLevels: any[] = [
    {level: LogLevelsEnum.TRACE, name: 'TRACE'},
    {level: LogLevelsEnum.DEBUG, name: 'DEBUG'},
    {level: LogLevelsEnum.INFO, name: 'INFO'},
    {level: LogLevelsEnum.WARN, name: 'WARN'},
    {level: LogLevelsEnum.ERROR, name: 'ERROR'},
    {level: LogLevelsEnum.SILENT, name: 'SILENT'}
];
