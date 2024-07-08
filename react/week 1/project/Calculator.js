 
import React, { useState } from 'eact';  
import Button from './Button';  
import Display from './Display';  
  
const Calculator = () =gt; {  
  const [input, setInput] = useState('');  
  const [result, setResult] = useState('');  
  
  const handleNumberClick = (value) =gt; {  
    setInput(input + value);  
  };  
  
  const handleOperatorClick = (operator) =gt; {  
    setInput(input + operator);  
  };  
  
  const handleEqualsClick = () =gt; {  
    try {  
      const result = eval(input);  
      setResult(result);  
    } catch (error) {  
      setResult('Error');  
    }  
  };  
  
  const handleClearClick = ( ) =gt; {  
    setInput('');  
    setResult('');  
  };  
  
  return (  
    <div>  
        
      <div>  
        <button value="7"> handleNumberClick('7') /&gt;  
        </button><button value="8"> handleNumberClick('8') /&gt;  
        </button><button value="9"> handleNumberClick('9') /&gt;  
        </button><button value="/"> handleOperatorClick('/') /&gt;  
      </button></div>  
      <div>  
        <button value="4"> handleNumberClick('4') /&gt;  
        </button><button value="5"> handleNumberClick('5') /&gt;  
        </button><button value="6"> handleNumberClick('6') /&gt;  
        </button><button value="*"> handleOperatorClick('*') /&gt;  
      </button></div>  
      <div>  
        <button value="1"> handleNumberClick('1')/&gt;  
        </button><button value="2"> handleNumberClick('2') /&gt;  
        </button><button value="3"> handleNumberClick('3')/&gt;  
        </button><button value="-"> handleOperatorClick('-') /&gt;  
      </button></div>  
      <div>  
        <button value="0"> handleNumberClick('0') /&gt;  
        </button><button value="."> handleNumberClick('.')/&gt;  
        </button><button value="=">  
        </button><button value="+"> handleOperatorClick('+') /&gt;  
      </button></div>  
      <button value="Clear">  
    </button></div>  
  );  
};  
  
export default Calculator;  

