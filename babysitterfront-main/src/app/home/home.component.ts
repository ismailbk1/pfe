import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl, AbstractControl, ValidationErrors} from '@angular/forms';
import { parent } from '../models/parent.model';

import { ParentService } from '../services/parent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

    monForm!: FormGroup;
    prt:parent=new parent ;
   
    
  compteur=0 ;
   
    constructor(private formBuilder: FormBuilder,    private parentService: ParentService,  private route:Router
      ) {
      this.monForm = this.formBuilder.group({
        nom: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        prenom: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        email: ['', [Validators.required, Validators.email]],
        tel: ['', [Validators.required, this.telephoneValidator]],
        motDePasse: ['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).*$')]],
        confirmationMotDePasse: ['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).*$')]],
        dateNaissance: ['', [Validators.required, this.dateNaissanceValidator]],
        adresse: ['',Validators.required],
        genre: ['',Validators.required] // Ajoutez le champ genre avec le validator requis
  
      }, { validator: this.verifierCorrespondanceMotsDePasse 
      });
        // Ajoutez d'autres champs et validations si nécessaire
      
    }
    dateNaissanceValidator(control: AbstractControl): ValidationErrors | null {
      const value = control.value;
      const anneeNaissance = new Date(value).getFullYear();
      const anneeLimite = 2002;
  
      if (anneeNaissance > anneeLimite) {
        return { dateNaissanceInvalide: true };
      }
  
      return null;
    }
  
    verifierCorrespondanceMotsDePasse(group: FormGroup) {
      const motDePasse = group.get('motDePasse')?.value;
      const confirmationMotDePasse = group.get('confirmationMotDePasse')?.value;
      return motDePasse === confirmationMotDePasse ? null : { correspondanceMotsDePasse: true };
    }
  
  
    isCaracteresUniquement(value: string): boolean {
      const pattern = /^[a-zA-Z]+$/;
      return pattern.test(value);
    }
    telephoneValidator(control: FormControl) {
      const telephonePattern = /^\d{8}$/; // Exemple de modèle pour un numéro de téléphone à 10 chiffres
  
      if (control.value && !telephonePattern.test(control.value)) {
        return { invalidTelephone: true };
      }
  
      return null;}
      
      
      validerFormulaire() {
        if (this.monForm.valid) {
          // Le formulaire est valide, effectuez les actions nécessaires
          console.log('Le formulaire est valide.');
        } else {
          // Le formulaire est invalide,
    
          //if (this.monForm.hasError('correspondanceMotsDePasse')) {
           // alert('Les mots de passe ne correspondent pas.');}
        }
      }
    
     onsubmit(){
      //console.log(this.monForm.controls['genre'].value)
      //console.log(this.monForm.value)
      this.route.navigate(['/inscparent']);
      if (this.monForm.valid) {
        this.prt.nom=this.monForm.controls['nom'].value;
        this.prt.prenom=this.monForm.controls['prenom'].value;
        this.prt.email=this.monForm.controls['email'].value;
        this.prt.telephone=this.monForm.controls['tel'].value;
        this.prt.adresse=this.monForm.controls['adresse'].value;
        this.prt.genre=this.monForm.controls['genre'].value;
        this.prt.password=this.monForm.controls['motDePasse'].value;
        this.prt.confpassword=this.monForm.controls['confirmationMotDePasse'].value;
    
        console.log(this.prt['genre'])
        this.parentService.addParent(this.prt).subscribe(
          (response) => {
           this.route.navigate(['/login'])
            console.log("inside the add user")
            console.log('Parent created:', response);
          },
          (error) => {
            console.log("inside the add user error")
            console.log('Error creating parent:', error);
          }
        );
      }
    }    
        
      
        
      
    
      
      
      
      
  }
  
