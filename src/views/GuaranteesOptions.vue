<template>
    <div>
      <h1>Garanties et Options</h1>
      <form @submit.prevent="goToNext">
        <div>
          <label>
            <input type="checkbox" v-model="form.guarantees.fire" />
            Garantie Incendie
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" v-model="form.guarantees.waterDamage" />
            Dégâts des Eaux
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" v-model="form.guarantees.theft" />
            Vol
          </label>
        </div>
        <button type="submit">Suivant</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          guarantees: {
            fire: false,
            waterDamage: false,
            theft: false,
          },
        },
      };
    },
    methods: {
      goToNext() {
        this.$router.push('/pricing');
      },
    },
  };
  </script>
  