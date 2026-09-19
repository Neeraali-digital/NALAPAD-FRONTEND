import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AddOnCoursesService, AddOnCourse } from '../../../services/add-on-courses';

@Component({
  selector: 'app-add-on-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './add-on-course-detail.html'
})
export class AddOnCourseDetail implements OnInit {
  course?: AddOnCourse;

  constructor(
    private route: ActivatedRoute,
    private coursesService: AddOnCoursesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.course = slug ? this.coursesService.getBySlug(slug) : undefined;
    });
  }
}