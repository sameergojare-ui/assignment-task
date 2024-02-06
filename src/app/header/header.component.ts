import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { SharedService } from '../services/shared/shared.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(public sharedService: SharedService) {}

  public ngOnInit() {
  }

  switchLang() {
    if (this.sharedService.currentSelectedLang === 'en')
      this.sharedService.currentSelectedLang = 'ar'
    else
      this.sharedService.currentSelectedLang = 'en';

    this.sharedService.useLanguage();
  }

}
