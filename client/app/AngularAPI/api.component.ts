import { Component } from '@angular/core';
import {Apiservices} from './api.services';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  providers:[Apiservices]
})
export class AngularApiComponent {
  GetData: string;
  PostData: string;

  constructor(private apiservices: Apiservices) { }

  onclickgetdata() {
    console.log("Getdata");
    this.apiservices.getdate()
    .subscribe(
      data => this.GetData = JSON.stringify(data),
      err => console.log(err)
    );
  }

  onclickpostdata(){
    console.log("Postdata");
    this.apiservices.postdata().subscribe(
      data => this.PostData = JSON.stringify(data),
      err => console.log(err)
    );
  }

}