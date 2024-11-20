<template>
  <div>
    <h2>Step 2: Address Details</h2>
    <form @submit.prevent="submitStep">
      <input v-model="localData.address" placeholder="Address" />
      <input v-model="localData.phone" placeholder="Phone" />
      <button @click="prevStep">Previous</button>
      <button type="submit">Next</button>
    </form>
  </div>
</template>
  
<script>
  import { useFormStore } from '@/stores/useFormStore';

  export default {
    data() {
      return {
        localData: {
          address: '',
          phone: '',
        },
      };
    },
    methods: {
      prevStep() {
        const formStore = useFormStore();
        formStore.prevStep();
      },
      submitStep() {
        const formStore = useFormStore();
        formStore.updateStepData('step2', this.localData);
        formStore.nextStep();
      },
    },
  };
</script>
  