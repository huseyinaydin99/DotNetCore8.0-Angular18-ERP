import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { CustomerModel } from '../../models/customer.model';
import { HttpService } from '../../services/http.service';
import { SwalService } from '../../services/swal.service';
import { CustomerPipe } from '../../pipes/customer.pipe';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [SharedModule, CustomerPipe],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers: CustomerModel[] = [];
  search: string = "";

  createModel: CustomerModel = new CustomerModel();

  @ViewChild("createModalCloseBtn") createModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;

  constructor(
    private http: HttpService,
    private swal: SwalService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.http.post<CustomerModel[]>("Customers/GetAll", {}, (res) => {
      this.customers = res;
    });
  }

  create(form: NgForm) {
    if (form.valid) {
      this.http.post<string>("Customers/Create", this.createModel, (res) => {
        this.swal.callToast(res);
        this.createModel = new CustomerModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }

  deleteById(model: CustomerModel) {
    this.swal.callSwal("Müşteri Sil?", `${model.name} müşterisini silmek istiyor musunuz?`, () => {
      this.http.post<string>("Customers/DeleteById", { id: model.id }, (res) => {
        this.getAll();
        this.swal.callToast(res, "info");
      });
    })
  }
}