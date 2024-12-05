<template>
    <form @submit.prevent="submitStep">
        <div class="row g-3 g-md-4">
            <div class="col-12 mt-0 mb-3">
                <h2 class="stepTitle mb-3">On y est presque !</h2>
                <p class="stepDescription mb-3 mb-md-0">
                    J'ai besoin d'informations supplémentaires pour constituer la meilleure offre.
                </p>
            </div>
            <label for="labelNbSinistres" class="formLabel mb-3">Nombre de sinistres déclarés</label>
            <div class="col-6 mt-0">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check declare_sinistre2ans" name="declare_sinistre2ans"
                        id="nonSinistre" value="NON" v-model="formData.declare_sinistre2ans">
                    <label class="btn btn-outline-primary iconLabel" for="nonSinistre">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15"
                                height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/zero.svg" alt="oui"></div>
                        <div>Aucun sinistre</div>
                    </label>
                </div>
            </div>
            <div class="col-6 mt-0">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check declare_sinistre2ans" name="declare_sinistre2ans"
                        id="ouiSinistre" value="OUI" v-model="formData.declare_sinistre2ans">
                    <label class="btn btn-outline-primary iconLabel" for="ouiSinistre">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15"
                                height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/oneplus.svg" alt="non"></div>
                        <div>Un ou plusieurs</div>
                    </label>
                </div>
            </div>
            <div v-if="showSinistresError"  class="errorMsg">
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
                    <p class="m-0 ms-2">Souscription impossible</p>
                </div>
            </div>
            <div class="col-12">
                <label class="formLabel mb-3" for="resiliation">Avez-vous été résilié(e) par un assureur ?</label>
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-6">
                            <div class="btn-group formIconContainer miniClass" role="group"
                                aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check resilie_par_assureur3ans"
                                    name="resilie_par_assureur3ans" id="resnon" value="NON"
                                    v-model="formData.resilie_par_assureur3ans">
                                <label class="btn btn-outline-primary iconLabel" for="resnon">
                                    <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg"
                                            width="15" height="15" alt="checked"></div>
                                    <div class="twoBtns">Non</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="btn-group formIconContainer miniClass" role="group"
                                aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check resilie_par_assureur3ans"
                                    name="resilie_par_assureur3ans" id="resoui" value="OUI"
                                    v-model="formData.resilie_par_assureur3ans">
                                <label class="btn btn-outline-primary iconLabel" for="resoui">
                                    <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg"
                                            width="15" height="15" alt="checked"></div>
                                    <div class="twoBtns">Oui</div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div v-if="showResiliationError"  class="errorMsg">
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
                            <p class="m-0 ms-2">Souscription impossible</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <label class="formLabel mb-3" for="insert">Le bien est utilisé à des fins profesionnelles</label>
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-6">
                            <div class="btn-group formIconContainer miniClass" role="group"
                                aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check utilisations_professionnelles"
                                    name="utilisations_professionnelles" id="utilisations_professionnelles_non"
                                    value="NON" v-model="formData.utilisations_professionnelles">
                                <label class="btn btn-outline-primary iconLabel"
                                    for="utilisations_professionnelles_non">
                                    <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg"
                                            width="15" height="15" alt="checked"></div>
                                    <div class="twoBtns">Non</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="btn-group formIconContainer miniClass" role="group"
                                aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check utilisations_professionnelles"
                                    name="utilisations_professionnelles" id="utilisations_professionnelles_oui"
                                    value="OUI" v-model="formData.utilisations_professionnelles">
                                <label class="btn btn-outline-primary iconLabel"
                                    for="utilisations_professionnelles_oui">
                                    <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg"
                                            width="15" height="15" alt="checked"></div>
                                    <div class="twoBtns">Oui</div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div v-if="showProError"  class="errorMsg">
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
                            <p class="m-0 ms-2">Souscription impossible</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-0">
                <div class="container-fluid p-0">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <button type="submit" class="navBtn nextBtn mt-4 flex justify-center align-items-center">
                                Étape suivante
                                <img src="../assets/icons/arrow-next.svg" alt="suivant" class="ms-3 img-fluid">
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <BonASavoir
                remarque="Dès lors que vous utilisez votre logement dans le cadre de vos activités professionnelles et/ou que vous y recevez des clients (même de manière occasionnelle), vous devez répondre positivement à cette question. Petite précision : vous ne devez pas prendre en compte le télétravail." />
        </div>
    </form>
</template>

<script setup>
import BonASavoir from '../components/BonASavoir.vue';
import { useFormStore } from '@/stores/useFormStore';
import { ref, reactive, computed } from 'vue';

const formStore = useFormStore();

const formData = reactive({
    declare_sinistre2ans: 'NON',
    resilie_par_assureur3ans: formStore.getFormData.step5.resilie_par_assureur3ans || 'NON',
    utilisations_professionnelles: 'NON',
});

const showSinistresError = computed(() => formData.declare_sinistre2ans === 'OUI');
//const showResiliationError = computed(() => formData.resilie_par_assureur3ans === 'OUI');
const showProError = computed(() => formData.utilisations_professionnelles === 'OUI');

function submitStep() {
    if (!showSinistresError.value && !showProError.value) {
        formStore.updateStepData('step5', formData);
        formStore.nextStep();
    }
}
</script>
