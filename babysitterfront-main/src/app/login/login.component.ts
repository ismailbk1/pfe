import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParentService } from '../services/parent.service';
import { parent } from '../models/parent.model';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/loginRequest.model';
import { Admin } from '../models/Admin.model';
import { SessionService } from '../services/Session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    email!:string;
    password!:string ;
    message!: string;

    errorMessage= '';
    successMessage!:string ;
    invalidLogin=false ;
    loginSuccess=false ;
   

  inputFormulaire!:FormGroup ;
  constructor( private fb:FormBuilder ,
    private sessionservice:SessionService,
    private parentServ: ParentService,private authService:AuthService, private router: Router){
   
    
   
    this.inputFormulaire=this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        role:['', Validators.required]
      }
    )
  
  
  }
  get f() {
    return this.inputFormulaire.controls;
  }
  onSubmit(){

  }
  
  ngOnInit(): void {
   
    
  }

  Login() {
    if (this.inputFormulaire.invalid) {
      return;
    }
  
    const selectedRole = this.inputFormulaire.value.role;
    let loginRequest: LoginRequest | undefined;
  
    if (selectedRole === 'admin') {
      loginRequest = {
        email: this.inputFormulaire.value.email,
        password: this.inputFormulaire.value.password,
        role: 'admin'
      };
    } else if (selectedRole === 'babysitter') {
      loginRequest = {
        email: this.inputFormulaire.value.email,
        password: this.inputFormulaire.value.password,
        role: 'babysitter'
      };
    } else if (selectedRole === 'parent') {
      loginRequest = {
        email: this.inputFormulaire.value.email,
        password: this.inputFormulaire.value.password,
        role: 'parent'
      };
    }
  
    this.authService.login(loginRequest).subscribe(
      response => {
        // Store the logged-in user information in sessionStorage
        sessionStorage.setItem('loggedInUser', JSON.stringify({ user: response, role: selectedRole }));      
        console.log("Success");
        // Redirect to the corresponding dashboard based on the user's role
        if (selectedRole === 'admin') {
          // Redirect to admin dashboard
          console.log("login inside the admin");
          console.log(response);
          this.router.navigate(['/acceuiladm']);

        } else if (selectedRole === 'babysitter') {
          console.log("login inside the babysitter");
         
          // Redirect to babysitter dashboard
         this.router.navigate(['/accbb'])

        } else if (selectedRole === 'parent') {
          console.log("login inside the parent");
          
          // Redirect to parent dashboard
          this.router.navigate(['/acceuil'])
        }
      },
      error => {
        console.log(loginRequest);
        
        console.log("Error");
        console.error(error);
        this.errorMessage = 'Erreur lors de la connexion. Veuillez vérifier vos informations.';
        // Clear the error message after 5 seconds
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000); 
      }
    );
  }
  
  
  
  
  
}
