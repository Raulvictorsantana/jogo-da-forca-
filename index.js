 let palavraCategoria;
 let palavraSorteada;
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
  console.log( palavraCategoria)
   //document.querySelector('.letras').innerHTML+= palavraSorteada;
   document.getElementById('categoria').innerHTML+=palavraCategoria;}
criarPalavra ()


    
 //function verificaLetraEscolhida(letra){
    let letra= document.getElementById('letra').innerHTML;
     document.querySelector('letra').innerHTML+=letra+num
      
 //}

