import {Component} from 'angular2/core';

@Component({
    selector: 'my-data-binding',
    template: `
        <h2>{{name}} or are {{age}} years old</h2>
    `,
    inputs: ['name: myName', 'age: myAge']
})
export class myDataBinding {
    name = 'Slinn';
    age = 23;
}
