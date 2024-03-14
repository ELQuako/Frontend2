import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>RISC Inc.</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <h2>Welcome to RISC Inc.</h2>
          <p>Your trusted partner for risk management solutions.</p>
        </section>
        
        <section className="about">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2024 RISC Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
