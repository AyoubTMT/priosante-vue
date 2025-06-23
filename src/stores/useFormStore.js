
import { defineStore } from 'pinia';


import axios from 'axios';

export const useFormStore = defineStore('form', {
  state: () => ({
    currentStep: 1,
    formData: {
      step1: {
        assure: '',
        dateNaissance: '',
        dateNaissanceConjoint: '',
        nbrEnfant: 0,
        dateEffet: '',
        regime: '',
        codePostal: '',
        dateNaissanceEnfant1: '',
        dateNaissanceEnfant2: '',
        dateNaissanceEnfant3: '',
        dateNaissanceEnfant4: '',
        dateNaissanceEnfant5: '',
        dateNaissanceEnfant6: '',
        dateNaissanceEnfant7: '',
        dateNaissanceEnfant8: '',
      },
      step2: {
      },
      step3: {
      },
      step4: {
      },
      step5: {
      },
      step6: {
      },
      step7: {
      },
      isNotificationMailSent : false,
      dependecies:[],
      tarifs:[],
      selectedTarif:{},
      devisComplet:{},
      devisCompletAvecLien:{},
      finalTarif:0,
      flagType:'DOCUMENT',
      modePaiement:'CHEQUE',
      paiement:{
        titulaire_compte:'',
        iban:''
      },
      informations : {},
      lienSignature:'',


    },
    
    responseData: null,
    responseError: null,
  }),
  getters: {
    getFormData: (state) => state.formData,
    getTarifs: (state) => state.formData.tarifs,
    getDependecies: (state) => state.formData.dependecies,
    getSelectedTarif: (state) => state.formData.selectedTarif,
    getSelectedTarifOptions: (state) => state.formData.selectedTarifOptions,
    getDateEffet: (state) => state.formData.step7.dateEffet,

    getDataForTarif: (state) => ({
      produitType: "SANTE",
      codePostal: state.formData.step2.codePostal,
      ville: state.formData.step2.ville,
      dateEffet : state.formData.step7.dateEffet
    }),
    getDataOfSouscripteur: (state) => ({
      civilite:  state.formData.step7.civilite,
      nom: state.formData.step7.nom,
      prenom: state.formData.step7.prenom,
      telephone: state.formData.step7.telephone,
      email: state.formData.step7.email,
      dateNaissance: state.formData.step7.birthDay,
      dateEffet: state.formData.step7.dateEffet,
      resilieAutreAssureur: state.formData.step5.resilie_par_assureur3ans,
      codePostal: state.formData.step2.codePostal,
      ville: state.formData.step2.ville
    })

  },

  actions: {
    updateStepData(step, data) {
      if(step == "tarifs" || step == "selectedTarifOptions" || step == "dependecies" ){
        this.formData[step]=[];
      }
      this.formData[step] = data;
    },
    nextStep() {
      this.currentStep++;
    },
    updateCurrentStep(step) {
      this.currentStep = step;
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
