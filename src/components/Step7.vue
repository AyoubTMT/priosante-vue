<template>
  <form @submit.prevent="submitStep" class="step-form">
    <div class="step-container">
      <div class="step-header">
        <h2 class="step-title">Informations du Payeur</h2>
        <p class="step-description">
          Veuillez fournir les informations du payeur.
        </p>
      </div>

      <div class="step-section">
        <div class="form-group">
          <label for="ibanPrelevemnt" class="form-label">IBAN Prélèvement</label>
          <input type="text" id="ibanPrelevemnt" class="form-control" v-model="payeurInfo.ibanPrelevemnt" required>
        </div>

        <div class="form-group">
          <label for="ibanRembDifferent" class="form-label">IBAN Remboursement Différent</label>
          <select id="ibanRembDifferent" class="form-select" v-model="payeurInfo.ibanRembDifferent" required>
            <option value="OUI">Oui</option>
            <option value="NON">Non</option>
          </select>
        </div>

        <div class="form-group" v-if="payeurInfo.ibanRembDifferent === 'OUI'">
          <label for="ibanRemboursement" class="form-label">IBAN Remboursement</label>
          <input type="text" id="ibanRemboursement" class="form-control" v-model="payeurInfo.ibanRemboursement" required>
        </div>

        <div class="form-group">
          <label for="mandatSepa" class="form-label">Mandat SEPA</label>
          <select id="mandatSepa" class="form-select" v-model="payeurInfo.mandatSepa" required>
            <option value="GENERER_MANDAT">Générer Mandat</option>
            <option value="SAISIR_RUM">Saisir RUM</option>
          </select>
        </div>

        <div class="form-group" v-if="payeurInfo.mandatSepa === 'SAISIR_RUM'">
          <label for="rum" class="form-label">RUM</label>
          <input type="text" id="rum" class="form-control" v-model="payeurInfo.rum" required>
        </div>

        <div class="form-group">
          <label for="payeurDifferent" class="form-label">Payeur Différent</label>
          <select id="payeurDifferent" class="form-select" v-model="payeurInfo.payeurDifferent" required>
            <option value="OUI">Oui</option>
            <option value="NON">Non</option>
          </select>
        </div>

        <div class="form-group" v-if="payeurInfo.payeurDifferent === 'OUI'">
          <label for="nomPayeur" class="form-label">Nom Payeur</label>
          <input type="text" id="nomPayeur" class="form-control" v-model="payeurInfo.nomPayeur" required>
        </div>

        <div class="form-group" v-if="payeurInfo.payeurDifferent === 'OUI'">
          <label for="prenomPayeur" class="form-label">Prénom Payeur</label>
          <input type="text" id="prenomPayeur" class="form-control" v-model="payeurInfo.prenomPayeur" required>
        </div>

        <div class="form-group" v-if="payeurInfo.payeurDifferent === 'OUI'">
          <label for="numeroPayeur" class="form-label">Numéro Payeur</label>
          <input type="text" id="numeroPayeur" class="form-control" v-model="payeurInfo.numeroPayeur">
        </div>

        <div class="form-group" v-if="payeurInfo.payeurDifferent === 'OUI'">
          <label for="typeVoiePayeur" class="form-label">Type de Voie Payeur</label>
          <select id="typeVoiePayeur" class="form-select" v-model="payeurInfo.typeVoiePayeur" required>
            <option value="ALLEE">Allée</option>
            <option value="AVENUE">Avenue</option>
            <option value="BOULEVARD">Boulevard</option>
            <option value="BOURG">Bourg</option>
            <option value="CHEMIN">Chemin</option>
            <option value="COURS">Cours</option>
            <option value="CLOS">Clos</option>
            <option value="CARREFOUR">Carrefour</option>
            <option value="DIGUE">Digue</option>
            <option value="FAUBOURG">Faubourg</option>
            <option value="IMPASSE">Impasse</option>
            <option value="PASSAGE">Passage</option>
            <option value="PARC">Parc</option>
            <option value="PLACE">Place</option>
            <option value="PROMENADE">Promenade</option>
            <option value="QUAI">Quai</option>
            <option value="ROND_POINT">Rond-Point</option>
            <option value="ROUTE">Route</option>
            <option value="RUE">Rue</option>
            <option value="RUELLE">Ruelle</option>
            <option value="SENTIER">Sentier</option>
            <option value="SQUARE">Square</option>
            <option value="TRAVERSE">Traverse</option>
            <option value="VOIE">Voie</option>
            <option value="LIEU_DIT">Lieu-dit</option>
          </select>
        </div>

        <div class="form-group" v-if="payeurInfo.payeurDifferent === 'OUI'">
          <label for="voiePayeur" class="form-label">Voie Payeur</label>
          <input type="text" id="voiePayeur" class="form-control" v-model="payeurInfo.voiePayeur" required>
        </div>

        <div class="form-group" v-if="payeurInfo.payeurDifferent === 'OUI'">
          <label for="batimentPayeur" class="form-label">Bâtiment Payeur</label>
          <input type="text" id="batimentPayeur" class="form-control" v-model="payeurInfo.batimentPayeur">
        </div>

        <div class="form-group" v-if="payeurInfo.payeurDifferent === 'OUI'">
          <label for="libellePayeur" class="form-label">Libellé Payeur</label>
          <input type="text" id="libellePayeur" class="form-control" v-model="payeurInfo.libellePayeur" required>
        </div>

        <div class="form-group" v-if="payeurInfo.payeurDifferent === 'OUI'">
          <label for="codePostalPayeur" class="form-label">Code Postal Payeur</label>
          <input type="text" id="codePostalPayeur" class="form-control" v-model="payeurInfo.codePostalPayeur" required>
        </div>

        <div class="form-group" v-if="payeurInfo.payeurDifferent === 'OUI'">
          <label for="villePayeur" class="form-label">Ville Payeur</label>
          <input type="text" id="villePayeur" class="form-control" v-model="payeurInfo.villePayeur" required>
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

const payeurInfo = reactive({
  ibanPrelevemnt: '',
  ibanRembDifferent: 'NON',
  ibanRemboursement: '',
  mandatSepa: 'GENERER_MANDAT',
  rum: '',
  payeurDifferent: 'NON',
  nomPayeur: '',
  prenomPayeur: '',
  numeroPayeur: '',
  typeVoiePayeur: '',
  voiePayeur: '',
  batimentPayeur: '',
  libellePayeur: '',
  codePostalPayeur: '',
  villePayeur: ''
});

const submitStep = () => {
  formStore.updateStepData('payeurInfo', payeurInfo);
  router.push('/devis/recapitulatif');
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
