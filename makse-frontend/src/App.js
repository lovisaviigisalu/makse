import {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [paymentLink, setPaymentLink] = useState(null);
  const [sum, setSum] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/payment/${sum}`);
      setPaymentLink(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
<div>
       <form onSubmit={handleSubmit}>
         <label>
           Sum:
           <input
             type="number"
             value={sum}
             onChange={(e) => setSum(e.target.value)}
           />
         </label>
         <button type="submit">Pay</button>
       </form>
       {paymentLink && (
         <a href={paymentLink} target="_blank" rel="noopener noreferrer">
           Click here to pay
  
        </a>
      
       )}
    </div>
  );
}

export default App;
