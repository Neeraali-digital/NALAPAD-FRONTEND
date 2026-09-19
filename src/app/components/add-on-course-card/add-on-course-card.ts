import { Component, input } from '@angular/core';
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
}
