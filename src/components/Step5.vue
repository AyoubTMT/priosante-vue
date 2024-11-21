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
                    <input 
                        type="radio" 
                        class="btn-check declare_sinistre2ans" 
                        name="declare_sinistre2ans" 
                        id="nonSinistre" 
                        value="NON" 
                        v-model="formData.declare_sinistre2ans"
                    >
                    <label class="btn btn-outline-primary iconLabel" for="nonSinistre">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/zero.svg" alt="oui"></div>
                        <div>Aucun sinistre</div>
                    </label>
                </div>
            </div>
            <div class="col-6 mt-0">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input 
                        type="radio" 
                        class="btn-check declare_sinistre2ans" 
                        name="declare_sinistre2ans" 
                        id="ouiSinistre" 
                        value="OUI" 
                        v-model="formData.declare_sinistre2ans"
                    >
                    <label class="btn btn-outline-primary iconLabel" for="ouiSinistre">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/oneplus.svg" alt="non"></div>
                        <div>Un ou plusieurs</div>
                    </label>
                </div>
            </div>
            <div class="col-12">
                <label class="formLabel mb-3" for="resiliation">Avez-vous été résilié(e) par un assureur ?</label>
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-6">
                            <div class="btn-group formIconContainer miniClass" role="group" aria-label="Basic radio toggle button group">
                                <input 
                                    type="radio" 
                                    class="btn-check resilie_par_assureur3ans" 
                                    name="resilie_par_assureur3ans" 
                                    id="resnon" 
                                    value="NON" 
                                    v-model="formData.resilie_par_assureur3ans"
                                >
                                <label class="btn btn-outline-primary iconLabel" for="resnon">
                                    <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked"></div>
                                    <div class="twoBtns">Non</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="btn-group formIconContainer miniClass" role="group" aria-label="Basic radio toggle button group">
                                <input 
                                    type="radio" 
                                    class="btn-check resilie_par_assureur3ans" 
                                    name="resilie_par_assureur3ans" 
                                    id="resoui" 
                                    value="OUI" 
                                    v-model="formData.resilie_par_assureur3ans"
                                >
                                <label class="btn btn-outline-primary iconLabel" for="resoui">
                                    <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked"></div>
                                    <div class="twoBtns">Oui</div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <label class="formLabel mb-3" for="insert">Le bien est utilisé à des fins profesionnelles</label>
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-6">
                            <div class="btn-group formIconContainer miniClass" role="group" aria-label="Basic radio toggle button group">
                                <input 
                                    type="radio" 
                                    class="btn-check utilisations_professionnelles" 
                                    name="utilisations_professionnelles" 
                                    id="utilisations_professionnelles_non" 
                                    value="NON" 
                                    v-model="formData.utilisations_professionnelles"
                                >
                                <label class="btn btn-outline-primary iconLabel" for="utilisations_professionnelles_non">
                                    <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked"></div>
                                    <div class="twoBtns">Non</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="btn-group formIconContainer miniClass" role="group" aria-label="Basic radio toggle button group">
                                <input 
                                    type="radio" 
                                    class="btn-check utilisations_professionnelles" 
                                    name="utilisations_professionnelles" 
                                    id="utilisations_professionnelles_oui" 
                                    value="OUI" 
                                    v-model="formData.utilisations_professionnelles"
                                >
                                <label class="btn btn-outline-primary iconLabel" for="utilisations_professionnelles_oui">
                                    <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked"></div>
                                    <div class="twoBtns">Oui</div>
                                </label>
                            </div>
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

            <BonASavoir />
        </div>
    </form>
</template>

<script>
    import BonASavoir from '../components/BonASavoir.vue';
    import { useFormStore } from '@/stores/useFormStore';

    export default {
        components: {
            BonASavoir
        },
        data() {
            return {
                formData: {
                    declare_sinistre2ans: 'NON',
                    resilie_par_assureur3ans: 'NON',
                    utilisations_professionnelles: 'NON',
                }
            };
        },
        methods: {
            submitStep() {
                const formStore = useFormStore();
                formStore.updateStepData('step5', this.formData);
                formStore.nextStep();
            },
        },
    };
</script>