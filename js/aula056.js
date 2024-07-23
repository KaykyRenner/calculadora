function CriaCalculadora(){
    return{
        display : document.querySelector('.display'),
        inicia(){
            this.CliqueBotoes()
            this.EnviarComEnter()
            },
            EnviarComEnter(){
                this.display.addEventListener('keyup', e=>{
                    if(e.keyCode === 13){
                        this.realizaConta() 
                    }
                })
            },
        realizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta);
                if(!conta){
                    alert('conta inválida')
                    return;
                }
                this.display.value = String(conta)
            }catch(e){
                alert('conta inválida')
                return;
            }
        },
        ApagaUM(){
            this.display.value = this.display.value.slice(0, -1);
        },
        BtnClearDisplay(){
            this.display.value = ''
        },
        
        CliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-Clear')){
                    this.BtnClearDisplay()
                }
                if(el.classList.contains('btn-dell')){
                    this.ApagaUM()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
                this.display.focus()
            }.bind(this));
        },
        btnParaDisplay(valor){
            this.display.value+=valor
        }
    };
}
const calculadora = CriaCalculadora()
calculadora.inicia();