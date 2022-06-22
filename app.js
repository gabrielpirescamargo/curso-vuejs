new Vue({
	el: '#desafio',
	data: {
		aplicarEfeito : false,
		classe1:'classe1',
		classe2: 'classe2',
		classe4:'classe4',
		classe3: 'classe3',
		classeCSS: 'destaque',
		cor: 'red',
		largura: 100,
		altura: 100,

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' 
				? 'encolher' : 'destaque' 
				,1000})
			
			
		},
		iniciarProgresso() {

		}
	},
	computed:{
		efeito(){
			return{
				destaque: this.aplicarEfeito,
				encolher: !this.aplicarEfeito
			}
		},
		meuEstilo(){
			return{
				backgrundColor: this.cor,
				width: this.largura + 'px'
			}
		}
		
	}
	
	
})
