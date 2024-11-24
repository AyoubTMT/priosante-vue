<template>
    <form @submit.prevent="submitStep">
        <div class="row g-3 g-md-4">
            <div class="col-12 mt-0">
                <h2 class="stepTitle mb-3">C’est la dernière étape !</h2>
                <p class="stepDescription mb-3 mb-md-0">Et si nous faisions plus ample connaissance avant de partager le
                    devis ?</p>
                <p class="mb-3">En ce moment, <span class="underligned">3 mois offerts*</span> pour toute souscription
                    d’un contrat en ligne.</p>
            </div>

            <label class="formLabel mb-2" for="homme">Vos informations</label>

            <div class="col-6 mt-0 mb-3">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="civilite" id="homme" value="MR"
                        v-model="form.civilite" />
                    <label class="btn btn-outline-primary iconLabel" for="homme">
                        <div class="text-end checkedLabel">
                            <img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked" />
                        </div>
                        <div class="btnImg">
                            <img src="../assets/icons/homme.svg" alt="homme" />
                        </div>
                        <div>Homme</div>
                    </label>
                </div>
            </div>

            <div class="col-6 mt-0 mb-3">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="civilite" id="femme" value="MME"
                        v-model="form.civilite" />
                    <label class="btn btn-outline-primary iconLabel" for="femme">
                        <div class="text-end checkedLabel">
                            <img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked" />
                        </div>
                        <div class="btnImg">
                            <img src="../assets/icons/femme.svg" alt="femme" />
                        </div>
                        <div>Femme</div>
                    </label>
                </div>
            </div>

            <div class="col-12 mt-0 mb-3">
                <input type="text" id="nom" class="form-control" :class="{ 'inputError': errors.nom }" minlength="3"
                    placeholder="Votre nom" v-model="form.nom" @input="validateNom" />
                <div v-if="errors.nom" class="errorMsg">
                    <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                            viewBox="0 0 10.497 10.008">
                            <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                <g id="Page-1" transform="translate(30 591)">
                                    <g id="Alert" transform="translate(5 5)">
                                        <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)"
                                            fill="none"></rect>
                                        <path id="Path"
                                            d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                                            transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                        <path id="Path-2" data-name="Path"
                                            d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                                            transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                        <path id="Path-3" data-name="Path"
                                            d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                                            transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p class="m-0 ms-2">{{ errors.nom }}</p>
                    </div>
                </div>
            </div>

            <div class="col-12 mt-0 mb-3">
                <input type="text" id="prenom" class="form-control" :class="{ 'inputError': errors.prenom }" minlength="3"
                    placeholder="Votre prénom" v-model="form.prenom" @input="validatePrenom" />
                <div v-if="errors.prenom" class="errorMsg">
                    <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                            viewBox="0 0 10.497 10.008">
                            <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                <g id="Page-1" transform="translate(30 591)">
                                    <g id="Alert" transform="translate(5 5)">
                                        <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)"
                                            fill="none"></rect>
                                        <path id="Path"
                                            d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                                            transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                        <path id="Path-2" data-name="Path"
                                            d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                                            transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                        <path id="Path-3" data-name="Path"
                                            d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                                            transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p class="m-0 ms-2">{{ errors.prenom }}</p>
                    </div>
                </div>
            </div>

            <div class="col-12 mt-0 mb-3">
                <input type="tel" id="telephone" class="form-control" :class="{ 'inputError': errors.telephone }"
                    maxlength="10" placeholder="Téléphone" pattern="[0-9]*" v-model="form.telephone"
                    @input="validateTelephone" />
                <div v-if="errors.telephone" class="errorMsg">
                    <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                            viewBox="0 0 10.497 10.008">
                            <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                <g id="Page-1" transform="translate(30 591)">
                                    <g id="Alert" transform="translate(5 5)">
                                        <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)"
                                            fill="none"></rect>
                                        <path id="Path"
                                            d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                                            transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                        <path id="Path-2" data-name="Path"
                                            d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                                            transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                        <path id="Path-3" data-name="Path"
                                            d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                                            transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p class="m-0 ms-2">{{ errors.telephone }}</p>
                    </div>
                </div>
            </div>

            <div class="col-12 mt-0 mb-3">
                <input type="email" id="email" class="form-control" :class="{ 'inputError': errors.email }"
                    placeholder="E-mail" v-model="form.email" @input="validateEmail" />
                <div v-if="errors.email" class="errorMsg">
                    <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                            viewBox="0 0 10.497 10.008">
                            <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                <g id="Page-1" transform="translate(30 591)">
                                    <g id="Alert" transform="translate(5 5)">
                                        <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)"
                                            fill="none"></rect>
                                        <path id="Path"
                                            d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                                            transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                        <path id="Path-2" data-name="Path"
                                            d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                                            transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                        <path id="Path-3" data-name="Path"
                                            d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                                            transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p class="m-0 ms-2">{{ errors.email }}</p>
                    </div>
                </div>
            </div>

            <div class="col-12 mt-0 mb-3">
                <label for="datedenaissance"><b>Votre date de naissance</b></label>
                <div class="date-input-container">
                    <input type="date" class="form-control" :class="{ 'inputError': errors.birthDay }" maxlength="10"
                        v-model="form.birthDay">
                    <div v-if="errors.birthDay" class="errorMsg">
                        <div class="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                                viewBox="0 0 10.497 10.008">
                                <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                    <g id="Page-1" transform="translate(30 591)">
                                        <g id="Alert" transform="translate(5 5)">
                                            <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)"
                                                fill="none"></rect>
                                            <path id="Path"
                                                d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                                                transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                            <path id="Path-2" data-name="Path"
                                                d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                                                transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                            <path id="Path-3" data-name="Path"
                                                d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                                                transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p class="m-0 ms-2">Ce champ est requis</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 mt-0 votreEtreAppele">
                <div class="formLabel mb-3">A quelle date souhaitez-vous être assuré(e) ?</div>
                <div class="date-input-container forEffet">
                    <input type="date" class="form-control" :class="{ 'inputError': errors.dateEffet }" name="dateEffet"
                        maxlength="10" v-model="form.dateEffet">
                </div>
                <div v-if="errors.dateEffet" class="errorMsg">
                    <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                            viewBox="0 0 10.497 10.008">
                            <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                <g id="Page-1" transform="translate(30 591)">
                                    <g id="Alert" transform="translate(5 5)">
                                        <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)"
                                            fill="none"></rect>
                                        <path id="Path"
                                            d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                                            transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                        <path id="Path-2" data-name="Path"
                                            d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                                            transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                        <path id="Path-3" data-name="Path"
                                            d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                                            transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p class="m-0 ms-2">{{ errors.dateEffet }}</p>
                    </div>
                </div>
            </div>

            <div class="col-12 mt-0 mb-3 d-none">
                <label for="nbr_enfant" class="formLabel mb-3">Le nombre d'enfants</label>
                <select id="nbr_enfant" class="form-select" v-model="form.nbrEnfant">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <div class="errorMsg" style="display: none;">
                    <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                            viewBox="0 0 10.497 10.008">
                            <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                <g id="Page-1" transform="translate(30 591)">
                                    <g id="Alert" transform="translate(5 5)">
                                        <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)"
                                            fill="none"></rect>
                                        <path id="Path"
                                            d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                                            transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                        <path id="Path-2" data-name="Path"
                                            d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                                            transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                        <path id="Path-3" data-name="Path"
                                            d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                                            transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p class="m-0 ms-2">Ce champ est requis</p>
                    </div>
                </div>
            </div>

            <div class="col-12 mt-0">
                <div class="container-fluid p-0">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <button type="submit"
                                class="navBtn nextBtn mt-4 flex justify-center align-items-center">Étape
                                suivante <img src="../assets/icons/arrow-next.svg" alt="suivant"
                                    class="ms-3 img-fluid"></button>
                        </div>
                    </div>
                </div>
            </div>
            <BonASavoir
                remarque="La protection de vos données est l'une de nos priorités. Toutes vos données personnelles, notamment relatives à des infractions et condamnations pénales, sont 100% sécurisées." />
        </div>
    </form>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import BonASavoir from '../components/BonASavoir.vue';
import { useFormStore } from '@/stores/useFormStore';
import { useRouter } from 'vue-router';
import axios from 'axios';
export default {
  components: {
    BonASavoir,
  },
  setup() {
    const formStore = useFormStore();
    const router = useRouter();

    const form = reactive({
      civilite: "MR",
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      birthDay: "1980-01-01",
      dateEffet: "2024-12-23",
      nbrEnfant: "0",
    });

    const errors = reactive({
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      birthDay: "",
      dateEffet: "",
    });

    const validateNom = () => {
      errors.nom = form.nom.length >= 3 ? "" : "Veuillez renseigner un nom valide.";
    };

    const validatePrenom = () => {
      errors.prenom = form.prenom.length >= 3 ? "" : "Veuillez renseigner un prénom valide.";
    };

    const validateTelephone = () => {
      const phonePattern = /^[0-9]{10}$/;
      errors.telephone = phonePattern.test(form.telephone)
        ? ""
        : "Veuillez renseigner un téléphone valide.";
    };

    const validateEmail = () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errors.email = emailPattern.test(form.email) ? "" : "Veuillez renseigner un email valide.";
    };

    const validateAge = () => {
      // Add age validation
    };

    const validateDateEffet = () => {
        const now = new Date();
        const minDate = new Date();
        const maxDate = new Date();

        minDate.setDate(now.getDate() + 1);
        maxDate.setMonth(now.getMonth() + 4);

        const selectedDate = new Date(form.dateEffet);

        if (!form.dateEffet) {
            errors.dateEffet = 'Veuillez sélectionner une date.';
        } else if (isNaN(selectedDate.getTime())) {
            errors.dateEffet = 'Format de date invalide.';
        } else if (selectedDate < minDate || selectedDate > maxDate) {
            errors.dateEffet = `La date doit être entre ${minDate.toLocaleDateString()} et ${maxDate.toLocaleDateString()}.`;
        } else {
            errors.dateEffet = null;
        }
    };

    const submitStep = async () => {
      validateNom();
      validatePrenom();
      validateTelephone();
      validateEmail();
      validateAge();
      validateDateEffet();

      if (Object.values(errors).every((error) => !error)) {
        console.log("Form submitted:", form);
        formStore.updateStepData('step7', form);

        try {
          await getTarifs();
        } catch (error) {
          console.error("Error during form submission:", error);
        }
      } else {
        console.log("Validation failed.");
      }
    };

    const getTarifs = async () => {
      const dataTarif = formStore.getDataForTarif;
      try {
        const response = await axios.post('http://assurmabarak-laravel.test/api/tarificateur', dataTarif);
        if (response.status === 200) {
          formStore.updateStepData('tarifs', response.data.response);
          router.push('/devis/tarifs');
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    return {
      form,
      errors,
      validateNom,
      validatePrenom,
      validateTelephone,
      validateEmail,
      validateAge,
      validateDateEffet,
      submitStep,
      getTarifs,
      BonASavoir,
    };
  },
};
</script>