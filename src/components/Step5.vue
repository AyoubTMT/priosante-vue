<template>
  <form @submit.prevent="submitStep" class="step-form">
    <div class="step-container">
      <div class="step-header">
        <h2 class="step-title">Parfait ! Continuons avec les informations du conjoint.</h2>
        <p class="step-description">
          Pour finaliser votre devis, j'ai besoin de quelques informations supplémentaires sur le conjoint.
        </p>
      </div>

      <div class="step-section">
        <label class="form-label">Pourriez-vous me donner la civilité du conjoint ?</label>
        <div class="step-options">
          <div class="option-row">
            <div class="option-card" :class="{ 'selected': conjointInfo.cv === 'MR', 'error': errors.cv }" @click="selectOption('cv', 'MR')">
              <div class="option-icon">
                <img src="../assets/icons/homme.svg" alt="Monsieur">
              </div>
              <div class="option-label">Monsieur</div>
            </div>
            <div class="option-card" :class="{ 'selected': conjointInfo.cv === 'MME', 'error': errors.cv }" @click="selectOption('cv', 'MME')">
              <div class="option-icon">
                <img src="../assets/icons/femme.svg" alt="Madame">
              </div>
              <div class="option-label">Madame</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.cv">{{ errors.cv }}</div>
        </div>
      </div>

      <div class="step-section" v-if="conjointInfo.cv">
        <div class="form-group">
          <label for="nom" class="form-label">Quel est le nom du conjoint ?</label>
          <input type="text" id="nom" class="form-control" v-model="conjointInfo.nom" :class="{ 'error': errors.nom }" @focus="clearErrorOnInput('nom')" @input="validateField('nom')" required>
          <div class="error-message" v-if="errors.nom">{{ errors.nom }}</div>
        </div>
      </div>

      <div class="step-section" v-if="conjointInfo.nom">
        <div class="form-group">
          <label for="prenom" class="form-label">Quel est le prénom du conjoint ?</label>
          <input type="text" id="prenom" class="form-control" v-model="conjointInfo.prenom" :class="{ 'error': errors.prenom }" @focus="clearErrorOnInput('prenom')" @input="validateField('prenom')" required>
          <div class="error-message" v-if="errors.prenom">{{ errors.prenom }}</div>
        </div>
      </div>

      <div class="step-section" v-if="conjointInfo.prenom">
        <div class="form-group">
          <label for="dateNaissance" class="form-label">Pourriez-vous me donner la date de naissance du conjoint ?</label>
          <input type="date" id="dateNaissance" class="form-control" v-model="conjointInfo.dateNaissance" :class="{ 'error': errors.dateNaissance }" @focus="clearErrorOnInput('dateNaissance')" @input="validateField('dateNaissance')" required>
          <div class="error-message" v-if="errors.dateNaissance">{{ errors.dateNaissance }}</div>
        </div>
      </div>

      <div class="step-section" v-if="conjointInfo.prenom">
        <div class="form-group">
          <label for="numeroSS" class="form-label">Quel est le numéro de sécurité sociale du conjoint ?</label>
          <input type="text" id="numeroSS" class="form-control" v-model="conjointInfo.numeroSS" :class="{ 'error': errors.numeroSS }" @focus="clearErrorOnInput('numeroSS')" @input="validateField('numeroSS')" required>
          <div class="error-message" v-if="errors.numeroSS">{{ errors.numeroSS }}</div>
        </div>
      </div>

      <div class="step-section" v-if="conjointInfo.numeroSS">
        <div class="form-group">
          <label for="codeOrga" class="form-label">Quel est le code organisme du conjoint ?</label>
          <input type="text" id="codeOrga" class="form-control" v-model="conjointInfo.codeOrga" :class="{ 'error': errors.codeOrga }" @focus="clearErrorOnInput('codeOrga')" @input="validateField('codeOrga')" required>
          <div class="error-message" v-if="errors.codeOrga">{{ errors.codeOrga }}</div>
        </div>
      </div>

      <div class="step-footer" v-if="conjointInfo.numeroSS">
        <button type="submit" class="submit-button">Continuer</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, onMounted, nextTick } from 'vue';
import { useFormStore } from '@/stores/useFormStore';
import { toast } from 'vue3-toastify';

const formStore = useFormStore();

const conjointInfo = reactive({
  cv: '',
  nom: '',
  prenom: '',
  dateNaissance: formStore.getFormData.baseInfo.dateNaissanceConjoint || '',
  ayantDroitDe: 'AUCUN',
  numeroSS: '',
  codeOrga: '',
  ayantDroit: ''
});

const errors = reactive({});

onMounted(() => {
  const storedData = formStore.getFormData.conjointInfo;
  if (storedData) {
    Object.assign(conjointInfo, storedData);
  }
  // Load dateNaissance from step1
  const step1Data = formStore.getFormData.baseInfo;
  if (step1Data && step1Data.dateNaissanceConjoint) {
    conjointInfo.dateNaissance = step1Data.dateNaissanceConjoint;
  }
});

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
  conjointInfo[field] = option;
  clearErrorOnInput(field);
};

const calculateAge = (dateString) => {
  const birthDate = new Date(dateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const validateField = (field) => {
  switch (field) {
    case 'cv':
      if (!conjointInfo.cv) {
        errors.cv = 'Veuillez sélectionner la civilité.';
      } else {
        clearErrorOnInput('cv');
      }
      break;
    case 'nom':
      if (!conjointInfo.nom) {
        errors.nom = 'Veuillez entrer le nom.';
      } else if (conjointInfo.nom.length < 3) {
        errors.nom = 'Le nom doit contenir au moins 3 lettres.';
      } else if (/\d/.test(conjointInfo.nom)) {
        errors.nom = 'Le nom ne doit pas contenir de chiffres.';
      } else {
        clearErrorOnInput('nom');
      }
      break;
    case 'prenom':
      if (!conjointInfo.prenom) {
        errors.prenom = 'Veuillez entrer le prénom.';
      } else if (conjointInfo.prenom.length < 3) {
        errors.prenom = 'Le prénom doit contenir au moins 3 lettres.';
      } else if (/\d/.test(conjointInfo.prenom)) {
        errors.prenom = 'Le prénom ne doit pas contenir de chiffres.';
      } else {
        clearErrorOnInput('prenom');
      }
      break;
    case 'dateNaissance':
      if (!conjointInfo.dateNaissance) {
        errors.dateNaissance = 'Veuillez entrer la date de naissance.';
      } else {
        const age = calculateAge(conjointInfo.dateNaissance);
        if (age < 18 || age > 100) {
          errors.dateNaissance = 'L\'âge doit être compris entre 18 et 100 ans.';
        } else {
          clearErrorOnInput('dateNaissance');
        }
      }
      break;
    case 'numeroSS':
      if (!conjointInfo.numeroSS) {
        errors.numeroSS = 'Veuillez entrer le numéro de sécurité sociale.';
      } else if (!/^\d{15}$/.test(conjointInfo.numeroSS)) {
        errors.numeroSS = 'Le numéro de sécurité sociale doit contenir exactement 15 chiffres.';
      } else {
        clearErrorOnInput('numeroSS');
      }
      break;
    case 'codeOrga':
      if (!conjointInfo.codeOrga) {
        errors.codeOrga = 'Veuillez entrer le code organisme.';
      } else if (!/^\d+$/.test(conjointInfo.codeOrga)) {
        errors.codeOrga = 'Le code organisme doit être composé uniquement de chiffres.';
      } else {
        clearErrorOnInput('codeOrga');
      }
      break;
    case 'ayantDroit':
      if (!conjointInfo.ayantDroit) {
        errors.ayantDroit = 'Veuillez entrer l\'ayant droit.';
      } else {
        clearErrorOnInput('ayantDroit');
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

  // Validate cv
  if (!conjointInfo.cv) {
    errors.cv = 'Veuillez sélectionner la civilité.';
    isValid = false;
    await nextTick();
    const cvElement = document.querySelector('.option-card');
    if (cvElement) {
      cvElement.style.boxShadow = '0 0 0 2px #f4627f';
    }
  }

  // Validate nom
  if (!conjointInfo.nom) {
    errors.nom = 'Veuillez entrer le nom.';
    isValid = false;
    await nextTick();
    document.getElementById('nom').focus();
    document.getElementById('nom').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (conjointInfo.nom.length < 3) {
    errors.nom = 'Le nom doit contenir au moins 3 lettres.';
    isValid = false;
    await nextTick();
    document.getElementById('nom').focus();
    document.getElementById('nom').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (/\d/.test(conjointInfo.nom)) {
    errors.nom = 'Le nom ne doit pas contenir de chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('nom').focus();
    document.getElementById('nom').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate prenom
  if (!conjointInfo.prenom) {
    errors.prenom = 'Veuillez entrer le prénom.';
    isValid = false;
    await nextTick();
    document.getElementById('prenom').focus();
    document.getElementById('prenom').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (conjointInfo.prenom.length < 3) {
    errors.prenom = 'Le prénom doit contenir au moins 3 lettres.';
    isValid = false;
    await nextTick();
    document.getElementById('prenom').focus();
    document.getElementById('prenom').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (/\d/.test(conjointInfo.prenom)) {
    errors.prenom = 'Le prénom ne doit pas contenir de chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('prenom').focus();
    document.getElementById('prenom').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate dateNaissance
  if (!conjointInfo.dateNaissance) {
    errors.dateNaissance = 'Veuillez entrer la date de naissance.';
    isValid = false;
    await nextTick();
    document.getElementById('dateNaissance').focus();
    document.getElementById('dateNaissance').style.boxShadow = '0 0 0 2px #f4627f';
  } else {
    const age = calculateAge(conjointInfo.dateNaissance);
    if (age < 18 || age > 100) {
      errors.dateNaissance = 'L\'âge doit être compris entre 18 et 100 ans.';
      isValid = false;
      await nextTick();
      document.getElementById('dateNaissance').focus();
      document.getElementById('dateNaissance').style.boxShadow = '0 0 0 2px #f4627f';
    }
  }

  // Validate numeroSS
  if (!conjointInfo.numeroSS) {
    errors.numeroSS = 'Veuillez entrer le numéro de sécurité sociale.';
    isValid = false;
    await nextTick();
    document.getElementById('numeroSS').focus();
    document.getElementById('numeroSS').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (!/^\d{15}$/.test(conjointInfo.numeroSS)) {
    errors.numeroSS = 'Le numéro de sécurité sociale doit contenir exactement 15 chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('numeroSS').focus();
    document.getElementById('numeroSS').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate codeOrga
  if (!conjointInfo.codeOrga) {
    errors.codeOrga = 'Veuillez entrer le code organisme.';
    isValid = false;
    await nextTick();
    document.getElementById('codeOrga').focus();
    document.getElementById('codeOrga').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (!/^\d+$/.test(conjointInfo.codeOrga)) {
    errors.codeOrga = 'Le code organisme doit être composé uniquement de chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('codeOrga').focus();
    document.getElementById('codeOrga').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate ayantDroit
  if (!conjointInfo.ayantDroit) {
    errors.ayantDroit = 'Veuillez entrer l\'ayant droit.';
    isValid = false;
    await nextTick();
    document.getElementById('ayantDroit').focus();
    document.getElementById('ayantDroit').style.boxShadow = '0 0 0 2px #f4627f';
  }

  return isValid;
};

const submitStep = async () => {
  const isValid = await validateForm();

  if (isValid) {
    formStore.updateStepData('conjointInfo', conjointInfo);
    if ((formStore.getFormData.baseInfo.assure.includes('enfant(s)')) && formStore.getFormData.baseInfo.nbrEnfant > 0) {
      formStore.updateCurrentStep(6);
    } else {
      formStore.updateCurrentStep(7);
    }
  } else {
    toast.error("Le formulaire contient des erreurs. Veuillez les corriger avant de soumettre.");
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
