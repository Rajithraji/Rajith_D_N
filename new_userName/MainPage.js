
function comment(){
      const x=document.getElementById("Name");
        const y=document.getElementById("Comment");
        x.style="display:block"
        y.style="display:block"    
        const submit=document.getElementById("submit");
        submit.style="display:block;"
// by using dom creaters

//     const input=document.createElement("input")
//     input.placeholder="enter your name"
//     input.style="margin:1px; width:96%"
//     input.id="Name";

//     const textArea=document.createElement("textarea")
//     textArea.placeholder="enter your comment here..."
//     textArea.style="margin-top:6px; width:98%; hight:15px"
// textArea.id="Comment";
//     const submit=document.getElementById("submit");
//  submit.style="display:block;"

//     div1.insertBefore(input,submit);
    
//     div1.insertBefore(textArea,submit);
    
    
    
    }
    function submit(){
        // localStorage.setItem("name","pramod");
        // sessionStorage.setItem("gfk","pramod");  
         const q=document.getElementById("Name");
         const w=document.getElementById("Comment");
      
     const key=q.value;
         const value=w.value;
      localStorage.setItem(key,value);
      sessionStorage.setItem(key,value);
  
       
        location.reload();
    }
    // menu bar
    function Menu_div(){
        const Menu_div=document.getElementById("menu-div9")
        console.log(Menu_div)
        Menu_div.style="display: block;"
                }
        
             function changemnu(){
        location.reload();
                }
    