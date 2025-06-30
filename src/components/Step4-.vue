<template>
  <form @submit.prevent="submitStep" class="step-form">
    <div class="step-container">
      <div class="step-header">
        <h2 class="step-title">Informations des Enfants</h2>
        <p class="step-description">
          Veuillez fournir les informations des enfants.
        </p>
      </div>

      <div class="step-section">
        <div v-for="n in parseInt(formStore.getFormData.step1.nbrEnfant)" :key="n" class="child-section">
          <h3>Enfant {{ n }}</h3>
          <div class="form-group">
            <label :for="'cv' + n" class="form-label">Civilité</label>
            <select :id="'cv' + n" class="form-select" v-model="enfantsInfo[n - 1].cv" required>
              <option value="MR">Monsieur</option>
              <option value="MME">Madame</option>
            </select>
          </div>

          <div class="form-group">
            <label :for="'nom' + n" class="form-label">Nom</label>
            <input type="text" :id="'nom' + n" class="form-control" v-model="enfantsInfo[n - 1].nom" required>
          </div>

          <div class="form-group">
            <label :for="'prenom' + n" class="form-label">Prénom</label>
            <input type="text" :id="'prenom' + n" class="form-control" v-model="enfantsInfo[n - 1].prenom" required>
          </div>

          <div class="form-group">
            <label :for="'dateNaissance' + n" class="form-label">Date de Naissance</label>
            <input type="date" :id="'dateNaissance' + n" class="form-control" v-model="enfantsInfo[n - 1].dateNaissance" required>
          </div>

          <div class="form-group">
            <label :for="'poursuiteEtude' + n" class="form-label">Poursuite d'Étude</label>
            <select :id="'poursuiteEtude' + n" class="form-select" v-model="enfantsInfo[n - 1].poursuiteEtude" required>
              <option value="OUI">Oui</option>
              <option value="NON">Non</option>
            </select>
          </div>
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

const enfantsInfo = reactive(
  Array.from({ length: parseInt(formStore.getFormData.step1.nbrEnfant) }, (_, index) => ({
    cv: 'MR',
    nom: '',
    prenom: '',
    dateNaissance: formStore.getFormData.step1[`dateNaissanceEnfant${index + 1}`] || '',
    poursuiteEtude: 'NON'
  }))
);

const submitStep = () => {
  formStore.updateStepData('enfantsInfo', enfantsInfo);
  formStore.updateCurrentStep(6); // Directly set the current step to 6
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

.child-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: var(--e-global-color-secondary);
  border-radius: 8px;
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
