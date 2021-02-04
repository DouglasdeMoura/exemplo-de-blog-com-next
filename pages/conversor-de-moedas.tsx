import { useEffect, useRef, useState } from 'react';

const ConversorMonetario = ({}) => {
  const codigoMoeda1 = useRef(null);
  const codigoMoeda2 = useRef(null);
  const valor = useRef(null);
  const valorConvertido = useRef(null);

  const [currencyList, setCurrencyList] = useState({});

  const checkValues = (valor) => valor.length !== 3;

  const getCurrencyList = () => {
    fetch('https://api.exchangeratesapi.io/latest?base=')
      .then((response) => response.json())
      .then((result) => setCurrencyList(result.rates))
      .catch((error) => window.alert(error));
  };

  useEffect(() => getCurrencyList(), []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const cod1 = codigoMoeda1.current.value;
    const cod2 = codigoMoeda2.current.value;
    const valorEntrada = valor.current.value;
    valorConvertido.current.value = '';

    if (checkValues(cod1) || checkValues(cod2)) {
      window.alert('Código inválido');
      return;
    }

    valorConvertido.current.value = (
      (currencyList[cod2] / currencyList[cod1])
      * valorEntrada
    ).toLocaleString('pt-BR', { style: 'currency', currency: cod2 });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <datalist id="moedas">
        {Object.keys(currencyList).map((key, index) => (
          <option value={key} key={index} />
        ))}
      </datalist>
      <div>
        <label>
          Converter:
          <input
            ref={codigoMoeda1}
            type="text"
            maxLength={3}
            list="moedas"
            defaultValue="USD"
            onBlur={handleOnSubmit}
          />
        </label>
        <label>
          Para:
          <input
            ref={codigoMoeda2}
            type="text"
            maxLength={3}
            list="moedas"
            defaultValue="BRL"
            onBlur={handleOnSubmit}
          />
        </label>
      </div>
      <div>
        <label>
          Valor
          <input
            ref={valor}
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleOnSubmit}
          />
        </label>
        <label>
          Valor convertido
          <input ref={valorConvertido} type="text" readOnly />
        </label>
      </div>
    </form>
  );
};

export default ConversorMonetario;
