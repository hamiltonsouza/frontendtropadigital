import React from 'react'
import Button from '../../Components/Common/Button'

const TablePageControl = () => {
  return (
    <div className={'tablePageControl'}>
        <Button buttonLabel={'Anterior'}/>
        <Button buttonLabel={'1'}/>
        <Button buttonLabel={'2'}/>
        <Button buttonLabel={'3'}/>
        <Button buttonLabel={'Próxima'}/>
    </div>
  )
}

export default TablePageControl