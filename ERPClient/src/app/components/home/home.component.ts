import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { SwalService } from '../../services/swal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private swal: SwalService){
    this.swal.callSwal("Kaydı Sil","Kayıt silinsin mi?", ()=> {
      alert('Silme işlemi başarılı');
    });
  }
}