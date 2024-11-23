document.getElementById("Username").addEventListener("keyup",(e)=>{
    res=validate(e.target.value)
    document.getElementById("sname").textContent=res?"valid":"invalid"
    document.getElementById("sname").style=res?"color:green":"color:red"
   })
   
   
    function validate(data){
       const pattern=/^[a-z 0-9_.].{10}/
       return pattern.test(data)
    } 
    document.getElementById("Email").addEventListener("keyup",(e)=>{
        res=email(e.target.value)
        document.getElementById("smail").textContent=res?"valid":"invalid"
        document.getElementById("smail").style=res?"color:green":"color:red"
       })
       
       
        function email(data){
           const pattern=/.{4}[0-9](@gmail||@yahoo)\.com$/
           return pattern.test(data)
        } 


        document.getElementById("Password").addEventListener("keyup",(e)=>{
            res=pass(e.target.value)
            document.getElementById("spass").textContent=res?"valid":"invalid"
            document.getElementById("spass").style=res?"color:green":"color:red"
           })
           
           
            function pass(data){
               const pattern=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/
               return pattern.test(data)
            } 