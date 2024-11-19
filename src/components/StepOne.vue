<template>
  <div>
    <h2>Step One</h2>
    <input v-model="formData.name" placeholder="Name">
    <button @click="$router.push('/step-two')">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: this.$store.state.formData
    };
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .stepOne {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
