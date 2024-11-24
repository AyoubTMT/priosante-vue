import { defineStore } from 'pinia';


import axios from 'axios';

export const useFormStore = defineStore('form', {
  state: () => ({
    currentStep: 1,
    formData: {
      step1: {
        type_habitation: '',
        assured: '',
      },
      step2: {
        qualiteAssure: '',
        appartement_situe: '',
        specification: '',
        zipcode: '',
      },
      step3: {
        type_residence: '',
        nbr_pieces_principales: '',
        surface_habitable: '',
      },
      step4: {
        selectedOptions: [],
        nbrPiecePrincipalePlus30m: '',
        dependenceCount: '',
        surfaceDependance: '',
        cheminepro: '',
      },
      step5: {
        declare_sinistre2ans: '',
        resilie_par_assureur3ans: '',
        utilisations_professionnelles: '',
      },
      step6: {
        type_mutuelle: '',
        valeur_bien: '',
        indemnisation_mobilier: '',
        niveau_franchise: '',
        objets_valeur: '',
      },
      step7: {
        civilite: "",
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        birthDay: "",
        dateEffet: "",
        nbrEnfant: "",
      },
      //tarifs:null,
      tarifs:[
        // {
        //     "formule": "ECO",
        //     "tarif": "10.11",
        //     "optionsCompatibles": {
        //         "ASSISTANCE_MATERNELLE": "3.04",
        //         "RACHAT_FRANCHISE": "2.8",
        //         "IND_ENFANT_MINEUR": "0.00",
        //         "SYS_PHOTOVOLTAIQUE": "4.05",
        //         "LOCATION_SALLE": "1.87"
        //     }
        // },
        // {
        //     "formule": "CONFORT",
        //     "tarif": "15.15",
        //     "optionsCompatibles": {
        //         "ASSISTANCE_MATERNELLE": "3.04",
        //         "RACHAT_FRANCHISE": "3.84",
        //         "IND_ENFANT_MINEUR": "0.00",
        //         "SYS_PHOTOVOLTAIQUE": "4.05",
        //         "DOMMAGE_ELECTRIQUE": "1.27",
        //         "LOCATION_SALLE": "1.87"
        //     }
        // },
        // {
        //     "formule": "OPTIMALE",
        //     "tarif": "19.3",
        //     "optionsCompatibles": {
        //         "ASSISTANCE_MATERNELLE": "3.04",
        //         "RACHAT_FRANCHISE": "4.2",
        //         "IND_ENFANT_MINEUR": "0.00",
        //         "SYS_PHOTOVOLTAIQUE": "4.05",
        //         "DOMMAGE_ELECTRIQUE": "1.39",
        //         "LOCATION_SALLE": "1.87"
        //     }
        // },
        // {
        //     "formule": "PREMIUM",
        //     "tarif": "21.35",
        //     "optionsCompatibles": {
        //         "ASSISTANCE_MATERNELLE": "3.04",
        //         "RACHAT_FRANCHISE": "4.81",
        //         "IND_ENFANT_MINEUR": "0.00",
        //         "SYS_PHOTOVOLTAIQUE": "4.05",
        //         "DOMMAGE_ELECTRIQUE": "1.5",
        //         "LOCATION_SALLE": "1.87"
        //     }
        // }
      ],
      selectedTarif:{
          // "formule": "ECO",
          // "tarif": "10.11",
          // "optionsCompatibles": {
          //     "ASSISTANCE_MATERNELLE": "3.04",
          //     "RACHAT_FRANCHISE": "2.8",
          //     "IND_ENFANT_MINEUR": "0.00",
          //     "SYS_PHOTOVOLTAIQUE": "4.05",
          //     "LOCATION_SALLE": "1.87"
          // }
      },

    },
    
    responseData: null,
    responseError: null,
  }),
  getters: {
    getTarifs() {
      return this.formData.tarifs;
    },
    getSelectedTarif() {
      return this.formData.selectedTarif;
    },
    getDateEffet() {
      return this.formData.step7.dateEffet;
    },
    getDataForTarif() {
      return {
        codePostal : 75001,
        ville : 'paris',
        dateEffet : this.formData.step7.dateEffet,
        typeResidence : this.formData.step3.type_residence,
        typeHabitation : this.formData.step1.type_habitation,
        qualiteAssure : this.formData.step2.qualiteAssure,
        nbrPiecePrincipale : this.formData.step3.nbr_pieces_principales,
        nbrPiecePrincipalePlus30m : this.formData.step4.nbrPiecePrincipalePlus30m,
        nbrDependance : this.formData.step4.dependenceCount,
        nbrDependancePlus30m : this.formData.step4.dependenceCount,
        nbPiecesPrincipalesSup50 : this.formData.step4.dependenceCount,
        resilieAutreAssureur : this.formData.step5.resilie_par_assureur3ans,
        sinistres2ansDerniers : this.formData.step5.declare_sinistre2ans,
        insertOuCheminee : this.formData.step4.selectedOptions.includes('chemine') ? 'OUI' : 'NON',
        chemineeConforme : this.formData.step4.cheminepro,
        surfaceDependances : this.formData.step4.surfaceDependance,
        surfacePieces : this.formData.step3.surface_habitable,// à ajouter au ws savecontrat ECA
        nbEnfantMineur :  this.formData.step7.nbrEnfant,
        nbrEtageImmb : this.formData.step2.appartement_situe,
        etageBien : this.formData.step2.appartement_situe,
        capitalMobilier : this.formData.step6.valeur_bien,
        comporteInsert : this.formData.step4.selectedOptions.includes('chemine') ? 'OUI' : 'NON',
        presenceVeranda :  this.formData.step4.selectedOptions.includes('veranda') ? 'OUI' : 'NON',
        presencePicineOuTennis :  this.formData.step4.selectedOptions.includes('presencePicineOuTennis') ? 'OUI' : 'NON',
        moyenProtectionVols :  this.formData.step4.selectedOptions.includes('alarme') ? 'OUI' : 'NON',
        niveauFranchise : this.formData.step6.niveau_franchise,
        indemnMobilier : this.formData.step6.indemnisation_mobilier,
        niveauOJ : this.formData.step6.objets_valeur
      };
    },
  },
  actions: {
    updateStepData(step, data) {
      this.formData[step] = data;
    },
    nextStep() {
      this.currentStep++;
    },
    prevStep(router) {
      this.currentStep--;
      if (this.currentStep === 0) {
        this.currentStep = 1;
        router.push('/home');
      }
    },
    async submitForm() {
     
    },
  },
});
