<template>
    <header class="container-fluid">
        <div id="header-bar" class="container">
            <div class="row align-items-center">
                <div class="col-5 col-md-2 col-lg-2 col-xl-3 d-flex align-items-center">
                    <img src="../assets/icons/back.svg" alt="retour" class="slideback me-2" @click="prevStep">
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
                            <img src="../assets/icons/avatar.png" width="40" height="40" alt="image de l'assistante" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-none d-md-block d-lg-block">
                <div class="headerSepar"></div>
            </div>
        </div>
    </header>
    <section id="formulaire">
        <div class="container">
            <div class="row justify-content-center mb-0 mb-lg-4 d-block d-md-none">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
                    <div class="progress Mobile">
                        <div class="progress-bar progressMobile" role="progressbar" style="width: 16%;" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
                    <div class="container-fluid p-0">
                        <Step1 v-if="formStore.currentStep === 1" />
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
                    <div class="container-fluid p-0">
                        <Step2 v-if="formStore.currentStep === 2" />
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
                    <div class="container-fluid p-0">
                        <Step3 v-if="formStore.currentStep === 3" />
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
                    <div class="container-fluid p-0">
                        <Step4 v-if="formStore.currentStep === 4" />
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
                    <div class="container-fluid p-0">
                        <Step5 v-if="formStore.currentStep === 5" />
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
                    <div class="container-fluid p-0">
                        <Step6 v-if="formStore.currentStep === 6" />
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
                    <div class="container-fluid p-0">
                        <Step7 v-if="formStore.currentStep === 7" />
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
                    <div class="container-fluid p-0">
                        <Step8 v-if="formStore.currentStep === 8" />
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
                    <div class="container-fluid p-0">
                        <Step9 v-if="formStore.currentStep === 9" />
                    </div>
                </div>
            </div>
            <button v-if="formStore.currentStep === 9" @click="submitForm">Submit</button>
        </div>
    </section>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    /**************** a voir apres ********************/
    // import 'https://code.jquery.com/jquery-3.6.3.min.js';
    // import * as customFunctions from '../custom-js/functions.js';
    // import * as customJS from '../custom-js/custom.js';
    /***********************************************/
    import { useFormStore } from '../stores/useFormStore';
    import Step1 from '../components/Step1.vue';
    import Step2 from '../components/Step2.vue';
    import Step3 from '../components/Step3.vue';
    import Step4 from '../components/Step4.vue';
    import Step5 from '../components/Step5.vue';
    import Step6 from '../components/Step6.vue';
    import Step7 from '../components/Step7.vue';
    import Step8 from '../components/Step8.vue';
    import Step9 from '../components/Step9.vue';
    import { useRouter } from 'vue-router';

    export default {
        components: { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9  },
        mounted() { 
            /**************** a voir apres ********************/
            // customFunctions;
            // customJS;
            /***********************************************/
        },
        setup() {
            const formStore = useFormStore();
            const router = useRouter();

            return {
                formStore,
                router,
                submitForm: formStore.submitForm,
            };
        },
        methods: { 
            prevStep() { 
                this.formStore.prevStep(this.router);
            }
        }
    };
</script>
 
<style>
.inputError {
    border: 1px solid var(--color6) !important;
    background-color: rgba(244, 98, 127, 0.1);
}
.nextBtn {
    width: 100%;
    background-color: var(--color1);
    color: #fff;
    height: 60px;
    border-radius: 9px;
    border: 0;
    font-size: 21px;
}
    .assurmabarak {
        margin: 15px 0;
        text-align: justify;
    }
    .bonasavoir p, .assurmabarak p {
        color: #6b6b6b;
        font-size: 12px;
    }
    .bonasavoir {
        display: flex;
        align-items: center;
        margin: 15px 0;
    }
    .bonasavoir img {
        min-width: 37px;
    }
    .bonasavoir h6 {
        font-size: 12px;
        font-weight: bold;
        color: #000;
    }
    .separateur {
        height: 1px;
        background-color: var(--color3);
        width: 96%;
        margin: auto;
    }
    .firstBtn:hover{
        color: var(--color1);
    }
    .firstBtn {
        width: 100%;
        background-color: var(--color3);
        color: #000;
        height: 60px;
        border-radius: 9px;
        border: 0;
        font-size: 21px;
        font-weight: 700;
    }
    .errorMsg, .raceErrorMsg {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: var(--color6);
        margin-top: 9px;
    }
    .formLabel {
        margin: 0 0 0px 0;
    }
    .formLabel {
        font-weight: bold;
        font-size: 16px;
    }
    .btnImg {
        height: 47px;
        margin-top: -17px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .btnImg {
        height: 47px;
        margin-top: -17px;
    }
    .btn-check:checked + label .checkedLabel {
        opacity: 1 !important;
        transition: 0.5s;
    }
    #formulaire .btn-check:checked + .btn, #formulaire .btn.active {
        background-color: var(--color5) !important;
        border-color: var(--color1) !important;
        color: #3e3e3e;
    }
    #formulaire .iconLabel {
        background-color: #fff;
        border: 1px solid #d9d9d9;
        color: #000;
        width: 100%;
    }
    #formulaire input, #formulaire select {
        border-radius: 5px;
        padding: 13px 20px;
    }
    .formIconContainer {
        width: 100%;
    }
    .stepDescription {
        font-size: 16px;
        margin: 0;
    }
    .stepTitle {
        font-weight: bold;
        font-size: 21px;
    }
    #formulaire {
        padding: 40px 0;
    }
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