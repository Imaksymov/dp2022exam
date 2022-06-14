import { Component } from '@angular/core';
import { MainLogicService } from './main-logic.service';
import { Table5 } from './table5';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="FrontEnd";

  itemsList:Table5[]=[];

  showAddForm:boolean=false;
  selectedItem?:Table5;

  id:number = 1;

  constructor(private service:MainLogicService) { }

  ngOnInit(): void {
    this.updateTable5s();
  }

  updateTable5s(){
    this.service.getTable5().subscribe(
      (Rest1)=>{
        this.itemsList=Rest1._embedded.table5s;
      }
    );
  }

  addTable5(table5:Table5){
    this.service.postTable5(table5).subscribe(
      (table5)=>{
        this.updateTable5s();
      }
    );
  }

  updateTable5(table5:Table5){
    table5._links =this.selectedItem?._links!;
    
      this.service.putTable5(table5).subscribe(
      ()=>{
        this.updateTable5s();      
      }
    );
    this.onSelect(table5);
  }

  deleteTable5(table5:Table5){
    this.service.deleteTable5(table5).subscribe(
      ()=>{
        this.updateTable5s();

      }
    );
  }

  onSelect(table5:Table5){
    if(this.selectedItem && table5._links.table5==this.selectedItem._links.table5){
      this.selectedItem=undefined;
    } else {
      this.selectedItem=table5;
    }
  }
}
