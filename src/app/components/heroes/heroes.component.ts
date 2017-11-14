import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  texto:string = "";

  constructor( private _heroesService:HeroesService,
               private _router:Router,
               private activatedRoute:ActivatedRoute    ) {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.activatedRoute.params.subscribe( params => {
      if ( !params.texto ) {
        this.texto = "";
        this.heroes = this._heroesService.getHeroes();

      } else {
        this.texto = params.texto;
        this.heroes = this._heroesService.buscarHeroes(this.texto);
      }
    });
  }

  verHeroe(idx:number) {
    this._router.navigate(['/heroe', idx]);
  }

}
