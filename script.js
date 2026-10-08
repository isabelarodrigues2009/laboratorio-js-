// 1. MOSTRAR E OCULTAR MENU

const btnMenu = document.querySelector("#btn-menu")
const menu = document.querySelector("#menu")

btnMenu.addEventListener("click", function(){
     menu.classList.toggle("aberto")

})

// MOSTRAR E OCULTAR ELEMENTO

const btnMostrar = document.querySelector("#btn-mostrar")
const mensagem = document.querySelector("#mensagem")

btnMostrar.addEventListener("click", function(){
     mensagem.classList.toggle("oculto")

})

// ALTERAR O TEXTO

const btnTexto = document.querySelector("#btn-texto")
const texto = document.querySelector("#texto")

btnTexto.addEventListener("click", function(){
    texto.textContent = "o texto foi alterado pelo JS"
})

//ALTERAR TEMA

const btnTema = document.querySelector("#btn-tema")
const btnClaro = document.querySelector("#btn-tema-claro")

btnTema.addEventListener("click", function(){
     document.body.classList.add("tema-escuro")
     btnTema.classList.add("oculto")
     btnClaro.classList.remove("oculto")
})

btnClaro.addEventListener("click", function(){
     document.body.classList.remove("tema-escuro")
     btnClaro.classList.add("oculto")
     btnTema.classList.remove("oculto")

})


//CONTADOR

let contador = 0
const valorContador = document.querySelector("#contador")
const btnMais = document.querySelector("#btn-mais")

btnMais.addEventListener("click", function(){

     contador++
       valorContador.textContent = contador;
})

const btnMenos = document.querySelector("#btn-menos")

btnMenos.addEventListener("click", function(){
contador --
valorContador.textContent = contador;
})
const btnZerar = document.querySelector("#btn-zerar")
btnZerar.addEventListener("click", function(){
     contador = 0
     valorContador.textContent = contador;
})

  
// PEGAR INFORMACAO DO CAMPO DE TEXTO

const campoNome = document.querySelector("#nome")
const btnNome = document.querySelector("#btn-nome")
const resultadoNome = document.querySelector("#resultado-nome")

btnNome.addEventListener("click", function(){
    //PEGANDO O NOME DO CAMPO
    const nome = campoNome.value

    if( nome ===""){
        resultadoNome.textContent = "digite um nome"
   }else{
        resultadoNome.textContent = `olá ${nome}!`
   }
})
//CRIAR ELEMENTO NO HTML

const campoTarefa = document.querySelector("#tarefa")
const btnAdicionar = document.querySelector("#btn-adicionar")
const lista = document.querySelector("#lista")

btnAdicionar.addEventListener("click", function(){
        //PEGAR O TEXTO DA CAIXA
        const tarefa = campoTarefa.value

        //VERIFICAR SE A CAIXA ESTA VAZIA
      if(tarefa === ""){
        return
      }
//CRIAR A TAG "LI" -ITEM DA LISTA
const item = document.createElement("li")

//ARMAZENAR A TAREFA DENTRO DA "LI"
item.textContent = tarefa

//ADICIONAR A TAG LI AO HTML
lista.appendChild(item)
campoTarefa.value = ""
})

// UTILIZANDO VETORES E LOOPS
// VETOR = ARRAY
//LOOP = PARA = "FOR"

const alunos = [
     "priscila",
     "helena",
     "kamily",
     "isabela",
     "manuela",
     "maria eduarda rogalski",
     "maria eduarda bielecki",
     "mariana",
     "davi",
     "vinicius",
     "yasmin",
     "paula",
     "guilherme",
     "nicolas",
     "henrique"

]
const btnAlunos = document.querySelector("#btn-alunos")
const listaAlunos = document.querySelector("#lista-alunos")

btnAlunos.addEventListener("click", function(){
     //LIMPAR A LISTA
     listaAlunos.innerHTML ="";

     //PERCORRENDO O VETOR
     alunos.forEach(function(aluno){
      //CRIAR UMA LI
      //UTILIZANDO A VARIAVEL "ITEM"
      //innerHTML
      const item = document.createElement("li")

     item.innerHTML = `<i class =" bi bi-person"></i> ${aluno}`
    
     



      //ADICIONANDO ELEMENTO FILHO DA LISTA
      listaAlunos.appendChild(item)
})

      })

      //CONDICIONAIS 
  const campoIdade = document.querySelector("#idade")
  const btnIdade = document.querySelector("#btn-idade")
  const resultadoIdade = document.querySelector("#resultado-idade") 

    //CONVERTER A INFORMAÇÃO DE IDADE DE
    //TEXTO  PARA NUMERO
    
    btnIdade.addEventListener("click", function(){
      const idade = Number(campoIdade.value)

     console.log(idade + 15)
     if(idade >= 18){
     resultadoIdade.innerHTML=
     "<p>Maior de idade!</p>"

     }else{

           resultadoIdade.innerHTML=
     "<p>Menor de idade!</p>"
     }
     })
     const modal = document.querySelector("#modal")
     const btnAbrir = document.querySelector("#btn-abrir")
     const btnFechar = document.querySelector("#btn-fechar")
    
     
     //ABRIR

     btnAbrir.addEventListener("click", function(){
          modal.classList.remove("oculto")
     })

     //FECHAR 
     btnFechar.addEventListener("click", function(){
           modal.classList.add("oculto")
     })

     //SISTEMA DE ABAS
    //SELECIONANDO TODOS OS BOTOES COM CLASSE "ABA"

     const botoesAbas = document.querySelectorAll(".aba")

     //SELECIONANDO TODOS OS CONTEUDOS

     const conteudos = document.querySelectorAll(".conteudo-aba")

     //LOOP PARA PERCORRER ALISTA DE BOTOES
     
     //CRIE A ESTRUTURA DO LOOP PARA PERCORRER
     //O VETOR DOS BOTOES

     botoesAbas.forEach(function(botao){
          botao.addEventListener("click", function(){

          

               //REMOVER A CLASS ATIVA DOS BOTOES
               //PRECISO DE UM LOOP PARA TIRAR A 
               //CLASSE DE TODOS ELES
               botoesAbas.forEach(function(item){
                    item.classList.remove("ativa")

               })

               //ESCONDER TODOS OS CONTEUDOS
               conteudos.forEach(function(conteudo){
                    conteudo.classList.remove("ativo")

               })

               //ATIVAR O BOTAO QUANDO CLICADO
               botao.classList.add("ativa")

               //PEGANDO O CONTEUDO
               const idConteudo = botao.dataset.conteudo

               //PROCURANDO O CONTEUDO
               //A ABA ATIVA
               const conteudoSelecionado =
               document.querySelector("#" + idConteudo)

               //mostrar o conteudos
               conteudoselecionado.classList.add("ativo")

          })
     })




     

    





      

    
     

         
     
    
      





     
          
     




       


