import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    initialSlide: 0,
    speed: 1000,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };
  constructor(private router: Router) { }

  arr = [1, 2, 3, 4];
  onClick() {
    this.router.navigate(['/star']);
  }

  oncardclicked($event) {
    this.router.navigate(['/star', $event]);
    console.log($event);
  }
}
