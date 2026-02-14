import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MenuItem, MenuItemCommandEvent} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {ChapterRepository} from '../../repositories/chapter-repository';

@Component({
    selector: 'app-menu',
    imports: [
        MenuModule
    ],
    templateUrl: './menu.html',
    styleUrl: './menu.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class Menu {
    chapterRepository = inject(ChapterRepository)

    chapters = this.chapterRepository.getAll()

    items: MenuItem[] = this.chapters().map(({ name, id }) => ({
        label: name,
        command: () => this.chapterRepository.goTo(id)
    }));
}
