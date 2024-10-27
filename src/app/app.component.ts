import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { HeaderComponent } from './header/header.component'; 
import { NavigationComponent } from './navigation/navigation.component'; 
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mercado_RouterOutlet';
}
