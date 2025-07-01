<template>
  <div class="container">
    <div class="step-header">
      <h2 class="step-title">Super ! Voici les offres qui correspondent à vos besoins.</h2>
      <p class="step-description">
        Nous avons sélectionné les meilleures offres qui se rapprochent le plus de vos besoins et de votre budget. Prenez le temps de les examiner et choisissez celle qui vous convient le mieux.
      </p>
    </div>

    <div class="step-section">
      <div v-if="loading" class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Chargement...</span>
        </div>
      </div>
      <div v-else>
        <div class="row justify-content-center row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="(plan, index) in displayedPlans" :key="index">
            <div class="card h-100 pricing-card shadow-sm position-relative">
              <span v-if="plan.popular" class="badge gradient-custom text-white popular-badge px-4 py-2">Recommandé</span>
              <div class="card-body p-5">
                <h5 :class="['card-title', plan.popular ? 'colorFormuleSelected' : 'colorFormule', 'text-uppercase', 'mb-4']">
                  <!-- {{ plan.produit.replace(/_/g, ' ') }} - {{ plan.formule.replace(/_/g, ' ') || '-' }} -->
                 {{ plan.formule.replace(/_/g, ' ') || '-' }}
                </h5>
                <h1 class="display-6 mb-4">
                  {{ formatPrice(plan.price) }}<small class="text-muted fw-light">€/mo</small>
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
  </div>
</template>

<script setup>
import { useFormStore } from '@/stores/useFormStore';
import { reactive, ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { toast } from 'vue3-toastify';

const formStore = useFormStore();
const router = useRouter();

const plans = ref({
  top3_compatible_formules: [],
  all_tariffs: []
});
const showAllPlans = ref(false);
const loading = ref(true);

const toggleShowAllPlans = () => {
  showAllPlans.value = !showAllPlans.value;
};

const displayedPlans = computed(() => {
  return showAllPlans.value ? plans.value.all_tariffs : plans.value.top3_compatible_formules;
});

const formatPrice = (price) => {
  return price.replace('.', ',');
};

const fetchTarifs = async (formData) => {
  try {
    const response = await axios.post(import.meta.env.VITE_BASE_URL + 'api/tarificateur', formData);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    toast.error('Une erreur est survenue, merci de réessayer plus tard');
    console.error('Error fetching tarifs:', err);
    throw err;
  } finally {
    loading.value = false;
  }
};

const selectPlan = (plan) => {
  formStore.updateSelectedTarif(plan);
  const souscripteurInfo = formStore.getFormData.souscripteurInfo || {};
  if (souscripteurInfo.souscripteurIsAssure === 'OUI') {
    formStore.updateCurrentStep(4); // Directly set the current step to 4 (Tarifs)
  } else if (formStore.getFormData.baseInfo.assure.includes('couple')) {
    formStore.updateCurrentStep(5); // Directly set the current step to 5
  } else if ((formStore.getFormData.baseInfo.assure.includes('enfant(s)')) && formStore.getFormData.baseInfo.nbrEnfant > 0) {
    formStore.updateCurrentStep(6); // Directly set the current step to 6
  } else {
    formStore.updateCurrentStep(7); // Directly set the current step to 7
  }
};

onMounted(async () => {
  try {
    const localData = formStore.getFormData.baseInfo || {};
    const tarifs = await fetchTarifs(localData);

    if (tarifs) {
      formStore.updateTarifs(tarifs);

      if (tarifs.top3_compatible_formules) {
        plans.value.top3_compatible_formules = tarifs.top3_compatible_formules.map(plan => ({
          produit: plan.produit || '-',
          formule: plan.formule || '-',
          price: plan.tarif ? `${plan.tarif}` : '0€',
          garanties: plan.garanties || {},
          popular: false
        }));
      }

      if (tarifs.all_tariffs) {
        plans.value.all_tariffs = tarifs.all_tariffs.map(plan => ({
          produit: plan.produit || '-',
          formule: plan.formule || '-',
          price: plan.tarif ? `${plan.tarif}` : '0€',
          garanties: plan.garanties || {},
          popular: false
        }));
        if (plans.value.all_tariffs.length > 1) {
          plans.value.all_tariffs[1].popular = true;
        }else{
          plans.value.all_tariffs[0].popular = true;
        }
      }

      if (plans.value.top3_compatible_formules.length > 1) {
        plans.value.top3_compatible_formules[1].popular = true;
      }else{
        plans.value.top3_compatible_formules[0].popular = true;
      }
    }
  } catch (err) {
    console.error('Error:', err);
  }
});
</script>

<style scoped>
.step-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: var(--e-global-typography-primary-font-family);
}

.step-header {
  text-align: center;
  margin-bottom: 30px;
}

.step-title {
  color: var(--e-global-color-primary);
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}

.step-description {
  color: var(--e-global-color-text);
  font-size: 16px;
  margin-bottom: 20px;
}

.step-section {
  margin-bottom: 30px;
}

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
</style>
