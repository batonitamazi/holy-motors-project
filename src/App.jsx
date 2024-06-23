import { Element } from 'react-scroll';
import './App.css';
import NavSection from './components/NavSection/NavSection';
import WorkComponent from './components/WorksComponent/WorkComponent';
import ClientsSection from './components/ClientsSection/ClientsSection';
import ProjectsComponent from './components/ProjectsComponent/ProjectsComponent';
import StorySection from './components/StorySection/StorySection';

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

  const works_screens = [
    {
      id: 1,
      title: 'CCLA - LAW CONSULTING AGENCY',
      subtitle: 'City Mall is a shopping destination that brings people together from all walks of life.',
      image: { src: 'assets/works/slide-01.png', alt: 'city mall' },
      description: [
        'To help visitors find precisely what they are looking for, we doubled down on multiple arrows in the original symbol, updated and expanded them into a navigation-friendly design system.',
        'Typography also got a bold upgrade integrating a custom Georgian adaptation of Pangram typeface.'
      ],
      style: { backgroundColor: '#fff' }
    },
    {
      id: 2,
      title: 'BLAUENSTEIN FARM',
      subtitle: 'Out of nothing, a new source of wealth - Neyco shines through.',
      image: { src: 'assets/works/slide-02.png', alt: 'Neyco' },
      description: [
        'Whether it’s trading cryptocurrencies or pawning your bitcoin wallets to get fastaccess to cash.',
        "Inspired by the eternal Creation of Adam our photo series for Neyco website tries to reframe the struggle between old and new forces, and help the viewers reimagine brand new source of wealth."
      ],
    },
    {
      id: 3,
      title: 'KIND & NOBLE',
      subtitle: 'Out of nothing, if you get tired chewing on your daily fruits and veggies, you can now drink them.',
      image: { src: 'assets/works/slide-03.png', alt: 'KIND & NOBLE' },
      description: [
        "«Kind and Noble» or [ke-ti-li da pa-ti-o-sa-ni] in our native Georgian language isn't just a name! This noble beverage is made exclusively by mixing fresh fruit and vegetable purees to bring mother nature's kindness to humans in the most convenient form."
      ],
    },
    {
      id: 4,
      title: 'KIND & NOBLE',
      subtitle: 'Out of nothing, if you get tired chewing on your daily fruits and veggies, you can now drink them.',
      image: { src: 'assets/works/slide-04.png', alt: 'KIND & NOBLE' },
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
        <ProjectsComponent screens={project_screens} />
      </Element>
      <Element name="section3">
        <WorkComponent screens={works_screens} />
      </Element>
      <Element name="section4">
        <ClientsSection />
      </Element>
      <Element name="section5">
        <StorySection />
      </Element>
    </ >
  );
}

export default App;