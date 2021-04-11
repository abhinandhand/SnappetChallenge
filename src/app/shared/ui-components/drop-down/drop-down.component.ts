import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  dropDownOptions = [
    {value: '2015-03-24', label: 'Today'},
    {value: '2015-03-23', label: 'Yesterday'},
    {value: 'Last 7days', label: 'Last 7 days'},
    {value: 'custom Date', label: 'Custom Date'}
  ];

  @Output() dropDownOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.sendLatestValue(this.dropDownOptions[0].value);
  }

  updateValue(event: any): void{
    this.sendLatestValue(event.target.value);
  }

  sendLatestValue(value: string): void{
    this.dropDownOutput.emit(value);
  }

}
