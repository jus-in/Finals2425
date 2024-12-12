import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service'; // Adjust path if needed
import * as bootstrap from 'bootstrap'; // Import Bootstrap

@Component({
  selector: 'app-class-record',
  templateUrl: './class-record.component.html',
  styleUrls: ['./class-record.component.css']
})
export class ClassRecordComponent implements OnInit {
  @ViewChild('studentModal') studentModal!: ElementRef; // Non-null assertion added
  selectedStudent: any = null;
  currentPage: number = 1;
  totalPages: number = 1;
  pages: number[] = [];
  studentRecords: any[] = [];
  paginatedRecords: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.studentRecords = this.dataService.getStudentRecords();
    this.totalPages = Math.ceil(this.studentRecords.length / 5); // Update the number of records per page
    this.pages = Array.from({ length: this.totalPages }, (_, index) => index + 1);
    this.updatePaginatedRecords();
  }

  updatePaginatedRecords(): void {
    const startIndex = (this.currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    this.paginatedRecords = this.studentRecords.slice(startIndex, endIndex);
  }

  // Method to view student details
  viewStudent(studentId: number): void {
    this.selectedStudent = this.dataService.getStudentById(studentId);
    
    // Initialize and show the modal using Bootstrap
    const modalElement = this.studentModal.nativeElement;
    const modal = new bootstrap.Modal(modalElement);  // Bootstrap Modal
    modal.show();  // Show the modal
  }

  // Method to edit student details
  editStudent(studentId: number): void {
    this.router.navigate(['/edit-student-record', studentId]); // Navigate to the edit page with the student ID
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedRecords();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedRecords();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedRecords();
  }
}
