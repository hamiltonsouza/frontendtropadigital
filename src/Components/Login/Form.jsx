import React from 'react'
import Input from '../Common/Input'

const Form = () => {
  return (
    <form>
        <Input labelMessage={"E-mail"} inputType={"email"} inputID={"email"} inputPlaceholder={"seunome@seuservidor.com"} autoComplete={"on"}/>
        <Input labelMessage={"Senha"} inputType={"password"} inputID={"password"} inputPlaceholder={"Digite aqui"} autoComplete={"on"}/>
    </form>
  )
}

export default Form