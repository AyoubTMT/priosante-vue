<template>
  <form @submit.prevent="submitStep">
    <div class="row g-3 g-md-4">
      <div class="col-12 mt-0 mb-3">
        <h2 class="stepTitle mb-3">Parfait !</h2>
        <p class="stepDescription mb-3 mb-md-0">
          Pouvez-vous m’en dire un peu plus sur votre logement ?
        </p>
      </div>
      <label for="principale" class="formLabel mb-3">Usage du logement</label>
      <div class="col-6 mt-0">
        <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="type_residence" id="principale" value="RESIDENCE_PRINCIPALE"
            v-model="formData.type_residence" autocomplete="off">
          <label class="btn btn-outline-primary iconLabel" for="principale">
            <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15" height="15"
                alt="checked"></div>
            <div class="btnImg"><img src="../assets/icons/principale.svg" alt="principale"></div>
            <div>Résidence<br>principale</div>
          </label>
        </div>
      </div>
      <div class="col-6 mt-0">
        <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="type_residence" id="secondaire" value="RESIDENCE_SECONDAIRE"
            v-model="formData.type_residence" autocomplete="off">
          <label class="btn btn-outline-primary iconLabel" for="secondaire">
            <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15" height="15"
                alt="checked"></div>
            <div class="btnImg"><img src="../assets/icons/secondaire.svg" alt="secondaire"></div>
            <div>Résidence<br>secondaire</div>
          </label>
        </div>
      </div>
      <div class="col-12">
        <label for="nbpiece" class="formLabel mb-3">Nombre de pièces principales</label>
        <div class="sufpiece">
          <input type="number" class="form-control" placeholder="Ex : 2" id="nbpiece"
            v-model.number="formData.nbr_pieces_principales" @input="validateNbrPieces" :class="{ 'inputError': showErrorMsg }">
        </div>
        <div v-if="showErrorMsg"  class="errorMsg">
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008" viewBox="0 0 10.497 10.008">
              <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                <g id="Page-1" transform="translate(30 591)">
                  <g id="Alert" transform="translate(5 5)">
                    <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)" fill="none"></rect>
                    <path id="Path"
                      d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                      transform="translate(6.766 5.194)" fill="#f4627f"></path>
                    <path id="Path-2" data-name="Path"
                      d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                      transform="translate(6.766 9.125)" fill="#f4627f"></path>
                    <path id="Path-3" data-name="Path"
                      d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                      transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                  </g>
                </g>
              </g>
            </svg>
            <p class="m-0 ms-2">{{errors.nbr_pieces_principales}}</p>
          </div>
        </div>
      </div>
      <div class="col-12 mt-3 mb-0">
        <label for="surfacem2" class="formLabel mb-3">Surface habitable en m²</label>
        <div class="sufm2">
          <input type="number" id="surfacem2" v-model.number="formData.surface_habitable" class="form-control"
            placeholder="ex : 49m²" :class="{ 'inputError': showErrorMsg }">
        </div>
        <div v-if="showErrorMsg" class="errorMsg">
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008" viewBox="0 0 10.497 10.008">
              <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                <g id="Page-1" transform="translate(30 591)">
                  <g id="Alert" transform="translate(5 5)">
                    <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)" fill="none"></rect>
                    <path id="Path"
                      d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                      transform="translate(6.766 5.194)" fill="#f4627f"></path>
                    <path id="Path-2" data-name="Path"
                      d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                      transform="translate(6.766 9.125)" fill="#f4627f"></path>
                    <path id="Path-3" data-name="Path"
                      d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                      transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                  </g>
                </g>
              </g>
            </svg>
            <p class="m-0 ms-2">Ce champ est requis</p>
          </div>
        </div>
      </div>
      <div class="col-12 mt-0">
        <div class="container-fluid p-0">
          <div class="row align-items-center">
            <div class="col-12">
              <button type="submit" class="navBtn nextBtn mt-4 flex justify-center align-items-center">Étape suivante
                <img src="../assets/icons/arrow-next.svg" alt="suivant" class="ms-3 img-fluid"></button>
            </div>
          </div>
        </div>
      </div>
      <BonASavoir
        remarque="Vous ne pouvez assurer qu'une seule résidence principale à la fois. Vos éventuels autres logements sont donc considérés comme des résidences secondaires." />
    </div>
  </form>
</template>

<script setup>
import BonASavoir from '../components/BonASavoir.vue';
import { useFormStore } from '@/stores/useFormStore';
import { ref, reactive, computed } from 'vue'
const formStore = useFormStore();

const formData = reactive({
  type_residence: 'RESIDENCE_PRINCIPALE',
  nbr_pieces_principales: '',
  surface_habitable: '',
})
const errors = reactive({ nbr_pieces_principales: '' });
const validateNbrPieces = () => {
  if (formData.nbr_pieces_principales < 1) {
    errors.nbr_pieces_principales = 'Le nombre de pièces principales doit être au moins de 1.';
    showErrorMsg.value = true;
  } else if (formData.nbr_pieces_principales > 6) {
    errors.nbr_pieces_principales = 'Le nombre de pièces principales ne peut pas dépasser 6.'; 
    showErrorMsg.value = true; 
  } else { 
    errors.nbr_pieces_principales = '';
    showErrorMsg.value = false;
  }
};
const showErrorMsg = ref(false)
const showSurfaceError = computed(() => {
  const value = formData.surface_habitable;
  const value2 = formData.nbr_pieces_principales;
  return value === 0 || value === '' || value2 === 0 || value2 === '';
});
function submitStep() {
  validateNbrPieces();
  if(!showSurfaceError.value && !errors.nbr_pieces_principales){  
    formStore.updateStepData('step3', formData);
    formStore.nextStep();
  }
  showErrorMsg.value = 'true';
}

</script>
