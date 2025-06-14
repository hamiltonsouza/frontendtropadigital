import React from 'react'
import Input from '../../Components/Common/Input'
import Button from '../../Components/Common/Button'
import InputLabel from '../../Components/Common/InputLabel'

const Form = () => {
  return (
    <form>
        <InputLabel labelMessage={"E-mail"} inputID={"email"} labelClass={'label'}/>
        <Input inputType={"email"} inputID={"email"} inputPlaceholder={"seunome@seuservidor.com"} autoComplete={"on"}/>
        <InputLabel labelMessage={"Senha"} inputID={"password"} labelClass={'label'}/>
        <Input inputType={"password"} inputID={"password"} inputPlaceholder={"Digite aqui"} autoComplete={"on"}/>
        <Button buttonLabel={"Enviar"}/>
</form>
  )
}

export default Form