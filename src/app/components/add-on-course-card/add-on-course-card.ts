import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddOnCourse } from '../../services/add-on-courses';

@Component({
  selector: 'app-add-on-course-card',
  imports: [RouterLink],
  templateUrl: './add-on-course-card.html',
  host: { class: 'block' },
})
export class AddOnCourseCard {
  course = input.required<AddOnCourse>();
  index = input.required<number>();
  indexLabel = computed(() => String(this.index()).padStart(2, '0'));
}
