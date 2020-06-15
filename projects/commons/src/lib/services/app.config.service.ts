import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AppConfigService {

    private config: object = null;

    constructor(private http: HttpClient) {}

    /**
     * Use to get the data found in the file (config file)
     */
    public get(key: any) {
        return this.config[key];
    }

    /**
     * This method:
     *   Loads "config.json" to get all variables (e.g.: 'app.config.json')
     */
    public load() {
        return new Promise((resolve, reject) => {
            this.http.get('assets/app.config.json').map( res => res )
                        .catch((error: any) => {
                            resolve(error);
                            return throwError(error.json().error || 'Server error');
                        })
                        .subscribe((responseData) => {
                            this.config = responseData;
                            resolve(true);
                        });
                });
    }
}
