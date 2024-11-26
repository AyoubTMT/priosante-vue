<template>
   <my-header :progress="formStore.currentStep"  :step="'subscription'"/>
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
    import MyHeader from '../components/header.vue';
    import { ref, onMounted } from 'vue'
    const formStore = useFormStore();

    if(formStore.currentStep > 7 ){
        formStore.updateCurrentStep(7) 
    }
  
</script>
 
<style>
</style>