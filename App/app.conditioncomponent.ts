import {Component} from '@angular/core'  

@Component({
    selector:'my-condition',
    template:`
        <h2> Condition </h2>
        <button (click)="ClickOne()">Click 1</button>
        
        <h3>1. If Condition with square bracket</h3>
        <p [hidden]="ShowOne">1. Say Hi</p>

        <h3>2.If Condition with ngif </h3>
        <p *ngIf="ShowOne">2. Say Hi<p>

        <h3>3. If Condition with ngif !condition</h3>
        <p *ngIf="ShowOne">3. Say Hi<p>

        <h3>4. If Condition with ngif ==condition</h3>
        <p *ngIf="ShowOne==true">4. Say Hi<p>

        <h3>5. If Condition with ngif condition</h3> <!-- use safly can be deprecated -->
        <p template="ngIf ShowOne"> 5. Say Hi </p>

        <h3>6. If Condition with ng-template tag</h3> <!-- use safly can be deprecated -->
        <ng-template [ngIf]="ShowOne">6.Say Hi</ng-template>

        <h1> If else</h1>
        <button (click)="ClickTwo()">Click 2</button>

        <h3>7. If else condition with ifelse condition</h3>
        <p *ngIf="ShowTwo; else e"> 7. Say Hi </p>
        <ng-template #e>7. Say Bye.</ng-template>

        <h3>8. 9.  If else condition with template syntax</h3>    
        <p *ngIf="ShowTwo;then thenBlock; else elseBlock">testtesttest</p>
        <ng-template #thenBlock>8. Say Hi.</ng-template>
        <ng-template #elseBlock>9. Say Bye.</ng-template>

        <h3> Condition with switch (using if condition)</h3>
        <button (click)="ClickNext()" >Click Switch</button>
        {{counter}}

        <p *ngIf="counter==1">Tab1</p>
        <p *ngIf="counter==2">Tab2</p>
        <p *ngIf="counter==3">Tab3</p>
        <p *ngIf="counter">Tab (Default)</p>

        <h3> Condition with switch </h3>
        <p [ngSwitch]="counter">
            <span *ngSwitchCase="1">Tab 1 </span>
            <span *ngSwitchCase="2">Tab 2 </span>
            <span *ngSwitchCase="3">Tab 3 </span>
            <span *ngSwitchDefault>Tab (Default) </span>
        </p>

        <h3> For loop </h3>
        {{cars}}
        <ul *ngFor="let car of cars; let i = index;let f=first; let o=odd">
            <li>{{i+1}} {{car}} {{f}} {{o}}</li>
        </ul>
        <br />

        index, first, last , odd , evern

        <h3> For loop with table format </h3>
        <table *ngFor="let emp of Employee;">
            <tr>
                <td>{{emp.Name}}</td>
                <td>{{emp.Address}}</td>
            </tr>
        </table>

    `
})

export class AppConditionComponent{

    ShowOne:boolean=true;
    ShowTwo:boolean=true;
    counter=0;
    cars=['one','two','three'];

    Employee = [
        {'Name':'Hardik','Address':'wakad'},
        {'Name':'Viral','Address':'wakad'},
        {'Name':'Ramesh','Address':'wakad'}

    ]

    ClickOne(){
        this.ShowOne=!this.ShowOne;
    }

    ClickTwo(){
        this.ShowTwo=!this.ShowTwo;
    }
    ClickNext(){
        this.counter++;
    }

}