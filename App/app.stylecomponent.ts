import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-styleone',
    encapsulation: ViewEncapsulation.Native,
    styles:['.css1 {color:yellow}'],
    template:`
        <span class="css1">Style one</span>
    `,
})

export class StyleOneComponent{}

@Component({
    selector: 'my-styletwo',
    encapsulation: ViewEncapsulation.Native,
    styles:['.css1 {color:blue}'],
    template:`
        <span class="css1">Style two</span>
    `,
})

export class StyleTwoComponent{}
