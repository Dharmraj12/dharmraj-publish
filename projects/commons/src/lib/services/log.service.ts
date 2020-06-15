import { Injectable } from '@angular/core';
import { AppConfigService } from './app.config.service';
import { logLevels, LogLevelsEnum } from '../model/log-levels.model';
import { Subject } from 'rxjs';
// tslint:disable: no-console
@Injectable({
  providedIn: 'root'
})
export class LogService {

  onMessage: Subject<any>;
  constructor(private appConfigService: AppConfigService) {
    this.onMessage = new Subject();
  }
  get currentLogLevel() {
    const configLevel: string = this.appConfigService.get('logLevel');

    if (configLevel) {
      return this.getLogLevel(configLevel);
    }

    return LogLevelsEnum.ERROR;
  }

  error(message?: any, ...optionalParams: any[]) {
    if (this.currentLogLevel >= LogLevelsEnum.ERROR) {

      this.messageBus(message, 'ERROR');

      console.error(message, ...optionalParams);
    }
  }

  debug(message?: any, ...optionalParams: any[]) {
    if (this.currentLogLevel >= LogLevelsEnum.DEBUG) {

      this.messageBus(message, 'DEBUG');

      console.debug(message, ...optionalParams);
    }
  }

  info(message?: any, ...optionalParams: any[]) {
    if (this.currentLogLevel >= LogLevelsEnum.INFO) {

      this.messageBus(message, 'INFO');

      console.info(message, ...optionalParams);
    }
  }

  log(message?: any, ...optionalParams: any[]) {
    if (this.currentLogLevel >= LogLevelsEnum.TRACE) {

      this.messageBus(message, 'LOG');

      console.log(message, ...optionalParams);
    }
  }

  trace(message?: any, ...optionalParams: any[]) {
    if (this.currentLogLevel >= LogLevelsEnum.TRACE) {

      this.messageBus(message, 'TRACE');

      console.trace(message, ...optionalParams);
    }
  }

  warn(message?: any, ...optionalParams: any[]) {
    if (this.currentLogLevel >= LogLevelsEnum.WARN) {

      this.messageBus(message, 'WARN');

      console.warn(message, ...optionalParams);
    }
  }

  assert(test?: boolean, message?: string, ...optionalParams: any[]) {
    if (this.currentLogLevel !== LogLevelsEnum.SILENT) {

      this.messageBus(message, 'ASSERT');

      console.assert(test, message, ...optionalParams);
    }
  }

  group(groupTitle?: string, ...optionalParams: any[]) {
    if (this.currentLogLevel !== LogLevelsEnum.SILENT) {
      console.group(groupTitle, ...optionalParams);
    }
  }

  groupEnd() {
    if (this.currentLogLevel !== LogLevelsEnum.SILENT) {
      console.groupEnd();
    }
  }
  getLogLevel(level: string): LogLevelsEnum {
    const referencedLevel = logLevels.find((currentLevel: any) => {
      return currentLevel.name.toLocaleLowerCase() === level.toLocaleLowerCase();
    });

    return referencedLevel ? referencedLevel.level : 4;
  }

  messageBus(message: string, logLevel: string) {
    this.onMessage.next({ text: message, type: logLevel });
  }
}
