import {Component} from '@angular/core'

@Component({
    selector:'my-pipes',
    template:`
        <h3>Pipes </h3>
        <h2>String</h2>
        <p>{{name}}</p>
        <p>Upper case - {{name|uppercase}}</p>
        <p>Lower case - {{name|lowercase}}</p>
        <p>Title case - {{name|titlecase}}</p>
        <h2>DateTime</h2>
        <p>{{todayDate}}</p>
        <p>With date format - {{todayDate|date}}</p>
        <p>With date format - {{todayDate|date:"dd/mm/yy"}}</p>
        <p>With date format - {{todayDate|date:"dd/MMM/yyyy"|lowercase}}</p>

        <h2>Number</h2>
            <p>{{amount}}</p>
            <p>{{amount|currency}}</p>
            <p>{{amount|currency:'INR'}}</p>
            <p>{{amount|percent}}</p>
            <p>{{amount|number}}</p>
            <p>{{amount|number:'3.1-2'}}</p>
            <p>{{amount|number:'9.1-2'}}</p>

    `
})

export class AppPipesComponent{
    name :string = "This is from String pipes.";
    amount = 100.234;

    todayDate = new Date();
}

