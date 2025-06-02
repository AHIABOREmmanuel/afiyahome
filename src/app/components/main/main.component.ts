import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    // Le code d'initialisation sera déplacé dans ngAfterViewInit
  }

  ngAfterViewInit() {
    // Attendre que le DOM soit complètement chargé
    setTimeout(() => {
      // Initialize Owl Carousel for Men's section
      $('.owl-men-item').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          }
        }
      });

      // Initialize Owl Carousel for Women's section
      $('.owl-women-item').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          }
        }
      });

      // Initialize Owl Carousel for Kids' section
      $('.owl-kid-item').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          }
        }
      });
    }, 0);
  }
}
