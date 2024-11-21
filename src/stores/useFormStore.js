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
      }
    },
    responseData: null,
    responseError: null,
  }),
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
    async submitForm(router) {
      console.log(this.formData);
      try {
        const response = await axios.post('http://assurmabarak-laravel.test/api/submit-devis', this.formData);
        console.log('Response:', response.data);

        this.responseData = response.data;
        if (response.data.success) {
          // router.push('/devis/tarifs');
        } else {
          alert('Submission failed: ' + response.data.message);
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
          console.error('Validation errors:', error.response.data.errors);
        } else {
          console.error('Error submitting form:', error.message);
        }
        this.responseError = error.response.data;
      }
    },
  },
});
