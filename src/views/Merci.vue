<template>


  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">

    <img src='../assets/images/AssurLogo.png' class="m-5" width="300" height="35" alt="Assurmabarak"  />
    <!-- Titre -->
    <h1 class="text-3xl font-bold colorText mb-4">Merci pour votre confiance !</h1>

    <!-- Sous-titre -->
    <p class="text-lg mb-6 text-center px-1">
      Votre souscription à notre offre d’assurance habitation a bien été enregistrée.<br>
      Nous sommes ravis de vous compter parmi nos assurés.
    </p>

    <!-- Étapes suivantes -->
    <div class="bg-white shadow-md rounded-lg p-6 ">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Que se passe-t-il ensuite ?</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-600">
        <li>Votre souscription sera vérifiée et validée par nos équipes.</li>
        <li>Une fois validée, vous recevrez un e-mail pour procéder à la signature en ligne.</li>
      </ul>
    </div>

    <!-- Boutons d'action -->
    <div class="flex space-x-4 mt-6">

      <a href="/" class="px-6 py-3 bg-gray-300 text-gray-700 rounded-md shadow hover:bg-gray-400 transition">
        Retourner à l'accueil
      </a>
    </div>

    <!-- Contact -->
    <div class="mt-8 text-center text-sm text-gray-500">
      <h3 class="text-gray-700 font-medium">Besoin d’aide ?</h3>
      <p>Contactez notre service client au <span class="font-semibold">
        <a href="tel:0146592228">01 46 59 22 28</a></span><br>
        ou par e-mail à <span class="font-semibold">
                <a href="mailto:contact@assurmabarak.fr">contact@assurmabarak.fr</a></span>.</p>
    </div>

    <!-- Footer -->
    <footer class="mt-10 text-center text-xs text-gray-400">
      Votre sécurité et celle de votre habitation sont notre priorité.
    </footer>
  </div>



</template>
<script setup>

import "../assets/tailwind.css";
</script>

<style scoped>

</style>