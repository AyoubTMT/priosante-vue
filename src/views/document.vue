<template>
    <header class="container-fluid">
        <div id="header-bar" class="container">
            <div class="row align-items-center">
                <div class="col-5 col-md-2 col-lg-2 col-xl-3 d-flex align-items-center">
                    <img src="../assets/icons/back.svg" alt="retour" class="slideback me-2" @click="prevStep">
                    <div class="d-none d-lg-block"><img src="../assets/images/logoAssur.png" width="169" height="35"
                            alt="Assurmabarak" class="img-fluid"></div>
                    <div class="d-block d-lg-none"><img src="../assets/images/logoAssur.png" width="44" height="36"
                            alt="Assurmabarak" class="img-fluid"></div>
                </div>
                <div class="col-md-8 col-lg-8 col-xl-6 d-none d-md-block">
                    <div class="row justify-content-center mb-0 d-none d-md-block align-items-center">
                        <div class="col-12">
                            <div class="progress Mobile">
                                <div class="progress-bar progressMobile" role="progressbar" style="width: 12.6%;"
                                    aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-7 col-md-2 col-lg-2 col-xl-3 text-end p-0">
                    <div class="questionLink d-flex justify-content-end align-items-center text-decoration-none">
                        <!-- <div class="questionTxt">Une question</div> -->
                        <div class="assistanteImg online" data-bs-toggle="modal" data-bs-target="#aide">
                            <p class="d-none d-md-none d-lg-none d-xl-block">Besoin d'aide ?</p>
                            <img src="../assets/icons/avatar.png" width="40" height="40" alt="image de l'assistante"
                                class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-none d-md-block d-lg-block">
                <div class="headerSepar"></div>
            </div>
        </div>
    </header>
    
    <div class="container">
        <div class="row justify-content-center">
            <div>
                <iframe :src="pdfFileSource" width="100%" height="700px"></iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { VPdfViewer } from "@vue-pdf-viewer/viewer";
import { useFormStore } from '@/stores/useFormStore';
import { ref, onMounted } from 'vue';
// import { useRouter } from 'vue-router';

// const router = useRouter();
const formStore = useFormStore();
const pdfFileSource = ref('');
console.log(formStore.formData.devisComplet);
const base64PDF = formStore.formData.devisComplet.document;

onMounted(() => {
  const pdfDataUrl = `data:application/pdf;base64,${base64PDF}`;
  pdfFileSource.value = pdfDataUrl;
});
</script>

<style scoped>
:deep(.vpv-variables) {
  --vpv-container-border-color: var(--color5);
  --vpv-toolbar-background-color: var(--color3);
  --vpv-toolbar-color: black;
  --vpv-toolbar-border-color: var(--color5);
  --vpv-icon-active-background: grey;
  --vpv-sidebar-content-background-color: var(--color3);
  --vpv-sidebar-content_thumbnail-page-number-font-size: 10px;
  --vpv-sidebar-content_thumbnail-focused-border-color: darkslategrey;
  --vpv-pages-container-background: var(--color3);
}

/* To override variables in dark mode */
:deep(.vpv-variables.vpv-variables__dark) {
  --vpv-container-border-color: var(--color3);
  --vpv-toolbar-background-color: var(--color4);
  --vpv-toolbar-color: white;
  --vpv-toolbar-border-color: var(--color3);
  --vpv-icon-active-background: grey;
  --vpv-sidebar-content-background-color: var(--color4);
  --vpv-sidebar-content_thumbnail-focused-border-color: white;
  --vpv-pages-container-background: var(--color4);
}
:deep(.vpv-variables) {
    --vpv-container-width-sm: 600px;
}
</style>