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
    <form id="formulaire" class="p-0" action="#/devis/paiement"
        method="POST">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 mt-3">
                    <h2 class="stepTitle mb-3">Informations de paiement</h2>
                    <p class="stepDescription mb-3 mb-md-0">
                        Veuillez renseigner votre relevé d'identité bancaire ainsi que le titulaire du compte.
                    </p>
                    <p>Votre contrat sera enregistré après le paiement de <span class="underligned bolder">la première cotisation.</span> .</p>
                </div>
            </div>
            <div class="row justify-content-center mt-3" bis_skin_checked="1">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6" bis_skin_checked="1">
                    <div class="apayer" bis_skin_checked="1">
                        <div class="d-flex justify-content-between totalBloc" bis_skin_checked="1">
                            <div bis_skin_checked="1"><strong>A payer aujourd’hui :</strong></div>
                            <div class="leprix" bis_skin_checked="1"><span>20,23 €</span></div>
                        </div>
                            
                        <strong class="addIcon"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="14" height="14" viewBox="0 0 32 32" version="1.1">
                                <path d="M29.005 5.5h-26.009c-1.657 0-3 1.343-3 3v15c0 1.657 1.343 3 3 3h26.009c1.657 0 3-1.343 3-3v-15c0-1.657-1.343-3-3-3zM2.995 7.5h26.009c0.552 0 1 0.448 1 1v2h-28.009v-2c0-0.552 0.449-1 1-1zM29.005 24.5h-26.009c-0.552 0-1-0.448-1-1v-9h28.009v9c0 0.552-0.448 1-1 1z"></path>
                            </svg>
                            Par carte bancaire</strong>
                        <ul>
                            <li>La première échéance de 13,73 €</li>
                            <li>La taxe attentat obligatoire de 6,50 €</li>
                        </ul>
                        <div class="d-flex justify-content-between totalBloc mt-3" bis_skin_checked="1">
                            <div bis_skin_checked="1"><strong>Les échéances suivantes :</strong></div>
                            <div class="leprix" bis_skin_checked="1"><span>13,73 €</span></div>
                        </div>
                        <strong class="addIcon">
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
            <div class="row justify-content-center mt-3" bis_skin_checked="1">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6" bis_skin_checked="1">
                    <label class="formLabel d-block mb-2">Nom et prénom du titulaire</label>
                    <input type="text" id="titulaire" class="form-control" placeholder="Nom et prénom du titulaire" name="titulaire_compte" onkeyup="verifTitulaire()" value="test test">
                    <div class="errorMsg" bis_skin_checked="1">
                        <div class="d-flex align-items-center" bis_skin_checked="1">
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
                    <label class="formLabel d-block mt-3 mb-2">Relevé d'identité bancaire (IBAN)</label>
                    <input type="text" id="IBAN" class="mb-3 form-control" placeholder="---- ---- ---- ---- ---- ---- ---" name="IBAN" onkeyup="isValidIBANNumber($(this).val());" value="" maxlength="33">
                    <div class="errorMsg" bis_skin_checked="1">
                        <div class="d-flex align-items-center" bis_skin_checked="1">
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
                            <p class="m-0 ms-2">Veuillez renseigner le nom de votre <span class="animalVar">chien</span></p>
                        </div>
                    </div>
                    <div class="form-check bgcheck mb-3 smspayBlock" bis_skin_checked="1">
                        <input class="form-check-input" type="checkbox" value="accept" name="accept" id="smspay" onchange="verifCheckBox('smspay', true)">
                        <label class="form-check-label ms-3" for="smspay">
                            Je déclare avoir lu et pris connaissance des
                        
                                <a href="https://self-assurance.fr/mimenteSelf/downloadFile?parameters=cHJvZHVpdD1GT1JNVUxFX01SSF9BUkVBU19TRUxGX0lOVEVSTkVUJmRvY3VtZW50VHlwZT1DT05ESVRJT05TX0dFTkVSQUxFUw%3D%3D" target="_blank">Conditions Générales</a> du contrat, le <a href="https://assurance-habitation.self-assurance.fr/devis/docs/IPID-MRH-AREAS-072020.pdf" target="_blank">document d'information normalisé</a> ainsi que du <a href="https://self-assurance.fr/mimenteSelf/downloadFile?parameters=cHJvZHVpdD1GT1JNVUxFX01SSF9BUkVBU19TRUxGX0lOVEVSTkVUJmRvY3VtZW50VHlwZT1UQUJMRUFVX0dBUkFOVElF" target="_blank">Tableau de Garanties</a>

                        <br><br>
                        Je déclare sincères et exacts les renseignements indiqués dans le cadre du processus de souscription en ligne, et que toute réticence, omission, fausse déclaration ou inexactitude peut entraîner soit la nullité du contrat, soit la réduction du montant des indemnités.
                        <br><br>
                        Je reconnais que les conseils reçus ont revêtu un caractère personnalisé, adapté à ma situation ainsi qu'à l'assurance de mes risques. 
                        <br><br>
                        Je bénéficie d'un délai de rétractation de 14 jours calendaires révolus à compter du jour de la conclusion du contrat.
                        <br><br>
                        J'autorise Selfassurance à prélever mes cotisations le 10 de chaque période fractionnée sur le compte bancaire ou postal indiqué dans l’autorisation de prélèvement.
                        </label>
                    </div>
                    <div class="errorMsg smspayError" bis_skin_checked="1">
                        <div class="d-flex align-items-center" bis_skin_checked="1">
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
                    <!-- <div class="form-check bgcheck actuCheckBlock mb-3">
                        <input class="form-check-input" type="checkbox" value="accept" name="consentementClientEca" id="actuCheck" onchange="verifCheckBox('actuCheck', false)" >
                        <label class="form-check-label ms-3" for="actuCheck">
                            Je souhaite être informé(e) par téléphone des actualités et des offres de Selfassurance.
                            </label>
                    </div>
                    <div class="errorMsg actuCheckError">
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
                    <div class="form-check infoCheckBlock bgcheck mb-3">
                        <input class="form-check-input" type="checkbox" value="accept" name="consentementClientGroupe" id="infoCheck" onchange="verifCheckBox('infoCheck', false)" >
                        <label class="form-check-label ms-3" for="infoCheck">
                            Je souhaite être informé(e) par téléphone, email, et SMS des actualités et des offres des partenaires de Selfassurance.
                        </label>
                    </div>
                    <div class="errorMsg infoCheckError">
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
                    </div> -->


                <div class="errorMsg acceptBlock" bis_skin_checked="1">
                        <div class="d-flex align-items-center" bis_skin_checked="1">
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
                    <button type="button" class="navBtn nextBtn mt-4">Accéder au paiement </button>
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
    <div class="modal fade" id="infoMobile" tabindex="-1" aria-labelledby="infoMobileLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header border-0 px-4 pb-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center p-4 helpContent">
                    <div class="text-center d-flex align-items-center justify-content-center">
                        <img src="../assets/images/supportbig.jpg" alt="assistante" class="img-fluid mb-4">
                    </div>
                    <div class="formLabel">Numéro de téléphone mobile</div>
                    Par mesure de sécurité, un code d'authentification va vous être envoyé par sms. Le numéro est-il correct ?<br>Si non, merci de le corriger ci-dessous.
                    <div class="text-center mt-4">
                        <button type="button" class="customCloseBtn" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
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