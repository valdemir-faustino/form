const firebaseConfig = {
  apiKey: "AIzaSyDagsmgkKg5InV6tLqxSbX1qTflzPKd6-4",
  authDomain: "formulario-dbb7d.firebaseapp.com",
  databaseURL: "https://formulario-dbb7d-default-rtdb.firebaseio.com",
  projectId: "formulario-dbb7d",
  storageBucket: "formulario-dbb7d.appspot.com",
  messagingSenderId: "232963347074",
  appId: "1:232963347074:web:eaabd2757a0260f8439a9b"
};


  // inicializar o firebase
  firebase.initializeApp(firebaseConfig);
  
  // referenciar seu database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var dateid = getElementVal("dateid");
    var msgContent = getElementVal("msgContent");
    
    //teste de nome de base
    saveMessages(name, emailid, dateid, msgContent);
  
    //   alerta 
    document.querySelector(".alert").style.display = "block";
  
    //   remove o alerta do formulario 
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset o formulario 
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, dateid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      dateid: dateid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };