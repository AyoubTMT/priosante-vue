<template>
<header class="container-fluid">
    <div id="header-bar" class="container">
        <div class="row align-items-center">
            <div class="col-5 col-md-2 col-lg-2 col-xl-3 d-flex align-items-center">
                <img src="../assets/icons/back.svg" alt="retour" class="slideback me-2" @click="prevStep">
                <router-link to="/">
                    <div class="d-none d-lg-block"><img src="../assets/images/logoAssur.png"  width="180" height="35" alt="Selfassurance" class="img-fluid"></div>
                    <div class="d-block d-lg-none"><img src="../assets/images/logoAssur.png"  width="120" height="30" alt="Selfassurance" class="img-fluid"></div>
                </router-link>
            </div>
            <div class="col-md-8 col-lg-8 col-xl-6 d-none d-md-block">
                <div class="row justify-content-center mb-0 d-none d-md-block align-items-center">
                    <div class="col-12">
                        <div class="progress Mobile">
                            <div class="progress-bar progressMobile" role="progressbar" :style="{ 'width': formStore.currentStep*100/11 + '%' }" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-7 col-md-2 col-lg-2 col-xl-3 text-end p-0">
                <div class="questionLink d-flex justify-content-end align-items-center text-decoration-none">
                    <div class="assistanteImg online" data-bs-toggle="modal" data-bs-target="#aide">
                        <p class="d-none d-md-none d-lg-none d-xl-block">Besoin d'aide ?</p>
                        <img src="../assets/images/avatar.png" width="40" height="40" alt="image de l'assistante" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-none d-md-block d-lg-block">
            <div class="headerSepar"></div>
        </div>
    </div>
</header>
<div class="modal fade show" id="aide" tabindex="-1" aria-labelledby="aideLabel"  :class="{ show: showModal }" style="display: none;" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-sm" >
        <div class="modal-content" >
            <div class="modal-header border-0 px-4 pb-0" >
                <h5 class="mt-2">Besoin d'aide ?</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center px-4" >
                <img src="../assets/images/assistance.jpg" class="assistanceImg img-fluid">
                <p class="text-center">
                    Vous préférez être accompagné par un conseiller ? Nos conseillers sont disponibles du lundi au vendredi de 9h à 18h et le samedi de 9h à 13h
                </p>
                <div class="divider" ></div>
                <div class="text-center" >
                    <div class="social-buttons">
                        <a href="https://wa.me/33767779822" target="_blank" class="social-button" aria-label="whatsapp">
                            <i class='fa fa-whatsapp' style='font-size:36px;color:green'></i>
                        </a>
                        <a href="tel:0146592228" class="social-button" aria-label="phone">
                            <i class="fa fa-phone" style='font-size:36px'></i>
                        </a>
                        <a href="mailto:contact@assurmabarak.fr" class="social-button" aria-label="envelope">
                            <i class="fa fa-envelope" style='font-size:36px'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
    import 'vue3-toastify/dist/index.css';
    import { useFormStore } from '../stores/useFormStore';
    import { useRouter } from 'vue-router';
    import { ref, onMounted } from 'vue';
    
    const router = useRouter();

    const props = defineProps(["step"])

    const formStore = useFormStore();

    const showModal = ref(false);

    onMounted(() => {
        const modalElement = document.getElementById('aide');
        if (modalElement) {
            new bootstrap.Modal(modalElement);
        }
    });

    function prevStep() { 
        formStore.prevStep(router);
        if(props.step =="tarification"){
            router.push('/devis')
        }
        else if(props.step =="options"){
            router.push('/devis/tarifs')
        }
        else if(props.step =="informations"){
            router.push('/devis/options')
        }
        else if(props.step =="document"){
            router.push('/devis/paiement')
        }
        else if(props.step =="paiement"){
            router.push('/devis/informations')
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
.img-fluid {
    max-width: 100%;
    height: auto;
}
@media (min-width: 960px) {
    .assistanceImg {
        width: 100%;
    }
}
.assistanceImg {
    width: 100%;
    margin-bottom: 20px;
    box-shadow: 0px 9px 50px 0px #0000001f;
}

.social-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 45px;
}

</style>