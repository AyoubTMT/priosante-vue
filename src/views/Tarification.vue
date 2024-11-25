<template>
     <my-header :progress="formStore.currentStep" :step="'tarification'"/>

    <form @submit.prevent="submitStep">


             
        <section id="content">
            <div class="container container-md-fluid container-lg-fluid container-xl">
                <div class="row justify-content-center mb-0 mb-lg-4 d-block d-md-none">
                    <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
                        <div class="progress Mobile">
                            <div class="progress-bar progressMobile" role="progressbar" style="width: 76.8%;" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mt-3">
                        <h2 class="stepTitle mb-3">Votre devis personnalisé</h2>
                        <p class="stepDescription mb-3 mb-md-0">
                            Les offres qui se rapprochent le plus de vos besoins et de votre budget.
                        </p>
                        <p>Vous trouverez le détail dans <span class="underligned bolder recap" data-bs-toggle="modal" data-bs-target="#recapitulatif">Récapitulatif</span> au regard des besoins exprimés.</p>
                    </div>
                </div>

                <div class="my-4">
                    <carousel :items-to-show="3" :wrap-around="true" >
                        <slide v-for="tarif in tarifs" :key="tarif.formule">
                            <my-slide :tarif="tarif" :dateEffet="dateEffet"/>
                        </slide>
                        <template #addons>
                            <navigation />
                        </template>
                    </carousel>
                </div>

                <div class="row mb-5 justify-content-center">
                    <div class="col-12">
                        <div class="separ"></div>
                    </div>
                    <div class="col-10 col-md-3 mb-3 mb-md-0 text-md-center text-center">
                        <a href="https://self-assurance.fr/mimenteSelf/downloadFile?parameters=cHJvZHVpdD1GT1JNVUxFX01SSF9BUkVBU19TRUxGX0lOVEVSTkVUJmRvY3VtZW50VHlwZT1DT05ESVRJT05TX0dFTkVSQUxFUw%3D%3D" class="fileDownload" target="_blank"><img src="../assets/icons/pdffile.svg" alt="downloadFile">Conditions Générales</a>
                    </div>
                    <div class="col-10 col-md-3 mb-3 mb-md-0 text-md-center text-center">
                        <a href="https://assurance-habitation.self-assurance.fr/devis/docs/IPID-MRH-AREAS-072020.pdf" class="fileDownload" target="_blank"><img src="../assets/icons/pdffile.svg" alt="downloadFile"> Document d'information IPID</a>
                    </div>
                    <div class="col-10 col-md-3 mb-3 mb-md-0 text-md-center text-center">
                        <a href="https://self-assurance.fr/mimenteSelf/downloadFile?parameters=cHJvZHVpdD1GT1JNVUxFX01SSF9BUkVBU19TRUxGX0lOVEVSTkVUJmRvY3VtZW50VHlwZT1UQUJMRUFVX0dBUkFOVElF" class="fileDownload" target="_blank"><img src="../assets/icons/pdffile.svg" alt="downloadFile"> Tableau des garanties</a>
                    </div>
                </div>

            </div>
        </section> 

        <section class="explications">
            <div class="container py-3 py-md-5">
                <div class="row">
                    <!-- Assuré -->
                    <div class="col-12">
                        <div class="container-fluid p-0">
                            <div class="row justify-content-center">
                                <div class="col-12 mt-2 mb-3">
                                    <h2 class="stepTitle text-center">Ce qui est <span class="underligned bolder">assuré</span></h2>
                                    <!-- <p>LES GARANTIES SYSTEMATIQUEMENT PREVUES</p> -->
                                </div>
                                <div class="col-md-6 col-lg-3 my-md-5">
                                    <div class="assured">
                                        <div class="assuredIconBig">
                                            <img src="../assets/icons/incendie.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText text-center">
                                            <strong>Fumée et incendie</strong>
                                            <p class="miniText text-center">Vous êtes couvert en cas d'incendie, d'explosion et de fumées accidentelles. Les dégâts occasionnés par les pompiers sont également couverts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 my-md-5">
                                    <div class="assured">
                                        <div class="assuredIconBig">
                                            <img src="../assets/icons/eau.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText text-center">
                                            <strong>Dégâts des eaux</strong>
                                            <p class="miniText text-center">Vous êtes couvert en cas de fuite d'eau, de débordement et d'infiltration. Par exemple en cas de rupture d’une canalisation intérieure, de la fuite d’un lave-linge, d’un lavabo ou d'une infiltration à travers votre toiture.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 my-md-5">
                                    <div class="assured">
                                        <div class="assuredIconBig">
                                            <img src="../assets/icons/civil.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText text-center">
                                            <strong>Responsabilités civiles</strong>
                                            <p class="miniText text-center">Vous et vos co-assurés êtes couverts pour les dommages que vous pourriez causer aux autres.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 my-md-5">
                                    <div class="assured">
                                        <div class="assuredIconBig">
                                            <img src="../assets/icons/storm.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText text-center">
                                            <strong>Tempêtes et catastrophes natuelles</strong>
                                            <p class="miniText text-center">Vous êtes couvert en cas de tempête, de grêle, de neige et de gel, mais aussi de catastrophe naturelle déclarée par l'État.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 my-md-5">
                                    <div class="assured">
                                        <div class="assuredIconBig">
                                            <img src="../assets/icons/vol.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText text-center">
                                            <strong>Vol et vandalisme</strong>
                                            <p class="miniText text-center">
                                                Vous êtes couvert en cas de vol et vandalisme commis à l’intérieur de votre habitation, notamment par effraction, escalade ou usage de fausses clés. Les dommages subis par votre logement, la détérioration et la perte de vos biens sont couverts
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 my-md-5">
                                    <div class="assured">
                                        <div class="assuredIconBig">
                                            <img src="../assets/icons/brise.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText text-center">
                                            <strong>Bris de glace et sanitaire</strong>
                                            <p class="miniText text-center">
                                                Vous êtes indemnisé si vous cassez involontairement une vitre, vos toilettes ou votre lavabo par exemple.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 my-md-5">
                                    <div class="assured">
                                        <div class="assuredIconBig">
                                            <img src="../assets/icons/defense.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText text-center">
                                            <strong>Défenses pénales et recours</strong>
                                            <p class="miniText text-center">
                                                En prolongement de la Responsabilité civile, la défense pénale permet de défendre vos droits. Nous assurons votre défense en cas de poursuite judiciaire contre vous et nous nous chargeons de vos réclamations si vous êtes victimes de dommages pour tous les événements.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 my-md-5">
                                    <div class="assured">
                                        <div class="assuredIconBig">
                                            <img src="../assets/icons/electronic.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText text-center">
                                            <strong>Catastrophes technologiques et terrorisme</strong>
                                            <p class="miniText text-center">
                                                Vous êtes couvert en cas d'incendie ou d'explosion suite à un acte de terrorisme ou à une catastrophe technologique reconnu par l'État.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container py-5">
                <div class="row">
                    <!-- Optionnel -->
                    <div class="col-12 mt-5">
                        <div class="container-fluid p-0">
                            <div class="row">
                                <div class="col-12 mt-2 mb-5">
                                    <h2 class="stepTitle text-center">Ce qui <span class="underligned bolder">est optionnel</span></h2>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/option.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Vol et actes de vandalisme</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/option.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Bris de glace</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/option.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Séjours-voyages</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/option.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Dommages électriques</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/option.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Bris de glace aux vérandas</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/option.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Responsabilité civile Piscine/tennis</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/option.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Jardins et biens extérieurs</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/option.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Dommages matériels aux piscines</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/option.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Assurance scolaire</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/option.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Assistante maternelle</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Non Assuré -->
                    <div class="col-12 mt-5">
                        <div class="container-fluid p-0">
                            <div class="row">
                                <div class="col-12 mt-2 mb-5">
                                    <h2 class="stepTitle text-center">Ce qui <span class="underligned red bolder">n'est pas assuré</span></h2>
                                    <!-- <p>LES GARANTIES SYSTEMATIQUEMENT PREVUES</p> -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/nonassurer.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Les caravanes et leur contenu</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/nonassurer.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Les marchandises professionnelles</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/nonassurer.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Les biens professionnels</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="nonassured">
                                        <div class="assuredIcon">
                                            <img src="../assets/icons/nonassurer.svg" alt="assurer" class="img-fluid">
                                        </div>
                                        <div class="assuredText">Les biens n’appartenant pas à l’assuré ou aux occupants du bien assuré</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Exclusions -->
                    <div class="col-12 mt-5">
                        <div class="container-fluid p-0">
                            <div class="row justify-content-center">
                                <div class="col-12 mt-2 mb-5">
                                    <h2 class="stepTitle text-center mb-5">Y a-t-il des <span class="underligned bolder yellow">exclusions</span> ?</h2>
                                    <!-- <p>LES GARANTIES SYSTEMATIQUEMENT PREVUES</p> -->
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="nonassured">
                                                        <div class="assuredIcon">
                                                            <img src="../assets/icons/info.svg" alt="assurer" class="img-fluid">
                                                        </div>
                                                        <div class="assuredText">Le fait intentionnel du souscripteur</div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="nonassured">
                                                        <div class="assuredIcon">
                                                            <img src="../assets/icons/info.svg" alt="assurer" class="img-fluid">
                                                        </div>
                                                        <div class="assuredText">Les dommages consécutifs à une guerre</div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="nonassured">
                                                        <div class="assuredIcon">
                                                            <img src="../assets/icons/info.svg" alt="assurer" class="img-fluid">
                                                        </div>
                                                        <div class="assuredText">Les dommages dus au défaut d’entretien ou de réparation
                                                            indispensable</div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="nonassured">
                                                        <div class="assuredIcon">
                                                            <img src="../assets/icons/info.svg" alt="assurer" class="img-fluid">
                                                        </div>
                                                        <div class="assuredText">La responsabilité civile des chasseurs.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-12 mb-5">
                                            <h2 class="stepTitle text-center">Y a-t-il des <span class="underligned bolder yellow">restrictions</span> ?</h2>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="nonassured">
                                                <div class="assuredIcon">
                                                    <img src="../assets/icons/info.svg" alt="assurer" class="img-fluid">
                                                </div>
                                                <div class="assuredText">Une somme peut rester à la charge de l’assuré (franchise)</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="nonassured">
                                                <div class="assuredIcon">
                                                    <img src="../assets/icons/info.svg" alt="assurer" class="img-fluid">
                                                </div>
                                                <div class="assuredText">Réduction d’indemnité en cas de vol si les mesures de protection
                                                    prévues au contrat ne sont pas utilisées ou non présentes</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="nonassured">
                                                <div class="assuredIcon">
                                                    <img src="../assets/icons/info.svg" alt="assurer" class="img-fluid">
                                                </div>
                                                <div class="assuredText">Réduction d’indemnité en cas de dégâts des eaux si les mesures de
                                                    prévention prévues au contrat n’ont pas été mises en place</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-5">
                        <div class="assurmabarak">
                        <p>
                            ASSURMABARK est une marque de GLS LASSURANCES. Les informations recueillies par GLS LASSURANCES, Courtier en
                            assurance, société anonyme immatriculée au RCS de Paris sous le numéro 483 666 137, et dont le siège social est
                            au 45 rue de Boulainvilliers 75016 Paris font l'objet d'un traitement informatique afin d'établir votre
                            devis/contrat. Le destinataire des données est le personnel habilité de GLS LASSURANCES. Reportez-vous à nos
                            Mentions légales et notre politique de confidentialité des données.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </form>
</template>

<script setup>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import { useFormStore } from '../stores/useFormStore';
    import { useRouter } from 'vue-router';
    import MySlide from '../components/slide.vue';
    import MyHeader from '../components/header.vue';

    const formStore = useFormStore();
    const router = useRouter();

    const tarifs = formStore.getTarifs;
    const dateEffet = formStore.getDateEffet;


    function prevStep() { 
        this.formStore.prevStep(this.router);
    };
</script>
 
<style>
    .assurmabarak p {
        color: #6b6b6b;
        font-size: 12px;
    }
    .assurmabarak {
        margin: 15px 0;
        text-align: justify;
    }
    span.underligned.red:after {
        background: var(--color6);
        opacity: 0.4;
    }
    span.underligned.yellow:after {
        background: #f97316;
        opacity: 0.4;
    }
    .assuredIcon {
        margin-right: 10px;
        min-width: 37px !important;
        max-width: 37px !important;
    }
    .nonassured {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        min-height: 72px;
    }
    .miniText {
        color: #a7a7a7;
        font-size: 14px;
    }
    .assuredIconBig {
        min-height: 60px;
        max-height: 60px;
        margin-bottom: 20px;
    }
    .assured {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        min-height: 72px;
        flex-wrap: wrap;
        flex-direction: column;
    }
    span.underligned:after {
        content: "";
        display: block;
        background: var(--color3);
        width: 104%;
        height: 8px;
        position: relative;
        top: -11px;
        right: 4px;
        margin-bottom: -11px;
        z-index: -1;
        border-radius: 50px;
        opacity: 1;
    }
    span.underligned.bolder {
        font-weight: bold;
    }
    span.underligned {
        display: inline-block;
        color: #000;
        font-weight: 600;
        position: relative;
        z-index: 2;
    }
    .fileDownload img {
        width: 16px;
    }
    .fileDownload img {
        margin-right: 10px;
    }
    .fileDownload {
        display: inline-flex;
        text-decoration: none;
        color: #959595;
        font-size: 15px;
    }
    .stepTitle {
        font-weight: bold;
        font-size: 21px;
    }
    #header-bar {
        padding: 6px 0;
    }
    @media (min-width: 576px) {
        .container, .container-sm {
            max-width: 540px;
        }
    }
    @media (min-width: 768px) {
        .container, .container-md, .container-sm {
            max-width: 720px;
        }
    }
    @media (min-width: 992px) {
        .container, .container-lg, .container-md, .container-sm {
            max-width: 960px;
        }
    }
    @media (min-width: 1200px) {
        .container, .container-lg, .container-md, .container-sm, .container-xl {
            max-width: 1140px;
        }
    }
    @media (min-width: 1400px) {
        .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
            max-width: 1320px;
        }
    }
    .progress, .progress-stacked {
        --bs-progress-height: 1rem;
        --bs-progress-font-size: 0.75rem;
        --bs-progress-bg: var(--bs-secondary-bg);
        --bs-progress-border-radius: var(--bs-border-radius);
        --bs-progress-box-shadow: var(--bs-box-shadow-inset);
        --bs-progress-bar-color: #fff;
        --bs-progress-bar-bg: #0d6efd;
        --bs-progress-bar-transition: width 0.6s ease;
        display: flex;
        height: var(--bs-progress-height);
        overflow: hidden;
        font-size: var(--bs-progress-font-size);
        background-color: var(--bs-progress-bg);
        border-radius: var(--bs-progress-border-radius);
    }
    .progress {
        background-color: #e0e0e0;
    }
    .progressMobile, .progress {
        height: 4px !important;
    }
    .progress-bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        color: var(--bs-progress-bar-color);
        text-align: center;
        white-space: nowrap;
        background-color: var(--bs-progress-bar-bg);
        transition: var(--bs-progress-bar-transition);
    }
    .progressMobile {
        border-radius: 50px;
        background: var(--color-limouni) !important;
    }
    .progressMobile, .progress {
        height: 4px !important;
    }
    .questionLink {
        color: var(--color4);
    }
    .assistanteImg {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .assistanteImg p {
        margin: 0;
        margin-right: 2px;
    }
    .assistanteImg img {
        width: 40px;
        margin-top: 3px;
    }
    .img-fluid {
        max-width: 100%;
        height: auto;
    }
    img, svg {
        vertical-align: middle;
    }
    .assistanteImg:after {
        content: "";
        width: 14px;
        height: 14px;
        background: var(--green1);
        display: inline-block;
        border-radius: 100%;
        border: 2px solid #fff;
        position: relative;
        top: 14px;
        right: 10px;
    }
    @media (min-width: 768px) {
        .d-md-block {
            display: block !important;
        }
    }
    @media (min-width: 992px) {
        .d-lg-block {
            display: block !important;
        }
    }
    .headerSepar {
        height: 1px;
        background-color: #e9e9e9;
        width: 100%;
        margin-top: 13px !important;
    }
</style>