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
      <p>Chaque adresse représente un niveau de risque différent</p>
      <p>
        Les dépendances et annexes sont tous les locaux qui ne sont pas à usage d’habitation, communiquant ou non avec
        l’habitation (buanderie, cellier, remise, débarras, les abris de jardin, cave, les combles et le sous-sol).
      </p>
      <p>
        Dès lors que vous utilisez votre logement dans le cadre de vos activités professionnelles et/ou que vous y
        recevez des clients (même de manière occasionnelle), vous devez répondre positivement à cette question. Petite
        précision : vous ne devez pas prendre en compte le télétravail.
      </p>
      <p>
        Le mobilier correspond à vos meubles, équipement électroménager. Les objets de valeur correspondent à vos
        bijoux, montres…
      </p>
      <p>
        La protection de vos données est l'une de nos priorités. Toutes vos données personnelles, notamment relatives à
        des infractions et condamnations pénales, sont 100% sécurisées.
      </p>
    </div>
  </div>
</template>

<script>
    export default {
    name: "BonASavoir",
    props: {
        remarque: {
        type: String,
        required: true,
        default: "Déjà assuré(e) ailleurs ? ASSURMABARK peut s’occuper de résilier votre ancien contrat gratuitement."
        }
    }
    };
</script>

<style scoped>
</style>
