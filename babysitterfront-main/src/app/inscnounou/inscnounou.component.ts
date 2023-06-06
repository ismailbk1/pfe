import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';


import { babysitter } from '../models/babysitter.model';
import { BabysitterService } from '../services/babysitter.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscnounou',
  templateUrl: './inscnounou.component.html',
  styleUrls: ['./inscnounou.component.css']
})
export class InscnounouComponent {
  selectedImageUrl!: string;
  selectedFile!: File;

 
  monForm!: FormGroup;
  prt:babysitter=new babysitter ;
 
  
compteur=0 ;
 
  constructor(private formBuilder: FormBuilder,    private babysitterService: BabysitterService,
   private route:Router ) {
    this.monForm = this.formBuilder.group({
      nom: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      prenom: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, this.telephoneValidator]],
      motDePasse: ['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).*$')]],
      confirmationMotDePasse: ['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).*$')]],
      dateNaissance: ['', [Validators.required, this.dateNaissanceValidator]],
      adresse: ['',Validators.required],
      niveau: ['',Validators.required],
      genre: ['',Validators.required],
      exp: ['',Validators.required],
      mess: ['',Validators.required]
       // Ajoutez le champ genre avec le validator requis

    }, { validator: this.verifierCorrespondanceMotsDePasse 
    });
      // Ajoutez d'autres champs et validations si nécessaire
    
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
  this.selectedFile=file;
  console.log(this.selectedFile)
    reader.onload = (e: any) => {
      this.selectedImageUrl = e.target.result;
    };
  
    reader.readAsDataURL(file);
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
    const formData: FormData = new FormData();
    console.log(this.monForm.controls['genre'].value)
    console.log(this.monForm.controls['niveau'].value)
    console.log(this.monForm.value)
    if (this.monForm.valid) {
     this.prt.nom=this.monForm.controls['nom'].value;
      this.prt.prenom=this.monForm.controls['prenom'].value;
      this.prt.email=this.monForm.controls['email'].value;
      this.prt.telephone=this.monForm.controls['tel'].value;
      this.prt.adresse=this.monForm.controls['adresse'].value;
      this.prt.genre=this.monForm.controls['genre'].value;
      this.prt.niveau=this.monForm.controls['niveau'].value;
      this.prt.password=this.monForm.controls['motDePasse'].value;
      this.prt.confpassword=this.monForm.controls['confirmationMotDePasse'].value;
      this.prt.exp=this.monForm.controls['exp'].value;
      this.prt.descr=this.monForm.controls['mess'].value;
  
      console.log(this.prt['genre'])
      formData.append('file', this.selectedFile);
      formData.append('babysitterData', JSON.stringify(this.prt));

  

      this.babysitterService.addNounou(formData).subscribe(
        (response) => {
          console.log("inside the add user")
          console.log('Nounou created:', response);
          this.monForm.reset();
        },
        (error) => {
          if(error.status === 200){
            this.monForm.reset();
          this.route.navigate(['/login'])
          }
         
        }
      );
    }
  }    
      
  }
