import { PersonnelService } from './../../service/personnel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  typepersonnelist;
  typepersonnelid;
  personnel = { code: '', nom: '', prenom: '', login: '', password: '' };

  constructor(public personnelSvc: PersonnelService) {
  }

  ngOnInit() {
    this.personnelSvc.getAllTypePersonnel().subscribe(res => {
      this.typepersonnelist = res;
    });
  }
  getAllTypePersonnel() {
    this.personnelSvc.getAllTypePersonnel().subscribe(res => {
      this.typepersonnelist = res;
    });
  }

  SavePersonnel() {
    let postData = { code: '', nom: '', prenom: '', typepersonnelid: '', login: '', password: '' };
    postData.code = this.personnel.code,
    postData.nom = this.personnel.nom,
    postData.prenom = this.personnel.prenom,
    postData.typepersonnelid = this.typepersonnelid.toString(),
    postData.login = this.personnel.login,
    postData.password = "12345"
    this.personnelSvc.SavePersonnel(postData).subscribe(res => {
      this.personnel.code = '',
      this.personnel.nom = '',
      this.personnel.prenom = '',
      this.personnel.login = '';
      this.typepersonnelid = '';
    });
  }

}
