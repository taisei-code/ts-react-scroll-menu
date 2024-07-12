import React, { useEffect, useState } from 'react';
import './App.css';
import Menu from './Menu';

function App() {
  const [showMenu, setShowMenu] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) { // 100px以上スクロールしたら表示
      setShowMenu(true);
    } else {
      setShowMenu(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold text-black">Scroll Menu</h1>
      </header>
      <Menu show={showMenu} />
    </div>
  );
}

export default App;
