import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trCurrency',
  standalone: true
})
export class TrCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    // Türk lirası formatında dönen bir pipe
    return value.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });
  }
}