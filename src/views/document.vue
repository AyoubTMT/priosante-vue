<template>
       <my-header :progress="formStore.currentStep" :step="'document'"/>

    
    <form id="formulaire" class="p-0" @submit.prevent="saveAgain" method="POST">
        <div class="container">
            <div class="d-flex justify-content-end my-2">
                <button type="button" class="btn d-flex justify-center align-items-center" style="justify-content: center !important;" v-if="loadingSouscrire">
                  <vue-spinner size="30" color="white" />
                </button>
                <button type="submit" class="btn" v-else>
                  <i class="animation"></i>SOUSCRIRE<i class="animation"></i>
                </button>
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
import { VPdfViewer } from "@vue-pdf-viewer/viewer";
import { useFormStore } from '@/stores/useFormStore';
import { ref, onMounted } from 'vue';
import MyHeader from '../components/header.vue';

import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();

const formStore = useFormStore();
const pdfFileSource = ref('');
const loadingSouscrire = ref(false);
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
  const response = await sendPostRequest(import.meta.env.VITE_BASE_URL+'/api/send-email', data);
  if (response && response.status === 200) {
    loadingSouscrire.value=true;
    router.push('/devis/merci');
  }
  
};

// Sauvegarde des données de devis
const saveDevis = async () => {
    loadingSouscrire.value = true;
    formStore.updateStepData('flagType', 'LIEN');
    const dataSave = formStore.getDataForSave;
    console.log('Saving devis data:', dataSave);
    await axios.post(import.meta.env.VITE_BASE_URL+'/api/save', dataSave)
        .then(async response => {
            if (response.status === 200) {
              formStore.updateStepData('devisCompletAvecLien', response.data.response);
              formStore.updateStepData('lienSignature', response.data.response.signature);
              await sendLienSignature();
            }
        }).catch(({response}) => {
            toast.error('une erreur est survenue merci de réessayer plus tard');
            console.log(response);
        }).finally(() => {
          loadingSouscrire.value =false;
        });


    
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