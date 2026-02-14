import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {ChapterInterface} from '../interfaces/chapter-interface';

@Injectable({
  providedIn: 'root',
})
export class ChapterRepository {
    private chapters: WritableSignal<ChapterInterface[]> = signal<ChapterInterface[]>([])

    private current: WritableSignal<ChapterInterface> = signal({} as ChapterInterface)

    getCurrent = computed(() => this.current())

    constructor() {
        this.chapters.update(() => Array(5).fill(0).map((_, i) => ({
            id: i,
            name: `Тип ${i + 1}`
        })))
        this.current.set(this.chapters()[0])
    }

    goTo(id: number): void {
        const chapter = this.chapters().find(c => c.id === id)

        if (!chapter) return

        this.current.set(chapter)
    }

    getAll(): Signal<ChapterInterface[]> {
        return this.chapters.asReadonly()
    }
}
