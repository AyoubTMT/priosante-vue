<template>
    <form @submit.prevent="submitStep">
        <div class="row g-3 g-md-4">
            <div class="col-12 mt-0 mb-3">
                <h2 class="stepTitle mb-3">Commençons par votre logement </h2>
                <p class="stepDescription mb-3 mb-md-0">
                    Afin de bien évaluer votre demande, pourriez-vous m’en dire un peu plus ?
                </p>
            </div>
            <label for="maison-b" class="formLabel mb-3">Qualité de l'assuré</label>
            <div class="col-6 mt-0">
                <div class="btn-group formIconContainer" role="group">
                    <input type="radio" class="btn-check" name="qualiteAssure" value="LOCATAIRE_OCCUPANT"
                        id="locataire" autocomplete="off" v-model="formData.qualiteAssure">
                    <label class="btn btn-outline-primary iconLabel" for="locataire">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15"
                                height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/locataire.svg" alt="locataire"></div>
                        <div>Locataire</div>
                    </label>
                </div>
            </div>
            <div class="col-6 mt-0">
                <div class="btn-group formIconContainer" role="group">
                    <input type="radio" class="btn-check" name="qualiteAssure" value="PROPRIETAIRE_OCCUPANT"
                        id="proprietaire" autocomplete="off" v-model="formData.qualiteAssure">
                    <label class="btn btn-outline-primary iconLabel" for="proprietaire">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15"
                                height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/occupant.svg" alt="proprietaire"></div>
                        <div>Propriétaire</div>
                    </label>
                </div>
            </div>

            <div class="col-12 appartementcondition">
                <label for="etages" class="formLabel mb-3">Cet appartement est situé</label>
                <select name="appartement_situe" id="etages" class="form-select" v-model="formData.appartement_situe">
                    <option value="RDC">Au rez-de-chaussée</option>
                    <option value="INTERMEDIAIRE">À un étage intermédiaire</option>
                    <option value="DERNIER">Au dernier étage</option>
                </select>
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
            </div>
            <div class="col-12 maisoncondition" style="display: none;">
                <label class="formLabel mb-3" for="resiliation">Votre habitation présente-t-elle une spécificité
                    ?</label>
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-6">
                            <div class="btn-group formIconContainer" role="group">
                                <input type="radio" class="btn-check" name="specification" value="NON" id="specNon"
                                    autocomplete="off" v-model="formData.specification">
                                <label class="btn btn-outline-primary iconLabel" for="specNon">
                                    <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg"
                                            width="15" height="15" alt="checked"></div>
                                    <div class="twoBtns">Non</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="btn-group formIconContainer" role="group">
                                <input type="radio" class="btn-check" name="specification" value="OUI" id="specOui"
                                    autocomplete="off" v-model="formData.specification">
                                <label class="btn btn-outline-primary iconLabel" for="specOui">
                                    <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg"
                                            width="15" height="15" alt="checked"></div>
                                    <div class="twoBtns">Oui</div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-3 VotreCodepostale">
                <label for="zipcode" class="formLabel mb-2">Code postal ou ville</label>
                <input type="text" class="form-control villeCpSearch" :class="{ 'inputError': showErrorMsg }" autocomplete="off" id="zipcode"
                    placeholder="Code postal ou ville" v-model="formData.zipcode" @keyup="onVilleCpSearchKeyup">
                <div v-show="showErrorMsg" class="errorMsg">
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
                        <p class="m-0 ms-2">Une ville doit être sélectionnée.</p>
                    </div>
                </div>
                <div class="villeSearchResult">
                    <ul v-show="showVillesCp" id="villesCp">
                        <li v-for="(city, index) in filteredCities" :key="index"
                            @click="selectCpVille(city.code_postal, city.commune)">
                            {{ city.code_postal }} {{ city.commune }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 mt-0">
                <div class="container-fluid p-0">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <button type="submit"
                                class="navBtn nextBtn mt-4 flex justify-center align-items-center">Étape suivante <img
                                    src="../assets/icons/arrow-next.svg" alt="suivant" class="ms-3 img-fluid"></button>
                        </div>
                        <div class="col-12 text-center">
                            <!-- <a class="backLink" onclick="goBack()"><img src="../assets/icons/back-arrow.svg" alt="back" class="img-fluid me-3"> Retour</a> -->
                        </div>
                    </div>
                </div>
            </div>
            <BonASavoir remarque="Chaque adresse représente un niveau de risque différent" />
        </div>
    </form>
</template>

<script setup>
import BonASavoir from '../components/BonASavoir.vue';
import { useFormStore } from '@/stores/useFormStore';
import { ref, reactive } from 'vue'

const formStore = useFormStore();
const step2Data = formStore.getFormData;

const formData = reactive({
    qualiteAssure: step2Data.step2.qualiteAssure || "LOCATAIRE_OCCUPANT",
    appartement_situe: step2Data.step2.appartement_situe || "INTERMEDIAIRE",
    specification: step2Data.step2.specification || "NON",
    zipcode: step2Data.step2.zipcode || "",
    codePostal: step2Data.step2.codePostal || "",
    ville: step2Data.step2.ville || "",
})

const allCities = ref([])
const filteredCities = ref([])
const showVillesCp = ref(false)
const showErrorMsg = ref(false)


function submitStep() {
    if(showErrorMsg.value == false && String(formData.codePostal).length == 5){
        formStore.updateStepData('step2', formData);
        formStore.nextStep();
    }else {
        showErrorMsg.value = true;
        showVillesCp.value = false;
    }
}

const onVilleCpSearchKeyup = async () => {
    const pressedKey = formData.zipcode.trim();
    if (pressedKey && pressedKey.length >= 3 ) {
        await getVilleZip(pressedKey);
        showErrorMsg.value = false;
    }else {
        showErrorMsg.value = pressedKey.length === 0 ? false : true;
        showVillesCp.value = false;
    }

}
function selectCpVille(cp, ville) {
    formData.zipcode = `${cp} ${ville}`;
    formData.codePostal = cp;
    formData.ville = ville;
    showVillesCp.value = false;
}
async function getVilleZip(query) {
    try {
        const response = await fetch('/Villes.json');
        const data = await response.json();
        allCities.value = data;
        filteredCities.value = allCities.value.filter(city => String(city.code_postal).includes(query) || city.code_postal==query || city.commune.toLowerCase().includes(query.toLowerCase()) ); 
        showVillesCp.value = filteredCities.value.length > 0; 
        showErrorMsg.value = filteredCities.value.length === 0;
    } catch (error) {
        console.error("Error fetching city data:", error);
        showErrorMsg.value = true;
        showVillesCp.value = false;
    }
}
</script>
<style scoped>
.villeSearchResult,
.containerResult,
.adressesResult {
    height: 0px;
    position: relative;
    z-index: 2;
}

#villesCp,
.racesList,
#adresses,
#stationCp {
    max-height: 176px;
    overflow-y: auto;
    background-color: rgb(255, 255, 255);
    list-style: none;
    padding: 0px 0px;
    border-radius: 4px;
    width: 100%;
    border: 1px solid rgb(165, 165, 165);
    margin-top: 8px;
}

ul#villesCp li,
ul#stationCp li,
#adresses li {
    font-size: 16px;
    padding: 5px 15px;
    color: #303030;
    cursor: pointer;
}

ul#villesCp li:hover,
ul#stationCp li:hover,
#adresses li:hover {
    color: var(--color1);
    transition: 0.3s;
    background-color: var(--color3);
    border-radius: 0;
}
</style>