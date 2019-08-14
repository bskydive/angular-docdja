import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

/**
 * коллеги, может кто знает правила eslint/tslint которые отлавливают ошибку рефакторинга:
 * varName = {propName:propValue}
 * -->
 * propName:propValue 
 * Забываю двоеточие на присвоение менять иногда
 */
export class AppComponent implements OnInit {
  name = 'Angular';

  some1: [
    {id:1},
    {id:2},
    {id:3}
  ];//-->undefined
  
  some2 = [
    {id:1},
    {id:2},
    {id:3}
  ];//-->[{"id":1},{"id":2},{"id":3}]

  ngOnInit(){
    console.log(`some1:${this.some1}\nsome2:${JSON.stringify(this.some2)}`);

  }
}
