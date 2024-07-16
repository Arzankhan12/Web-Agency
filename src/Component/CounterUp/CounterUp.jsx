
import { useState,useEffect } from 'react'
import './CounterUp.css'

const CounterUp = () => {
  const [counters, setCounters] = useState([100, 100, 100, 100]); // Initial values for each counter
  const numbers = [32, 200, 175, 8]; // Array of numbers to animate through

  useEffect(() => {
      const duration = 5000; // Duration in milliseconds for each number
      const steps = 100; // Number of steps to reach the next number

      const timers = numbers.filter((number, index) => {
          let currentCount = counters[index];
          const increment = Math.floor(number / steps);

          return setInterval(() => {
              currentCount += increment;
              if (currentCount >= number) {
                  currentCount = number; // Ensure it reaches exactly the number
                  clearInterval(timers[index]);
              }
              setCounters(prevCounters => {
                  const newCounters = [...prevCounters];
                  newCounters[index] = currentCount;
                  return newCounters;
              });
          }, duration / steps);
      });

      return () => {
          timers.forEach(timer => clearInterval(timer));
      };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div>
       <div className="Counter">
            <h1 className="counter">{counters[0]}<span className='ms-1 counter-color'>+</span> <div><h5>Professionals team</h5></div></h1>
  
            <h1 className="counter">{counters[1]}<span className='ms-1 counter-color'>+</span> <div><h5>Satisfied customers</h5></div></h1>
      
            <h1 className="counter">{counters[2]}<span className='ms-1 counter-color'>+</span> <div><h5>Successful projects</h5></div></h1>
      
            <h1 className="counter">{counters[3]}<span className='ms-1 counter-color'>+</span> <div><h5>Years of experience</h5></div></h1> 
       
       </div>
    </div>
  )
}

export default CounterUp
