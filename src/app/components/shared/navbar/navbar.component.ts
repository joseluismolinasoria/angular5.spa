import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor ( private _router:Router ) { }

  ngOnInit() {
  }

  buscarHeroe (evento:any, texto:string) {
    event.preventDefault();

    if ( texto.length === 0 ) {
      alert ('No hay dato para buscar');
    }

    this._router.navigate(['/heroes', texto]);
  }

}
