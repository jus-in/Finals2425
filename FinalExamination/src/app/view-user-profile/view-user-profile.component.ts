import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent implements OnInit {
  user = {
    name: 'Paul Justin O. Mercado',
    email: '20226260@s.ubaguio.edu',
    courses: ['Introduction to Applications Development', 'Software Engineering', 'Methods of Research']
  };

  // A flag to show/hide the edit form
  isEditing = false;

  constructor() { }

  ngOnInit(): void {}

  // Toggle the editing state
  editProfile(): void {
    this.isEditing = true;
  }

  // Save changes after editing
  saveProfile(): void {
    // Here, you would typically save the updated profile data to a server
    console.log('Updated Profile:', this.user);
    this.isEditing = false;
  }

  // Cancel editing
  cancelEdit(): void {
    this.isEditing = false;
  }
}
