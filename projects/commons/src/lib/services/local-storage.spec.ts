import { LocalStorageService } from './local-storage.service';
import { TestBed } from '@angular/core/testing';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    service =  TestBed.get(LocalStorageService);
  });

  it('should  call LocalStorgae to set value', () => {
    const setItemSpy = spyOn(localStorage, 'setItem');
    service.set('key', 'Testing');

    expect(setItemSpy).toHaveBeenCalledWith('key', 'Testing');
  });

  it('should  call LocalStorage to get value', () => {
    const getItemSpy = spyOn(localStorage, 'getItem').and.returnValue('Mock Value');
    const getValue = service.get('key');

    expect(getItemSpy).toHaveBeenCalledWith('key');
    expect(getValue).toEqual('Mock Value');
  });
});
