import React from 'react';
import './App.css';
import Button from './Components/Button';
import Heading from './Components/Heading';
import { Vaul } from './Components/Vaul/Vaul';

function App() {
  const handleGithubButtonClick = () => {
    window.open('https://github.com/SalikBusk/Vaul', '_blank');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <Heading title='Vaul' subtitle='komponent til React.' center/>
      <div className='flex flex-row items-center gap-5 py-[20px]'>
        <Vaul/>
        <Button label='Github' onClick={handleGithubButtonClick}/>
      </div>
    </div>
  );
}

export default App;
