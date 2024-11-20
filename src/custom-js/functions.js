var api = "https://assurance-animaux.self-assurance.fr/devis_api/Devis_animaux";
var controle = true;
var currentSlide = 1;
let surfacem2;
let nbrPiece;
// verification
export function slide2verification(){

    if(controle == true){
        verifZipVille()
        if(verifZipVille()){
            return true;
        }else{
            return false;
        }
    }else{
        return true;
    }
}

export function slide3verification(){
    checkInputNumber('surfacem2',200,0)
    checkInputNumber('nbpiece',5,0);

    surfacem2 = $('#surfacem2').val();
    nbrPiece  = $('#nbpiece').val();

    $('#surfacem2 , #nbpiece').change(function(){
            $('#nbr_pieces_principales_sup30').removeClass('successinput').removeClass('inputError');
    });

    if(controle == true){
        if(checkInputNumber('surfacem2',200,0) && checkInputNumber('nbpiece',5,0)){
            return true;
        }else{
            return false;
        }
    }else{
        return true;
    }
    
}

export function slide4verification(){
    if(controle == true){
        if($("#superieur30m").is(":checked") && $("#dependances").is(":checked")){
            checkInputNumber('nbr_pieces_principales_sup30',6,0);
            checkInputNumber('nbr_dependances_sup30',5,0);
            checkInputNumber('surface_dependance',100,0);
            checkDependance()
            pieceSup();
            surfaceSup();
            if(checkDependance() && surfaceSup() && pieceSup() && checkInputNumber('nbr_pieces_principales_sup30',6,0) && checkInputNumber('nbr_dependances_sup30',5,0) && checkInputNumber('surface_dependance',100,0)){
               return true;
            }
       }
       else if($("#superieur30m").is(":checked")){
            checkInputNumber('nbr_pieces_principales_sup30',6,0);
            surfaceSup();
            if(surfaceSup() && pieceSup() && checkInputNumber('nbr_pieces_principales_sup30',6,0)){
               return true;
            }
       }else if($("#dependances").is(":checked")){
           checkInputNumber('nbr_dependances_sup30',5,0);
           checkInputNumber('surface_dependance',100,0);
           checkDependance();
           if(checkDependance() && checkInputNumber('nbr_dependances_sup30',5,0) && checkInputNumber('surface_dependance',100,0)){
               return true;
           }
       }else{
           return true;
       }
    }else{
        return true;
    }
}

export function slide5verification(){
    const sinistre = $('.declare_sinistre2ans:checked').val();
    const resilier = $('.resilie_par_assureur3ans:checked').val();
    const pro = $('.utilisations_professionnelles:checked').val();

    if(sinistre == "OUI" || resilier == "OUI" || pro == "OUI"){
        $("#infoMobile").modal('show');
        return false;
    }else{
        return true;
    }
}

export function slide6verification(){
    if(controle == true){
        if(checkInputNumber('capital',9999,0)){
            return true;
        }else{
            return false;
        } 
    }else{
        return true;
    }
}
// Navigation

export function showback(slide){
    if(slide !== 1){
        $('.slideback').show()
    }else{
        $('.slideback').hide()
    }
}

export function goBack(){
    if(currentSlide == 2){
        $('.hideSlides').hide();
        $('#slide1').show();
        $('.singleStep').removeClass('active').removeClass('current');
        $('.singleStep.step1').addClass('current');
        $('.progressMobile').css("width", "15%");
        currentSlide--
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'fast');
        showback(currentSlide);
    }
    if(currentSlide == 3){
        $('.hideSlides').hide();
        $('#slide2').show();
        $('.singleStep').removeClass('active').removeClass('current');
        $('.singleStep.step1').addClass('current');
        $('.progressMobile').css("width", "30%");
        currentSlide--
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'fast');
        showback(currentSlide);
    }
    if(currentSlide == 4){
        $('.hideSlides').hide();
        $('#slide3').show();
        $('.singleStep').removeClass('active').removeClass('current');
        $('.singleStep.step1').addClass('current');
        $('.progressMobile').css("width", "45%");
        currentSlide--
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'fast');
        showback(currentSlide);
    }
    if(currentSlide == 5){
        $('.hideSlides').hide();
        $('#slide4').show();
        $('.singleStep').removeClass('active').removeClass('current');
        $('.singleStep.step1').addClass('active');
        $('.singleStep.step2').addClass('current');
        $('.progressMobile').css("width", "60%");
        currentSlide--
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'fast');
        showback(currentSlide);
    }
    if(currentSlide == 6){
        $('.hideSlides').hide();
        $('#slide5').show();
        $('.singleStep').removeClass('active').removeClass('current');
        $('.singleStep.step1').addClass('active');
        $('.singleStep.step2').addClass('active');
        $('.singleStep.step3').addClass('current');
        $('.progressMobile').css("width", "70%");
        currentSlide--
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'fast');
        showback(currentSlide);
    }
    if(currentSlide == 7){
        $('.hideSlides').hide();
        $('#slide6').show();
        $('.singleStep').removeClass('active').removeClass('current');
        $('.singleStep.step1').addClass('active');
        $('.singleStep.step2').addClass('active');
        $('.singleStep.step3').addClass('current');
        $('.progressMobile').css("width", "90%");
        currentSlide--
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'fast');
        showback(currentSlide);
    }
    if(currentSlide == 8){
        $('.hideSlides').hide();
        $('#slide7').show();
        $('.progressMobile').css("width", "100%");
        currentSlide--
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'fast');
        showback(currentSlide);
    }
    stopPrecedent();
    showback(currentSlide);
}



export function goSlide2(){
        const type = $('.type_habitation:checked').val();

        if(type == "AUTRE"){
            $("#autrePopup").modal('show');
        }else{
            $('.hideSlides').hide();
            $('#slide2').show();;
            $('.progressMobile').css("width", "30%");
            currentSlide = 2;
        }

        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'fast');
        stopPrecedent();
        showback(currentSlide);
}


export function goSlide3(){

    if(slide2verification()){
        $('.hideSlides').hide();
        $('#slide3').show();
        $('.progressMobile').css("width", "45%");
        currentSlide = 3;
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'slow');
        stopPrecedent();
        showback(currentSlide);
        
        }
}

export function goSlide4(){
    if(slide3verification()){
        $('.hideSlides').hide();
        $('#slide4').show();
        $('.progressMobile').css("width", "60%");
        currentSlide = 4;
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'slow');
        stopPrecedent();
        showback(currentSlide);
        
    }
}

export function goSlide5(){
    if(slide4verification()){
        $('.hideSlides').hide();
        $('#slide5').show();
        $('.progressMobile').css("width", "70%");
        currentSlide = 5;

        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'slow');
        stopPrecedent();
        showback(currentSlide); 
        
    }
}

export function goSlide6(){
    if(slide5verification()){
        $('.hideSlides').hide();
        $('#slide6').show();
        $('.progressMobile').css("width", "90%");
        currentSlide = 6;
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'slow');
        stopPrecedent();
        showback(currentSlide);
    }
}

export function goSlide7(){
    if(slide6verification()){
        $('.hideSlides').hide();
        $('#slide7').show();
        $('.progressMobile').css("width", "100%");
        currentSlide = 7;
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'slow');
        stopPrecedent();
        showback(currentSlide); 
    }
}

export function devSlide7(){
    if(true){
        $('.hideSlides').hide();
        $('#slide7').show();
        $('.progressMobile').css("width", "100%");
        currentSlide = 7;
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'slow');
        stopPrecedent();
        showback(currentSlide); 
    }
}

export function goSlide8(){
    if(true){
        $('.hideSlides').hide();
        $('#slide8').show();
        $('.progressMobile').css("width", "80%");
        currentSlide = 8;
        if(successSlide = 6){
            successSlide = 7;
            }
        
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'slow');
        stopPrecedent();
        showback(currentSlide); 
    }
}

export function goTarif(){
    verifNom()
    verifPrenom()
    //verifTelephone()
    telephoneOuPas()
    verifEmail()
    checkAge()
    verifDateEffet()
    verifEtreAppeler()
    if(verifNom() && verifPrenom() && telephoneOuPas() && verifEmail() && checkAge() && verifDateEffet() && verifEtreAppeler()){
        if($('#telephone').val() == ""){
            $('#telephone').val("0134569890");
        }
        $("#form").submit();
        return true;
    }else{
        return false;
    }
}

export function goToPayCB(){

    
    const iban = $('#IBAN').val()
    verifTitulaire()
    isValidIBANNumber(iban)
    // verifAccept()
    verifCheckBox('smspay', true)

    if(verifTitulaire() && isValidIBANNumber(iban) && verifCheckBox('smspay', true)){
        $("#formulaire").submit();
    }else{
        return false;
    }
}


$('.trigNumber.plus').click(function(){
   let numVal =  $(this).next('.trigNumber.moin').next('input').val();
   const newnumVal = parseFloat(numVal) + 1 ;
   const maxval = $(this).next('.trigNumber.moin').next('input').attr('maxval');
    if(numVal == ""){
        $(this).next('.trigNumber.moin').next('input').val("1");
    }
   else if(newnumVal <= maxval){
    $(this).next('.trigNumber.moin').next('input').val(newnumVal);
     }
});

$('.trigNumber.moin').click(function(){
   let numVal =  $(this).next('input').val();
   const newnumVal = parseFloat(numVal) - 1 ;
   const minval = $(this).next('input').attr('minval');

   if(newnumVal >= minval){
   $(this).next('input').val(newnumVal);
    }
});


// VÃ©rification E-mail

export function verifEmail(){
    var email = $('#email').val();
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email == ""){
       $('#email').addClass('inputError').removeClass('successinput');
       $('.errorEmail').show();
       $('.errorEmail p').html('Ce champ est requis');
       return false;
    } else if (!pattern.test(email)) {
        $('#email').addClass('inputError').removeClass('successinput');
        $('.errorEmail').show();
        $('.errorEmail p').html('Veuillez introduire un e-mail au bon format');
        return false;
    } else {
        $('#email').removeClass('inputError').addClass('successinput');;
        $('.errorEmail').hide();
        return true;
    }
}
$(document).ready(function(){
    $("#email").keyup(function() {
        verifEmail();
    });
});

// Verification Age de l'assureur

export function createDate(year, month, day) {
    const date = new Date(year, month-1, day);
    if(year.length >= 2) {
        date.setFullYear(parseInt(year));
    }
    return date;
}

export function checkAge() {
    const day = $('.dayPersonne').val();
    const month = $('.monthPersonne').val();
    const year = $('.yearPersonne').val();
    const birthday = createDate(year, month, day);
    const age = (new Date().getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    const formatedDate = (day+'/'+ month + '/'+ year);
    if(day =="" || month =="" || year == ""){
        $('.ddnPersonne').addClass('inputError').removeClass('successinput');
        $('.ddnPersonne + .errorMsg').show();
        $('.ddnPersonne + .errorMsg p').html('Vous devez entrer une date de naissance correcte');
        return false;
    }else if(!estDateValide(formatedDate)){
        $('.ddnPersonne').addClass('inputError').removeClass('successinput');
        $('.ddnPersonne + .errorMsg').show();
        $('.ddnPersonne + .errorMsg p').html('Vous devez entrer une date de naissance correcte');
        return false;
    }
    else if(age >= 18 && age < 80){
        $('.ddnPersonne').removeClass('inputError').addClass('successinput');;
        $('.ddnPersonne + .errorMsg').hide();
        return true;
    }else{
        $('.ddnPersonne').addClass('inputError').removeClass('successinput');
        $('.ddnPersonne + .errorMsg').show();
        $('.ddnPersonne + .errorMsg p').html('Vous devez avoir entre 18 et 80 ans');
        return false;
    }
  }


  export function estDateValide(date) {
    // On dÃƒÂ©compose la date en jour, mois et annÃƒÂ©e
    const [jour, mois, annee] = date.split("/").map(Number);

    // On vÃƒÂ©rifie si l'annÃƒÂ©e est bissextile
    const estBissextile = (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0;

    // On dÃƒÂ©finit le nombre de jours par mois
    const joursParMois = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // On ajuste le nombre de jours en fÃƒÂ©vrier pour les annÃƒÂ©es bissextiles
    if (estBissextile) {
        joursParMois[2] = 29;
    }

    // On vÃƒÂ©rifie que les valeurs de jour et mois sont valides et que l'annÃƒÂ©e a 4 chiffres
    return mois >= 1 && mois <= 12 && jour >= 1 && jour <= joursParMois[mois] && annee.toString().length === 4;
}



// #############################################################

  var i= 1;

  $('#zipcode').keyup(function(){
    combienLi = $('.listVilles li').length;
    if(i == 1 || combienLi < 2){
        $('.listVilles').hide();
        i++;
    }else{
        $('.listVilles').show();
    }
    
  });

  $(window).click(function() {
    $('.listVilles').hide();
    $('#villesCp').hide();
    $('#stationCp').hide();
    $('#adresses').hide();

    if($('.villeCpSearch').val() !== "" && $('.villeSearch').val() == ""){
           //console.log($('.villeSearch').val());
          $('#villesCp li:nth-child(1)').click();
        }
    
  });
  
$(document).ready(function(){
    $('#zipcode').click(function(){
        $('.listVilles').toggle();
      });

    $('.villeCpSearch').keyup(function(){
        let pressedKey = $('.villeCpSearch').val();
         if( pressedKey != ''){
            get_villezip(pressedKey);
            $('.villeCpSearch ').removeClass('inputError').removeClass('successinput');;
            $('.villeCpSearch  + .errorMsg').hide();
        }
        $('.villeSearch').val('');
        $('.cpSearch').val('');
        
    });
})

export function selectCpVille(cp,ville){
    $('#villesCp').hide();
    $('.villeSearch').val(ville);
    $('.cpSearch').val(cp);
    $('.villeCpSearch').val(cp+' '+ville)
    verifZipVille();
}



export function get_villezip(key){
    
    $('#villesCp').html('');
    $('#villesCp').hide();
    $.ajax({ 
        type: 'GET', 
        url: api+'/get_cities_by_key?key='+key, 
        success:function (data) { 
          
           if(data){
            $('#villesCp').html('');
            $('#villesCp').show();
            var obj = JSON.parse(data);
            $.each(obj, function(index, element) {
                $('#villesCp').append(`<li onclick="selectCpVille('`+element.cp+`','`+element.ville+`')">`+element.cp +` `+element.ville+`</li>`);
            });
        }
        }
    });
}


// Verification du champ Ville & code postale

export function verifZipVille(){
    var laVille = $('[name="ville"]') ;
    var leCp = $('[name="cp"]');
    if( laVille.val() == "" && leCp.val() == "") {
        $('.villeCpSearch').addClass('inputError').removeClass('successinput');
        $('.villeCpSearch + .errorMsg').show();
        $('.villeCpSearch + .errorMsg p').html('Une ville doit Ãªtre sÃ©lectionnÃ©e.');
        return false;
    }else{
        $('.villeCpSearch ').removeClass('inputError').addClass('successinput');;
        $('.villeCpSearch  + .errorMsg').hide();
        return true;
    }
}


// Verification Date d'effet

export function verifDateEffet(){ 
  
    var dDate = $('[name="dayAssurerr"]').val();
    var mDate = $('[name="monthAssurerr"]').val();
    var yearDate = $('[name="yearAssurerr"]').val();
    if(dDate=='' || mDate=='' || yearDate==''){
        $('.date-input-container.forEffet').addClass('inputError').removeClass('successinput');
        $('.date-input-container.forEffet + .errorMsg').show();
        $('.date-input-container.forEffet + .errorMsg p').html("La date doit impérativement être renseignée");
        return false;
    }else{
        var now = new Date(); 
        if(now.getHours() == "23") {
            plusDays = 2;
        }
        else{
            plusDays = 1;
        }
        minDate = new Date(now.getFullYear(), now.getMonth(),now.getDate()+plusDays);  
        maxDate = new Date(now.getFullYear(), now.getMonth()+3, now.getDate());  
        var dateEffet = new Date(yearDate,mDate-1,dDate);

        if((dateEffet.getTime() < minDate.getTime()) || (dateEffet.getTime() > maxDate.getTime())){
            $('.date-input-container.forEffet').addClass('inputError').removeClass('successinput');
            $('.date-input-container.forEffet + .errorMsg').show();
            $('.date-input-container.forEffet + .errorMsg p').html("La date doit impérativement être renseignée");
            return false; 
        }  else{
            $('.date-input-container.forEffet').removeClass('inputError').addClass('successinput');
            $('.date-input-container.forEffet + .errorMsg').hide();
            $('.date-input-container.forEffet + .errorMsg p').html("La date doit impérativement être renseignée");
            return true; 
        }
    
    }
}


// Verification etre appeler

export function verifEtreAppeler(){
var etreAppeler = $('#etreappeler').val();
if (etreAppeler == ""){
    $('#etreappeler').addClass('inputError').removeClass('successinput');
    $('#etreappeler + .errorMsg').show();
    $('#etreappeler + .errorMsg p').html('Ce champ est requis.');
    return false;
    }else{
        $('#etreappeler ').removeClass('inputError').addClass('successinput');;
        $('#etreappeler  + .errorMsg').hide();
        return true;
    }
}

$(document).ready(function(){
$('#etreappeler').change(function(){
    verifEtreAppeler();
});
$('#sms').click(function(){
    if($('#sms').is(":checked")){
        $('.form-check.bgcheck').css('background-color','var(--green3)');
        $('.form-check.bgcheck').css('border','1px solid var(--green2)');
    }else{
        $('.form-check.bgcheck').css('background-color','#eaecf1');
        $('.form-check.bgcheck').css('border','0px solid var(--green2)');
    }
})
})


// Verification date d'assurance

$(document).ready(function(){
    dateAssurrer();
})

export function dateAssurrer(){
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    var dayAssurerField = $('.dayAssurer');
    var mouthAssurerField = $('.monthAssurer');
    var yearAssurerField = $('.yearAssurer');
    var allDate = formatDate(tomorrow);
    var parts = allDate.split('-');
    var day = parts[0];
    var month = parts[1];
    var year = parts[2];
    // dayAssurerField.val(day);
    // mouthAssurerField.val(month);
    // yearAssurerField.val(year);

    //$('.effetDate').text(day+'/'+month+'/'+year);
}

// Changer la date d'effet tarifs

export function changeEffet(){
    let eday = $('.dayAssurer').val();
    let emonth =$('.monthAssurer').val();
    let eyear = $('.yearAssurer').val();
    $('.effetDate').text(eday+'/'+emonth+'/'+eyear);
    $('input[name=date_effet]').val(eday+'/'+emonth+'/'+eyear);
   }
   

export function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return pad(day) + '-' + pad(month) + '-' + year;
  }

  export function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }


// ###########################################################

export function get_stationnement(key){
    
    $('#stationCp').html('');
    $('#stationCp').hide();
    $.ajax({ 
        type: 'GET', 
        url: api+'/get_cities_by_key?key='+key, 
        success:function (data) { 
          
           if(data){
            $('#stationCp').html('');
            $('#stationCp').show();
            var obj = JSON.parse(data);
            $.each(obj, function(index, element) {
                $('#stationCp').append(`<li onclick="selectStation('`+element.cp+`','`+element.ville+`')">`+element.cp +` `+element.ville+`</li>`);
            });
        }
        }
    });
}

export function selectStation(cp,ville){
    $('#stationCp').hide();
    $('.stationVille').val(ville);
    $('.stationcp').val(cp);
    $('#stationnement').val(cp+' '+ville)
    verifZipVille();
}

$(document).ready(function(){

    $('#stationnement').keyup(function(){
        let pressedKey = $('#stationnement').val();
         if( pressedKey != ''){
            get_stationnement(pressedKey);
            $('#stationnement').removeClass('inputError').removeClass('successinput');;
            $('#stationnement  + .errorMsg').hide();
        }
        $('.stationVille').val('');
        $('.stationCp').val('');
        
    });
})


$(document).ready(function(){
$('#etreappeler').change(function(){
    verifEtreAppeler();
});
$('#sms').click(function(){
    if($('#sms').is(":checked")){
        $('.form-check.bgcheck').css('background-color','var(--green3)');
        $('.form-check.bgcheck').css('border','1px solid var(--green2)');
    }else{
        $('.form-check.bgcheck').css('background-color','#eaecf1');
        $('.form-check.bgcheck').css('border','0px solid var(--green2)');
    }
})
})

export function verifPrenom(){
    prenom = $('[name="prenom"]').val();
    if(!prenom.length){
        $('[name="prenom"]').addClass('inputError').removeClass('successinput');
        $('[name="prenom"] + .errorMsg').show();
        $('[name="prenom"] + .errorMsg p').html('Le champ prÃ©nom est requis')
    }else if(prenom.length < 2){
        $('[name="prenom"]').addClass('inputError').removeClass('successinput');
        $('[name="prenom"] + .errorMsg').show();
        $('[name="prenom"] + .errorMsg p').html('Le prÃ©nom doit comporter au moins deux caractÃ¨res')
    }else if(!isNaN(prenom)){
        $('[name="prenom"]').addClass('inputError').removeClass('successinput');
        $('[name="prenom"] + .errorMsg').show();
        $('[name="prenom"] + .errorMsg p').html('Le prÃ©nom ne doit pas comporter que des nombres');
    }else{
        $('[name="prenom"]').removeClass('inputError').addClass('successinput');;
        $('[name="prenom"] + .errorMsg').hide();
        return true;
    }

    return false;
}

export function verifNom(){
    nom = $('[name="nom"]').val();
    if(!nom.length){
        $('[name="nom"]').addClass('inputError').removeClass('successinput');
        $('[name="nom"] + .errorMsg').show();
        $('[name="nom"] + .errorMsg p').html('Le champ nom est requis')
    }else if(nom.length < 2){
        $('[name="nom"]').addClass('inputError').removeClass('successinput');
        $('[name="nom"] + .errorMsg').show();
        $('[name="nom"] + .errorMsg p').html('Le nom doit comporter au moins deux caractÃ¨res');
    }else if(!isNaN(nom)){
        $('[name="nom"]').addClass('inputError').removeClass('successinput');
        $('[name="nom"] + .errorMsg').show();
        $('[name="nom"] + .errorMsg p').html('Le nom ne doit pas comporter que des nombres');
    }else{
        $('[name="nom"]').removeClass('inputError').addClass('successinput');
        $('[name="nom"] + .errorMsg').hide();
        return true;
    }

    return false;
}


export function verifpostalAdress(){
    if($('#num-voie').val() !== "" && $('#type_voie').val() !== "" && $('#adressePostale').val() !== "" ){
        $('#num-voie').removeClass('inputError').addClass('successinput');
        $('#type_voie').removeClass('inputError').addClass('successinput');
        $('#adressePostale').removeClass('inputError').addClass('successinput');
        return true;
    }else{
        $('#num-voie').addClass('inputError').removeClass('successinput');
        $('#type_voie').addClass('inputError').removeClass('successinput');
        $('#adressePostale').addClass('inputError').removeClass('successinput');
        return false;
    }
}

export function verifTelephone(){
    let tel = $('#telephone').val();
    var pattern = /^(0)[1-9][0-9]{8}$/;
    if(!pattern.test(tel)){
        $('#telephone').addClass('inputError').removeClass('successinput');
        $('#telephone + .errorMsg').show();
        $('#telephone + .errorMsg p').html('Ce champ est requis');
        return false;
    }else{
        $('#telephone').removeClass('inputError').addClass('successinput');;
        $('#telephone + .errorMsg').hide();
        return true;
    }
}

 // Verifier si l'utilisateur a remplis le tÃ©lÃ©phone ou pas

 export function telephoneOuPas(){
    const telephone = $('#telephone').val();
    var pattern = /^(0)[1-9][0-9]{8}$/;
        if(telephone == ""){
            $('#telephone').removeClass('inputError');
            $('#telephone + .errorMsg').hide();
            $('#etreappeler').val('pas_de_rappel');
            return true;
        }else if(telephone !== "" && !pattern.test(telephone)){
            $('#telephone').addClass('inputError').removeClass('successinput');
            $('#telephone + .errorMsg').show();
            $('#telephone + .errorMsg p').html('Vous devez entrer un numÃ©ro de tÃ©lÃ©phone dans le bon format');
            return false;
        }else{
            $('#telephone').removeClass('inputError').addClass('successinput');;
            $('#telephone + .errorMsg').hide();
            $('#etreappeler').val('aujourdhui')
            return true;
        }
}

export function telkeyup(){
    const telephone = $('#telephone').val();
    var pattern = /^(0)[1-9][0-9]{8}$/;
    if(telephone == "" || telephone < 10){
            $('#telephone').removeClass('inputError');
            $('#telephone + .errorMsg').hide();
            return true;
        }else if(telephone !== "" && !pattern.test(telephone)){
            $('#telephone').removeClass('inputError').removeClass('successinput');
            $('#telephone + .errorMsg').hide();
            $('#telephone + .errorMsg p').html('Vous devez entrer un numÃ©ro de tÃ©lÃ©phone dans le bon format');
            return false;
        }else{
            $('#telephone').removeClass('inputError').addClass('successinput');;
            $('#telephone + .errorMsg').hide();
        return true;
    }
}

export function verifMobile(){
    let tel = $('.mobileInput').val();
    var pattern = /^(06|07)[0-9]{8}$/
    if(!pattern.test(tel)){
        $('.mobileInput').addClass('inputError').removeClass('successinput');
        $('.mobileInput + .errorMsg').show();
        $('.mobileInput + .errorMsg p').html('Ce champ est requis');
        return false;
    }else{
        $('.mobileInput').removeClass('inputError').addClass('successinput');;
        $('.mobileInput + .errorMsg').hide();
        return true;
    }
}

// $('#telephone').keyup(function(){
//     verifTelephone();
// });

$('.mobile').keyup(function(){
    verifMobile();
});

export function logementsup(){
    if($('#superieur30m:checked').val() == "superieur30m"){
        $('.surfaceSup').show();
    }else{
        $('.surfaceSup').hide();
    }

    if($('#dependances:checked').val() == "dependances"){
        $('.depSup').show();
    }else{
        $('.depSup').hide();
    }

    if($('#chemine:checked').val() == "chemine"){
        $('.chemSup').show();
    }else{
        $('.chemSup').hide();
    }
}


export function checkInputNumber(inputId, max, min){
    const selector = '#'+inputId;
    const selectorError = 'label[for='+inputId+'] + div + .errorMsg';
    const selectorErrorParagraph = 'label[for='+inputId+'] + div + .errorMsg p';
    const inputValue = $(selector).val();
    let msgError = "";

    if(inputValue > max){
        msgError = 'La valeur entrÃ©e dÃ©passe la valeur maximal de '+max;
        if(inputId=="surfacem2") msgError = 'La superficie ne doit pas excÃ©der '+max+' mÂ²';
        if(inputId=="nbpiece") msgError = 'Le bien ne doit pas possÃ©der plus de 5 piÃ¨ces';
        $(selector).addClass('inputError').removeClass('successinput');
        $(selectorError).show();
        $(selectorErrorParagraph).html(msgError);
        return false;
    }else if(inputValue < min){
        msgError = 'La valeur entrÃ©e dÃ©passe la valeur minimal de '+min;
        $(selector).addClass('inputError').removeClass('successinput');
        $(selectorError).show();
        $(selectorErrorParagraph).html(msgError);
        return false;
    }else if(inputValue == ""){
        msgError = 'Ce champ est requis';
        $(selector).addClass('inputError').removeClass('successinput');
        $(selectorError).show();
        $(selectorErrorParagraph).html(msgError);
        return false;
    }else{
        $(selector).removeClass('inputError').addClass('successinput');;
        $(selectorError).hide();
        return true;
    }
}

$('input[type=number]').keyup(function(){
    $(this).removeClass('inputError').removeClass('successinput');
    $('.errorMsg').hide();
});

export function checkTypeHabitat(){
        const type = $('.type_habitation:checked').val();

        if(type == "MAISON"){
            $('.maisoncondition').show();
            $('.appartementcondition').hide();
        }else if(type == "APPARTEMENT" || type=="STUDIO"){
            $('.appartementcondition').show();
            $('.maisoncondition').hide();
        }else{
            $('.appartementcondition').hide();
            $('.maisoncondition').hide();
        }
    }

$(document).ready(function(){
    checkTypeHabitat();
})


$('.enfantCivilite, .enfantName , .enfantFirstName').change(function(){
    checkEnfants();
});
$('.enfantCivilite, .enfantName , .enfantFirstName').keyup(function(){
    checkEnfants();
});


$(document).ready(function(){
    $('#num-voie , #type_voie , #adressePostale').keyup(function(){
        verifpostalAdress();
    });
   });


export function verifTitulaire(){
    titulaire = $('[name="titulaire_compte"]').val();
    if(!titulaire.length){
        $('[name="titulaire_compte"]').addClass('inputError').removeClass('successinput');
        $('[name="titulaire_compte"] + .errorMsg').show();
        $('[name="titulaire_compte"] + .errorMsg p').html('Le champ titulaire est requis')
    }else if(titulaire.length < 2){
        $('[name="titulaire_compte"]').addClass('inputError').removeClass('successinput');
        $('[name="titulaire_compte"] + .errorMsg').show();
        $('[name="titulaire_compte"] + .errorMsg p').html('le titulaire doit comporter 2 charactÃƒÂ¨res au minimum');
    }else if(!isNaN(titulaire)){
        $('[name="titulaire_compte"]').addClass('inputError').removeClass('successinput');
        $('[name="titulaire_compte"] + .errorMsg').show();
        $('[name="titulaire_compte"] + .errorMsg p').html('Le titulaire ne doit pas comporter que des nombres');
    }else{
        $('[name="titulaire_compte"]').removeClass('inputError').addClass('successinput');
        $('[name="titulaire_compte"] + .errorMsg').hide();
        return true;
    }

    return false;
}

export function verifCheckBox(id,required){
    const simpleId = '#'+id;
    const selector = '#' + id + ':checked';
    const errorSelect = "." + id + 'Error';
    const blockSelect = "." + id + 'Block';
    const accept = $(selector).val();

    console.log(blockSelect +' - '+ errorSelect)

    
        if($(simpleId).is(":checked")){
            $(blockSelect).css('background-color','var(--green3)');
            $(blockSelect).css('border','1px solid var(--green2)');
    
        }else{
            $(blockSelect).css('background-color','#eaecf1');
            $(blockSelect).css('border','1px solid #dee2e6');
        }
        if(required){
            if(accept !== "accept"){
                $(errorSelect).show();
                $(blockSelect).addClass('bgcheckError');
                return false;
            }else{
                $(errorSelect).hide();
                $(blockSelect).removeClass('bgcheckError');
                return true;
            }
        }
}


export function verifyInputs() {

    console.log('dÃ©clanchÃ©')
    let inputsToVerify = document.getElementsByClassName("toVerify");
    let isValid = true;
  
    for (let i = 0; i < inputsToVerify.length; i++) {
      if (!inputsToVerify[i].value) {
        $('.toVerify').css('border','1px solid var(--color1)');
        $('.alertddnenfants p').text('Les champs en rouge sont requis');
        $('.alertddnenfants').show();
        isValid = false;
        break;
      }
      const dateBrute = inputsToVerify[i].value;
      const slitedDate = dateBrute.split('/');
      
      const theDay = slitedDate[0];
      const theMonth = slitedDate[1];
      const theYear = slitedDate[2];
      const birthday = new Date(theYear, theMonth - 1, theDay);
      const age = (new Date().getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
      if(theDay =="" || theMonth =="" || theYear == ""){
        $('.toVerify').css('border','1px solid var(--color1)');
        if(nbrEnfants == 1){
            $('.alertddnenfants p').text("L'un des dates de naissance de vos enfants n'est pas valide");
        }else{
            $('.alertddnenfants p').text("Vous devez entrer une date de naissance correcte");
        }
        $('.alertddnenfants').show();
        isValid = false;
        break;
    }else if(theDay =="00" || theMonth =="00" || theYear == "0000"){
        $('.toVerify').css('border','1px solid var(--color1)');
        $('.alertddnenfants p').text("L'un des dates de naissance de vos enfants n'est pas valide");
        $('.alertddnenfants').show();
        isValid = false;
        break;
    }
    else if(theDay > "31" || theMonth > "12"){
        $('.toVerify').css('border','1px solid var(--color1)');
        $('.alertddnenfants p').text("L'un des dates de naissance de vos enfants n'est pas valide");
        $('.alertddnenfants').show();
        isValid = false;
        break;
    }
    else if(age >= 0 && age < 22){
        $('.toVerify').css('border','1px solid #dee2e6');
        $('.alertddnenfants').hide();
        isValid = true;
    }else if(age > 22){
        $('.toVerify').css('border','1px solid var(--color1)');
        if(nbrEnfants == 1){
            $('.alertddnenfants p').text('Votre enfant doit avoir moins de 22 ans');
        }else{
            $('.alertddnenfants p').text('Vos enfants ne doivent pas dÃ©passer 22 ans');
        }
        $('.alertddnenfants').show();
        isValid = false;
        break;
    }else if(age <= 0){
        $('.toVerify').css('border','1px solid var(--color1)');
        $('.alertddnenfants p').text('Entrez une date valide');
        $('.alertddnenfants').show();
        isValid = false;
        break;
    }else{
        $('.toVerify').css('border','1px solid var(--color1)');
        $('.alertddnenfants p').text('Les champs en rouge sont requis');
        $('.alertddnenfants').show();
        isValid = false;
        break;
    }
    }
  
    return isValid;
  }

  export function equipement (){
    if($("#superieur30m").is(':checked') || $("#dependances").is(':checked') || $("#veranda").is(':checked') || $("#garage").is(':checked') || $("#alarme").is(':checked') || $("#chemine").is(':checked')){
        $('.equippedOrNot').text('Ã‰tape suivante');
        console.log('Un ou plusieurs Ã©quipement sont selectionnÃ©e')
    }else{
        $('.equippedOrNot').text('Aucun de ces Ã©quipements');
    }
  }


  export function surfaceSup(){
    let nbrSurfaceSup = $('#nbr_pieces_principales_sup30').val();

    let calculeSuface = Math.ceil(surfacem2 / nbrSurfaceSup);
    
    console.log(nbrSurfaceSup);
    if(nbrSurfaceSup == ""){
        $('#nbr_pieces_principales_sup30').removeClass('successinput').addClass('inputError');
        $('.surfaceSup .errorMsg').show().text('Ce champ est requis');
        return false;
    }else if( nbrSurfaceSup != '' && calculeSuface > 30 ){
        $('#nbr_pieces_principales_sup30').addClass('successinput').removeClass('inputError');
        return true;
    }else{
        $('#nbr_pieces_principales_sup30').removeClass('successinput').addClass('inputError');
        $('.surfaceSup .errorMsg').show().text('Le nombre de piÃ¨ces ne correspond pas Ã  la superficie du bien');
        return false;
    }
  }

  export function pieceSup(){

    let pieceSup = $('#nbr_pieces_principales_sup30').val();
   
    if(pieceSup == ""){
        $('#nbr_pieces_principales_sup30').removeClass('successinput').addClass('inputError');
        $('.surfaceSup .errorMsg').show().text('Ce champ est requis');
        return false;
    }else if(nbrPiece < pieceSup){
        console.log('Ã§a passe pas')
        $('#nbr_pieces_principales_sup30').removeClass('successinput').addClass('inputError');
        $('.surfaceSup .errorMsg').show().text('Le nombre de piÃ¨ces gÃ©nÃ©ral ne correspond pas aux piÃ¨ces supÃ©rieures Ã  30 mÂ²');
        return false;
    }else{
        $('#nbr_pieces_principales_sup30').addClass('successinput').removeClass('inputError');
        console.log("Ã§a passe");
        return true;
    }
    
  }

  export function checkDependance(){
    let depPiece = $('#nbr_dependances_sup30').val();
    let depSur = $('#surface_dependance').val();

    let calculeDepSurface = Math.ceil(depSur / depPiece);

    if(depPiece == ""){
        $('#nbr_dependances_sup30').removeClass('successinput').addClass('inputError');
        $('.sufdep + .errorMsg').show().text('Ce champ est requis');
        return false;
    }else if(depSur == ""){
        $('#nbr_dependances_sup30').removeClass('successinput').addClass('inputError');
        $('.sufm2 + .errorMsg').show().text('Ce champ est requis');
        return false;
    }else if( calculeDepSurface > 30 ){
        $('#nbr_dependances_sup30 , #surface_dependance').addClass('successinput').removeClass('inputError');
        $('.sufm2 + .errorMsg , .sufdep + .errorMsg').hide()
        return true;
    }else{
        $('#nbr_dependances_sup30 , #surface_dependance').removeClass('successinput').addClass('inputError');
        $('.sufm2 + .errorMsg').show().text('La surface des dÃ©pendances ne correspond pas au nombre de dÃ©pendances de plus de 30 mÂ²');
        return false;
    }

  }