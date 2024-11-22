import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  isModalOpen = false;

  // Predefined user profile data
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

  // Editable copy of the user profile
  editableUserProfile = { ...this.userProfile };

  // Open modal
  openEditModal(): void {
    this.isModalOpen = true;
    this.editableUserProfile = { ...this.userProfile };
  }

  // Close modal
  closeEditModal(): void {
    this.isModalOpen = false;
  }

  // Save changes
  onSave(): void {
    this.userProfile = { ...this.editableUserProfile };
    this.closeEditModal();
  }

  // Handle image selection
  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.editableUserProfile.profileImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
