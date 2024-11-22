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
        statut_resident: '',
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
        selectedOptions: '',
        pieceCount: '',
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
        budget: '',
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
        {
            "formule": "ECO",
            "tarif": "10.11",
            "optionsCompatibles": {
                "ASSISTANCE_MATERNELLE": "3.04",
                "RACHAT_FRANCHISE": "2.8",
                "IND_ENFANT_MINEUR": "0.00",
                "SYS_PHOTOVOLTAIQUE": "4.05",
                "LOCATION_SALLE": "1.87"
            }
        },
        {
            "formule": "CONFORT",
            "tarif": "15.15",
            "optionsCompatibles": {
                "ASSISTANCE_MATERNELLE": "3.04",
                "RACHAT_FRANCHISE": "3.84",
                "IND_ENFANT_MINEUR": "0.00",
                "SYS_PHOTOVOLTAIQUE": "4.05",
                "DOMMAGE_ELECTRIQUE": "1.27",
                "LOCATION_SALLE": "1.87"
            }
        },
        {
            "formule": "OPTIMALE",
            "tarif": "19.3",
            "optionsCompatibles": {
                "ASSISTANCE_MATERNELLE": "3.04",
                "RACHAT_FRANCHISE": "4.2",
                "IND_ENFANT_MINEUR": "0.00",
                "SYS_PHOTOVOLTAIQUE": "4.05",
                "DOMMAGE_ELECTRIQUE": "1.39",
                "LOCATION_SALLE": "1.87"
            }
        },
        {
            "formule": "PREMIUM",
            "tarif": "21.35",
            "optionsCompatibles": {
                "ASSISTANCE_MATERNELLE": "3.04",
                "RACHAT_FRANCHISE": "4.81",
                "IND_ENFANT_MINEUR": "0.00",
                "SYS_PHOTOVOLTAIQUE": "4.05",
                "DOMMAGE_ELECTRIQUE": "1.5",
                "LOCATION_SALLE": "1.87"
            }
        }
      ],
      selectedTarif:{
          "formule": "ECO",
          "tarif": "10.11",
          "optionsCompatibles": {
              "ASSISTANCE_MATERNELLE": "3.04",
              "RACHAT_FRANCHISE": "2.8",
              "IND_ENFANT_MINEUR": "0.00",
              "SYS_PHOTOVOLTAIQUE": "4.05",
              "LOCATION_SALLE": "1.87"
          }
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
        qualiteAssure : this.formData.step2.statut_resident,
        nbrPiecePrincipale : this.formData.step3.nbr_pieces_principales,
        nbrPiecePrincipalePlus30m : this.formData.step4.pieceCount,
        nbrDependance : this.formData.step4.surfaceDependance,
        nbrDependancePlus30m : this.formData.step4.dependenceCount,
        resilieAutreAssureur : this.formData.step5.resilie_par_assureur3ans,
        sinistres2ansDerniers : this.formData.step5.declare_sinistre2ans,
        insertOuCheminee :"NON",//selected options
        chemineeConforme : this.formData.step4.cheminepro,
        comporteInsert : "NON",//selected options
        surfaceDependances : this.formData.step4.surfaceDependance,
        nbEnfantMineur :  this.formData.step7.nbrEnfant,
        nbrEtageImmb : this.formData.step2.appartement_situe,
        etageBien : this.formData.step2.appartement_situe,
        presenceVeranda : "NON",//selected options
        presencePicineOuTennis :  "NON",//selected options
        capitalMobilier : this.formData.step6.valeur_bien,
        niveauFranchise : "AUCUNE",
        indemnMobilier : "VALEUR_USAGE",
        niveauOJ : "ZERO"
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
