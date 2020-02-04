import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit() {
  }

  btnClick= function () {
    console.log("ok");
    this.router.navigate(['public/Caisse'], { relativeTo: this.route });
    // this.router.navigateByUrl('/public');
  };
}
