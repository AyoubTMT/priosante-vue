export function stopPrecedent() {
  if (currentSlide !== 1) {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, null, window.location.href);
      // $('#sure').modal('show');
      console.log(currentSlide);
      goBack();
    };
  }
}
window.onbeforeunload = function () {
  alert("tet");
};
export function mySubmitFunction(e) {
  e.preventDefault();
  someBug();
  return false;
}
var soloInput = $("input.solo");
soloInput.on("keyup", function () {
  var v = $(this).val();
  if (v.match(/^\d{2}$/) !== null) {
    $(this).val(v + "/");
  } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
    $(this).val(v + "/");
  }
});
export function moveToNext(selector, nextSelector) {
  $(selector).on("input", function () {
    if (this.value.length >= 2) {
      // Date has been entered, move
      $(nextSelector).focus();
    }
  });
}
export function moveToBack(selector, previousSelector) {
  $(selector).on("input", function () {
    if (this.value.length == 0) {
      // Date has been entered, move
      $(previousSelector).focus();
    }
  });
}
$( function () {
  moveToNext(".day", ".month");
  moveToNext(".month", ".year");
  moveToBack(".month", ".day");
  moveToBack(".year", ".month");
  moveToNext(".dayPersonne", ".monthPersonne");
  moveToNext(".monthPersonne", ".yearPersonne");
  moveToBack(".monthPersonne", ".dayPersonne");
  moveToBack(".yearPersonne", ".monthPersonne");
  moveToNext(".dayAssurer", ".monthAssurer");
  moveToNext(".monthAssurer", ".yearAssurer");
  moveToBack(".monthAssurer", ".dayAssurer");
  moveToBack(".yearAssurer", ".monthAssurer");
});
const inputs = document.querySelectorAll("input[type='tel']");
inputs.forEach((input) => {
  input.pattern = "[0-9]*";
  input.addEventListener("input", function () {
    if (!this.value.match(/^[0-9]*$/)) {
      this.value = this.value.replace(/[^0-9]/g, "");
    }
  });
});
const days = document.querySelectorAll(".day");
days.forEach( function (day) {
  day.addEventListener("input", function (event) {
    if (this.value > 31) {
      event.preventDefault();
      this.value = 31;
    }
  });
});
const months = document.querySelectorAll(".month");
months.forEach( function (month) {
  month.addEventListener("input", function (event) {
    if (this.value > 12) {
      event.preventDefault();
      this.value = 12;
    }
  });
});
const currentYear = new Date().getFullYear();
const years = document.querySelectorAll(".year");
years.forEach( function (year) {
  year.addEventListener("input", function (event) {
    if (this.value > currentYear) {
      event.preventDefault();
      this.value = currentYear;
    }
  });
});

/************************** IBAN VERIFICATION *****************************/

export function mod97(string) {
  var checksum = string.slice(0, 2),
    fragment;
  for (var offset = 2; offset < string.length; offset += 7) {
    fragment = String(checksum) + string.substring(offset, offset + 7);
    checksum = parseInt(fragment, 10) % 97;
  }
  return checksum;
}

export function isValidIBANNumber(iban) {
  iban = iban.replace(/\s/g, "");
  var Countries = {
    al: 28,
    ad: 24,
    at: 20,
    az: 28,
    bh: 22,
    be: 16,
    ba: 20,
    br: 29,
    bg: 22,
    cr: 21,
    hr: 21,
    cy: 28,
    cz: 24,
    dk: 18,
    do: 28,
    ee: 20,
    fo: 18,
    fi: 18,
    fr: 27,
    ge: 22,
    de: 22,
    gi: 23,
    gr: 27,
    gl: 18,
    gt: 28,
    hu: 28,
    is: 26,
    ie: 22,
    il: 23,
    it: 27,
    jo: 30,
    kz: 20,
    kw: 30,
    lv: 21,
    lb: 28,
    li: 21,
    lt: 20,
    lu: 20,
    mk: 19,
    mt: 31,
    mr: 27,
    mu: 30,
    mc: 27,
    md: 24,
    me: 22,
    nl: 18,
    no: 15,
    pk: 24,
    ps: 29,
    pl: 28,
    pt: 25,
    qa: 29,
    ro: 24,
    sm: 27,
    sa: 24,
    rs: 22,
    sk: 24,
    si: 19,
    es: 24,
    se: 24,
    ch: 21,
    tn: 24,
    tr: 26,
    ae: 23,
    gb: 22,
    vg: 24,
  };

  var Chars = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
    g: 16,
    h: 17,
    i: 18,
    j: 19,
    k: 20,
    l: 21,
    m: 22,
    n: 23,
    o: 24,
    p: 25,
    q: 26,
    r: 27,
    s: 28,
    t: 29,
    u: 30,
    v: 31,
    w: 32,
    x: 33,
    y: 34,
    z: 35,
  };

  iban = iban.toLowerCase();

  var codeBanque = iban.substr(4, 5);
  var codeGuichet = iban.substr(9, 5);

  // alert(1);

  // if (codeBanque == '16598' || (codeBanque == '10011' && codeGuichet == '00020') || iban == 'FR7612879000011109600800279') return false;
  // else

  {
    if (iban.length == Countries[iban.substr(0, 2)]) {
      var MovedChar = iban.substr(4) + iban.substr(0, 4);
      var MovedCharArray = MovedChar.split("");
      var NewString = "";

      for (const [key, value] of Object.entries(MovedCharArray)) {
        if (!$.isNumeric(MovedCharArray[key])) {
          MovedCharArray[key] = Chars[MovedCharArray[key]];
        }
        NewString += MovedCharArray[key];
      }
      // alert(NewString);

      if (mod97(NewString) === 1) {
        check = true;
      } else {
        check = false;
      }
    } else {
      check = false;
    }
  }
  console.log(check);

  if (check !== true) {
    $("#IBAN").addClass("inputError").removeClass("successinput");
    $("#IBAN + .errorMsg").show();
    $("#IBAN + .errorMsg p").html("Ce champ est requis");
  } else {
    $("#IBAN").removeClass("inputError").addClass("successinput");
    $("#IBAN + .errorMsg").hide();
  }
  return check;
}
