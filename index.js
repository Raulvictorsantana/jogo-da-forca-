 let palavraCategoria;
let btn = document.getElementById("btnReiniciar");
 let palavraSorteada;
 let tentativa =6;
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
   }, 
   palavra8={
      nome:"celular",
      categoria:"objeto"
   },
   palavra9={
      nome:"caneta",
      categoria:"objeto"
   },
   palavra10={
      nome:"computador",
      categoria:"objeto"
   },
   palavra11={
      nome:"copo",
      categoria:"objeto"
   },
   palavra12={
      nome:"amarelo",
      categoria:"cor"
   },
   palavra13={
      nome:"azul",
      categoria:"cor"
   },
   palavra13={
      nome:"roxo",
      categoria:"cor"
   },
   palavra14={
      nome:"preto",
      categoria:"cor"
   },
   palavra15={
      nome:"rosa",
      categoria:"cor"
   },
   palavra16={
      nome:"cachorro",
      categoria:"animal"
   },
   palavra17={
      nome:"gato",
      categoria:"animal"
   },
   palavra18={
      nome:"leao",
      categoria:"animal"
   },
   palavra19={
      nome:"peixe",
      categoria:"animal"
   },
   palavra20={
      nome:"golfinho",
      categoria:"animal"
   },
   palavra21={
      nome:"polo",
      categoria:"carros"
   },
   palavra22={
      nome:"i30",
      categoria:"carros"
   },
   palavra23={
      nome:"tcros",
      categoria:"carros"
   },
   palavra7={
      nome:"tiguan",
      categoria:"carros"
   },

    
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
         palavratelaSorteada.
      }
      compararLista
   }
}
mostrarNatela()

function verificaLetraEscolhida(letra){
   mudarTecla("tecla-"+letra)
   compararLista(letra)
   
}

function mudarTecla(tecla){
   document.getElementById(tecla).style.background="#c71585";
   document.getElementById(tecla).style.color="white";

}

function compararLista(letra){
  const posi = palavratelaSorteada.indexOF(letra)
  if(pos<0){
   tentativa--
  }
  else {
   for( i=0; i<palavratelaSorteada.length; i++){
      if(palavratelaSorteada[i]=letra){
         lista[i]=letra;

      }
   }
}
   
}
 
 function atualizar(){
   location.reload();
}

btn.addEventListener("click", atualizar)
    


