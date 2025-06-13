import React from 'react'
import Input from '../../Components/Common/Input';
import Button from '../../Components/Common/Button';

const TableControls = () => {
  return (
    <>
        <Input inputType={'search'} inputID={'eventosSearch'} inputPlaceholder={'Buscar Eventos'} autoComplete={'on'}/>
        <Button buttonLabel={'Inserir novo'}/>
    </>
  )
}

export default TableControls