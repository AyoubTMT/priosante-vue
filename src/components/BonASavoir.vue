<template>
  <div class="col-12 mt-2">
    <div class="separateur"></div>
    <div class="bonasavoir">
      <div class="me-3 d-flex align-self-start">
        <img src="../assets/icons/idea.svg" alt="Bon a savoir" width="37" height="36" />
      </div>
      <div class="row gap-1">
        <h6 class="fw-bold">Bon à savoir</h6>
        <p class="m-0 remarque">{{ remarque }}</p>
        <p class="m-0 remarque">{{ remarque1 }}</p>
        <p class="m-0 remarque">{{ remarque2 }}</p>
        <p class="m-0 remarque">{{ remarque3 }}</p>
        <p class="m-0 remarque">{{ remarque4 }}</p>
      </div>
    </div>
    <div class="separateur"></div>
    <div class="assurmabarak">
      <p>
        Priorité Santé Mutuelle est une marque de GLS LASSURANCES. Les informations recueillies par GLS LASSURANCES, Courtier en
        assurance, société anonyme immatriculée au RCS de Paris sous le numéro 483 666 137, et dont le siège social est
        au 45 rue de Boulainvilliers 75016 Paris font l'objet d'un traitement informatique afin d'établir votre
        devis/contrat. Le destinataire des données est le personnel habilité de GLS LASSURANCES. Reportez-vous à nos
        Mentions légales et notre politique de confidentialité des données.
      </p>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  // Required but nullable string
  remarque: {
    type: [String, null],
    type: String,
    required: false,
    default: ""
  },
  remarque1: {
    type: [String, null],
    required: false,
    default: ""
  },
  remarque2: {
    type: [String, null],
    required: false,
    default: ""
  },
  remarque3: {
    type: [String, null],
    required: false,
    default: ""
  },
  remarque4: {
    type: [String, null],
    required: false,
    default: ""
  },
});


</script>

<style scoped></style>
