import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
  state: () => ({
    currentStep: 1,
    formData: {
      baseInfo: {
        assure: 'Un couple + enfant(s)',
        dateNaissance: '1990-01-01',
        dateNaissanceConjoint: '1980-01-01',
        nbrEnfant: 1,
        dateEffet: '2025-07-01',
        regime: 'MONACO',
        codePostal: '75001',
        dateNaissanceEnfant1: '2015-01-01',
        dateNaissanceEnfant2: '',
        dateNaissanceEnfant3: '',
        dateNaissanceEnfant4: '',
        dateNaissanceEnfant5: '',
        dateNaissanceEnfant6: '',
        dateNaissanceEnfant7: '',
        dateNaissanceEnfant8: '',
        budget: 'ENTRE_100_ET_250',
      },
      souscripteurInfo: {
        cv: 'MR',
        nom: '',
        prenom: '',
        dateNaissance: '',
        tel: '',
        email: '',
        situationFam: '',
        souscripteurIsAssure: 'OUI',
        profession: '',
        revenuMensuel: '',
        voie: '',
        ville: '',
        codePostal: '',
        typeSouscripteur: 'PERSONNE_PHYSIQUE'
      },
      step3: {},
      step4: {},
      step5: {},
      step6: {},
      step7: {},
      isNotificationMailSent: false,
      dependecies: [],
      tarifs: [],
      selectedTarif: {},
      devisComplet: {},
      devisCompletAvecLien: {},
      finalTarif: 0,
      flagType: 'DOCUMENT',
      modePaiement: 'CHEQUE',
      paiement: {
        titulaire_compte: '',
        iban: ''
      },
      informations: {},
      lienSignature: '',
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
    getDateEffet: (state) => state.formData.step1.dateEffet,
    getDataForTarif: (state) => ({
      produitType: "SANTE",
      codePostal: state.formData.step1.codePostal,
      ville: state.formData.step2.ville,
      dateEffet: state.formData.step1.dateEffet
    }),
    getSouscripteurInfo: (state) => ({
      civilite: state.formData.souscripteurInfo.civilite,
      nom: state.formData.souscripteurInfo.nom,
      prenom: state.formData.souscripteurInfo.prenom,
      telephone: state.formData.souscripteurInfo.telephone,
      email: state.formData.souscripteurInfo.email,
      dateNaissance: state.formData.souscripteurInfo.birthDay,
      dateEffet: state.formData.step1.dateEffet,
      codePostal: state.formData.step1.codePostal,
      ville: state.formData.souscripteurInfo.ville,
      situationFam : state.formData.souscripteurInfo.situationFam,
      souscripteurIsAssure : state.formData.souscripteurInfo.souscripteurIsAssure,
      profession : state.formData.souscripteurInfo.profession,
      revenuMensuel : state.formData.souscripteurInfo.revenuMensuel,
      voie : state.formData.souscripteurInfo.voie,
      ville : state.formData.souscripteurInfo.ville,
      typeSouscripteur : state.formData.souscripteurInfo.typeSouscripteur,
    })
  },
  actions: {
    updateSelectedTarif(plan) {
      this.selectedTarif = plan;
    },
    updateTarifs(tarifs) {
      this.tarifs = tarifs;
    },
    updateStepData(step, data) {
      if (step == "tarifs") {
        this.formData[step] = [];
      }
      this.formData[step] = data;
    },
    updateCurrentStep(step) {
      this.currentStep = step;
      if (this.currentStep === 0) {
        this.currentStep = 1;
        router.push('/home');
      }
    },
    async submitForm() {
      // Handle form submission logic here
    },
  },
  persist: {
    enabled: true,
    storage: localStorage
  },
});
