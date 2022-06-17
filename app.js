new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            
            return this.valor == 37 
            ? 'Igual a 37' : 'Diferente de 37'

        }
    },
    watch:{
        valor(novo, antigo){
            setTimeout(() => {
                this.valor = 0
            }, 5000) //reset
        },
    },
    methods:{
        soma1(){
            this.valor++
            
            
        },
        soma5(){
            this.valor = this.valor + 5
        
           
        }
    }
    
    
});