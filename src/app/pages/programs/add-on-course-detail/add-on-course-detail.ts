import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AddOnCoursesService, AddOnCourse, ADD_ON_BENEFITS } from '../../../services/add-on-courses';
import { AddOnCourseCard } from '../../../components/add-on-course-card/add-on-course-card';

@Component({
  selector: 'app-add-on-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, AddOnCourseCard],
  templateUrl: './add-on-course-detail.html'
})
export class AddOnCourseDetail implements OnInit {
  course?: AddOnCourse;
  otherCourses: AddOnCourse[] = [];
  readonly benefits = ADD_ON_BENEFITS;

  constructor(
    private route: ActivatedRoute,
    private coursesService: AddOnCoursesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.course = slug ? this.coursesService.getBySlug(slug) : undefined;
      this.otherCourses = this.coursesService.getAll().filter(other => other.slug !== slug);
    });
  }
}
