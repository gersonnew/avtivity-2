function getTotal(){
   let a = document.getElementById('prc').value;
   let b = document.getElementById('qnty').value;

    
        let x = Number(a) * Number(b);
    
    document.getElementById('answer').innerHTML = + x;

}

function  save(){
    let a = document.getElementById("incash").value;
    let b= document.getElementById("answer").innerText;
      
         let y = Number(a) - Number(b);
       

   
     document.getElementById('change').innerHTML = "Change:" +y;


                  //summary//
     let a1 = document.getElementById('pdct').value;
     document.getElementById("product").innerHTML =  a1;


     let a2 = document.getElementById('prc').value;
     document.getElementById("price").innerHTML = a2;

     let a3 = document.getElementById('qnty').value;
     document.getElementById("quantity").innerHTML = a3;

     let a4 = document.getElementById('answer').innerText;
     document.getElementById("total").innerHTML = a4;

     let a5 = document.getElementById('incash').value;
     document.getElementById("cash").innerHTML = a5;
    
    



}