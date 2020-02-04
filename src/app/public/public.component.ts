import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  item = 1;
  name;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.name = this.route.snapshot.params.id;
    console.log(this.name);
    switch (this.name) {
      case 'caisse':
      case 'Caisse':
        this.item = 1;
        console.log(this.item);
        break;
      case 'Type Produit':
        this.item = 3;
        console.log(this.item);
        break;
      case 'Catégorie':
        this.item = 4;
        console.log(this.item);
        break;
        case 'Enregistrer un produit':
          this.item = 6;
          console.log(this.item);
          break;
          case 'Enregistrer stock':
            this.item = 7;
            console.log(this.item);
            break;
      default:

        break;
    }

  }


  sidebarclick(text) {
    console.log(text);

    switch (text) {
      case 'Caisse':
        this.item = 1;
        console.log(this.item);
        break;
      case 'Type Produit':
        this.item = 3;
        console.log(this.item);
        break;
      case 'Catégorie':
        this.item = 4;
        console.log(this.item);
        break;
      case 'Enregistrer personnel':
        this.item = 5;
        console.log(this.item);
        break;
      case 'Enregistrer un produit':
        this.item = 6;
        console.log(this.item);
        break;
        case 'Enregistrer stock':
          this.item = 7;
          console.log(this.item);
          break;

      default:
        break;
    }



  }
}
