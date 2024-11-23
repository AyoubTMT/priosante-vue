<template>
  <div class="col-12">
    <div class="separateur"></div>
    <div class="bonasavoir">
      <div class="me-3">
        <img src="../assets/icons/idea.svg" alt="Bon a savoir" width="37" height="36" />
      </div>
      <div>
        <h6 class="fw-bold">Bon à savoir</h6>
        <p class="m-0 remarque">{{ remarque }}</p>
      </div>
    </div>
    <div class="separateur"></div>
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
</template>

<script setup>

const props = defineProps({
  // Required but nullable string
  remarque: {
    type: [String, null],
    type: String,
    required: false,
    default: "Déjà assuré(e) ailleurs ? ASSURMABARK peut s’occuper de résilier votre ancien contrat gratuitement."
  },
});


</script>

<style scoped></style>
