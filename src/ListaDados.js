import React, { useState, useEffect } from 'react';
import api from './axiosConfig';  // Importa a instância configurada do Axios

const ListaDados = () => {
  const [isFetching, setisFetching] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!isFetching) {
      setisFetching(true);
    api.get('/dispositivos/buscar')  
      .then(response => {
        setData(response.data['lista']);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error.response ? error.response.data : error.message);
      })
      .finally(() => setisFetching(false));
    }
  }, []);

  return (
    <div>
      <h2>Lista de Licenças</h2>
      <thead>
        <tr>
          <th>Nome do usuário</th>
          <th>Hostname</th>
          <th>Sistema</th>
          <th>RAM Total</th>
          <th>RAM Utilizado</th>
          <th>Processador</th>
          <th>Compra</th>
          <th>Garantia</th>
          <th>Modelo</th>
          <th></th>
          
        </tr>
      </thead>
      { isFetching && (<p>Carregando...</p>) }
      <ul>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.usuario_logado}</td>
            <td>{item.hostname}</td>
            <td>{item.sistema_operacional}</td>
            <td>{item.ram_total}</td>
            <td>{item.ram_usage}</td>
            <td>{item.processador}</td>
            <td>{item.data_compra}</td>
            <td>{item.data_garantia}</td>
            <td>{item.modelo_notebook}</td>
            <br />
            
          
          
          </tr>  
        ))}
      </ul>
    </div>
  );
};

export default ListaDados;
