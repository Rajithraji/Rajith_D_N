// otp generation
 var OTP;
function genarated_otp(){
    const Otp_output=document.getElementById("otp_output");
    genarated_otp=Math.random()*(9999-1000)+1000;
     OTP=Math.floor(genarated_otp);
    Otp_output.innerHTML=OTP;
    // Otp_output.style="border: 2px solid white;"
    // Otp_output.placeholder=`Otp is:${OTP}`;

}


// validation for sighn_in

function singnin_func(){
    const Otp_output=document.getElementById("otp_output");
var res=Otp_output.innerText;

    const phone=document.getElementById("signin_phone");
const pass=document.getElementById("password");
const get_otp=document.getElementById("send_otp");
// const otp_output=document.getElementById("otp_output").innerHTML;

// console.log(otp_output);
    const Phone= phone.value;
    const Name=pass.value;
 var Get_otp=get_otp.value;

 


   if(Phone && Name )
   { 
    //    console.log(Get_otp)
    // console.log(res)
     if(Get_otp==res){
        let count=0;
        for(i=0;i<localStorage.length;i++)
           {
            const lphone=localStorage.key(i);
           if(Phone==lphone){
               alert("your already exited user plz login")
            location.reload();
          count++;
           }
           }
          if(count==0){
              localStorage.setItem(Phone,Name)
   
          }

     }else{
         alert("invalid otp");
     }
      
   }else{
       alert("plz fill all the blanks")
   }
}

