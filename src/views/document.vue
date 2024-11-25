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
    
    <form id="formulaire" class="p-0" @submit.prevent="saveAgain" method="POST">
        <div class="container">
            <div class="d-flex justify-content-end my-2">
                <button type="submit" class="btn"><i class="animation"></i>SOUSCRIRE<i class="animation"></i></button>
            </div>
            <div class="row justify-content-center">
                <div>
                    <iframe :src="pdfFileSource" width="100%" height="700px"></iframe>
                </div>
            </div>
        </div>
    </form>
</template>
<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { VPdfViewer } from "@vue-pdf-viewer/viewer";
import { useFormStore } from '@/stores/useFormStore';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const formStore = useFormStore();
const pdfFileSource = ref('');
const { devisComplet, devisCompletAvecLien, step7, informations, lienSignature } = formStore.formData;
const base64PDF = devisComplet?.document;

// Génération de l'URL PDF
onMounted(() => {
  if (base64PDF) {
    pdfFileSource.value = `data:application/pdf;base64,${base64PDF}`;
  }
});

const sendPostRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    if (response.status === 200) {
      console.log('Success:', response);
    }
    return response;
  } catch (error) {
    if (error.response) {
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      console.error('No response:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
};

// Envoi du lien de signature
const sendLienSignature = async () => {
  const data = {
    name: `${step7.nom} ${step7.prenom}`,
    telephone: informations.tel,
    email: step7.email,
    lien: devisCompletAvecLien.signature,
    reference: devisComplet.reference,
  };
  console.log('Sending signature data:', data);
  await sendPostRequest('https://php.assurmabarak.com/api/send-email', data);
};

// Sauvegarde des données de devis
const saveDevis = async () => {
    formStore.updateStepData('flagType', 'LIEN');
    const dataSave = formStore.getDataForSave;
    console.log('Saving devis data:', dataSave);
    const response = await sendPostRequest('https://php.assurmabarak.com/api/save', dataSave);
    formStore.updateStepData('devisCompletAvecLien', response.data.response);
    formStore.updateStepData('lienSignature', response.data.response.signature);

    if (response && response.status === 200) {
        await sendLienSignature();
    }
};

const saveAgain = async () => {
  try {
    await saveDevis();
  } catch (error) {
    console.error('Error during saveAgain:', error);
  }
};
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

.btn {
  outline: 0;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color1);
  min-width: 200px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
  box-sizing: border-box;
  padding: 16px 20px;
  color: #fff;
 font-weight: 400;
 font-size: 17px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;
}

.btn:hover {
  opacity: .95;
}

.btn .animation {
  border-radius: 100%;
  animation: ripple 0.6s linear infinite;
}

@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1);
  }

  100% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1), 0 0 0 80px rgba(255, 255, 255, 0);
  }
}
</style>