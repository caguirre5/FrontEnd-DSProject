import React, {useState} from "react";
import './Stats.css';
import MatrixChart from "./MatrixChart";
import { BarChart } from '@mui/x-charts/BarChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { PieChart } from '@mui/x-charts/PieChart';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const autogluonData = {
  accuracy:0.61,
  macroAVG : [0.60, 0.61, 0.60],
  weightedAVG : [0.60, 0.60, 0.59],
  matrixData : [568, 414, 304, 172, 1109, 29, 425, 187, 670],
  reportData: [
    {
      precision: 0.49,
      recall: 0.44,
      f1_score: 0.46,
      value: 'Effective',
    },
    {
      precision: 0.65,
      recall: 0.85,
      f1_score: 0.59,
      value: 'Adequate',
    },
    {
      precision: 0.67,
      recall: 0.52,
      f1_score: 0.59,
      value: 'Ineffective',
    }
  ]
}

const lstmData = {
  accuracy: 0.34,
  macroAVG: [0.28, 0.29, 0.29], 
  weightedAVG: [0.30, 0.30, 0.29], 
  matrixData: [284, 207, 152, 86, 555, 15, 212, 93, 335], 
  reportData: [
    {
      precision: 0.25, 
      recall: 0.40, 
      f1_score: 0.30, 
      value: 'Effective',
    },
    {
      precision: 0.40, 
      recall: 0.60, 
      f1_score: 0.50, 
      value: 'Adequate',
    },
    {
      precision: 0.35, 
      recall: 0.45, 
      f1_score: 0.40, 
      value: 'Ineffective',
    },
  ],
};

function Stats(){ 
    const [alignment, setAlignment] = React.useState('autogluon');
    const [dataStats, setDataStats] = useState(autogluonData);

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        if (newAlignment == 'lstm') {
          setDataStats(lstmData)
        } else {
          setDataStats(autogluonData)
        }
    };

    const embeddingData = [
        {
          id: 'data-0',
          x1: 329.39,
          x2: 391.29,
          y1: 443.28,
          y2: 153.9,
        },
        {
          id: 'data-1',
          x1: 96.94,
          x2: 139.6,
          y1: 110.5,
          y2: 217.8,
        },
        {
          id: 'data-2',
          x1: 336.35,
          x2: 282.34,
          y1: 175.23,
          y2: 286.32,
        },
        {
          id: 'data-3',
          x1: 159.44,
          x2: 384.85,
          y1: 195.97,
          y2: 325.12,
        },
        {
          id: 'data-4',
          x1: 188.86,
          x2: 182.27,
          y1: 351.77,
          y2: 144.58,
        },
        {
          id: 'data-5',
          x1: 143.86,
          x2: 360.22,
          y1: 43.253,
          y2: 146.51,
        },
        {
          id: 'data-6',
          x1: 202.02,
          x2: 209.5,
          y1: 376.34,
          y2: 309.69,
        },
        {
          id: 'data-7',
          x1: 384.41,
          x2: 258.93,
          y1: 31.514,
          y2: 236.38,
        },
        {
          id: 'data-8',
          x1: 256.76,
          x2: 70.571,
          y1: 231.31,
          y2: 440.72,
        },
        {
          id: 'data-9',
          x1: 143.79,
          x2: 419.02,
          y1: 108.04,
          y2: 20.29,
        },
        {
          id: 'data-10',
          x1: 103.48,
          x2: 15.886,
          y1: 321.77,
          y2: 484.17,
        },
        {
          id: 'data-11',
          x1: 272.39,
          x2: 189.03,
          y1: 120.18,
          y2: 54.962,
        },
        {
          id: 'data-12',
          x1: 23.57,
          x2: 456.4,
          y1: 366.2,
          y2: 418.5,
        },
        {
          id: 'data-13',
          x1: 219.73,
          x2: 235.96,
          y1: 451.45,
          y2: 181.32,
        },
        {
          id: 'data-14',
          x1: 54.99,
          x2: 434.5,
          y1: 294.8,
          y2: 440.9,
        },
        {
          id: 'data-15',
          x1: 134.13,
          x2: 383.8,
          y1: 121.83,
          y2: 273.52,
        },
        {
          id: 'data-16',
          x1: 12.7,
          x2: 270.8,
          y1: 287.7,
          y2: 346.7,
        },
        {
          id: 'data-17',
          x1: 176.51,
          x2: 119.17,
          y1: 134.06,
          y2: 74.528,
        },
        {
          id: 'data-18',
          x1: 65.05,
          x2: 78.93,
          y1: 104.5,
          y2: 150.9,
        },
        {
          id: 'data-19',
          x1: 162.25,
          x2: 63.707,
          y1: 413.07,
          y2: 26.483,
        },
        {
          id: 'data-20',
          x1: 68.88,
          x2: 150.8,
          y1: 74.68,
          y2: 333.2,
        },
        {
          id: 'data-21',
          x1: 95.29,
          x2: 329.1,
          y1: 360.6,
          y2: 422.0,
        },
        {
          id: 'data-22',
          x1: 390.62,
          x2: 10.01,
          y1: 330.72,
          y2: 488.06,
        },
      ];

    const valueFormatter = (value) => `${value*100}%`;

    return (
        <div className="stats-container">
            <div className="classification-eval">
                <div className="classification-eval-text">
                    <div className="title-container">
                      <h2>Classification Report Overview</h2>
                      <ToggleButtonGroup
                          color="primary"
                          value={alignment}
                          exclusive
                          onChange={handleChange}
                          aria-label="Model"
                      >
                          <ToggleButton value="autogluon">Autogluon Multimodal</ToggleButton>
                          <ToggleButton value="lstm">long short-term memory</ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                    <p>This section presents a comprehensive overview derived from the classification report. It comprises key metrics such as Precision, Recall, and F1-score for each class - Adequate, Effective, and Ineffective. The values signify the model's performance in differentiating and predicting these classes. Visual representations in the form of bar graphs illustrate the Precision, Recall, and F1-score, offering a clear comparative analysis. Additionally, essential metrics including Accuracy, macro average, and weighted average are detailed to provide a holistic understanding of the model's overall performance.</p>
                </div>
                <div className="classification-eval-metrics">
                    <div className="classification-eval-chart">
                        <BarChart
                            dataset={dataStats.reportData}
                            xAxis={[{ scaleType: 'band', data: ['Effective', 'Adequate', 'Ineffective'] }]}
                            // yAxis={[{label:'hola', max:1}]}
                            series={[
                                { dataKey: 'precision', label: 'Precision', valueFormatter, color:'#05499C' },
                                { dataKey: 'recall', label: 'Recall', valueFormatter },
                                { dataKey: 'f1_score', label: 'F1_score', valueFormatter, color:'#138AD9' }
                            ]}
                            yAxis={[{max: 1}]}
                        />
                    </div>
                    <div className="classification-eval-values">
                        <div className="classification-eval-values-acc">
                            <div>
                                <p>{`${dataStats.accuracy*100}%`}</p>
                            </div>
                            <h2>Accuracy</h2>
                        </div>
                        <div className="classification-eval-values-avg1">
                            <BarChart
                                xAxis={[{ scaleType: 'band', data: ['Precision', 'Recall', 'F1-Score'] }]}
                                series={[{ data: dataStats.weightedAVG, color:'#138AD9', label:'Weighted AVG' }]}
                                yAxis={[{max:1}]}
                            />
                        </div>
                        <div className="classification-eval-values-avg2">
                            <BarChart
                                xAxis={[{ scaleType: 'band', data: ['Precision', 'Recall', 'F1-Score'] }]}
                                series={[{ data: dataStats.macroAVG, color:'#138AD9', label:'Macro AVG' }]}
                                yAxis={[{max:1}]}
                            />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="metrics-eval">
                <div className="metrics-eval-matrix">
                    <h2>Confussion Matrix</h2>
                    <MatrixChart matrixValues={dataStats.matrixData}></MatrixChart>
                </div>
                <div className="metrics-eval-embedding">
                <ScatterChart
                series={[
                    {
                    label: 'Effective',
                    data: embeddingData.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
                    color:'#02A676'
                    },
                    {
                    label: 'Adequate',
                    data: embeddingData.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
                    color:'#F29F05'
                    },
                    {
                    label: 'Ineffective',
                    data: embeddingData.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
                    color:'#F23030'    
                    },
                ]}
                />
                </div>
            </div>
        </div>
    )
}

export default Stats