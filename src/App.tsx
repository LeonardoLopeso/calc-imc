import { title } from 'process';
import { useState } from 'react';
import styles from './App.module.css';
import poweredImg from './assets/powered.png';
import { levels, calculateImc } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () => { 
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      
    } else {
      alert("Digite todos os campos.");
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImg} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adota pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input 
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))} 
          />
          <input 
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))} 
          />

          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightside}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;