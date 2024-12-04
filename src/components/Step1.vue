<template>
    <form @submit.prevent="submitStep">
        <div class="row g-3 g-md-4">
            <div class="col-12 mt-0 mb-3">
                <h2 class="stepTitle mb-3">Bonjour, je m'appelle Emma.</h2>
                <p class="stepDescription mb-3 mb-md-0">
                    Prenons quelques minutes pour définir ensemble la meilleure offre.
                </p>
            </div>
            <label for="maison" class="formLabel mb-3">Que souhaitez-vous assurer ?</label>
            <div class="col-6 mt-0">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check type_habitation" name="type_habitation" value="APPARTEMENT"
                        id="appartement" autocomplete="off" v-model="localData.type_habitation">
                    <label class="btn btn-outline-primary iconLabel" for="appartement">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15"
                                height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/appartement.svg" alt="appartement"></div>
                        <div>Appartement</div>
                    </label>
                </div>
            </div>
            <div class="col-6 mt-0">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check type_habitation" name="type_habitation" value="MAISON_INDIVIDUELLE"
                        id="maison" autocomplete="off" v-model="localData.type_habitation">
                    <label class="btn btn-outline-primary iconLabel" for="maison">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15"
                                height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/maison.svg" alt="maison"></div>
                        <div>Maison</div>
                    </label>
                </div>
            </div>
            <div class="col-6">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check type_habitation" name="type_habitation" value="APPARTEMENT"
                        id="studio" autocomplete="off" v-model="localData.type_habitation">
                    <label class="btn btn-outline-primary iconLabel" for="studio">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15"
                                height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/studio.svg" alt="studio"></div>
                        <div>Studio</div>
                    </label>
                </div>
            </div>
            <div class="col-6">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check type_habitation" name="type_habitation" value="AUTRE"
                        id="autre" autocomplete="off" v-model="localData.type_habitation">
                    <label class="btn btn-outline-primary iconLabel" for="autre">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15"
                                height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/autre.svg" alt="autre"></div>
                        <div>Autre</div>
                    </label>
                </div>
            </div>
            <div class="col-12">
                <label for="assured" class="formLabel mb-3">Êtes-vous actuellement assuré(e) ?</label>
                <div class="col-12 mt-0 VotreCodepostale">
                    <select name="assured" id="assured" class="form-select" v-model="localData.assured">
                        <option value="NON">Non</option>
                        <option value="OUI">Oui</option>
                    </select>
                </div>

                <div class="errorMsg d-none">
                    <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                            viewBox="0 0 10.497 10.008">
                            <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                <g id="Page-1" transform="translate(30 591)">
                                    <g id="Alert" transform="translate(5 5)">
                                        <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)"
                                            fill="none"></rect>
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
                <button type="submit" class="navBtn firstBtn mt-4">Votre devis en 2 minutes</button>
            </div>
            <div class="col-12 text-center mb-3 mt-3 d-flex align-items-center justify-content-center">
                <img src="../assets/icons/googlereviews.svg" width="222" height="22" alt="google reviews">
            </div>
            <BonASavoir />
        </div>
        
        <button type="button" class="btn btn-secondary fw-bold mt-4 d-none" data-bs-toggle="modal" data-bs-target="#autrePopup2" ref="modalTrigger" >Voir mon devis </button>
        <div class="modal fade" id="autrePopup2" :class="{ show: showModal }" tabindex="-1" aria-labelledby="pdfModalLabel">
            <div class="modal-dialog  modal-dialog-centered modal-mdl">
                <div class="modal-content">
                    <div class="modal-body text-center p-4">
                        <div class="contenu">
                            <img src="../assets/images/assistance.jpg"
                                alt="assistante" class="img-fluid mb-4" />
                            <div class="formLabel mb-3">
                                Votre habitation présente-t-elle une spécificité ?
                                (loft, embarcation, habitation troglodytique, château/domaine, manoir, hôtel
                                particulier, moulin, monument à caractère religieux)
                            </div>
                        </div>
                        <div class="text-center mt-4">
                            <button type="button">
                                <a class="customCloseBtn mobile:text-xl font-bold text-center" href="tel:0146592228">Contactez-nous</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import BonASavoir from '../components/BonASavoir.vue';
import { useFormStore } from '@/stores/useFormStore';
import { reactive, ref } from 'vue';
const formStore = useFormStore();
const localData = reactive({
  type_habitation: formStore.formData.step1.type_habitation || "APPARTEMENT",
  assured: "NON",
});

const showModal = ref(false);
const modalTrigger = ref(null);

function submitStep() {
  if (localData.type_habitation === "AUTRE") {
    showModal.value = true;
    modalTrigger.value?.click();
    return;
  }

  const formStore = useFormStore();
  formStore.updateStepData('step1', localData);
  formStore.nextStep();
}
</script>
<style scoped>

.customCloseBtn {
    background: var(--color1);
    border: 0;
    padding: 14px 50px;
    font-size: 16px;
    border-radius: 9px;
    color: #fff;
}
.contenu{
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
