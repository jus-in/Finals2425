import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userProfile = {
    firstName: 'Paul Justin',
    middleInitial: 'O.',
    lastName: 'Mercado',
    mailingAddress: {
      houseNumber: '02',
      street: 'Lopez Jaena St.',
      barangay: 'Aurora Hill',
      city: 'Baguio City',
      province: 'Benguet',
    },
    profileImage: '',
    email: '20226260@s.ubaguio.edu',
    mobile: '09171234567',
  };

  editableUserProfile = { ...this.userProfile };

  onSave() {
    this.userProfile = { ...this.editableUserProfile };
    // You can add logic here to save the updated profile to a backend or local storage
  }

  cancelEdit() {
    this.editableUserProfile = { ...this.userProfile };
  }

  // New method for handling image selection
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // This is where you can handle the image file, e.g., display it or upload it to a server
      const reader = new FileReader();
      reader.onload = () => {
        this.editableUserProfile.profileImage = reader.result as string; // Store the base64 string
      };
      reader.readAsDataURL(file); // Convert the file to base64
    }
  }
}
