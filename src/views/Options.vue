<template>
    <header class="container-fluid">
        <div id="header-bar" class="container">
            <div class="row align-items-center">
                <div class="col-5 col-md-2 col-lg-2 col-xl-3 d-flex align-items-center">
                    <img src="../assets/icons/back.svg" alt="retour" class="slideback me-2" @click="prevStep">
                    <div class="d-none d-lg-block"><img src="../assets/images/logoAssur.png" width="169" height="35"
                            alt="Assurmabarak" class="img-fluid"></div>
                    <div class="d-block d-lg-none"><img src="../assets/images/logoAssur.png" width="44" height="36"
                            alt="Assurmabarak" class="img-fluid"></div>
                </div>
                <div class="col-md-8 col-lg-8 col-xl-6 d-none d-md-block">
                    <div class="row justify-content-center mb-0 d-none d-md-block align-items-center">
                        <div class="col-12">
                            <div class="progress Mobile">
                                <div class="progress-bar progressMobile" role="progressbar" style="width: 12.6%;"
                                    aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-7 col-md-2 col-lg-2 col-xl-3 text-end p-0">
                    <div class="questionLink d-flex justify-content-end align-items-center text-decoration-none">
                        <!-- <div class="questionTxt">Une question</div> -->
                        <div class="assistanteImg online" data-bs-toggle="modal" data-bs-target="#aide">
                            <p class="d-none d-md-none d-lg-none d-xl-block">Besoin d'aide ?</p>
                            <img src="../assets/icons/avatar.png" width="40" height="40" alt="image de l'assistante"
                                class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-none d-md-block d-lg-block">
                <div class="headerSepar"></div>
            </div>
        </div>
    </header>
    <form id="formulaire_form" action="#/devis/informations" method="POST"
        class="p-0">
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
                    <div class="col-12 mt-3">
                        <input type="checkbox" id="responsable" name="tarif_rachat_franchise" class="addon d-none"
                            value="3,20">
                        <label for="responsable" class="d-flex align-items-center osingle">
                            <div class="oicon">
                                <img src="../assets/icons/responsable.svg"
                                    alt="responsable">

                            </div>
                            <div class="d-flex align-items-center w-100 justify-content-between">
                                <div class="p-2">
                                    <div class="otitre">
                                        Rachat de franchise
                                    </div>
                                    <div class="odescription">
                                        L'option rachat de franchise permet de supprimer la franchise sur l'ensemble des
                                        garanties souscrites appart celle de catastrophes naturelles (franchise fixée
                                        par l'état).
                                    </div>
                                </div>
                                <div class="oprice d-flex">
                                    <div type="button" class="obtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16">
                                            <g id="Groupe_849" data-name="Groupe 849" transform="translate(-334 -391)">
                                                <circle id="lecercle" data-name="Ellipse 17" cx="8" cy="8" r="8"
                                                    transform="translate(334 391)" fill="#fff"></circle>
                                                <g id="plus" transform="translate(335.059 392.059)">
                                                    <g id="Groupe_848" data-name="Groupe 848"
                                                        transform="translate(2.603 2.603)">
                                                        <path id="leplus" data-name="Tracé 884"
                                                            d="M17.676,12.47h-3.47V9H12.47v3.47H9v1.735h3.47v3.47h1.735v-3.47h3.47Z"
                                                            transform="translate(-9 -9)" fill="#a1c84e"></path>
                                                    </g>
                                                    <path id="Tracé_885" data-name="Tracé 885" d="M0,0H13.881V13.881H0Z"
                                                        fill="none"></path>
                                                </g>
                                            </g>
                                        </svg>
                                        3,20 €<span>/mois</span>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>

                    <div class="col-12 mt-3">
                        <input type="checkbox" id="electric" name="tarif_dommage_electrique" class="addon d-none"
                            value="1,06">
                        <label for="electric" class="d-flex align-items-center osingle">
                            <div class="oicon">
                                <img src="../assets/icons/electric.svg"
                                    alt="electric">

                            </div>
                            <div class="d-flex align-items-center w-100 justify-content-between">
                                <div class="p-2">
                                    <div class="otitre">
                                        Dommages électriques
                                    </div>
                                    <div class="odescription">
                                        Couvre les dommages causés aux appareils électriques, électroniques,
                                        électroménagers et aux accessoires à l’intérieur du bien assuré.
                                    </div>
                                </div>
                                <div class="oprice d-flex">
                                    <div type="button" class="obtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16">
                                            <g id="Groupe_849" data-name="Groupe 849" transform="translate(-334 -391)">
                                                <circle id="lecercle" data-name="Ellipse 17" cx="8" cy="8" r="8"
                                                    transform="translate(334 391)" fill="#fff"></circle>
                                                <g id="plus" transform="translate(335.059 392.059)">
                                                    <g id="Groupe_848" data-name="Groupe 848"
                                                        transform="translate(2.603 2.603)">
                                                        <path id="leplus" data-name="Tracé 884"
                                                            d="M17.676,12.47h-3.47V9H12.47v3.47H9v1.735h3.47v3.47h1.735v-3.47h3.47Z"
                                                            transform="translate(-9 -9)" fill="#a1c84e"></path>
                                                    </g>
                                                    <path id="Tracé_885" data-name="Tracé 885" d="M0,0H13.881V13.881H0Z"
                                                        fill="none"></path>
                                                </g>
                                            </g>
                                        </svg>
                                        1,06 €<span>/mois</span>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>

                    <div class="col-12 mt-3">
                        <input type="checkbox" id="salle" name="tarif_location_salle" class="addon d-none" value="1,56">
                        <label for="salle" class="d-flex align-items-center osingle">
                            <div class="oicon">
                                <img src="../assets/icons/salle.svg"
                                    alt="salle">

                            </div>
                            <div class="d-flex align-items-center w-100 justify-content-between">
                                <div class="p-2">
                                    <div class="otitre">
                                        Location de salle
                                    </div>
                                    <div class="odescription">
                                        Garantit la salle louée ou déjà occupée à l’occasion d’une fête ou d’une réunion
                                        d’ordre familial ou privé comptant jusqu’à 150 personnes.
                                    </div>
                                </div>
                                <div class="oprice d-flex">
                                    <div type="button" class="obtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16">
                                            <g id="Groupe_849" data-name="Groupe 849" transform="translate(-334 -391)">
                                                <circle id="lecercle" data-name="Ellipse 17" cx="8" cy="8" r="8"
                                                    transform="translate(334 391)" fill="#fff"></circle>
                                                <g id="plus" transform="translate(335.059 392.059)">
                                                    <g id="Groupe_848" data-name="Groupe 848"
                                                        transform="translate(2.603 2.603)">
                                                        <path id="leplus" data-name="Tracé 884"
                                                            d="M17.676,12.47h-3.47V9H12.47v3.47H9v1.735h3.47v3.47h1.735v-3.47h3.47Z"
                                                            transform="translate(-9 -9)" fill="#a1c84e"></path>
                                                    </g>
                                                    <path id="Tracé_885" data-name="Tracé 885" d="M0,0H13.881V13.881H0Z"
                                                        fill="none"></path>
                                                </g>
                                            </g>
                                        </svg>
                                        1,56 €<span>/mois</span>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>

                    <div class="col-12 mt-3">
                        <input type="checkbox" id="maternite" name="tarif_assistance_maternelle" class="addon d-none"
                            value="2,54">
                        <label for="maternite" class="d-flex align-items-center osingle">
                            <div class="oicon">
                                <img src="../assets/icons/maternite.svg"
                                    alt="maternite" width="45px">

                            </div>
                            <div class="d-flex align-items-center w-100 justify-content-between">
                                <div class="p-2">
                                    <div class="otitre">
                                        Assistance maternelle
                                    </div>
                                    <div class="odescription">
                                        Couvre les dommages causés ou subis par les enfants qui vous sont confiés dans
                                        le cadre de votre activité professionnelle jusqu’à trois enfants gardés.
                                    </div>
                                </div>
                                <div class="oprice d-flex">
                                    <div type="button" class="obtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16">
                                            <g id="Groupe_849" data-name="Groupe 849" transform="translate(-334 -391)">
                                                <circle id="lecercle" data-name="Ellipse 17" cx="8" cy="8" r="8"
                                                    transform="translate(334 391)" fill="#fff"></circle>
                                                <g id="plus" transform="translate(335.059 392.059)">
                                                    <g id="Groupe_848" data-name="Groupe 848"
                                                        transform="translate(2.603 2.603)">
                                                        <path id="leplus" data-name="Tracé 884"
                                                            d="M17.676,12.47h-3.47V9H12.47v3.47H9v1.735h3.47v3.47h1.735v-3.47h3.47Z"
                                                            transform="translate(-9 -9)" fill="#a1c84e"></path>
                                                    </g>
                                                    <path id="Tracé_885" data-name="Tracé 885" d="M0,0H13.881V13.881H0Z"
                                                        fill="none"></path>
                                                </g>
                                            </g>
                                        </svg>
                                        2,54 €<span>/mois</span>
                                    </div>
                                </div>
                            </div>
                        </label>
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

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
    mounted() {
    },
    data() {
    },
    setup() {
    },
    methods: {
    }
};
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