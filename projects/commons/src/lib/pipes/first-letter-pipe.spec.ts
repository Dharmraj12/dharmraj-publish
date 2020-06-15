import { FirstLetterPipe } from './first-letter-pipe';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

describe('Frst Letter Pipe', () => {

  let firstLetter: FirstLetterPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstLetterPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    firstLetter = new FirstLetterPipe();
  });

  it('should get only first letter in Upper case', () => {
    expect(firstLetter.transform('john')).toEqual('J');
  });

  it('should be null when null is passed', () => {
    expect(firstLetter.transform(null)).toBeNull();
  });

});
