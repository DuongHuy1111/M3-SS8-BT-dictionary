import {Injectable} from '@angular/core';
import {IWord} from './dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {
      key: 'badminton',
      meaning: 'cầu lông'
    }, {
      key: 'table tennis',
      meaning: 'bóng bàn'
    }, {
      key: 'volleyball',
      meaning: 'bóng chuyền'
    }, {
      key: 'basketball',
      meaning: 'bóng rổ'
    }
  ];

  constructor() {
  }

  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }

  getAll(): IWord[] {
    return this.words;
  }
}
