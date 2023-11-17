import React from "react";
import './MatrixChart.css'

function MatrixChart(props){
    const {matrixValues} = props
    const gridItems = Array.from({ length: 16 }, (_, index) => index + 1);
    const array = [1, 2,3,4,5,9,13]
    const topArray = [1, 2, 3, 4]
    let matrixIndex = 0;
    const max = Math.max(...matrixValues);

    function RegladeTres(resultValue) {
        const maxIntensity = 100;
        const percentage = (resultValue / max) * 100;
        const intensity = (percentage * maxIntensity) / 100;
        return intensity;
    }

    return (
        <div className="grid-container">
            {gridItems.map((item) => {
                let content = item == '1' ? '' 
                            : item == '2' || item == '5' ? 'Effective' 
                            : item == '3' || item == '9' ? 'Adequate' 
                            : item == '4' || item == '13' ? 'Ineffective' 
                            : matrixValues[matrixIndex];
                
                let matrixValue = matrixValues[matrixIndex];
                
                let backgroundColor = 'white'; 
                let color = 'black'//'rgba(5, 73, 156,100)'
                if (!array.includes(item)) {
                    let colorIntensity = RegladeTres(matrixValue)
                    backgroundColor = `rgba(5, 73, 156, ${colorIntensity / 100})`

                    if (colorIntensity > 70) {
                        color = 'white'
                    }
                }

                if (!(item == '1' || item == '2' || item == '5' || item == '3' || item == '9' || item == '4' || item == '13')) {
                    matrixIndex++; // Aumenta el índice solo si no es uno de estos valores específicos
                }

                return (
                    <div
                        key={item}
                        id={item}
                        className={`grid-item ${array.includes(item) ? 'special-item' : ''} ${topArray.includes(item) ? 'top-item' : ''}`}
                        style={{ backgroundColor, color:color }} 
                    >
                        {content}
                    </div>
                );
            })}
        </div>
            
            
    )
}

export default MatrixChart