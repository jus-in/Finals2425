import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private studentRecords: any[] = [
    { id: 1, name: 'Christian Calagui', email: 'christiancalagui@s.ubaguio.edu', activityType: 'Lecture', relatedInfo: 'Info 1' },
    { id: 2, name: 'Ian Julius Visperas', email: 'ianjuliusvisperas@s.ubaguio.edu', activityType: 'Laboratory', relatedInfo: 'Info 2' },
    { id: 3, name: 'Averie Gaspar', email: 'averiegaspar@s.ubaguio.edu', activityType: 'Lecture', relatedInfo: 'Info 3' },
    { id: 4, name: 'Melchizidek Martinez', email: 'melchizidekmartinez@s.ubaguio.edu', activityType: 'Laboratory', relatedInfo: 'Info 4' },
    { id: 5, name: 'Aljon Pena', email: 'aljonpena@s.ubaguio.edu', activityType: 'Lecture', relatedInfo: 'Info 5' },
    { id: 6, name: 'Prinz Paulo', email: 'prinzpaulo@s.ubaguio.edu', activityType: 'Laboratory', relatedInfo: 'Info 6' },
    { id: 7, name: 'Orlando Paguirigan', email: 'orlandopaguirigan@s.ubaguio.edu', activityType: 'Laboratory', relatedInfo: 'Info 7' },
  ];

  constructor() {}

  // Get student records
  getStudentRecords() {
    return this.studentRecords;
  }

  // Get student by ID
  getStudentById(id: number) {
    return this.studentRecords.find(student => student.id === id);
  }

  // Update student record
  updateStudent(updatedStudent: any) {
    const index = this.studentRecords.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.studentRecords[index] = updatedStudent;
    }
  }
}
