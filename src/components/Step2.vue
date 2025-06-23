<template>
  <div class="tarifs-container">
    <div class="tarifs-header">
      <h2>Sélectionnez votre produit</h2>
    </div>
    <div class="slider-container">
      <Carousel :items-to-show="1.5" :wrap-around="true">
        <Slide v-for="(tarif, index) in tarifs" :key="index">
          <div class="tarif-card">
            <div class="tarif-header">
              <h3>{{ tarif.name }}</h3>
              <a :href="tarif.pdf" target="_blank" class="pdf-link">
                <i class="fas fa-file-pdf" style="font-size: 28px; color: #e74c3c;"></i>
              </a>
            </div>
            <div class="tarif-details">
              <div class="garanties">
                <h4>GARANTIES</h4>
                <ul>
                  <li v-for="(garantie, garantieIndex) in tarif.garanties" :key="garantieIndex">
                    <i class="fas fa-check-circle" style="color: #28a745; margin-right: 8px;"></i>{{ garantie }}
                  </li>
                </ul>
              </div>
              <div class="options" v-if="tarif.options">
                <h4>OPTIONS</h4>
                <ul>
                  <li v-for="(option, optionIndex) in tarif.options" :key="optionIndex">
                    <i class="fas fa-check-circle" style="color: #28a745; margin-right: 8px;"></i>{{ option }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="tarif-total">
              <p>Total</p>
              <p>{{ tarif.total }} €</p>
            </div>
            <button class="select-button">Sélectionner ce produit</button>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const tarifs = ref([]);

    onMounted(() => {
      tarifs.value = [
        {
          name: 'Capital Sénior - Equilibre',
          pdf: '/path/to/pdf1',
          garanties: [
            'Soins courants',
            'Hospitalisation',
            'Dentaire',
            'Optique',
            'Auditif',
            'Assistance',
            'Cures thermales',
            'Médecines douces'
          ],
          total: '142,90'
        },
        {
          name: 'Serenissima - SERENISSIME 300',
          pdf: '/path/to/pdf2',
          garanties: [
            'Soins courants',
            'Hospitalisation',
            'Dentaire',
            'Optique',
            'Auditif',
            'Assistance',
            'Cures thermales',
            'Médecines douces'
          ],
          total: '151,63'
        },
        {
          name: 'Serenissima - ES 300',
          pdf: '/path/to/pdf3',
          garanties: [
            'Soins courants',
            'Hospitalisation',
            'Dentaire',
            'Optique',
            'Auditif',
            'Assistance',
            'Cures thermales',
            'Médecines douces'
          ],
          options: [
            'Option Renfort + (Médecines douces, Capital perte d\'autonomie, Dentaire non remboursé...)',
            'Option Pharma + (Médecaments à 65%, à 30%, à 15% uniquement remboursés par l\'AMO)'
          ],
          total: '182,69'
        }
      ];
    });

    return {
      tarifs,
    };
  }
});
</script>

<style scoped>
.tarifs-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.tarifs-header {
  text-align: center;
  margin-bottom: 30px;
}

.tarifs-header h2 {
  color: #2c3e50;
  font-size: 32px;
  font-weight: 700;
}

.slider-container {
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
}

.tarif-card {
  background-color: #fff;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border: none;
  margin: 0 15px;
  transition: all 0.3s ease;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tarif-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.tarif-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  padding-bottom: 15px;
}

.tarif-header h3 {
  margin: 0;
  font-size: 20px;
  color: #2c3e50;
  font-weight: 600;
}

.pdf-link {
  display: flex;
  align-items: center;
}

.tarif-details {
  margin-bottom: 20px;
  flex-grow: 1;
}

.tarif-details h4 {
  margin: 10px 0;
  font-size: 18px;
  color: #3498db;
  font-weight: 600;
}

.tarif-details ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tarif-details li {
  margin-bottom: 8px;
  color: #555;
  display: flex;
  align-items: center;
  font-size: 15px;
}

.tarif-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
  padding-top: 15px;
  border-top: 2px solid #eee;
  font-size: 18px;
  color: #2c3e50;
}

.select-button {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.select-button:hover {
  background: linear-gradient(135deg, #2980b9, #1f618d);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .slider-container {
    padding: 10px;
  }

  .tarif-card {
    margin: 0 10px;
    height: auto;
  }

  .tarifs-header h2 {
    font-size: 24px;
  }
}
</style>
