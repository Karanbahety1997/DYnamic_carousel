import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  items: any[] = [
    { imageUrl: 'assets/Sk_img1.webp'},
    { imageUrl: 'assets/sikkim_img2.jpg'},
    { imageUrl: 'assets/sikkim_img3.jpg'},
    { imageUrl: 'assets/sikkim_img4.jpg'},    
    // Add more items...
  ];
  currentIndex = 0;
  translateValue = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      this.next();
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  }

  clearTimer(): void {
    clearInterval(this.interval);
  }

  next(): void {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
      this.translateValue -= 100;
    } else {
      this.currentIndex = 0;
      this.translateValue = 0;
    }
  }
}
