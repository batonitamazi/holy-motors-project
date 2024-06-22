import { Element } from 'react-scroll';
import './App.css';
import NavSection from './components/NavSection/NavSection';
import ScrollableComponent from './components/ScrollableComponent/ScrollableComponent';

function App() {

  const project_screens = [
    {
      id: 1,
      title: 'City Mall',
      subtitle: 'City Mall is a shopping destination that brings people together from all walks of life.',
      image: { src: 'assets/projects/slide-01.png', alt: 'city mall' },
      description: [
        'To help visitors find precisely what they are looking for, we doubled down on multiple arrows in the original symbol, updated and expanded them into a navigation-friendly design system.',
        'Typography also got a bold upgrade integrating a custom Georgian adaptation of Pangram typeface.'
      ],
      style: { backgroundColor: '#fff' }
    },
    {
      id: 2,
      title: 'neyco',
      subtitle: 'Out of nothing, a new source of wealth - Neyco shines through.',
      image: { src: 'assets/projects/slide-02.png', alt: 'Neyco' },
      description: [
        'Whether it’s trading cryptocurrencies or pawning your bitcoin wallets to get fastaccess to cash.',
        "Inspired by the eternal Creation of Adam our photo series for Neyco website tries to reframe the struggle between old and new forces, and help the viewers reimagine brand new source of wealth."
      ],
    },
    {
      id: 3,
      title: 'KIND & NOBLE',
      subtitle: 'Out of nothing, if you get tired chewing on your daily fruits and veggies, you can now drink them.',
      image: { src: 'assets/projects/slide-03.png', alt: 'KIND & NOBLE' },
      description: [
        "«Kind and Noble» or [ke-ti-li da pa-ti-o-sa-ni] in our native Georgian language isn't just a name! This noble beverage is made exclusively by mixing fresh fruit and vegetable purees to bring mother nature's kindness to humans in the most convenient form."
      ],
    }
  ];


  return (
    <>
      <Element name="section1">
        <NavSection />
      </Element>
      <Element name="section2">
        <ScrollableComponent screens={project_screens} />
      </Element>
      <Element name="section3">
        <ScrollableComponent screens={project_screens} />
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