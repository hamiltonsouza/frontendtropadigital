import React from 'react'
import Input from '../Common/Input'
import Button from '../Common/Button'

const Form = () => {
  return (
    <form>
        <Input labelMessage={"E-mail"} inputType={"email"} inputID={"email"} inputPlaceholder={"seunome@seuservidor.com"} autoComplete={"on"}/>
        <Input labelMessage={"Senha"} inputType={"password"} inputID={"password"} inputPlaceholder={"Digite aqui"} autoComplete={"on"}/>
        <Button buttonLabel={"Enviar"}/>
    </form>
  )
}

export default Form