import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-welcome',
    imports: [ButtonModule, RouterLink],
    templateUrl: './welcome.html',
    styleUrl: './welcome.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class Welcome {
}
