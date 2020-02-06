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
selectedRow ;
btnUpdate = 0;
btnSup = 0;
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
onSelectionChanged(event) {
  console.log(event.selectedRowKeys);

  if (event.selectedRowKeys.length === 1) {
    this.typeproduit.code = event.selectedRowKeys[0].code;
    this.typeproduit.libelle = event.selectedRowKeys[0].libelle;
    this.btnUpdate = 1;

  }   else {
    this.btnUpdate = 0;
    this.typeproduit.code = '';
    this.typeproduit.libelle = '';
  }
  if (event.selectedRowKeys.length > 1) {
    this.btnSup = 1;
  }   else {
    this.btnSup = 0;
  }

}
// btnSup
}
