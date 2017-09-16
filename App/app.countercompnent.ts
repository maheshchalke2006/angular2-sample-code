//Decoretor 
import {Component, ViewEncapsulation} from '@angular/core'

@Component({
    selector:'my-counter',
    encapsulation: ViewEncapsulation.Emulated,
    //styles:['css1 {color:red}'],
    template:`
        <br />
        <br />
        <h1>Sample program for counter</h1>
        <button [disabled] = "result<=0" (click)="Decrement()">-</button>
        <input type="text" [(ngModel)]="result"/>
        <button [disabled] = "result>=10" (click)="Increment()">+</button>

        <h3> Style Binding</h3>
        <span [ngStyle]="{color:colorValue}"> Style one </span>
        <span [style.color]="colorValue"> Style Two</span>
        <span bind-style.color="colorValue"> Style Three</span>

        <input type="text" [(ngModel)]="colorValue" />
        <h3> Class (css) Binding </h3>
        <span class="myClass">Applying custom css class from index.html</span>
        
    `
})

export class AppCounterComponent{
    colorValue = "red";
    result=0;

    Increment(){
        this.result++
    }

    Decrement(){
        this.result--
    }

}