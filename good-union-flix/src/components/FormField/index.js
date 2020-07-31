import React from 'react';

// component não inteligente, recebe a funcao onChange existente no outro arquivo.
function FormField({ label, type, name, value, onChange }) {
    return (
        <div>
            {/*State: É umas das melhores funcionaliades do React
        é parecido com o props: parâmetro do nosso component.
        quando usamos o state podemos adicionar e buscar esse valor
        o user state nos retorna um valor e uma função, para poder alterar o estado :).
        */}
            <label>
                {label}:
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}>
                </input>
            </label>
        </div>
    );
}

export default FormField;