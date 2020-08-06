import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;

  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label`
`;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }

  /* utilizado o transform para diminuir a fonte caso seja realizado foco no campo
  também é removida a cor */
  &:focus:not([type='color']) + ${Label.Text} {    
    transform: scale(.6) translateY(-10px);
  }

  /* Regra utilizada para manter os styles após perder o foco  com tagged template string
  então caso exista algo no valor do campo, é aplicado esse transform*/
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }}
`;

// component não inteligente, recebe a funcao onChange existente no outro arquivo.
function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  /* properties utilizada para controlar o css do foco com valor */
  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);
  console.log('SUGESTOES', suggestions);
  return (
    <FormFieldWrapper>
      {/* State: É umas das melhores funcionaliades do React
        é parecido com o props: parâmetro do nosso component.
        quando usamos o state podemos adicionar e buscar esse valor
        o user state nos retorna um valor e uma função, para poder alterar o estado :).
        */}
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>

        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {
              suggestions.map((suggestion) => (
                <option
                  value={suggestion}
                  key={`suggestionFor_${fieldId}_option${suggestion}`}
                >
                  {suggestion}
                </option>
              ))
            }
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

// defaultProps necessário para campos que não são obrigatorios.

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
