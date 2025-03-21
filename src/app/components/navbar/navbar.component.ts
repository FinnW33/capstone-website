import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Initial check for scroll position
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
      if (window.scrollY > 0) {
        mainNav.classList.add('navbar-shrink');
      } else {
        mainNav.classList.remove('navbar-shrink');
      }
    }
  }
}
