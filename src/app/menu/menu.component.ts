import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../service/servicios.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private http:ServiciosService) { }

  ngOnInit(): void {
  }
  mntMenu={
    idMaestro:0,
    opcion: 1,
    estado: 1
  }
  menu:any = [];

  listarMenu(){
    this.http.fapiGetParameter('listarMenu',this.mntMenu.opcion+'/'+this.mntMenu.estado).subscribe(data=>{
      this.menu=data[0];
    })
  }
}
