import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string ="https://www.meuwindows.com/wp-content/uploads/2018/02/tema-pantera-negra.jpg.webp"
  contentTitle:string = "MINHA NOTICIA"
  contentDescription:string ="Olá mundo"

  constructor() { }

  ngOnInit(): void {
  }

}
