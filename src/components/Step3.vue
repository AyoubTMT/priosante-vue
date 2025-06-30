<template>
  <form @submit.prevent="submitStep" class="step-form">
    <div class="step-container">
      <div class="step-header">
        <h2 class="step-title">Informations de l'Assuré</h2>
        <p class="step-description">
          Veuillez fournir les informations de l'assuré.
        </p>
      </div>

      <div class="step-section">
        <div class="form-group">
          <label for="cv" class="form-label">Civilité</label>
          <select id="cv" class="form-select" v-model="assureInfo.cv" required>
            <option value="MR">Monsieur</option>
            <option value="MME">Madame</option>
          </select>
        </div>

        <div class="form-group">
          <label for="nom" class="form-label">Nom</label>
          <input type="text" id="nom" class="form-control" v-model="assureInfo.nom" required>
        </div>

        <div class="form-group">
          <label for="prenom" class="form-label">Prénom</label>
          <input type="text" id="prenom" class="form-control" v-model="assureInfo.prenom" required>
        </div>

        <div class="form-group">
          <label for="dateNaissance" class="form-label">Date de Naissance</label>
          <input type="date" id="dateNaissance" class="form-control" v-model="assureInfo.dateNaissance" required>
        </div>

        <div class="form-group">
          <label for="ayantDroitDe" class="form-label">Ayant Droit De</label>
          <select id="ayantDroitDe" class="form-select" v-model="assureInfo.ayantDroitDe" required>
            <option value="AUTRE">Autre</option>
            <option value="AUCUN">Aucun</option>
          </select>
        </div>

        <div class="form-group" v-if="assureInfo.ayantDroitDe === 'AUCUN'">
          <label for="numeroSS" class="form-label">Numéro SS</label>
          <input type="text" id="numeroSS" class="form-control" v-model="assureInfo.numeroSS" required>
        </div>

        <div class="form-group" v-if="assureInfo.ayantDroitDe === 'AUCUN'">
          <label for="codeOrga" class="form-label">Code Orga</label>
          <input type="text" id="codeOrga" class="form-control" v-model="assureInfo.codeOrga" required>
        </div>

        <div class="form-group" v-if="assureInfo.ayantDroitDe === 'AUTRE'">
          <label for="ayantDroit" class="form-label">Ayant Droit</label>
          <input type="text" id="ayantDroit" class="form-control" v-model="assureInfo.ayantDroit" required>
        </div>
      </div>

      <div class="step-footer">
        <button type="submit" class="submit-button">Étape suivante</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useFormStore } from '@/stores/useFormStore';
import { reactive, onMounted } from 'vue';

const formStore = useFormStore();

const assureInfo = reactive({
  cv: 'MR',
  nom: '',
  prenom: '',
  dateNaissance: '',
  ayantDroitDe: 'AUCUN',
  numeroSS: '',
  codeOrga: '',
  ayantDroit: ''
});

onMounted(() => {
  const storedData = formStore.getFormData.assureInfo;
  if (storedData) {
    Object.assign(assureInfo, storedData);
  }
});

const submitStep = () => {
  formStore.updateStepData('assureInfo', assureInfo);
  if (formStore.getFormData.baseInfo.assure.includes('couple')) {
    formStore.updateCurrentStep(5);
  } else if (formStore.getFormData.baseInfo.nbrEnfant > 0) {
    formStore.updateCurrentStep(6);
  } else {
    formStore.updateCurrentStep(7);
  }
};
</script>



<style scoped>
.step-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: var(--e-global-typography-primary-font-family);
}

.step-header {
  text-align: center;
  margin-bottom: 30px;
}

.step-title {
  color: var(--e-global-color-primary);
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}

.step-description {
  color: var(--e-global-color-text);
  font-size: 16px;
  margin-bottom: 20px;
}

.step-section {
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 10px;
  color: var(--e-global-color-primary);
  font-size: 16px;
  font-weight: 600;
}

.form-control, .form-select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.form-control:focus, .form-select:focus {
  border-color: var(--e-global-color-accent);
  outline: none;
}

.step-footer {
  text-align: center;
  margin-top: 30px;
}

.submit-button {
  width: 100%;
  background-color: var(--color5);
  color: #000;
  height: 60px;
  border-radius: 9px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 20px;
}

.submit-button:hover {
  background-color: var(--color4);
  color: #fff;
}
</style>
