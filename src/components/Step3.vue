<template>
  <div>
    <h2>Step 3: Product Details</h2>
    <form @submit.prevent="submitStep">
      <div>
        <label for="productType">Product Type:</label>
        <select v-model="localData.productType" id="productType" required>
          <option value="" disabled>Select Product Type</option>
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="gold">Gold</option>
        </select>
      </div>
      <div>
        <label for="pricingDetails">Pricing Details:</label>
        <textarea
          v-model="localData.pricingDetails"
          id="pricingDetails"
          placeholder="Provide additional pricing details..."
        ></textarea>
      </div>

      <button @click="prevStep">Previous</button>
      <button type="submit">Submit</button>
    </form>

    <div v-if="summary">
      <h3>Summary of Your Entries:</h3>
      <pre>{{ fullData }}</pre>
    </div>
  </div>
</template>

<script>
  import { useFormStore } from '@/stores/useFormStore';

  export default {
    data() {
      return {
        localData: {
          productType: '',
          pricingDetails: '',
        },
        summary: false, // To toggle summary display
      };
    },
    computed: {
      fullData() {
        const formStore = useFormStore();
        return formStore.formData;
      },
    },
    methods: {
      prevStep() {
        const formStore = useFormStore();
        formStore.prevStep();
      },
      submitStep() {
        const formStore = useFormStore();
        formStore.updateStepData('step3', this.localData);

        // Show summary and prepare to send data
        this.summary = true;

        // Send form data to the server
        formStore.submitForm();
      },
    },
  };
</script>
