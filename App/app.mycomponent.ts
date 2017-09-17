//app.mycomponent.ts

//Decoretor 
import {Component} from '@angular/core'
import {Form} from '@angular/forms'


@Component({
    selector:'myapp',
    template:`
    <my-pipes></my-pipes>
    <my-condition></my-condition>

    <h1>My App</h1>
    <h3> Binding</h3>
    <h4>One Way : Source to HTML (Property Binding)</h4>
    <div>{{message}}</div>                      <!-- Interpolition style -->
    <div bind-innerHTML="message"></div>        <!-- Bind style can be depreced in new versions -->
    <div [innerHTML]="message"></div>           <!-- Box style -->

    <h4> Event Binding : HTML to source </h4>
    <button on-click="ChangeData()">Click 1</button>
    <button (click)="ChangeData()">Click 2</button>     <!-- Bannana Style -->

    <h4>Two way binding : Source to HTML / HTML to Source</h4>

    <input type="text" bindon-ngModel="message"/>
    <input type="text" [(ngModel)]="message"/>



    <my-counter></my-counter>

    
    <h1> Emulated Component </h1>
    <my-styleone></my-styleone>
    <my-styletwo></my-styletwo>

    <h1> Condition Component </h1>


    `
})

export class AppMyComponent{
    //message = "This is message"
    //message = 99;
    //message = new Date()
    //message:any = {'Name':'Hardik' , 'Address': 'Wakad'}
    message:any

    ChangeData(){
        this.message = new Date();
    }

}