import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  standalone: true,
})
export class App {
    private readonly titleService = inject(Title);

    ngOnInit() {
        this.setMetaTags()
    }

    setMetaTags() {
        this.titleService.setTitle("Test Selectel App");
    }
}
