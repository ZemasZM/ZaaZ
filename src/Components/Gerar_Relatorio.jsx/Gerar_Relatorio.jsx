import React from 'react';
import { useState } from 'react';
import './Gerar_Relatorio.css'
import {useNavigate} from 'react-router-dom'


function Gerar_Relatorio(props) {
    const [items, setItems] = useState([]);
    const[itemIXC, setItemsIXC] = useState([])
    const[nomeCliente, setNomeCliente] = useState([])
    let Navigate = useNavigate()

    const Data = new Date()
    let Data_Hoje = Data.getDate()
    let Mes = Data.getMonth()
    
    function Deslogar(){

      alert('Tempo Limite logado atingido!')
      localStorage.setItem('Logado', 2)
      Navigate('/Deslogado')
      location.reload()
    }

    const MacLimpo = () => {
      const novoItem = `Limpeza e Desconexão Remota`;
      const NovoItemIXC = 'Mac Limpo'
      setItemsIXC([...itemIXC, NovoItemIXC])
      setItems([...items, novoItem]);
    };
    const SenhaAlterada = () => {
        const novoItem = `Senha Alterada`;
        const NovoItemIXC = 'Senha Alterada'
        setItemsIXC([...itemIXC, NovoItemIXC])
        setItems([...items, novoItem]);
      };
    const CanalAlterado = () => {
        const novoItem = `Canal e Largura de banda alterados`;
        const NovoItemIXC = 'Canais e largura de bandas trocados'
        setItemsIXC([...itemIXC, NovoItemIXC])
        setItems([...items, novoItem]);
      };
    const ONU_Reautorizada = () => {
        const novoItem = `Aparelho da Fibra Reautorizado`;
        const NovoItemIXC = 'ONU Reautorizada'
        setItemsIXC([...itemIXC, NovoItemIXC])
        setItems([...items, novoItem]);
      };
    const PortasAbertas = () => {
        const novoItem = `Abertura de Portas`;
        const NovoItemIXC = 'Encaminhamento de Portas'
        setItemsIXC([...itemIXC, NovoItemIXC])
        setItems([...items, novoItem]);
      };
    function LimparArray(){

        setItems([])
        setItemsIXC([])
        setNomeCliente('')
        
    }
    function Desbloqueio_Confianca(){

      const Desbloqueio = `Feito um desbloqueio de confiança. Há! Gostaria também de informar o senhor(a), que caso não haja a compensação do pagamento no sistema até o dia 0${Data_Hoje + 3}/${Mes + 1} a conexão será bloqueada automáticamente.`
      const Desbloqueio_IXC = 'Feito um desbloqueio de confiança'
      setItems([...items, Desbloqueio])
      setItemsIXC([...itemIXC, Desbloqueio_IXC])
    }

    function DNS_Trocado(){

      const DNS = 'DNS Alterados'
      const DNS_Alterado_IXC = 'DNS Alterados'
      setItems([...items, DNS])
      setItemsIXC([...itemIXC, DNS_Alterado_IXC])
    }

    function UnificacaoRede(){
      const UR = 'Rede Wi-fi Unificada'
      setItems([...items, UR])
    }

    function SSID_Trocado(){
      const ssidT = 'Nome da rede alterado'
      setItems([...items, ssidT])
    }

    function Reativado_Nokia(){
      const RNK = 'Rede reativada'
      const RNKIXC = 'Rede reativada no roteador (NOKIA)'
      setItems([...items, RNK])
      setItemsIXC([...itemIXC, RNKIXC])
    }

    setTimeout(Deslogar, 18000000)
    
  
    return (

      
      <div className='container' id='All-content'>

        <section className='instruções'>

            <h1>Relatórios</h1>
            <p>Click nos botões para adicionar ao relatório o que foi feito na conexão do cliente</p>


        <div className="col-12 NomeSection">
          <form action="" className='form-floating'>
              <input type="text" className="form-control Nome_Cliente" placeholder='Nome Cliente' onChange={(e)=>{setNomeCliente(e.target.value)}}/>          
              <label htmlFor="Nome" className='form-label'>Nome do Cliente</label>
          </form>
        </div>

        </section>


        <div className="botoes_container">

            <button onClick={MacLimpo} className='col-2 btn botao'>Mac Limpo</button>

            <button onClick={SenhaAlterada} className='col-2 btn botao'>Senha Alterada</button>

            <button onClick={CanalAlterado} className='col-2 btn botao'>Canal Alterado</button>

            <button onClick={ONU_Reautorizada} className='col-2 btn botao'>ONU Reautorizada</button>

            <button onClick={PortasAbertas} className='col-2 btn botao'>Abertura de Portas</button>

            <button onClick={Desbloqueio_Confianca} className='col-2 btn  botao'>Desbloqueio</button>
            
            <button onClick={DNS_Trocado} className='col-2 btn  botao'>DNS TROCADO</button>

            <button onClick={UnificacaoRede} className='col-2 btn  botao'>Rede Unificada</button>

            <button onClick={SSID_Trocado} className='col-2 btn botao'>SSID Trocado</button>

            <button onClick={Reativado_Nokia} className='col-2 btn botao'>Reativado a rede</button>

        </div>


        {items.length == 0? '': <div>


            <div className="relatorio-cliente">

              <p>

                ===*Relatório de Procedimentos feitos*===    

              </p>
                
                <div className="text-cen">*Titular: {nomeCliente}*<br></br></div>

              <p>
                Segue abaixo o relatório dos procedimentos feitos na conexão do senhor(a):
              </p>

                {items.map((item, index) => (
                    <p key={index}>- *{item}*</p>
                    ))}<br></br>
                    
                    <p>

                      Se surgir alguma dúvida, pode entrar em contato conosco novamente. Será um prazer atendê-lo(a)! Obrigado pelo seu contato.😄
                      O atendimento será encerrado. 😉
                      
                      
                    </p>

            </div>
      <hr/>

      <h2>Ponha no IXC</h2>
        <div className="relatorio-IXC relatorio-cliente">
            

            <p>Foi feito na conexão do cliente:</p>
            {itemIXC.map((e, index)=>(

                <p key={index}>- {e}</p>
            ))}
        </div>
        
        <div className="botoes">
          <button onClick={LimparArray} className='btn btn-success col-6'>Limpar</button>
        </div>

        </div>
        
        
        }
        

      </div>
    );
    
}

export default Gerar_Relatorio;
