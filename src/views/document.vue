<template>
       <my-header :progress="formStore.currentStep" :step="'document'"/>

    
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
import MyHeader from '../components/header.vue';

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