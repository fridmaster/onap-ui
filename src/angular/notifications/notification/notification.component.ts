import {Component, Input, Output, EventEmitter} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NotificationType} from "../utilities/notification.config";
//import { trigger, state, style, animate, transition} from '@angular/animations';


@Component({
    selector: "sdc-notification",
    templateUrl: './notification.component.html'
})
export class NotificationComponent {

    @Input() position: string = 'top';
    @Input() duration: number;
    @Input() type: string;
    @Input() notifyTitle: string;
    @Input() notifyText: string;
    @Input() fade: string;
    @Input() sticky: boolean;
    @Input() location: string;
    @Output() destroyComponent = new EventEmitter<boolean>();

    public destroy : boolean = false;

    public dismiss(): void {
        console.log("clicked dismiss");
        this.destroy = true;
        this.destroyComponent.emit(true);
    }
}
