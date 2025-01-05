import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-devoirs',
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
  ],  
  templateUrl: './devoirs.component.html',
  styleUrl: './devoirs.component.css'
})
export class DevoirsComponent {

  searchText : string | undefined;
}
