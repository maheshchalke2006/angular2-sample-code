import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {FormsModule} from '@angular/forms'

import {AppMyComponent} from './app.mycomponent'

import {AppCounterComponent} from './app.countercompnent'

import {StyleOneComponent,StyleTwoComponent} from './app.stylecomponent'



@NgModule({
    declarations:[AppMyComponent,AppCounterComponent,StyleOneComponent,StyleTwoComponent],
    imports:[BrowserModule,FormsModule],
    bootstrap:[AppMyComponent]

})

export class MyModule{
    
}