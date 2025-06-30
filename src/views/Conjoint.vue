<template>
  <form @submit.prevent="submitStep" class="step-form">
    <div class="step-container">
      <div class="step-header">
        <h2 class="step-title">Informations du Conjoint</h2>
        <p class="step-description">
          Veuillez fournir les informations du conjoint.
        </p>
      </div>

      <div class="step-section">
        <div class="form-group">
          <label for="cv" class="form-label">Civilité</label>
          <select id="cv" class="form-select" v-model="conjointInfo.cv" required>
            <option value="MR">Monsieur</option>
            <option value="MME">Madame</option>
          </select>
        </div>

        <div class="form-group">
          <label for="nom" class="form-label">Nom</label>
          <input type="text" id="nom" class="form-control" v-model="conjointInfo.nom" required>
        </div>

        <div class="form-group">
          <label for="prenom" class="form-label">Prénom</label>
          <input type="text" id="prenom" class="form-control" v-model="conjointInfo.prenom" required>
        </div>

        <div class="form-group">
          <label for="dateNaissance" class="form-label">Date de Naissance</label>
          <input type="date" id="dateNaissance" class="form-control" v-model="conjointInfo.dateNaissance" required>
        </div>

        <div class="form-group">
          <label for="ayantDroitDe" class="form-label">Ayant Droit De</label>
          <select id="ayantDroitDe" class="form-select" v-model="conjointInfo.ayantDroitDe" required>
            <option value="AUTRE">Autre</option>
            <option value="AUCUN">Aucun</option>
          </select>
        </div>

        <div class="form-group" v-if="conjointInfo.ayantDroitDe === 'AUCUN'">
          <label for="numeroSS" class="form-label">Numéro SS</label>
          <input type="text" id="numeroSS" class="form-control" v-model="conjointInfo.numeroSS" required>
        </div>

        <div class="form-group" v-if="conjointInfo.ayantDroitDe === 'AUCUN'">
          <label for="codeOrga" class="form-label">Code Orga</label>
          <input type="text" id="codeOrga" class="form-control" v-model="conjointInfo.codeOrga" required>
        </div>

        <div class="form-group" v-if="conjointInfo.ayantDroitDe === 'AUTRE'">
          <label for="ayantDroit" class="form-label">Ayant Droit</label>
          <input type="text" id="ayantDroit" class="form-control" v-model="conjointInfo.ayantDroit" required>
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
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const formStore = useFormStore();
const router = useRouter();

const conjointInfo = reactive({
  cv: 'MR',
  nom: '',
  prenom: '',
  dateNaissance: formStore.getFormData.step1.dateNaissanceConjoint || '',
  ayantDroitDe: 'AUCUN',
  numeroSS: '',
  codeOrga: '',
  ayantDroit: ''
});

const submitStep = () => {
  formStore.updateStepData('conjointInfo', conjointInfo);
  if (formStore.getFormData.step1.nbrEnfant > 0) {
    router.push('/devis/enfants');
  } else {
    router.push('/devis/payeur');
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
