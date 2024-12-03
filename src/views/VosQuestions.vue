<template>
  <div>
    <header id="navbar">
      <nav class="navbar-container container">
        <a href="/" class="home-link">
          <div class="navbar-logo">
            <router-link :to="{ name: 'home' }"><img className='' src='../assets/images/logo.png'
                alt="" /></router-link>
          </div>
        </a>
        <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu"
          :aria-expanded="isNavbarExpanded.toString()" @click="toggleNavbarVisibility">
          <i class="fa fa-bars"></i>

        </button>
        <div id="navbar-menu" aria-labelledby="navbar-toggle" @click="toggleNavbarVisibility">
          <ul class="navbar-links" @click.stop>
            <li class="navbar-item">
              <router-link :to="{ name: 'lassurance' }" class="navbar-link">L'assurance</router-link>
            </li>
            <li class="navbar-item">
              <router-link :to="{ name: 'vosquestions' }" class="navbar-link">Vos questions</router-link>
            </li>
            <li class="navbar-item">
              <router-link to="/devis">
                <button @click="clearLocalStorage"
                  class="bg-orange-500 buttonLimouni text-white font-semibold rounded-md rounded-lg rounded-xl navbar-link">
                  Devis en ligne
                </button>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <div class="Hero__Section">
      <div class="Hero__inner main-wrapper d-flex justify-content-between flex-col flex-md-row">
        <div class="Hero__desc">
          <h1 class="pre-field-tarif font-weight-bold pb-3">Foire aux questions habitation </h1>
          <p class="pb_home">Retrouvez toutes les réponses à vos questions concernant votre contrat d’assurance ou vos
            garanties.</p>
          <p class="mb-0">Obtenir mon tarif</p>
          <div class="buttons__Home pt-4">
              <router-link to="/devis" class="LkButton" @click="clearLocalStorage">
                Obtenir mon tarif
              </router-link>
          </div>
        </div>
        <div class="Hero__img"><img src="../assets/images/faqs.png" height="449" width="640"
            alt="Une assurance animaux en ligne et pas cher"></div>
      </div>
    </div>

    <div class="faq-area pt-33 pb-90">
      <div class="main-wrapper">
        <div class="row">
          <div class="col-12">
            <div class="faq-group headstyle mt-30">
              <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapseOne" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">1.</span>
                        <span class="data_panel"> Suis-je assuré lors de l'achat d'un logement ? </span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" class="panel-collapse collapse" style="">
                    <div class="panel-body pb-4">
                      <p>
                        Lors de l'achat d'un logement, le contrat d'assurance de votre vendeur vous sera automatiquement
                        transféré. Vous aure donc besoin de récuperer le contrat d'assurance du venduer ou,à défuat, de
                        la référence du contrat. Ensuite vous aurez le choix entre conserver l'assurance de votre
                        vendeur (dance ce cas, il faudrait vous adresser à l'assureur en question) ou de l'abandonner
                        (il faudra envoyer par lettre recommandée une lettre de fidélisation.
                      </p>
                    </div>
                  </div>
                </div>




                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse2" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">2.</span>
                        <span class="data_panel">A quel moment mon contrat prend-il effet ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse2" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p> Le contrat prend effet à la date indiquée aux conditions particuléires et, au plus tôt, le
                        lendemain à midi de l'encaissement effectif de votre premiére cotisation

                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse3" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">3.</span>
                        <span class="data_panel">Quelle est la durée d'un contrat ? </span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse3" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Sauf convention nécessaire, le contrat est conclu d'une durée d'un an. A son expiration, il est
                        automatiquement conduit sauf dénonciation par l'un ou l'autre des parties, par lettre
                        recommandée, deux mois au moins avant la date d'échéance annuelle. Ce delai court à partir de la
                        date figurant sur le cachet de la poste.
                      </p>
                    </div>
                  </div>
                </div>


                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse4" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">4.</span>
                        <span class="data_panel"> Que dois-je faire pour bénéficier de ma garantie "Défense et recours"
                          ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse4" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Il suffit de nous informer dans les plus brefs délais de votre cas en nous indiquant de nom et
                        l'adresse de l'avocat ou de la personne qualifiée que vous aurez choisie pour la défense de vos
                        intérêtes. A défaut, vous pourriez ne pas être indemnisé ou l'être que partiellement.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse5" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">5.</span>
                        <span class="data_panel"> Qu'est ce qu'une franchise ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse5" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        On désigne comme franchise, la somme qui restera à votre charge après l'indemnisation d'un
                        sinistre. Ce montant peut soit prendre la forme d'une somme fixe en euros, soit correspondre à
                        un pourcentage du montant de l'indemnisation, soit une combinaison de ces deux modes de calcul.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse6" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">6.</span>
                        <span class="data_panel"> Qu'est ce que la responsabilité civile ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse6" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Elle couvre les dommages causés à une tierce personne de maniére involontaire ou par
                        négligeance. Elle couvre toutes les personnes se trouvant à votre domicile (conjoint, concubin,
                        enfants…)
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse7" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">7.</span>
                        <span class="data_panel"> Que faire en cas de déménagement ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse7" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Deux options s'offrent à vous pour un déménagement : vous pouvez transférer votre contrat
                        d'assurance habitation à votre nouvelle adresse ou sinon résilier votre contrat et changer
                        d'assurance habitation
                      </p>
                    </div>
                  </div>
                </div>


                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse8" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">8.</span>
                        <span class="data_panel"> Que faire en cas de changement de situation ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse8" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        En cas de changement de situation (déménagement, situation matrimoniale, retraite, …), vous
                        pouvez résilier votre contrat à tout moment. La résiliation doit se faire dans les trois mois
                        suivant le changement.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse9" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">9.</span>
                        <span class="data_panel"> L'assurance habitation est-elle obligatoire ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse9" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        L'assurance habitation est une obligation pour les locataires afin de couvrir les risques
                        locatifs. Par contre elle n'est pas obligatoire pour un propriétaire sauf si vous habitez dans
                        une copropriété, dans ce cas, vous devez souscrire à un contrat d'assurance habitation
                      </p>
                    </div>
                  </div>
                </div>


                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse10" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">10.</span>
                        <span class="data_panel">Comment obtenir mon attestation d'assurance habitation ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse10" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Vous pouvez télécharger votre attestation habitation à partir de votre espace client dans la
                        rubrique "souscripteur"
                      </p>
                    </div>
                  </div>
                </div>


                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse11" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">11.</span>
                        <span class="data_panel"> Comment déterminer mon capital mobilier ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse11" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Pour effectuer l'estimation de vos biens, commencez par lister tout le matériel que vous
                        possédez afin d'estimer la valeur de vos biens. Vous devez retenir la valeur d'usage car les
                        objets perdent de leurs valeurs au fil du temps. En cas de sinistre, la prise en charge des
                        dommages mobiliers ne pourra pas dépasser le montant des capitaux mobiliers que vous avez
                        choisi.
                      </p>
                    </div>
                  </div>
                </div>


                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse12" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">12.</span>
                        <span class="data_panel"> Ma cave et mon garage sont-ils assurés ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse12" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Votre contrat d'assurance habitation couvre tous les bâtiments liés à votre habitation s'ils ont
                        été déclarés au préalable lors de la souscription.
                      </p>
                    </div>
                  </div>
                </div>


                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse13" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">13.</span>
                        <span class="data_panel"> Comment assurer mes biens transportés en cas de déménagement ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse13" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Les déménageurs professionnels sont tenus de disposer d'une garantie responsabilité civile
                        professionnelle. Cette garantie couvre les risques liés aux dommages de biens transportés.
                      </p>
                    </div>
                  </div>
                </div>


                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse14" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">14.</span>
                        <span class="data_panel">L'assurance scolaire est-elle obligatoire ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse14" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        L'assurance scolaire est facultative pour les activités scolaires obligatoires mais obligatoire
                        pour les activités scolaires facultatives (sorties, voyages scolaires).
                      </p>
                    </div>
                  </div>
                </div>


                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse15" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">15.</span>
                        <span class="data_panel"> Qu'est ce que la surface habitable ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse15" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Dans la loi boutin la surface habitable correspond à la surface de plancher construite d'un
                        logement. C'est l'espace réel disponible pour les occupants
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse16" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">16.</span>
                        <span class="data_panel">Comment déclarer un dégat des eaux ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse16" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        La déclaration d'un dégât des eaux doit obligatoirement être effectué dans un délai de 5 jours
                        après la constatation du sinistre. Vous pouvez déclarer votre sinistre en ligne, en vous
                        connectant sur votre espace client.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse17" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">17.</span>
                        <span class="data_panel">Quel est le délai d'indemnisation pour un dégât des eaux ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse17" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Le paiement de l'indemnisation est effectué sous 30 jours suivant la déclaration.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse18" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">18.</span>
                        <span class="data_panel"> Mes travaux cause des dégâts à mon voisin, sui-je responsable ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse18" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Dans le cas ou un dégât des eaux est dû à la négligence d'un artisan suite à son intervention
                        dans votre logement, la responsabilité du sinistre est engagée au professionnel qui doit faire
                        intervenir son assurance. Le sinistre résulte de l'exercice de son activité
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse19" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">19.</span>
                        <span class="data_panel"> Mon voisin est responsable de mon dégât des eaux, que dois-je faire ?
                        </span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse19" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Si votre voisin est responsable du votre dégât des eaux, il doit réparer les dommages
                        occasionnés dans votre logement. Il devra faire intervenir son assurance. Il est indispensable
                        de remplir un constat à l'amiable. Chaque partie concerné doit envoyer le constat à son assureur
                        en déclarant le sinistre.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse20" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">20.</span>
                        <span class="data_panel">Comment se procurer un constat de dégât des eaux ? </span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse20" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Vous pouvez télécharger votre constat directement sur votre espace client
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse21" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">21.</span>
                        <span class="data_panel"> Que faire en cas d'incendie ? </span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse21" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Faites l'inventaire des dommages causés afin de faciliter le travail de l'experts. Dressez la
                        liste des dégâts et prenez des photos, rassemblez ensuite tous les documents qui peuvent
                        justifier de la valeur des biens endommagés (factures, certificats de garanties, photos...). Ces
                        justificatifs serviront de base à l'évaluation du montant de votre indemnité.
                      </p>
                    </div>
                  </div>
                </div>


                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse22" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">22.</span>
                        <span class="data_panel"> Comment se passe l'expertise ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse22" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Généralement, l'expert se déplace sur le lieu du sinistre pour constater les dégâts et
                        éventuellement déterminer la cause du sinistre. Il peut également faire son cosntat à partir de
                        photos sans se déplacer sur le lieu du sinistre. Il rédige un rapport d'expertise qui sert de
                        base à l'assureur pour proposer une indemnisation à l'assuré.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse23" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">23.</span>
                        <span class="data_panel"> Puis-je avoir recours à une contre expertise ? </span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse23" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Si vous considérez que la proposition de l'assurance est trop basse ou que certains éléments de
                        mobilier n'ont pas été pris encompte, vous êtes en droit de faire appel à un expert d'assuré qui
                        réalisera une contre-expertise. Celle-ci sera à votre charge
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse24" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">24.</span>
                        <span class="data_panel"> Comment déclarer un vol ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse24" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Vous devez déclarer votre sinistre dans un délai de 2 jours à partir de la connaissance du
                        sinistre. Vous devez déposer une plainte au commissariat et joindre le récépissé de la plainte
                        ainsi que tous les justificatifs nécessaires à la procédure de l'indemnisation (factures,
                        photos...) lors de la déclaration.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse25" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">25.</span>
                        <span class="data_panel"> Comment déclarer un cambriolage ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse25" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Lorsque vous êtes victime de cambriolage, vous disposez d'un délai de 2jours pour déclarer le
                        sinistre. Vous avez 48h après la découverte de votre préjudice pour déposer une plainte au
                        commissariat ou à la gendarmerie.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse26" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">26.</span>
                        <span class="data_panel"> Quelles sont les indemnisations pour les objets de valeurs ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse26" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        En cas de vol ou de dégradation de vos objets de valeur, l'indemnisation va dépendre de votre
                        contrat d'habitation multirisque. En général, votre contrat convre l'intégralité de vos biens,
                        jusqu'à une certaine hauteur. Un sous-plafond est indiqué pour les objets de valeur.
                      </p>
                    </div>
                  </div>
                </div>


                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse27" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">27.</span>
                        <span class="data_panel">Mes animaux sont-ils couverts par mon assurance habitation ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse27" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Vos animaux de compagnie sont couverts au titre de la garantie responsabilité civile vie privée
                        de votre contrat habitation multirisque pour les dommages qu'ils peuvent causés.
                      </p>
                    </div>
                  </div>
                </div>



                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse28" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">28.</span>
                        <span class="data_panel">Je suis en colocation : dois-je m'assurer ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse28" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Si vous êtes en colocation, vous devez obligatoirement disposer d'un contrat d'assurance
                        habitation avec la garantie risques locatifs au minimum qui permet de couvrir les dommages
                        causés en cas d'incendie, de dégats des eaux, ou d'explosion; ainsi q'une garantie
                        responsabilité civile.
                      </p>
                    </div>
                  </div>
                </div>




                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse29" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">29.</span>
                        <span class="data_panel">Comment obtenir une attestation télétravail ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse29" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Vous pouvez télécharger votre attestation en ligne en vous connectant sur votre espace client
                      </p>
                    </div>
                  </div>
                </div>



                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse30" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">30.</span>
                        <span class="data_panel"> Comment résilier mon contrat habittation ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse30" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Pour résilier votre contrat d'assurance habitation, vous devez envoyer une lettre recommandée
                        avec accusé de reception à votre assureur 2 mois avant la date d'échéance. En cas de changement
                        de situation (déménagement, retraite…), vous pouvez résilier votre contrat dans les 3 mois
                        suivant le changement.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse31" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">31.</span>
                        <span class="data_panel">Puis-je conserver le contrat d'assurance habitation de l'ancien
                          propriétaire ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse31" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Le contrat d'assurance habitation est automatique tranféré à l'acheteur lors de la vente d'un
                        bien. Cependant, l'acheteur peut s'il le souhaite résilier le contrat transféré après la vente.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse32" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">32.</span>
                        <span class="data_panel"> L'assurance habitation est-elle obligatoire pour le pno (propriétaire
                          non occupant) ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse32" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        L'assurance habitation pour le pno n'est pas obligatoire mais fortement conseillée. L'assurance
                        pno protége le propriétaire en cas de sinistre
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse33" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">33.</span>
                        <span class="data_panel"> Qu'est ce qu'un contrat de protection juridique ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse33" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        Un contrat de protection juridique est une assurance qui vous permet en cas de litige avec une
                        tierce personne ou en cas de procédure de justice de bénéficier d'une assistance juridique de
                        votre assureur
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse34" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">34.</span>
                        <span class="data_panel"> Quels sont les facteurs qui influent sur la prime d'habitation
                          ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse34" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        La prime d'assurance habitation est calculée à l'issue de divers facteurs tels que le contenu de
                        l'habitat (capital mobilier, lieu de résidence, …))
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse35" class="collapsed"
                        aria-expanded="false">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">35.</span>
                        <span class="data_panel"> Quelles sont les démarches en cas de décès du souscripteur du contrat
                          ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse35" class="panel-collapse collapse">
                    <div class="panel-body pb-4">
                      <p>
                        En cas de décès, il faut prévenir l'assureur pour une résiliation du contrat. Ensuite vous devez
                        envoyer une lettre recommandée avec accusé de reception ainsi que l'acte de décès du
                        souscripteur.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapse36" class=""
                        aria-expanded="true">
                        <span class="glyphicon glyphicon-plus"></span>
                        <span class="num_panel text-center">36.</span>
                        <span class="data_panel">Mon assurance couvre-t-elle mes appareils nomades ?</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapse36" class="panel-collapse collapse show" style="">
                    <div class="panel-body pb-4">
                      <p>
                        Afin de les protéger contre certain risque ( casse, vol, bris ) vous devez souscrire à une
                        option à votre contrat dite appareil nomades qui couvre l'ensemble des appareils et accesoires
                        de votre foyer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className='bg-[#b0e2fd]'>
      <div className='container mx-auto py-12'>
        <div className="grid sm:grid-cols-3 grid-cols-1 px-4">
          <div>
            <h4 className='font-semibold py-3 mobile:text-sm'>Information de contact</h4>
            <div>
              <p className='py-1'>contact@assurmabarak.fr</p>
              <p className='py-1'>01 46 59 22 28</p>
              <p className='py-1'>45 RUE DE BOULAINVILLIERS 75016, Paris</p>
            </div>
          </div>
          <div>
            <h4 className='font-semibold py-3 mobile:text-sm'>Mentions légales</h4>
            <div>
              <p className='py-1'>Politique de confidentialité</p>
              <p className='py-1'>Conditions générales de vente</p>
              <p className='py-1'>Politique de cookies</p>
            </div>
          </div>
          <div>
            <h4 className='font-semibold py-3 mobile:text-sm'>Partenariats</h4>
            <p>Assurmabarak est un site de GLS LAssurances en partenariat avec ECA assurances</p>
          </div>
        </div>
      </div>
    </section>
    <div className='bg-[#b0e2fd] text-center py-4 font-semibold'>lassurances-habitation.fr - 2024</div>
  </div>
</template>

<style scoped>
 @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  
 /********************** FAQ *************************/
  @media (max-width: 853px) {
    .Hero__desc {
      width: auto;
    }
    .LkButton {
        margin-top: 12px;
        width: 100%;
    }
    .buttons__Home {
        flex-direction: column;
        width: 100%;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
    }
    .Hero__Section .pre-field-tarif {
        padding-top: 0 !important;
        font-size: 34px !important;
    }
    .pre-field-tarif {
        padding-top: 14px;
    }
    .Hero__Section .Hero__desc {
        margin-left: 20px;
        padding: 30px 15px;
    }
  }
  @media (max-width: 991.98px) {
      .Hero__Section .pre-field-tarif {
          padding-top: 0 !important;
      }
    .LkButton {
        margin-top: 12px;
        width: 100%;
        text-align: center;
    }
    .Hero__inner .pre-field-tarif {
        margin-bottom: 25px !important;
    }
    .Hero__img {
        width: 100% !important;
        text-align: center !important;
        padding-top: 0 !important;
    }
    .Hero__Section .Hero__desc {
        max-width: 100%;
        padding: 50px 15px 30px 15px;
    }
    .Hero__desc {
        padding: 50px 15px 30px 15px;
    }
    .Hero__desc, .Hero__view {
        width: 100%;
        max-width: 100%;
    }
    .Hero__heroContainer, .Hero__inner.main-wrapper, .Self__desc, .Self__view, .trustpilot_txt.Self__desc {
        padding: 0;
    }
  }
  @media (max-width: 1325px) {
    .Hero__desc {
        padding-left: 0;
    }
  }
  @media (max-width: 1325px) {
    img {
        height: auto;
        max-width: 100%;
    }
  }
  .Hero__Section .Hero__desc {
      padding-left: 0;
      max-width: 636px;
  }
  .headstyle h4:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background: #3367c1;
    left: 0;
    bottom: -5px;
  }
  .headstyle h4:before,.headstyle h4:after{
    background: #E7584F !important;
  }
  .headstyle h4:before {
    position: absolute;
    content: '';
    width: 70%;
    height: 1px;
    background: #3367c1;
    left: 0;
    bottom: 0;
  }
  .headstyle h4 {
    display: inline-block;
    position: relative;
    font-size: 22px;
    font-weight: 700;
    padding-bottom: 9px;
    margin-bottom: 30px;
  }
 .collapse{
  visibility: visible;
 }
 img {
    height: auto;
  }
 .LkButton:hover {
    color:var(--color1);
    background-color: var(--color5);
 }
 .LkButton {
    padding: 16px 20px;
    border: 1px solid var(--color1);
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    color: #fff;
    background: var(--color1);
    cursor: pointer;
    -o-border-radius: 6px;
  }
  .buttons__Home {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-direction: row;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    display: flex;
    align-items: center;

  }

 .Hero__desc {
    width: 90%;
    padding-left: 110px;
    max-width: 590px;
    color: #565656;
  }
  .Hero__img {
    width: 50%;
    text-align: right;
    
    padding-top: 50px;
  }
  .Hero__view {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 43.5%;
    height: 100%;
  }
  .Hero__heroContainer {
    position: relative;
    padding: 100px 80px 45px;
    min-height: 498px;
    background: #fff;
  }
  .Hero__view img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 72%;
    object-position: 72%;
  }
  .Hero__Section {
    margin-top: 0px;
    margin-bottom: 90px;
  }
  .Hero__Section .Hero__inner {
    margin: auto;
  }
  .Hero__Section .Hero__desc {
    padding-left: 0;
    max-width: 636px;
  }
  .Hero__Section .pre-field-tarif {
    padding-top: 75px;
    font-size: 60px;
  }
  .Hero__Section p {
    font-size: 20px;
    line-height: 26px;
  }
  .Hero__Section p.MSG {
    color: #2b2b2b;
  }
  .pre-field-tarif {
    padding-top: 10px;
    font-family: "Zilla Slab", serif;
    font-size: 36px;
    line-height: normal;
    color: #2b2b2b;
  }
  .main-wrapper {
    width: 100%;
    margin: auto;
    padding: 0 15px;
    max-width: 1326px;
    overflow: hidden;
  }
  body {
    position: relative;
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: #2b2b2b;
    background: var(--color2);
  }
  .Navbar.scrolled {
    background-color: #fff !important;
    transition: background-color 0.2s linear;
    box-shadow: 0 2px 5px #e0e0ed;
  }
 /************************************************/
  #app {
    max-width: auto;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
  }

  a,
  .green {
    text-decoration: none;
    color: #000;
    transition: 0.4s;
    padding: 3px;
  }
  .buttonLimouni.demmarer{
    height: 58px;
  }
  .buttonLimouni{
    width: max-content;
    height: 38px;
    padding-left: 7px;
    padding-right: 7px;
  }
  .buttonLimouni:hover{
    background-color: var(--color5);
    border-color: var(--color1);
    color: var(--color1);
  }
  .homeCards{
    text-align: center;
    /* max-width: 325px;
    max-height: 283px; */
  }
  .buttonSouscrire,.buttonDevis{
    font-weight: 700;
  }
  .buttonSouscrire:hover,.buttonSouscrire2:hover{
    background-color: var(--color1);
    color: #fff;
  }
  .buttonDevis:hover{
    background-color: var(--color5);
    color: #fff;
  }
  @media (hover: hover) {
    a:hover {
      color: var(--color-limouni);
    }
  }

  @media (min-width: 1024px) {
    body {
      display: flex;
      place-items: center;
      min-height: 100vh;
      align-items: center;
    }
      /* #app {
        display: grid;
        grid-template-columns: 1fr;
        padding: 0 2rem;
      } */
  }

  body {
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    .navbar-link{
      color: #fff;
    }
  }

 :root {
    --navbar-bg-color: hsl(0, 0%, 15%);
    --navbar-text-color: hsl(0, 0%, 85%);
    --navbar-text-color-focus: white;
    --navbar-bg-contrast: #000;
  }
  * {
    box-sizing: border-box;
  }
  .container {
    max-width: 1280px;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    margin-left: auto;
    margin-right: auto;
  }
  #navbar {
    --navbar-height: 90px;
    height: var(--navbar-height);
    background-color: var(--navbar-bg-color);
    left: 0;
    right: 0;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); */
  }
  .navbar-container {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }
  .navbar-item {
    margin: 0.4em;
    width: 100%;
  }

  .home-link,
  .navbar-link {
    text-decoration: none;
    display: flex;
    font-weight: 400;
    align-items: center;
  }

  .home-link:is(:focus, :hover) {
    color: var(--navbar-text-color-focus);
  }

  .navbar-link {
    justify-content: center;
    width: 100%;
    padding: 0.4em 0.8em;
    border-radius: 5px;
  }
  
  .navbar-link:is(:focus, :hover) {
      color: var(--navbar-text-color-focus);
      background-color: var(--color5);
  }

  .navbar-logo {
    background-color: var(--navbar-text-color-focus);
    border-radius: 50%;
    width: 196px;
    height: 136px;
    margin-right: 0.5em;
  }
  #navbar-toggle {
    cursor: pointer;
    border: none;
    background-color: transparent;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon-bar {
    display: block;
    width: 25px;
    height: 4px;
    margin: 2px;
    background-color: var(--navbar-text-color);
  }
  #navbar-toggle:is(:focus, :hover) .icon-bar {
    background-color: var(--navbar-text-color-focus);
  }
  #navbar-toggle[aria-expanded="true"] .icon-bar:is(:first-child, :last-child) {
    position: absolute;
    margin: 0;
    width: 30px;
  }
  #navbar-toggle[aria-expanded="true"] .icon-bar:first-child {
    transform: rotate(45deg);
  }
  #navbar-toggle[aria-expanded="true"] .icon-bar:nth-child(2) {
    opacity: 0;
  }
  #navbar-toggle[aria-expanded="true"] .icon-bar:last-child {
    transform: rotate(-45deg);
  }
  #navbar-menu {
    position: fixed;
    top: var(--navbar-height);
    bottom: 0;
    opacity: 0;
    visibility: hidden;
    left: 0;
    right: 0;
  }
  #navbar-toggle[aria-expanded="true"] + #navbar-menu {
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 1;
    visibility: visible;
  }
  .navbar-links {
    list-style: none;
    position: absolute;
    background-color: var(--navbar-bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0;
    right: 0;
    margin: 1.4rem;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  #navbar-toggle[aria-expanded="true"] + #navbar-menu .navbar-links {
    padding: 1em;
  }
  @media screen and (min-width: 700px) {
    #navbar-toggle,
    #navbar-toggle[aria-expanded="true"] {
      display: none;
    }

    #navbar-menu,
    #navbar-toggle[aria-expanded="true"] #navbar-menu {
      visibility: visible;
      opacity: 1;
      position: static;
      display: block;
      height: 100%;
    }

    .navbar-links,
    #navbar-toggle[aria-expanded="true"] #navbar-menu .navbar-links {
      margin: 0;
      padding: 0;
      box-shadow: none;
      position: static;
      flex-direction: row;
      width: 100%;
      height: 100%;
    }
    .navbar-link {
      width: max-content !important;
    }
  }
  .btnDeuxClics{
    color:#fff;
  }
  .btnDeuxClics:hover{
    color:var(--color5);
  }
</style>


<script setup>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import { ref } from 'vue';
  const clearLocalStorage = () => {
    localStorage.clear();
    console.log("LocalStorage cleared, starting a new devis.");
  };

  const isNavbarExpanded = ref(false);

  const toggleNavbarVisibility = () => {
    isNavbarExpanded.value = !isNavbarExpanded.value;
    const navbarToggle = document.querySelector("#navbar-toggle");
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded.value.toString());
  };
</script>
