// src/stores/useFormStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useFormStore = defineStore('form', {
  state: () => ({
    currentStep: 1,
    formData: {
      step1: {
        name: '',
        email: '',
      },
      step2: {
        address: '',
        phone: '',
      },
      step3: {
        productType: '',
        pricingDetails: '',
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
    prevStep() {
      this.currentStep--;
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
