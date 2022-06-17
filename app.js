
new Vue({

    el: '#app',
    data: {

        nome: 'gabriel',
        idade: 18,
        idadex3: 0,
        img:'https://www.gannett-cdn.com/-mm-/526c32e3985b7d7a3a026753ab945435cbc0ceb5/c=0-38-768-472/local/-/media/USATODAY/test/2014/01/22/1390420312000-ibm-logo.jpg?width=3200&height=1680&fit=crop'
        
    },
    methods:{
        itriplo: function(){
            this.idadex3 = this.idade*3
            return this.idadex3

        },
        random: function(){
            
            return Math.random();

        },

        imagem: function(){
            
            return img;

        }



    }
})