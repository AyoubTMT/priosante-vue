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
            <!-- <button v-if="formStore.currentStep === 7" @click="submitForm">Submit</button> -->
        </div>
    </section>
</template>

<script setup>
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
    import { useRouter } from 'vue-router';
    const formStore = useFormStore();
    const router = useRouter();
    function prevStep() { 
        formStore.prevStep(router);
    }
</script>
 
<style>
</style>