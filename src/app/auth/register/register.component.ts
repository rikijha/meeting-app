import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
email:string
emailform:boolean=true
codeform:boolean=false
passwordform:boolean=false
code
  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit() {
  }

onEmailSubmit(f:NgForm){
  this.email=f.value.email
  this.authService.generateCode(this.email)
      .then(data=>{
        console.log(data['_body'])
        this.emailform=false
        this.codeform=true
      })
}

onCodeSubmit(f:NgForm){
  this.code=f.value.code
  this.authService.verifyCode(this.code,this.email)
      .then(data=>{
        console.log(data['_body'])
          if(data['_body']=== 'true'){
            this.codeform=false
            this.passwordform=true
          }
      })

}

onPasswordSubmit(f:NgForm){
  const password=f.value.passwords.passwordA
  this.authService.setPassword(this.email,password)
      .then(data=>{
      this.route.navigate(['/login'])

      })
}



}
