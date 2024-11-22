<template>
    <form @submit.prevent="submitStep">
<section id="content">

     <input type="hidden" name="formule_choisie" value=""> 
     <input type="hidden" name="date_effet" value=""> 

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
              
                <div class="my-4 tarifPacks slick-initialized slick-slider"><button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="">Previous</button>
 
                       
                            <div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 1732px; transform: translate3d(0px, 0px, 0px);"><div class="tarifBox text-center recommanded slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 403px;" tabindex="0">
                               <div class="mb-0 recommandedBox">ECO</div> 
                                <div class="dateEffet mb-2 mt-2" data-bs-toggle="modal" data-bs-target="#dateEffet">A partir du : <span class="effetDate mx-2">22/11/2024</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.773" height="14.759" viewBox="0 0 14.773 14.759">
                                        <g id="edit" transform="translate(-0.02)">
                                          <path id="Tracé_231" data-name="Tracé 231" d="M12.947,14.759H1.867a1.779,1.779,0,0,1-1.306-.541A1.779,1.779,0,0,1,.02,12.912V1.832A1.756,1.756,0,0,1,.561.534,1.791,1.791,0,0,1,1.867,0h8.31L8.33,1.832H2.79a.88.88,0,0,0-.656.274.9.9,0,0,0-.267.649v9.233a.88.88,0,0,0,.274.656.9.9,0,0,0,.649.267h9.233a.912.912,0,0,0,.923-.923V6.449L14.793,4.6v8.31a1.847,1.847,0,0,1-1.847,1.847ZM4.637,8.065l2.077,2.077-3,.923Zm3,1.385L5.329,7.156,12.24.231a.855.855,0,0,1,1.169,0l1.14,1.154a.8.8,0,0,1,.238.57.773.773,0,0,1-.238.584Z" transform="translate(0)" fill="#a1c84e"></path>
                                        </g>
                                    </svg>                              
                                </div>
                                <div class="tarifPrice">
                                    <div class="price-rounded parmois">9</div>
                                    <div class="price-decimal">,21 €</div>
                                </div>
                                <div class="composants">
                                    <input type="hidden" name="garanties_ECO" value="{&quot;RACHAT_FRANCHISE&quot;:&quot;2,33&quot;,&quot;LOCATION_SALLE&quot;:&quot;1,56&quot;,&quot;ASSISTANCE_MATERNELLE&quot;:&quot;2,54&quot;}" tabindex="0">
                                    <input type="hidden" name="tarif_ECO" value="9,21" tabindex="0">
                                    <ul> 
                                        <li>Responsabilité civile <strong></strong></li>
                                        <li>Défense Pénale et Recours <strong></strong></li>
                                        <li>Incendie, risques annexes <strong></strong></li>
                                        <li>Dégâts des eaux <strong></strong></li>
                                        <li>Evènements climatiques <strong></strong></li>
                                        <li>Bris de glace <strong></strong></li>
                                        <li>Vol et vandalisme <strong></strong></li>
                                        <li class="uncheck">Dommages électriques <strong></strong></li> 

                                        <li>Capital mobilier Jusqu'à <strong>5 000 € / pièce</strong></li>

                                        <li class="uncheck">Objet de valeur <strong></strong></li>                                        
                                        <li class="uncheck">3 mois d’assurance OFFERTS* <strong></strong></li>

                                   
                                                </ul>
                                </div>
                                <div class="tarifActions">
                                    <a href="#" tabindex="0"><button class="standardBtn" onclick="goOptions('ECO')" tabindex="0">Souscrire en ligne</button></a>
                                    <a href="#ok" class="rdvAction" onclick="window.open('https://assurance-habitation.selfassurance.fr/devis/calendly', '_blank').focus();" tabindex="0">Prendre un rendez-vous</a>
                                </div>
                            </div><div class="tarifBox text-center slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 395.5px;" tabindex="0">
                               <div class="mb-0 tarifTitle">CONFORT</div> 
                                <div class="dateEffet mb-2 mt-2" data-bs-toggle="modal" data-bs-target="#dateEffet">A partir du : <span class="effetDate mx-2">22/11/2024</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.773" height="14.759" viewBox="0 0 14.773 14.759">
                                        <g id="edit" transform="translate(-0.02)">
                                          <path id="Tracé_231" data-name="Tracé 231" d="M12.947,14.759H1.867a1.779,1.779,0,0,1-1.306-.541A1.779,1.779,0,0,1,.02,12.912V1.832A1.756,1.756,0,0,1,.561.534,1.791,1.791,0,0,1,1.867,0h8.31L8.33,1.832H2.79a.88.88,0,0,0-.656.274.9.9,0,0,0-.267.649v9.233a.88.88,0,0,0,.274.656.9.9,0,0,0,.649.267h9.233a.912.912,0,0,0,.923-.923V6.449L14.793,4.6v8.31a1.847,1.847,0,0,1-1.847,1.847ZM4.637,8.065l2.077,2.077-3,.923Zm3,1.385L5.329,7.156,12.24.231a.855.855,0,0,1,1.169,0l1.14,1.154a.8.8,0,0,1,.238.57.773.773,0,0,1-.238.584Z" transform="translate(0)" fill="#a1c84e"></path>
                                        </g>
                                    </svg>                              
                                </div>
                                <div class="tarifPrice">
                                    <div class="price-rounded parmois">13</div>
                                    <div class="price-decimal">,73 €</div>
                                </div>
                                <div class="composants">
                                    <input type="hidden" name="garanties_CONFORT" value="{&quot;RACHAT_FRANCHISE&quot;:&quot;3,20&quot;,&quot;LOCATION_SALLE&quot;:&quot;1,56&quot;,&quot;ASSISTANCE_MATERNELLE&quot;:&quot;2,54&quot;,&quot;DOMMAGE_ELECTRIQUE&quot;:&quot;1,06&quot;}" tabindex="0">
                                    <input type="hidden" name="tarif_CONFORT" value="13,73" tabindex="0">
                                    <ul> 
                                        <li>Responsabilité civile <strong></strong></li>
                                        <li>Défense Pénale et Recours <strong></strong></li>
                                        <li>Incendie, risques annexes <strong></strong></li>
                                        <li>Dégâts des eaux <strong></strong></li>
                                        <li>Evènements climatiques <strong></strong></li>
                                        <li>Bris de glace <strong></strong></li>
                                        <li>Vol et vandalisme <strong></strong></li>
                                        <li class="uncheck">Dommages électriques <strong></strong></li> 

                                        <li>Capital mobilier Jusqu'à <strong>10 000 € / pièce</strong></li>

                                        <li>Objet de valeur à <strong>1 000 € / pièce</strong></li>                                        
                                        <li>3 mois d’assurance OFFERTS* <strong></strong></li>

                                   
                                                </ul>
                                </div>
                                <div class="tarifActions">
                                    <a href="#" tabindex="0"><button class="standardBtn" onclick="goOptions('CONFORT')" tabindex="0">Souscrire en ligne</button></a>
                                    <a href="#ok" class="rdvAction" onclick="window.open('https://assurance-habitation.selfassurance.fr/devis/calendly', '_blank').focus();" tabindex="0">Prendre un rendez-vous</a>
                                </div>
                            </div><div class="tarifBox text-center slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 395.5px;" tabindex="0">
                               <div class="mb-0 tarifTitle">OPTIMALE</div> 
                                <div class="dateEffet mb-2 mt-2" data-bs-toggle="modal" data-bs-target="#dateEffet">A partir du : <span class="effetDate mx-2">22/11/2024</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.773" height="14.759" viewBox="0 0 14.773 14.759">
                                        <g id="edit" transform="translate(-0.02)">
                                          <path id="Tracé_231" data-name="Tracé 231" d="M12.947,14.759H1.867a1.779,1.779,0,0,1-1.306-.541A1.779,1.779,0,0,1,.02,12.912V1.832A1.756,1.756,0,0,1,.561.534,1.791,1.791,0,0,1,1.867,0h8.31L8.33,1.832H2.79a.88.88,0,0,0-.656.274.9.9,0,0,0-.267.649v9.233a.88.88,0,0,0,.274.656.9.9,0,0,0,.649.267h9.233a.912.912,0,0,0,.923-.923V6.449L14.793,4.6v8.31a1.847,1.847,0,0,1-1.847,1.847ZM4.637,8.065l2.077,2.077-3,.923Zm3,1.385L5.329,7.156,12.24.231a.855.855,0,0,1,1.169,0l1.14,1.154a.8.8,0,0,1,.238.57.773.773,0,0,1-.238.584Z" transform="translate(0)" fill="#a1c84e"></path>
                                        </g>
                                    </svg>                              
                                </div>
                                <div class="tarifPrice">
                                    <div class="price-rounded parmois">17</div>
                                    <div class="price-decimal">,52 €</div>
                                </div>
                                <div class="composants">
                                    <input type="hidden" name="garanties_OPTIMALE" value="{&quot;RACHAT_FRANCHISE&quot;:&quot;3,50&quot;,&quot;LOCATION_SALLE&quot;:&quot;1,56&quot;,&quot;ASSISTANCE_MATERNELLE&quot;:&quot;2,54&quot;}" tabindex="0">
                                    <input type="hidden" name="tarif_OPTIMALE" value="17,52" tabindex="0">
                                    <ul> 
                                        <li>Responsabilité civile <strong></strong></li>
                                        <li>Défense Pénale et Recours <strong></strong></li>
                                        <li>Incendie, risques annexes <strong></strong></li>
                                        <li>Dégâts des eaux <strong></strong></li>
                                        <li>Evènements climatiques <strong></strong></li>
                                        <li>Bris de glace <strong></strong></li>
                                        <li>Vol et vandalisme <strong></strong></li>
                                        <li>Dommages électriques <strong></strong></li> 

                                        <li>Capital mobilier Jusqu'à <strong>10 000 € / pièce</strong></li>

                                        <li>Objet de valeur à <strong>1 000 € / pièce</strong></li>                                        
                                        <li>3 mois d’assurance OFFERTS* <strong></strong></li>

                                   
                                                </ul>
                                </div>
                                <div class="tarifActions">
                                    <a href="#" tabindex="0"><button class="standardBtn" onclick="goOptions('OPTIMALE')" tabindex="0">Souscrire en ligne</button></a>
                                    <a href="#ok" class="rdvAction" onclick="window.open('https://assurance-habitation.selfassurance.fr/devis/calendly', '_blank').focus();" tabindex="0">Prendre un rendez-vous</a>
                                </div>
                            </div><div class="tarifBox text-center slick-slide" data-slick-index="3" aria-hidden="true" style="width: 395.5px;" tabindex="-1">
                               <div class="mb-0 tarifTitle">PREMIUM</div> 
                                <div class="dateEffet mb-2 mt-2" data-bs-toggle="modal" data-bs-target="#dateEffet">A partir du : <span class="effetDate mx-2">22/11/2024</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.773" height="14.759" viewBox="0 0 14.773 14.759">
                                        <g id="edit" transform="translate(-0.02)">
                                          <path id="Tracé_231" data-name="Tracé 231" d="M12.947,14.759H1.867a1.779,1.779,0,0,1-1.306-.541A1.779,1.779,0,0,1,.02,12.912V1.832A1.756,1.756,0,0,1,.561.534,1.791,1.791,0,0,1,1.867,0h8.31L8.33,1.832H2.79a.88.88,0,0,0-.656.274.9.9,0,0,0-.267.649v9.233a.88.88,0,0,0,.274.656.9.9,0,0,0,.649.267h9.233a.912.912,0,0,0,.923-.923V6.449L14.793,4.6v8.31a1.847,1.847,0,0,1-1.847,1.847ZM4.637,8.065l2.077,2.077-3,.923Zm3,1.385L5.329,7.156,12.24.231a.855.855,0,0,1,1.169,0l1.14,1.154a.8.8,0,0,1,.238.57.773.773,0,0,1-.238.584Z" transform="translate(0)" fill="#a1c84e"></path>
                                        </g>
                                    </svg>                              
                                </div>
                                <div class="tarifPrice">
                                    <div class="price-rounded parmois">19</div>
                                    <div class="price-decimal">,35 €</div>
                                </div>
                                <div class="composants">
                                    <input type="hidden" name="garanties_PREMIUM" value="{&quot;RACHAT_FRANCHISE&quot;:&quot;4,01&quot;,&quot;LOCATION_SALLE&quot;:&quot;1,56&quot;,&quot;ASSISTANCE_MATERNELLE&quot;:&quot;2,54&quot;}" tabindex="-1">
                                    <input type="hidden" name="tarif_PREMIUM" value="19,35" tabindex="-1">
                                    <ul> 
                                        <li>Responsabilité civile <strong></strong></li>
                                        <li>Défense Pénale et Recours <strong></strong></li>
                                        <li>Incendie, risques annexes <strong></strong></li>
                                        <li>Dégâts des eaux <strong></strong></li>
                                        <li>Evènements climatiques <strong></strong></li>
                                        <li>Bris de glace <strong></strong></li>
                                        <li>Vol et vandalisme <strong></strong></li>
                                        <li>Dommages électriques <strong></strong></li> 

                                        <li>Capital mobilier Jusqu'à <strong>10 000 € / pièce</strong></li>

                                        <li>Objet de valeur à <strong>1 500 € / pièce </strong></li>                                        
                                        <li>3 mois d’assurance OFFERTS* <strong></strong></li>

                                   
                                                </ul>
                                </div>
                                <div class="tarifActions">
                                    <a href="#" tabindex="-1"><button class="standardBtn" onclick="goOptions('PREMIUM')" tabindex="-1">Souscrire en ligne</button></a>
                                    <a href="#ok" class="rdvAction" onclick="window.open('https://assurance-habitation.selfassurance.fr/devis/calendly', '_blank').focus();" tabindex="-1">Prendre un rendez-vous</a>
                                </div>
                            </div></div></div>
                       
                            
                       
                            
                       
                            
                    
                 
                <button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false">Next</button></div>


                <div class="row mb-5 justify-content-center">
                    <div class="col-12">
                        <div class="separ"></div>
                    </div>
                    <div class="col-10 col-md-3 mb-3 mb-md-0 text-md-center text-center">
                        <a href="https://self-assurance.fr/mimenteSelf/downloadFile?parameters=cHJvZHVpdD1GT1JNVUxFX01SSF9BUkVBU19TRUxGX0lOVEVSTkVUJmRvY3VtZW50VHlwZT1DT05ESVRJT05TX0dFTkVSQUxFUw%3D%3D" class="fileDownload" target="_blank"><img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/pdffile.svg" alt="downloadFile"> Conditions Générales</a>
                    </div>
                    <div class="col-10 col-md-3 mb-3 mb-md-0 text-md-center text-center">
                        <a href="https://assurance-habitation.self-assurance.fr/devis/docs/IPID-MRH-AREAS-072020.pdf" class="fileDownload" target="_blank"><img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/pdffile.svg" alt="downloadFile"> Document d'information IPID</a>
                    </div>
                    <div class="col-10 col-md-3 mb-3 mb-md-0 text-md-center text-center">
                        <a href="https://self-assurance.fr/mimenteSelf/downloadFile?parameters=cHJvZHVpdD1GT1JNVUxFX01SSF9BUkVBU19TRUxGX0lOVEVSTkVUJmRvY3VtZW50VHlwZT1UQUJMRUFVX0dBUkFOVElF" class="fileDownload" target="_blank"><img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/pdffile.svg" alt="downloadFile"> Tableau des garanties</a>
                    </div>
                </div>

            </div>
        </section>
        <div class="row g-3 g-md-4">
            step8
            <div class="col-12 mt-0">
                <div class="container-fluid p-0">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <button type="submit" class="navBtn nextBtn mt-4 flex justify-center align-items-center">Étape suivante <img src="../assets/icons/arrow-next.svg" alt="suivant" class="ms-3 img-fluid"></button>
                        </div>
                        <div class="col-12 text-center">
                            <!-- <a class="backLink" onclick="goBack()"><img src="../assets/icons/back-arrow.svg" alt="back" class="img-fluid me-3"> Retour</a> -->
                        </div>
                    </div>
                </div>
            </div>
            <BonASavoir remarque="texte." />
        </div>
    </form>
  </template>
  
  <script setup>
    import BonASavoir from '../components/BonASavoir.vue';
    import { useFormStore } from '@/stores/useFormStore';
    import { ref, reactive } from 'vue'


            const formStore = useFormStore();
            const responseData = formStore.responseData;
            const responseError = formStore.responseError;


            function submitStep() {
                // const formStore = useFormStore();
                // formStore.updateStepData('step8', localData);
                // formStore.nextStep();
            }

  </script>
  