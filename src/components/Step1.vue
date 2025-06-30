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
        <label class="form-label">Qui souhaitez-vous assurer ?</label>
        <div class="step-options">
          <div class="option-row">
            <div class="option-card" :class="{ 'selected': localData.assure === 'Un adulte', error: errors.assure }" @click="selectOption('assure', 'Un adulte')">
              <div class="option-icon">
                <img src="../assets/icons/personne.png" alt="Un adulte">
              </div>
              <div class="option-label">Un adulte</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.assure === 'Un adulte + enfant(s)', error: errors.assure }" @click="selectOption('assure', 'Un adulte + enfant(s)')">
              <div class="option-icon">
                <img src="../assets/icons/mere-et-fils.png" alt="Un adulte + enfant(s)">
              </div>
              <div class="option-label">Un adulte + enfant(s)</div>
            </div>
          </div>
          <div class="option-row">
            <div class="option-card" :class="{ 'selected': localData.assure === 'Un couple', error: errors.assure }" @click="selectOption('assure', 'Un couple')">
              <div class="option-icon">
                <img src="../assets/icons/couple.png" alt="Un couple">
              </div>
              <div class="option-label">Un couple</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.assure === 'Un couple + enfant(s)', error: errors.assure }" @click="selectOption('assure', 'Un couple + enfant(s)')">
              <div class="option-icon">
                <img src="../assets/icons/famille.png" alt="Un couple + enfant(s)">
              </div>
              <div class="option-label">Un couple + enfant(s)</div>
            </div>
          </div>
        </div>
        <div class="error-message" v-if="errors.assure">{{ errors.assure }}</div>
      </div>

      <div class="step-section">
        <div class="form-group" v-if="localData.assure">
          <label for="dateNaissance" class="form-label">Date de naissance</label>
          <input
            type="date"
            id="dateNaissance"
            class="form-control"
            v-model="localData.dateNaissance"
            :class="{ error: errors.dateNaissance }"
            @focus="clearErrorOnInput('dateNaissance')"
            @input="validateField('dateNaissance')"
          />
          <div class="error-message" v-if="errors.dateNaissance">{{ errors.dateNaissance }}</div>
        </div>

        <div class="form-group" v-if="localData.dateNaissance && (localData.assure === 'Un couple' || localData.assure === 'Un couple + enfant(s)')">
          <label for="dateNaissanceConjoint" class="form-label">Date de naissance du conjoint</label>
          <input
            type="date"
            id="dateNaissanceConjoint"
            class="form-control"
            v-model="localData.dateNaissanceConjoint"
            :class="{ error: errors.dateNaissanceConjoint }"
            @focus="clearErrorOnInput('dateNaissanceConjoint')"
            @input="validateField('dateNaissanceConjoint')"
          />
          <div class="error-message" v-if="errors.dateNaissanceConjoint">{{ errors.dateNaissanceConjoint }}</div>
        </div>

        <div class="form-group" v-if="localData.dateNaissance && (localData.assure === 'Un adulte + enfant(s)' || localData.assure === 'Un couple + enfant(s)')">
          <label for="nbrEnfant" class="form-label">Nombre d'enfants</label>
          <input
            type="number"
            id="nbrEnfant"
            class="form-control"
            v-model="localData.nbrEnfant"
            min="0"
            max="8"
            :class="{ error: errors.nbrEnfant }"
            @focus="clearErrorOnInput('nbrEnfant')"
            @input="validateField('nbrEnfant')"
          />
          <div class="error-message" v-if="errors.nbrEnfant">{{ errors.nbrEnfant }}</div>
        </div>

        <div class="form-group" v-if="localData.nbrEnfant > 0  && (localData.assure === 'Un adulte + enfant(s)' || localData.assure === 'Un couple + enfant(s)')">
          <div v-for="n in parseInt(localData.nbrEnfant)" :key="n" class="child-section">
            <label class="form-label">Date de naissance de l'enfant {{ n }}</label>
            <input
              type="date"
              class="form-control"
              v-model="localData[`dateNaissanceEnfant${n}`]"
              :class="{ error: errors[`dateNaissanceEnfant${n}`] }"
              @focus="clearErrorOnInput(`dateNaissanceEnfant${n}`)"
              @input="validateField(`dateNaissanceEnfant${n}`)"
            />
            <div class="error-message" v-if="errors[`dateNaissanceEnfant${n}`]">
              {{ errors[`dateNaissanceEnfant${n}`] }}
            </div>
          </div>
        </div>

        <div class="form-group" v-if="localData.dateNaissance">
          <label for="dateEffet" class="form-label">Date d'effet</label>
          <input
            type="date"
            id="dateEffet"
            class="form-control"
            v-model="localData.dateEffet"
            :class="{ error: errors.dateEffet }"
            @focus="clearErrorOnInput('dateEffet')"
            @input="validateField('dateEffet')"
          />
          <div class="error-message" v-if="errors.dateEffet">{{ errors.dateEffet }}</div>
        </div>

        <div class="form-group" v-if="localData.dateEffet">
          <label for="regime" class="form-label">Régime</label>
          <select
            id="regime"
            class="form-select"
            v-model="localData.regime"
            :class="{ error: errors.regime }"
            @focus="clearErrorOnInput('regime')"
            @change="validateField('regime')"
          >
            <option value="">-- Sélectionnez --</option>
            <option value="SECURITE_SOCIALE">Sécurité Sociale</option>
            <option value="INDEPENDANT">Indépendant</option>
            <option value="ALSACE_MOSELLE">Alsace Moselle</option>
            <option value="MONACO">Monaco</option>
            <option value="EXPLOITANTS_AGRICOLES">Exploitants Agricoles</option>
            <option value="FRONTALIER_SUISSE">Frontalier Suisse</option>
            <option value="SALARIE_AGRICOLE">Salarié Agricole</option>
          </select>
          <div class="error-message" v-if="errors.regime">{{ errors.regime }}</div>
        </div>

        <div class="form-group" v-if="localData.regime">
          <label for="codePostal" class="form-label">Code Postal</label>
          <input
            type="text"
            id="codePostal"
            class="form-control"
            v-model="localData.codePostal"
            :class="{ error: errors.codePostal }"
            @focus="clearErrorOnInput('codePostal')"
            @input="validateField('codePostal')"
          />
          <div class="error-message" v-if="errors.codePostal">{{ errors.codePostal }}</div>
        </div>

        <div class="form-group" v-if="localData.codePostal">
          <label class="form-label">Budget mensuel *</label>
          <div class="option-row">
            <div class="option-card-budget" :class="{ 'selected': localData.budget === 'ENTRE_20_ET_50', error: errors.budget }" @click="selectOption('budget', 'ENTRE_20_ET_50')">
              <div class="option-label">Entre 20 et 50 €</div>
            </div>
            <div class="option-card-budget" :class="{ 'selected': localData.budget === 'ENTRE_50_ET_100', error: errors.budget }" @click="selectOption('budget', 'ENTRE_50_ET_100')">
              <div class="option-label">Entre 50 et 100 €</div>
            </div>
            <div class="option-card-budget" :class="{ 'selected': localData.budget === 'ENTRE_100_ET_250', error: errors.budget }" @click="selectOption('budget', 'ENTRE_100_ET_250')">
              <div class="option-label">Entre 100 et 250 €</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.budget">{{ errors.budget }}</div>
        </div>
      </div>

      <div class="step-footer">
        <button type="submit" class="submit-button" v-if="localData.codePostal">Votre devis en 2 minutes</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref, watch, computed, nextTick } from 'vue';
import { useFormStore } from '@/stores/useFormStore';
import { toast } from 'vue3-toastify';
import axios from 'axios';

const formStore = useFormStore();
const step1Data = formStore.getFormData;

const localData = reactive({
  assure: step1Data.baseInfo.assure || '',
  dateNaissance: step1Data.baseInfo.dateNaissance || '',
  dateNaissanceConjoint: step1Data.baseInfo.dateNaissanceConjoint || '',
  nbrEnfant: step1Data.baseInfo.nbrEnfant || 0,
  dateEffet: step1Data.baseInfo.dateEffet || '',
  regime: step1Data.baseInfo.regime || '',
  codePostal: step1Data.baseInfo.codePostal || '',
  dateNaissanceEnfant1: step1Data.baseInfo.dateNaissanceEnfant1 || '',
  dateNaissanceEnfant2: step1Data.baseInfo.dateNaissanceEnfant2 || '',
  dateNaissanceEnfant3: step1Data.baseInfo.dateNaissanceEnfant3 || '',
  dateNaissanceEnfant4: step1Data.baseInfo.dateNaissanceEnfant4 || '',
  dateNaissanceEnfant5: step1Data.baseInfo.dateNaissanceEnfant5 || '',
  dateNaissanceEnfant6: step1Data.baseInfo.dateNaissanceEnfant6 || '',
  dateNaissanceEnfant7: step1Data.baseInfo.dateNaissanceEnfant7 || '',
  dateNaissanceEnfant8: step1Data.baseInfo.dateNaissanceEnfant8 || '',
  budget: step1Data.baseInfo.budget || '',
});

const errors = reactive({});

const submitStep = async () => {
  const isValid = await validateForm();

  if (isValid) {
    formStore.updateStepData('baseInfo', localData);
    formStore.updateCurrentStep(2); // Directly set the current step to 2
  } else {
    console.log("Le formulaire contient des erreurs. Veuillez les corriger avant de soumettre.");
  }
};


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

const showModal = ref(false);
const modalTrigger = ref(null);

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentDay = today.getDate();

const minDateNaissance = computed(() => {
  const minDate = new Date();
  minDate.setFullYear(currentYear - 100);
  return minDate.toISOString().split('T')[0];
});

const maxDateNaissance = computed(() => {
  const maxDate = new Date();
  maxDate.setFullYear(currentYear - 18);
  return maxDate.toISOString().split('T')[0];
});

const maxDateNaissanceEnfant = computed(() => {
  const maxDate = new Date();
  return maxDate.toISOString().split('T')[0];
});

const minDateNaissanceEnfant = computed(() => {
  const minDate = new Date();
  minDate.setFullYear(currentYear - 30);
  return minDate.toISOString().split('T')[0];
});

const minDateEffet = computed(() => {
  let begin = new Date();
  if (currentDay > 15) {
    begin = new Date(currentYear, currentMonth + 1, 2);
  }
  return begin.toISOString().split('T')[0];
});

const maxDateEffet = computed(() => {
  let endDate = new Date();
  endDate.setFullYear(2026);
  let end;
  if (currentMonth >= 10) {
    end = new Date(currentYear + 1, 0, 1);
  } else {
    end = new Date(currentYear, 12, 2);
  }
  return end.toISOString().split('T')[0];
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
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
    case 'dateNaissance':
      if (localData.dateNaissance && !isValidDate(localData.dateNaissance, minDateNaissance.value, maxDateNaissance.value)) {
        errors.dateNaissance = `Veuillez entrer une date de naissance valide. L'âge doit être compris entre 18 ans et 100 ans.`;
      } else {
        clearErrorOnInput('dateNaissance');
      }
      break;
    case 'dateNaissanceConjoint':
      if (localData.dateNaissanceConjoint && !isValidDate(localData.dateNaissanceConjoint, minDateNaissance.value, maxDateNaissance.value)) {
        errors.dateNaissanceConjoint = 'Veuillez entrer une date de naissance valide pour le conjoint.';
      } else {
        clearErrorOnInput('dateNaissanceConjoint');
      }
      break;
    case 'nbrEnfant':
      if (localData.nbrEnfant && (localData.nbrEnfant < 0 || localData.nbrEnfant > 8)) {
        errors.nbrEnfant = 'Le nombre d\'enfants doit être compris entre 0 et 8. Veuillez entrer un nombre valide.';
      } else {
        clearErrorOnInput('nbrEnfant');
      }
      break;
    case 'dateEffet':
      if (localData.dateEffet && !isValidDate(localData.dateEffet, minDateEffet.value, maxDateEffet.value)) {
        errors.dateEffet = 'Veuillez entrer une date d\'effet valide. La date doit être comprise entre le ' + formatDate(minDateEffet.value) + ' et le ' + formatDate(maxDateEffet.value) + '.';
      } else {
        clearErrorOnInput('dateEffet');
      }
      break;
    case 'regime':
      if (!localData.regime) {
        errors.regime = 'Veuillez sélectionner un régime dans la liste déroulante.';
      } else {
        clearErrorOnInput('regime');
      }
      break;
    case 'codePostal':
      if (localData.codePostal && !/^\d{5}$/.test(localData.codePostal)) {
        errors.codePostal = 'Le code postal doit être composé de 5 chiffres. Veuillez entrer un code postal valide.';
      } else {
        clearErrorOnInput('codePostal');
      }
      break;
    default:
      if (field.startsWith('dateNaissanceEnfant')) {
        const n = field.replace('dateNaissanceEnfant', '');
        if (localData[field] && !isValidDate(localData[field], minDateNaissanceEnfant.value, maxDateNaissanceEnfant.value)) {
          errors[field] = `Veuillez entrer une date de naissance valide pour l'enfant ${n}. L'âge doit être inférieur à 30 ans.`;
        } else {
          clearErrorOnInput(field);
        }
      }
      break;
  }
};

const isValidDate = (dateStr, minDateStr, maxDateStr) => {
  const date = new Date(dateStr);
  const minDate = new Date(minDateStr);
  const maxDate = new Date(maxDateStr);
  return date >= minDate && date <= maxDate;
};

const validateForm = async () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = '';
  });

  // Validate assure
  if (!localData.assure) {
    errors.assure = 'Veuillez sélectionner une option.';
    isValid = false;
    await nextTick();
    const assureElement = document.querySelector('.option-card');
    if (assureElement) {
      assureElement.style.boxShadow = '0 0 0 2px #f4627f';
    }
  }

  // Validate dateNaissance
  if (localData.dateNaissance == '' && !isValidDate(localData.dateNaissance, minDateNaissance.value, maxDateNaissance.value)) {
    errors.dateNaissance = "La date de naissance doit être valide. L'âge doit être compris entre 18 ans et 100 ans.";
    isValid = false;
    await nextTick();
    document.getElementById('dateNaissance').focus();
    document.getElementById('dateNaissance').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate dateNaissanceConjoint
  if (localData.dateNaissanceConjoint && !isValidDate(localData.dateNaissanceConjoint, minDateNaissance.value, maxDateNaissance.value)) {
    errors.dateNaissanceConjoint = "La date de naissance du conjoint doit être valide. L'âge doit être compris entre 18 ans et 100 ans.";
    isValid = false;
    await nextTick();
    document.getElementById('dateNaissanceConjoint').focus();
    document.getElementById('dateNaissanceConjoint').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate nbrEnfant
  if (localData.nbrEnfant && (localData.nbrEnfant < 0 || localData.nbrEnfant > 8)) {
    errors.nbrEnfant = 'Le nombre d\'enfants doit être compris entre 0 et 8.';
    isValid = false;
    await nextTick();
    document.getElementById('nbrEnfant').focus();
    document.getElementById('nbrEnfant').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate enfants dates
  for (let i = 1; i <= localData.nbrEnfant; i++) {
    const dateField = `dateNaissanceEnfant${i}`;
    if (localData[dateField] && !isValidDate(localData[dateField], minDateNaissance.value, maxDateNaissanceEnfant.value)) {
      errors[dateField] = `La date de naissance de l'enfant ${i} doit être valide.`;
      isValid = false;
      await nextTick();
      document.querySelector(`input[class*="dateNaissanceEnfant${i}"]`).focus();
      document.querySelector(`input[class*="dateNaissanceEnfant${i}"]`).style.boxShadow = '0 0 0 2px #f4627f';
    }
  }

  // Validate dateEffet
  if (localData.dateEffet && !isValidDate(localData.dateEffet, minDateEffet.value, maxDateEffet.value)) {
    errors.dateEffet = 'La date d\'effet doit être valide.';
    isValid = false;
    await nextTick();
    document.getElementById('dateEffet').focus();
    document.getElementById('dateEffet').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate regime
  if (!localData.regime && localData.dateEffet) {
    errors.regime = 'Veuillez sélectionner un régime.';
    isValid = false;
    await nextTick();
    document.getElementById('regime').focus();
    document.getElementById('regime').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate codePostal
  if (localData.codePostal && !/^\d{5}$/.test(localData.codePostal)) {
    errors.codePostal = 'Le code postal doit être composé de 5 chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('codePostal').focus();
    document.getElementById('codePostal').style.boxShadow = '0 0 0 2px #f4627f';
  }

  if (!localData.budget) {
    errors.budget = 'Veuillez sélectionner un budget mensuel.';
    isValid = false;
  }

  return isValid;
};


// Watch for changes in nbrEnfant to update the form
watch(() => localData.nbrEnfant, (newVal) => {
  if (newVal > 0) {
    // Initialize pursuit study fields for each child
    for (let i = 1; i <= newVal; i++) {
      if (!localData[`poursuiteEtudeEnfant${i}`]) {
        localData[`poursuiteEtudeEnfant${i}`] = "NON";
      }
    }
  }
});
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

.form-control.error, .form-select.error {
  box-shadow: 0 0 0 2px #f4627f;
}

.error-message {
  color: #f4627f;
  font-size: 14px;
  margin-top: 5px;
}

.step-options {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.option-row {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.option-card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  width: 180px;
  height: 150px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.option-card-budget {
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

.option-card:hover, .option-card-budget:hover {
  background-color: var(--e-global-color-02c5432);
  border-color: var(--e-global-color-accent);
}

.option-card.selected, .option-card-budget.selected {
  background-color: var(--e-global-color-accent);
  border-color: var(--e-global-color-accent);
  color: white;
}

.option-card.selected .option-label, .option-card-budget.selected .option-label {
  color: white;
}

.option-icon {
  margin-bottom: 10px;
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

.child-section {
  margin-bottom: 20px;
  padding: 15px;
  background-color: var(--e-global-color-secondary);
  border-radius: 8px;
}

.radio-group {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
</style>
