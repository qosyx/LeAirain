import { VariablesGlobales } from './../../variableGlobales';
import { PersonnelService } from './../../service/personnel.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @Output() signIn: EventEmitter<any> = new EventEmitter<any>();

  personnAcces = { login: '', password: '' };
  constructor(private router: Router, public personnelSvc: PersonnelService, public varGlo: VariablesGlobales) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
  }

  btnAcces = function() {
    this.getAcces();

    // this.router.navigate(['public/Caisse'], { relativeTo: this.route });
    // this.router.navigateByUrl('/public');
  };

  getAcces = function() {
    let postData = { login: '', password: '' };
    postData.login = this.personnAcces.login,
      postData.password = this.personnAcces.password,

      this.personnelSvc.getAcces(postData).subscribe(res => {
        if (res.length === 1) {
          this.varGlo.login=this.personnAcces.login;
          console.log( this.varGlo.login);

          let postData = { typepersonnelid: ''};
          postData.typepersonnelid = res[0].typepersonnelid.toString();
          // console.log(res);
          this.personnelSvc.getTypePersonnelByCriteria(postData).subscribe(rs => {
            let routTo = 'public/' + rs[0].code;
            this.router.navigate([routTo], { relativeTo: this.route });

            // console.log(rs);

          });
          // this.router.navigate(['public/Caisse'], { relativeTo: this.route });
          // getTypePersonnelByCriteria
        } else {
          console.log('Mot de passe erroné');
          // this.personnAcces.login = '';
          // this.personnAcces.password = '';
        }
        // console.log(res[0].typepersonnelid);

      });
  };

}
