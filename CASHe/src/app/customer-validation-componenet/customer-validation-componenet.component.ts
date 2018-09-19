import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {CustomerValidationService} from '../customer-validation.service';

@Component({
  selector: 'app-customer-validation-componenet',
  templateUrl: './customer-validation-componenet.component.html',
  styleUrls: ['./customer-validation-componenet.component.css']
})
export class CustomerValidationComponenetComponent implements OnInit {
  /*declarations*/
   dataValue:any;

 /* one way databinding using [ngModel]="defaultCustomerTypeValue" in html */
  defaultCustomerTypeValue = "New";
  defaultCustomerStatusValue="DR";
  defaultCustomerId =5569534;

  //local reference
  @ViewChild('f') searchForm :NgForm;
   
  search_data = {
    customerType : '',
    customerId:'',
    customerstatus:''
  }
  constructor(private customerValidationServiceCall : CustomerValidationService) { }

  ngOnInit() {
    
  }
  //first time
  /*onSearch(form:NgForm){
    console.log(form);
   this.customerValidationServiceCall.getCustomersData(form).subscribe(data=>
    {this.dataValue=data;},error=>{console.log(error);});
 
  }*/
  onSearch(){
    this.search_data.customerType  = this.searchForm.value.searchCustomerData.customerType;
    this.search_data.customerId  = this.searchForm.value.searchCustomerData.customerId;
    console.log( this.searchForm.value.searchCustomerData.customerType );
    this.search_data.customerstatus  = this.searchForm.value.searchCustomerData.customerstatus;
    //console.log(this.searchForm);
    this.customerValidationServiceCall.getCustomersData(this.search_data).subscribe(data=>
      {this.dataValue=data;},error=>{console.log(error);});
   }

}
