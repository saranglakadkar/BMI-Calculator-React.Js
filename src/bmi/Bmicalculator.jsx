import { useState } from 'react';

function Bmicalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage('You have a healthy weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('You are overweight');
      } else {
        setMessage('You are obese');
      }
    } else {
      setBmi('');
      setMessage('Please enter both weight and height');
    }
  };

  return (
    
    <div className="container">
      <h1>BMI-Calculator</h1>
      <div className="input-group">
        <label> Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight in kg"
        />
      </div>
      <div className="input-group">
        <label>Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height in cm"
        />
      </div>
      <button onClick={calculateBmi}>Calculate</button>
      {bmi && <h2>Your BMI is: {bmi}</h2>}
      {message && <p>{message}</p>}
      <p style={{color: "#888", fontSize: "14px", marginTop: "20px"}}>Created by Sarang Lakadkar</p>
    </div>
  );
}

export default Bmicalculator;
