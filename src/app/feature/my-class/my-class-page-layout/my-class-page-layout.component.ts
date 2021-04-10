import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Overview } from 'src/app/core/model/overview';
import { AppState } from 'src/app/store/reducer';
import { selectAllOverview } from '../store/overview.selectors';

@Component({
  selector: 'app-my-class-page-layout',
  templateUrl: './my-class-page-layout.component.html',
  styleUrls: ['./my-class-page-layout.component.scss']
})
export class MyClassPageLayoutComponent implements OnInit {

  overviewRawData$!: Observable<Overview[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.overviewRawData$ = this.store.pipe(
      select(selectAllOverview)
    );
    this.overviewRawData$.subscribe( data => console.log(data));
  }

}
