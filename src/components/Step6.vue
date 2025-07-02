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

          <div class="form-group" v-if="enfantsInfo[n - 1].dateNaissance">
            <label :for="'ayantDroitDe' + n" class="form-label">Quel est l'ayant droit de l'enfant ?</label>
            <div class="option-row">
              <div class="option-card-budget" :class="{ 'selected': enfantsInfo[n - 1].ayantDroitDe === 'ASSURE_1', 'error': errors[`ayantDroitDe${n}`] }" @click="selectOption(n - 1, 'ayantDroitDe', 'ASSURE_1')">
                <div class="option-label">Assuré 1</div>
              </div>
              <div class="option-card-budget" :class="{ 'selected': enfantsInfo[n - 1].ayantDroitDe === 'ASSURE_2', 'error': errors[`ayantDroitDe${n}`] }" @click="selectOption(n - 1, 'ayantDroitDe', 'ASSURE_2')">
                <div class="option-label">Assuré 2</div>
              </div>
              <div class="option-card-budget" :class="{ 'selected': enfantsInfo[n - 1].ayantDroitDe === 'AUCUN', 'error': errors[`ayantDroitDe${n}`] }" @click="selectOption(n - 1, 'ayantDroitDe', 'AUCUN')">
                <div class="option-label">Aucun</div>
              </div>
              <div class="option-card-budget" :class="{ 'selected': enfantsInfo[n - 1].ayantDroitDe === 'AUTRE', 'error': errors[`ayantDroitDe${n}`] }" @click="selectOption(n - 1, 'ayantDroitDe', 'AUTRE')">
                <div class="option-label">Autre</div>
              </div>
            </div>
            <div class="error-message" v-if="errors[`ayantDroitDe${n}`]">{{ errors[`ayantDroitDe${n}`] }}</div>
          </div>

          <div v-if="enfantsInfo[n - 1].ayantDroitDe === 'AUCUN'">
            <div class="form-group">
              <label :for="'numeroSS' + n" class="form-label">Quel est le numéro de sécurité sociale de l'enfant ?</label>
              <input type="text" :id="'numeroSS' + n" class="form-control" v-model="enfantsInfo[n - 1].numeroSS" :class="{ 'error': errors[`numeroSS${n}`] }" @focus="clearErrorOnInput(`numeroSS${n}`)" @input="validateField(n - 1, 'numeroSS')" required>
              <div class="error-message" v-if="errors[`numeroSS${n}`]">{{ errors[`numeroSS${n}`] }}</div>
            </div>

            <div class="form-group">
              <label :for="'codeOrga' + n" class="form-label">Quel est le code organisme de l'enfant ?</label>
              <input type="text" :id="'codeOrga' + n" class="form-control" v-model="enfantsInfo[n - 1].codeOrga" :class="{ 'error': errors[`codeOrga${n}`] }" @focus="clearErrorOnInput(`codeOrga${n}`)" @input="validateField(n - 1, 'codeOrga')" required>
              <div class="error-message" v-if="errors[`codeOrga${n}`]">{{ errors[`codeOrga${n}`] }}</div>
            </div>
          </div>

          <div v-if="enfantsInfo[n - 1].ayantDroitDe === 'AUTRE'">
            <div class="form-group">
              <label :for="'cvAyantDroit' + n" class="form-label">Civilité de l'ayant droit</label>
              <div class="option-row">
                <div class="option-card" :class="{ 'selected': enfantsInfo[n - 1].cvAyantDroit === 'MR', 'error': errors[`cvAyantDroit${n}`] }" @click="selectOption(n - 1, 'cvAyantDroit', 'MR')">
                  <div class="option-icon">
                    <img src="../assets/icons/homme.svg" alt="Monsieur">
                  </div>
                  <div class="option-label">Monsieur</div>
                </div>
                <div class="option-card" :class="{ 'selected': enfantsInfo[n - 1].cvAyantDroit === 'MME', 'error': errors[`cvAyantDroit${n}`] }" @click="selectOption(n - 1, 'cvAyantDroit', 'MME')">
                  <div class="option-icon">
                    <img src="../assets/icons/femme.svg" alt="Madame">
                  </div>
                  <div class="option-label">Madame</div>
                </div>
              </div>
              <div class="error-message" v-if="errors[`cvAyantDroit${n}`]">{{ errors[`cvAyantDroit${n}`] }}</div>
            </div>

            <div class="form-group" v-if="enfantsInfo[n - 1].cvAyantDroit">
              <label :for="'nomAyantDroit' + n" class="form-label">Nom de l'ayant droit</label>
              <input type="text" :id="'nomAyantDroit' + n" class="form-control" v-model="enfantsInfo[n - 1].nomAyantDroit" :class="{ 'error': errors[`nomAyantDroit${n}`] }" @focus="clearErrorOnInput(`nomAyantDroit${n}`)" @input="validateField(n - 1, 'nomAyantDroit')" required>
              <div class="error-message" v-if="errors[`nomAyantDroit${n}`]">{{ errors[`nomAyantDroit${n}`] }}</div>
            </div>

            <div class="form-group" v-if="enfantsInfo[n - 1].nomAyantDroit">
              <label :for="'prenomAyantDroit' + n" class="form-label">Prénom de l'ayant droit</label>
              <input type="text" :id="'prenomAyantDroit' + n" class="form-control" v-model="enfantsInfo[n - 1].prenomAyantDroit" :class="{ 'error': errors[`prenomAyantDroit${n}`] }" @focus="clearErrorOnInput(`prenomAyantDroit${n}`)" @input="validateField(n - 1, 'prenomAyantDroit')" required>
              <div class="error-message" v-if="errors[`prenomAyantDroit${n}`]">{{ errors[`prenomAyantDroit${n}`] }}</div>
            </div>

            <div class="form-group" v-if="enfantsInfo[n - 1].prenomAyantDroit">
              <label :for="'dateNaissanceAyantDroit' + n" class="form-label">Date de naissance de l'ayant droit</label>
              <input type="date" :id="'dateNaissanceAyantDroit' + n" class="form-control" v-model="enfantsInfo[n - 1].dateNaissanceAyantDroit" :class="{ 'error': errors[`dateNaissanceAyantDroit${n}`] }" @focus="clearErrorOnInput(`dateNaissanceAyantDroit${n}`)" @input="validateField(n - 1, 'dateNaissanceAyantDroit')" required>
              <div class="error-message" v-if="errors[`dateNaissanceAyantDroit${n}`]">{{ errors[`dateNaissanceAyantDroit${n}`] }}</div>
            </div>

            <div class="form-group" v-if="enfantsInfo[n - 1].dateNaissanceAyantDroit">
              <label :for="'numeroSSAyantDroit' + n" class="form-label">Numéro de sécurité sociale de l'ayant droit</label>
              <input type="text" :id="'numeroSSAyantDroit' + n" class="form-control" v-model="enfantsInfo[n - 1].numeroSSAyantDroit" :class="{ 'error': errors[`numeroSSAyantDroit${n}`] }" @focus="clearErrorOnInput(`numeroSSAyantDroit${n}`)" @input="validateField(n - 1, 'numeroSSAyantDroit')" required>
              <div class="error-message" v-if="errors[`numeroSSAyantDroit${n}`]">{{ errors[`numeroSSAyantDroit${n}`] }}</div>
            </div>

            <div class="form-group" v-if="enfantsInfo[n - 1].numeroSSAyantDroit">
              <label :for="'codeOrgaAyantDroit' + n" class="form-label">Code organisme de l'ayant droit</label>
              <input type="text" :id="'codeOrgaAyantDroit' + n" class="form-control" v-model="enfantsInfo[n - 1].codeOrgaAyantDroit" :class="{ 'error': errors[`codeOrgaAyantDroit${n}`] }" @focus="clearErrorOnInput(`codeOrgaAyantDroit${n}`)" @input="validateField(n - 1, 'codeOrgaAyantDroit')" required>
              <div class="error-message" v-if="errors[`codeOrgaAyantDroit${n}`]">{{ errors[`codeOrgaAyantDroit${n}`] }}</div>
            </div>
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
    poursuiteEtude: 'NON',
    ayantDroitDe: '',
    numeroSS: '',
    codeOrga: '',
    cvAyantDroit: '',
    nomAyantDroit: '',
    prenomAyantDroit: '',
    dateNaissanceAyantDroit: '',
    numeroSSAyantDroit: '',
    codeOrgaAyantDroit: ''
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
    case 'ayantDroitDe':
      if (!enfantsInfo[index].ayantDroitDe) {
        errors[`ayantDroitDe${index + 1}`] = 'Veuillez sélectionner l\'ayant droit.';
      } else {
        clearErrorOnInput(`ayantDroitDe${index + 1}`);
      }
      break;
    case 'numeroSS':
      if (enfantsInfo[index].ayantDroitDe === 'AUCUN' && !enfantsInfo[index].numeroSS) {
        errors[`numeroSS${index + 1}`] = 'Veuillez entrer le numéro de sécurité sociale.';
      } else if (enfantsInfo[index].ayantDroitDe === 'AUCUN' && !/^\d{15}$/.test(enfantsInfo[index].numeroSS)) {
        errors[`numeroSS${index + 1}`] = 'Le numéro de sécurité sociale doit être composé de 15 chiffres.';
      } else {
        clearErrorOnInput(`numeroSS${index + 1}`);
      }
      break;
    case 'codeOrga':
      if (enfantsInfo[index].ayantDroitDe === 'AUCUN' && !enfantsInfo[index].codeOrga) {
        errors[`codeOrga${index + 1}`] = 'Veuillez entrer le code organisme.';
      } else if (enfantsInfo[index].ayantDroitDe === 'AUCUN' && !/^\d{9}$/.test(enfantsInfo[index].codeOrga)) {
        errors[`codeOrga${index + 1}`] = 'Le code organisme doit être composé de 9 chiffres.';
      } else {
        clearErrorOnInput(`codeOrga${index + 1}`);
      }
      break;
    case 'cvAyantDroit':
      if (enfantsInfo[index].ayantDroitDe === 'AUTRE' && !enfantsInfo[index].cvAyantDroit) {
        errors[`cvAyantDroit${index + 1}`] = 'Veuillez sélectionner la civilité de l\'ayant droit.';
      } else {
        clearErrorOnInput(`cvAyantDroit${index + 1}`);
      }
      break;
    case 'nomAyantDroit':
      if (enfantsInfo[index].ayantDroitDe === 'AUTRE' && !enfantsInfo[index].nomAyantDroit) {
        errors[`nomAyantDroit${index + 1}`] = 'Veuillez entrer le nom de l\'ayant droit.';
      } else if (enfantsInfo[index].ayantDroitDe === 'AUTRE' && enfantsInfo[index].nomAyantDroit.length < 3) {
        errors[`nomAyantDroit${index + 1}`] = 'Le nom doit contenir au moins 3 lettres.';
      } else if (enfantsInfo[index].ayantDroitDe === 'AUTRE' && /\d/.test(enfantsInfo[index].nomAyantDroit)) {
        errors[`nomAyantDroit${index + 1}`] = 'Le nom ne doit pas contenir de chiffres.';
      } else {
        clearErrorOnInput(`nomAyantDroit${index + 1}`);
      }
      break;
    case 'prenomAyantDroit':
      if (enfantsInfo[index].ayantDroitDe === 'AUTRE' && !enfantsInfo[index].prenomAyantDroit) {
        errors[`prenomAyantDroit${index + 1}`] = 'Veuillez entrer le prénom de l\'ayant droit.';
      } else if (enfantsInfo[index].ayantDroitDe === 'AUTRE' && enfantsInfo[index].prenomAyantDroit.length < 3) {
        errors[`prenomAyantDroit${index + 1}`] = 'Le prénom doit contenir au moins 3 lettres.';
      } else if (enfantsInfo[index].ayantDroitDe === 'AUTRE' && /\d/.test(enfantsInfo[index].prenomAyantDroit)) {
        errors[`prenomAyantDroit${index + 1}`] = 'Le prénom ne doit pas contenir de chiffres.';
      } else {
        clearErrorOnInput(`prenomAyantDroit${index + 1}`);
      }
      break;
    case 'dateNaissanceAyantDroit':
      if (enfantsInfo[index].ayantDroitDe === 'AUTRE' && !enfantsInfo[index].dateNaissanceAyantDroit) {
        errors[`dateNaissanceAyantDroit${index + 1}`] = 'Veuillez entrer la date de naissance de l\'ayant droit.';
      } else {
        clearErrorOnInput(`dateNaissanceAyantDroit${index + 1}`);
      }
      break;
    case 'numeroSSAyantDroit':
      if (enfantsInfo[index].ayantDroitDe === 'AUTRE' && !enfantsInfo[index].numeroSSAyantDroit) {
        errors[`numeroSSAyantDroit${index + 1}`] = 'Veuillez entrer le numéro de sécurité sociale de l\'ayant droit.';
      } else if (enfantsInfo[index].ayantDroitDe === 'AUTRE' && !/^\d{15}$/.test(enfantsInfo[index].numeroSSAyantDroit)) {
        errors[`numeroSSAyantDroit${index + 1}`] = 'Le numéro de sécurité sociale doit être composé de 15 chiffres.';
      } else {
        clearErrorOnInput(`numeroSSAyantDroit${index + 1}`);
      }
      break;
    case 'codeOrgaAyantDroit':
      if (enfantsInfo[index].ayantDroitDe === 'AUTRE' && !enfantsInfo[index].codeOrgaAyantDroit) {
        errors[`codeOrgaAyantDroit${index + 1}`] = 'Veuillez entrer le code organisme de l\'ayant droit.';
      } else if (enfantsInfo[index].ayantDroitDe === 'AUTRE' && !/^\d{9}$/.test(enfantsInfo[index].codeOrgaAyantDroit)) {
        errors[`codeOrgaAyantDroit${index + 1}`] = 'Le code organisme doit être composé de 9 chiffres.';
      } else {
        clearErrorOnInput(`codeOrgaAyantDroit${index + 1}`);
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

    // Validate ayantDroitDe
    if (!child.ayantDroitDe) {
      errors[`ayantDroitDe${index + 1}`] = 'Veuillez sélectionner l\'ayant droit.';
      isValid = false;
      document.getElementById(`ayantDroitDe${index + 1}`).focus();
      document.getElementById(`ayantDroitDe${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    }

    // Validate numeroSS
    if (child.ayantDroitDe === 'AUCUN' && !child.numeroSS) {
      errors[`numeroSS${index + 1}`] = 'Veuillez entrer le numéro de sécurité sociale.';
      isValid = false;
      document.getElementById(`numeroSS${index + 1}`).focus();
      document.getElementById(`numeroSS${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else if (child.ayantDroitDe === 'AUCUN' && !/^\d{15}$/.test(child.numeroSS)) {
      errors[`numeroSS${index + 1}`] = 'Le numéro de sécurité sociale doit être composé de 15 chiffres.';
      isValid = false;
      document.getElementById(`numeroSS${index + 1}`).focus();
      document.getElementById(`numeroSS${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    }

    // Validate codeOrga
    if (child.ayantDroitDe === 'AUCUN' && !child.codeOrga) {
      errors[`codeOrga${index + 1}`] = 'Veuillez entrer le code organisme.';
      isValid = false;
      document.getElementById(`codeOrga${index + 1}`).focus();
      document.getElementById(`codeOrga${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else if (child.ayantDroitDe === 'AUCUN' && !/^\d{9}$/.test(child.codeOrga)) {
      errors[`codeOrga${index + 1}`] = 'Le code organisme doit être composé de 9 chiffres.';
      isValid = false;
      document.getElementById(`codeOrga${index + 1}`).focus();
      document.getElementById(`codeOrga${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    }

    // Validate cvAyantDroit
    if (child.ayantDroitDe === 'AUTRE' && !child.cvAyantDroit) {
      errors[`cvAyantDroit${index + 1}`] = 'Veuillez sélectionner la civilité de l\'ayant droit.';
      isValid = false;
      document.getElementById(`cvAyantDroit${index + 1}`).focus();
      document.getElementById(`cvAyantDroit${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    }

    // Validate nomAyantDroit
    if (child.ayantDroitDe === 'AUTRE' && !child.nomAyantDroit) {
      errors[`nomAyantDroit${index + 1}`] = 'Veuillez entrer le nom de l\'ayant droit.';
      isValid = false;
      document.getElementById(`nomAyantDroit${index + 1}`).focus();
      document.getElementById(`nomAyantDroit${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else if (child.ayantDroitDe === 'AUTRE' && child.nomAyantDroit.length < 3) {
      errors[`nomAyantDroit${index + 1}`] = 'Le nom doit contenir au moins 3 lettres.';
      isValid = false;
      document.getElementById(`nomAyantDroit${index + 1}`).focus();
      document.getElementById(`nomAyantDroit${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else if (child.ayantDroitDe === 'AUTRE' && /\d/.test(child.nomAyantDroit)) {
      errors[`nomAyantDroit${index + 1}`] = 'Le nom ne doit pas contenir de chiffres.';
      isValid = false;
      document.getElementById(`nomAyantDroit${index + 1}`).focus();
      document.getElementById(`nomAyantDroit${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    }

    // Validate prenomAyantDroit
    if (child.ayantDroitDe === 'AUTRE' && !child.prenomAyantDroit) {
      errors[`prenomAyantDroit${index + 1}`] = 'Veuillez entrer le prénom de l\'ayant droit.';
      isValid = false;
      document.getElementById(`prenomAyantDroit${index + 1}`).focus();
      document.getElementById(`prenomAyantDroit${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else if (child.ayantDroitDe === 'AUTRE' && child.prenomAyantDroit.length < 3) {
      errors[`prenomAyantDroit${index + 1}`] = 'Le prénom doit contenir au moins 3 lettres.';
      isValid = false;
      document.getElementById(`prenomAyantDroit${index + 1}`).focus();
      document.getElementById(`prenomAyantDroit${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else if (child.ayantDroitDe === 'AUTRE' && /\d/.test(child.prenomAyantDroit)) {
      errors[`prenomAyantDroit${index + 1}`] = 'Le prénom ne doit pas contenir de chiffres.';
      isValid = false;
      document.getElementById(`prenomAyantDroit${index + 1}`).focus();
      document.getElementById(`prenomAyantDroit${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    }

    // Validate dateNaissanceAyantDroit
    if (child.ayantDroitDe === 'AUTRE' && !child.dateNaissanceAyantDroit) {
      errors[`dateNaissanceAyantDroit${index + 1}`] = 'Veuillez entrer la date de naissance de l\'ayant droit.';
      isValid = false;
      document.getElementById(`dateNaissanceAyantDroit${index + 1}`).focus();
      document.getElementById(`dateNaissanceAyantDroit${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    }

    // Validate numeroSSAyantDroit
    if (child.ayantDroitDe === 'AUTRE' && !child.numeroSSAyantDroit) {
      errors[`numeroSSAyantDroit${index + 1}`] = 'Veuillez entrer le numéro de sécurité sociale de l\'ayant droit.';
      isValid = false;
      document.getElementById(`numeroSSAyantDroit${index + 1}`).focus();
      document.getElementById(`numeroSSAyantDroit${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else if (child.ayantDroitDe === 'AUTRE' && !/^\d{15}$/.test(child.numeroSSAyantDroit)) {
      errors[`numeroSSAyantDroit${index + 1}`] = 'Le numéro de sécurité sociale doit être composé de 15 chiffres.';
      isValid = false;
      document.getElementById(`numeroSSAyantDroit${index + 1}`).focus();
      document.getElementById(`numeroSSAyantDroit${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    }

    // Validate codeOrgaAyantDroit
    if (child.ayantDroitDe === 'AUTRE' && !child.codeOrgaAyantDroit) {
      errors[`codeOrgaAyantDroit${index + 1}`] = 'Veuillez entrer le code organisme de l\'ayant droit.';
      isValid = false;
      document.getElementById(`codeOrgaAyantDroit${index + 1}`).focus();
      document.getElementById(`codeOrgaAyantDroit${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
    } else if (child.ayantDroitDe === 'AUTRE' && !/^\d{9}$/.test(child.codeOrgaAyantDroit)) {
      errors[`codeOrgaAyantDroit${index + 1}`] = 'Le code organisme doit être composé de 9 chiffres.';
      isValid = false;
      document.getElementById(`codeOrgaAyantDroit${index + 1}`).focus();
      document.getElementById(`codeOrgaAyantDroit${index + 1}`).style.boxShadow = '0 0 0 2px #f4627f';
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
</style>
