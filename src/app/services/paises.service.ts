import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';

@Injectable( {
    providedIn: 'root'
} )
export class PaisesService {

    private countries: Country[];

    constructor( private http: HttpClient ) { }

    getCountries(): Promise<Country[]> {
        return new Promise<Country[]>( ( resolve, reject ) => {
            if ( this.countries ) {
                resolve( this.countries );
            } else {
                this.http.get( 'https://restcountries.eu/rest/v2/lang/es' )
                .subscribe( ( countries: Country[] ) => {
                    this.countries = countries;
                    resolve( this.countries );
                } );
            }
        } );
    }

    getCountryBiId( id: string ) {

        if ( this.countries ) {
            return Promise.resolve( this.countries.find( c => c.alpha3Code === id ) );
        } else {
            return this.getCountries().then(() => {
                return Promise.resolve( this.countries.find( c => c.alpha3Code === id ) );
            });
        }

    }
}
