 let palavraCategoria;
 var btn = document.getElementById("btnReiniciar");
 let palavraSorteada;
 let lista= [];
let  palavras = [
    
   palavra1={
    nome:"brasil",
    categoria:"pais"
   },
   palavra2={
    nome:"argentina",
    categoria:"pais"
   },
   palavra3={
    nome:"espanha",
    categoria:"pais"
   },
   palavra4={
    nome:"estados unidos",
    categoria:"pais"
   },
   palavra5={
    nome:"mexico",
    categoria:"pais"
   },
   palavra6={
    nome:"canada",
    categoria:"pais"
   }
    
]


function criarPalavra (){
    const pegandoPalavra = parseInt(Math.random()*palavras.length)

  palavraSorteada=palavras[pegandoPalavra].nome
  palavraCategoria=palavras[pegandoPalavra].categoria
  console.log( palavraSorteada)
  console.log(palavraCategoria)
  
  document.querySelector('.letras').innerHTML+= palavraSorteada;
  document.getElementById('categoria').innerHTML+=palavraCategoria;
}
criarPalavra ()

  function mostrarNatela(){
   const palavratelaSorteada= document.getElementById('palavra-secreta');
   palavratelaSorteada.innerHTML ='';

   const palavratelaCategoria= document.getElementById('categoria');
   palavratelaCategoria.innerHTML = palavraCategoria;



   for (let i=0; i < palavraSorteada.length; i++) {
      if(lista[i]== undefined){
         lista[i]= "&nbsp"
         palavratelaSorteada.innerHTML=palavratelaSorteada.innerHTML+ "<div class='letras'>"+ lista[i]+"</div>"
      }
      else{
         palavratelaSorteada.innerHTML=palavratelaSorteada.innerHTML+ "<div class='letras'>"+ lista[i]+"</div>"
     
      }
   }
}
mostrarNatela()

function verificaLetraEscolhida(letra){
   mudarTecla("tecla-"+letra)
   
}

function mudarTecla(tecla){
   document.getElementById(tecla).style.background="#c71585";
   document.getElementById(tecla).style.color="white"

}
 
 function atualizar(){
   location.reload();

 }

btn.addEventListener("click", atualizar)
    


