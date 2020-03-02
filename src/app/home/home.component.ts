import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastMove: number = 0;

  constructor() {
    document.addEventListener('mousemove', this.onMouseMove)
   }

  ngOnInit() {
  }

  private onMouseMove = (event: MouseEvent) => {
    if(Date.now() - this.lastMove > 50) {
      let intro = document.querySelector(".intro-inner") as HTMLElement;
      intro.style.transform = "translate(-" + event.pageX/100 + "px, -" + event.pageY/100 + "px)"
      intro = document.querySelector("#cheese-img") as HTMLElement;
      intro.style.transform = "translate(-" + event.pageX/100 + "px, -" + event.pageY/100 + "px)"
      this.lastMove = Date.now();
    }
  }

}


