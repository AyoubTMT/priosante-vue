<template>
  <form @submit.prevent="submitStep" class="step-form">
    <div class="step-container">
      <div class="step-header">
        <h2 class="step-title">Parfait ! Continuons avec vos informations personnelles.</h2>
        <p class="step-description">
          Pour mieux vous connaître et vous proposer la meilleure offre, j'ai besoin de quelques informations supplémentaires.
        </p>
      </div>

      <div class="step-section">
        <label class="form-label">Pourriez-vous me donner votre civilité ?</label>
        <div class="step-options">
          <div class="option-row">
            <div class="option-card" :class="{ 'selected': souscripteurInfo.cv === 'MR', 'error': errors.cv }" @click="selectOption('cv', 'MR')">
              <div class="option-icon">
                <img src="../assets/icons/homme.svg" alt="Monsieur">
              </div>
              <div class="option-label">Monsieur</div>
            </div>
            <div class="option-card" :class="{ 'selected': souscripteurInfo.cv === 'MME', 'error': errors.cv }" @click="selectOption('cv', 'MME')">
              <div class="option-icon">
                <img src="../assets/icons/femme.svg" alt="Madame">
              </div>
              <div class="option-label">Madame</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.cv">{{ errors.cv }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.cv">
        <div class="form-group">
          <label for="nom" class="form-label">Quel est votre nom ?</label>
          <input type="text" id="nom" class="form-control" v-model="souscripteurInfo.nom" :class="{ 'error': errors.nom }" @focus="clearErrorOnInput('nom')" @input="validateField('nom')" required>
          <div class="error-message" v-if="errors.nom">{{ errors.nom }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.nom">
        <div class="form-group">
          <label for="prenom" class="form-label">Quel est votre prénom ?</label>
          <input type="text" id="prenom" class="form-control" v-model="souscripteurInfo.prenom" :class="{ 'error': errors.prenom }" @focus="clearErrorOnInput('prenom')" @input="validateField('prenom')" required>
          <div class="error-message" v-if="errors.prenom">{{ errors.prenom }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.prenom">
        <div class="form-group">
          <label for="dateNaissance" class="form-label">Pourriez-vous me donner votre date de naissance ?</label>
          <input type="date" id="dateNaissance" class="form-control" v-model="souscripteurInfo.dateNaissance" :class="{ 'error': errors.dateNaissance }" @focus="clearErrorOnInput('dateNaissance')" @input="validateField('dateNaissance')" required disabled>
          <div class="error-message" v-if="errors.dateNaissance">{{ errors.dateNaissance }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.prenom">
        <div class="form-group">
          <label for="tel" class="form-label">Quel est votre numéro de téléphone ?</label>
          <input type="tel" id="tel" class="form-control" v-model="souscripteurInfo.tel" :class="{ 'error': errors.tel }" @focus="clearErrorOnInput('tel')" @input="validateField('tel')" required>
          <div class="error-message" v-if="errors.tel">{{ errors.tel }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.tel">
        <div class="form-group">
          <label for="email" class="form-label">Quel est votre email ?</label>
          <input type="email" id="email" class="form-control" v-model="souscripteurInfo.email" :class="{ 'error': errors.email }" @focus="clearErrorOnInput('email')" @input="validateField('email')" required>
          <div class="error-message" v-if="errors.email">{{ errors.email }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.email">
        <div class="form-group">
          <label for="situationFam" class="form-label">Quelle est votre situation familiale ?</label>
          <select id="situationFam" class="form-select" v-model="souscripteurInfo.situationFam" :class="{ 'error': errors.situationFam }" @focus="clearErrorOnInput('situationFam')" @change="validateField('situationFam')" required>
            <option value="">-- Sélectionnez --</option>
            <option value="CONCUBIN">Concubin</option>
            <option value="VEUF">Veuf</option>
            <option value="CELIBATAIRE">Célibataire</option>
            <option value="DIVORCE">Divorcé</option>
            <option value="MARIE">Marié</option>
            <option value="SEPARE">Séparé</option>
            <option value="PACSE">Pacsé</option>
          </select>
          <div class="error-message" v-if="errors.situationFam">{{ errors.situationFam }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.situationFam">
        <div class="form-group">
          <label for="souscripteurIsAssure" class="form-label">Êtes-vous l'assuré principal ?</label>
          <select id="souscripteurIsAssure" class="form-select" v-model="souscripteurInfo.souscripteurIsAssure" :class="{ 'error': errors.souscripteurIsAssure }" @focus="clearErrorOnInput('souscripteurIsAssure')" @change="validateField('souscripteurIsAssure')" required>
            <option value="OUI">Oui</option>
            <option value="NON">Non</option>
          </select>
          <div class="error-message" v-if="errors.souscripteurIsAssure">{{ errors.souscripteurIsAssure }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.situationFam">
        <div class="form-group">
          <label for="profession" class="form-label">Quelle est votre profession ?</label>
          <select id="profession" class="form-select" v-model="souscripteurInfo.profession" :class="{ 'error': errors.profession }" @focus="clearErrorOnInput('profession')" @change="validateField('profession')" required>
            <option value="">-- Sélectionnez --</option>
            <option value="AGRICULTEUR">Agriculteur</option>
            <option value="ARTISAN_COMMERCANT">Artisan/Commerçant</option>
            <option value="CADRE">Cadre</option>
            <option value="INGENIEUR">Ingénieur</option>
            <option value="CHEF_D_ENTREPRISE">Chef d'entreprise</option>
            <option value="COMMERCANT">Commerçant</option>
            <option value="EMPLOYE">Employé</option>
            <option value="AGENT_DE_LA_FONCTION_PUBLIQUE">Agent de la fonction publique</option>
            <option value="ETUDIANT">Étudiant</option>
            <option value="EN_RECHERCHE_D_EMPLOI">En recherche d'emploi</option>
            <option value="ENSEIGNANT">Enseignant</option>
            <option value="HOMME_OU_FEMME_AU_FOYER">Homme/Femme au foyer</option>
            <option value="OUVRIER">Ouvrier</option>
            <option value="PROFESSION_INTERMEDIARE">Profession intermédiaire</option>
            <option value="AGENT_DE_MAITRISE">Agent de maîtrise</option>
            <option value="PROFESSION_LIBERALE">Profession libérale</option>
            <option value="RETRAITE">Retraité</option>
            <option value="TECHNICIEN">Technicien</option>
            <option value="INACTIF">Inactif</option>
            <option value="AUTRE">Autre</option>
          </select>
          <div class="error-message" v-if="errors.profession">{{ errors.profession }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.profession">
        <div class="form-group">
          <label class="form-label">Quel est votre revenu mensuel ?</label>
          <div class="option-row">
            <div class="option-card-budget" :class="{ 'selected': souscripteurInfo.revenuMensuel === 'PLUS_3001', 'error': errors.revenuMensuel }" @click="selectOption('revenuMensuel', 'PLUS_3001')">
              <div class="option-label">Plus de 3001 €</div>
            </div>
            <div class="option-card-budget" :class="{ 'selected': souscripteurInfo.revenuMensuel === 'DE_1501_A_3000', 'error': errors.revenuMensuel }" @click="selectOption('revenuMensuel', 'DE_1501_A_3000')">
              <div class="option-label">De 1501 à 3000 €</div>
            </div>
            <div class="option-card-budget" :class="{ 'selected': souscripteurInfo.revenuMensuel === 'DE_801_A_1500', 'error': errors.revenuMensuel }" @click="selectOption('revenuMensuel', 'DE_801_A_1500')">
              <div class="option-label">De 801 à 1500 €</div>
            </div>
            <div class="option-card-budget" :class="{ 'selected': souscripteurInfo.revenuMensuel === 'MOINS_801', 'error': errors.revenuMensuel }" @click="selectOption('revenuMensuel', 'MOINS_801')">
              <div class="option-label">Moins de 801 €</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.revenuMensuel">{{ errors.revenuMensuel }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.revenuMensuel">
        <div class="form-group">
          <label for="voie" class="form-label">Quelle est votre voie ?</label>
          <input type="text" id="voie" class="form-control" v-model="souscripteurInfo.voie" :class="{ 'error': errors.voie }" @focus="clearErrorOnInput('voie')" @input="validateField('voie')" required>
          <div class="error-message" v-if="errors.voie">{{ errors.voie }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.voie">
        <div class="form-group">
          <label for="ville" class="form-label">Dans quelle ville habitez-vous ?</label>
          <input type="text" id="ville" class="form-control" v-model="souscripteurInfo.ville" :class="{ 'error': errors.ville }" @focus="clearErrorOnInput('ville')" @input="validateField('ville')" required>
          <div class="error-message" v-if="errors.ville">{{ errors.ville }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.ville">
        <div class="form-group">
          <label for="codePostal" class="form-label">Quel est votre code postal ?</label>
          <input type="text" id="codePostal" class="form-control" v-model="souscripteurInfo.codePostal" :class="{ 'error': errors.codePostal }" @focus="clearErrorOnInput('codePostal')" @input="validateField('codePostal')" required>
          <div class="error-message" v-if="errors.codePostal">{{ errors.codePostal }}</div>
        </div>
      </div>

      <div class="step-section" v-if="souscripteurInfo.ville">
        <div class="form-group">
          <label for="numeroSS" class="form-label">Quel est votre numéro de sécurité sociale ?</label>
          <input type="text" id="numeroSS" class="form-control" v-model="souscripteurInfo.numeroSS" :class="{ 'error': errors.numeroSS }" @focus="clearErrorOnInput('numeroSS')" @input="validateField('numeroSS')" required>
          <div class="error-message" v-if="errors.numeroSS">{{ errors.numeroSS }}</div>
        </div>
      </div>

      <div class="step-footer" v-if="souscripteurInfo.codePostal">
        <button type="submit" class="submit-button">Continuer</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, onMounted, nextTick } from 'vue';
import { useFormStore } from '@/stores/useFormStore';
import { toast } from 'vue3-toastify';
import axios from 'axios';

const formStore = useFormStore();

const souscripteurInfo = reactive({
  cv: '',
  nom: '',
  prenom: '',
  dateNaissance: '',
  tel: '',
  email: '',
  situationFam: '',
  souscripteurIsAssure: 'OUI',
  profession: '',
  revenuMensuel: '',
  voie: '',
  ville: '',
  codePostal: '',
  numeroSS: '',
  typeSouscripteur: 'PERSONNE_PHYSIQUE'
});

const errors = reactive({});

onMounted(() => {
  const storedData = formStore.getFormData.souscripteurInfo;
  if (storedData) {
    Object.assign(souscripteurInfo, storedData);
  }
  // Load dateNaissance from baseInfo
  const step1Data = formStore.getFormData.baseInfo;
  if (step1Data && step1Data.dateNaissance) {
    souscripteurInfo.dateNaissance = step1Data.dateNaissance;
  }
  // Load codePostal from baseInfo
  if (step1Data && step1Data.codePostal) {
    souscripteurInfo.codePostal = step1Data.codePostal;
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
  souscripteurInfo[field] = option;
  clearErrorOnInput(field);
};

const validateField = (field) => {
  switch (field) {
    case 'nom':
      if (!souscripteurInfo.nom) {
        errors.nom = 'Veuillez entrer votre nom.';
      } else if (souscripteurInfo.nom.length < 3) {
        errors.nom = 'Le nom doit contenir au moins 3 lettres.';
      } else if (/\d/.test(souscripteurInfo.nom)) {
        errors.nom = 'Le nom ne doit pas contenir de chiffres.';
      } else {
        clearErrorOnInput('nom');
      }
      break;
    case 'prenom':
      if (!souscripteurInfo.prenom) {
        errors.prenom = 'Veuillez entrer votre prénom.';
      } else if (souscripteurInfo.prenom.length < 3) {
        errors.prenom = 'Le prénom doit contenir au moins 3 lettres.';
      } else if (/\d/.test(souscripteurInfo.prenom)) {
        errors.prenom = 'Le prénom ne doit pas contenir de chiffres.';
      } else {
        clearErrorOnInput('prenom');
      }
      break;
    case 'dateNaissance':
      if (!souscripteurInfo.dateNaissance) {
        errors.dateNaissance = 'Veuillez entrer votre date de naissance.';
      } else {
        clearErrorOnInput('dateNaissance');
      }
      break;
    case 'tel':
      if (!souscripteurInfo.tel) {
        errors.tel = 'Veuillez entrer votre numéro de téléphone.';
      } else if (!/^\d{1,14}$/.test(souscripteurInfo.tel)) {
        errors.tel = 'Le numéro de téléphone doit contenir au maximum 14 chiffres.';
      } else {
        clearErrorOnInput('tel');
      }
      break;
    case 'email':
      if (!souscripteurInfo.email) {
        errors.email = 'Veuillez entrer votre email.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(souscripteurInfo.email)) {
        errors.email = 'Veuillez entrer un email valide.';
      } else {
        clearErrorOnInput('email');
      }
      break;
    case 'situationFam':
      if (!souscripteurInfo.situationFam) {
        errors.situationFam = 'Veuillez sélectionner votre situation familiale.';
      } else {
        clearErrorOnInput('situationFam');
      }
      break;
    case 'souscripteurIsAssure':
      if (!souscripteurInfo.souscripteurIsAssure) {
        errors.souscripteurIsAssure = 'Veuillez indiquer si vous êtes l\'assuré principal.';
      } else {
        clearErrorOnInput('souscripteurIsAssure');
      }
      break;
    case 'profession':
      if (!souscripteurInfo.profession) {
        errors.profession = 'Veuillez sélectionner votre profession.';
      } else {
        clearErrorOnInput('profession');
      }
      break;
    case 'revenuMensuel':
      if (!souscripteurInfo.revenuMensuel) {
        errors.revenuMensuel = 'Veuillez sélectionner votre revenu mensuel.';
      } else {
        clearErrorOnInput('revenuMensuel');
      }
      break;
    case 'voie':
      if (!souscripteurInfo.voie) {
        errors.voie = 'Veuillez entrer votre voie.';
      } else {
        clearErrorOnInput('voie');
      }
      break;
    case 'ville':
      if (!souscripteurInfo.ville) {
        errors.ville = 'Veuillez entrer votre ville.';
      } else {
        clearErrorOnInput('ville');
      }
      break;
    case 'codePostal':
      if (!souscripteurInfo.codePostal) {
        errors.codePostal = 'Veuillez entrer votre code postal.';
      } else if (!/^\d{5}$/.test(souscripteurInfo.codePostal)) {
        errors.codePostal = 'Le code postal doit être composé de 5 chiffres.';
      } else {
        clearErrorOnInput('codePostal');
      }
      break;
    case 'numeroSS':
      if (!souscripteurInfo.numeroSS) {
        errors.numeroSS = 'Veuillez entrer votre numéro de sécurité sociale.';
      } else if (!/^\d{15}$/.test(souscripteurInfo.numeroSS)) {
        errors.numeroSS = 'Le numéro de sécurité sociale doit être composé de 15 chiffres.';
      } else {
        clearErrorOnInput('numeroSS');
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
  if (!souscripteurInfo.cv) {
    errors.cv = 'Veuillez sélectionner votre civilité.';
    isValid = false;
    await nextTick();
    const cvElement = document.querySelector('.option-card');
    if (cvElement) {
      cvElement.style.boxShadow = '0 0 0 2px #f4627f';
    }
  }

  // Validate nom
  if (!souscripteurInfo.nom) {
    errors.nom = 'Veuillez entrer votre nom.';
    isValid = false;
    await nextTick();
    document.getElementById('nom').focus();
    document.getElementById('nom').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (souscripteurInfo.nom.length < 3) {
    errors.nom = 'Le nom doit contenir au moins 3 lettres.';
    isValid = false;
    await nextTick();
    document.getElementById('nom').focus();
    document.getElementById('nom').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (/\d/.test(souscripteurInfo.nom)) {
    errors.nom = 'Le nom ne doit pas contenir de chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('nom').focus();
    document.getElementById('nom').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate prenom
  if (!souscripteurInfo.prenom) {
    errors.prenom = 'Veuillez entrer votre prénom.';
    isValid = false;
    await nextTick();
    document.getElementById('prenom').focus();
    document.getElementById('prenom').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (souscripteurInfo.prenom.length < 3) {
    errors.prenom = 'Le prénom doit contenir au moins 3 lettres.';
    isValid = false;
    await nextTick();
    document.getElementById('prenom').focus();
    document.getElementById('prenom').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (/\d/.test(souscripteurInfo.prenom)) {
    errors.prenom = 'Le prénom ne doit pas contenir de chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('prenom').focus();
    document.getElementById('prenom').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate dateNaissance
  if (!souscripteurInfo.dateNaissance) {
    errors.dateNaissance = 'Veuillez entrer votre date de naissance.';
    isValid = false;
    await nextTick();
    document.getElementById('dateNaissance').focus();
    document.getElementById('dateNaissance').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate tel
  if (!souscripteurInfo.tel) {
    errors.tel = 'Veuillez entrer votre numéro de téléphone.';
    isValid = false;
    await nextTick();
    document.getElementById('tel').focus();
    document.getElementById('tel').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (!/^\d{1,14}$/.test(souscripteurInfo.tel)) {
    errors.tel = 'Le numéro de téléphone doit contenir au maximum 14 chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('tel').focus();
    document.getElementById('tel').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate email
  if (!souscripteurInfo.email) {
    errors.email = 'Veuillez entrer votre email.';
    isValid = false;
    await nextTick();
    document.getElementById('email').focus();
    document.getElementById('email').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(souscripteurInfo.email)) {
    errors.email = 'Veuillez entrer un email valide.';
    isValid = false;
    await nextTick();
    document.getElementById('email').focus();
    document.getElementById('email').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate situationFam
  if (!souscripteurInfo.situationFam) {
    errors.situationFam = 'Veuillez sélectionner votre situation familiale.';
    isValid = false;
    await nextTick();
    document.getElementById('situationFam').focus();
    document.getElementById('situationFam').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate souscripteurIsAssure
  if (!souscripteurInfo.souscripteurIsAssure) {
    errors.souscripteurIsAssure = 'Veuillez indiquer si vous êtes l\'assuré principal.';
    isValid = false;
    await nextTick();
    document.getElementById('souscripteurIsAssure').focus();
    document.getElementById('souscripteurIsAssure').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate profession
  if (!souscripteurInfo.profession) {
    errors.profession = 'Veuillez sélectionner votre profession.';
    isValid = false;
    await nextTick();
    document.getElementById('profession').focus();
    document.getElementById('profession').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate revenuMensuel
  if (!souscripteurInfo.revenuMensuel) {
    errors.revenuMensuel = 'Veuillez sélectionner votre revenu mensuel.';
    isValid = false;
    await nextTick();
    const revenuMensuelElement = document.querySelector('.option-card-budget');
    if (revenuMensuelElement) {
      revenuMensuelElement.style.boxShadow = '0 0 0 2px #f4627f';
    }
  }

  // Validate voie
  if (!souscripteurInfo.voie) {
    errors.voie = 'Veuillez entrer votre voie.';
    isValid = false;
    await nextTick();
    document.getElementById('voie').focus();
    document.getElementById('voie').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate ville
  if (!souscripteurInfo.ville) {
    errors.ville = 'Veuillez entrer votre ville.';
    isValid = false;
    await nextTick();
    document.getElementById('ville').focus();
    document.getElementById('ville').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate codePostal
  if (!souscripteurInfo.codePostal) {
    errors.codePostal = 'Veuillez entrer votre code postal.';
    isValid = false;
    await nextTick();
    document.getElementById('codePostal').focus();
    document.getElementById('codePostal').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (!/^\d{5}$/.test(souscripteurInfo.codePostal)) {
    errors.codePostal = 'Le code postal doit être composé de 5 chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('codePostal').focus();
    document.getElementById('codePostal').style.boxShadow = '0 0 0 2px #f4627f';
  }

  // Validate numeroSS
  if (!souscripteurInfo.numeroSS) {
    errors.numeroSS = 'Veuillez entrer votre numéro de sécurité sociale.';
    isValid = false;
    await nextTick();
    document.getElementById('numeroSS').focus();
    document.getElementById('numeroSS').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (!/^\d{15}$/.test(souscripteurInfo.numeroSS)) {
    errors.numeroSS = 'Le numéro de sécurité sociale doit être composé de 15 chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('numeroSS').focus();
    document.getElementById('numeroSS').style.boxShadow = '0 0 0 2px #f4627f';
  }

  return isValid;
};

const sendPostRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    if (response.status === 200) {
      console.log('Success:', response);
    }
    return response;
  } catch (error) {
    if (error.response) {
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      console.error('No response:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
};

const sendLienSignature = async () => {
  const data = {
    name: `${souscripteurInfo.cv} ${souscripteurInfo.nom} ${souscripteurInfo.prenom}`,
    telephone: souscripteurInfo.tel,
    email: souscripteurInfo.email,
    typeFormulaire: 'Tarification',
    dateNaissance: souscripteurInfo.dateNaissance,
    codePostal: souscripteurInfo.codePostal,
    numeroSS: souscripteurInfo.numeroSS,
    situationFam: souscripteurInfo.situationFam,
    profession: souscripteurInfo.profession,
    revenuMensuel: souscripteurInfo.revenuMensuel,
    voie: souscripteurInfo.voie,
    ville: souscripteurInfo.ville,
    souscripteurIsAssure: souscripteurInfo.souscripteurIsAssure
  };
  await sendPostRequest(import.meta.env.VITE_BASE_URL + 'api/send-tarification-email', data);
};

const submitStep = async () => {
  const isValid = await validateForm();

  if (isValid) {
    formStore.updateStepData('souscripteurInfo', souscripteurInfo);
    await sendLienSignature();
    formStore.updateCurrentStep(3);
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
