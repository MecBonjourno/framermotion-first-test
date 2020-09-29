import React from 'react';
import {motion, useTransform, useViewportScroll} from 'framer-motion'
import Button from '../../components/Button'
import john from '../../assets/johnscreenshot.png'

import { Sticky } from '../../styles';
import {Content } from './styles'

const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const frameOpacity =  useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);
  const frameScale = useTransform(scrollYProgress, [0.558, 0.627],[0.511,0.8]);

  return (

    <Sticky className="second">
      <First />

      <motion.div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100vh',
        borderRadius: '4px',
        border: '4px solid #fff',
        opacity: frameOpacity,
        scale: frameScale,
      }}/>
    </Sticky>
    
  );
};

const First: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const firstScale = useTransform(scrollYProgress,
     [0.198, 0.264, 0.558, 0.627],
     [1, 0.511, 0.511, 1]
     )

     const firstRadius = useTransform(scrollYProgress,
      [0.198, 0.264, 0.558, 0.627],
      [0, 4, 4, 0]
      )

      const leftSideHeight = useTransform(scrollYProgress,
        [0,0.058],
        [ '20vh', '100vh']
        )
      
        const offsetY = useTransform(scrollYProgress,[0.328, 0.397, 0.461, 0.53],['0%', '-100%', '-100%','-200%' ])

      const rightSideY= useTransform(scrollYProgress,[0.047, 0.093],['59vh', '0vh'])
      const rightSideScale = useTransform(scrollYProgress,[0.047, 0.093],[0,0.511])

  return (
    <Sticky className="first" style={{
      scale: firstScale,
      borderRadius: firstRadius,
    }}>
      <motion.div className="offset" style={{
        y: offsetY,
        }}>
      <div className="a">
        <motion.div className="left-side"
        style={{ height: leftSideHeight }}
          >

            <Content>
          <h1> QueRy </h1>
          <p style={{color: 'white'}}>Todas as suas conexões, um toque de distância.</p>
            <Button type='submit' style={{maxWidth: '60%'}}>App Store</Button>

          </Content>

        {/* <p style={{fontSize: 96}}> Test </p> */}

          </motion.div>
        <div className="right-side">
          <motion.div className="right-image"
            style={{
              y: rightSideY,
              scale: rightSideScale,
            }}
          >

            <img src={john} style={{maxWidth: '100%', maxHeight: '130%', paddingLeft: 160}}/>

          </motion.div>
        </div>
      </div>

        <div className="b" />
        <div className="c" />
      </motion.div>
    </Sticky>
  )
}

export default FirstAndSecond;
