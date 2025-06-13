import React from 'react'
import Header from './Header'
import EventosTable from './EventosTable'

const EventosContent = () => {
  return (
    <main className='container'>
        <Header userName={'Kaique Steck'}/>
        <EventosTable />
    </main>
  )
}

export default EventosContent