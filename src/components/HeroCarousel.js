import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class HeroCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item >
          <img width={900} height={500} alt="javascript-code" src={require('../assets/codes.jpg')} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img width={900} height={500} alt="code-placeholder-2" src={require('../assets/code-instruction.jpg')} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img width={900} height={500} alt="code-placeholder-3" src={require('../assets/laptop-code.jpg')} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default HeroCarousel;
