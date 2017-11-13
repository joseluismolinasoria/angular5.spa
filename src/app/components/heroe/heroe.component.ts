import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = null;

  constructor ( private activatedRoute:ActivatedRoute,
                private heroeService:HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroeService.getHeroe(params.id);
    });
  }

  ngOnInit() {
  }

}
