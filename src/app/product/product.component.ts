import { TypeproduitService } from './../service/typeproduit.service';
import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../service/produit-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allMode: string;
  checkBoxesMode: string;
  produit = { code: '', libelle: '', typeproduitid: '1' };
  typeproduitlist: any ;
  typeproduitid: any;
  libelle;
  listOfProduit;
  constructor(public prodSvc: ProduitServiceService, public typeProdSvc: TypeproduitService) {
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick';
    this.typeProdSvc.getAllTypeProduit().subscribe(res => {
      this.typeproduitlist = res;
    });
    this.prodSvc.getAllProduit().subscribe(res => {
      this.listOfProduit = res;
      console.log(res);

    });
  }

  ngOnInit() {
  }
  SaveProduit() {
    let postData = { code: '', libelle: '', typeproduitid: '' };
    postData.code = this.produit.code,
    postData.libelle = this.produit.libelle,
    postData.typeproduitid = this.typeproduitid.toString(),
    this.prodSvc.SaveProduit(postData).subscribe(res => {
      this.prodSvc.getAllProduit().subscribe(re => {
        this.listOfProduit = re;
      });
      this.produit.code = '';
      this.produit.libelle = '';
      this.typeproduitid = '';
      });
  }


}
