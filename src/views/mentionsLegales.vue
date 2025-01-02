<template>
  <div>
    <header id="navbar">
      <nav class="navbar-container container">
        <a href="/" class="home-link">
          <div class="navbar-logo">
            <router-link :to="{ name: 'home' }"><img className='' src='../assets/images/AssurLogo.png' style="width: 250px; height: 93.8px;"
                alt="" /></router-link>
          </div>
        </a>
        <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu"
          :aria-expanded="isNavbarExpanded.toString()" @click="toggleNavbarVisibility">
          <i class="fa fa-bars"></i>

        </button>
        <div id="navbar-menu" aria-labelledby="navbar-toggle" @click="toggleNavbarVisibility">
          <ul class="navbar-links" @click.stop>
            <li class="navbar-item">
              <router-link :to="{ name: 'lassurance' }" class="navbar-link">L'assurance</router-link>
            </li>
            <li class="navbar-item">
              <router-link :to="{ name: 'vosquestions' }" class="navbar-link">Vos questions</router-link>
            </li>
            <li class="navbar-item">
              <router-link to="/devis">
                <button @click="clearLocalStorage"
                  class="bg-orange-500 buttonLimouni text-white font-semibold rounded-md rounded-lg rounded-xl navbar-link">
                  Devis en ligne
                </button>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <div class="Hero__Section">
      <div class="Hero__inner main-wrapper d-flex justify-content-between flex-col flex-md-row">
        <div class="Hero__desc">
          <h1 class="pre-field-tarif font-weight-bold pb-3">Mentions légales</h1>
          <p class="pb_home">Assurmabarak est un site de GLS LAssurances en partenariat avec ECA Assurances</p>
          <p class="pb_home">Dernière mise à jour : 04/12/2024</p>
          <div class="buttons__Home pt-4">
              <router-link to="/devis" class="LkButton" @click="clearLocalStorage">
                Obtenir mon tarif
              </router-link>
          </div>
        </div>
        <div class="Hero__img"><img src="../assets/images/mentions.png" height="449" width="640"
            alt="Une assurance animaux en ligne et pas cher"></div>
      </div>
    </div>

    <div class="container my-5 px-3">
      <main class="text-justify">
        <section class="mb-4">
            <h2 class="h4 text-secondary">Informations générales</h2>
            <p>
                Assurmabarak est une marque de <strong>Gls Lassurances</strong>, une société intermédiaire en assurance (courtier) régie par le Code des Assurances.
            </p>
            <p>
                Le site Internet accessible à l’adresse <a href="http://www.assurmabarak.fr" target="_blank">www.assurmabarak.fr</a> est conçu et édité par la société Gls Lassurances en partenariat avec ECA Assurances.
            </p>
        </section>

        <section class="mb-4">
            <h2 class="h4 text-secondary">Gls Lassurances</h2>
            <p>Société à responsabilité limité (SARL) au capital de 8000 €, dotée d’une assurance responsabilité civile professionnelle et d’une garantie financière en application des articles L.530.1 et L.530.2 du Code des Assurances auprès de + SIMPLE, Société d’assurance régie par le Code des Assurances et soumise au contrôle de l’ACPR.</p>
            <p>Immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 483 666 137 et son siège social est situé au 45, rue de Boulainvilliers 75016 Paris.</p>
            <p>Placée sous l'autorité de l'ACPR (Autorité de contrôle prudentiel et de résolution), 4 place de Budapest, 75436 Paris Cedex 09.</p>
        </section>

        <section class="mb-4">
            <h2 class="h4 text-secondary">Nous contacter</h2>
            <ul class="px-0">
                <li><strong>Par téléphone :</strong> +33 1 46 59 22 28</li>
                <li><strong>Par e-mail :</strong> <a href="mailto:contact@lassurances.fr">contact@lassurances.fr</a></li>
                <li><strong>Par courrier :</strong> 45, rue de Boulainvilliers, 75016 Paris</li>
            </ul>
        </section>

        <section class="mb-4">
            <h2 class="h4 text-secondary">Informations légales sur Gls Lassurances</h2>
            <ul class="px-0">
                <li><strong>Code APE :</strong> 6622Z (Activités des agents et courtiers d’assurances)</li>
                <li><strong>SIRET :</strong> 483 666 137 000 37 RCS PARIS</li>
                <li><strong>Numéro TVA :</strong> FR61483666137</li>
                <li>
                    <strong>Numéro Orias :</strong> 07005515. Pour plus d'informations, consultez le site de l'Orias : 
                    <a href="http://www.orias.fr" target="_blank">www.orias.fr</a>, ou contactez l'Orias : 
                    1 rue Jules Lefebvre, 75731 Paris Cedex 09 – Téléphone : 01 53 21 51 70 – Fax : 01 53 21 51 95.
                </li>
            </ul>
        </section>

        <section class="mb-4">
            <h2 class="h4 text-secondary">Hébergement</h2>
            <p>
                Le site ASSURMABARAK est hébergé par la société IONOS 1&1 Internet SARL :
            </p>
            <address>
                7, place de la Gare<br>
                BP 70109<br>
                57200 Sarreguemines Cedex<br>
                Téléphone : 0970 808 911<br>
                E-mail : <a href="mailto:info@ionos.fr">info@ionos.fr</a>
            </address>
            <p>
                1&1 IONOS est un membre du groupe United Internet.
            </p>
        </section>

        <section class="mb-4">
            <h2 class="h4 text-secondary">Réclamation</h2>
            <p>
                Vous pouvez adresser toutes vos réclamations :
            </p>
            <ul class="px-0">
                <li>Par courriel : <a href="mailto:reclamations@lassurances.fr">reclamations@lassurances.fr</a></li>
                <li>Par courrier : Services Réclamations Lassurances, 45, rue de Boulainvilliers, 75016 Paris</li>
            </ul>
            <p>
                Si vous n'êtes pas satisfait(e) du traitement de votre réclamation, vous pouvez saisir le Médiateur de l'Assurance :
            </p>
            <ul class="px-0">
                <li>En ligne : <a href="http://www.mediation-assurance.org" target="_blank">www.mediation-assurance.org</a></li>
                <li>Par courrier : La Médiation de l’Assurance, TSA 50 110 – 75441 Paris Cedex 09</li>
            </ul>
        </section>
      </main>
    </div>

    <section className='bg-[#b0e2fd]'>
      <div className='container mx-auto py-12'>
        <div className="grid sm:grid-cols-3 grid-cols-1 px-4">
          <div>
            <h4 className='font-semibold py-3 mobile:text-sm'>Information de contact</h4>
            <div>
              <p className='py-1'>contact@assurmabarak.fr</p>
              <p className='py-1'>01 46 59 22 28</p>
              <p className='py-1'>45 RUE DE BOULAINVILLIERS 75016, Paris</p>
            </div>
          </div>
          <div>
            <h4 className='font-semibold py-3 mobile:text-sm'><router-link to="/mentions-legales"  style="font-weight: 600 !important;">Mentions légales</router-link></h4>
            <div>
              <p className='py-1'>Politique de confidentialité</p>
              <p className='py-1'>Conditions générales de vente</p>
              <p className='py-1'>Politique de cookies</p>
            </div>
          </div>
          <div>
            <h4 className='font-semibold py-3 mobile:text-sm'>Partenariats</h4>
            <p>Assurmabarak est un site de GLS LAssurances en partenariat avec ECA assurances</p>
          </div>
        </div>
      </div>
    </section>
    <div className='bg-[#b0e2fd] text-center py-4 font-semibold'><p class="footer-copyright m-0">© 2025 ASSURMABARAK tous droits réservés.</p></div>
  </div>
</template>

<style scoped>
 @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  
 /********************** FAQ *************************/
  @media (max-width: 853px) {
    .Hero__desc {
      width: auto;
    }
    .LkButton {
        margin-top: 12px;
        width: 100%;
    }
    .buttons__Home {
        flex-direction: column;
        width: 100%;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
    }
    .Hero__Section .pre-field-tarif {
        padding-top: 0 !important;
        font-size: 34px !important;
    }
    .pre-field-tarif {
        padding-top: 14px;
    }
    .Hero__Section .Hero__desc {
        margin-left: 20px;
        padding: 30px 15px;
    }
  }
  @media (max-width: 991.98px) {
      .Hero__Section .pre-field-tarif {
          padding-top: 0 !important;
      }
    .LkButton {
        margin-top: 12px;
        width: 100%;
        text-align: center;
    }
    .Hero__inner .pre-field-tarif {
        margin-bottom: 25px !important;
    }
    .Hero__img {
        width: 100% !important;
        text-align: center !important;
        padding-top: 0 !important;
    }
    .Hero__Section .Hero__desc {
        max-width: 100%;
        padding: 50px 15px 30px 15px;
    }
    .Hero__desc {
        padding: 50px 15px 30px 15px;
    }
    .Hero__desc, .Hero__view {
        width: 100%;
        max-width: 100%;
    }
    .Hero__heroContainer, .Hero__inner.main-wrapper, .Self__desc, .Self__view, .trustpilot_txt.Self__desc {
        padding: 0;
    }
  }
  @media (max-width: 1325px) {
    .Hero__desc {
        padding-left: 0;
    }
  }
  @media (max-width: 1325px) {
    img {
        height: auto;
        max-width: 100%;
    }
  }
  .Hero__Section .Hero__desc {
      padding-left: 0;
      max-width: 636px;
  }
  .headstyle h4:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background: #3367c1;
    left: 0;
    bottom: -5px;
  }
  .headstyle h4:before,.headstyle h4:after{
    background: #E7584F !important;
  }
  .headstyle h4:before {
    position: absolute;
    content: '';
    width: 70%;
    height: 1px;
    background: #3367c1;
    left: 0;
    bottom: 0;
  }
  .headstyle h4 {
    display: inline-block;
    position: relative;
    font-size: 22px;
    font-weight: 700;
    padding-bottom: 9px;
    margin-bottom: 30px;
  }
 .collapse{
  visibility: visible;
 }
 img {
    height: auto;
  }
 .LkButton:hover {
    color:var(--color1);
    background-color: var(--color5);
 }
 .LkButton {
    padding: 16px 20px;
    border: 1px solid var(--color1);
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    color: #fff;
    background: var(--color1);
    cursor: pointer;
    -o-border-radius: 6px;
  }
  .buttons__Home {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-direction: row;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    display: flex;
    align-items: center;

  }

 .Hero__desc {
    width: 90%;
    padding-left: 110px;
    max-width: 590px;
    color: #565656;
  }
  .Hero__img {
    width: 50%;
    text-align: right;
    
    padding-top: 50px;
  }
  .Hero__view {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 43.5%;
    height: 100%;
  }
  .Hero__heroContainer {
    position: relative;
    padding: 100px 80px 45px;
    min-height: 498px;
    background: #fff;
  }
  .Hero__view img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 72%;
    object-position: 72%;
  }
  .Hero__Section {
    margin-top: 0px;
    margin-bottom: 90px;
  }
  .Hero__Section .Hero__inner {
    margin: auto;
  }
  .Hero__Section .Hero__desc {
    padding-left: 0;
    max-width: 636px;
  }
  .Hero__Section .pre-field-tarif {
    padding-top: 75px;
    font-size: 60px;
  }
  .Hero__Section p {
    font-size: 20px;
    line-height: 26px;
  }
  .Hero__Section p.MSG {
    color: #2b2b2b;
  }
  .pre-field-tarif {
    padding-top: 10px;
    font-family: "Zilla Slab", serif;
    font-size: 36px;
    line-height: normal;
    color: #2b2b2b;
  }
  .main-wrapper {
    width: 100%;
    margin: auto;
    padding: 0 15px;
    max-width: 1326px;
    overflow: hidden;
  }
  body {
    position: relative;
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: #2b2b2b;
    background: var(--color2);
  }
  .Navbar.scrolled {
    background-color: #fff !important;
    transition: background-color 0.2s linear;
    box-shadow: 0 2px 5px #e0e0ed;
  }
 /************************************************/
  #app {
    max-width: auto;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
  }

  a,
  .green {
    text-decoration: none;
    color: #000;
    transition: 0.4s;
    padding: 3px;
  }
  .buttonLimouni.demmarer{
    height: 58px;
  }
  .buttonLimouni{
    width: max-content;
    height: 38px;
    padding-left: 7px;
    padding-right: 7px;
  }
  .buttonLimouni:hover{
    background-color: var(--color5);
    border-color: var(--color1);
    color: var(--color1);
  }
  .homeCards{
    text-align: center;
    /* max-width: 325px;
    max-height: 283px; */
  }
  .buttonSouscrire,.buttonDevis{
    font-weight: 700;
  }
  .buttonSouscrire:hover,.buttonSouscrire2:hover{
    background-color: var(--color1);
    color: #fff;
  }
  .buttonDevis:hover{
    background-color: var(--color5);
    color: #fff;
  }
  @media (hover: hover) {
    a:hover {
      color: var(--color-limouni);
    }
  }

  @media (min-width: 1024px) {
    body {
      display: flex;
      place-items: center;
      min-height: 100vh;
      align-items: center;
    }
      /* #app {
        display: grid;
        grid-template-columns: 1fr;
        padding: 0 2rem;
      } */
  }

  body {
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    .navbar-link{
      color: #fff;
    }
  }

 :root {
    --navbar-bg-color: hsl(0, 0%, 15%);
    --navbar-text-color: hsl(0, 0%, 85%);
    --navbar-text-color-focus: white;
    --navbar-bg-contrast: #000;
  }
  * {
    box-sizing: border-box;
  }
  .container {
    max-width: 1280px;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    margin-left: auto;
    margin-right: auto;
  }
  #navbar {
    --navbar-height: 90px;
    height: var(--navbar-height);
    background-color: var(--navbar-bg-color);
    left: 0;
    right: 0;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); */
  }
  .navbar-container {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }
  .navbar-item {
    margin: 0.4em;
    width: 100%;
  }

  .home-link,
  .navbar-link {
    text-decoration: none;
    display: flex;
    font-weight: 400;
    align-items: center;
  }

  .home-link:is(:focus, :hover) {
    color: var(--navbar-text-color-focus);
  }

  .navbar-link {
    justify-content: center;
    width: 100%;
    padding: 0.4em 0.8em;
    border-radius: 5px;
  }
  
  .navbar-link:is(:focus, :hover) {
      color: var(--navbar-text-color-focus);
      background-color: var(--color5);
  }

  .navbar-logo {
    background-color: var(--navbar-text-color-focus);
    border-radius: 50%;
    width: 196px;
    height: 136px;
    margin-right: 0.5em;
  }
  #navbar-toggle {
    cursor: pointer;
    border: none;
    background-color: transparent;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon-bar {
    display: block;
    width: 25px;
    height: 4px;
    margin: 2px;
    background-color: var(--navbar-text-color);
  }
  #navbar-toggle:is(:focus, :hover) .icon-bar {
    background-color: var(--navbar-text-color-focus);
  }
  #navbar-toggle[aria-expanded="true"] .icon-bar:is(:first-child, :last-child) {
    position: absolute;
    margin: 0;
    width: 30px;
  }
  #navbar-toggle[aria-expanded="true"] .icon-bar:first-child {
    transform: rotate(45deg);
  }
  #navbar-toggle[aria-expanded="true"] .icon-bar:nth-child(2) {
    opacity: 0;
  }
  #navbar-toggle[aria-expanded="true"] .icon-bar:last-child {
    transform: rotate(-45deg);
  }
  #navbar-menu {
    position: fixed;
    top: var(--navbar-height);
    bottom: 0;
    opacity: 0;
    visibility: hidden;
    left: 0;
    right: 0;
  }
  #navbar-toggle[aria-expanded="true"] + #navbar-menu {
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 1;
    visibility: visible;
  }
  .navbar-links {
    list-style: none;
    position: absolute;
    background-color: var(--navbar-bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0;
    right: 0;
    margin: 1.4rem;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  #navbar-toggle[aria-expanded="true"] + #navbar-menu .navbar-links {
    padding: 1em;
  }
  @media screen and (min-width: 700px) {
    #navbar-toggle,
    #navbar-toggle[aria-expanded="true"] {
      display: none;
    }

    #navbar-menu,
    #navbar-toggle[aria-expanded="true"] #navbar-menu {
      visibility: visible;
      opacity: 1;
      position: static;
      display: block;
      height: 100%;
    }

    .navbar-links,
    #navbar-toggle[aria-expanded="true"] #navbar-menu .navbar-links {
      margin: 0;
      padding: 0;
      box-shadow: none;
      position: static;
      flex-direction: row;
      width: 100%;
      height: 100%;
    }
    .navbar-link {
      width: max-content !important;
    }
  }
  .btnDeuxClics{
    color:#fff;
  }
  .btnDeuxClics:hover{
    color:var(--color5);
  }
</style>


<script setup>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import { ref } from 'vue';
  const clearLocalStorage = () => {
    localStorage.clear();
    console.log("LocalStorage cleared, starting a new devis.");
  };

  const isNavbarExpanded = ref(false);

  const toggleNavbarVisibility = () => {
    isNavbarExpanded.value = !isNavbarExpanded.value;
    const navbarToggle = document.querySelector("#navbar-toggle");
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded.value.toString());
  };
</script>
