import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleButtonClick = (e) => {
    const buttonValue = e.target.value;
    if (buttonValue === 'AC') {
      
      setValue('');
    } else if (buttonValue === 'DE') {
      
      setValue(value.slice(0, -1));
    } else if (buttonValue === '=') {
      // Evaluate the expression
      try {
        const result = eval(value);
        setValue(result.toString());
        // Update history with the calculation
        setHistory(prevHistory => [...prevHistory.slice(0, 9), `${value} = ${result}`]);
      } catch (error) {
        setValue('Error');
      }
    } else {
      // Concatenate the button value to the input
      setValue(value + buttonValue);
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className='display'>
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleButtonClick} />
            <input type="button" value="DE" onClick={handleButtonClick} />
            <input type="button" value="." onClick={handleButtonClick} />
            <input type="button" value="/" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleButtonClick} />
            <input type="button" value="8" onClick={handleButtonClick} />
            <input type="button" value="9" onClick={handleButtonClick} />
            <input type="button" value="*" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleButtonClick} />
            <input type="button" value="5" onClick={handleButtonClick} />
            <input type="button" value="6" onClick={handleButtonClick} />
            <input type="button" value="+" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleButtonClick} />
            <input type="button" value="2" onClick={handleButtonClick} />
            <input type="button" value="3" onClick={handleButtonClick} />
            <input type="button" value="-" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="Hist" className='history' onClick={toggleHistory} />
            <input type="button" value="0" onClick={handleButtonClick} />
            <input type="button" value="=" className='equal' onClick={handleButtonClick} />
          </div>
        </form>
      </div>

      
      {showHistory && (
        <div className="history-section">
          <h3>History</h3>
          <ul>
            {history.map((calculation, index) => (
              <li key={index}>{calculation}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
