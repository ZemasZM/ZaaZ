import './Login.css'
import LoginIMG from '../../Midias/Login_tela.svg'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
    
    let Navigate = useNavigate()
    const[Email, setEmail] = useState('')
    const[Senha, setSenha] = useState('')
    localStorage.setItem('Logado', 0)

    function Logar(){

        if(Email == 'Zaaz' && Senha == 'Suporte'){
            localStorage.setItem('Logado', 1)
            Navigate('/ZaaZ/Home')
            location.reload()
            
        }
    }



  return (
    <>
      <div className="all-content">
        <div className="container All-container ">
          <div className="row gx-5 align-items-center justify-content-center">

            <h1>Relatórios IXC</h1>
            <div className="col-6 order-2">
                <h1 className=''>Faça o Login</h1>

              <div className='Login_Formulario'>

                <div className="Email-containter form-floating mb-3">

                  <input type="text" className='form-control' name='email' placeholder='Digite o Email' id='Email_Input' onChange={(e)=>{setEmail(e.target.value)}}/>

                  <label htmlFor="email" className='form-label'>Digite seu Email</label>
                  
                </div>

                <div className="Senha-container form-floating mb-3">

                  <input type="password" className='form-control' name='password' placeholder='Digite a senha' id='Senha_Input' onChange={(e)=>{setSenha(e.target.value)}}/>

                  <label htmlFor="password" className='form-label'>Digite a senha</label>
                </div>

                <button className='Botao_Enviar btn btn-success col-6 bg-warning' onClick={Logar}> Entrar</button>
              </div>
            </div>

            <div className="col-6 md-order-1 text-align-center">
              <img src={LoginIMG} alt="Tela de Login" title='Login ZaaZ' className='IMG-Container' />
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Login
