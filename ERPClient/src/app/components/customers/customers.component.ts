import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { CustomerModel } from '../../models/customer.model';
import { HttpService } from '../../services/http.service';
import { SwalService } from '../../services/swal.service';
import { CustomerPipe } from '../../pipes/customer.pipe';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [SharedModule, CustomerPipe],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent  implements OnInit {
  customers: CustomerModel[] = [];
  search:string = "";

  constructor(
    private http: HttpService,
    private swal: SwalService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.http.post<CustomerModel[]>("Customers/GetAll",{},(res)=> {
      this.customers = res;
    });
  }
}
