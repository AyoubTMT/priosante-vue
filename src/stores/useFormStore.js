import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
  state: () => ({
    currentStep: 1,
    formData: {
      baseInfo: {
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
        budget: '',
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
      assureInfo: {
        cv: '',
        nom: '',
        prenom: '',
        dateNaissance: '',
        ayantDroitDe: '',
        numeroSS: '',
        codeOrga: '',
        ayantDroit: ''
      },
      conjointInfo: {
        cv: '',
        nom: '',
        prenom: '',
        dateNaissance: '',
        ayantDroitDe: 'AUCUN',
        numeroSS: '',
        codeOrga: '',
        ayantDroit: ''
      },
      enfantsInfo: [],
      payeurInfo: {
        ibanPrelevemnt: '',
        ibanRembDifferent: 'NON',
        ibanRemboursement: '',
        mandatSepa: 'GENERER_MANDAT',
        rum: '',
        payeurDifferent: 'NON',
        nomPayeur: '',
        prenomPayeur: '',
        numeroPayeur: '',
        typeVoiePayeur: '',
        voiePayeur: '',
        batimentPayeur: '',
        libellePayeur: '',
        codePostalPayeur: '',
        villePayeur: '',
        titulaire_compte: '',
        iban: '',
        declaration: false
      },
      tarifs: [],
      selectedTarif: {},
      selectedTarifOptions: {},
      devisComplet: {},
      devisCompletAvecLien: {},
      finalTarif: 0,
      flagType: 'DOCUMENT',
      modePaiement: 'PRELEVEMENT',
      paiement: {
        titulaire_compte: '',
        iban: ''
      },
      informations: {},
      lienSignature: '',
      reference: '',
    },
    responseData: null,
    responseError: null,
  }),
  getters: {
    getFormData: (state) => state.formData,
    getTarifs: (state) => state.formData.tarifs,
    getSelectedTarif: (state) => state.formData.selectedTarif,
    getSelectedTarifOptions: (state) => state.formData.selectedTarifOptions,
    getDateEffet: (state) => state.formData.baseInfo.dateEffet,
    getDataForTarif: (state) => ({
      produitType: "SANTE",
      codePostal: state.formData.baseInfo.codePostal,
      ville: state.formData.souscripteurInfo.ville,
      dateEffet: state.formData.baseInfo.dateEffet
    }),
    getSouscripteurInfo: (state) => ({
      civilite: state.formData.souscripteurInfo.cv,
      nom: state.formData.souscripteurInfo.nom,
      prenom: state.formData.souscripteurInfo.prenom,
      telephone: state.formData.souscripteurInfo.tel,
      email: state.formData.souscripteurInfo.email,
      dateNaissance: state.formData.souscripteurInfo.dateNaissance,
      dateEffet: state.formData.baseInfo.dateEffet,
      codePostal: state.formData.baseInfo.codePostal,
      ville: state.formData.souscripteurInfo.ville,
      situationFam: state.formData.souscripteurInfo.situationFam,
      souscripteurIsAssure: state.formData.souscripteurInfo.souscripteurIsAssure,
      profession: state.formData.souscripteurInfo.profession,
      revenuMensuel: state.formData.souscripteurInfo.revenuMensuel,
      voie: state.formData.souscripteurInfo.voie,
      ville: state.formData.souscripteurInfo.ville,
      typeSouscripteur: state.formData.souscripteurInfo.typeSouscripteur,
    }),
    getDataForSave: (state) => {
      const formData = state.formData;
      return {
        baseInfo: formData.baseInfo,
        souscripteurInfo: formData.souscripteurInfo,
        assureInfo: formData.assureInfo,
        conjointInfo: formData.conjointInfo,
        enfantsInfo: formData.enfantsInfo,
        payeurInfo: formData.payeurInfo,
        selectedTarif: formData.selectedTarif,
        selectedTarifOptions: formData.selectedTarifOptions,
        finalTarif: formData.finalTarif,
        flagType: formData.flagType,
        modePaiement: formData.modePaiement,
        paiement: formData.paiement,
      };
    },
  },
  actions: {
    updateSelectedTarif(plan) {
      this.formData.selectedTarif = plan;
    },
    updateTarifs(tarifs) {
      this.formData.tarifs = tarifs;
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
