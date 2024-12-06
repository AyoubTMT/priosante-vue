<template>
    <form @submit.prevent="submitStep">
        <div class="row g-1 g-md-4">
            <div class="col-12 mt-0 mb-3">
                <h2 class="stepTitle mb-3">Equipements de votre logement</h2>
                <p class="stepDescription mb-3 mb-md-0">
                    Votre logement dispose-t-il des éléments ci-dessous ?
                </p>
            </div>
            <label for="economique" class="formLabel">Dans ce logement, vous avez</label>
            <div v-for="(option, index) in options" :key="index" class="col-4 mt-3 accomodation">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group" v-if="!isAppartement || (option.id !== 'veranda' && option.id !== 'presencePicineOuTennis')">
                    <input type="checkbox" class="btn-check" :id="option.id" :value="option.value"
                        v-model="formData.selectedOptions" />
                    <label class="btn btn-outline-primary iconLabel" :for="option.id">
                        <div class="text-end checkedLabel">
                            <img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked">
                        </div>
                        <div class="btnImg">
                            <img :src="option.icon" :alt="option.alt">
                        </div>
                        <div>{{ option.label }}</div>
                    </label>
                </div>
            </div>
            <div v-if="showPieceSup" class="col-12 mt-3 surfaceSup">
                <label for="nbr_pieces_principales_sup30" class="formLabel mb-3">Nombre de pièces de plus de 30
                    m²</label>
                <div class="sufpiece">
                    <input @input="updateNbrPieces" type="number" class="form-control" id="nbr_pieces_principales_sup30" placeholder="Ex : 5"
                        v-model="formData.nbrPiecePrincipalePlus30m" />
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
                        <p class="m-0 ms-2">Veuillez renseigner votre nom</p>
                    </div>
                </div>
            </div>
            <div v-if="showDepSup" class="col-12 mt-3 depSup">
                <label for="nbr_dependances_sup30" class="formLabel mb-3">Nombre de dépendances de plus de 30 m²</label>
                <div class="sufdep">
                    <input @input="updateNbrPieces" type="number" class="form-control" id="nbr_dependances_sup30" placeholder="Ex : 5"
                        v-model="formData.dependenceCount" />
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
                        <p class="m-0 ms-2">Veuillez renseigner votre nom</p>
                    </div>
                </div>
            </div>
            <div v-if="showDepSup" class="col-12 mt-3 depSup">
                <label for="surface_dependance" class="formLabel mb-3">Surface des dépendances en m<sup>2</sup></label>
                <div class="sufm2">
                    <input type="number" class="form-control" id="surface_dependance" placeholder="Ex : 5"
                        v-model="formData.surfaceDependance" />
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
                        <p class="m-0 ms-2">Veuillez renseigner votre nom</p>
                    </div>
                </div>
            </div>
            <div v-if="showChemSup" class="col-12 mt-3 chemSup">
                <div class="formLabel mb-3">Cette cheminée a été installée par un professionnel du bâtiment ?</div>
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-6">
                            <div class="btn-group formIconContainer miniClass" role="group"
                                aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" value="OUI" id="chemOui" v-model="formData.cheminepro" />
                                <label class="btn btn-outline-primary iconLabel" for="chemOui">
                                    <div class="text-end checkedLabel">
                                        <img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked">
                                    </div>
                                    <div class="twoBtns">Oui</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="btn-group formIconContainer miniClass" role="group"
                                aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" value="NON" id="chemNon" v-model="formData.cheminepro" />
                                <label class="btn btn-outline-primary iconLabel" for="chemNon">
                                    <div class="text-end checkedLabel">
                                        <img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked">
                                    </div>
                                    <div class="twoBtns">Non</div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Show the error message dynamically -->
                <div class="errorMsg" v-if="showErrorMsg">
                    <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008" viewBox="0 0 10.497 10.008">
                            <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                <g id="Page-1" transform="translate(30 591)">
                                    <g id="Alert" transform="translate(5 5)">
                                        <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)" fill="none"></rect>
                                        <path id="Path" d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
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
                        <p class="m-0 ms-2">Votre cheminée doit être certifiée par un professionnel du bâtiment.</p>
                    </div>
                </div>
            </div>

            <div class="col-12 mt-0">
                <div class="container-fluid p-0">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <button v-if="loading" type="button" class="navBtn nextBtn mt-4 flex justify-center align-items-center">
                                <vue-spinner size="30" color="white" />
                            </button>
                            <button v-else type="submit" class="navBtn nextBtn mt-4 flex justify-center align-items-center">
                                <span :class="{ 'equippedOrNot': !isAnyOptionSelected }">{{ isAnyOptionSelected ? 'Étape suivante' : 'Aucun de ces équipements' }}</span>
                                <img src="../assets/icons/arrow-next.svg" alt="suivant" class="ms-3 img-fluid">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <BonASavoir
                remarque="Les dépendances et annexes sont tous les locaux qui ne sont pas à usage d’habitation, communiquant ou non avec l’habitation (buanderie, cellier, remise, débarras, les abris de jardin, cave, les combles et le sous-sol)." />
        </div>
    </form>
</template>

<script setup>
import BonASavoir from '../components/BonASavoir.vue';
import { useFormStore } from '@/stores/useFormStore';
import chemineIcon from '../assets/icons/chemine.svg';
import dependancesIcon from '../assets/icons/dependances.svg';
import verandaIcon from '../assets/icons/veranda.svg';
import garageIcon from '../assets/icons/garage.svg';
import alarmeIcon from '../assets/icons/alarme.svg';
import pieceIcon from '../assets/icons/piece.svg';
import piscineIcon from '../assets/icons/piscine.svg';
import {VueSpinner} from 'vue3-spinners';
import axios from 'axios';
import { ref, reactive, computed } from 'vue'
const formStore = useFormStore();
const nbrPieces = ref(formStore.getNbrPieces);
const loading =ref(false)
const formData = reactive({
    selectedOptions: formStore.formData.step4.selectedOptions,
    nbrPiecePrincipalePlus30m: formStore.formData.step4.nbrPiecePrincipalePlus30m,
    dependenceCount: formStore.formData.step4.dependenceCount,
    surfaceDependance: formStore.formData.step4.surfaceDependance,
    cheminepro: formStore.formData.step4.surfaceDependance || 'OUI',
})
const options = reactive([
    {
        id: 'chemine',
        value: 'chemine',
        label: "Cheminée ou poêle à bois",
        icon: chemineIcon,
        alt: 'chemine',
    },
    {
        id: 'dependances',
        value: 'dependances',
        label: 'Dépendance supérieure à 30 m²',
        icon: dependancesIcon,
        alt: 'dependances',
    },
    // {
    //     id: 'garage',
    //     value: 'garage',
    //     label: 'Garage ou box fermé',
    //     icon: garageIcon,
    //     alt: 'garage',
    // },
    {
        id: 'alarme',
        value: 'alarme',
        label: 'Alarme antivol',
        icon: alarmeIcon,
        alt: 'alarme',
    },
    {
        id: 'superieur30m',
        value: 'superieur30m',
        label: 'Pièce supérieure à 30 m²',
        icon: pieceIcon,
        alt: 'superieur30m',
    },
    {
        id: 'veranda',
        value: 'veranda',
        label: 'Véranda ou loggia',
        icon: verandaIcon,
        alt: 'veranda',
    },
    {
        id: 'presencePicineOuTennis',
        value: 'presencePicineOuTennis',
        label: 'Piscine et/ou un terrain de tennis',
        icon: piscineIcon,
        alt: 'presencePicineOuTennis',
    },
])
const showErrorMsg = computed(() => formData.cheminepro === "NON");
const isAnyOptionSelected = computed(() => {
    return formData.selectedOptions.length > 0;
});
const showPieceSup = computed(() => {
    return formData.selectedOptions.includes('superieur30m');
});
const showDepSup = computed(() => {
    return formData.selectedOptions.includes('dependances');
});
const showChemSup = computed(() => {
    return formData.selectedOptions.includes('chemine');
});
const isAppartement = computed(() => {
    return formStore.formData.step1.type_habitation == "APPARTEMENT";
});

function updateNbrPieces() {
    formStore.updateStepData('step4', formData);
    nbrPieces.value = formStore.getNbrPieces;
}
async function submitStep() {
    if(showErrorMsg.value == false){
        if (nbrPieces.value > 1) {
            loading.value =true;
            await axios.get(import.meta.env.VITE_BASE_URL+'/api/getDependecies/'+nbrPieces.value)
            .then(response => {
                if (response.status === 200) {
                    formStore.updateStepData('dependecies', response.data);
                    formStore.updateStepData('step4', formData);
                    formStore.nextStep();
                }
            }).catch(({response}) => {
                toast.error('une erreur est survenue merci de réessayer plus tard');
                console.log(response);
            }).finally(() => {
                loading.value =false;
            });
        }else{
            formStore.updateStepData('step4', formData);
            formStore.nextStep();
        }
    }
}
</script>

<style scoped>
.formIconContainer {
    height: 100%;
}
</style>