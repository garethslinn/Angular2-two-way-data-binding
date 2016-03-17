import {Component} from 'angular2/core';
import {myDataBinding} from './myDataBinding.component';
import {myTest} from './test.component';

@Component({
    selector: 'my-app',
    template: `
        <input type="text" [(ngModel)]="name" />
        <my-data-binding [myName]="name" [myAge]="age"></my-data-binding>
        <my-test></my-test>
    `,
    directives: [myDataBinding, myTest]
})
export class AppComponent {
    name = 'Gareth';
    age = 31;
}
