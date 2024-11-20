<template>
  <header class="container-fluid">
      <div id="header-bar" class="container">
          <div class="row align-items-center">
              <div class="col-5 col-md-2 col-lg-2 col-xl-3 d-flex align-items-center">
                  <img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/back.svg" alt="retour" class="slideback me-2" onclick="goBack()">
                  <div class="d-none d-lg-block"><img src="../assets/images/logoAssur.png" width="169" height="35" alt="Selfassurance" class="img-fluid"></div>
                  <div class="d-block d-lg-none"><img src="../assets/images/logoAssur.png" width="44" height="36" alt="Selfassurance" class="img-fluid"></div>
              </div>
              <div class="col-md-8 col-lg-8 col-xl-6 d-none d-md-block">
                  <div class="row justify-content-center mb-0 d-none d-md-block align-items-center">
                      <div class="col-12">
                          <div class="progress Mobile">
                              <div class="progress-bar progressMobile" role="progressbar" style="width: 12.6%;" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-7 col-md-2 col-lg-2 col-xl-3 text-end p-0">
                  <div class="questionLink d-flex justify-content-end align-items-center text-decoration-none">
                      <!-- <div class="questionTxt">Une question</div> -->
                      <div class="assistanteImg online" data-bs-toggle="modal" data-bs-target="#aide">
                          <p class="d-none d-md-none d-lg-none d-xl-block">Besoin d'aide ?</p>
                          <img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/avatar.png" width="40" height="40" alt="image de l'assistante" class="img-fluid">
                      </div>
                  </div>
              </div>
          </div>
          <div class="row d-none d-md-block d-lg-block">
              <div class="headerSepar"></div>
          </div>
      </div>
  </header>
  <div>
    <Step1 v-if="formStore.currentStep === 1" />
    <Step2 v-if="formStore.currentStep === 2" />
    <Step3 v-if="formStore.currentStep === 3" />
    <button v-if="formStore.currentStep === 3" @click="submitForm">Submit</button>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
  import { useFormStore } from '../stores/useFormStore';
  import Step1 from '../components/Step1.vue';
  import Step2 from '../components/Step2.vue';
  import Step3 from '../components/Step3.vue';

  export default {
    components: { Step1, Step2, Step3 },
    setup() {
      const formStore = useFormStore();

      return {
        formStore,
        submitForm: formStore.submitForm,
      };
    },
  };
</script>
 
<style scoped>
    #header-bar {
        padding: 6px 0;
    }
    @media (min-width: 576px) {
        .container, .container-sm {
            max-width: 540px;
        }
    }
    @media (min-width: 768px) {
        .container, .container-md, .container-sm {
            max-width: 720px;
        }
    }
    @media (min-width: 992px) {
        .container, .container-lg, .container-md, .container-sm {
            max-width: 960px;
        }
    }
    @media (min-width: 1200px) {
        .container, .container-lg, .container-md, .container-sm, .container-xl {
            max-width: 1140px;
        }
    }
    @media (min-width: 1400px) {
        .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
            max-width: 1320px;
        }
    }
    .progress, .progress-stacked {
        --bs-progress-height: 1rem;
        --bs-progress-font-size: 0.75rem;
        --bs-progress-bg: var(--bs-secondary-bg);
        --bs-progress-border-radius: var(--bs-border-radius);
        --bs-progress-box-shadow: var(--bs-box-shadow-inset);
        --bs-progress-bar-color: #fff;
        --bs-progress-bar-bg: #0d6efd;
        --bs-progress-bar-transition: width 0.6s ease;
        display: flex;
        height: var(--bs-progress-height);
        overflow: hidden;
        font-size: var(--bs-progress-font-size);
        background-color: var(--bs-progress-bg);
        border-radius: var(--bs-progress-border-radius);
    }
    .progress {
        background-color: #e0e0e0;
    }
    .progressMobile, .progress {
        height: 4px !important;
    }
    .progress-bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        color: var(--bs-progress-bar-color);
        text-align: center;
        white-space: nowrap;
        background-color: var(--bs-progress-bar-bg);
        transition: var(--bs-progress-bar-transition);
    }
    .progressMobile {
        border-radius: 50px;
        background: var(--color-limouni) !important;
    }
    .progressMobile, .progress {
        height: 4px !important;
    }
    .questionLink {
        color: var(--color4);
    }
    .assistanteImg {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .assistanteImg p {
        margin: 0;
        margin-right: 2px;
    }
    .assistanteImg img {
        width: 40px;
        margin-top: 3px;
    }
    .img-fluid {
        max-width: 100%;
        height: auto;
    }
    img, svg {
        vertical-align: middle;
    }
    .assistanteImg:after {
        content: "";
        width: 14px;
        height: 14px;
        background: var(--green1);
        display: inline-block;
        border-radius: 100%;
        border: 2px solid #fff;
        position: relative;
        top: 14px;
        right: 10px;
    }
    @media (min-width: 768px) {
        .d-md-block {
            display: block !important;
        }
    }
    @media (min-width: 992px) {
        .d-lg-block {
            display: block !important;
        }
    }
    .headerSepar {
        height: 1px;
        background-color: #e9e9e9;
        width: 100%;
        margin-top: 13px !important;
    }
</style>