// src/stores/useFormStore.js
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
      },
      step6: {
      },
      step7: {
      },
      step8: {
      },
      step9: {
      },
    },
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
    async submitForm() {
        console.log(this.formData);
        try {
            const response = await axios.post('http://assurmabarak-laravel.test/api/submit-devis', this.formData);
            console.log('Response:', response.data);
            alert('Form submitted successfully!');
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.error('Validation errors:', error.response.data.errors);
            } else {
                console.error('Error submitting form:', error.message);
            }
      }
    },
  },
});
