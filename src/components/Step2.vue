<template>
  <form @submit.prevent="submitStep" class="step-form">
    <div class="step-container">
      <div class="step-header">
        <h2 class="step-title">Devis mutuelle santé</h2>
        <p class="step-description">
          Prenons quelques minutes pour définir ensemble la meilleure offre.
        </p>
      </div>

      <div class="step-section">
        <div class="form-group">
          <label class="form-label">Budget mensuel *</label>
          <div class="option-row">
            <div class="option-card" :class="{ 'selected': localData.budget === '20-50', error: errors.budget }" @click="selectOption('budget', '20-50')">
              <div class="option-label">Entre 20 et 50 €</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.budget === '50-100', error: errors.budget }" @click="selectOption('budget', '50-100')">
              <div class="option-label">Entre 50 et 100 €</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.budget === '100-250', error: errors.budget }" @click="selectOption('budget', '100-250')">
              <div class="option-label">Entre 100 et 250 €</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.budget">{{ errors.budget }}</div>
        </div>

        <div class="form-group">
          <label class="form-label">Soins courants *</label>
          <div class="option-row">
            <div class="option-card" :class="{ 'selected': localData.soinsCourants === 'Faible', error: errors.soinsCourants }" @click="selectOption('soinsCourants', 'Faible')">
              <div class="option-label">Faible</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.soinsCourants === 'Moyen', error: errors.soinsCourants }" @click="selectOption('soinsCourants', 'Moyen')">
              <div class="option-label">Moyen</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.soinsCourants === 'Élevé', error: errors.soinsCourants }" @click="selectOption('soinsCourants', 'Élevé')">
              <div class="option-label">Élevé</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.soinsCourants">{{ errors.soinsCourants }}</div>
        </div>

        <div class="form-group">
          <label class="form-label">Hospitalisation *</label>
          <div class="option-row">
            <div class="option-card" :class="{ 'selected': localData.hospitalisation === 'Faible', error: errors.hospitalisation }" @click="selectOption('hospitalisation', 'Faible')">
              <div class="option-label">Faible</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.hospitalisation === 'Moyen', error: errors.hospitalisation }" @click="selectOption('hospitalisation', 'Moyen')">
              <div class="option-label">Moyen</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.hospitalisation === 'Élevé', error: errors.hospitalisation }" @click="selectOption('hospitalisation', 'Élevé')">
              <div class="option-label">Élevé</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.hospitalisation">{{ errors.hospitalisation }}</div>
        </div>

        <div class="form-group">
          <label class="form-label">Optique *</label>
          <div class="option-row">
            <div class="option-card" :class="{ 'selected': localData.optique === 'Faible', error: errors.optique }" @click="selectOption('optique', 'Faible')">
              <div class="option-label">Faible</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.optique === 'Moyen', error: errors.optique }" @click="selectOption('optique', 'Moyen')">
              <div class="option-label">Moyen</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.optique === 'Élevé', error: errors.optique }" @click="selectOption('optique', 'Élevé')">
              <div class="option-label">Élevé</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.optique">{{ errors.optique }}</div>
        </div>

        <div class="form-group">
          <label class="form-label">Dentaire *</label>
          <div class="option-row">
            <div class="option-card" :class="{ 'selected': localData.dentaire === 'Faible', error: errors.dentaire }" @click="selectOption('dentaire', 'Faible')">
              <div class="option-label">Faible</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.dentaire === 'Moyen', error: errors.dentaire }" @click="selectOption('dentaire', 'Moyen')">
              <div class="option-label">Moyen</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.dentaire === 'Élevé', error: errors.dentaire }" @click="selectOption('dentaire', 'Élevé')">
              <div class="option-label">Élevé</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.dentaire">{{ errors.dentaire }}</div>
        </div>

        <div class="form-group">
          <label class="form-label">Appareil auditif *</label>
          <div class="option-row">
            <div class="option-card" :class="{ 'selected': localData.appareilAuditif === 'Faible', error: errors.appareilAuditif }" @click="selectOption('appareilAuditif', 'Faible')">
              <div class="option-label">Faible</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.appareilAuditif === 'Moyen', error: errors.appareilAuditif }" @click="selectOption('appareilAuditif', 'Moyen')">
              <div class="option-label">Moyen</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.appareilAuditif === 'Élevé', error: errors.appareilAuditif }" @click="selectOption('appareilAuditif', 'Élevé')">
              <div class="option-label">Élevé</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.appareilAuditif">{{ errors.appareilAuditif }}</div>
        </div>

        <div class="form-group">
          <label class="form-label">Médecines douces *</label>
          <div class="option-row">
            <div class="option-card" :class="{ 'selected': localData.medecinesDouces === 'Non', error: errors.medecinesDouces }" @click="selectOption('medecinesDouces', 'Non')">
              <div class="option-label">Non</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.medecinesDouces === 'Oui', error: errors.medecinesDouces }" @click="selectOption('medecinesDouces', 'Oui')">
              <div class="option-label">Oui</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.medecinesDouces">{{ errors.medecinesDouces }}</div>
        </div>
      </div>

      <div class="step-footer">
        <button type="submit" class="submit-button">Votre devis en 2 minutes</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref, watch, computed, nextTick } from 'vue';
import { useFormStore } from '@/stores/useFormStore';
import { useRouter } from 'vue-router';

const formStore = useFormStore();
const router = useRouter();
const step2Data = formStore.getFormData;

const localData = reactive({
  budget: step2Data.step2.budget || '',
  soinsCourants: step2Data.step2.soinsCourants || '',
  hospitalisation: step2Data.step2.hospitalisation || '',
  optique: step2Data.step2.optique || '',
  dentaire: step2Data.step2.dentaire || '',
  appareilAuditif: step2Data.step2.appareilAuditif || '',
  medecinesDouces: step2Data.step2.medecinesDouces || '',
});

const errors = reactive({});

const clearErrorOnInput = (field) => {
  if (errors[field]) {
    errors[field] = '';
  }

  const input = document.querySelector(`#${field}`);
  if (input) {
    input.style.boxShadow = 'none';
  }
};

const selectOption = (field, option) => {
  localData[field] = option;
  clearErrorOnInput(field);
};

const validateField = (field) => {
  switch (field) {
    case 'budget':
      if (!localData.budget) {
        errors.budget = 'Veuillez sélectionner un budget mensuel.';
      } else {
        clearErrorOnInput('budget');
      }
      break;
    case 'soinsCourants':
      if (!localData.soinsCourants) {
        errors.soinsCourants = 'Veuillez sélectionner un niveau de soins courants.';
      } else {
        clearErrorOnInput('soinsCourants');
      }
      break;
    case 'hospitalisation':
      if (!localData.hospitalisation) {
        errors.hospitalisation = 'Veuillez sélectionner un niveau d\'hospitalisation.';
      } else {
        clearErrorOnInput('hospitalisation');
      }
      break;
    case 'optique':
      if (!localData.optique) {
        errors.optique = 'Veuillez sélectionner un niveau d\'optique.';
      } else {
        clearErrorOnInput('optique');
      }
      break;
    case 'dentaire':
      if (!localData.dentaire) {
        errors.dentaire = 'Veuillez sélectionner un niveau de soins dentaires.';
      } else {
        clearErrorOnInput('dentaire');
      }
      break;
    case 'appareilAuditif':
      if (!localData.appareilAuditif) {
        errors.appareilAuditif = 'Veuillez sélectionner un niveau d\'appareil auditif.';
      } else {
        clearErrorOnInput('appareilAuditif');
      }
      break;
    case 'medecinesDouces':
      if (!localData.medecinesDouces) {
        errors.medecinesDouces = 'Veuillez sélectionner une option pour les médecines douces.';
      } else {
        clearErrorOnInput('medecinesDouces');
      }
      break;
  }
};

const validateForm = async () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = '';
  });

  // Validate fields
  if (!localData.budget) {
    errors.budget = 'Veuillez sélectionner un budget mensuel.';
    isValid = false;
  }

  if (!localData.soinsCourants) {
    errors.soinsCourants = 'Veuillez sélectionner un niveau de soins courants.';
    isValid = false;
  }

  if (!localData.hospitalisation) {
    errors.hospitalisation = 'Veuillez sélectionner un niveau d\'hospitalisation.';
    isValid = false;
  }

  if (!localData.optique) {
    errors.optique = 'Veuillez sélectionner un niveau d\'optique.';
    isValid = false;
  }

  if (!localData.dentaire) {
    errors.dentaire = 'Veuillez sélectionner un niveau de soins dentaires.';
    isValid = false;
  }

  if (!localData.appareilAuditif) {
    errors.appareilAuditif = 'Veuillez sélectionner un niveau d\'appareil auditif.';
    isValid = false;
  }

  if (!localData.medecinesDouces) {
    errors.medecinesDouces = 'Veuillez sélectionner une option pour les médecines douces.';
    isValid = false;
  }

  return isValid;
};

const submitStep = async () => {
  const isValid = await validateForm();

  if (isValid) {
    formStore.updateStepData('step2', localData);
    formStore.nextStep();
    router.push('/devis/options');
  } else {
    console.log("Le formulaire contient des erreurs. Veuillez les corriger avant de soumettre.");
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

.step-container {
  background-color: var(--e-global-color-secondary);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

.form-label {
  display: block;
  margin-bottom: 10px;
  color: var(--e-global-color-primary);
  font-size: 16px;
  font-weight: 600;
}

.form-group {
  margin-bottom: 20px;
}

.option-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.option-card {
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.option-card:hover {
  background-color: var(--e-global-color-02c5432);
  border-color: var(--e-global-color-accent);
}

.option-card.selected {
  background-color: var(--e-global-color-accent);
  border-color: var(--e-global-color-accent);
  color: white;
}

.option-card.selected .option-label {
  color: white;
}

.option-label {
  color: var(--e-global-color-primary);
  font-size: 16px;
  font-weight: 600;
}

.step-footer {
  text-align: center;
  margin-top: 30px;
}

.submit-button {
  width: 100%;
  background-color: var(--color3);
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
  background-color: var(--color1);
  color: #fff;
}

.error-message {
  color: #f4627f;
  font-size: 14px;
  margin-top: 5px;
}
</style>
