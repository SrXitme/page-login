var form = document.querySelector('form')
var btn = document.querySelector('button')

form.addEventListener("submit",(event) => {
  event.preventDefault();
});

btn.addEventListener('click', () =>{
 var nome = document.querySelector('.nome').value
 var sobre = document.querySelector('.sobre').value
 var idade = document.querySelector('.idade').value
 var text = document.querySelector('.out')
 var pessoas = [];

 pessoas.push({
   nome,
   sobre,
   idade
 })
 text.innerHTML += pessoas
 console.log(pessoas)

   

 
})

