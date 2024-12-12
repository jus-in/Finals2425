import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service'; // Adjust path if needed

@Component({
  selector: 'app-edit-student-record',
  templateUrl: './edit-student-record.component.html',
  styleUrls: ['./edit-student-record.component.css']
})
export class EditStudentRecordComponent implements OnInit {
  studentId: number = 0;
  student: any = {
    id: null,
    name: '',
    email: '',
    activityType: '',
    relatedInfo: ''
  };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve 'studentId' from the route parameter
    const id = this.route.snapshot.paramMap.get('studentId');
    if (id) {
      this.studentId = +id; // Convert to a number
      this.student = this.dataService.getStudentById(this.studentId); // Fetch student details
    }
  }

  updateStudent() {
    // Update student data in the data service
    this.dataService.updateStudent(this.student);

    // Navigate back to the class record page
    this.router.navigate(['/class-record']);
  }
}
