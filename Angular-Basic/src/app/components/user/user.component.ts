import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input()  set user(value: any) {this._user = {... value}}
  get user() {return this._user};

  @Output('newName') newName: EventEmitter<any> = new EventEmitter<any>();

  private _user: any;

  constructor(){

}


}
