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
        qualiteAssure: 'LOCATAIRE_OCCUPANT',
        appartement_situe: '',
        specification: '',
        zipcode: '',
      },
      step3: {
        type_residence: 'RESIDENCE_PRINCIPALE',
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
        email: "test@gmail.com",
        birthDay: "1980-01-01",
        dateEffet: "2024-11-27",
        nbrEnfant: "0",
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
      selectedTarifOptions:[],
      informations : {}


    },
    
    responseData: null,
    responseError: null,
  }),
  getters: {
    getFormData: (state) => state.formData,
    getTarifs: (state) => state.formData.tarifs,
    getSelectedTarif: (state) => state.formData.selectedTarif,
    getDateEffet: (state) => state.formData.step7.dateEffet,
    getDataForTarif: (state) => ({
      codePostal : 75001,
      ville : 'paris',
      dateEffet : state.formData.step7.dateEffet,
      typeResidence : state.formData.step3.type_residence,
      typeHabitation : state.formData.step1.type_habitation,
      qualiteAssure : state.formData.step2.qualiteAssure,
      nbrPiecePrincipale : state.formData.step3.nbr_pieces_principales,
      nbrPiecePrincipalePlus30m : state.formData.step4.nbrPiecePrincipalePlus30m,
      nbrDependance : state.formData.step4.dependenceCount,
      nbrDependancePlus30m : state.formData.step4.dependenceCount,
      nbPiecesPrincipalesSup50 : state.formData.step4.dependenceCount,
      resilieAutreAssureur : state.formData.step5.resilie_par_assureur3ans,
      sinistres2ansDerniers : state.formData.step5.declare_sinistre2ans,
      insertOuCheminee : state.formData.step4.selectedOptions.includes('chemine') ? 'OUI' : 'NON',
      chemineeConforme : state.formData.step4.cheminepro,
      surfaceDependances : state.formData.step4.surfaceDependance,
      surfacePieces : state.formData.step3.surface_habitable,// à ajouter au ws savecontrat ECA
      nbEnfantMineur :  state.formData.step7.nbrEnfant,
      nbrEtageImmb : state.formData.step2.appartement_situe,
      etageBien : state.formData.step2.appartement_situe,
      capitalMobilier : state.formData.step6.valeur_bien,
      comporteInsert : state.formData.step4.selectedOptions.includes('chemine') ? 'OUI' : 'NON',
      presenceVeranda :  state.formData.step4.selectedOptions.includes('veranda') ? 'OUI' : 'NON',
      presencePicineOuTennis :  state.formData.step4.selectedOptions.includes('presencePicineOuTennis') ? 'OUI' : 'NON',
      moyenProtectionVols :  state.formData.step4.selectedOptions.includes('alarme') ? 'OUI' : 'NON',
      niveauFranchise : state.formData.step6.niveau_franchise,
      indemnMobilier: state.formData.step6.indemnisation_mobilier,
      niveauOJ: state.formData.step6.objets_valeur
    })

  },

  actions: {
    updateStepData(step, data) {
      if(step == "tarifs" || step == "selectedTarifOptions"  ){
        this.formData[step]=[];
      }
      this.formData[step] = { ...this.formData[step], ...data };
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
  persist: {
    enabled: true,
    storage: localStorage // or sessionStorage
  },
});
