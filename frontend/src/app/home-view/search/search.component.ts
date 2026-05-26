import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output() newQueryEvent = new EventEmitter<string>();

  private readonly _queryFormControl = new FormControl('', [
    Validators.required,
  ]);
  private readonly _formGroup = new FormGroup({
    querySearchForm: this._queryFormControl,
  });

  public clear() {
    this._queryFormControl.setValue('');
  }

  public get queryFormControl(): FormControl {
    return this._queryFormControl;
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  public search() {
    const query = this.queryFormControl.value;
    if (query) {
      this.newQueryEvent.emit(query);
    }
  }
}
