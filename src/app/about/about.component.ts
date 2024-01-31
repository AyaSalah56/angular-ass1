import { Component } from '@angular/core';


interface product{
  img:string ;
  title:string ;
  description:string ;
  price:number 
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
   product:product[] = [
    {img: './assets/image/1.avif' , title:"Maldives", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:30000 },
    {img: './assets/image/2.avif' , title:"Bali ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:4000 },
    {img: './assets/image/11.avif' , title:"Bora Bora", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:60000 },
    {img: './assets/image/10.jpg' , title:"Palawan ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:10000 },
    {img: './assets/image/5.avif' , title:"Kauai", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:30000 },
    {img: './assets/image/6.jpg' , title:"Seychelles ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:35000 },
    {img: './assets/image/7.avif' , title:"Santorini ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:33000 },
    {img: './assets/image/8.avif' , title:"Bora Bora ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:36000 },
    {img: './assets/image/10.jpg' , title:"Santorini ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:35000 },
    {img: './assets/image/4.avif' , title:"Galapagos ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:36000 },
    {img: './assets/image/1.avif' , title:"Mallorca ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:38000 },
    {img: './assets/image/5.avif' , title:"The Azores ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:23000 },
    {img: './assets/image/5.avif' , title:"Kauai", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:30000 },
    {img: './assets/image/6.jpg' , title:"Seychelles ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:35000 },
    {img: './assets/image/7.avif' , title:"Santorini ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:33000 },
    {img: './assets/image/8.avif' , title:"Bora Bora ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:36000 },
    {img: './assets/image/10.jpg' , title:"Santorini ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:35000 },
    {img: './assets/image/4.avif' , title:"Galapagos ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:36000 },
    {img: './assets/image/1.avif' , title:"Mallorca ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:38000 },
    {img: './assets/image/5.avif' , title:"The Azores ", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error voluptate " , price:23000 },
  ]

}
