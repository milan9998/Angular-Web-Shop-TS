import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

    //@Input() images: Slide[] = [];

    images = [
      { imgSrc: 'assets/images/pozadina.png', imgAlt: 'Image 3' },
      { imgSrc: 'assets/images/pozadina1.png', imgAlt: 'Image 1' },
      { imgSrc: 'assets/images/pozadina2.png', imgAlt: 'Image 2' },
      { imgSrc: 'assets/images/pozadina4.png', imgAlt: 'Image 4' },
      { imgSrc: 'assets/images/pozadina5.png', imgAlt: 'Image 5' },
    ];
  
    currentSlide = 0;
  
    ngOnInit() {
      //this.startSlider();
    }
  
    startSlider() {
      setInterval(() => {
        this.nextSlide();
      }, 3000); // Change slide every 3 seconds
    }
  
    prevSlide() {
      this.currentSlide = (this.currentSlide === 0) ? this.images.length - 1 : this.currentSlide - 1;
    }
  
    nextSlide() {
      this.currentSlide = (this.currentSlide === this.images.length - 1) ? 0 : this.currentSlide + 1;
    }

    
}
