import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';
import {Subscription} from 'rxjs';
import {IWord} from '../service/dictionary';


@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {
  word: IWord;
  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {key: key, meaning: meaning};
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
