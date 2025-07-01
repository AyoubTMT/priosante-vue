<template>
  <form @submit.prevent="submitStep" class="step-form">
    <div class="step-container">
      <div class="step-header">
        <h2 class="step-title">Parfait ! Continuons avec les informations des enfants.</h2>
        <p class="step-description">
          Pour finaliser votre devis, j'ai besoin de quelques informations supplémentaires sur vos enfants.
        </p>
      </div>

      <div class="step-section">
        <div v-for="n in parseInt(formStore.getFormData.baseInfo.nbrEnfant)" :key="n" class="child-section">
          <h3>Enfant {{ n }}</h3>
          <div class="form-group">
            <label :for="'cv' + n" class="form-label">Pourriez-vous me donner la civilité de l'enfant ?</label>
            <div class="step-options">
              <div class="option-row">
                <div class="option-card" :class="{ 'selected': enfantsInfo[n - 1].cv === 'MR', 'error': errors[`cv${n}`] }" @click="selectOption(n - 1, 'cv', 'MR')">
                  <div class="option-icon">
                    <img src="../assets/icons/homme.svg" alt="Monsieur">
                  </div>
                  <div class="option-label">Monsieur</div>
                </div>
                <div class="option-card" :class="{ 'selected': enfantsInfo[n - 1].cv === 'MME', 'error': errors[`cv${n}`] }" @click="selectOption(n - 1, 'cv', 'MME')">
                  <div class="option-icon">
                    <img src="../assets/icons/femme.svg" alt="Madame">
                  </div>
                  <div class="option-label">Madame</div>
                </div>
              </div>
              <div class="error-message" v-if="errors[`cv${n}`]">{{ errors[`cv${n}`] }}</div>
            </div>
          </div>

          <div class="form-group" v-if="enfantsInfo[n - 1].cv">
            <label :for="'nom' + n" class="form-label">Quel est le nom de l'enfant ?</label>
            <input type="text" :id="'nom' + n" class="form-control" v-model="enfantsInfo[n - 1].nom" :class="{ 'error': errors[`nom${n}`] }" @focus="clearErrorOnInput(`nom${n}`)" @input="validateField(n - 1, 'nom')" required>
            <div class="error-message" v-if="errors[`nom${n}`]">{{ errors[`nom${n}`] }}</div>
          </div>

          <div class="form-group" v-if="enfantsInfo[n - 1].nom">
            <label :for="'prenom' + n" class="form-label">Quel est le prénom de l'enfant ?</label>
            <input type="text" :id="'prenom' + n" class="form-control" v-model="enfantsInfo[n - 1].prenom" :class="{ 'error': errors[`prenom${n}`] }" @focus="clearErrorOnInput(`prenom${n}`)" @input="validateField(n - 1, 'prenom')" required>
            <div class="error-message" v-if="errors[`prenom${n}`]">{{ errors[`prenom${n}`] }}</div>
          </div>

          <div class="form-group" v-if="enfantsInfo[n - 1].prenom">
            <label :for="'dateNaissance' + n" class="form-label">Pourriez-vous me donner la date de naissance de l'enfant ?</label>
            <input type="date" :id="'dateNaissance' + n" class="form-control" v-model="enfantsInfo[n - 1].dateNaissance" :class="{ 'error': errors[`dateNaissance${n}`] }" @focus="clearErrorOnInput(`dateNaissance${n}`)" @input="validateField(n - 1, 'dateNaissance')" required>
            <div class="error-message" v-if="errors[`dateNaissance${n}`]">{{ errors[`dateNaissance${n}`] }}</div>
          </div>

          <div class="form-group" v-if="enfantsInfo[n - 1].dateNaissance">
            <label :for="'poursuiteEtude' + n" class="form-label">L'enfant poursuit-il ses études ?</label>
            <select :id="'poursuiteEtude' + n" class="form-select" v-model="enfantsInfo[n - 1].poursuiteEtude" :class="{ 'error': errors[`poursuiteEtude${n}`] }" @focus="clearErrorOnInput(`poursuiteEtude${n}`)" @change="validateField(n - 1, 'poursuiteEtude')" required>
              <option value="OUI">Oui</option>
              <option value="NON">Non</option>
            </select>
            <div class="error-message" v-if="errors[`poursuiteEtude${n}`]">{{ errors[`poursuiteEtude${n}`] }}</div>
          </div>
        </div>
      </div>

      <div class="step-footer" v-if="areAllChildrenValid">
        <button type="submit" class="submit-button">Continuer</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, onMounted, nextTick, computed } from 'vue';
import { useFormStore } from '@/stores/useFormStore';
import { toast } from 'vue3-toastify';

const formStore = useFormStore();

const enfantsInfo = reactive(
  Array.from({ length: parseInt(formStore.getFormData.baseInfo.nbrEnfant) }, (_, index) => ({
    cv: '',
    nom: '',
    prenom: '',
    dateNaissance: formStore.getFormData.baseInfo[`dateNaissanceEnfant${index + 1}`] || '',
    poursuiteEtude: 'NON'
  }))
);

const errors = reactive({});

onMounted(() => {
  const storedData = formStore.getFormData.enfantsInfo;
  if (storedData) {
    Object.assign(enfantsInfo, storedData);
  }
});

const areAllChildrenValid = computed(() => {
  return enfantsInfo.every(child => {
    return child.cv && child.nom && child.prenom && child.dateNaissance && child.poursuiteEtude;
  });
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

const selectOption = (index, field, option) => {
  enfantsInfo[index][field] = option;
  clearErrorOnInput(`${field}${index + 1}`);
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

const validateField = (index, field) => {
  switch (field) {
    case 'cv':
      if (!enfantsInfo[index].cv) {
        errors[`cv${index + 1}`] = 'Veuillez sélectionner la civilité.';
      } else {
        clearErrorOnInput(`cv${index + 1}`);
      }
      break;
    case 'nom':
      if (!enfantsInfo[index].nom) {
        errors[`nom${index + 1}`] = 'Veuillez entrer le nom.';
      } else if (enfantsInfo[index].nom.length < 3) {
        errors[`nom${index + 1}`] = 'Le nom doit contenir au moins 3 lettres.';
      } else if (/\d/.test(enfantsInfo[index].nom)) {
        errors[`nom${index + 1}`] = 'Le nom ne doit pas contenir de chiffres.';
      } else {
        clearErrorOnInput(`nom${index + 1}`);
      }
      break;
    case 'prenom':
      if (!enfantsInfo[index].prenom) {
        errors[`prenom${index + 1}`] = 'Veuillez entrer le prénom.';
      } else if (enfantsInfo[index].prenom.length < 3) {
        errors[`prenom${index + 1}`] = 'Le prénom doit contenir au moins 3 lettres.';
      } else if (/\d/.test(enfantsInfo[index].prenom)) {
        errors[`prenom${index + 1}`] = 'Le prénom ne doit pas contenir de chiffres.';
      } else {
        clearErrorOnInput(`prenom${index + 1}`);
      }
      break;
    case 'dateNaissance':
      if (!enfantsInfo[index].dateNaissance) {
        errors[`dateNaissance${index + 1}`] = 'Veuillez entrer la date de naissance.';
      } else {
        const age = calculateAge(enfantsInfo[index].dateNaissance);
        if (age < 0 || age > 30) {
          errors[`dateNaissance${index + 1}`] = 'L\'âge doit être compris entre 0 et 30 ans.';
        } else {
          clearErrorOnInput(`dateNaissance${index + 1}`);
        }
      }
      break;
    case 'poursuiteEtude':
      if (!enfantsInfo[index].poursuiteEtude) {
        errors[`poursuiteEtude${index + 1}`] = 'Veuillez sélectionner si l\'enfant poursuit ses études.';
      } else {
        clearErrorOnInput(`poursuiteEtude${index + 1}`);
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

  enfantsInfo.forEach((child, index) => {
    // Validate cv
    if (!child.cv) {
      errors[`cv${index + 1}`] = 'Veuillez sélectionner la civilité.';
      isValid = false;
      const cvElement = document.querySelector(`.option-card:nth-child(${index + 1})`);
      if (cvElement) {
        cvElement.style.boxShadow = '0 0 0 2px #f4627f';
      }
    }

    // Validate nom
    if (!child.nom) {
      errors[`nom${index + 1}`] = 'Veuillez entrer le nom.';
      isValid = false;
      document.getElementById(`nom${index + 1}`).focus();
      document.getElementById(`nom${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else if (child.nom.length < 3) {
      errors[`nom${index + 1}`] = 'Le nom doit contenir au moins 3 lettres.';
      isValid = false;
      document.getElementById(`nom${index + 1}`).focus();
      document.getElementById(`nom${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else if (/\d/.test(child.nom)) {
      errors[`nom${index + 1}`] = 'Le nom ne doit pas contenir de chiffres.';
      isValid = false;
      document.getElementById(`nom${index + 1}`).focus();
      document.getElementById(`nom${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    }

    // Validate prenom
    if (!child.prenom) {
      errors[`prenom${index + 1}`] = 'Veuillez entrer le prénom.';
      isValid = false;
      document.getElementById(`prenom${index + 1}`).focus();
      document.getElementById(`prenom${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else if (child.prenom.length < 3) {
      errors[`prenom${index + 1}`] = 'Le prénom doit contenir au moins 3 lettres.';
      isValid = false;
      document.getElementById(`prenom${index + 1}`).focus();
      document.getElementById(`prenom${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else if (/\d/.test(child.prenom)) {
      errors[`prenom${index + 1}`] = 'Le prénom ne doit pas contenir de chiffres.';
      isValid = false;
      document.getElementById(`prenom${index + 1}`).focus();
      document.getElementById(`prenom${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    }

    // Validate dateNaissance
    if (!child.dateNaissance) {
      errors[`dateNaissance${index + 1}`] = 'Veuillez entrer la date de naissance.';
      isValid = false;
      document.getElementById(`dateNaissance${index + 1}`).focus();
      document.getElementById(`dateNaissance${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else {
      const age = calculateAge(child.dateNaissance);
      if (age < 0 || age > 30) {
        errors[`dateNaissance${index + 1}`] = 'L\'âge doit être compris entre 0 et 30 ans.';
        isValid = false;
        document.getElementById(`dateNaissance${index + 1}`).focus();
        document.getElementById(`dateNaissance${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
      }
    }

    // Validate poursuiteEtude
    if (!child.poursuiteEtude) {
      errors[`poursuiteEtude${index + 1}`] = 'Veuillez sélectionner si l\'enfant poursuit ses études.';
      isValid = false;
      document.getElementById(`poursuiteEtude${index + 1}`).focus();
      document.getElementById(`poursuiteEtude${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    }
  });

  return isValid;
};

const submitStep = async () => {
  const isValid = await validateForm();

  if (isValid) {
    formStore.updateStepData('enfantsInfo', enfantsInfo);
    formStore.updateCurrentStep(7);
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
