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

  menu:any = [];
  listarMenu(){
    this.http.GetAll().subscribe(data=>{
      this.menu = data;
    })
  }
}
