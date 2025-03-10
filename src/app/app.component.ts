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
      age: 26,
    },
    {
      name: 'Aluno_02',
      age: 36,
    },
    {
      name: 'Aluno_03',
      age: 46,
    },
    {
      name: 'Aluno_04',
      age: 56,
    },
  ];

  selectPerson(index: number) {
    console.log(index);
    this.personSelectedIndex = index;
  }
  personSelectedIndex: number | undefined;
}
