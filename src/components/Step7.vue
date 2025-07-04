<template>
  <form @submit.prevent="submitStep" class="step-form">
    <div class="step-container">
      <div class="step-header">
        <h2 class="step-title">Presque terminé ! Nous avons besoin des informations de paiement.</h2>
        <p class="step-description">
          Pour finaliser votre devis, j'ai besoin de quelques informations supplémentaires sur le payeur.
        </p>
      </div>

      <!-- Ajoutez une section pour afficher les erreurs du backend -->
      <div v-if="backendErrors.length > 0" class="backend-errors">
        <div v-for="(error, index) in backendErrors" :key="index" class="error-message">
          {{ error }}
        </div>
      </div>

      <!-- Bouton pour voir le devis -->
      <div class="step-section">
        <button @click="showDevis" type="button" class="btn btn-secondary fw-bold mt-4" data-bs-toggle="modal" data-bs-target="#pdfModal">Voir mon devis</button>
      </div>

      <!-- Modale pour afficher le PDF -->
      <div class="modal fade" id="pdfModal" tabindex="-1" aria-labelledby="pdfModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="pdfModalLabel">Mon Devis</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <iframe :src="pdfFileSource" width="100%" height="500px" frameborder="0"></iframe>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>

      <div class="step-section">
        <div class="form-group">
          <label for="ibanPrelevemnt" class="form-label">Quel est l'IBAN pour le prélèvement ?</label>
          <input type="text" id="ibanPrelevemnt" class="form-control" v-model="payeurInfo.ibanPrelevemnt" :class="{ 'error': errors.ibanPrelevemnt }" @focus="clearErrorOnInput('ibanPrelevemnt')" @input="validateField('ibanPrelevemnt')" required>
          <div class="error-message" v-if="errors.ibanPrelevemnt">{{ errors.ibanPrelevemnt }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.ibanPrelevemnt.length >= 27">
        <div class="form-group">
          <label class="form-label">L'IBAN de remboursement est-il différent ?</label>
          <div class="option-row">
            <div class="option-card-budget" :class="{ 'selected': payeurInfo.ibanRembDifferent === 'OUI', 'error': errors.ibanRembDifferent }" @click="selectOption('ibanRembDifferent', 'OUI')">
              <div class="option-label">Oui</div>
            </div>
            <div class="option-card-budget" :class="{ 'selected': payeurInfo.ibanRembDifferent === 'NON', 'error': errors.ibanRembDifferent }" @click="selectOption('ibanRembDifferent', 'NON')">
              <div class="option-label">Non</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.ibanRembDifferent">{{ errors.ibanRembDifferent }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.ibanRembDifferent === 'OUI'">
        <div class="form-group">
          <label for="ibanRemboursement" class="form-label">Quel est l'IBAN pour le remboursement ?</label>
          <input type="text" id="ibanRemboursement" class="form-control" v-model="payeurInfo.ibanRemboursement" :class="{ 'error': errors.ibanRemboursement }" @focus="clearErrorOnInput('ibanRemboursement')" @input="validateField('ibanRemboursement')" required>
          <div class="error-message" v-if="errors.ibanRemboursement">{{ errors.ibanRemboursement }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.ibanPrelevemnt.length >= 27">
        <div class="form-group">
          <label class="form-label">Souhaitez-vous générer un mandat SEPA ou saisir un RUM ?</label>
          <div class="option-row">
            <div class="option-card-budget" :class="{ 'selected': payeurInfo.mandatSepa === 'GENERER_MANDAT', 'error': errors.mandatSepa }" @click="selectOption('mandatSepa', 'GENERER_MANDAT')">
              <div class="option-label">Générer Mandat</div>
            </div>
            <div class="option-card-budget" :class="{ 'selected': payeurInfo.mandatSepa === 'SAISIR_RUM', 'error': errors.mandatSepa }" @click="selectOption('mandatSepa', 'SAISIR_RUM')">
              <div class="option-label">Saisir RUM</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.mandatSepa">{{ errors.mandatSepa }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.mandatSepa === 'SAISIR_RUM'">
        <div class="form-group">
          <label for="rum" class="form-label">Quel est le RUM ?</label>
          <input type="text" id="rum" class="form-control" v-model="payeurInfo.rum" :class="{ 'error': errors.rum }" @focus="clearErrorOnInput('rum')" @input="validateField('rum')" required>
          <div class="error-message" v-if="errors.rum">{{ errors.rum }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.ibanPrelevemnt.length >= 27">
        <div class="form-group">
          <label class="form-label">Le payeur est-il différent ?</label>
          <div class="option-row">
            <div class="option-card-budget" :class="{ 'selected': payeurInfo.payeurDifferent === 'OUI', 'error': errors.payeurDifferent }" @click="selectOption('payeurDifferent', 'OUI')">
              <div class="option-label">Oui</div>
            </div>
            <div class="option-card-budget" :class="{ 'selected': payeurInfo.payeurDifferent === 'NON', 'error': errors.payeurDifferent }" @click="selectOption('payeurDifferent', 'NON')">
              <div class="option-label">Non</div>
            </div>
          </div>
          <div class="error-message" v-if="errors.payeurDifferent">{{ errors.payeurDifferent }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.payeurDifferent === 'OUI'">
        <div class="form-group">
          <label for="nomPayeur" class="form-label">Quel est le nom du payeur ?</label>
          <input type="text" id="nomPayeur" class="form-control" v-model="payeurInfo.nomPayeur" :class="{ 'error': errors.nomPayeur }" @focus="clearErrorOnInput('nomPayeur')" @input="validateField('nomPayeur')" required>
          <div class="error-message" v-if="errors.nomPayeur">{{ errors.nomPayeur }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.nomPayeur">
        <div class="form-group">
          <label for="prenomPayeur" class="form-label">Quel est le prénom du payeur ?</label>
          <input type="text" id="prenomPayeur" class="form-control" v-model="payeurInfo.prenomPayeur" :class="{ 'error': errors.prenomPayeur }" @focus="clearErrorOnInput('prenomPayeur')" @input="validateField('prenomPayeur')" required>
          <div class="error-message" v-if="errors.prenomPayeur">{{ errors.prenomPayeur }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.prenomPayeur">
        <div class="form-group">
          <label for="typeVoiePayeur" class="form-label">Quel est le type de voie du payeur ?</label>
          <select id="typeVoiePayeur" class="form-select" v-model="payeurInfo.typeVoiePayeur" :class="{ 'error': errors.typeVoiePayeur }" @focus="clearErrorOnInput('typeVoiePayeur')" @change="validateField('typeVoiePayeur')" required>
            <option value="">-- Sélectionnez --</option>
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
          <div class="error-message" v-if="errors.typeVoiePayeur">{{ errors.typeVoiePayeur }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.typeVoiePayeur">
        <div class="form-group">
          <label for="voiePayeur" class="form-label">Quelle est la voie du payeur ?</label>
          <input type="text" id="voiePayeur" class="form-control" v-model="payeurInfo.voiePayeur" :class="{ 'error': errors.voiePayeur }" @focus="clearErrorOnInput('voiePayeur')" @input="validateField('voiePayeur')" required>
          <div class="error-message" v-if="errors.voiePayeur">{{ errors.voiePayeur }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.voiePayeur">
        <div class="form-group">
          <label for="batimentPayeur" class="form-label">Quel est le bâtiment du payeur ?</label>
          <input type="text" id="batimentPayeur" class="form-control" v-model="payeurInfo.batimentPayeur" :class="{ 'error': errors.batimentPayeur }" @focus="clearErrorOnInput('batimentPayeur')" @input="validateField('batimentPayeur')">
          <div class="error-message" v-if="errors.batimentPayeur">{{ errors.batimentPayeur }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.batimentPayeur">
        <div class="form-group">
          <label for="libellePayeur" class="form-label">Quel est le libellé du payeur ?</label>
          <input type="text" id="libellePayeur" class="form-control" v-model="payeurInfo.libellePayeur" :class="{ 'error': errors.libellePayeur }" @focus="clearErrorOnInput('libellePayeur')" @input="validateField('libellePayeur')" required>
          <div class="error-message" v-if="errors.libellePayeur">{{ errors.libellePayeur }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.libellePayeur">
        <div class="form-group">
          <label for="codePostalPayeur" class="form-label">Quel est le code postal du payeur ?</label>
          <input type="text" id="codePostalPayeur" class="form-control" v-model="payeurInfo.codePostalPayeur" :class="{ 'error': errors.codePostalPayeur }" @focus="clearErrorOnInput('codePostalPayeur')" @input="validateField('codePostalPayeur')" required>
          <div class="error-message" v-if="errors.codePostalPayeur">{{ errors.codePostalPayeur }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.codePostalPayeur">
        <div class="form-group">
          <label for="villePayeur" class="form-label">Quelle est la ville du payeur ?</label>
          <input type="text" id="villePayeur" class="form-control" v-model="payeurInfo.villePayeur" :class="{ 'error': errors.villePayeur }" @focus="clearErrorOnInput('villePayeur')" @input="validateField('villePayeur')" required>
          <div class="error-message" v-if="errors.villePayeur">{{ errors.villePayeur }}</div>
        </div>
      </div>

      <div class="step-section" v-if="payeurInfo.ibanPrelevemnt.length >= 27">
        <div class="form-check bgcheck mb-3" :class="declarationBlockClasses">
          <input class="form-check-input" type="checkbox" id="declaration" v-model="payeurInfo.declaration">
          <label class="form-check-label ms-3" for="declaration">
            Je déclare avoir lu et pris connaissance, préalablement à la conclusion du contrat, des
            <a href="#" target="_blank">Conditions Générales</a>, du <a href="#" target="_blank">document d'information normalisé (IPID)</a> ainsi que du <a href="#" target="_blank">Tableau de Garanties</a>
            <br><br>
            Je déclare avoir été informé de manière claire et compréhensible de l’étendue et de la définition des risques assurés, des garanties proposées et en accepter l'intégralité des termes.
            <br><br>
            Je déclare sincères et exacts les renseignements indiqués dans le cadre du processus de souscription en ligne, et que toute réticence, omission, fausse déclaration ou inexactitude peut entraîner soit la nullité du contrat, soit la réduction du montant des indemnités.
            <br><br>
            Je bénéficie d'un délai de rétractation de 14 jours calendaires révolus à compter du jour de la conclusion du contrat.
            <br><br>
            J'autorise Priorité Santé Mutuelle à prélever mes cotisations le 10 de chaque période fractionnée sur le compte bancaire ou postal indiqué dans l’autorisation de prélèvement.
          </label>
        </div>
        <div v-show="formSubmitted && !payeurInfo.declaration" class="errorMsg">
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008" viewBox="0 0 10.497 10.008">
              <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                <g id="Page-1" transform="translate(30 591)">
                  <g id="Alert" transform="translate(5 5)">
                    <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)" fill="none"></rect>
                    <path id="Path" d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z" transform="translate(6.766 5.194)" fill="#f4627f"></path>
                    <path id="Path-2" data-name="Path" d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z" transform="translate(6.766 9.125)" fill="#f4627f"></path>
                    <path id="Path-3" data-name="Path" d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z" transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                  </g>
                </g>
              </g>
            </svg>
            <p class="m-0 ms-2">Ce champ est requis</p>
          </div>
        </div>
      </div>

      <div class="step-footer" v-if="payeurInfo.ibanPrelevemnt.length >= 27">
        <button type="submit" class="submit-button">Souscrire</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted } from 'vue';
import { useFormStore } from '@/stores/useFormStore';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import axios from 'axios';
import { Modal } from 'bootstrap';

const formStore = useFormStore();
const router = useRouter();
const loadingSouscrire = ref(false);
const formSubmitted = ref(false);
const backendErrors = ref([]);
const loadingDevis2 = ref(false);
const pdfFileSource = ref('');
const pdfModal = ref(null);

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
  villePayeur: '',
  declaration: false
});

onMounted(() => {
  const storedData = formStore.getFormData.payeurInfo;
  if (storedData) {
    Object.assign(payeurInfo, storedData);
  }
  // Initialize the modal after the DOM is fully loaded
  pdfModal.value = new Modal(document.getElementById('pdfModal'));
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
  payeurInfo[field] = option;
  clearErrorOnInput(field);
};

const validateIBAN = (iban) => {
  return !isValidIBANNumber(iban);
};

// Mod97 validation
const mod97 = (string) => {
  let checksum = string;
  while (checksum.length > 2) {
    let block = checksum.substr(0, 9);
    block = (block.length < 9) ? block.padEnd(9, "0") : block;
    checksum = (parseInt(block) % 97) + checksum.substr(block.length);
  }
  return parseInt(checksum) % 97;
};

// validate IBAN
const isValidIBANNumber = (ibanValue) => {
  if (!ibanValue || ibanValue.trim() === '') {
    return false; // No validation needed if the IBAN is empty
  }
  ibanValue = ibanValue.replace(/\s/g, "");
  const Countries = { al: 28, ad: 24, at: 20, az: 28, bh: 22, be: 16, ba: 20, br: 29, bg: 22, cr: 21, hr: 21, cy: 28, cz: 24, dk: 18, do: 28, ee: 20, fo: 18, fi: 18, fr: 27, ge: 22, de: 22, gi: 23, gr: 27, gl: 18, gt: 28, hu: 28, is: 26, ie: 22, il: 23, it: 27, jo: 30, kz: 20, kw: 30, lv: 21, lb: 28, li: 21, lt: 20, lu: 20, mk: 19, mt: 31, mr: 27, mu: 30, mc: 27, md: 24, me: 22, nl: 18, no: 15, pk: 24, ps: 29, pl: 28, pt: 25, qa: 29, ro: 24, sm: 27, sa: 24, rs: 22, sk: 24, si: 19, es: 24, se: 24, ch: 21, tn: 24, tr: 26, ae: 23, gb: 22, vg: 24};
  const Chars = { a: 10, b: 11, c: 12, d: 13, e: 14, f: 15, g: 16, h: 17, i: 18, j: 19, k: 20, l: 21, m: 22, n: 23, o: 24, p: 25, q: 26, r: 27, s: 28, t: 29, u: 30, v: 31, w: 32, x: 33, y: 34, z: 35};
  ibanValue = ibanValue.toLowerCase();
  const codeBanque = ibanValue.substr(4, 5);
  const codeGuichet = ibanValue.substr(9, 5);
  if (codeBanque === '16598' || (codeBanque === '10011' && codeGuichet === '00020')) {
    return false;
  }
  if (ibanValue.length === Countries[ibanValue.substr(0, 2)]) {
    let MovedChar = ibanValue.substr(4) + ibanValue.substr(0, 4);
    let MovedCharArray = MovedChar.split("");
    let NewString = "";
    for (let i = 0; i < MovedCharArray.length; i++) {
      if (!/^\d+$/.test(MovedCharArray[i])) {
        MovedCharArray[i] = Chars[MovedCharArray[i]];
      }
      NewString += MovedCharArray[i];
    }
    return mod97(NewString) === 1;
  }
  return false;
};

const validateField = (field) => {
  switch (field) {
    case 'ibanPrelevemnt':
      if (!payeurInfo.ibanPrelevemnt) {
        errors.ibanPrelevemnt = 'Veuillez entrer l\'IBAN pour le prélèvement.';
      } else if (!validateIBAN(payeurInfo.ibanPrelevemnt)) {
        errors.ibanPrelevemnt = 'Veuillez entrer un IBAN valide.';
      } else {
        clearErrorOnInput('ibanPrelevemnt');
      }
      break;
    case 'ibanRembDifferent':
      if (!payeurInfo.ibanRembDifferent) {
        errors.ibanRembDifferent = 'Veuillez sélectionner si l\'IBAN de remboursement est différent.';
      } else {
        clearErrorOnInput('ibanRembDifferent');
      }
      break;
    case 'ibanRemboursement':
      if (!payeurInfo.ibanRemboursement) {
        errors.ibanRemboursement = 'Veuillez entrer l\'IBAN pour le remboursement.';
      } else if (!validateIBAN(payeurInfo.ibanRemboursement)) {
        errors.ibanRemboursement = 'Veuillez entrer un IBAN valide.';
      } else {
        clearErrorOnInput('ibanRemboursement');
      }
      break;
    case 'mandatSepa':
      if (!payeurInfo.mandatSepa) {
        errors.mandatSepa = 'Veuillez sélectionner si vous souhaitez générer un mandat SEPA ou saisir un RUM.';
      } else {
        clearErrorOnInput('mandatSepa');
      }
      break;
    case 'rum':
      if (!payeurInfo.rum) {
        errors.rum = 'Veuillez entrer le RUM.';
      } else {
        clearErrorOnInput('rum');
      }
      break;
    case 'payeurDifferent':
      if (!payeurInfo.payeurDifferent) {
        errors.payeurDifferent = 'Veuillez sélectionner si le payeur est différent.';
      } else {
        clearErrorOnInput('payeurDifferent');
      }
      break;
    case 'nomPayeur':
      if (!payeurInfo.nomPayeur) {
        errors.nomPayeur = 'Veuillez entrer le nom du payeur.';
      } else if (payeurInfo.nomPayeur.length < 3) {
        errors.nomPayeur = 'Le nom doit contenir au moins 3 lettres.';
      } else if (/\d/.test(payeurInfo.nomPayeur)) {
        errors.nomPayeur = 'Le nom ne doit pas contenir de chiffres.';
      } else {
        clearErrorOnInput('nomPayeur');
      }
      break;
    case 'prenomPayeur':
      if (!payeurInfo.prenomPayeur) {
        errors.prenomPayeur = 'Veuillez entrer le prénom du payeur.';
      } else if (payeurInfo.prenomPayeur.length < 3) {
        errors.prenomPayeur = 'Le prénom doit contenir au moins 3 lettres.';
      } else if (/\d/.test(payeurInfo.prenomPayeur)) {
        errors.prenomPayeur = 'Le prénom ne doit pas contenir de chiffres.';
      } else {
        clearErrorOnInput('prenomPayeur');
      }
      break;
    case 'typeVoiePayeur':
      if (!payeurInfo.typeVoiePayeur) {
        errors.typeVoiePayeur = 'Veuillez sélectionner le type de voie du payeur.';
      } else {
        clearErrorOnInput('typeVoiePayeur');
      }
      break;
    case 'voiePayeur':
      if (!payeurInfo.voiePayeur) {
        errors.voiePayeur = 'Veuillez entrer la voie du payeur.';
      } else {
        clearErrorOnInput('voiePayeur');
      }
      break;
    case 'batimentPayeur':
      if (!payeurInfo.batimentPayeur) {
        errors.batimentPayeur = 'Veuillez entrer le bâtiment du payeur.';
      } else {
        clearErrorOnInput('batimentPayeur');
      }
      break;
    case 'libellePayeur':
      if (!payeurInfo.libellePayeur) {
        errors.libellePayeur = 'Veuillez entrer le libellé du payeur.';
      } else {
        clearErrorOnInput('libellePayeur');
      }
      break;
    case 'codePostalPayeur':
      if (!payeurInfo.codePostalPayeur) {
        errors.codePostalPayeur = 'Veuillez entrer le code postal du payeur.';
      } else if (!/^\d{5}$/.test(payeurInfo.codePostalPayeur)) {
        errors.codePostalPayeur = 'Le code postal doit être composé de 5 chiffres.';
      } else {
        clearErrorOnInput('codePostalPayeur');
      }
      break;
    case 'villePayeur':
      if (!payeurInfo.villePayeur) {
        errors.villePayeur = 'Veuillez entrer la ville du payeur.';
      } else {
        clearErrorOnInput('villePayeur');
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
  // Validate ibanPrelevemnt
  if (!payeurInfo.ibanPrelevemnt) {
    errors.ibanPrelevemnt = 'Veuillez entrer l\'IBAN pour le prélèvement.';
    isValid = false;
    await nextTick();
    document.getElementById('ibanPrelevemnt').focus();
    document.getElementById('ibanPrelevemnt').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (!validateIBAN(payeurInfo.ibanPrelevemnt)) {
    errors.ibanPrelevemnt = 'Veuillez entrer un IBAN valide.';
    isValid = false;
    await nextTick();
    document.getElementById('ibanPrelevemnt').focus();
    document.getElementById('ibanPrelevemnt').style.boxShadow = '0 0 0 2px #f4627f';
  }
  // Validate ibanRembDifferent
  if (!payeurInfo.ibanRembDifferent) {
    errors.ibanRembDifferent = 'Veuillez sélectionner si l\'IBAN de remboursement est différent.';
    isValid = false;
    await nextTick();
    const ibanRembDifferentElement = document.querySelector('.option-card-budget:nth-child(1)');
    if (ibanRembDifferentElement) {
      ibanRembDifferentElement.style.boxShadow = '0 0 0 2px #f4627f';
    }
  }
  // Validate ibanRemboursement
  if (payeurInfo.ibanRembDifferent === 'OUI' && !payeurInfo.ibanRemboursement) {
    errors.ibanRemboursement = 'Veuillez entrer l\'IBAN pour le remboursement.';
    isValid = false;
    await nextTick();
    document.getElementById('ibanRemboursement').focus();
    document.getElementById('ibanRemboursement').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (payeurInfo.ibanRembDifferent === 'OUI' && !validateIBAN(payeurInfo.ibanRemboursement)) {
    errors.ibanRemboursement = 'Veuillez entrer un IBAN valide.';
    isValid = false;
    await nextTick();
    document.getElementById('ibanRemboursement').focus();
    document.getElementById('ibanRemboursement').style.boxShadow = '0 0 0 2px #f4627f';
  }
  // Validate mandatSepa
  if (!payeurInfo.mandatSepa) {
    errors.mandatSepa = 'Veuillez sélectionner si vous souhaitez générer un mandat SEPA ou saisir un RUM.';
    isValid = false;
    await nextTick();
    const mandatSepaElement = document.querySelector('.option-card-budget:nth-child(2)');
    if (mandatSepaElement) {
      mandatSepaElement.style.boxShadow = '0 0 0 2px #f4627f';
    }
  }
  // Validate rum
  if (payeurInfo.mandatSepa === 'SAISIR_RUM' && !payeurInfo.rum) {
    errors.rum = 'Veuillez entrer le RUM.';
    isValid = false;
    await nextTick();
    document.getElementById('rum').focus();
    document.getElementById('rum').style.boxShadow = '0 0 0 2px #f4627f';
  }
  // Validate payeurDifferent
  if (!payeurInfo.payeurDifferent) {
    errors.payeurDifferent = 'Veuillez sélectionner si le payeur est différent.';
    isValid = false;
    await nextTick();
    const payeurDifferentElement = document.querySelector('.option-card-budget:nth-child(3)');
    if (payeurDifferentElement) {
      payeurDifferentElement.style.boxShadow = '0 0 0 2px #f4627f';
    }
  }
  // Validate nomPayeur
  if (payeurInfo.payeurDifferent === 'OUI' && !payeurInfo.nomPayeur) {
    errors.nomPayeur = 'Veuillez entrer le nom du payeur.';
    isValid = false;
    await nextTick();
    document.getElementById('nomPayeur').focus();
    document.getElementById('nomPayeur').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (payeurInfo.payeurDifferent === 'OUI' && payeurInfo.nomPayeur.length < 3) {
    errors.nomPayeur = 'Le nom doit contenir au moins 3 lettres.';
    isValid = false;
    await nextTick();
    document.getElementById('nomPayeur').focus();
    document.getElementById('nomPayeur').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (payeurInfo.payeurDifferent === 'OUI' && /\d/.test(payeurInfo.nomPayeur)) {
    errors.nomPayeur = 'Le nom ne doit pas contenir de chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('nomPayeur').focus();
    document.getElementById('nomPayeur').style.boxShadow = '0 0 0 2px #f4627f';
  }
  // Validate prenomPayeur
  if (payeurInfo.payeurDifferent === 'OUI' && !payeurInfo.prenomPayeur) {
    errors.prenomPayeur = 'Veuillez entrer le prénom du payeur.';
    isValid = false;
    await nextTick();
    document.getElementById('prenomPayeur').focus();
    document.getElementById('prenomPayeur').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (payeurInfo.payeurDifferent === 'OUI' && payeurInfo.prenomPayeur.length < 3) {
    errors.prenomPayeur = 'Le prénom doit contenir au moins 3 lettres.';
    isValid = false;
    await nextTick();
    document.getElementById('prenomPayeur').focus();
    document.getElementById('prenomPayeur').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (payeurInfo.payeurDifferent === 'OUI' && /\d/.test(payeurInfo.prenomPayeur)) {
    errors.prenomPayeur = 'Le prénom ne doit pas contenir de chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('prenomPayeur').focus();
    document.getElementById('prenomPayeur').style.boxShadow = '0 0 0 2px #f4627f';
  }
  // Validate typeVoiePayeur
  if (payeurInfo.payeurDifferent === 'OUI' && !payeurInfo.typeVoiePayeur) {
    errors.typeVoiePayeur = 'Veuillez sélectionner le type de voie du payeur.';
    isValid = false;
    await nextTick();
    document.getElementById('typeVoiePayeur').focus();
    document.getElementById('typeVoiePayeur').style.boxShadow = '0 0 0 2px #f4627f';
  }
  // Validate voiePayeur
  if (payeurInfo.payeurDifferent === 'OUI' && !payeurInfo.voiePayeur) {
    errors.voiePayeur = 'Veuillez entrer la voie du payeur.';
    isValid = false;
    await nextTick();
    document.getElementById('voiePayeur').focus();
    document.getElementById('voiePayeur').style.boxShadow = '0 0 0 2px #f4627f';
  }
  // Validate batimentPayeur
  if (payeurInfo.payeurDifferent === 'OUI' && !payeurInfo.batimentPayeur) {
    errors.batimentPayeur = 'Veuillez entrer le bâtiment du payeur.';
    isValid = false;
    await nextTick();
    document.getElementById('batimentPayeur').focus();
    document.getElementById('batimentPayeur').style.boxShadow = '0 0 0 2px #f4627f';
  }
  // Validate libellePayeur
  if (payeurInfo.payeurDifferent === 'OUI' && !payeurInfo.libellePayeur) {
    errors.libellePayeur = 'Veuillez entrer le libellé du payeur.';
    isValid = false;
    await nextTick();
    document.getElementById('libellePayeur').focus();
    document.getElementById('libellePayeur').style.boxShadow = '0 0 0 2px #f4627f';
  }
  // Validate codePostalPayeur
  if (payeurInfo.payeurDifferent === 'OUI' && !payeurInfo.codePostalPayeur) {
    errors.codePostalPayeur = 'Veuillez entrer le code postal du payeur.';
    isValid = false;
    await nextTick();
    document.getElementById('codePostalPayeur').focus();
    document.getElementById('codePostalPayeur').style.boxShadow = '0 0 0 2px #f4627f';
  } else if (payeurInfo.payeurDifferent === 'OUI' && !/^\d{5}$/.test(payeurInfo.codePostalPayeur)) {
    errors.codePostalPayeur = 'Le code postal doit être composé de 5 chiffres.';
    isValid = false;
    await nextTick();
    document.getElementById('codePostalPayeur').focus();
    document.getElementById('codePostalPayeur').style.boxShadow = '0 0 0 2px #f4627f';
  }
  // Validate villePayeur
  if (payeurInfo.payeurDifferent === 'OUI' && !payeurInfo.villePayeur) {
    errors.villePayeur = 'Veuillez entrer la ville du payeur.';
    isValid = false;
    await nextTick();
    document.getElementById('villePayeur').focus();
    document.getElementById('villePayeur').style.boxShadow = '0 0 0 2px #f4627f';
  }
  // Validate declaration
  if (!payeurInfo.declaration) {
    errors.declaration = 'Vous devez accepter les conditions générales.';
    isValid = false;
    await nextTick();
    const declarationElement = document.querySelector('.form-check');
    if (declarationElement) {
      declarationElement.style.boxShadow = '0 0 0 2px #f4627f';
    }
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
      if (error.response.data.errors) {
        backendErrors.value = error.response.data.errors;
      }
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
    name: `${formStore.getSouscripteurInfo.nom} ${formStore.getSouscripteurInfo.prenom}`,
    telephone: formStore.getSouscripteurInfo.telephone,
    email: formStore.getSouscripteurInfo.email,
    typeFormulaire: 'Souscription',
    dateNaissance: formStore.getSouscripteurInfo.dateNaissance,
    codePostal: formStore.getSouscripteurInfo.codePostal,
    numeroSS: formStore.formData.souscripteurInfo.numeroSS,
    situationFam: formStore.getSouscripteurInfo.situationFam,
    profession: formStore.getSouscripteurInfo.profession,
    revenuMensuel: formStore.getSouscripteurInfo.revenuMensuel,
    voie: formStore.getSouscripteurInfo.voie,
    ville: formStore.getSouscripteurInfo.ville,
    cv: formStore.getSouscripteurInfo.civilite,
    souscripteurIsAssure: formStore.getSouscripteurInfo.souscripteurIsAssure,
    ibanPrelevemnt: formStore.formData.payeurInfo.ibanPrelevemnt,
    ibanRembDifferent: formStore.formData.payeurInfo.ibanRembDifferent,
    ibanRemboursement: formStore.formData.payeurInfo.ibanRemboursement,
    mandatSepa: formStore.formData.payeurInfo.mandatSepa,
    rum: formStore.formData.payeurInfo.rum,
    payeurDifferent: formStore.formData.payeurInfo.payeurDifferent,
    nomPayeur: formStore.formData.payeurInfo.nomPayeur,
    prenomPayeur: formStore.formData.payeurInfo.prenomPayeur,
    numeroPayeur: formStore.formData.payeurInfo.numeroPayeur,
    typeVoiePayeur: formStore.formData.payeurInfo.typeVoiePayeur,
    voiePayeur: formStore.formData.payeurInfo.voiePayeur,
    batimentPayeur: formStore.formData.payeurInfo.batimentPayeur,
    libellePayeur: formStore.formData.payeurInfo.libellePayeur,
    codePostalPayeur: formStore.formData.payeurInfo.codePostalPayeur,
    villePayeur: formStore.formData.payeurInfo.villePayeur,
    lien: formStore.formData.lienSignature,
    reference: formStore.formData.reference,
    enfants: formStore.formData.enfantsInfo,
    conjoint: formStore.formData.conjointInfo,
    assure: formStore.formData.assureInfo
  };
  try {
    const response = await axios.post(import.meta.env.VITE_BASE_URL + 'api/send-souscription-email', data);
    if (response.status === 200) {
      console.log('E-mail envoyé avec succès!');
    } else {
      console.error('Une erreur est survenue lors de l\'envoi de l\'e-mail.');
    }
  } catch (error) {
    console.error('Error during sending email:', error);
    toast.error('Une erreur est survenue lors de l\'envoi de l\'e-mail.');
  }
};

const scrollToErrorElements = async () => {
  await nextTick();
  const errorElements = document.querySelectorAll('.backend-errors .error-message');
  if (errorElements.length > 0) {
    errorElements[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const saveDevis = async () => {
  loadingSouscrire.value = true;
  const dataSave = formStore.getDataForSave;
  console.log('Data to save:', dataSave);
  await axios.post(import.meta.env.VITE_BASE_URL + 'api/saveDevis', dataSave)
    .then(async response => {
      console.log(response);
      if (response.status === 200) {
        console.log('response.data200');
        console.log(response.data);
        console.log(dataSave.flagType);
        if (dataSave.flagType != 'DOCUMENT') {
          formStore.updateStepData('devisCompletAvecLien', response.data.response);
          formStore.updateStepData('lienSignature', response.data.response.signature);
          formStore.updateStepData('reference', response.data.response.reference);
          await sendLienSignature();
          router.push('/devis/recapitulatif');
        } else {
          formStore.updateStepData('devisComplet', response.data.response);
        }
      } else if (response.status === 400) {
        console.log('response.data400');
        console.log(response.data);
        if (response.data.errors) {
          backendErrors.value = response.data.errors;
          scrollToErrorElements();
        }
      }
    }).catch(({ response }) => {
      if (response) {
        console.error('Error during saveDevis:', response);
        try {
          const errorData = JSON.parse(response.data.error);
          if (errorData.errors) {
            backendErrors.value = errorData.errors;
            scrollToErrorElements();
          }
        } catch (parseError) {
          console.error('Failed to parse error JSON:', parseError);
          toast.error('Une erreur est survenue, merci de réessayer plus tard');
        }
      } else {
        toast.error('Une erreur est survenue, merci de réessayer plus tard');
      }
    }).finally(() => {
      loadingSouscrire.value = false;
    });
};

const showDevis = async () => {
  loadingDevis2.value = true;
  formStore.updateStepData('flagType', 'DOCUMENT');
  formStore.updateStepData('modePaiement', 'CHEQUE');
  try {
    await saveDevis();
    const base64PDF = formStore.formData.devisComplet?.document || '';
    console.log(base64PDF);
    if (base64PDF) {
      // Decode base64 into binary data
      const binaryString = atob(base64PDF);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      // Create a Blob from the binary data
      const pdfBlob = new Blob([bytes], { type: 'application/pdf' });
      // Create a URL for the Blob
      pdfFileSource.value = URL.createObjectURL(pdfBlob);
      // Show the modal
      if (pdfModal.value) {
        pdfModal.value.show();
      }
    } else {
      console.error('Failed to load PDF: Invalid response or data');
      // Hide the modal if there is an error
      if (pdfModal.value) {
        pdfModal.value.hide();
      }
    }
  } catch (error) {
    console.error('Error during show devis:', error);
    // Hide the modal if there is an error
    if (pdfModal.value) {
      pdfModal.value.hide();
    }
  } finally {
    loadingDevis2.value = false;
    formStore.updateStepData('flagType', 'LIEN');
  }
};

const submitStep = async () => {
  formSubmitted.value = true;
  const isValid = await validateForm();
  if (isValid) {
    formStore.updateStepData('payeurInfo', payeurInfo);
    formStore.updateStepData('flagType', 'LIEN');
    formStore.updateStepData('modePaiement', 'PRELEVEMENT');
    await saveDevis();
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

.option-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
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

.option-card-budget:hover {
  background-color: var(--e-global-color-02c5432);
  border-color: var(--e-global-color-accent);
}

.option-card-budget.selected {
  background-color: var(--e-global-color-accent);
  border-color: var(--e-global-color-accent);
  color: white;
}

.option-card-budget.selected .option-label {
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

.form-check {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.form-check-input {
  margin-top: 0;
}

.form-check-label {
  display: block;
  margin-left: 20px;
}

.errorMsg {
  color: #f4627f;
  margin-top: 10px;
}

.backend-errors {
  background-color: #ffebee;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.backend-errors .error-message {
  color: #d32f2f;
  margin-bottom: 10px;
}
</style>
