<template>
    <div>
      <h1>Tarification</h1>
      <p>Prix estimé : <strong>{{ price }} DH</strong></p>
      <button @click="goToNext">Suivant</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        price: 0, // Calculer selon les garanties
      };
    },
    mounted() {
      // Simuler un calcul
      this.price = 1500; // Exemple
    },
    methods: {
      goToNext() {
        this.$router.push('/recap');
      },
    },
  };
  </script>
  