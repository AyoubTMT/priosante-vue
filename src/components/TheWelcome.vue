<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-lg container-md-fluid border-bottom p-0">
      <a class="navbar-brand me-auto" href="https://www.prioritésantemutuelle.fr">
        <img class="d-none d-md-none d-lg-inline-block"
          src="../assets/images/logo-priorite-sante.png" alt="logo"
          aria-label="logo home page" width="169" height="35">
        <img class="d-inline-block d-md-inline-block d-lg-none"
          src="../assets/images/logo-priorite-sante.png" width="44" height="36" alt="logo"
          aria-label="logo home page">
      </a>

      <router-link to="/devis" class="d-inline-block d-md-inline-block d-lg-none me-3">
        <button @click="clearLocalStorage" class="btn-tarif">
            Devis en ligne
        </button>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/devis" class="nav-link pe-0">
              <button @click="clearLocalStorage" class="btn-tarif">
                  Devis en ligne
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section id="heroscene" class="container-lg container-md-fluid">
    <div class="d-flex mt-5 flex-wrap flex-md-nowrap align-items-center">
      <div class="heroData align-items-center">
        <div>
          <h1 class="pageH1">Mutuelle Santé</h1>
          <p class="pb_home">Chaque personne a des besoins uniques en matière de santé. Laissez-vous guider pour trouver la meilleure formule d'assurance santé qui vous convient.</p>
          <p class="accroche">Calculez gratuitement votre tarif <span class="boxOffre">en moins de 2 minutes</span>.</p>
          <router-link to="/devis">
            <button @click="clearLocalStorage" class="LkButton">
              Obtenir mon devis
            </button>
          </router-link>
          <div class="TrustpilotWidget">
            <img src="../assets/images/googlereviews.png" width="226" height="23" alt="trustpilot" class="img-fluid m-auto m-md-0">
          </div>
        </div>
      </div>
      <div class="heroImg d-flex align-items-center">
        <img src="../assets/images/hero-web-sante.webp" class="d-none d-md-block img-fluid heroImg" alt="heroImg" width="640" height="449">
      </div>
    </div>
  </section>
  <div class="container-fluid bgblanc mt-5 pb-5">
    <!-- Les plus -->
    <section id="lesPlus" class="container-fluid container-lg">
      <div class="row">
        <div class="col-12 text-center">
          <div class="sectionTitle my-5">Les avantages de votre mutuelle santé</div>
        </div>
      </div>
      <div class="row g-4 g-md-1 g-lg-4">
        <div class="col-12 col-md-4 col-lg-4">
          <div class="item__Service">
            <object type="image/svg+xml" data="https://www.selfassurance.fr/public/frontv2/media/Prevoyance.svg" width="58" height="129" class="d-inline-block text-center pt-4 pb-5" alt="" title="icon"></object>
            <strong class="mb-2 text-center">Une couverture immédiate</strong>
            <p class="text-center">Aucun délai de carence n'est appliqué sur le contrat santé.</p>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <div class="item__Service">
            <object type="image/svg+xml" data="https://www.selfassurance.fr/public/frontv2/media/callcenter.svg" width="62" height="133" class="d-inline-block text-center pt-4 pb-5" alt="" title="icon"></object>
            <strong class="mb-2 text-center">Une assistance santé</strong>
            <p class="text-center">Un service d’assistance disponible 6 jours / 7 pour vous accompagner dans vos démarches.</p>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <div class="item__Service">
            <object type="image/svg+xml" data="https://www.selfassurance.fr/public/frontv2/media/Sort_arrow.svg" width="70" height="142" class="d-inline-block text-center pt-4 pb-5" alt="" title="icon"></object>
            <strong class="mb-2 text-center">Un accompagnement personnalisé</strong>
            <p class="text-center">Nous prenons en charge les démarches de résiliation de votre ancien contrat santé.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Les garanties -->
    <section id="garanties" class="container-lg container-md-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <div class="sectionTitle mt-5">Les garanties de base</div>
          <p class="mb-5">Voici les différents risques contre lesquels vous serez couvert.</p>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-6 col-lg-3">
          <div class="item_list_garanties_inclu text-center text-lg-start">
            <object type="image/svg+xml" data="https://www.selfassurance.fr/public/frontv2/media/soins-courants.svg" width="40" height="40" alt="" class="mb-4 vectorImg" title="icon"></object>
            <strong class="mb-3 title_item">Soins courants</strong>
            <p>La prise en charge de tous les actes médicaux (consultations, analyses, radiologie...).</p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="item_list_garanties_inclu text-center text-lg-start">
            <object type="image/svg+xml" data="https://www.selfassurance.fr/public/frontv2/media/dentaires.svg" width="40" height="40" alt="" class="mb-4 vectorImg" title="icon"></object>
            <strong class="mb-3 title_item mx-auto mx-lg-0">Soins dentaires</strong>
            <p>La prise en charge des soins, des prothèses, et de l'orthodontie, remboursés ou non par la sécurité sociale.</p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="item_list_garanties_inclu text-center text-lg-start">
            <object type="image/svg+xml" data="https://www.selfassurance.fr/public/frontv2/media/optique.svg" width="40" height="40" alt="" class="mb-4 vectorImg" title="icon"></object>
            <strong class="mb-3 title_item mx-auto mx-lg-0">Soins optiques</strong>
            <p>Le remboursement des verres, montures, lentilles, et la chirurgie réfractive.</p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="item_list_garanties_inclu text-center text-lg-start">
            <object type="image/svg+xml" data="https://www.selfassurance.fr/public/frontv2/media/hospitalisation.svg" width="40" height="40" alt="" class="mb-4 vectorImg" title="icon"></object>
            <strong class="mb-3 title_item mx-auto mx-lg-0">Hospitalisation</strong>
            <p>Le remboursement des frais de séjour, les honoraires (médecin, chirurgien, anesthésiste), le forfait hospitalier, le transport...</p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="item_list_garanties_inclu text-center text-lg-start">
            <object type="image/svg+xml" data="https://www.selfassurance.fr/public/frontv2/media/auditive.svg" width="40" height="40" alt="" class="mb-4 vectorImg" title="icon"></object>
            <strong class="mb-3 title_item mx-auto mx-lg-0">Aide auditive</strong>
            <p>Vous bénéficiez d’un forfait annuel et par bénéficiaire pour l’achat de prothèses auditives.</p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="item_list_garanties_inclu text-center text-lg-start">
            <object type="image/svg+xml" data="https://www.selfassurance.fr/public/frontv2/media/cures.svg" width="40" height="40" alt="" class="mb-4 vectorImg" title="icon"></object>
            <strong class="mb-3 title_item mx-auto mx-lg-0">Cures thermales</strong>
            <p>Vous bénéficiez d'un forfait annuel sur les cures prises en charge par la sécurité sociale.</p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="item_list_garanties_inclu text-center text-lg-start">
            <object type="image/svg+xml" data="https://www.selfassurance.fr/public/frontv2/media/medcine-douce.svg" width="40" height="40" alt="" class="mb-4 vectorImg" title="icon"></object>
            <strong class="mb-3 title_item mx-auto mx-lg-0">Médecine douce</strong>
            <p>La prise en charge des médecines non-conventionnées (ostéopathie, chiropractie, acupuncture...).</p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="item_list_garanties_inclu text-center text-lg-start">
            <object type="image/svg+xml" data="https://www.selfassurance.fr/public/frontv2/media/pharmacie.svg" width="40" height="40" alt="" class="mb-4 vectorImg" title="icon"></object>
            <strong class="mb-3 title_item">Pharmacie</strong>
            <p>Tous les médicaments prescrits par un praticien sont remboursés, y compris ceux non couverts par le régime obligatoire.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer class="container-fluid">
    <div class="container-lg container-md-fluid">
      <div class="row g-0">
        <div class="col-6 col-lg-6">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-12">
                <div class="fTitle">
                  Information de contact
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div>
                  <p><a href="mailto:contact@prioritesantemutuelle.fr">contact@prioritesantemutuelle.fr</a></p>
                  <p><a href="tel:+33146592228">01 46 59 22 28</a></p>
                  <p>45 RUE DE BOULAINVILLIERS 75016, Paris</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-6">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-12">
                <div class="fTitle">
                  Tout sur Priorité Santé Mutuelle
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div>
                  <a href="https://assurmabarak.fr/">Assurance habitation</a>
                </div>
                <div>
                  <a href="/devis">Mutuelle Santé</a>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div><a href="#">
                    Mentions légales
                  </a></div>
                <div><a href="#">
                    Préférences des cookies
                  </a></div>
                <div><a href="#">
                    Politique de confidentialité
                  </a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 text-center copyright">
          Copyright © 2025 Priorité Santé Mutuelle - Tous droits réservés
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import "../assets/home.css";

const clearLocalStorage = () => {
  localStorage.clear();
  console.log("LocalStorage cleared, starting a new devis.");
};

const isNavbarExpanded = ref(false);
const toggleNavbarVisibility = () => {
  isNavbarExpanded.value = !isNavbarExpanded.value;
  const navbarToggle = document.querySelector("#navbar-toggle");
  if (navbarToggle) {
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded.value.toString());
  }
};

onMounted(() => {
  const myElement = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 70) {
      myElement?.classList.add('stickMenu');
    } else {
      myElement?.classList.remove('stickMenu');
    }
  });
});
</script>
