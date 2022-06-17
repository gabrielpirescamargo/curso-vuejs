new Vue({
    el: '#desafio',
    data: {
        valor: ' '
    },
    methods:{
        clicar(){
            alert("alerta")
        },
        tecla(event){
            this.valor = event.target.value
           
        }
    }
})