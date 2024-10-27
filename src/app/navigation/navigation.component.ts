import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
onNavigate(path: string) {
    console.log(`Navigating to: ${path}`); // Log to see if it gets triggered
}

}