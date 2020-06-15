import { Pipe, PipeTransform } from '@angular/core';
import { AppConfigService } from '../services/app.config.service';

@Pipe({
    name: 'mnlAppConfig'
})
export class AppConfigPipe implements PipeTransform {
    constructor(private config: AppConfigService) {}

    transform(value: string): any {
        return this.config.get(value);
    }
}
