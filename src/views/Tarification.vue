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
            <div v-if="error" class="alert alert-danger">
              {{ error }}
            </div>
            <div v-if="loading" class="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div v-else>
              <div class="row justify-content-center row-cols-1 row-cols-md-3 g-4">
                <div class="col" v-for="(plan, index) in displayedPlans" :key="index">
                  <div class="card h-100 pricing-card shadow-sm position-relative">
                    <span v-if="plan.popular" class="badge gradient-custom text-white popular-badge px-4 py-2">Recommandé</span>
                    <div class="card-body p-5">
                      <h5 :class="['card-title', plan.popular ? 'text-primary' : 'text-muted', 'text-uppercase', 'mb-4']">
                        {{ plan.produit.replace(/_/g, ' ') }} - {{ plan.formule.replace(/_/g, ' ') || '-' }}
                      </h5>
                      <h1 class="display-6 mb-4">
                        {{ plan.price }}<small class="text-muted fw-light">/mo</small>
                      </h1>
                      <ul class="list-unstyled feature-list">
                        <li v-for="(feature, key) in plan.garanties" :key="key" class="d-flex justify-content-between">
                          <span><i class="bi bi-check2 text-primary me-2"></i>{{ key }}</span>
                          <span>{{ feature }}</span>
                        </li>
                      </ul>
                      <button
                        :class="['btn', plan.popular ? 'gradient-custom text-white' : 'btn-outline-primary', 'btn-lg', 'w-100', 'mt-4']"
                        @click="selectPlan(plan)"
                      >
                        Sélectionner
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center mt-4">
                <div class="col-auto">
                  <button type="button" class="btn btn-primary" @click="toggleShowAllPlans">
                    {{ showAllPlans ? 'Afficher moins' : 'Afficher plus' }}
                  </button>
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
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';

const formStore = useFormStore();
const router = useRouter();
const plans = ref({
  top3_compatible_formules: [],
  all_tariffs: []
});
const showAllPlans = ref(false);
const error = ref(null);
const loading = ref(true);

const toggleShowAllPlans = () => {
  showAllPlans.value = !showAllPlans.value;
};

const displayedPlans = computed(() => {
  return showAllPlans.value ? plans.value.all_tariffs : plans.value.top3_compatible_formules;
});

const fetchTarifs = async (formData) => {
  try {
    const response = await axios.post(import.meta.env.VITE_BASE_URL + 'api/tarificateur', formData);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    error.value = 'Une erreur est survenue, merci de réessayer plus tard';
    toast.error(error.value);
    console.error('Error fetching tarifs:', err);
    throw err;
  } finally {
    loading.value = false;
  }
};

const selectPlan = (plan) => {
  formStore.updateSelectedTarif(plan);
  router.push('/devis/produit');
};

onMounted(async () => {
  try {
    const localData = formStore.getFormData.step1 || {};
    console.log('localData:', localData);
    const tarifs = await fetchTarifs(localData);
    console.log('Tarifs reçus:', tarifs);

    if (tarifs) {
      formStore.updateTarifs(tarifs);

      // Transform the data for the template
      if (tarifs.top3_compatible_formules) {
        plans.value.top3_compatible_formules = tarifs.top3_compatible_formules.map(plan => ({
          produit: plan.produit || '-',
          formule: plan.formule || '-',
          price: plan.tarif ? `${plan.tarif}€` : '0€',
          garanties: plan.garanties || {},
          popular: false
        }));
      }

      if (tarifs.all_tariffs) {
        plans.value.all_tariffs = tarifs.all_tariffs.map(plan => ({
          produit: plan.produit || '-',
          formule: plan.formule || '-',
          price: plan.tarif ? `${plan.tarif}€` : '0€',
          garanties: plan.garanties || {},
          popular: false
        }));
      }

      // Set the popular plan if necessary
      if (plans.value.top3_compatible_formules.length > 1) {
        plans.value.top3_compatible_formules[1].popular = true;
      }
    } else {
      console.error('Les données de tarification ne sont pas valides:', tarifs);
    }
  } catch (err) {
    error.value = 'Une erreur est survenue lors du chargement des données';
    toast.error(error.value);
    console.error('Error:', err);
  } finally {
    loading.value = false;
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
  display: flex;
  justify-content: space-between;
}

.popular-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  border-radius: 20px;
}

.gradient-custom {
  background: linear-gradient(135deg, #467061 0%, #D99654 100%);
  transition: background 0.3s ease;
}

.gradient-custom:hover {
  background: linear-gradient(135deg, #3a5a4f 0%, #b88646 100%);
}

.btn-primary {
  background-color: #467061;
  border-color: #467061;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #3a5a4f;
  border-color: #3a5a4f;
}

.text-primary {
  color: #467061 !important;
}

.btn-outline-primary {
  color: #467061;
  border-color: #467061;
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #467061;
  border-color: #467061;
}

#show-all-plans {
  background-color: #D99654;
  border-color: #D99654;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

#show-all-plans:hover {
  background-color: #b88646;
  border-color: #b88646;
}
</style>
