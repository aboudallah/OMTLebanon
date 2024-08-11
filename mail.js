const firebaseConfig = {
    apiKey: "AIzaSyBNXS-LOVUfuuAvM3kN8nGltrBJp6UMKwA",
    authDomain: "website-45100.firebaseapp.com",
    databaseURL: "https://website-45100-default-rtdb.firebaseio.com",
    projectId: "website-45100",
    storageBucket: "website-45100.appspot.com",
    messagingSenderId: "225723906314",
    appId: "1:225723906314:web:287dfe0ccaa7e86c68a2f3",
    measurementId: "G-N26PKK61SJ"
  };


  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var emailid1 = getElementVal("emailid1");
  
    saveMessages(name, emailid, emailid1);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid,emailid1) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      emailid1: emailid1,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };