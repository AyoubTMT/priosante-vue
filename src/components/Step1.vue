<template>
    <div>
        <h2>Step 1: Personal Details</h2>
        <form @submit.prevent="submitStep">
        <input v-model="localData.name" placeholder="Name" />
        <input v-model="localData.email" placeholder="Email" />
        <button type="submit">Next</button>
        </form>
    </div>
</template>
  
<script>
    import { useFormStore } from '../stores/useFormStore';

    export default {
        data() {
            return {
            localData: {
                name: '',
                email: '',
            },
            };
        },
        methods: {
            submitStep() {
                const formStore = useFormStore();
                formStore.updateStepData('step1', this.localData);
                formStore.nextStep();
            },
        },
    };
</script>
