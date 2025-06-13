import React from 'react';
import Table from './Table';

const EventosTable = () => {
    const theadData = ['Name', 'TeamSize', 'Status', 'Date'];

    const tbodyData = [
        {
            id: '1',
            items: ['Clube do Laço Coração Pantaneiro', '10', 'Ativo', '09 a 11 de Junho'],
        },
        {
            id: '2',
            items: ['Clube do Laço Coração Pantaneiro', '10', 'Ativo', '09 a 11 de Junho'],
        },
    ];
    return (
        <div>
            <Table theadData={theadData} tbodyData={tbodyData} />
        </div>
    );
};

export default EventosTable;