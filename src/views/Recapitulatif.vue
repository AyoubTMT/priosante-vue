<template>
  <div class="recap-container">
    <div class="recap-header">
      <h2 class="recap-title">Récapitulatif de votre devis</h2>
      <p class="recap-description">
        Veuillez vérifier les informations ci-dessous et confirmer pour finaliser votre devis.
      </p>
    </div>

    <div class="recap-section">
      <h3>Informations Personnelles</h3>
      <p><strong>Nom:</strong> {{ souscripteurInfo.nom }} {{ souscripteurInfo.prenom }}</p>
      <p><strong>Date de Naissance:</strong> {{ souscripteurInfo.dateNaissance }}</p>
      <p><strong>Email:</strong> {{ souscripteurInfo.email }}</p>
      <p><strong>Téléphone:</strong> {{ souscripteurInfo.tel }}</p>
    </div>

    <div class="recap-section">
      <h3>Informations Professionnelles</h3>
      <p><strong>Profession:</strong> {{ souscripteurInfo.profession }}</p>
      <p><strong>Revenu Mensuel:</strong> {{ souscripteurInfo.revenuMensuel }}</p>
    </div>

    <div class="recap-section">
      <h3>Situation Familiale</h3>
      <p><strong>Situation:</strong> {{ souscripteurInfo.situationFam }}</p>
      <p><strong>Assuré Principal:</strong> {{ souscripteurInfo.souscripteurIsAssure }}</p>
    </div>

    <div class="recap-section" v-if="enfantsInfo.length > 0">
      <h3>Informations des Enfants</h3>
      <div v-for="(enfant, index) in enfantsInfo" :key="index" class="child-info">
        <p><strong>Enfant {{ index + 1 }}:</strong> {{ enfant.nom }} {{ enfant.prenom }}</p>
        <p><strong>Date de Naissance:</strong> {{ enfant.dateNaissance }}</p>
        <p><strong>Poursuit ses études:</strong> {{ enfant.poursuiteEtude }}</p>
      </div>
    </div>

    <div class="recap-section">
      <h3>Informations de Paiement</h3>
      <p><strong>IBAN pour le prélèvement:</strong> {{ payeurInfo.ibanPrelevemnt }}</p>
      <p><strong>IBAN de remboursement différent:</strong> {{ payeurInfo.ibanRembDifferent }}</p>
      <p v-if="payeurInfo.ibanRembDifferent === 'OUI'"><strong>IBAN de remboursement:</strong> {{ payeurInfo.ibanRemboursement }}</p>
      <p><strong>Mandat SEPA:</strong> {{ payeurInfo.mandatSepa }}</p>
      <p v-if="payeurInfo.mandatSepa === 'SAISIR_RUM'"><strong>RUM:</strong> {{ payeurInfo.rum }}</p>
    </div>

    <div class="recap-section">
      <h3>Récapitulatif du Devis</h3>
      <p><strong>Produit:</strong> {{ selectedTarif.produit }}</p>
      <p><strong>Formule:</strong> {{ selectedTarif.formule }}</p>
      <p><strong>Date d'effet:</strong> {{ baseInfo.dateEffet }}</p>
      <p><strong>Coût:</strong> [Détails du coût]</p>
    </div>

    <div class="recap-footer">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="confirmation" v-model="confirmation">
        <label class="form-check-label" for="confirmation">
          Je confirme que toutes les informations fournies sont exactes et je suis d'accord avec les termes et conditions.
        </label>
      </div>
      <button type="button" class="btn btn-primary" @click="finalizeSubmission">Finaliser et Soumettre</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFormStore } from '@/stores/useFormStore';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';

const formStore = useFormStore();
const router = useRouter();

const souscripteurInfo = ref(formStore.getFormData.souscripteurInfo);
const enfantsInfo = ref(formStore.getFormData.enfantsInfo);
const payeurInfo = ref(formStore.getFormData.payeurInfo);
const selectedTarif = ref(formStore.getFormData.selectedTarif);
const baseInfo = ref(formStore.getFormData.baseInfo);
const confirmation = ref(false);

const finalizeSubmission = () => {
  if (confirmation.value) {
    // Logic to finalize and submit the form
    toast.success("Votre devis a été soumis avec succès!");
    router.push('/confirmation');
  } else {
    toast.error("Veuillez confirmer que toutes les informations sont correctes.");
  }
};
</script>

<style scoped>
.recap-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: var(--e-global-typography-primary-font-family);
}

.recap-header {
  text-align: center;
  margin-bottom: 30px;
}

.recap-title {
  color: var(--e-global-color-primary);
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}

.recap-description {
  color: var(--e-global-color-text);
  font-size: 16px;
  margin-bottom: 20px;
}

.recap-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: var(--e-global-color-secondary);
  border-radius: 8px;
}

.recap-section h3 {
  color: var(--e-global-color-primary);
  margin-bottom: 15px;
}

.recap-section p {
  margin-bottom: 10px;
}

.child-info {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.recap-footer {
  text-align: center;
  margin-top: 30px;
}

.form-check {
  margin-bottom: 20px;
}

.btn-primary {
  width: 100%;
  background-color: var(--color5);
  color: #000;
  height: 60px;
  border-radius: 9px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: var(--color4);
  color: #fff;
}
</style>
