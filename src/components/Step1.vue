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
                    <input type="radio" class="btn-check type_habitation" name="type_habitation" value="APPARTEMENT" id="appartement" autocomplete="off" v-model="localData.type_habitation">
                    <label class="btn btn-outline-primary iconLabel" for="appartement">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/appartement.svg" alt="appartement"></div>
                        <div>Appartement</div>
                    </label>
                </div>
            </div>
            <div class="col-6 mt-0">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check type_habitation" name="type_habitation" value="MAISON" id="maison" autocomplete="off" v-model="localData.type_habitation">
                    <label class="btn btn-outline-primary iconLabel" for="maison">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/maison.svg" alt="maison"></div>
                        <div>Maison</div>
                    </label>
                </div>
            </div>
            <div class="col-6">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check type_habitation" name="type_habitation" value="STUDIO" id="studio" autocomplete="off" v-model="localData.type_habitation">
                    <label class="btn btn-outline-primary iconLabel" for="studio">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/studio.svg" alt="studio"></div>
                        <div>Studio</div>
                    </label>
                </div>
            </div>
            <div class="col-6">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check type_habitation" name="type_habitation" value="AUTRE" id="autre" autocomplete="off" v-model="localData.type_habitation">
                    <label class="btn btn-outline-primary iconLabel" for="autre">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked"></div>
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
                    <div class="errorMsg">
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
                                <p class="m-0 ms-2">Une ville doit être sélectionnée.</p>
                            </div>
                        </div>
                    </div>
                
                <div class="errorMsg">
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
                <button type="submit" class="navBtn firstBtn mt-4">Votre devis en 2 minutes</button>
            </div>
            <div class="col-12 text-center mb-3 mt-3 d-flex align-items-center justify-content-center">
                <img src="../assets/icons/googlereviews.svg" width="222" height="22" alt="google reviews">
            </div>
            <div class="col-12">
                <div class="separateur"></div>
                <div class="bonasavoir">
                    <div class="me-3">
                        <img src="../assets/icons/idea.svg" alt="Bon a savoir" width="37" height="36">
                    </div>
                    <div>
                        <h5>Bon à savoir</h5>
                        <p class="m-0">Déjà assuré(e) ailleurs ? ASSURMABARK peut s’occuper de résilier votre ancien contrat gratuitement.</p>
                    </div>
                </div>
                <div class="separateur"></div>
                <div class="assurmabarak">
                    <p>
                        ASSURMABARK est une marque de GLS LASSURANCES. Les informations recueillies par GLS LASSURANCES, Courtier en assurance, société anonyme immatriculée au RCS de Paris sous le numéro 483 666 137, et dont le siège social est au 45 rue de Boulainvilliers 75016 Paris font l'objet d'un traitement informatique afin d'établir votre devis/contrat. Le destinataire des données est le personnel habilité de GLS LASSURANCES. Reportez-vous à nos Mentions légales et notre politique de confidentialité des données.
                    </p>
                    <p>Chaque adresse représente un niveau de risque différent</p>
                    <p>Les dépendances et annexes sont tous les locaux qui ne sont pas à usage d’habitation, communiquant ou non avec l’habitation (buanderie, cellier, remise, débarras, les abris de jardin, cave, les combles et le sous-sol).</p>
                    <p>Dès lors que vous utilisez votre logement dans le cadre de vos activités professionnelles et/ou que vous y recevez des clients (même de manière occasionnelle), vous devez répondre positivement à cette question.
                        Petite précision : vous ne devez pas prendre en compte le télétravail.</p>
                    <p>Le mobilier correspond à vos meubles, équipement électroménager. Les objets de valeur correspondent à vos bijoux, montres…</p>
                    <p>La protection de vos données est l'une de nos priorités. Toutes vos données personnelles, notamment relatives à des infractions et condamnations pénales, sont 100% sécurisées.</p>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    props: ['prevStep'],
    data() {
        return {
            localData: {
                type_habitation: "APPARTEMENT", // Default value
                assured: "NON", // Default value
            },
        };
    },
    methods: {
        prevStep() {
            this.$router.push('/');
        },
        submitStep() {
            console.log(this.localData);
            // Handle form submission
        },
    },
};
</script>
