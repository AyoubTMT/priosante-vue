<template>
  <header id="navbar">
    <nav class="navbar-container container">
      <a href="/" class="home-link">
        <div class="navbar-logo">
          <router-link :to="{ name: 'home' }"><img className='' src='../assets/images/logo.png'
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
  <div class="container my-5">

    <div class="Hero__Section">
      <div class="Hero__inner main-wrapper d-flex justify-content-between flex-col flex-md-row">
        <div class="Hero__desc">
          <h1 class="pre-field-tarif font-weight-bold pb-3">Obligation du locataire : assurance habitation</h1>
          <p class="text-muted">Vérifié le 29 septembre 2022 - Direction de l'information légale et administrative (Premier ministre)</p>
          <div class="buttons__Home pt-4">
              <router-link to="/devis" class="LkButton" @click="clearLocalStorage">
                Obtenir mon tarif
              </router-link>
          </div>
        </div>
        <div class="Hero__img"><img src="../assets/images/produitAssurance.png" height="449" width="640"
            alt="Une assurance animaux en ligne et pas cher"></div>
      </div>
    </div>

    <main class="text-justify">
        <p class="fs-5">
            Le locataire d'un logement vide ou meublé avec un bail d'habitation (y compris un bail mobilité) doit prendre une assurance habitation. 
            L'assurance doit au minimum couvrir les risques incendie, dégât des eaux, explosion. 
            Si le locataire n'assure pas le logement, le propriétaire peut choisir de résilier le bail ou de prendre une assurance pour le compte du locataire (et se faire rembourser). 
            Nous vous présentons les informations à retenir si vous êtes locataire ou propriétaire du logement loué.
        </p>
        <div class="alert alert-warning" role="alert">
            <strong>Attention :</strong> les règles sont différentes pour un meublé de tourisme ou un logement de fonction.
        </div>

        <section class="mb-4">
            <h2 class="h2 text-secondary">Locataire</h2>
            <article>
                <h3 class="h3 mt-3 fw-bold">Êtes-vous obligé de prendre une assurance habitation ?</h3>
                <p>Si vous êtes locataire d'un logement loué avec un bail d'habitation (y compris un bail mobilité), vous devez prendre une assurance habitation. Cette obligation s'applique, quelle que soit votre nationalité et quelle que soit la durée de votre séjour en France.</p>
            </article>

            <article>
                <h3 class="h3 mt-3 fw-bold">Quelle est l'assurance à prendre ?</h3>
                <p>L'assurance doit couvrir au minimum les risques locatifs.</p>
                <p>L'assurance "risques locatifs" couvre les dommages causés au logement par un incendie, une explosion ou un dégât des eaux.</p>
                <p>Mais la couverture de cette assurance concerne uniquement le logement loué lui-même. Les dommages qui seraient causés aux voisins ne sont pas couverts par cette assurance. Ils doivent faire l'objet d'une autre garantie, appelée recours des voisins et des tiers, qui est facultative.</p>
                <p>L'assurance des risques locatifs ne couvre pas non plus vos biens personnels, qui pourraient être endommagés lors d'un sinistre. L'assurance ne vous les remboursera donc pas. Pour garantir vos biens, vous devez souscrire une assurance complémentaire, couramment nommée multirisques habitation.</p>
            </article>

            <article>
                <h3 class="h3 mt-3 fw-bold">Comment en apporter la preuve au propriétaire du logement ?</h3>
                <p>Vous devez prouver au propriétaire du logement que vous avez pris une assurance pour les risques locatifs.</p>
                <ul>
                    <li>Lorsque le propriétaire vous remet les clefs du logement</li>
                    <li>Une fois par an, à sa demande</li>
                </ul>
            </article>
            
            <article>
              <h3 class="h3 mt-3 fw-bold">Quelles conséquences si vous n'avez pas d'assurance habitation ?</h3>
              <p>Si vous ne fournissez pas au propriétaire une attestation d'assurance "risques locatifs", alors il peut choisir soit de résilier le bail, soit de prendre une assurance "risques locatifs" pour votre compte.</p>
            </article>
            <article>
              <h3 class="h3 mt-3 fw-bold">Résiliation du bail</h3>
              <p>Votre bail peut ou non contenir une clause résolutoire prévoyant la résiliation du bail en cas de manquement du locataire à ses obligations (loyer ou charges impayés, dépôt de garantie non versé, absence d'assurance des risques locatifs, troubles de voisinage constatés par un juge). Le juge prononce la résiliation du bail après constat de la faute du locataire, sans pouvoir apprécier l'importance de cette faute. pour absence d'assurance couvrant les risques locatifs (dommages causés au logement par un incendie, une explosion ou un dégât des eaux).</p>
            </article>
            <article>
              <h3 class="h3 mt-3 fw-bold">Souscription d'une assurance "risques locatifs" pour votre compte</h3>
                <p>Le propriétaire doit vous envoyer un courrier recommandé avec avis de réception vous indiquant son intention de prendre une assurance "risques locatifs", pour votre compte.</p>
            </article>
            <article>
              <h3 class="h3 mt-3 fw-bold">À savoir</h3>
                <p>Lorsque le propriétaire envoie ce courrier, il ne peut plus demander la résipation du bail pour absence d'assurance, même si votre bail contient une clause résolutoire dans un bail commercial, acte par lequel le bailleur fait connaître au locataire les infractions reprochées et l'informe de sa volonté d'utipser la clause résolutoire si le locataire n'exécute pas ses obpgations.</p>
                <p>Après avoir reçu ce courrier, vous avez 1 mois pour prendre une assurance "risques locatifs".</p>
                <p>Après ce délai d'un mois, si vous n'avez pris d'assurance, le propriétaire peut en prendre une pour votre compte.</p>
                <p>Le propriétaire doit alors vous remettre une copie du contrat d'assurance lors de sa souscription et à chaque renouvellement.</p>
                <p>Le propriétaire paie la prime d'assurance annuelle facturée par l'assureur. Mais vous devez le rembourser de cette somme, que le propriétaire peut augmenter d'au maximum 10 %. Vous devez lui rembourser le total par 1/12e à chaque paiement du loyer mensuel.</p>
                <h5><u>Exemple :</u></h5>
                <ul>
                    <li>Le propriétaire a payé une prime d'assurance annuelle de 200 €</li>
                    <li>Le propriétaire majore cette somme de 10 %</li>
                    <li>Vous lui devez au total : 200 € x 1,10 = 220 €</li>
                    <li>Chaque mois, vous devez lui rembourser : <span class="text-nowrap">220 €/12 = 18,33 €</span></li>
                    <li>Le montant total à rembourser doit être inscrit sur l'avis d'échéance et sur la quittance de loyer, document qui atteste du paiement intégral du loyer et des charges par le locataire. Le locataire doit en faire la demande au propriétaire. Le propriétaire doit alors lui remettre gratuitement.</li>
                </ul>
                <p>Vous pouvez mettre fin à l'assurance prise par le propriétaire pour votre compte. Pour cela, vous devez prendre une assurance "risques locatifs" et lui remettre l'attestation d'assurance. Le propriétaire doit résilier son assurance le plus rapidement possible. Vous devez lui rembourser la fraction de la prime exigée par l'assureur jusqu'à la résiliation.</p>
                <p>Lorsque vous quittez définitivement le logement avant la fin du contrat d'assurance, le propriétaire doit le résilier le plus rapidement possible. Vous devez lui rembourser la fraction de la prime exigée par l'assureur jusqu'à la résiliation du contrat.</p>
            </article>
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
    <div className='bg-[#b0e2fd] text-center py-4 font-semibold'>lassurances-habitation.fr - 2024</div>
</template>
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
