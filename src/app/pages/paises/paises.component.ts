import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

    countries: Country[] = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit() {
      this.paisesService.getCountries().then(countries => this.countries = countries);
  }

}
