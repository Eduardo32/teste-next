import React, { useState } from 'react';

function Home() {
    const [nome, setNome] = useState('');
    const hora = new Date();


    return (
        <div>
            <label htmlFor='nome'>Como é seu nome?</label>
            <br/>
            <input 
                name='nome'
                value={nome}
                onChange={e => setNome(e.target.value)} />
            <h1>Olá, {hora.getHours() < 12 ? 'bom dia' : hora.getHours() < 22 ? 'boa tarde' : 'boa noite'} {nome}.</h1>
        </div>
    )
}

export default Home;