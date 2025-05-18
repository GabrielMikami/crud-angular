import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pessoa } from '../model/pessoa';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private readonly API = 'pessoas.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Pessoa[]>(this.API)
    .pipe(
      first(),
      delay(2000),
      tap(pessoas => console.log(pessoas))
    );
  }
}
