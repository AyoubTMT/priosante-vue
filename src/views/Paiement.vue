<template>
    <my-header :progress="formStore.currentStep" :step="'paiement'"/>

    <form id="formulaire" class="p-0" @submit.prevent="accederAuDevis"
        method="POST">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 mt-3">
                    <h2 class="stepTitle mb-3">Informations de paiement</h2>
                    <p class="stepDescription mb-3 mb-md-0">
                        Veuillez renseigner votre relevé d'identité bancaire ainsi que le titulaire du compte.
                    </p>
                    <!-- <p>Votre contrat sera enregistré après le paiement de <span class="underligned bolder">la première cotisation.</span> .</p> -->
                </div>
            </div>
            <div class="row justify-content-center mt-3">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
                    <div class="apayer">
                        <div class="d-flex justify-content-between totalBloc">
                            <div><strong>A payer aujourd’hui :</strong></div>
                            <div class="leprix"><span>{{ formattedTarifWithTax }}</span></div>
                        </div>
                            
                        <strong class="addIcon d-flex gap-1"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="14" height="14" viewBox="0 0 32 32" version="1.1">
                                <path d="M29.005 5.5h-26.009c-1.657 0-3 1.343-3 3v15c0 1.657 1.343 3 3 3h26.009c1.657 0 3-1.343 3-3v-15c0-1.657-1.343-3-3-3zM2.995 7.5h26.009c0.552 0 1 0.448 1 1v2h-28.009v-2c0-0.552 0.449-1 1-1zM29.005 24.5h-26.009c-0.552 0-1-0.448-1-1v-9h28.009v9c0 0.552-0.448 1-1 1z"></path>
                            </svg>
                            Par chèque</strong>
                        <ul>
                            <li>La première échéance de {{ formattedTarif }}</li>
                            <li>La taxe attentat obligatoire de {{ formatTarifWithComma(taxe) }}</li>
                        </ul>
                        <div class="d-flex justify-content-between totalBloc mt-3">
                            <div><strong>Les échéances suivantes :</strong></div>
                            <div class="leprix"><span>{{ formattedTarif }}</span></div>
                        </div>
                        <strong class="addIcon d-flex gap-1">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8321 1.24802C11.5779 0.917327 12.4221 0.917327 13.1679 1.24802L21.7995 5.0754C23.7751 5.95141 23.1703 9 21.0209 9H2.97906C0.829669 9 0.224891 5.9514 2.20047 5.0754L10.8321 1.24802ZM12.3893 3.12765C12.1407 3.01742 11.8593 3.01742 11.6107 3.12765L3.41076 6.76352C3.31198 6.80732 3.34324 6.95494 3.45129 6.95494H20.5487C20.6568 6.95494 20.688 6.80732 20.5892 6.76352L12.3893 3.12765Z" fill="#0F0F0F"></path>
                                <path d="M2 22C2 21.4477 2.44772 21 3 21H21C21.5523 21 22 21.4477 22 22C22 22.5523 21.5523 23 21 23H3C2.44772 23 2 22.5523 2 22Z" fill="#0F0F0F"></path>
                                <path d="M11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V19Z" fill="#0F0F0F"></path>
                                <path d="M6 20C5.44772 20 5 19.5523 5 19L5 11C5 10.4477 5.44771 10 6 10C6.55228 10 7 10.4477 7 11L7 19C7 19.5523 6.55229 20 6 20Z" fill="#0F0F0F"></path>
                                <path d="M17 19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19V11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11V19Z" fill="#0F0F0F"></path>
                            </svg>
                            Par prèlevement bancaire</strong>
                        <ul>
                            <li>Le paiement des prochaines échéances</li>
                            <li>Le prélèvement est effectué le 10 du mois</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-3">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
                    <label class="formLabel d-block mb-2">Nom et prénom du titulaire</label>
                    <input type="text" id="titulaire" class="form-control" placeholder="Nom et prénom du titulaire" v-model="formData.titulaire_compte">

                    <label class="formLabel d-block mt-3 mb-2">Relevé d'identité bancaire (IBAN)</label>
                    <input type="text" id="IBAN" class="mb-3 form-control" :class="{ 'inputError': ibanError }" placeholder="---- ---- ---- ---- ---- ---- ---" name="IBAN" v-model="formData.iban" maxlength="33">
                    <div v-show="formSubmitted && ibanError" class="errorMsg">
                        <div class="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008" viewBox="0 0 10.497 10.008">
                                <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                    <g id="Page-1" transform="translate(30 591)">
                                        <g id="Alert" transform="translate(5 5)">
                                            <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)" fill="none"></rect>
                                            <path id="Path" d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z" transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                            <path id="Path-2" data-name="Path" d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z" transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                            <path id="Path-3" data-name="Path" d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z" transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p class="m-0 ms-2">Ce champ est requis</p>
                        </div>
                    </div>

                    <div class="form-check bgcheck mb-3" :class="declarationBlockClasses">
                        <input class="form-check-input" type="checkbox" id="declaration" v-model="formData.declaration">
                        <label class="form-check-label ms-3" for="declaration">
                            Je déclare avoir lu et pris connaissance des
                                <a href="https://self-assurance.fr/mimenteSelf/downloadFile?parameters=cHJvZHVpdD1GT1JNVUxFX01SSF9BUkVBU19TRUxGX0lOVEVSTkVUJmRvY3VtZW50VHlwZT1DT05ESVRJT05TX0dFTkVSQUxFUw%3D%3D" target="_blank">Conditions Générales</a> du contrat, le <a href="https://assurance-habitation.self-assurance.fr/devis/docs/IPID-MRH-AREAS-072020.pdf" target="_blank">document d'information normalisé</a> ainsi que du <a href="https://self-assurance.fr/mimenteSelf/downloadFile?parameters=cHJvZHVpdD1GT1JNVUxFX01SSF9BUkVBU19TRUxGX0lOVEVSTkVUJmRvY3VtZW50VHlwZT1UQUJMRUFVX0dBUkFOVElF" target="_blank">Tableau de Garanties</a>
                        <br><br>
                        Je déclare sincères et exacts les renseignements indiqués dans le cadre du processus de souscription en ligne, et que toute réticence, omission, fausse déclaration ou inexactitude peut entraîner soit la nullité du contrat, soit la réduction du montant des indemnités.
                        <br><br>
                        Je reconnais que les conseils reçus ont revêtu un caractère personnalisé, adapté à ma situation ainsi qu'à l'assurance de mes risques. 
                        <br><br>
                        Je bénéficie d'un délai de rétractation de 14 jours calendaires révolus à compter du jour de la conclusion du contrat.
                        </label>
                    </div>
                    <div v-show="formSubmitted && !formData.declaration" class="errorMsg">
                        <div class="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008" viewBox="0 0 10.497 10.008">
                                <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                    <g id="Page-1" transform="translate(30 591)">
                                        <g id="Alert" transform="translate(5 5)">
                                            <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)" fill="none"></rect>
                                            <path id="Path" d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z" transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                            <path id="Path-2" data-name="Path" d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z" transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                            <path id="Path-3" data-name="Path" d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z" transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p class="m-0 ms-2">Ce champ est requis</p>
                        </div>
                    </div>
    
        

                    <button  v-if="loadingDevis"  type="button" class="navBtn nextBtn mt-4 flex justify-center align-items-center">
                        <vue-spinner size="30" color="white" /></button>
                    <button v-else type="submit" class="navBtn nextBtn mt-4">Completer le devis </button>

                </div>
            </div>

            <div class="row justify-content-center mt-3">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 mt-4">
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

    import MyHeader from '../components/header.vue';

    import { useRouter } from 'vue-router';
    import { useFormStore } from '../stores/useFormStore';
    import { ref, reactive, computed } from 'vue';
    import axios from 'axios';
    import { toast } from 'vue3-toastify';
    import {VueSpinner} from 'vue3-spinners';


    const loadingDevis = ref(false);
    const router = useRouter();
    const formStore = useFormStore();
    const selectedTarif = formStore.getSelectedTarif;
    const selectedOptions = formStore.getSelectedTarifOptions;
    const ibanError = ref(false);
    const formSubmitted = ref(false);
    const formData = reactive({
        titulaire_compte: 'test test',
        iban: '',
        declaration: false
    });

    // calcul total tarif
    function updateTarifWithOptions() {
        let tarif = parseFloat(selectedTarif.tarif);
        console.log(selectedOptions);
        console.log(Object.values(selectedOptions));
        if (selectedOptions) {
            for (const option of Object.values(selectedOptions)) {
                if (selectedTarif.optionsCompatibles[option]) {
                    tarif += parseFloat(selectedTarif.optionsCompatibles[option]);
                }
            }
            formStore.finalTarif = tarif.toFixed(2);
        }
    }
    
    function formatTarifWithComma(tarif) {
        return parseFloat(tarif)
            .toLocaleString('fr-FR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                style: 'currency',
                currency: 'EUR'
            });
    }
    
    updateTarifWithOptions();
    const taxe = 6.5;
    const tarifWithTax = parseFloat(formStore.finalTarif) + taxe;
    const formattedTarif = formatTarifWithComma(formStore.finalTarif);
    const formattedTarifWithTax = formatTarifWithComma(tarifWithTax);
    
    // validate IBAN
    const isValidIBANNumber = (ibanValue) => {
        // Check if IBAN is empty or null
        if (!ibanValue || ibanValue.trim() === '') {
            return false; // No validation needed if the IBAN is empty
        }

        ibanValue = ibanValue.replace(/\s/g, "");
        const Countries = { al: 28, ad: 24, at: 20, az: 28, bh: 22, be: 16, ba: 20, br: 29, bg: 22, cr: 21, hr: 21, cy: 28, cz: 24, dk: 18, do: 28, ee: 20, fo: 18, fi: 18, fr: 27, ge: 22, de: 22, gi: 23, gr: 27, gl: 18, gt: 28, hu: 28, is: 26, ie: 22, il: 23, it: 27, jo: 30, kz: 20, kw: 30, lv: 21, lb: 28, li: 21, lt: 20, lu: 20, mk: 19, mt: 31, mr: 27, mu: 30, mc: 27, md: 24, me: 22, nl: 18, no: 15, pk: 24, ps: 29, pl: 28, pt: 25, qa: 29, ro: 24, sm: 27, sa: 24, rs: 22, sk: 24, si: 19, es: 24, se: 24, ch: 21, tn: 24, tr: 26, ae: 23, gb: 22, vg: 24};
        const Chars = { a: 10, b: 11, c: 12, d: 13, e: 14, f: 15, g: 16, h: 17, i: 18, j: 19, k: 20, l: 21, m: 22, n: 23, o: 24, p: 25, q: 26, r: 27, s: 28, t: 29, u: 30, v: 31, w: 32, x: 33, y: 34, z: 35};
        ibanValue = ibanValue.toLowerCase();
       
        const codeBanque = ibanValue.substr(4, 5);
        const codeGuichet = ibanValue.substr(9, 5);
        if (codeBanque === '16598' || (codeBanque === '10011' && codeGuichet === '00020')) {
            return false;
        }

        if (ibanValue.length === Countries[ibanValue.substr(0, 2)]) {
            let MovedChar = ibanValue.substr(4) + ibanValue.substr(0, 4);
            let MovedCharArray = MovedChar.split("");
            let NewString = "";

            for (let i = 0; i < MovedCharArray.length; i++) {
            if (!/^\d+$/.test(MovedCharArray[i])) {
                MovedCharArray[i] = Chars[MovedCharArray[i]];
            }
            NewString += MovedCharArray[i];
            }

            return mod97(NewString) === 1;
        }
        return false;
    };

    // Mod97 validation
    const mod97 = (string) => {
        let checksum = string;
        while (checksum.length > 2) {
            let block = checksum.substr(0, 9);
            checksum = (parseInt(block) % 97) + checksum.substr(block.length);
        }
        return parseInt(checksum) % 97;
    };

    const declarationBlockClasses = computed(() => ({
        'declarationBlock': formSubmitted.value && !formData.declaration,
        'red': formSubmitted.value && !formData.declaration 
    }));

    const saveDevis = async () => {
        
        const dataSave = formStore.getDataForSave;
        loadingDevis.value =true;
        await axios.post(import.meta.env.VITE_BASE_URL+'/api/save', dataSave)
        .then(response => {
            if (response.status === 200) {
                formStore.updateStepData('devisComplet', response.data.response);
                formStore.updateStepData('paiement', formData);
                formStore.nextStep();
                router.push('/devis/complet');
            }
        })
        .catch(({response}) => {
            toast.error('une erreur est survenue merci de réessayer plus tard');
            console.error('Error data:');
            console.log(response);
        }).finally(() => {
            loadingDevis.value =false;
        });
    };

    const accederAuDevis = async () => {
        formSubmitted.value = true;
        
        ibanError.value = formData.iban ? !isValidIBANNumber(formData.iban) : false;
        const isFormValid = formData.declaration && !ibanError.value;
        console.log(isFormValid ? "Form is valid" : "Form is not valid");

        if (isFormValid) {
            try {
                await saveDevis();
            } catch (error) {
                console.error("Error during saving devis:", error);
            }
        }
    };
</script>

<style>
    .declarationBlock.red {
        background-color: var(--color5) !important;
        border: 1px solid var(--color1) !important;
    }
    .declarationError {
        color: red;
    }
    .bgcheck a {
        text-decoration: underline;
        color: #000000;
        font-weight: 600;
    }
    .bgcheck a {
        text-decoration: underline;
        color: #000000;
        font-weight: 600;
    }
    .form-check {
        display: flex !important;
        align-items: center;
    }

    .form-check.bgcheck {
        display: flex !important;
        align-items: flex-start;
        background-color: #eaecf1;
        padding: 12px;
        border-radius: 10px;
        margin-top: 21px;
        font-size: 14px;
        border: 1px solid #dee2e6;
    }
    .form-check.bgcheck2 {
        display: flex !important;
        align-items: flex-start;
        background-color: #eaecf1;
        padding: 12px;
        border-radius: 10px;
        margin-top: 21px;
        font-size: 14px;
        border: 1px solid #dee2e6!important;
    }
    #formulaire .form-check input {
        padding: 10px !important;
        margin-right: 0px;
        margin-left: 0px;
        margin-top: 0;
    }
    #formulaire [type="checkbox"] {
        padding: 1px !important;
    }
    #formulaire input, #formulaire select {
        border-radius: 5px;
        padding: 13px 20px;
    }
</style>