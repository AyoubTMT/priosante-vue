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
        <img src="../assets/images/hero-web-sante.png" class="d-none d-md-block img-fluid heroImg" alt="heroImg" width="640" height="449">
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
import '../assets/home.css';

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
<style scoped>

:root {
    --color5: #D99654;
    --color8: #d9965430;
    --color3: #fff9f3;
    --color4: #467061;
    --green1: #467061;
    --green2: #467061;
    --green3: #eef8d9;
    --font: "Poppins", sans-serif;
    --bs-btn-active-bg: #467061
}

::selection {
    background-color: var(--green2);
    color: #000
}
/* Ajoutez ces styles à votre fichier CSS existant */
body {
    font-family: 'DM Sans', sans-serif !important;
    font-weight: 400;
    line-height: 140%;
    background: var(--color8) !important;
    color: #2b2b2b;
}

.bgblanc {
    background-color: #fff;
}

button.btn-tarif {
    background-color: var(--color5);
    border-radius: 5px;
    padding: 7px 16px;
    color: #fff;
    border: 1px solid var(--color5);
    transition: 0.2s;
}

button.btn-tarif:hover {
    background-color: #fff;
    color: var(--color5);
}

.pageH1 {
    font-family: 'Zilla Slab', serif;
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 20px;
}

.pb_home {
    font-size: 20px;
    line-height: 26px;
    color: #565656;
    margin-bottom: 20px;
}

.LkButton {
    width: 428px;
    border: 1px solid var(--color5);
    border-radius: 6px;
    color: #fff;
    background: var(--color5);
    cursor: pointer;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 800;
    padding: 18px 0;
    transition: background-color 0.3s;
}

.LkButton:hover {
    background-color: #fff;
    color: var(--color5);
}

.sectionTitle {
    font-family: 'Zilla Slab', serif;
    font-size: 36px;
    line-height: normal;
    padding-top: 10px;
    margin-bottom: 40px;
}

.item__Service {
    background-color: var(--color8) !important;
    padding: 26px 20px;
    min-height: 312px;
    border: 1px solid #dcdcdc;
    border-radius: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.item__Service strong {
    font-size: 24px;
    line-height: 30px;
}

.item_list_garanties_inclu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 45px 40px;
    min-height: 457px;
    border-radius: 20px;
    background: var(--color8);
    font-size: 16px;
}

.item_list_garanties_inclu strong {
    font-size: 24px;
    line-height: 34px;
}

.TrustpilotWidget {
    width: 428px;
    text-align: center;
    margin-top: 20px;
}

@media (max-width: 767px) {
    .LkButton, .heroData {
        width: 100%;
    }

    .pageH1 {
        font-size: 34px;
        margin-bottom: 25px !important;
    }

    .LkButton {
        padding: 18px 0px;
    }

    .TrustpilotWidget {
        width: 100%;
    }

    .item_list_garanties_inclu {
        padding: 26px 14px;
        min-height: auto;
        height: 100%;
    }

    .title_item {
        font-size: 18px !important;
        line-height: 20px !important;
    }

    .item_list_garanties_inclu p {
        font-size: 12px;
    }
}

@media (max-width: 1200px) and (min-width: 861px) {
    .heroData {
        width: 80%;
    }
}

@media (max-width: 860px) {
    .heroData {
        width: 100%;
    }
}


.bigTitle {
    font-size: 36px !important
}

body,
li.nav-item .nav-link {
    font-size: 16px;
    font-style: normal
}

.accroche span.boxOffre,
.espace:before,
.readmore svg,
.swapNav,
body {
    position: relative
}


.pageH1,
body {
    color: #2b2b2b
}

body {
    font-family: "DM Sans", sans-serif !important;
    font-weight: 400;
    line-height: 140%;
    background: var(--color8) !important
}

.bgblanc {
    background-color: #fff
}

button.btn-tarif {
    background-color: var(--color5);
    border-radius: 5px;
    padding: 7px 16px;
    color: #fff;
    border: 0;
    border: 1px solid var(--color5)
}

button.btn-tarif:hover {
    background-color: #fff;
    transition: .2s;
    color: var(--color5);
    border: 1px solid var(--color5)
}

li.nav-item {
    display: flex;
    align-items: center
}

li.nav-item .nav-link {
    font-family: 'DM Sans', sans-serif;
    font-weight: 500
}

.espace:before {
    content: url(https://www.selfassurance.fr/public/frontv2/media/userheader.png);
    top: 3px;
    left: 0;
    margin-left: 10px
}

.pageH1 {
    font-family: 'Zilla Slab', serif;
    font-size: 60px;
    font-weight: 700
}

.sectionTitle,
.title2 {
    font-family: "Zilla Slab", serif
}

.miniTitle,
.pb_home {
    font-size: 20px;
    line-height: 26px;
    color: #565656
}

.accroche,
.sectionTitle,
.title2 {
    color: #2b2b2b;
    font-weight: 700
}

.TrustpilotWidget,
.cAuteur,
.cTitle {
    margin-top: 20px
}

.accroche {
    font-size: 20px
}

.accroche span.boxOffre {
    z-index: 9;
    color: #000
}

.accroche span.boxOffre:after {
    content: "";
    display: block;
    z-index: -99;
    position: absolute;
    top: 21px;
    left: 0;
    width: 100%;
    height: 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background-color: var(--color4);
    -o-border-radius: 5px
}

.sectionTitle {
    padding-top: 10px;
    font-size: 36px;
    line-height: normal
}

.item__Service {
    background-color: var(--color8) !important;
    padding: 26px 20px;
    min-height: 312px;
    border: 1px solid #dcdcdc;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background: #fff;
    -o-border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center
}

.item__Service strong {
    font-size: 24px;
    line-height: 30px
}

.TrustpilotWidget__note {
    font-size: 13px;
    line-height: 16px;
    padding: 5px 0 0 8px
}

.TrustpilotWidget .TrustpilotWidget__Avis {
    color: #aca7a7
}

.item_list_garanties_inclu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 45px 40px;
    min-height: 457px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background: var(--color8);
    -o-border-radius: 20px;
    font-size: 16px
}

.item_list_garanties_inclu strong {
    font-size: 24px;
    line-height: 34px
}

.title2 {
    font-size: 28px
}

.bloclist {
    list-style: none;
    padding: 0
}

.readmore,
.readmore a,
.readmore a:hover,
.readmore:before {
    color: var(--color5);
    cursor: pointer;
    text-decoration: none !important;
    font-weight: 700
}

.readmore svg {
    padding-right: 10px;
    transition: .5s
}

.readmore:hover svg {
    left: 5px;
    animation: .5s myship;
    -moz-animation: .5s myship;
    -webkit-animation: .5s myship
}

.swiper {
    width: auto;
    height: 366px;
    background-color: #eff7ed;
    padding: 20px;
    border-radius: 15px
}

.swiper-slide {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-direction: column;
    padding: 40px
}

.cText {
    text-align: center
}

.cAuteur {
    font-size: 13px;
    color: #a29c9c;
    font-weight: 700
}

.swapNav {
    opacity: .7;
    bottom: 30px;
    z-index: 99
}

.cTitle {
    font-weight: 700;
    color: #565656;
    margin-bottom: 20px
}

@keyframes myship {
    from {
        left: 0
    }

    to {
        left: 5px
    }
}

@-moz-keyframes myship {
    from {
        left: 0
    }

    to {
        left: 5px
    }
}

@-webkit-keyframes myship {
    from {
        left: 0
    }

    to {
        left: 5px
    }
}

.faq-accordion .accordion-button:not(.collapsed) {
    background: var(--green2);
    background: #fff !important;
    color: #000 !important;
    font-weight: 700 !important
}

.faq-accordion .accordion-item {
    border: 0 !important;
    border-bottom: 1px solid #dfdfdf !important
}

.faq-accordion .accordion-button:focus,
.navbar-toggler:focus {
    box-shadow: 0 0 0 !important
}

.faq-accordion .collapse.show,
.faq-accordion .collapsing {
    background-color: var(--green3)
}

footer {
    background-color: #467061;
    color: #fff;
    padding: 20px 0
}

footer a {
    text-decoration: none;
    color: #fff;
    font-size: 13px
}

footer a:hover {
    text-decoration: underline
}

.fTitle {
    font-size: 18px;
    font-weight: 700;
    margin: 25px 0
}

.copyright {
    margin-top: 50px !important;
    border-top: 1px solid rgba(255, 255, 255, .1);
    padding: 40px 0;
    font-size: 13px;
    font-weight: 400;
    opacity: .7
}

button.navbar-toggler {
    border: 0
}

.heroData {
    width: 50%
}

.bloclist li svg {
    min-width: 20px
}

.offcanvas-body a {
    text-decoration: none;
    color: #000
}

.offcanvas-body ul {
    padding: 0;
    list-style: none
}

.offcanvas-body ul li {
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 1px solid #eee
}

.offcanvas-body li.espace:before {
    margin-right: 10px !important;
    padding: 0 !important;
    margin-left: 0 !important
}

.item__Service {
    height: 100%
}

button.closeCanva.text-reset {
    font-size: 48px;
    padding: 0 !important;
    height: 25px;
    position: relative;
    top: -20px;
    border: 0;
    background: 0;
    color: var(--green1) !important
}

.infoIcon path {
    fill: #999;
    cursor: pointer
}

@media(max-width :767px) {

    .LkButton,
    .heroData {
        width: 100%
    }

    .pageH1 {
        padding-top: 0 !important;
        font-size: 34px;
        margin-bottom: 25px !important
    }

    .LkButton {
        padding: 10px
    }

    .vectorImg {
        width: auto !important;
        height: 40px !important;
        margin: 0 auto
    }

    .item_list_garanties_inclu {
        padding: 26px 14px;
        min-height: auto;
        height: 100%
    }

    .title_item {
        font-size: 18px !important;
        line-height: 20px !important
    }

    .item_list_garanties_inclu p {
        font-size: 12px
    }

    .navbar-toggler-icon {
        width: 1.2em !important;
        height: 1.2em !important
    }

    .heroImg {
        position: relative;
        right: 5%
    }

    .copyright {
        padding: 20px 0
    }

    footer {
        padding: 0
    }
}

nav.sticky-top {
    background: #fff !important;
    padding-bottom: 0;
    box-shadow: 0 2px 5px #e0e0ed;
}

body {
    font-family: 'DM Sans', sans-serif
}

@font-face {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/dmsans/v10/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap
}

@font-face {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/dmsans/v10/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap
}

@font-face {
    font-family: "Zilla Slab";
    font-style: normal;
    font-weight: 400;
    src: local("Zilla Slab Regular"), url("https://www.selfassurance.fr/public/frontv2/fonts/ZillaSlab-Regular.woff2") format("woff2");
    font-display: swap
}

@font-face {
    font-family: "Zilla Slab";
    font-style: normal;
    font-weight: 700;
    src: local("Zilla Slab Bold"), url("https://www.selfassurance.fr/public/frontv2/fonts/ZillaSlab-Bold.woff2") format("woff2");
    font-display: swap
}


body {
    overflow-x: hidden;
}

.navbar {
    position: sticky !important;
    top: 0;
    transition: 0.5s;
}

nav.sticky-top {
    background: #fff !important;
    padding-bottom: 0;
    box-shadow: 0 2px 5px #e0e0ed;
}

nav.stickMenu {
    padding: 0;
    background-color: #fff !important;
    box-shadow: 0 2px 5px #e0e0ed;
    transition: 0.5s;
    z-index: 99;
}

.stickMenu .container-lg {
    border: 0 !important;
}

.LkButton {
    width: 428px;
    border: 1px solid var(--color5);
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    color: #fff;
    background: var(--color5);
    cursor: pointer;
    -o-border-radius: 6px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 800;
    padding: 18px 0;
}

.TrustpilotWidget {
    width: 428px;
    text-align: center;
}

.articleTitle a,
article a {
    text-decoration: none;
    color: #3a3a3a;
}

.imgArticle {
    height: auto;
    background-size: cover;
    background-position: center;
    border-radius: 15px 15px 0 0;
}

.articleTitle {
    font-size: 24px;
    line-height: 34px;
    font-weight: 700;
    margin-bottom: 10px;
}

.itemCat {
    position: relative;
    top: 12px;
    left: 10px;
    z-index: 2;
}

.catGreen,
.catRred {
    padding: 6px 13px;
    -webkit-border-radius: 24px;
    -moz-border-radius: 24px;
    border-radius: 24px;
    font-size: 13px;
    -o-border-radius: 24px;
}

.Text-white,
.Text-white a,
.Text-white a:hover {
    color: #fff;
}

.catRred {
    background: var(--color5);
}

.catGreen {
    background: var(--green1);
}

.Link_Self_Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    padding: 8px 17px !important;
    border: none;
    border: 1px solid var(--color5);
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    outline: 0;
    color: #fff;
    background-color: var(--color5);
    transition: box-shadow .2s;
    cursor: pointer;
    -o-border-radius: 6px;
    text-decoration: none;
}

@media(max-width : 1200px) and (min-width : 861px) {
    .heroData {
        width: 80%;
    }
}

@media(max-width : 860px) {
    .imgArticle {
        height: 61px;
        background-size: cover;
        background-position: center;
        border-radius: 15px 15px 0 0;
    }

    .itemCat {
        position: relative;
        top: 12px;
        left: 10px;
        z-index: 2;
    }

    .articleTitle {
        font-size: 18px;
        line-height: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    article p {
        font-size: 14px;
        line-height: 21px;
        max-height: 8rem;
        -webkit-box-orient: vertical;
        display: block;
        display: -webkit-box;
        overflow: hidden !important;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        line-clamp: 4;
    }

    .heroData {
        width: 100%;
    }

    .LkButton {
        padding: 18px 0px;
        width: 100%;
    }

    .TrustpilotWidget {
        width: 100%;
    }

    .swiper-slide {
        padding: 0px !important;
        display: flex;
        align-items: center;
    }
}
</style>