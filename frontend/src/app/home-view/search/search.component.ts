import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() newQueryEvent = new EventEmitter<string>();

  private _queryFormControl = new FormControl('', Validators.requiredTrue)
  private _formGroup = new FormGroup({
    querySearchForm: this._queryFormControl
  });
  
  public clear() {
    this._queryFormControl.setValue("")
  }
  
  public get queryFormControl() : FormControl {
    return this._queryFormControl
  }

  public get formGroup() : FormGroup {
    return this._formGroup
  }

  public search(formGroup: FormGroup) {
    let query = this.queryFormControl.value
    console.log('Searching for gifs with query: ' + query)
    if (query) {
      this.newQueryEvent.emit(query)
    }
  }
  

}
