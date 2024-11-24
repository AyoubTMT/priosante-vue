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
                            <div class="progress-bar progressMobile" role="progressbar" :style="{ 'width': formStore.currentStep*100/13 + '%' }" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
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
</template>
<script setup>
    import { useFormStore } from '../stores/useFormStore';
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const props = defineProps(["step"])

    const formStore = useFormStore();

    

    function prevStep() { 
        formStore.prevStep(router);
        if(props.step =="tarification"){
            router.push('/devis')
        }
        else if(props.step =="options"){
            router.push('/devis/tarification')
        }
        else if(props.step =="informations"){
            router.push('/devis/options')
        }
    }
</script>
<style>
.slideback{
    padding: 12px;
    border-radius: 50%;
}
.slideback:hover{
    background: var(--color5) ;
    cursor: pointer;
}
</style>