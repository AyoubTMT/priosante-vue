<template>
      <my-header :progress="formStore.currentStep" :step="'options'"/>

    <form @submit.prevent="submitStep">
        <input type="hidden" name="dd">

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 mt-3">
                    <h2 class="stepTitle mb-3">Garanties optionnelles</h2>
                    <p class="stepDescription mb-3 mb-md-0">
                        Profitez de la personnalisation en ajoutant des options à votre assurance.
                    </p>
                    <p>Les options sont conçues pour vous offrir une <span class="underligned bolder">protection
                            supplémentaire.</span></p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">

                    <div v-for="(price, option) in selectedTarif.optionsCompatibles" :key="option">
                        <!-- {{ option }} -->
                        <div class="col-12 mt-3" v-if="option == 'RACHAT_FRANCHISE'">
                            <input type="checkbox" class="addon d-none"  :id="option" :value="option" v-model="tarifOptions" />
                            <rachat-franchise  :price="price" :option="option" />
                        </div>

                        <div class="col-12 mt-3" v-else-if="option == 'ASSISTANCE_MATERNELLE'">
                            <input type="checkbox" class="addon d-none"  :id="option" :value="option" v-model="tarifOptions" />
                            <assistance-maternelle   :price="price" :option="option" />
                        </div>

                        <div class="col-12 mt-3" v-else-if="option == 'SYS_PHOTOVOLTAIQUE'">
                            <input type="checkbox" class="addon d-none"  :id="option" :value="option" v-model="tarifOptions" />
                            <sys-photo-voltaique    :price="price" :option="option" />
                        </div>
                        <div class="col-12 mt-3" v-else-if="option == 'LOCATION_SALLE'">
                            <input type="checkbox" class="addon d-none"  :id="option" :value="option" v-model="tarifOptions" />
                            <location-sale    :price="price" :option="option" />
                        </div>
                        <div class="col-12 mt-3" v-else-if="option == 'DOMMAGE_ELECTRIQUE'">
                            <input type="checkbox" class="addon d-none"  :id="option" :value="option" v-model="tarifOptions" />
                            <dommage-electrique   :price="price" :option="option" />
                        </div>
                        <!-- <ind-enfant-mineur v-else-if="option == 'IND_ENFANT_MINEUR'" :price="price" /> -->
                    </div>
                    
                    <div class="col-12 mt-0 mb-5">
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

                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
                    <div class="separateur"></div>
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

import RachatFranchise from '../components/partials/options/RachatFranchise.vue';
import AssistanceMaternelle from '../components/partials/options/AssistanceMaternelle.vue';
import DommageElectrique from '../components/partials/options/DommageElectrique.vue';
import IndEnfantMineur from '../components/partials/options/IndEnfantMineur.vue';
import LocationSale from '../components/partials/options/LocationSale.vue';
import SysPhotoVoltaique from '../components/partials/options/SysPhotoVoltaique.vue';
import { useFormStore } from '../stores/useFormStore';
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import MyHeader from '../components/header.vue';

const router = useRouter();

const formStore = useFormStore();

// get selected tarif
const selectedTarif = formStore.getSelectedTarif;

const tarifOptions = ref(formStore.getSelectedTarifOptions)

function submitStep (){
    formStore.updateStepData('selectedTarifOptions', tarifOptions);
    formStore.nextStep();
    router.push('/devis/informations');
}

</script>

<style>
    .addon:checked + label .obtn {
        background-color: var(--color1);
    }
    .addon:checked + label {
        border: 2px solid var(--color1);
    }
    label.osingle {
        border: 2px solid #fff;
    }
    .osingle {
        background-color: #fff;
    }
    .obtn {
        min-width: 105px;
        justify-content: space-around;
    }
    @media (min-width: 751px) {
        .osingle {
            box-shadow: 0px 6px 7px 0px #f1f1f1;
            border-radius: 10px;
            padding: 18px;
            cursor: pointer;
            min-height: 122px;
        }
        .oicon {
            padding: 8px;
            width: 63px;
            text-align: center;
        }
        .otitre {
            font-weight: 700;
            font-size: 18px;
        }
        .odescription {
            font-size: 13px;
        }
        .oprice {
            width: min-content;
        }
        .obtn {
            flex: none;
            height: max-content;
        }
        .obtn {
            border: 0;
            background-color: #D1D1D1;
            border-radius: 50px;
            padding: 3px 5px;
            display: flex;
            align-items: center;
            color: #fff;
            font-size: 14px;
        }
        .obtn svg {
            margin-right: 5px;
        }
        .obtn span {
            font-size: 10px;
        }
    }
</style>