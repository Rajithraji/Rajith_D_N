// login page validation

function login_function(){
const phone=document.getElementById("phonenumber");
const pass=document.getElementById("password");



 const Phone= phone.value;
const Name=pass.value;

   if(Phone && Name)
  { let count=0;
   for(i=0;i<localStorage.length;i++)
        {
         const lphone=localStorage.key(i);
         var a=document.getElementById("logi-anchor");
        if(Phone==lphone){
            const btn1=document.getElementById("btn1");
          
         a.style="display:block;"
        //  btn1.innerHTML="";
         count++;
        }else{

            if(i==localStorage.length-1 && count==0){
                alert("you dont have acount in this page plz sign in")
            }

        }
      }
      
      
  }

       
}





