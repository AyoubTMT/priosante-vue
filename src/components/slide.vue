<template>

 

    <div class="tarifBox text-center slick-slide slick-active " :class="{ 'recommanded': tarif.formule == 'CONFORT','parent-loader': loader}" data-slick-index="1" aria-hidden="false"
        style="width: 394px;" tabindex="-1">

        <div v-if="loader" class="" >
        <vue-spinner size="30" color="red" />
        </div>
        <div v-else >

            <div class="mb-0 tarifTitle " :class="{ 'recommandedBox': tarif.formule == 'CONFORT' }">{{ tarif.formule }}</div>
            <div class="dateEffet mb-2 mt-2" data-bs-toggle="modal" data-bs-target="#dateEffet">A partir du : <span
                    class="effetDate mx-2">{{ formatDate(dateEffet) }}</span>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="14.773" height="14.759" viewBox="0 0 14.773 14.759">
                        <g id="edit" transform="translate(-0.02)">
                            <path id="Tracé_231" data-name="Tracé 231" d="M12.947,14.759H1.867a1.779,1.779,0,0,1-1.306-.541A1.779,1.779,0,0,1,.02,12.912V1.832A1.756,1.756,0,0,1,.561.534,1.791,1.791,0,0,1,1.867,0h8.31L8.33,1.832H2.79a.88.88,0,0,0-.656.274.9.9,0,0,0-.267.649v9.233a.88.88,0,0,0,.274.656.9.9,0,0,0,.649.267h9.233a.912.912,0,0,0,.923-.923V6.449L14.793,4.6v8.31a1.847,1.847,0,0,1-1.847,1.847ZM4.637,8.065l2.077,2.077-3,.923Zm3,1.385L5.329,7.156,12.24.231a.855.855,0,0,1,1.169,0l1.14,1.154a.8.8,0,0,1,.238.57.773.773,0,0,1-.238.584Z" transform="translate(0)" fill="#a1c84e"></path>
                        </g>
                    </svg>    -->
            </div>
            <div class="tarifPrice">
                <div class="price-rounded parmois">{{ integerPart }}</div>
                <div class="price-decimal">, {{ decimalPart }} €</div>
            </div>
            <ul class="text-start dependecies" v-if="nbrPieces > 1" style="padding: 0;margin: 32px;">
                <li>
                    <label for="">Capital mobilier à assurer</label>
                    <select class="form-select" :class="tarif.formule + '_capital'" v-model="selectedDependecies.capitals" @change="getTarif">
                        <option v-for="(item, index) in dependecies.capitals" :key="index" :value="index">{{ item }}</option>
                    </select>
                </li>
                <li>
                    <label for="">Indemnisation Mobilier</label>

                    <select class="form-select" :class="tarif.formule + '_indemnisationMobilier'" v-model="selectedDependecies.indemnisationMobilier"  @change="getTarif">
                        <option v-for="(item, index) in dependecies.indemnisationMobilier" :key="index" :value="index">
                            {{ item }}</option>
                    </select>
                </li>
                <li>
                    <label for="">Objets de valeur</label>

                    <select class="form-select" :class="tarif.formule + '_objetValeur'" v-model="selectedDependecies.objetValeur"  @change="getTarif">
                        <option v-for="(item, index) in dependecies.objetValeur" :key="index" :value="index">{{ item }}
                        </option>
                    </select>
                </li>
                <li>
                    <label for="">Franchise</label>

                    <select class="form-select" :class="tarif.formule + '_franchise'" v-model="selectedDependecies.franchise"  @change="getTarif">
                        <option v-for="(item, index) in dependecies.franchise" :selected="index == 'TROISCENTS'"  :key="index" :value="index">{{ item }}</option>
                    </select>
                </li>
            </ul>
            <div class="composants">
                <ul>
                    <li>Responsabilité civile <strong></strong></li>
                    <li>Défense Pénale et Recours <strong></strong></li>
                    <li>Incendie, risques annexes <strong></strong></li>
                    <li>Dégâts des eaux <strong></strong></li>
                    <li>Evènements climatiques <strong></strong></li>
                    <li>Bris de glace <strong></strong></li>
                    <li>Vol et vandalisme <strong></strong></li>
                    <li :class="[['ECO', 'CONFORT'].includes(props.tarif.formule) ? 'uncheck' : '']">Dommages électriques
                        <strong></strong>
                    </li>
                    <li>Capital mobilier Jusqu'à
                        <strong v-if="['ECO'].includes(props.tarif.formule)">5 000 € / pièce</strong>
                        <strong v-else>10 000 € / pièce</strong>
                    </li>
                    <li :class="[['ECO'].includes(props.tarif.formule) ? 'uncheck' : '']">Objet de valeur
                        <strong v-if="['OPTIMALE', 'CONFORT'].includes(props.tarif.formule)">à 1 000 € / pièce</strong>
                        <strong v-if="['PREMIUM'].includes(props.tarif.formule)"> à 1 500 € / pièce</strong>
                    </li>
                </ul>
            </div>
            <div class="tarifActions">
                <a href="#" @click="defineTarifSelected(tarif)" tabindex="0"><button class="standardBtn"
                        tabindex="0">Souscrire en ligne</button></a>
            </div>
        </div>
    </div>
</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import { computed ,reactive, ref} from 'vue'


import { useFormStore } from '@/stores/useFormStore';
import { useRouter } from 'vue-router';
import axios from 'axios';
import moment from 'moment';
import {VueSpinner} from 'vue3-spinners';
import { toast } from 'vue3-toastify';
const props = defineProps(['tarif', "dependecies",'dateEffet'])
const formStore = useFormStore();
const router = useRouter();
const nbrPieces = formStore.getNbrPieces;
const selectedDependecies = reactive({
    formule:props.tarif.formule,
    franchise:"",
    indemnisationMobilier:"",
    objetValeur: "",
    capitals: "",

});
if(nbrPieces > 1 ){
const defaultDependecie = formStore.getDefaultDependecie(props.tarif.formule)


selectedDependecies.formule = props.tarif.formule;
selectedDependecies.franchise = defaultDependecie.franchise;
selectedDependecies.indemnisationMobilier = defaultDependecie.indemnisationMobilier;
  selectedDependecies.objetValeur = defaultDependecie.objetValeur;
  selectedDependecies.capitals = defaultDependecie.capitals;

}

const loader= ref(false)
// a computed ref

const integerPart = computed(() => {
    return Math.trunc(props.tarif.tarif); // Returns the integer part
});
// Extract decimal part
const decimalPart = computed(() => {
    return parseFloat(props.tarif.tarif).toFixed(2).split('.')[1]; // Ensures two decimal places
});

function defineTarifSelected(selectedTarif) {
    const capitalElement = document.getElementsByClassName(selectedTarif.formule + '_capital')[0];
    const indemnisationMobilierElement = document.getElementsByClassName(selectedTarif.formule + '_indemnisationMobilier')[0];
    const objetValeurElement = document.getElementsByClassName(selectedTarif.formule + '_objetValeur')[0];
    const franchiseElement = document.getElementsByClassName(selectedTarif.formule + '_franchise')[0];

    const selectedCapital = capitalElement ? capitalElement.value : null;
    const selectedIndemnisationMobilier = indemnisationMobilierElement ? indemnisationMobilierElement.value : null;
    const selectedObjetValeur = objetValeurElement ? objetValeurElement.value : null;
    const selectedFranchise = franchiseElement ? franchiseElement.value : null;

    selectedTarif.capital = selectedCapital;
    selectedTarif.indemnisationMobilier = selectedIndemnisationMobilier;
    selectedTarif.objetValeur = selectedObjetValeur;
    selectedTarif.franchise = selectedFranchise;

    formStore.updateStepData('selectedTarif', selectedTarif);
    formStore.nextStep();
    router.push('/devis/options');
}

function formatDate(value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
    }
}

async function getTarif(){
        const dataTarif = formStore.getDataForTarif;
        dataTarif.formuleGenerali = selectedDependecies.formule
        dataTarif.capitalMobilier = selectedDependecies.capitals 
        //dataTarif.niveauFranchise = Object.keys(element.franchise)[0] 
        dataTarif.niveauFranchise = selectedDependecies.franchise  
        dataTarif.indemnMobilier = selectedDependecies.indemnisationMobilier  
        dataTarif.niveauOJ = selectedDependecies.objetValeur  
        loader.value =true;
        await axios.post(import.meta.env.VITE_BASE_URL+'/api/tarificateur', dataTarif)
        .then(response => {
            if (response.status === 200) {
                formStore.updateFormuleTarif(selectedDependecies, response.data.response[0]);
                //tarifs.value.push( response.data.response[0]);
            }
        }).catch(({response}) => {
            toast.error('une erreur est survenue merci de réessayer plus tard');
            console.log(response);
        }).finally(() => {
            loader.value =false;
        });
}





</script>

<style scoped>
.dependecies li{
    margin: 10px;
}
.dependecies{
    padding: 0px;
    margin: 32px;
}
.parent-loader{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.composants li.uncheck:before {
    content: "";
    display: inline-block;
    height: 13px;
    width: 15px;
    position: relative;
    top: 3px;
    margin-right: 8px;
    background-image: url(../assets/icons/uncheck.svg);
    background-size: contain;
    background-repeat: no-repeat;
}

.composants li:before {
    content: "";
    display: inline-block;
    height: 13px;
    width: 15px;
    position: relative;
    top: 3px;
    margin-right: 8px;
    background-image: url(../assets/icons/check.svg);
    background-size: contain;
    background-repeat: no-repeat;
}

.composants li.uncheck {
    color: #a7a7a7;
}

.composants li {
    font-size: 14px;
    color: #535353;
    font-weight: 500;
    margin-bottom: 10px;
}

.composants ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: start;
    padding: 0 25px;
}

.price-decimal {
    display: inline-block;
    font-size: 18px;
    bottom: 3px;
    position: relative;
}

.parmois:after {
    content: "/MOIS";
    font-size: 14px;
    display: inline-block;
    position: relative;
    height: 0;
    width: 0 !important;
    color: #929292;
    font-weight: 500;
}

.price-rounded {
    font-size: 70px;
    font-weight: bolder;
    display: inline-block;
    margin-top: -24px;
    margin-bottom: -24px;
}

.standardBtn {
    width: 100%;
    background-color: var(--color1);
    color: #fff;
    height: 60px;
    border-radius: 9px;
    border: 0;
    font-size: 21px;
}

.tarifActions {
    margin-top: 35px;
    padding: 0 23px;
    font-size: 19px;
}

.composants {
    margin-top: 29px;
}

.tarifPrice {
    background-color: var(--color3);
    padding: 5px 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 26px 0;
}

.dateEffet {
    font-size: 14px;
    color: #918d8d;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tarifTitle {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
}

.tarifBox {
    background: #fff;
    box-shadow: 0 3px 7px rgb(0 0 0 / 6%);
    border-radius: 9px;
    padding: 21px 0;
    margin: 0 15px;
}
.tarifBox.recommanded {
    border: 4px solid var(--color3);
    padding-top: 0;
}
.tarifBox.recommanded .recommandedBox {
    display: block;
}
.recommandedBox {
    background: var(--color3);
    color: #fff;
    margin-bottom: 12px;
    padding: 8px 0;
    display: none;
    font-weight: 600;
    margin-bottom: 10px;
}
/*****************************/
.carousel__slide {
    padding: 5;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}
</style>
