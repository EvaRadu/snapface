import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [ 
        {
           id: 1,
           title: "Un Chat",
           description: "Miaou",
           imageUrl: "https://spaestrie.qc.ca/wp-content/uploads/2021/04/Gabarit_Blogue-3.png",
           createdDate: new Date(),
           snaps: 350,
           location: "Nice"
         },
         {
           id: 2,
           title: "Un Chien",
           description: "Woof",
           imageUrl: "https://www.woopets.fr/assets/img/001/244/1200x675/choisir-chien-japonais.jpg",
           createdDate: new Date(),
           snaps: 6,
           location: "Le parc"
         },
         {
           id: 3,
           title: "Un Chaton",
           description: "Meow",
           imageUrl: "https://www.planeteanimaux.com/wp-content/uploads/2020/10/eduquer-un-chaton.jpg",
           createdDate: new Date(),
           snaps: 0
         },
         {
           id: 4,
           title: "Un Chat",
           description: "Miaou",
           imageUrl: "https://spaestrie.qc.ca/wp-content/uploads/2021/04/Gabarit_Blogue-3.png",
           createdDate: new Date(),
           snaps: 0,
           location: "Nice"
         },
         {
           id: 5,
           title: "Un Chien",
           description: "Woof",
           imageUrl: "https://www.woopets.fr/assets/img/001/244/1200x675/choisir-chien-japonais.jpg",
           createdDate: new Date(),
           snaps: 6,
           location: "Le parc"
         },
         {
           id: 6,
           title: "Un Chaton",
           description: "Meow",
           imageUrl: "https://www.planeteanimaux.com/wp-content/uploads/2020/10/eduquer-un-chaton.jpg",
           createdDate: new Date(),
           snaps: 0
         }
       ];

       getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
       }

       getFaceSnapById(faceSnapId: number) : FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap){
            throw new Error('FaceSnap not found!');
        }
        else{
            return faceSnap;
        }
       }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
      const faceSnap: FaceSnap = {
          ...formValue,
          snaps: 0,
          createdDate: new Date(),
          id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
      };
      this.faceSnaps.push(faceSnap);
  }



}