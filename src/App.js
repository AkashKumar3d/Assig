import './App.css';
import React from 'react';
import SidbarNav from './compoenent/SidbarNav';


function App() {
  const [open, setOpen] = React.useState(false);
  
  return (
   <>
   <SidbarNav/>
  
   </>
  );
}

export default App;
