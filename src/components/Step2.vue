<template>
  <form @submit.prevent="submitStep">
    <div class="row g-3 g-md-4" bis_skin_checked="1">
      <div class="col-12 mt-0" bis_skin_checked="1">
          <h2 class="stepTitle mb-3">Commençons par votre logement </h2>
          <p class="stepDescription mb-3 mb-md-0">
              <!-- J’aurais besoin de quelques informations sur votre logement.  -->
              Afin de bien évaluer votre demande, pourriez-vous m’en dire un peu plus ? 
          </p>
          <p class="mb-3">En ce moment, <span class="underligned">3 mois offerts*</span> pour toute souscription d’un contrat en ligne.</p>
      </div>
      <label for="maison-b" class="formLabel mb-3">Qualité de l'assuré</label>
      <div class="col-6 mt-0" bis_skin_checked="1">
          <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group" bis_skin_checked="1">
              <input type="radio" class="btn-check" name="statut_resident" value="LOCATAIRE_OCCUPANT" id="locataire" autocomplete="off" checked="">
              <label class="btn btn-outline-primary iconLabel" for="locataire">
                  <div class="text-end checkedLabel" bis_skin_checked="1"><img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/checkedicon.svg" width="15" height="15" alt="checked"></div>
                  <div class="btnImg" bis_skin_checked="1"><img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/locataire.svg" alt="locataire"></div>
                  <div bis_skin_checked="1">Locataire</div>
              </label>
          </div>
      </div>
      <div class="col-6 mt-0" bis_skin_checked="1">
          <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group" bis_skin_checked="1">
              <input type="radio" class="btn-check" name="statut_resident" value="PROPRIETAIRE_OCCUPANT" id="proprietaire" autocomplete="off">
              <label class="btn btn-outline-primary iconLabel" for="proprietaire">
                  <div class="text-end checkedLabel" bis_skin_checked="1"><img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/checkedicon.svg" width="15" height="15" alt="checked"></div>
                  <div class="btnImg" bis_skin_checked="1"><img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/occupant.svg" alt="proprietaire"></div>
                  <div bis_skin_checked="1">Propriétaire</div>
              </label>
          </div>
      </div>

      <div class="col-12 appartementcondition" bis_skin_checked="1">
          <label for="etages" class="formLabel mb-3">Cet appartement est situé</label>
          <select name="appartement_situe" id="etages" class="form-select">
              <option value="RDC">Au rez-de-chaussée</option> 
              <option value="INTERMEDIAIRE" selected="">À un étage intermédiaire</option>
              <option value="DERNIER">Au dernier étage</option>
          </select>
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
      </div>
      <div class="col-12 maisoncondition" style="display: none;" bis_skin_checked="1">
          <label class="formLabel mb-3" for="resiliation">Votre habitation présente-t-elle une spécificité ?</label>
          <div class="container-fluid p-0" bis_skin_checked="1">
              <div class="row" bis_skin_checked="1">
                  <div class="col-6" bis_skin_checked="1">
                      <div class="btn-group formIconContainer miniClass" role="group" aria-label="Basic radio toggle button group" bis_skin_checked="1">
                          <input type="radio" class="btn-check" name="specification" value="NON" id="specNon" checked="" autocomplete="off">
                          <label class="btn btn-outline-primary iconLabel" for="specNon">
                              <div class="text-end checkedLabel" bis_skin_checked="1"><img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/checkedicon.svg" width="15" height="15" alt="checked"></div>
                              <div class="twoBtns" bis_skin_checked="1">Non</div>
                          </label>
                      </div>
                  </div>
                  <div class="col-6" bis_skin_checked="1">
                      <div class="btn-group formIconContainer miniClass" role="group" aria-label="Basic radio toggle button group" bis_skin_checked="1">
                          <input type="radio" class="btn-check" name="specification" value="OUI" id="specOui" autocomplete="off">
                          <label class="btn btn-outline-primary iconLabel" for="specOui">
                              <div class="text-end checkedLabel" bis_skin_checked="1"><img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/checkedicon.svg" width="15" height="15" alt="checked"></div>
                              <div class="twoBtns" bis_skin_checked="1">Oui</div>
                          </label>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-12 mt-3 VotreCodepostale" bis_skin_checked="1">
          <label for="#zipcode" class="formLabel mb-2">Code postal ou ville</label>
          <input type="text" class="form-control villeCpSearch" autocomplete="off" id="zipcode" placeholder="Code postal ou ville" value="75001 Paris">
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
                  <p class="m-0 ms-2">Une ville doit être sélectionnée.</p>
              </div>
          </div>
          <div class="villeSearchResult" bis_skin_checked="1">
              <ul id="villesCp" style="display: none;"></ul>
          </div>
          <input type="hidden" name="ville" class="form-control villeSearch" placeholder="ville" value="Paris">
          <input type="hidden" name="cp" class="form-control cpSearch" placeholder="cp" value="75001">
      </div>
      <div class="col-12 mt-0" bis_skin_checked="1">
          <div class="container-fluid p-0" bis_skin_checked="1">
              <div class="row align-items-center" bis_skin_checked="1">
                  <div class="col-12" bis_skin_checked="1">
                      <button type="button" class="navBtn nextBtn mt-4" onclick="goSlide3()">Étape suivante <img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/arrow-next.svg" alt="suivant" class="ms-3 img-fluid"></button>
                  </div>
                  <div class="col-12 text-center" bis_skin_checked="1">
                      <!-- <a class="backLink" onclick="goBack()"><img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/back-arrow.svg" alt="back" class="img-fluid me-3"> Retour</a> -->
                  </div>
              </div>
          </div>
      </div>
      <div class="col-12" bis_skin_checked="1">
          <div class="separateur" bis_skin_checked="1"></div>
          <div class="bonasavoir" bis_skin_checked="1">
              <div class="me-3" bis_skin_checked="1">
                  <img src="https://assurance-habitation.selfassurance.fr/devis/application/views/assets/media/idea.svg" alt="Bon a savoir" width="37" height="36">
              </div>
              <div bis_skin_checked="1">
                  <h4>Bon à savoir</h4>
                  <p class="m-0">Chaque adresse représente un niveau de risque différent</p>
              </div>
          </div>
          <div class="separateur" bis_skin_checked="1"></div>
          <div class="selfassurance" bis_skin_checked="1">
              <p>
                  Selfassurance est une marque de ECA-Assurances. Les informations recueillies par ECA-Assurances, Courtier en assurance, société anonyme immatriculée au RCS de Nanterre sous le numéro B 402 430
                  276, et dont le siège social est au 92-98 Boulevard Victor Hugo 92115 Clichy Cedex font l'objet d'un traitement informatique afin d'établir votre devis/contrat. Le destinataire des données est
                  le personnel habilité d'ECA-Assurances. Reportez-vous à nos Mentions légales et notre politique de confidentialité des données.
              </p>
              <p>(*) Dans le cadre de l'offre exclusive Web Selfassurance, pour toute reconduction d'un contrat souscrit en ligne (souscription réalisée intégralement sur le site internet sans l'intervention d'un conseiller) d'une assurance habitation en formule, confort, optimal ou premium plus par carte bancaire, l'équivalent des trois derniers mois de cotisations de la 2ème année est offert selon les conditions et modalités suivantes : </p>
<p>Vous devez être à jour du paiement de vos cotisations à la date de la demande de remboursement. Le remboursement correspond aux 22, 23 et 24ème mois de cotisation. Celui-ci interviendra au plus tôt à l’issue du 25ème mois de cotisations.</p>
<p>Aucun remboursement ne pourra être effectué en cas de : résiliation du contrat avant le 25ème mois d’adhésion / résiliation du contrat demandé au moment de la demande de remboursement. 
Afin de pouvoir bénéficier de l’offre de remboursement, vous devez réaliser votre demande directement sur votre espace client. Une fois votre demande traitée et validée par nos services, le remboursement sera réalisé sous 2 mois.</p>
          </div>
      </div>
  </div>
  </form>
</template>
  
<script>
  import { useFormStore } from '@/stores/useFormStore';
  export default {
    data() {
      return {
        localData: {
          address: '',
          phone: '',
        },
      };
    },
    methods: {
      prevStep() {
        const formStore = useFormStore();
        formStore.prevStep();
      },
      submitStep() {
        const formStore = useFormStore();
        formStore.updateStepData('step2', this.localData);
        formStore.nextStep();
      },
    },
  };
</script>
  