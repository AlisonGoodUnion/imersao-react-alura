import { useState } from 'react';

// custom hook
function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  // retorno é um objeto com o handle e values
  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
