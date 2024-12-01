<template>
    <label :for="option" class="d-flex align-items-center osingle">
        <div class="oicon">
            <img src="../../../assets/icons/maternite.svg"
                alt="maternite" width="45px">

        </div>
        <div class="d-flex align-items-center w-100 justify-content-between oicontent">
            <div  class="p-">
                <div class="otitre oitext">
                    Assistance maternelle
                </div>
                <div class="odescription oitext">
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
                    {{price}}  €<span>/mois</span>
                </div>
            </div>
        </div>
    </label>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const props = defineProps(['price','option'])

</script>
