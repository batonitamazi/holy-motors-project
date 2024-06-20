import { Element } from 'react-scroll';
import './App.css';
import NavSection from './components/NavSection/NavSection';

function App() {
  return (
    <>
      <Element name="section1">
        <NavSection />
      </Element>
      <Element name="section2">
        <section style={{ height: '100vh', margin: 0, padding: 0, backgroundColor: '#000000' }}>
          <h1>Section 2</h1>
          <p>This is the content of section 2</p>
        </section>
      </Element>
      <Element name="section3">
        <section style={{ height: '100vh', margin: 0, padding: 0, backgroundColor: '#FF0000' }}>
          <h1>Section 3</h1>
          <p>This is the content of section 2</p>
        </section>
      </Element>
      <Element name="section4">
        <section style={{ height: '100vh', margin: 0, padding: 0, backgroundColor: '#000000' }}>
          <h1>Section 4</h1>
          <p>This is the content of section 2</p>
        </section>
      </Element>
      <Element name="section5">
        <section style={{ height: '100vh', margin: 0, padding: 0, backgroundColor: 'lightblue' }}>
          <h1>Section 5</h1>
          <p>This is the content of section 2</p>
        </section>
      </Element>
    </ >
  );
}

export default App;