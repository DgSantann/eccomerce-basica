import React from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import Header from '../../components/Header/Header';
const Login = () => {
  return (
    <section className='Login'>
      <Header/>
      <form className='login_form'>
        <h1> Acesse com seu login ou cadastre-se! </h1>
        <h2> Você pode entrar com seu CPF </h2>
      
      <div className='login_input-wrapper'>
        <label htmlFor='name'> Digite seu CPF: </label>
        <input 
        type= "text"
        placeholder='Nome completo'
        id='Name'
        className='login_input-name'/>
        <label htmlFor='password'> Senha: </label>
        <input type='password' id='password' placeholder='*********'/>
      </div>
      <button type='submit'>
        <Link to={"/home"}>Entrar</Link>
      </button>
      </form>
      </section>
  )
   
    
}

export default Login
