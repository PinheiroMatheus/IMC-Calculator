import { useState } from 'react'

import '../styles/components/content.sass'

const content = () => {

    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [result, setResult] = useState('-')
    const [color, setColor] = useState('')
    const [info, setInfo] = useState('-')

    const calculate = () => {
        if (!altura && !peso) {
            setResult('Digite algum valor!')
            setColor('red')
            setInfo('')
            return
        }else if (!altura) {
            setResult('Digite o valor do altura!')
            setColor('red')
            setInfo('')
            return
        } else if (!peso) {
            setResult('Digite o valor do peso!')
            setColor('red')
            setInfo('')
            return
        }
        
        const imc = peso / (altura * altura)
        const formatedImc = imc.toFixed(2)
        
        if (+formatedImc < 18.50) {
            setColor('yellow')
            setInfo('MAGREZA')
        } else if (+formatedImc >= 18.50 && +formatedImc < 24.90) {
            setColor('green')
            setInfo('NORMAL')
        } else if (+formatedImc >= 25.00 && +formatedImc < 29.90) {
            setColor('yellow')
            setInfo('SOBREPESO')
        } else if (+formatedImc >= 30.00 && +formatedImc < 39.90) {
            setColor('red')
            setInfo('OBESIDADE')
        } else if (+formatedImc >= 40.00) {
            setColor('red')
            setInfo('OBESIDADE GRAVE')
        }
        
        setResult(+formatedImc)  
    }
    
    const reset = () => {
        setAltura('')
        setPeso('')
        setResult('-')
        setColor('')
        setInfo('-')
    }

    return (
        <div className='content'>
            <div className="calculator">
                <span className={`result ${color}`} >{`${result} - ${info}`}</span>
                <div className="informations">
                    <div className="input-div">
                        <span className="input-title">Altura</span>
                        <input
                            type="number"
                            placeholder='Ex.: 1,84'
                            value={altura}
                            onChange={(e) => setAltura(+e.target.value)} />
                    </div>
                    <div className="input-div">
                        <span className="input-title">Peso</span>
                        <input
                            type="number"
                            placeholder='Ex.: 75'
                            value={peso}
                            onChange={(e) => setPeso(+e.target.value)} />
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={calculate}>Calcular</button>
                    <button onClick={reset}>Resetar</button>
                </div>
            </div>
        </div>
    )
}

export default content