const inputFormulario = document.querySelectorAll(".info")
const formulario = document.getElementById("form")

inputFormulario.forEach(function (item){
    //validacao com borda verde

    formulario.addEventListener("submit", function(event){
        const idItem = item.getAttribute("id")
        var valorItem = document.forms["form"][idItem].value

        if(valorItem == ""){
            item.classList.add("sem-resposta")
            event.preventDefault()
        } else{
            item.classList.add("respondido")
            item.classList.remove("sem-resposta")
        }
    })

    // validando campo obrigatorio

    formulario.addEventListener("change", function(){
        const idItem= item.getAttribute("id")
        var valorItem = document.forms["form"]["idItem"].value

        if(!valorItem == ""){
            item.classList.add("respondido")
            item.classList.remove("sem-resposta")
        } else{
            item.classList.remove("respondido")
        }
    })
})