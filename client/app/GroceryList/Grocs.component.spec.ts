import {GroceryListComponent} from  './Grocs.component';
import { TestBed, async } from '@angular/core/testing';


describe('GroceryListComponent',()=>{

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations: [GroceryListComponent]
        }).compileComponents();
    }));

    const createcompo = TestBed.createComponent(GroceryListComponent);
    const app = createcompo.debugElement.componentInstance;

    it('GroceryListComponent works',()=> {
        expect(app).toBeTruthy();
    });

});


