import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Admin } from '../models/Admin.model';

@Component({
  selector: 'app-formulaire-admin',
  templateUrl: './formulaire-admin.component.html',
  styleUrls: ['./formulaire-admin.component.css']
})
export class FormulaireAdminComponent {


  monForm!: FormGroup;
  prt:Admin=new Admin;
 
  
compteur=0 ;
 
  constructor(private formBuilder: FormBuilder,    private admService: AdminService,  private route:Router
    ) {
    this.monForm = this.formBuilder.group({
      nom: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      prenom: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      
      motDePasse: ['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).*$')]],
      confirmationMotDePasse: ['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).*$')]],
      
      adresse: ['',Validators.required],

      
    }, { validator: this.verifierCorrespondanceMotsDePasse 
    });
      // Ajoutez d'autres champs et validations si nécessaire
    
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
   
    if (this.monForm.valid) {
      this.prt.nom=this.monForm.controls['nom'].value;
      this.prt.prenom=this.monForm.controls['prenom'].value;
      this.prt.email=this.monForm.controls['email'].value;
      
      this.prt.adresse=this.monForm.controls['adresse'].value;
      
      this.prt.password=this.monForm.controls['motDePasse'].value;
      this.prt.confpassword=this.monForm.controls['confirmationMotDePasse'].value;
  
     
      this.admService.addParent(this.prt).subscribe(
       
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
