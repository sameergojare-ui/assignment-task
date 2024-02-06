import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  currentSelectedLang = 'en';
  alignRight: boolean = false;
  expandSidebar: boolean = true;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang(this.currentSelectedLang);
  }

  setLanguage(lang: any) {
    this.currentSelectedLang = lang;
  }

  getLanguage() {
    return this.currentSelectedLang;
  }

  useLanguage() {
    this.alignRight = !this.alignRight;
    this.translate.use(this.currentSelectedLang);
  }

}
