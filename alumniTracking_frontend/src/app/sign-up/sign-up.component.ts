import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  ngOnInit() {
  }
  progressbarValue = 1;
  increaseProgressBar(){
    this.progressbarValue= this.progressbarValue+33;
  }
  decreaseProgressBar(){
    this.progressbarValue = this.progressbarValue-33;
  }
}
