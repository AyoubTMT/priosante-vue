<template>
  <div>
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
              <router-link to="/devis" class="navbar-link">
                <button @click="clearLocalStorage" class="bg-orange-500 buttonLimouni text-white font-semibold rounded-md rounded-lg rounded-xl">
                    Devis en ligne
                </button>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <section className='bg-[#b0e2fd] py-12'>
      <div className='py-6'>
        <h1 className='font-semibold text-4xl mobile:text-xl text-center mobile:leading-10'>Une assurance
          simple, en <span className='bg-orange-500 py-1 px-3 rounded-xl text-white'>
            <router-link :to="{ name: 'devis' }" class="btnDeuxClics">deux clics</router-link></span>
        </h1>
      </div>
      <div className='flex justify-center'>
        <img src='../assets/images/Frame.png' alt="" />
      </div>
      <div className='py-8 text-center'>
        <p className='text-2xl mobile:text-sm'>Des formules adaptés à votre budget, bénéficiez des meilleurs
          tarifs<br><br> pour votre assurance habitation.</p>
      </div>
      <div className='flex justify-center py-8'>
        <router-link to="/devis">
          <button class="bg-orange-500 text-white font-semibold text-xl px-6 py-3 rounded-xl buttonLimouni demmarer">
            Démarrer
          </button>
        </router-link>
      </div>
    </section>

    <section className='bg-white'>
      <div className='container mx-auto py-12'>
        <h2 className='font-semibold text-3xl mobile:text-xl mobile:leading-10 text-center py-12'><span
            className='underline decoration-orange-500 decoration-8 mobile:decoration-4 underline-offset-8'>Une
            protection </span>complète pour tous les budgets</h2>
        <div class="grid grid-cols-1 gap-3 py-12 sm:grid-cols-3 sm:gap-28">
          <div class="py-8 px-6 rounded-md bg-[#b0e2fd] homeCards">
            <div class="flex justify-center">
              <img src="../assets/images/VectorValid.png" alt="" />
            </div>
            <h3 class="font-semibold text-2xl py-3">Efficace</h3>
            <p class="text-lg">Couvertures efficace & adapté à vos besoins</p>
          </div>
          <div class="py-8 px-6 rounded-md bg-[#b0e2fd] homeCards">
            <div class="flex justify-center">
              <img src="../assets/images/VectorValid.png" alt="" />
            </div>
            <h3 class="font-semibold text-2xl py-3">Meilleurs prix</h3>
            <p class="text-lg">Assurez votre habitat au meilleur prix</p>
          </div>
          <div class="py-8 px-6 rounded-md bg-[#b0e2fd] homeCards">
            <div class="flex justify-center">
              <img src="../assets/images/VectorValid.png" alt="" />
            </div>
            <h3 class="font-semibold text-2xl py-3">Rapide</h3>
            <p class="text-lg">Traitement rapide de vos sinistres</p>
          </div>
        </div>
      </div>
    </section>

    <section className='bg-white'>
      <div className='container mx-auto py-12'>
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
          <div>
            <img src='../assets/images/ImageAssu.png' alt="" />
          </div>
          <div className="px-4">
            <h3 className='font-semibold text-3xl mobile:text-xl py-6'>Choisir son assurance habitation</h3>
            <p className='py-6'>
              Votre maison est bien plus qu'un simple bâtiment. C'est votre refuge, l'endroit où vous créez
              des souvenirs précieux avec vos proches. C'est pourquoi il est essentiel de protéger votre
              espace de vie contre les imprévus qui pourraient survenir, qu'il s'agisse de dommages causés par
              des incendies, des inondations, des cambriolages ou d'autres événements indésirables.
            </p>
            <router-link to="/devis">
              <button class="border-orange-500 border-2 rounded-lg text-orange-500 py-3 px-8 buttonSouscrire">
                Souscrire en ligne
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section className='bg-[#b0e2fd]'>
      <div className='py-6 container mx-auto rounded-lg'>
        <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
          <div className='px-4'>
            <h4 className='font-bold text-orange-500 text-4xl mobile:text-xl py-8 mobile:py-4'>Optez pour une
              protection sereine</h4>
            <p className='py-6'>Des tarifs adaptés, des garanties complètes.Protégez votre habitation,
              bénéficiez des meilleurs tarifs grâce à nos partenaires et souscrivez facilement en ligne </p>
            <router-link to="/devis">
              <button
                class="bg-white rounded-lg text-orange-500 font-semibold text-xl mobile:text-sm py-3 px-8 buttonSouscrire2">
                Souscrire en ligne
              </button>
            </router-link>
          </div>
          <div className='flex items-center justify-center'>
            <img src='../assets/images/HouseValid.png' alt="" />
          </div>
        </div>
      </div>
    </section>

    <section className='bg-white'>
      <div className='container mx-auto py-12'>
        <h5 className='font-semibold text-3xl mobile:text-xl py-6 text-center'>Comment souscrire en 3 étapes ?</h5>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 my-12">
          <div className='text-center '>
            <span className='rounded-full bg-orange-500 text-3xl mobile:text-xl text-white font-bold py-2 px-6'>1</span>
            <div className='flex items-center justify-center py-12'>
              <img src='../assets/images/Select-amico 1.png' alt="" />
            </div>
            <span className='font-semibold'>Choisissez votre protection</span>
          </div>
          <div className='text-center '>
            <span className='rounded-full bg-orange-500 text-3xl mobile:text-xl text-white font-bold py-3 px-6'>2</span>
            <div className='flex items-center justify-center py-12'>
              <img src='../assets/images/wepik-export-20240318120025wEOB-removebg-preview 2.png' alt="" />
            </div>
            <span className='font-semibold'>Souscrivez en ligne</span>
          </div>
          <div className='text-center '>
            <span className='rounded-full bg-orange-500 text-3xl mobile:text-xl text-white font-bold py-3 px-6'>3</span>
            <div className='flex items-center justify-center py-12'>
              <img src='../assets/images/MaisonOK.png' alt="" />
            </div>
            <span className='font-semibold'>Vous êtes assurés</span>
          </div>
        </div>
      </div>
    </section>
    <section className='bg-[#F9FAFB] py-24'>
      <div className="container mx-auto">
        <h5 className='text-center text-3xl mobile:text-xl font-semibold'>Nous sommes là pour répondre à vos
          questions</h5>
        <p className='text-lg text-center py-6'>Si vous souhaitez obtenir plus d’informations, vous pouvez nous
          contacter.</p>
        <div className='text-center'>
          <a className='text-4xl mobile:text-xl font-bold text-center' href="tel:0146592228">01 46 59 22
            28</a>
        </div>
        <div className="grid grid-cols-3 py-6 items-center">
          <div className="h-0.5 w-full bg-black"></div>
          <div className='text-center'>Ou via notre adresse E-mail</div>
          <div className="h-0.5 w-full bg-black"></div>
        </div>
      </div>
      <div className='text-center'>
        <a className='text-3xl sm:text-xl font-bold text-center'
          href="mailto:contact@assurmabarak.fr">contact@assurmabarak.fr</a>
      </div>
    </section>
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
  </div>
</template>

<style scoped>
 @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
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
    background-color: var(--navbar-bg-contrast);
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
  import { ref } from 'vue';
  import "../assets/tailwind.css"; // Import Tailwind only for this page
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
