<template>
   <my-header :progress="formStore.currentStep" :step="'informations'"/>

    <form @submit.prevent="submitStep">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 mt-3">
                    <h2 class="stepTitle mb-3">Informations</h2>
                    <p class="stepDescription mb-3 mb-md-0">
                        Nous aurions besoin de quelques informations complémentaires.
                    </p>
                    <p>Ces informations nous sont utiles pour <span class="underligned bolder">éditer votre
                            contrat</span> .</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
                    <div class="container-fluid p-0 mb-3">
                       
                    </div>
                    <label class="formLabel mb-3">Vérifiez et complétez votre adresse postale</label>
                    <div class="container-fluid p-0">
                        <div class="row">
                            <div class="col-6">
                                <input v-model="infomations.numeroVoie"  type="number" @blur="checkError('numeroVoie')" class="form-control mb-3" :class="{ 'inputError': errors.numeroVoie }" placeholder="N° de voie">
                            </div>
                            <div class="col-6">
                                <select v-model="infomations.typeVoie" @blur="checkError('typeVoie')" class="mb-3 form-select" :class="{ 'inputError': errors.typeVoie }">
                                    <option value="RUE">rue</option>
                                    <option value="ALLEE">allée</option>
                                    <option value="AVENUE">avenue</option>
                                    <option value="BOULEVARD">boulevard</option>
                                    <option value="BOURG">bourg</option>
                                    <option value="CHEMIN">chemin</option>
                                    <option value="COURS">cours</option>
                                    <option value="CLOS">clos</option>
                                    <option value="CARREFOUR">carrefour</option>
                                    <option value="DIGUE">digue</option>
                                    <option value="FAUBOURG">faubourg</option>
                                    <option value="IMPASSE">impasse</option>
                                    <option value="PASSAGE">passage</option>
                                    <option value="PARC">parc</option>
                                    <option value="PLACE">place</option>
                                    <option value="PROMENADE">promenade</option>
                                    <option value="QUAI">quai</option>
                                    <option value="ROND_POINT">rond-point</option>
                                    <option value="ROUTE">route</option>

                                    <option value="RUELLE">ruelle</option>
                                    <option value="SENTIER">sentier</option>
                                    <option value="SQUARE">square</option>
                                    <option value="TRAVERSE">traverse</option>
                                    <option value="VOIE">voie</option>
                                    <option value="LIEU_DIT">Lieu-dit</option>
                                </select>
                            </div>
                            <div v-if="errors.numeroVoie || errors.typeVoie" class="errorMsg">
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
                                    <p class="m-0 ms-2">Veuillez renseigner ce champ.</p>
                                </div>
                            </div>
                            <div class="col-12 mt-0 mb-3 VotreCodepostale">
                                <input v-model="infomations.adressePostale" type="text" @blur="checkError('adressePostale')" class="form-control adressePostale" :class="{ 'inputError': errors.adressePostale }" autocomplete="off" placeholder="Votre adresse postale">
                                <div  v-if="errors.adressePostale" class="errorMsg">
                                    <div class="d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                                            viewBox="0 0 10.497 10.008">
                                            <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                                <g id="Page-1" transform="translate(30 591)">
                                                    <g id="Alert" transform="translate(5 5)">
                                                        <rect id="Rectangle" width="10" height="10"
                                                            transform="translate(1 1.581)" fill="none"></rect>
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
                                        <p class="m-0 ms-2">Veuillez renseigner ce champ.</p>
                                    </div>
                                </div>
                             
                            </div>
                            <div class="col-12 mt-0 mb-3 VotreCodepostale">
                                <!-- <label for="#zipcode" class="formLabel mb-2">Votre code postale ou ville</label> -->
                                <input type="text" class="form-control villeCpSearch" autocomplete="off" id="zipcode"
                                    placeholder="Ville ou code postale" disabled="" :value="zipCode">
                            </div>
                        </div>
                    </div>
                    <label class="formLabel mb-3">Votre numéro de téléphone mobile
                        <!-- <button type="button" class="pusletooltip" data-bs-toggle="modal" data-bs-target="#infoMobile"><i class="fa-solid fa-question" aria-hidden="true"></i></button> -->
                    </label>
                    <input type="tel" class="form-control mobileInput" placeholder="Votre numéro de téléphone mobile"
                        maxlength="10"  pattern="[0-9]*" v-model="infomations.tel" disabled="" >

                    <div class="col-12 mt-0 mb-5">
                        <div class="container-fluid p-0">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <button type="submit" @click="toggleAllErrors"
                                        class="navBtn nextBtn mt-4 flex justify-center align-items-center">
                                         Étape suivante
                                        <img src="../assets/icons/arrow-next.svg" alt="suivant" class="ms-3 img-fluid">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
                    <div class="assurmabarak">
                        <p>
                            ASSURMABARK est une marque de GLS LASSURANCES. Les informations recueillies par GLS
                            LASSURANCES, Courtier en
                            assurance, société anonyme immatriculée au RCS de Paris sous le numéro 483 666 137, et dont
                            le siège social est
                            au 45 rue de Boulainvilliers 75016 Paris font l'objet d'un traitement informatique afin
                            d'établir votre
                            devis/contrat. Le destinataire des données est le personnel habilité de GLS LASSURANCES.
                            Reportez-vous à nos
                            Mentions légales et notre politique de confidentialité des données.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { useFormStore } from '@/stores/useFormStore';
import { ref, reactive } from 'vue'
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { useRouter } from 'vue-router';
import MyHeader from '../components/header.vue';
const router = useRouter();
const formStore = useFormStore();

const zipCode = formStore.getFormData.step2.zipcode;

const infomations = reactive({
    numeroVoie: formStore.formData.step7.numero || "",
    typeVoie: formStore.formData.step7.typeVoie || "RUE", 
    adressePostale: formStore.formData.step7.complement || "",
    tel: formStore.formData.step7.telephone,
});

const errors = reactive({
    numeroVoie: false,
    typeVoie: false, 
    adressePostale: false,
});

const validateInputs= () => {
    errors.numeroVoie = infomations.numeroVoie.length == 0;
    errors.typeVoie = infomations.typeVoie.length == 0;
    errors.adressePostale = infomations.adressePostale.length == 0;
};
const checkError = (inputName) => {
    if (inputName === 'numeroVoie') {
    errors.numeroVoie = infomations.numeroVoie === '';
    } else if (inputName === 'typeVoie') {
    errors.typeVoie = infomations.typeVoie.trim() === '';
    } else if (inputName === 'adressePostale') {
    errors.adressePostale = infomations.adressePostale.trim() === '';
    }
};
const toggleAllErrors = () => {
    errors.numeroVoie = !errors.numeroVoie;
    errors.typeVoie = !errors.typeVoie;
    errors.adressePostale = !errors.adressePostale;
};
function submitStep(){
    validateInputs();
    if (Object.values(errors).every((error) => !error)) {
        formStore.updateStepData('informations', infomations);
        formStore.nextStep();
        router.push('/devis/paiement');
    } else {
        console.log("Validation failed.");
    }
}
</script>

<style>
    .customCloseBtn {
        background: var(--color1);
        border: 0;
        padding: 14px 50px;
        font-size: 16px;
        border-radius: 9px;
        color: #fff;
    }
</style>