import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/finaltest.png";
import img2 from "../assets/Images/Sign Up.png";

import img4 from "../assets/Images/loginx.png";
import img5 from "../assets/Images/workflow.png";
import img6 from "../assets/Images/algo.png";
// import img7 from "../assets/Images/test.png";


// import img8 from "../assets/Images/8.webp";
// import img9 from "../assets/Images/9.webp";
// import img10 from "../assets/Images/10.webp";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

 background-color: #23373c; 
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: white;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  // position: relative;
  position: absolute;
  // top: -4rem;
  top: -4vh;
  left: 45%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    top: -4vh
  }
  @media (max-width: 48em) {
    left: 35%;
    font-size: ${(props) => props.theme.fontxl};
    top: -4vh;
  }
`;

const Left = styled.div`
  width: 20%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    display: none;
    // width: 40%;
    // p {
    //   font-size: ${(props) => props.theme.fontsm};
    // }
  }
  // @media (max-width: 30em) {
  //   p {
  //     font-size: ${(props) => props.theme.fontxs};
  //   }
  // }

`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 10%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  // justify-content: flex-start;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
  left: 0;
  padding-left: 5%;
  }
  
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 50rem;
  height: 100rem;
  margin-top: 7rem;
  /* background-color: black; */
  margin-right: 3rem;
  img {
    width: 50vw;
    height: 70vh;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
  @media (max-width: 64em) {
    // width: 15rem;
    img {
      // margin-right: 20px;
      width: 60vw;
      height: 48vh;
      cursor: pointer;
    }
  }
  @media (max-width: 30em) {
    // width: 15rem;
    img {
      // margin-right: 20px;
      width: 97vw;
      height: 52vh;
      cursor: pointer;
    }
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(0%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <div style={{width: "65vw", height: "80vh", color:"white", display:"flex",flexDirection: "column", alignItems:"center", justifyContent:"center", marginRight: "20px"}}>
      {/* <div style={{width: "6vw", height:"8vh"}}><img src={img} alt={title} /></div> */}
      <img src={img} alt={title} />
      <h1>{title}</h1>
      </div>
    </Item>
  );
};

const OurApproach= () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="OurApproach">
      <Title data-scroll data-scroll-speed="-1">
       Conceptual Overview
      </Title>
      <Left>
        <p>
          For proposing an intuitive and secure graphical authentication 
          , we have gone through multiple reference paper, by taking 
          their approach into consideration and overcoming their drawbacks for 
          better security and lesser hacking chances, we developed an 
          efficient way of authentication system.
          
        </p> 
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product img={img2} title="Sign Up Page" />
        <Product img={img4} title="Login Page" />
        <Product img={img5} title="Workflow" />
        <Product img={img1} title="Future Scope" />
  
        
        <Product img={img6} title="Algorithmic Approach" />
        {/* <Product img={img7} title="Login" />  */}
        {/* <Product img={img8} title="" />
        <Product img={img9} title="" />
        <Product img={img10} title="" />  */} */
      </Right>
    </Section>
  );
};

export default OurApproach;
