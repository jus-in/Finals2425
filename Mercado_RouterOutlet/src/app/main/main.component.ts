import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet
import { HeaderComponent } from '../header/header.component'; // Import HeaderComponent
import { NavigationComponent } from '../navigation/navigation.component'; // Import Navigationomponent
import { FooterComponent } from '../footer/footer.component'; // Import FooterComponent

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,      
    NavigationComponent,   
    FooterComponent        
  ],
  templateUrl: './main.component.html', 
  styleUrls: ['./main.component.css']    
})
export class MainComponent {}
