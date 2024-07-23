import { Component, inject } from '@angular/core';
import { ImagenService } from '../services/imagen.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imagen:any

imagenService=inject(ImagenService)

ObtenerImagen(dato:any){
  this.imagen=dato.target.files[0];

}
  storeImagen(nombre:any){
    this.imagenService.saveImage(nombre.value,this.imagen).subscribe({
      next:(data:any)=>{
        console.log(data)
      },error:(error:any)=>{
        console.error(error)
      }
    })
  }
}
