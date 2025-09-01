import { useState } from 'react';

export function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([
    { id: '1', label: 'fazer café', complete: false },
    { id: '2', label: 'fazer café da trd', complete: false },
    { id: '3', label: 'Configurar o TypeScript', complete: false },
    { id: '4', label: 'Instalar o React', complete: false },
  ]);


  console.log(list);
  return (

    <div >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)} ///pega o valor digitado no input 
      />

      <button
        onClick={() => { //função para adicionar o valor do input na lista
          setList([...list, //
          { id: (list.length + 1).toString(), label: value, complete: false } //adiciona o valor do input na lista
          ]);
          setValue(''); //
        }}

      >
        adicionar
      </button>

      <h2>Lista</h2>

      <ol>
        {
          list.map(
            (listItem) =>
            (
              <li key={listItem.id}>
                {listItem.label}
                {listItem.complete ? 'concluido':''}

                <button 
                  onClick={() => {
                    setList([//função para remover o item da lista
                      ...list.map(//filtra a lista e retorna todos os itens que não são o item clicado
                        item => ({ 
                          ...item,
                          complete: item.id === listItem.id? true : item.complete
                        })
                      ) //retorna todos os itens que não são o item clicado
                    ])
                  }
                  }
                >
                  Concluirl
                </button>
                <button onClick={() => setList(//função para remover o item da lista
                  list.filter(//filtra a lista e retorna todos os itens que não são o item clicado
                    item => item.id !== listItem.id) //retorna todos os itens que não são o item clicado
                )}>
                  remover
                </button>


              </li>
            )
          )
        }

      </ol>

    </div>

  );

  console.log(list);
}
