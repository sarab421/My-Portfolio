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
