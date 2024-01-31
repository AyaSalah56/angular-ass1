import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  uname:string = "aya" ;
  uage:number = 22 ;
  backGround:string = "../../assets/image/1.avif"
}