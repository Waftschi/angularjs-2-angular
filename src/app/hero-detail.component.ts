import { Component, Input } from '@angular/core';


@Component({
    selector: 'hero-detail',
    template: `
        <h2>Windstorm details! {{message}} </h2>
        <div><label>id: </label>1</div>
    `
})
export class HeroDetailComponent {
    @Input() message: string;
}
