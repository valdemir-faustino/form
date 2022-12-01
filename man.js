const firebaseConfig = {
  apiKey: "AIzaSyC_17Vk8PZFEYyy2M1XiXKeLLs83h76RwM",
  authDomain: "fir-ok-f918c.firebaseapp.com",
  databaseURL: "https://fir-ok-f918c-default-rtdb.firebaseio.com",
  projectId: "fir-ok-f918c",
  storageBucket: "fir-ok-f918c.appspot.com",
  messagingSenderId: "195706400081",
  appId: "1:195706400081:web:c6151e59d2f0870a177770"
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
   var msgContent = getElementVal("msgContent");
 
   saveMessages(name, emailid, msgContent);
 
   //   alerta 
   document.querySelector(".alert").style.display = "block";
 
   //   remove o alerta do formulario 
   setTimeout(() => {
     document.querySelector(".alert").style.display = "none";
   }, 3000);
 
   //   reset o formulario 
   document.getElementById("contactForm").reset();
 }
 
 const saveMessages = (name, emailid, msgContent) => {
   var newContactForm = contactFormDB.push();
 
   newContactForm.set({
     name: name,
     emailid: emailid,
     msgContent: msgContent,
   });
 };
 
 const getElementVal = (id) => {
   return document.getElementById(id).value;
 };