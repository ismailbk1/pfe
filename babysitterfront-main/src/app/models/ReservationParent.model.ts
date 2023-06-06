export interface Reservation {
    id: number;
    cordParent: string;
    dateD: string;
    dateF: string;
    menage: string;
    prix: number;
    ageE: number;
    nbr_enfant: number;
    tel: string;
    statut: string;
    parentR: Parent | null; // Set it as Parent type or null if not available
    babysitterR: Babysitter | null; // Set it as Babysitter type or null if not available
  }
  export interface Parent {
    idParent: number;
    nom: string;
    prenom: string;
    email: string;
    adresse: string;
    telephone: number;
    genre: string;
    nbrEnfant: string;
    etat: string;
    dateN: string;
    img: ImageData;
   
  }
  export interface Babysitter {
    idbabysitter: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    confpassword: string;
    adresse: string;
    telephone: number;
    genre: string;
    dateN: string;
    niveau: string;
    exp: string;
    descr: string;
}