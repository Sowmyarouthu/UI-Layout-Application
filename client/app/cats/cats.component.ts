import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {CatBreedService} from '../services/catBreed.service';
import { CatService } from '../services/cat.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Cat } from '../shared/models/cat.model';
import { CatBreed } from '../shared/models/catBreed.model';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  breednames :any;
  selectbreed: any;
  cat = new Cat();
  cats: Cat[] = [];
  isLoading = true;
  isEditing = false;
  

  addCatForm: FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  breed = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);
  food = new FormControl([[], Validators.required]);

  dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

  constructor(private catService: CatService,
              private CatBreedService: CatBreedService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    
  this.getCats();
    this.addCatForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      breed: this.breed,
      weight: this.weight,
      food:this.food
    });
   this.dropdownList = [
                              {"id":1,"itemName":"Tuna"},
                              {"id":2,"itemName":"Chicken"},
                              {"id":3,"itemName":"Beef"},
                              {"id":4,"itemName":"Grapes"},
                              {"id":5,"itemName":"Raisin"},
                              {"id":6,"itemName":"Avacado"},
                              {"id":7,"itemName":"Turkey"},
                              {"id":8,"itemName":"carrots"},
                              {"id":9,"itemName":"Zucchini"},
                              {"id":10,"itemName":"Lettuce"}
                            ];
  this.selectedItems = [
                        {"id":2,"itemName":"Chicken"},
                        {"id":3,"itemName":"Beef"},
                        {"id":4,"itemName":"Grapes"},
                        {"id":5,"itemName":"Raisin"},
                        {"id":6,"itemName":"Avacado"},
                      ];
                    
  this.dropdownSettings = { 
                            text: " Select Food      ",
                            selectAllText: 'Select All',
                            unSelectAllText: 'UnSelect All',
                            classes:"myclass custom-class",
                            buttonClasses: 'btn btn-default btn-block'
                          };   
  }



  getCats() {
    this.catService.getCats().subscribe(
      data => this.cats = data,
      error => console.log(error),
      () => this.isLoading = false
    );
    this.CatBreedService.getCatBreeds().subscribe(name => this.breednames = name);
  }

  addCat() {
    this.catService.addCat(this.addCatForm.value).subscribe(
      res => {
        this.cats.push(res);
        this.addCatForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
    
  }

  enableEditing(cat: Cat) {
    this.isEditing = true;
    this.cat = cat;
  }

  cancelEditing() {
    this.isEditing = false;
    this.cat = new Cat();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getCats();
  }

  editCat(cat: Cat) {
    this.catService.editCat(cat).subscribe(
      () => {
        this.isEditing = false;
        this.cat = cat;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteCat(cat: Cat) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.catService.deleteCat(cat).subscribe(
        () => {
          const pos = this.cats.map(elem => elem._id).indexOf(cat._id);
          this.cats.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

   onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }

}
