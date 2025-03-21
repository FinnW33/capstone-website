import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HelloComponent } from "./components/hello/hello.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FooterComponent, NavbarComponent, NgbModule, HelloComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'capstone-website';

  ngOnInit() {
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
