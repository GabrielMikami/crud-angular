import { Component } from '@angular/core';

import { Pessoa } from '../model/pessoa';
import { PessoasService } from '../services/pessoas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pessoas',
  standalone: false,
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.scss'
})
export class PessoasComponent {

  pessoas$: Observable<Pessoa[]>;
  displayedColumns = ['_id','nome','documento'];

  constructor(private pessoasService: PessoasService) {
    this.pessoas$ = this.pessoasService.list();
  }

  ngOnInit() {
  }
}
