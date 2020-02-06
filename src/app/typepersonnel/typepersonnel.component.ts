import { PersonnelService } from './../service/personnel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typepersonnel',
  templateUrl: './typepersonnel.component.html',
  styleUrls: ['./typepersonnel.component.css']
})
export class TypepersonnelComponent implements OnInit {
  allMode: string;
  checkBoxesMode: string;
  listOfTypePersonnel;
  typePersonnel = { code: '', libelle: '' };
  constructor(public personnelSvc: PersonnelService) {
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick';
    this.personnelSvc.getAllTypePersonnel().subscribe(res => {
      this.listOfTypePersonnel = res;
    });
  }

  ngOnInit() {
    this.personnelSvc.getAllTypePersonnel().subscribe(res => {
      this.listOfTypePersonnel = res;
    });
  }

  SaveTypePersonnel() {
    let postData = { code: '', libelle: '' };
    postData.code = this.typePersonnel.code,
      postData.libelle = this.typePersonnel.libelle,
      this.personnelSvc.SaveTypePersonnel(postData).subscribe(res => {

        this.typePersonnel.code = '';
        this.typePersonnel.libelle = '';
      });
  }
  getAllTypePersonnel() {
    this.personnelSvc.getAllTypePersonnel().subscribe(res => {
      this.listOfTypePersonnel = res
    });
  }

  checkIfTypePErsonnelExiste(code){
    let postData = {code : ''};
    postData.code = code;
    this.personnelSvc.getTypePersonnelByCriteria(postData).subscribe(rs => {
      console.log(rs);

      if (rs.length >= 1) {
        this.typePersonnel.code = 'Ce code existe deja';
      }
    });
  }

}
