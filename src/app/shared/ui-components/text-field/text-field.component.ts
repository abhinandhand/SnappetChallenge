import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { Suggestion } from 'src/app/core/model/suggestion';
import { AutoSuggestionService } from 'src/app/core/services/autosuggestion/auto-suggestion.service';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput', { static: true }) input!: ElementRef;


  constructor(private suggestionService: AutoSuggestionService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const searchTerm$ = fromEvent<any>(this.input.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(search => this.loadResults(search))
    ).subscribe();
  }

  onSearch(): void{
    
  }

  loadResults(search: string): Observable<Suggestion[]> {
    return this.suggestionService.fetchResults(search).pipe(
      tap(value => console.log(value))
      );
  }
}
