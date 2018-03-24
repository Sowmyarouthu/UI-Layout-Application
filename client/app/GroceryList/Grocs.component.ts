import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Grocsservices } from './Grocs.services';
import { ToastComponent } from '../shared/toast/toast.component';
import { Grocs } from '../shared/models/grocs.model';
import grocs from '../../../server/models/grocs';
import {Email} from 'emailjs';



@Component({
  
  templateUrl: './Grocs.component.html',
  
})
export class GroceryListComponent implements OnInit {
  groces: Grocs[] = [] ;
  grocs = new Grocs();
  isLoading: boolean = true;
  isEditing: boolean = false;
  addGrocsForm: FormGroup;
  name = new FormControl('', Validators.required);
  quantity = new FormControl('', Validators.required);
  url = new FormControl('', Validators.required);

  constructor(private grocsservices: Grocsservices, private formBuilder: FormBuilder , private toast: ToastComponent){

  }
  
  ngOnInit() {
    this.getGrocs();
    this.addGrocsForm = this.formBuilder.group({
      name: this.name,
      quantity: this.quantity,
      url: this.url
    });
    
  }
  getGrocs(){
    return this.grocsservices.getGroces().subscribe(
            data => this.groces = data,
            error => console.log(error),
            () => this.isLoading = false
    );
  }
  addGrocs(){
    console.log(this.addGrocsForm.value);
    return this.grocsservices.addGrocs(this.addGrocsForm.value).subscribe(
        response => {
          this.groces.push(response);
          this.addGrocsForm.reset();
          this.toast.setMessage('item added successfully.', 'success');
          },
          error => console.log(error)
    );
  }

  deleteGrocs(grocs : Grocs){
    if(window.confirm('Are you sure you want to permanently delete this item?')){
      this.grocsservices.deleteGrocs(grocs).subscribe(
       () => {
          const pos = this.groces.map(elem =>elem._id).indexOf(grocs._id);
          this.groces.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }
  
  enableEditing(grocs : Grocs){
    this.isEditing = true;
    this.grocs = grocs;
  } 

  editGrocs(grocs: Grocs){
    this.grocsservices.editGrocs(grocs).subscribe(
      ()=>{
        this.isEditing = false;
        this.grocs = grocs;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  cancelEditing() {
    this.isEditing = false;
    this.grocs = new Grocs
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the catBrreds to reset the editing
    this.getGrocs();
  }

  shoplist() {
    const grocslist = this.groces;
    console.log(this.groces);
    this.grocsservices.sendemail(grocslist).subscribe((data)=>{
     console.log(data);
    });
  }
}
