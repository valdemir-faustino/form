const firebaseConfig = {
  apiKey: "AIzaSyB2PZPBMc6JR7_5cQQU4wzCHDEBm_NNw5A",
  authDomain: "contactform-74815.firebaseapp.com",
  databaseURL: "https://contactform-74815-default-rtdb.firebaseio.com",
  projectId: "contactform-74815",
  storageBucket: "contactform-74815.appspot.com",
  messagingSenderId: "278657556380",
  appId: "1:278657556380:web:6c7736222ca4e27a41b259"
}; //Chave Bispo

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