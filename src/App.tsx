import React, {useEffect} from 'react'; 

import GlobalStyles from './styles/global';
import {Main, Section, Sticky } from './styles';
import FirstAndSecond from './components/FirstAndSecond';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Layout from './components/Layout';

function App() {

  React.useEffect(() => {
      window.scrollTo({top: 0})
    }, [])

  return (
    <>
    <Header >
        <Layout>
          <NavBar />
        </Layout>

      </Header> 
      <Main style={{ height: '1610vh'}}>
        <Section style={{height: '72.7%'}}>
          <FirstAndSecond />
        </Section>

        <Section style={{height: '9.7%'}}>
          <Sticky className="third" />
        </Section>

        <Section style={{height: '10.1%'}}>
          <Sticky className="fourth" />
        </Section>
      </Main>
      <GlobalStyles />
    </>
  );
}

export default App;
