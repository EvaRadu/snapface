import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];


  ngOnInit(){

    this.faceSnaps = [ 
     {
        title: "Un Chat",
        description: "Miaou",
        imageUrl: "https://spaestrie.qc.ca/wp-content/uploads/2021/04/Gabarit_Blogue-3.png",
        createdDate: new Date(),
        snaps: 350,
        location: "Nice"
      },
      {
        title: "Un Chien",
        description: "Woof",
        imageUrl: "https://www.woopets.fr/assets/img/001/244/1200x675/choisir-chien-japonais.jpg",
        createdDate: new Date(),
        snaps: 6,
        location: "Le parc"
      },
      {
        title: "Un Chaton",
        description: "Meow",
        imageUrl: "https://www.planeteanimaux.com/wp-content/uploads/2020/10/eduquer-un-chaton.jpg",
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: "Un Chat",
        description: "Miaou",
        imageUrl: "https://spaestrie.qc.ca/wp-content/uploads/2021/04/Gabarit_Blogue-3.png",
        createdDate: new Date(),
        snaps: 0,
        location: "Nice"
      },
      {
        title: "Un Chien",
        description: "Woof",
        imageUrl: "https://www.woopets.fr/assets/img/001/244/1200x675/choisir-chien-japonais.jpg",
        createdDate: new Date(),
        snaps: 6,
        location: "Le parc"
      },
      {
        title: "Un Chaton",
        description: "Meow",
        imageUrl: "https://www.planeteanimaux.com/wp-content/uploads/2020/10/eduquer-un-chaton.jpg",
        createdDate: new Date(),
        snaps: 0
      }
    ];
    

  

   
  }
}
