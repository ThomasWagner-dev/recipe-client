import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  public unitOptions = [
    {
      name: 'g',
      value: 'g'
    },
    {
      name: 'kg',
      value: 'kg'
    },
    {
      name: 'ml',
      value: 'ml'
    },
    {
      name: 'l',
      value: 'l'
    },
    {
      name: 'cl',
      value: 'cl'
    },
    {
      name: 'dl',
      value: 'dl'
    },
    {
      name: 'tsp',
      value: 'tsp'
    },
    {
      name: 'tbsp',
      value: 'tbsp'
    },
    {
      name: 'cup',
      value: 'cup'
    },
    {
      name: 'oz',
      value: 'oz'
    },
    {
      name: 'lb',
      value: 'lb'
    },
    {
      name: 'pt',
      value: 'pt'
    },
    {
      name: 'qt',
      value: 'qt'
    },
    {
      name: 'gal',
      value: 'gal'
    },
    {
      name: 'pcs',
      value: 'pcs'
    }
  ];
  defaultUnit = 'pcs';
  constructor() { }
}
