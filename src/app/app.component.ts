import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngFor';
  listPessoas = [
    {
      name: 'Aluno_01',
      idade: 26,
    },
    {
      name: 'Aluno_02',
      idade: 36,
    },
    {
      name: 'Aluno_03',
      idade: 46,
    },
    {
      name: 'Aluno_04',
      idade: 56,
    },
  ];
}
