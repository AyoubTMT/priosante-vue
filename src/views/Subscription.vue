<template>
  <my-header :progress="formStore.currentStep" :step="'subscription'" />
  <section id="formulaire" class="pt-4 pb-5">
    <div class="container">
      <!-- 💡 Mobile Progress Bar -->
      <div class="row justify-content-center mb-lg-4 d-block d-md-none progressdiv">
        <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
          <div class="progress Mobile">
            <div
              class="progress-bar progressMobile"
              role="progressbar"
              :style="{ width: `${(formStore.currentStep / filteredSteps.length) * 100}%` }"
              :aria-valuenow="formStore.currentStep"
              aria-valuemin="0"
              :aria-valuemax="filteredSteps.length"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 💡 Step Content -->
    <div class="row justify-content-md-center justify-content-lg-center m-0">
      <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-8 hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
        <div class="container-fluid p-0">
          <Step1 v-if="formStore.currentStep === 1" />
          <Step2 v-if="formStore.currentStep === 2" />
          <Step3 v-if="formStore.currentStep === 3" />
          <Step4 v-if="formStore.currentStep === 4 && filteredSteps.includes('Assuré')" />
          <Step5 v-if="formStore.currentStep === 5 && filteredSteps.includes('Conjoint')" />
          <Step6 v-if="formStore.currentStep === 6 && filteredSteps.includes('Enfants')" />
          <Step7 v-if="formStore.currentStep === 7" />
        </div>
      </div>
    </div>

    <!-- 💡 Sidebar -->
    <div class="step-sidebar d-none d-xl-block">
      <div class="sidebar-title">Mes étapes</div>
      <div class="sidebar-description">Sélectionnez l’étape sur laquelle vous souhaitez revenir</div>
      <div class="sidebar-steps">
        <div
          v-for="(step, index) in filteredSteps"
          :key="index"
          class="sidebar-step"
          :class="{ active: formStore.currentStep === index + 1 }"
          @click="formStore.updateCurrentStep(index + 1)"
        >
          <div class="step-indicator-circle"></div>
          <div class="step-name">{{ step }}</div>
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
import { computed } from 'vue';

const formStore = useFormStore();

const filteredSteps = computed(() => {
  const steps = [
    'Informations de base',
    'Souscripteur',
    'Tarifs'
  ];

  if (formStore.getFormData.souscripteurInfo && formStore.getFormData.souscripteurInfo.souscripteurIsAssure === 'NON') {
    steps.push('Assuré');
  }

  if (formStore.getFormData.baseInfo && formStore.getFormData.baseInfo.assure.includes('couple')) {
    steps.push('Conjoint');
  }

  if (formStore.getFormData.baseInfo && formStore.getFormData.baseInfo.assure.includes('enfant(s)') && formStore.getFormData.baseInfo.nbrEnfant > 0) {
    steps.push('Enfants');
  }

  steps.push('Souscription');

  return steps;
});

if (formStore.currentStep > filteredSteps.value.length) {
  formStore.updateCurrentStep(filteredSteps.value.length);
}
</script>

<style scoped>
.step-sidebar {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 240px;
  background-color: var(--e-global-color-secondary);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 0px 7px 1px #467061;
  z-index: 10;
}

.sidebar-title {
  color: var(--e-global-color-primary);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}

.sidebar-description {
  color: var(--e-global-color-text);
  font-size: 12px;
  margin-bottom: 16px;
  line-height: 1.4;
}

.sidebar-steps {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sidebar-step {
  display: flex;
  align-items: center;
  padding: 6px 0;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 6px;
}

.sidebar-step:hover {
  background-color: #f0ece7;
}

.step-indicator-circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--e-global-color-secondary);
  margin-right: 10px;
  border: 2px solid var(--e-global-color-accent);
  transition: background-color 0.3s;
}

.sidebar-step.active .step-indicator-circle {
  background-color: var(--e-global-color-accent);
}

.step-name {
  color: var(--e-global-color-text);
  font-size: 13px;
  font-weight: 500;
}
</style>
