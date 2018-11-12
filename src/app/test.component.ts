import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'my-comp',
    template: 'see this: <button (click)="btnClicked.emit()" class="red button">{{someText}}</button>',
    styles: [
        `
            .red {
                background-color: red;
            }

            .button {
                width: 200px;
                height: 30px;
            }
        `
    ]
})
export class TestComponent {
    @Input() someText: string = 'HELLO DEAR!';
    @Output() btnClicked = new EventEmitter();
}