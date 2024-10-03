import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.css']
})
export class FilterlistComponent {

  @Input() all: number = 0;
  @Input() inStockCount: number = 0;
  @Input() outofstock: number = 0;

  @Output()
  selectedFilterRadioBtnChange: EventEmitter<string> = new EventEmitter();

  selectedFilterRadio: string = 'all'; // This will hold the value of the selected radio button

  onselectedradiobtnchange() {
    this.selectedFilterRadioBtnChange.emit(this.selectedFilterRadio);
    console.log('Selected Radio Button Value:', this.selectedFilterRadioBtnChange.emit);
  }
}
