import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {CheckboxInterface} from '../interfaces/checkbox-interface';

@Injectable({
  providedIn: 'root',
})
export class CheckboxesRepository {
    private checkboxes: WritableSignal<CheckboxInterface[]> = signal<CheckboxInterface[]>([]);

    constructor() {
        this.checkboxes.update(() => Array(25).fill(0).map((_, i) => ({
            id: i,
            checked: false,
            value: i + 1,
            title: `Item ${i + 1}`,
            chapter: `Тип ${~~(i / 5) + 1}`
        })))
    }

    getAll(): Signal<CheckboxInterface[]> {
        return this.checkboxes.asReadonly();
    }

    getByChapter(chapter: string) {
        return this.checkboxes().filter(c => c.chapter == chapter)
    }

    totalSum = computed(() =>
        this.checkboxes()
            .reduce((sum, item) => item.checked ? sum + item.value : sum, 0)
    )

    totalChecked = computed(() =>
        this.checkboxes()
            .reduce((sum, item) => item.checked ? sum + 1 : sum, 0)
    )

    updateCheckbox(id: number, value: boolean): void {
        this.checkboxes.update(v =>
            v.map(checkbox =>
                checkbox.id === id
                    ? { ...checkbox, checked: value }
                    : checkbox
            )
        )
    }
}
