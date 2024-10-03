import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import './modules.css';
const Header = () => {
  return (
    <div>
      <h1>Mental health crisis in america</h1>
      <p>Our mission is to correct the flaws in the healthcare system for children, due to lack of capacity.</p>
      <h2>Our overall goals will include the following:</h2>
    </div>
  );
}



function App() {
  return (
    <div>
      <h1>To offer resources to that readily avaliable and easy to secure with or without insurance.Many insurance companies will deny the specific needs</h1>
      <h2>Having a child with a mental issue can be confusing and a trying time for the parent. Our team would love to hire more therapists, and have more resources to help the parents gain knowledge of the childs mental condition and state.</h2>
      <h3>We want to break the cycle of many children falling behind the cracks in the system. Medication and alternative options should be made easier for parents to have avaliable.</h3>
      <p>The children are our future. Lets give them a brighter light to shine.</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />, <App />);
