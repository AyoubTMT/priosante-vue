<template>
  <form @submit.prevent="submitStep" class="step-form">
    <div class="step-container">
      <div class="step-header">
        <h2 class="step-title">Informations du Souscripteur</h2>
        <p class="step-description">
          Veuillez fournir les informations du souscripteur.
        </p>
      </div>

      <div class="step-section">
        <div class="form-group">
          <label for="cv" class="form-label">Civilité</label>
          <select id="cv" class="form-select" v-model="souscripteurInfo.cv" required>
            <option value="MR">Monsieur</option>
            <option value="MME">Madame</option>
          </select>
        </div>

        <div class="form-group">
          <label for="nom" class="form-label">Nom</label>
          <input type="text" id="nom" class="form-control" v-model="souscripteurInfo.nom" required>
        </div>

        <div class="form-group">
          <label for="prenom" class="form-label">Prénom</label>
          <input type="text" id="prenom" class="form-control" v-model="souscripteurInfo.prenom" required>
        </div>

        <div class="form-group">
          <label for="dateNaissance" class="form-label">Date de Naissance</label>
          <input type="date" id="dateNaissance" class="form-control" v-model="souscripteurInfo.dateNaissance" required>
        </div>

        <div class="form-group">
          <label for="tel" class="form-label">Téléphone</label>
          <input type="tel" id="tel" class="form-control" v-model="souscripteurInfo.tel" required>
        </div>

        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" class="form-control" v-model="souscripteurInfo.email" required>
        </div>

        <div class="form-group">
          <label for="situationFam" class="form-label">Situation Familiale</label>
          <select id="situationFam" class="form-select" v-model="souscripteurInfo.situationFam" required>
            <option value="CONCUBIN">Concubin</option>
            <option value="VEUF">Veuf</option>
            <option value="CELIBATAIRE">Célibataire</option>
            <option value="DIVORCE">Divorcé</option>
            <option value="MARIE">Marié</option>
            <option value="SEPARE">Séparé</option>
            <option value="PACSE">Pacsé</option>
          </select>
        </div>

        <div class="form-group">
          <label for="souscripteurIsAssure" class="form-label">Souscripteur est Assuré</label>
          <select id="souscripteurIsAssure" class="form-select" v-model="souscripteurInfo.souscripteurIsAssure" required>
            <option value="OUI">Oui</option>
            <option value="NON">Non</option>
          </select>
        </div>

        <div class="form-group">
          <label for="profession" class="form-label">Profession</label>
          <select id="profession" class="form-select" v-model="souscripteurInfo.profession" required>
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
        </div>

        <div class="form-group">
          <label for="revenuMensuel" class="form-label">Revenu Mensuel</label>
          <select id="revenuMensuel" class="form-select" v-model="souscripteurInfo.revenuMensuel" required>
            <option value="PLUS_3001">Plus de 3001 €</option>
            <option value="DE_1501_A_3000">De 1501 à 3000 €</option>
            <option value="DE_801_A_1500">De 801 à 1500 €</option>
            <option value="MOINS_801">Moins de 801 €</option>
          </select>
        </div>

        <div class="form-group">
          <label for="voie" class="form-label">Voie</label>
          <input type="text" id="voie" class="form-control" v-model="souscripteurInfo.voie" required>
        </div>

        <div class="form-group">
          <label for="ville" class="form-label">Ville</label>
          <input type="text" id="ville" class="form-control" v-model="souscripteurInfo.ville" required>
        </div>

        <div class="form-group">
          <label for="codePostal" class="form-label">Code Postal</label>
          <input type="text" id="codePostal" class="form-control" v-model="souscripteurInfo.codePostal" required>
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
import { reactive, onMounted } from 'vue';

const formStore = useFormStore();

const souscripteurInfo = reactive({
  cv: 'MR',
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
  typeSouscripteur: 'PERSONNE_PHYSIQUE'
});

onMounted(() => {
  // Load data from the store
  const storedData = formStore.getFormData.souscripteurInfo;
  if (storedData) {
    Object.assign(souscripteurInfo, storedData);
  }
});

const submitStep = () => {
  formStore.updateStepData('souscripteurInfo', souscripteurInfo);
  formStore.updateCurrentStep(4); 
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
