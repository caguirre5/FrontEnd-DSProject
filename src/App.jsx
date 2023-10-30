import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Chart from 'chart.js/auto';
import { LineChart } from '@mui/x-charts/LineChart';
import './App.css'
import { red, green, blue } from '@mui/material/colors';

const customColors = [blue[500]]; // Define los colores personalizados aquí


function App() {
  const [modelResult, setModelResult] = useState("ineffective")
  const [modelMetric, setModelMetric] = useState([0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05])
  const [selectedModelType, setSelectedModelType] = useState('RNN');

  const handleClaimTypeChange = (event) => {
    setSelectedModelType(event.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Construye la URL con los valores de formData
    const url = new URL('https://caguirre5.pythonanywhere.com/project');
    // Object.entries(formData).forEach(([key, value]) => {
    //   url.searchParams.append(key, value);
    // });

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const result = await response.json();
        // Actualiza el estado con los resultados
        console.log(result.result)
        setModelResult(result.result)
        setModelMetric(result.metric)
        // setFormData({
        //   ...formData,
        //   hoa: result["hoa (R$)"],
        //   rentAmount: result["rent amount (R$)"],
        //   propertyTax: result["property tax (R$)"],
        //   fireInsurance: result["fire insurance (R$)"],
        //   total: result["total (R$)"],
        // });
      } else {
        console.error('Error al obtener los datos del servidor');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div className='app-container'>
      {/* <header className="app-header">
        <h2>Proyecto Final</h2>
      </header> */}
      <div className='flex-container'>
        <aside className='aside-container'>
          
          <form onSubmit={handleSubmit}>
            <div className='title-container'>
              <h2>Welcome to our text evaluation system! </h2>
              <p>Please enter your written work in the box below and choose the type of text from the options provided. </p>
              <div>
              <textarea className='argument-input'
                name="claim"
                placeholder='Write your arguments...'
                id="claim"
                rows="4"  
              ></textarea>
            </div>
            <div className='claimtype-container'>
              <label>
                Claim type:
              </label>
              <select
                  name="selectedClaimType"
                >
                  <option value="Lead">Lead</option>
                  <option value="Position">Position</option>
                  <option value="Claim">Claim</option>
                  <option value="Counterclaim">Counterclaim</option>
                  <option value="Rebuttal">Rebuttal</option>
                  <option value="Evidence">Evidence</option>
                  <option value="Concluding Statement">Concluding Statement</option>
              </select>
            </div>
            <div className='modeltype-container'>
                <label>
                  <input
                    type="radio"
                    name="selectedModelType"
                    value="RNN"
                    checked={selectedModelType === 'RNN'}
                    onChange={handleClaimTypeChange}
                  />
                  RNN
                </label>
                <label>
                  <input
                    type="radio"
                    name="selectedModelType"
                    value="CNN"
                    checked={selectedModelType === 'CNN'}
                    onChange={handleClaimTypeChange}
                  />
                  CNN
                </label>
                <label>
                  <input
                    type="radio"
                    name="selectedModelType"
                    value="GPT"
                    checked={selectedModelType === 'GPT'}
                    onChange={handleClaimTypeChange}
                  />
                  GPT
                </label>
            </div>
            </div>
            <button className='evaluate-button' type="submit">Evaluate</button>
          </form>
        </aside>
        <div className='main-container'>
          <div className='result-container'>
            <h1>Result:</h1>
            <h1>{modelResult.toUpperCase()}</h1>
          </div>
          <div className='chart-component'>
            <LineChart 
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
              series={[
                {
                  data: modelMetric,
                },
              ]}
              colors={customColors}
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
