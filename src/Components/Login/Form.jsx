import React from 'react'
import Input from '../Common/Input'
import Button from '../Common/Button'
import InputLabel from '../Common/InputLabel'

const Form = () => {
  return (
    <form>
        <InputLabel labelMessage={"E-mail"} inputID={"email"}/>
        <Input inputType={"email"} inputID={"email"} inputPlaceholder={"seunome@seuservidor.com"} autoComplete={"on"}/>
        <InputLabel labelMessage={"Senha"} inputID={"password"}/>
        <Input inputType={"password"} inputID={"password"} inputPlaceholder={"Digite aqui"} autoComplete={"on"}/>
        <Button buttonLabel={"Enviar"}/>
</form>
  )
}

export default Form