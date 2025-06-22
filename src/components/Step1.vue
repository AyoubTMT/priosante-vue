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
            <div class="option-card" :class="{ 'selected': localData.assure === 'Un adulte' }" @click="selectOption('Un adulte')">
              <div class="option-icon">
                <img src="../assets/icons/personne.png" alt="Un adulte">
              </div>
              <div class="option-label">Un adulte</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.assure === 'Un adulte + enfant(s)' }" @click="selectOption('Un adulte + enfant(s)')">
              <div class="option-icon">
                <img src="../assets/icons/mere-et-fils.png" alt="Un adulte + enfant(s)">
              </div>
              <div class="option-label">Un adulte + enfant(s)</div>
            </div>
          </div>
          <div class="option-row">
            <div class="option-card" :class="{ 'selected': localData.assure === 'Un couple' }" @click="selectOption('Un couple')">
              <div class="option-icon">
                <img src="../assets/icons/couple.png" alt="Un couple">
              </div>
              <div class="option-label">Un couple</div>
            </div>
            <div class="option-card" :class="{ 'selected': localData.assure === 'Un couple + enfant(s)' }" @click="selectOption('Un couple + enfant(s)')">
              <div class="option-icon">
                <img src="../assets/icons/famille.png" alt="Un couple + enfant(s)">
              </div>
              <div class="option-label">Un couple + enfant(s)</div>
            </div>
          </div>
        </div>
      </div>

      <div class="step-section">
        <div class="form-group" v-if="localData.assure">
          <label for="dateNaissance" class="form-label">Date de naissance</label>
          <input type="date" id="dateNaissance" class="form-control" v-model="localData.dateNaissance" :max="maxDateNaissance" :min="minDateNaissance" required>
          <div class="error-message" v-if="errors.dateNaissance">{{ errors.dateNaissance }}</div>
        </div>

        <div class="form-group" v-if="localData.dateNaissance && (localData.assure === 'Un couple' || localData.assure === 'Un couple + enfant(s)')">
          <label for="dateNaissanceConjoint" class="form-label">Date de naissance du conjoint</label>
          <input type="date" id="dateNaissanceConjoint" class="form-control" v-model="localData.dateNaissanceConjoint" :max="maxDateNaissance" :min="minDateNaissance" required>
          <div class="error-message" v-if="errors.dateNaissanceConjoint">{{ errors.dateNaissanceConjoint }}</div>
        </div>

        <div class="form-group" v-if="localData.dateNaissance && (localData.assure === 'Un adulte + enfant(s)' || localData.assure === 'Un couple + enfant(s)')">
          <label for="nbrEnfant" class="form-label">Nombre d'enfants</label>
          <input type="number" id="nbrEnfant" class="form-control" v-model="localData.nbrEnfant" min="0" max="8" required>
          <div class="error-message" v-if="errors.nbrEnfant">{{ errors.nbrEnfant }}</div>
        </div>

        <div class="form-group" v-if="localData.nbrEnfant > 0">
          <div v-for="n in parseInt(localData.nbrEnfant)" :key="n" class="child-section">
            <label class="form-label">Date de naissance de l'enfant {{ n }}</label>
            <input type="date" class="form-control" v-model="localData[`dateNaissanceEnfant${n}`]" :max="maxDateNaissanceEnfant" :min="minDateNaissance" required>
            <div class="error-message" v-if="errors[`dateNaissanceEnfant${n}`]">{{ errors[`dateNaissanceEnfant${n}`] }}</div>
            <label class="form-label">Je déclare que l'enfant {{ n }} poursuit des études et qu'il est couvert par le régime du souscripteur ou par un régime étudiant</label>
            <div class="radio-group">
              <label>
                <input type="radio" v-model="localData[`poursuiteEtudeEnfant${n}`]" value="OUI" required> Oui
              </label>
              <label>
                <input type="radio" v-model="localData[`poursuiteEtudeEnfant${n}`]" value="NON"> Non
              </label>
            </div>
          </div>
        </div>

        <div class="form-group" v-if="localData.dateNaissance">
          <label for="dateEffet" class="form-label">Date d'effet</label>
          <input type="date" id="dateEffet" class="form-control" v-model="localData.dateEffet" :min="minDateEffet" :max="maxDateEffet" required>
          <div class="error-message" v-if="errors.dateEffet">{{ errors.dateEffet }}</div>
        </div>

        <div class="form-group" v-if="localData.dateEffet">
          <label for="regime" class="form-label">Régime</label>
          <select name="regime" id="regime" class="form-select" v-model="localData.regime" required>
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
          <input type="text" id="codePostal" class="form-control" v-model="localData.codePostal" pattern="\d{5}" required>
          <div class="error-message" v-if="errors.codePostal">{{ errors.codePostal }}</div>
        </div>
      </div>

      <div class="step-footer">
        <img src="../assets/icons/googlereviews.svg" width="222" height="22" alt="google reviews">
        <button type="submit" class="submit-button">Votre devis en 2 minutes</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref, watch, computed } from 'vue';
import { useFormStore } from '@/stores/useFormStore';
import { useRouter } from 'vue-router';

const formStore = useFormStore();
const router = useRouter();

const localData = reactive({
  assure: formStore.formData.step1.assure || "",
  dateNaissance: "",
  dateNaissanceConjoint: "",
  nbrEnfant: 0,
  dateEffet: "",
  regime: "",
  codePostal: "",
});

const errors = reactive({});

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
  maxDate.setFullYear(currentYear - 30);
  return maxDate.toISOString().split('T')[0];
});

const minDateEffet = computed(() => {
  let begin = new Date();
  if (currentDay > 15) {
    begin = new Date(currentYear, currentMonth + 1, 1);
  } else {
    begin = new Date(currentYear, currentMonth, 1);
  }
  return begin.toISOString().split('T')[0];
});

const maxDateEffet = computed(() => {
  let endDate = new Date();
  endDate.setFullYear(currentYear + 1);
  let end;
  console.log(today);
  console.log(endDate);
  if (currentMonth >= 10) {
    end = new Date(currentYear + 1, 4, 1);
  } else {
    end = new Date(currentYear + 1, 0, 1);
  }
  console.log(end);
  return end.toISOString().split('T')[0];
});

const selectOption = (option) => {
  localData.assure = option;
};

const validateForm = () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = '';
  });

  // Validate dateNaissance
  if (localData.dateNaissance && !isValidDate(localData.dateNaissance, minDateNaissance.value, maxDateNaissance.value)) {
    errors.dateNaissance = 'La date de naissance doit être valide.';
    isValid = false;
  }

  // Validate dateNaissanceConjoint
  if (localData.dateNaissanceConjoint && !isValidDate(localData.dateNaissanceConjoint, minDateNaissance.value, maxDateNaissance.value)) {
    errors.dateNaissanceConjoint = 'La date de naissance du conjoint doit être valide.';
    isValid = false;
  }

  // Validate dateEffet
  if (localData.dateEffet && !isValidDate(localData.dateEffet, minDateEffet.value, maxDateEffet.value)) {
    errors.dateEffet = 'La date d\'effet doit être valide.';
    isValid = false;
  }

  // Validate codePostal
  if (localData.codePostal && !/^\d{5}$/.test(localData.codePostal)) {
    errors.codePostal = 'Le code postal doit être composé de 5 chiffres.';
    isValid = false;
  }

  // Validate enfants dates
  for (let i = 1; i <= localData.nbrEnfant; i++) {
    const dateField = `dateNaissanceEnfant${i}`;
    if (localData[dateField] && !isValidDate(localData[dateField], minDateNaissance.value, maxDateNaissanceEnfant.value)) {
      errors[dateField] = `La date de naissance de l'enfant ${i} doit être valide.`;
      isValid = false;
    }
  }

  return isValid;
};

const isValidDate = (dateStr, minDateStr, maxDateStr) => {
  const date = new Date(dateStr);
  const minDate = new Date(minDateStr);
  const maxDate = new Date(maxDateStr);
  return date >= minDate && date <= maxDate;
};

const submitStep = () => {
  if (validateForm()) {
    formStore.updateStepData('step1', localData);
    formStore.nextStep();
    router.push('/devis/options');
  }
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

.error-message {
  color: var(--color6);
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
