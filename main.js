let lista = [];

$(function () {
  let vegpont = "adatok.json";
  adatBeolvas(vegpont, megjelenit)
  console.log(lista)

});

function megjelenit(){
   console.log(data)
}

function megjelenit2(){
   console.log(data)
}


function adatBeolvas(vegpont, callbckFV){
   fetch(vegpont, {

      method: "GET"
     }
      
      )
       .then((response) => response.json())
       .then((data) => {
         callbckFV(data.adatLista)
   
         megjelenit()
       })
   
       .catch((err) => console.log(err));
}
