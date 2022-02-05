import React, { Component } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";
import { CgChevronDoubleLeftR } from 'react-icons/cg';
import { CgChevronDoubleRightR } from 'react-icons/cg';
import ButtonContainer from "./ButtonContainer";

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});


export default class Gallery extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: 1,
      content: <img src="https://picsum.photos/800/801/?random" alt="1" style={{width:'100%',height:'100%'}}/>
    },
    {
      key: 2,
      content: <img src="https://picsum.photos/800/802/?random" alt="2" style={{width:'100%',height:'100%'}}/>
    },
    {
      key: 3,
      content: <img src="https://picsum.photos/600/803/?random" alt="3" style={{width:'100%',height:'100%'}}/>
    },
    {
      key: 4,
      content: <img src="https://picsum.photos/800/500/?random" alt="4" style={{width:'100%',height:'100%'}}/>
    },
    {
      key: 5,
      content: <img src="https://picsum.photos/800/804/?random" alt="5" style={{width:'100%',height:'100%'}}/>
    },
    {
      key: 6,
      content: <img src="https://picsum.photos/500/800/?random" alt="6" style={{width:'100%',height:'100%'}}/>
    },
    {
      key: 7,
      content: <img src="https://picsum.photos/800/600/?random" alt="7" style={{width:'100%',height:'100%'}}/>
    },
    {
      key: 8,
      content: <img src="https://picsum.photos/805/800/?random" alt="8" style={{width:'100%',height:'100%'}}/>
    }
  ];

  render() {
   
    return (
      <div className="CustomStyle" style={{ width: "90%", height: "500px", margin: "2rem auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
        <ButtonContainer>
          
            <button
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide - 1 });
              }}
              style={{
                background:'transparent',
                border:'none',
                color: '#FFFFFF'
              }}
            >
              <CgChevronDoubleLeftR size='2rem' />
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide + 1 });
              }}
              style={{
                background:'transparent',
                border:'none',
                color: '#FFFFFF'
              }}
            >
              <CgChevronDoubleRightR  size='2rem'/>
            </button>
          
        </ButtonContainer>
      </div>
    );
            
    }
}
