let a=0;
function showMenubar () {
  let sidebar = document.getElementById("right_side_nav");
let whatsaapButton = document.getElementById("whatsapp_btn");
   let closeIt = document.getElementById("closeIt");
   if(a==0){
     sidebar.style.display = "block"; 
     whatsaapButton.style.display="block"
     closeIt.style.display="none"

     a=1;
   }
   else if(a==1){
      sidebar.style.display = "none";
      whatsaapButton.style.display = "none";
      closeIt.style.display = "block";
      a = 0;
   }
   
  
};

function sendMessage() {
  const email = document.getElementById("contact_me_input").value;

  if (!email) {
    alert("Please enter an email.");
    return;
  }

  const templateParams = {
    email: email,
  };

  emailjs.send("service_1sdptov", "template_zhlxtcm", templateParams).then(
    function (response) {
      alert("Email sent successfully!");
      document.getElementById("contact_me_input").value="";
    },
    function (error) {
      console.error("Failed to send email:", error);
    }
  );
}
