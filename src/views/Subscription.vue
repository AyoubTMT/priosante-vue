<template>
  <my-header :progress="formStore.currentStep" :step="'subscription'" />
  <section id="formulaire">
    <div class="container">
      <div class="row justify-content-center mb-lg-4 d-block d-md-none progressdiv">
        <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
          <div class="progress Mobile">
            <div class="progress-bar progressMobile" role="progressbar" style="width: 16%;" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      <div class="row justify-content-md-center justify-content-lg-center m-0">
        <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
          <div class="container-fluid p-0">
            <Step1 v-if="formStore.currentStep === 1" />
            <Step2 v-if="formStore.currentStep === 2" />
            <Step3 v-if="formStore.currentStep === 3" />
            <Step4 v-if="formStore.currentStep === 4" />
            <Step5 v-if="formStore.currentStep === 5" />
            <Step6 v-if="formStore.currentStep === 6" />
            <Step7 v-if="formStore.currentStep === 7" />
          </div>
        </div>
      </div>
    </div>
    <div class="step-sidebar">
      <div class="sidebar-title">Mes étapes</div>
      <div class="sidebar-description">Sélectionnez l’étape sur laquelle vous souhaitez revenir</div>
      <div class="sidebar-steps">
        <div class="sidebar-step active">
          <div class="step-indicator-circle"></div>
          <div class="step-name">Informations de base</div>
        </div>
        <div class="sidebar-step">
          <div class="step-indicator-circle"></div>
          <div class="step-name">Recueil de besoins</div>
        </div>
        <div class="sidebar-step">
          <div class="step-indicator-circle"></div>
          <div class="step-name">Tarifs</div>
        </div>
        <div class="sidebar-step">
          <div class="step-indicator-circle"></div>
          <div class="step-name">Souscription</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFormStore } from '../stores/useFormStore';
import Step1 from '../components/Step1.vue';
import Step2 from '../components/Step2.vue';
import Step3 from '../components/Step3.vue';
import Step4 from '../components/Step4.vue';
import Step5 from '../components/Step5.vue';
import Step6 from '../components/Step6.vue';
import Step7 from '../components/Step7.vue';
import MyHeader from '../components/header.vue';
import { ref, onMounted } from 'vue';

const formStore = useFormStore();

if (formStore.currentStep > 7) {
  formStore.updateCurrentStep(7);
}
</script>

<style scoped>
.step-sidebar {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 250px;
  background-color: var(--e-global-color-secondary);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.sidebar-title {
  color: var(--e-global-color-primary);
  font-size: var(--e-global-typography-accent-font-size);
  font-weight: var(--e-global-typography-accent-font-weight);
  line-height: var(--e-global-typography-accent-line-height);
  margin-bottom: 10px;
}

.sidebar-description {
  color: var(--e-global-color-text);
  font-size: 12px;
  margin-bottom: 20px;
}

.sidebar-steps {
  display: flex;
  flex-direction: column;
}

.sidebar-step {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
}

.step-indicator-circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--e-global-color-secondary);
  margin-right: 10px;
  border: 2px solid var(--e-global-color-accent);
}

.sidebar-step.active .step-indicator-circle {
  background-color: var(--e-global-color-accent);
}

.step-name {
  color: var(--e-global-color-text);
  font-size: var(--e-global-typography-accent-font-size);
  font-weight: var(--e-global-typography-accent-font-weight);
  line-height: var(--e-global-typography-accent-line-height);
}
</style>
