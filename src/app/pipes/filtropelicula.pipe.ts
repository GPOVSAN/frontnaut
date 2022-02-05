import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtropelicula'
})
export class FiltropeliculaPipe implements PipeTransform {

  transform(value: any, ...argu: any[]): any {
    return null;
  }

}
