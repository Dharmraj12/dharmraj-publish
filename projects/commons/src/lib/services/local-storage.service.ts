import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class LocalStorageService {
    set(key, value) {
        localStorage.setItem(key, value);
    }
    get(key): string {
        return localStorage.getItem(key);
    }
}
