import { Component, OnInit } from '@angular/core';
import {ProductservService} from '../productserv.service';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  products: any = [];
  // name = new FormControl('');

  mymodel

  constructor(public product_serv:ProductservService) { }

  ngOnInit() {

    this.product_serv.getProduct().subscribe(data => {

      console.log(data)
     
      this.products = data;
      
    console.log(this.products)

      
    });

  }

  refresh(){
    this.mymodel=""
    this.product_serv.getProduct().subscribe(data => {

      console.log(data)
     
      this.products = data;
      
    console.log(this.products)
    })
  }

  valuechange(newValue) {
    this.mymodel = newValue;
    console.log(newValue)

   
      this.product_serv.getProduct().subscribe((data:any) => {

        console.log(data)
  
        if(newValue.length>0){
       
        this.products =  data.filter(e => e.productName.includes(newValue)).sort(function(a, b){
          return a.id - b.id;
      });
        }else{
          this.products = data
        }
        
      console.log(this.products)
  
        
      });
    
   
  }

}