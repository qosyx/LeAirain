import { PersonnelService } from './../service/personnel.service';
import { VariablesGlobales } from './../variableGlobales';
import { ProduitServiceService } from './../service/produit-service.service';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stock = { reference: '', libelle: '', quantite: '' };
  listOfStock = [];
  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
}
  produitid;
  produitName;
  listOfProduct;
  personnelid;
  allMode: string;
  checkBoxesMode: string;
  constructor(public personnelSvc: PersonnelService, private nservice: NotificationsService,
              public produitSvc: ProduitServiceService, public varGlobal: VariablesGlobales) {
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick';
  }

  ngOnInit() {
    this.produitSvc.getAllProduit().subscribe(res => {
      this.listOfProduct = res;
      console.log(res);
      // this.nservice.success('ok');

    });
    const postdata = { login: this.varGlobal.login };
    this.personnelSvc.getAcces(postdata).subscribe(res => {
      this.personnelid = res[0].personnelid;
      console.log(res);
    });
  }
  SaveStock() {

    const pData = { code: '', produitid: '' };
    pData.code = this.stock.reference;
    pData.produitid = this.produitid.toString();
    this.produitSvc.getStockByCriteria(pData).subscribe(res => {
      if (res.length > 0) {
        console.log('Produit deja enregistre avec ce code');

        this.stock.reference = 'Produit deja enregistre avec ce code';
        this.stock.reference = '';
        this.stock.reference = '';
        this.stock.quantite = '';
      } else {
        const postData = {
          code: '', libelle: '', quantite: '',
          dateacquisition: '', magasinid: '', personnelid: '',
          produitid: ''
        };
        postData.code = this.stock.reference;
        postData.libelle = this.stock.reference;
        postData.quantite = this.stock.quantite;
        postData.dateacquisition = this.getDate();
        postData.magasinid = '1';
        postData.personnelid = this.personnelid.toString();
        postData.produitid = this.produitid.toString();
        // console.log(postData);

        this.produitSvc.SaveStock(postData).subscribe(res => {
          // this.getStockByCriteria();
          this.getStockWithProductName();
          this.stock.reference = '';
          this.stock.reference = '';
          this.stock.quantite = '';

        });
      }


    });




  }

  getDate() {
    let mydate;
    const year = new Date().getUTCFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    mydate = day + '-' + month + '-' + year;
    return mydate;
  }
  getStockByCriteria() {
    const postData = {
      code: ''
    };
    postData.code = this.stock.reference;
    this.produitSvc.getStockByCriteria(postData).subscribe(res => {
      this.listOfStock = res;
      console.log(res);

    });
  }

  getStockWithProductName() {
    this.listOfStock = [];
    const result = {
      acquisitionid: '', code: '', dateacquisition: '', libelle: '',
      magasinid: '', personnelid: '', produitid: '', produitName: '', quantite: '', visible: ''
    };

    const postData = {
      code: ''
    };
    const post2 = {
      produitid: ''
    };
    postData.code = this.stock.reference;
    this.produitSvc.getStockByCriteria(postData).subscribe(res => {

      for (let index = 0; index < res.length; index++) {
        post2.produitid = res[index].produitid.toString();
        result.acquisitionid = res[index].acquisitionid;
        result.code = res[index].code;
        result.dateacquisition = res[index].dateacquisition;
        result.libelle = res[index].libelle;
        result.magasinid = res[index].magasinid;
        result.personnelid = res[index].personnelid;
        result.produitid = res[index].produitid;
        result.quantite = res[index].quantite;
        result.visible = res[index].visible;
        this.produitSvc.getProduitByCriteria(post2).subscribe(rs => {
          result.produitName = rs[0].libelle;
          console.log(res[index].produitid);
          // return this.produitName;
        });
        // result.produitName = this.getProductNameById(res[index].produitid.toString());
        this.listOfStock.push(result);
        console.log(this.listOfStock);


      }

      console.log(this.listOfStock);


    });
  }

  getProductNameById(produitid) {


    const postData = {
      produitid: ''
    };
    postData.produitid = produitid;
    this.produitSvc.getProduitByCriteria(postData).subscribe(res => {
      this.produitName = res[0].libelle;
      // console.log(res[0].libelle);
      // return this.produitName;
    });
    console.log(this.produitName);

    return this.produitName;
  }
}
