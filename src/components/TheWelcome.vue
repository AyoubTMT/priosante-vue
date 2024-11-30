<script setup>
import "../assets/tailwind.css"; // Import Tailwind only for this page
const clearLocalStorage = () => {
  localStorage.clear();
  console.log("LocalStorage cleared, starting a new devis.");
};

</script>

<template>
    <div>

        <header className='bg-white'>
            <div className='mx-auto container'>
                <div className='flex flex-row justify-between'>
                    <div className='flex items-center mobile:w-1/2'>
                        <router-link :to="{ name: 'home' }" :class="{ active: isActive('home') }"><img className='' src='../assets/images/logo.png' alt="" /></router-link>
                        
                    </div>
                    <div :class="['flex flex-row items-center topnav', { responsive: isResponsive }]" ref="myTopnav" @click.stop>
                        <router-link :to="{ name: 'lassurance' }" :class="{ active: isActive('lassurance') }">L'assurance</router-link>
                        <router-link :to="{ name: 'vosquestions' }" :class="{ active: isActive('vosquestions') }">Vos questions</router-link>
                        <router-link to="/devis">
                            <button @click="clearLocalStorage" class="py-2 px-3 bg-orange-500 rounded-md rounded-lg rounded-xl border-orange-500 border-2 mobile:text-xs text-xl text-white font-semibold buttonLimouni">
                                Devis en ligne
                            </button>
                        </router-link>
                        <a href="javascript:void(0);" class="icon" @click="toggleNav">
                            <i class="fa fa-bars"></i>
                        </a>
                    </div>

                </div>
            </div>
        </header>
        
        <section className='bg-[#DAF2FF] py-12'>
            <div className='py-6'>
                <h1 className='font-semibold text-4xl mobile:text-xl text-center mobile:leading-10'>Une assurance
                    simple, en <span className='bg-orange-500 py-1 px-3 rounded-xl text-white'>deux clics</span></h1>
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
                    <button class="bg-orange-500 text-white font-semibold text-xl px-6 py-3 rounded-xl buttonLimouni">
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
                    <div class="py-8 px-6 rounded-md bg-[#DAF2FF] homeCards">
                        <div class="flex justify-center">
                        <img src="../assets/images/VectorValid.png" alt="" />
                        </div>
                        <h3 class="font-semibold text-2xl py-3">Efficace</h3>
                        <p class="text-lg">Couvertures efficace & adapté à vos besoins</p>
                    </div>
                    <div class="py-8 px-6 rounded-md bg-[#DAF2FF] homeCards">
                        <div class="flex justify-center">
                        <img src="../assets/images/VectorValid.png" alt="" />
                        </div>
                        <h3 class="font-semibold text-2xl py-3">Meilleurs prix</h3>
                        <p class="text-lg">Assurez votre habitat au meilleur prix</p>
                    </div>
                    <div class="py-8 px-6 rounded-md bg-[#DAF2FF] homeCards">
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
                <div className="grid grid-cols-2 mobile:grid-cols-1 items-center">
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

        <section className='bg-[#DAF2FF]'>
            <div className='py-6 container mx-auto rounded-lg'>
                <div className='grid grid-cols-2 mobile:grid-cols-1 items-center'>
                    <div className='px-4'>
                        <h4 className='font-bold text-orange-500 text-4xl mobile:text-xl py-8 mobile:py-4'>Optez pour une
                            protection sereine</h4>
                        <p className='py-6'>Des tarifs adaptés, des garanties complètes.Protégez votre habitation,
                            bénéficiez des meilleurs tarifs grâce à nos partenaires et souscrivez facilement en ligne </p>
                        <router-link to="/devis">
                            <button class="bg-white rounded-lg text-orange-500 font-semibold text-xl mobile:text-sm py-3 px-8 buttonSouscrire2">
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
                <div className="grid grid-cols-3 mobile:grid-cols-1 mobile:gap-6 my-12">
                    <div className='text-center '>
                        <span
                            className='rounded-full bg-orange-500 text-3xl mobile:text-xl text-white font-bold py-2 px-6'>1</span>
                        <div className='flex items-center justify-center py-12'>
                            <img src='../assets/images/Select-amico 1.png' alt="" />
                        </div>
                        <span className='font-semibold '>Choisissez votre protection</span>
                    </div>
                    <div className='text-center '>
                        <span
                            className='rounded-full bg-orange-500 text-3xl mobile:text-xl text-white font-bold py-3 px-6'>2</span>
                        <div className='flex items-center justify-center py-12'>
                            <img src='../assets/images/wepik-export-20240318120025wEOB-removebg-preview 2.png' alt="" />
                        </div>
                        <span className='font-semibold '>Souscrivez en ligne</span>
                    </div>
                    <div className='text-center '>
                        <span
                            className='rounded-full bg-orange-500 text-3xl mobile:text-xl text-white font-bold py-3 px-6'>3</span>
                        <div className='flex items-center justify-center py-12 mb-6'>
                            <img src='../assets/images/MaisonOK.png' alt="" class="mb-2"/>
                        </div>
                        <span className='font-semibold '>Vous êtes assurés</span>
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
        <section className='bg-[#DAF2FF]'>
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
                        <h4 className='font-semibold py-3 mobile:text-sm'>Mentions légales</h4>
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
        <div className='bg-[#DAF2FF] text-center py-4 font-semibold'>lassurances-habitation.fr - 2024</div>
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

.topnav {
  overflow: hidden;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  color: orange;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
    flex-direction: column;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isResponsive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isResponsive = !this.isResponsive;
    },
    handleClickOutside(event) {
      if (this.$refs.myTopnav && !this.$refs.myTopnav.contains(event.target)) {
        this.isResponsive = false;
      }
    },
    isActive(routeName) {
      return this.$route.name === routeName;
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>
