<template>
  <my-header :progress="formStore.currentStep" :step="'tarification'" />

  <form @submit.prevent="submitStep">
    <section id="content">
      <div class="container container-md-fluid container-lg-fluid container-xl">
        <div class="row justify-content-center mb-0 mb-lg-4 d-block d-md-none">
          <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
            <div class="progress Mobile">
              <div class="progress-bar progressMobile" role="progressbar" style="width: 76.8%;" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
        <section class="">
          <div class="container py-5">
            <div class="row text-center mb-5">
              <div class="col">
                <h2 class="stepTitle mb-3">Votre devis personnalisé</h2>
                <p class="stepDescription mb-3 mb-md-0">
                  Les offres qui se rapprochent le plus de vos besoins et de votre budget.
                </p>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col" v-for="(plan, index) in plans" :key="index">
                <div class="card h-100 pricing-card shadow-sm position-relative">
                  <span v-if="plan.popular" class="badge gradient-custom text-white popular-badge px-4 py-2">Populaire</span>
                  <div class="card-body p-5">
                    <h5 :class="['card-title', plan.popular ? 'text-primary' : 'text-muted', 'text-uppercase', 'mb-4']">
                      {{ plan.title }}
                    </h5>
                    <h1 class="display-6 mb-4">
                      {{ plan.price }}<small class="text-muted fw-light">/mo</small>
                    </h1>
                    <ul class="list-unstyled feature-list">
                      <li v-for="(feature, idx) in plan.features" :key="idx">
                        <i class="bi bi-check2 text-primary me-2"></i>{{ feature }}
                      </li>
                    </ul>
                    <button :class="['btn', plan.popular ? 'gradient-custom text-white' : 'btn-outline-primary', 'btn-lg', 'w-100', 'mt-4']">
                      Sélectionner
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </form>
</template>

<script setup>
import { useFormStore } from '../stores/useFormStore';
import { useRouter } from 'vue-router';
import MyHeader from '../components/header.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';

const formStore = useFormStore();
const router = useRouter();
const plans = ref([]);

const fetchTarifs = async (formData) => {
  try {
    const response = await axios.post(import.meta.env.VITE_BASE_URL + 'api/tarificateur', formData);
    if (response.status === 200) {
      return Array.isArray(response.data) ? response.data : [response.data];
    }
  } catch (error) {
    toast.error('Une erreur est survenue, merci de réessayer plus tard');
    console.error('Error fetching tarifs:', error);
    throw error;
  }
};

onMounted(async () => {
  const localData = formStore.getFormData;
  const tarifs = await fetchTarifs(localData);

  // Assurez-vous que tarifs est un tableau
  if (Array.isArray(tarifs)) {
    formStore.updateTarifs(tarifs);

    // Transformer les données de tarification pour le template
    plans.value = tarifs.map(tarif => ({
      title: tarif.formule || 'Basic',
      price: tarif.tarif ? `${tarif.tarif}€` : '0€',
      features: [
        '5 Projets',
        '10GB de stockage',
        'Support basique'
      ],
      popular: false
    }));

    // Mettre à jour le plan populaire si nécessaire
    if (plans.value.length > 1) {
      plans.value[1].popular = true;
    }
  } else {
    console.error('Les données de tarification ne sont pas un tableau:', tarifs);
  }
});
</script>



<style scoped>
.pricing-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  border-radius: 15px;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-list li {
  margin-bottom: 0.8rem;
  color: #6c757d;
}

.popular-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  border-radius: 20px;
}

.gradient-custom {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
}
</style>
