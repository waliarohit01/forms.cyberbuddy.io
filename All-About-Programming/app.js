console.log("hi");

var database = firebase.database();

const date = (new Date()).toLocaleDateString('en-US');

function start() {
  var ele = document.querySelectorAll("input");
  ele.forEach((e) => {
    e.disabled = true;
    e.placeholder = "This form is closed.";
  });
};

function name_var() {
  var username = document.getElementById("name").value;
}

function send_message1() {
  name_var();
  var name1 = username;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var linkedin = document.getElementById("linkedin").value;
  var college = document.getElementById("college").value;
  var branch = document.getElementById("branch").value;
  var whatsapp = Yes;
  var instagram = Yes;
  var linkedin = Yes;
  var discord = Yes;
  var message = document.getElementById("message").value;
  var year = null;
  for (var i = 1; i <= 5; i++) {
    if (document.getElementById("year-"+i).checked == true) {
      year = "year" + i;
    }
  }
  if (document.getElementById("whatsapp").checked == false) {
      whatsapp = No;
  }
  if (document.getElementById("instagram").checked == false) {
      instagram = No;
  }
  if (document.getElementById("linkedin").checked == false) {
      linkedin = No;
  }
  if (document.getElementById("discord").checked == false) {
      discord = No;
  }
  var db = firebase.database();
  db.ref(name1 + date + " next").set({
    name: name1,
    number: number,
    email : email,
    linkedin : linkedin,
    college : college,
    branch : branch,
    whatsapp : whatsapp,
    instagram : instagram,
    linkedin : linkedin,
    discord : discord
  });
};

function send_message2() {
  name_var();
  var name2 = username;
  var level = null;
  var tech = document.getElementById("tech").value;
  var language = ["html","js","python","cpp","java"];
  var language_push = "";
  var proj = document.getElementById("proj").value;
  var exp = document.getElementById("exp").value;
  var feed = document.getElementById("feed").value;
  var db = firebase.database();

  for (var i = 1; i <= 3; i++) {  //coding level
    if (document.getElementById("level-"+i).checked == true) {
      level = "level" + i;
    }
  }
  for (var i = 0; i < language.length; i++) {
    if(document.getElementById(language[i]).checked == true) {
      language_push = language_push + language[i] + ", ";
    }
  }

  db.ref(name2 + date).set({
    level : level,
    tech : tech,
    language : language_push,
    proj : proj,
    exp : exp,
    feed : feed
  })
  .then(
    (onResolved) => {
      window.alert("Your response has been sent. We'll contact you soon.")
    }
  );
}

function white_bg() {
  document.getElementById("test").classList = null;
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList = null;
  });
  document.getElementById("input-test").classList = null;
}

function green_bg() {
  white_bg();
  document.getElementById("test").classList.add("green-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("green-bg-div");
  });
  document.getElementById("input-test").classList.add("green-bg-input");
}

function dark_bg() {
  white_bg();
  document.getElementById("test").classList.add("dark-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("dark-bg-div");
  });
  document.getElementById("input-test").classList.add("dark-bg-input");
}

function peach_bg() {
  white_bg();
  document.getElementById("test").classList.add("peach-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("peach-bg-div");
  });
  document.getElementById("input-test").classList.add("peach-bg-input");
}

function purple_bg() {
  white_bg();
  document.getElementById("test").classList.add("purple-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("purple-bg-div");
  });
  document.getElementById("input-test").classList.add("purple-bg-input");
}

$( "aside img" ).click(function() {
  alert($( this ).css( "transform" ));
  if (  $( this ).css( "transform" ) == 'none' ){
      $(this).css("transform","rotate(180deg)");
  } else {
      $(this).css("transform","" );
  }
});