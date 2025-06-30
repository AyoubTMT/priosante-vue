<template>
  <my-header :progress="formStore.currentStep" :step="'produitInfo'" />

  <form @submit.prevent="submitStep">
    <section id="content">
      <div class="container container-md-fluid container-lg-fluid container-xl">
        <div class="row justify-content-center mb-0 mb-lg-4 d-block d-md-none">
          <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
        <section class="py-5">
          <div class="container">
            <div class="row text-center mb-5">
              <div class="col">
                <h2 class="stepTitle mb-3">Informations du Produit</h2>
                <p class="stepDescription mb-3 mb-md-0">
                  Veuillez fournir les informations du produit.
                </p>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
                <div class="mb-4">
                  <label class="form-label">Type</label>
                  <select v-model="produitInfo.types" class="form-select form-input" required>
                    <option value="SANTE">SANTE</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label class="form-label">Produit</label>
                  <select v-model="produitInfo.produit" class="form-select form-input" required>
                    <option value="SERENISSIA">SERENISSIA</option>
                    <option value="CAPITAL_SENIOR">CAPITAL_SENIOR</option>
                    <option value="CAP_SANTE_SENIOR_REMA">CAP_SANTE_SENIOR_REMA</option>
                    <option value="OPTION_BUDGET">OPTION_BUDGET</option>
                    <option value="SERENISSIME">SERENISSIME</option>
                    <option value="SANTACTIF">SANTACTIF</option>
                    <option value="CAPITAL_SENIOR_VITALITE">CAPITAL_SENIOR_VITALITE</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label class="form-label">Régime</label>
                  <select v-model="produitInfo.regime" class="form-select form-input" required>
                    <option value="SECURITE_SOCIALE">SECURITE_SOCIALE</option>
                    <option value="INDEPENDANT">INDEPENDANT</option>
                    <option value="ALSACE_MOSELLE">ALSACE_MOSELLE</option>
                    <option value="EXPLOITANTS_AGRICOLES">EXPLOITANTS_AGRICOLES</option>
                    <option value="SALARIE_AGRICOLE">SALARIE_AGRICOLE</option>
                    <option value="MONACO">MONACO</option>
                    <option value="FRONTALIER_SUISSE">FRONTALIER_SUISSE</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label class="form-label">Date d'Effet</label>
                  <input v-model="produitInfo.dateEffet" type="date" class="form-control form-input" required>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                  <button type="submit" class="btn btn-primary btn-next">
                    Étape suivante
                    <i class="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </form>
</template>

<script setup>
import { useFormStore } from '@/stores/useFormStore';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import MyHeader from '../components/header.vue';

const formStore = useFormStore();
const router = useRouter();

const produitInfo = reactive({
  types: 'SANTE',
  produit: '',
  regime: '',
  dateEffet: ''
});

const submitStep = () => {
  formStore.updateStepData('produitInfo', produitInfo);
  formStore.nextStep();
  router.push('/devis/souscripteur');
};
</script>

<style scoped>
.progress {
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin-bottom: 20px;
}

.progress-bar {
  background-color: #467061;
  border-radius: 3px;
}

.stepTitle {
  font-size: 24px;
  color: #333;
}

.stepDescription {
  font-size: 16px;
  color: #666;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

.form-input:focus {
  border-color: #467061;
  box-shadow: 0 0 0 2px rgba(70, 112, 97, 0.2);
}

.btn-next {
  background-color: #467061;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-next:hover {
  background-color: #3a5a4f;
}
</style>
