import { Component, OnInit } from '@angular/core';
import { TypeproduitService } from '../service/typeproduit.service';

@Component({
  selector: 'app-typeproduit',
  templateUrl: './typeproduit.component.html',
  styleUrls: ['./typeproduit.component.css']
})
export class TypeproduitComponent implements OnInit {
listOfTypeProduit;
typeproduit  = { code: '', libelle: ''};
allMode: string;
checkBoxesMode: string;
  constructor(public typeProdSvc: TypeproduitService) {
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick';
    this.typeProdSvc.getAllTypeProduit().subscribe(res => {
      this.listOfTypeProduit = res;
    });
  }

  ngOnInit() {
  }

  SaveTypeProduit() {
    let postData = { code: '', libelle: ''};
    postData.code = this.typeproduit.code,
    postData.libelle = this.typeproduit.libelle,
    this.typeProdSvc.SaveTypeProduit(postData).subscribe(res => {

      this.typeproduit.code = '';
      this.typeproduit.libelle = '';
      });
  }

getAllTypeProduit() {
  this.typeProdSvc.getAllTypeProduit().subscribe(res => {
    this.listOfTypeProduit =res
  });
}

}
