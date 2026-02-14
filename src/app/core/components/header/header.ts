import {ChangeDetectionStrategy, Component, computed, inject, OnInit, signal, Signal} from '@angular/core';
import {CheckboxesRepository} from '../../repositories/checkboxes-repository.service';
import {ChapterRepository} from '../../repositories/chapter-repository';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class Header {
    checkboxesRepository: CheckboxesRepository = inject(CheckboxesRepository)
    chapterRepository: ChapterRepository = inject(ChapterRepository)

    totalSum: Signal<number> = this.checkboxesRepository.totalSum
    totalChecked: Signal<number> = this.checkboxesRepository.totalChecked

    currentChapter = this.chapterRepository.getCurrent
}
