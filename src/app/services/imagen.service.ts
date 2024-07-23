import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  httpClient = inject(HttpClient);

  saveImage(nombre: string, imagen: File) {
    const datos = new FormData();
    datos.append('nombre', nombre);
    datos.append('imagen', imagen);

    return this.httpClient.post('http://127.0.0.1:8000/api/persona', datos);
  }
}
