<template>
  <div class="step-form">
    <div class="step-container">
      <div class="step-header">
        <h2 class="step-title">Félicitations, {{ ucfirst(souscripteurInfo.cv) }} {{ ucfirst(souscripteurInfo.nom) }} !</h2>
        <p class="step-description">
          Vous êtes sur le point de finaliser votre souscription à une assurance santé. Nous vous remercions de votre confiance.
        </p>
        <p class="step-description">
          Votre contrat est presque finalisé. Pour compléter le processus, vous devez signer votre contrat. Une fois cette étape terminée, vous recevrez une confirmation par e-mail.
        </p>
      </div>

      <div class="step-section">
        <h3>Prochaines Étapes</h3>
        <ul class="step-list">
          <li>Votre souscription sera vérifiée et validée par nos équipes.</li>
          <li>Vous recevrez un e-mail avec un lien pour signer votre contrat en ligne.</li>
          <li>Une fois votre contrat signé, vous recevrez une confirmation finale par e-mail.</li>
        </ul>
      </div>

      <div class="step-section">
        <h3>Besoin d’aide ?</h3>
        <p>Contactez notre service client au <a href="tel:0146592228">01 46 59 22 28</a></p>
        <p>ou par e-mail à <a href="mailto:contact@prioritesantemutuelle.fr">contact@prioritesantemutuelle.fr</a>.</p>
      </div>

      <div class="step-footer">
        <button @click="goToHome" class="submit-button">Retour à l'Accueil</button>
      </div>

      <footer class="step-footer">
        <p>Votre sécurité et celle de votre famille sont notre priorité.<br>
        Nous nous engageons à protéger vos données personnelles.<br>
        Pour en savoir plus, consultez notre <a href="/politique-de-confidentialite">Politique de Confidentialité</a>.<br>
        © 2025 Prioritesantemutuelle. Tous droits réservés.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFormStore } from '@/stores/useFormStore';
import { useRouter } from 'vue-router';

const formStore = useFormStore();
const router = useRouter();

const souscripteurInfo = ref(formStore.getFormData.souscripteurInfo);

// Fonction pour mettre en majuscule la première lettre d'une chaîne
const ucfirst = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const goToHome = () => {
  router.push('/');
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
  padding: 20px;
  background-color: var(--e-global-color-secondary);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.step-section h3 {
  color: var(--e-global-color-primary);
  margin-bottom: 15px;
  border-bottom: 1px solid var(--e-global-color-primary);
  padding-bottom: 10px;
}

.step-list {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 20px;
}

.step-list li {
  margin-bottom: 10px;
  color: var(--e-global-color-text);
  position: relative;
  padding-left: 25px;
}

.step-list li:before {
  content: "✓";
  color: var(--e-global-color-accent);
  position: absolute;
  left: 0;
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
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: var(--color4);
  color: #fff;
}

.step-footer p {
  color: var(--e-global-color-text);
  font-size: 14px;
  margin-top: 20px;
}

a {
  color: var(--e-global-color-accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--e-global-color-primary);
}
</style>
