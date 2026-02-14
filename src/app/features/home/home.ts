import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {Header} from '../../core/components/header/header';
import {CheckboxesRepository} from '../../core/repositories/checkboxes-repository.service';
import { CheckboxModule } from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {Menu} from '../../core/components/menu/menu';
import {ChapterRepository} from '../../core/repositories/chapter-repository';

@Component({
    selector: 'app-home',
    imports: [
        Header,
        CheckboxModule,
        FormsModule,
        Menu
    ],
    templateUrl: './home.html',
    styleUrl: './home.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class Home {
    checkboxesRepository = inject(CheckboxesRepository);
    chapterRepository = inject(ChapterRepository)

    checkboxes = computed(() => {
        return this.checkboxesRepository.getByChapter(this.chapterRepository.getCurrent().name)
    })

    toggleCheckbox(id: number, checked: boolean) {
        this.checkboxesRepository.updateCheckbox(id, checked)
    }
}
