<template>
    <div>
      <h1>Récapitulatif</h1>
      <p>Adresse : {{ recap.address }}</p>
      <p>Type de Bien : {{ recap.propertyType }}</p>
      <p>Superficie : {{ recap.area }} m²</p>
      <button @click="goToNext">Valider</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recap: {
          address: 'Rue X',
          propertyType: 'Maison',
          area: 120,
        },
      };
    },
    methods: {
      goToNext() {
        this.$router.push('/subscription');
      },
    },
  };
  </script>
  