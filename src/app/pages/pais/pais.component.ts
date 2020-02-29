import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/country.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component( {
    selector: 'app-pais',
    templateUrl: './pais.component.html',
    styleUrls: ['./pais.component.css']
} )
export class PaisComponent implements OnInit {

    country: Country;

    constructor( private activatedRoute: ActivatedRoute,
                 private route: Router,
                 private paisesService: PaisesService ) { }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get( 'id' );

        if ( !id ) {
            return this.route.navigate( ['/'] );
        } else {
            this.paisesService.getCountryBiId( id )
            .then( country => {
                if ( !country ) {
                    return this.route.navigate( ['/'] );
                }
                this.country = country;

                console.log(this.country);
            } );
        }
    }

}
