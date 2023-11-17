
import React, { useState, useEffect } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import './Landing.css'
import { red, green, blue } from '@mui/material/colors';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const customColors = [blue[500]]; // Define los colores personalizados aquí

function Landing(){
    const [modelResult, setModelResult] = useState("ineffective")
    const [formData, setFormData] = useState({
        tipo: 'Claim',
        texto: 'Hello world!'
    })
    const [alignment, setAlignment] = React.useState('autogluon');


    const handleClaimTypeChange = (event) => {
        setSelectedModelType(event.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let url
        // Construye la URL con los valores de formData
        if (alignment == 'autogluon'){
            url = new URL('http://localhost:5000/predict');
        } else {
            url = new URL('http://localhost:5000/predict');
        }
        
        Object.entries(formData).forEach(([key, value]) => {
          url.searchParams.append(key, value);
        });

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
            console.log(result)
            // setModelResult(result.result)
            // setModelMetric(result.metric)
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

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleChangeForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    };



    return (
        <div className='app-container'>
            <div className='flex-container'>
            <aside className='aside-container'>
                
                <form onSubmit={handleSubmit}>
                <div className='title-container'>
                    <h2>Welcome to our text evaluation system! </h2>
                    <p>Please enter your written work in the box below and choose the type of text from the options provided. </p>
                    <div>
                    <textarea className='argument-input'
                        name="texto"
                        placeholder='Write your arguments...'
                        id="claim"
                        rows="4"  
                        onChange={handleChangeForm}
                    ></textarea>
                </div>
                <div className='claimtype-container'>
                    <label>
                    Claim type:
                    </label>
                    <select
                        name="tipo"
                        onChange={handleChangeForm}
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
                <div className='toggle-menu'>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Model"
                >
                    <ToggleButton value="autogluon">Autogluon Multimodal</ToggleButton>
                    <ToggleButton value="lstm">Long short-term memory</ToggleButton>
                </ToggleButtonGroup>
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
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['Effective', 'Adequate', 'Ineffective'] }]}
                    series={[{ data: [4, 3, 5], color:'#05499C' }]}
                    yAxis={[{ max: 6 }]}
                />
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Landing