import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CollectionComponent } from '../components/collection/collection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, CollectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
