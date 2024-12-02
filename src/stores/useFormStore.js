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
        nbrEtageImmb: '',
        specification: '',
        zipcode: '',
        codePostal: '',
        ville: '',
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
        produitType: '',
      },
      step7: {
        civilite: "",
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        birthDay: "",
        dateEffet: new Date(),
        nbrEnfant: "0",
      },
      //tarifs:null,
      dependecies:[],
      tarifs:[],
      selectedTarif:{},
      devisComplet:{},
      devisCompletAvecLien:{},
      selectedTarifOptions:[],
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
    getNbrPieces: (state) => state.formData.step3.nbr_pieces_principales,
    getDataForTarif: (state) => ({
      produitType: state.formData.step6.produitType,
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
      nbPiecesPrincipalesSup50: "0",//state.formData.step4.dependenceCount,
      resilieAutreAssureur : state.formData.step5.resilie_par_assureur3ans,
      sinistres2ansDerniers : state.formData.step5.declare_sinistre2ans,
      insertOuCheminee : state.formData.step4.selectedOptions.includes('chemine') ? 'OUI' : 'NON',
      chemineeConforme : state.formData.step4.cheminepro,
      surfaceDependances : state.formData.step4.surfaceDependance,
      surfacePieces : state.formData.step3.surface_habitable,// à ajouter au ws savecontrat ECA
      nbEnfantMineur :  state.formData.step7.nbrEnfant,
      nbrEtageImmb : state.formData.step2.nbrEtageImmb,
      etageBien : state.formData.step2.appartement_situe,
      capitalMobilier : state.formData.step6.valeur_bien,
      comporteInsert : state.formData.step4.selectedOptions.includes('chemine') ? 'OUI' : 'NON',
      presenceVeranda :  state.formData.step4.selectedOptions.includes('veranda') ? 'OUI' : 'NON',
      presencePicineOuTennis :  state.formData.step4.selectedOptions.includes('presencePicineOuTennis') ? 'OUI' : 'NON',
      moyenProtectionVols :  state.formData.step4.selectedOptions.includes('alarme') ? 'OUI' : 'NON',
      niveauFranchise : state.formData.step6.niveau_franchise,
      indemnMobilier: state.formData.step6.indemnisation_mobilier,
      niveauOJ: state.formData.step6.objets_valeur
    }),
    getDataForSave: (state) => ({
      flagType: state.formData.flagType,
      produitType: state.formData.step6.produitType,
      habitationUsageProfessionel: 'NON',
      piscine: state.formData.step4.selectedOptions.includes('presencePicineOuTennis') ? 'OUI' : 'NON',
      dateEffet: state.formData.step7.dateEffet,
      typeHabitation: state.formData.step1.type_habitation,
      typeResidence: state.formData.step3.type_residence,
      qualiteAssure: state.formData.step2.qualiteAssure,
      codePostal: state.formData.step2.codePostal,
      ville: state.formData.step2.ville,
      nbrPiecePrincipale: state.formData.step3.nbr_pieces_principales,
      nbrPiecePrincipalePlus30m: state.formData.step4.nbrPiecePrincipalePlus30m,
      nbrDependance: state.formData.step4.dependenceCount,
      nbrDependancePlus30m: state.formData.step4.dependenceCount,
      resilieAutreAssureur: state.formData.step5.resilie_par_assureur3ans,
      sinistres2ansDerniers: state.formData.step5.declare_sinistre2ans,
      habitationDejaAssure: state.formData.step1.assured,
      presenceVeranda: state.formData.step4.selectedOptions.includes('veranda') ? 'OUI' : 'NON',
      moyenProtectionVols: state.formData.step4.selectedOptions.includes('alarme') ? 'OUI' : 'NON',
      etageAppart : state.formData.step2.appartement_situe,
      capitalMobilier: state.formData.step6.valeur_bien,
      formuleChoisi: state.formData.selectedTarif.formule,
      // franchise: state.formData.step6.niveau_franchise,
      // indemnisationMobilier: state.formData.step6.indemnisation_mobilier,
      // niveauGarantieObjVal: state.formData.step6.objets_valeur,
      declarAssistantMatern: state.formData.selectedTarifOptions.includes('ASSISTANCE_MATERNELLE') ? 'OUI' : 'NON',
      panneauPhotoVolt: state.formData.selectedTarifOptions.includes('SYS_PHOTOVOLTAIQUE') ? 'OUI' : 'NON',
      bienElectrMoin5ans: state.formData.selectedTarifOptions.includes('DOMMAGE_ELECTRIQUE') ? 'OUI' : 'NON',
      rachatFranchise: state.formData.selectedTarifOptions.includes('RACHAT_FRANCHISE') ? 'OUI' : 'NON',
      locationSalle: state.formData.selectedTarifOptions.includes('LOCATION_SALLE') ? 'OUI' : 'NON',
      modePaiement: state.formData.modePaiement,
      souscripteurAdressePostale: state.formData.informations.numeroVoie +' '+ state.formData.informations.typeVoie +' '+ state.formData.informations.adressePostale,
      souscripteurVille: state.formData.step2.ville,
      souscripteurCodePostal: state.formData.step2.codePostal,
      souscripteurNom: state.formData.step7.nom,
      souscripteurCV: state.formData.step7.civilite,
      souscripteurTel: state.formData.step7.telephone,
      souscripteurPrenom: state.formData.step7.prenom,
      souscripteurEmail: state.formData.step7.email,
      souscripteursituationFam: 'CELIBATAIRE',
      dateNaissance: state.formData.step7.birthDay,
      souscripteuribanPrelevemnt: state.formData.paiement.iban,
    }),

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
