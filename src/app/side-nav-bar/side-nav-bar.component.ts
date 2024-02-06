import { Component } from '@angular/core';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.css'
})
export class SideNavBarComponent {

  constructor(public sharedService: SharedService) {}

}
