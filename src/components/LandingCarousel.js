import React, { Component } from 'react';
import CodeImage from '../assets/codes.jpg';
import FrameworksImage from '../assets/frameworks.png';
import CodeInstructionImage from '../assets/code-instruction.jpg';
import LaptopCodeImage from '../assets/laptop-code.jpg';

import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src:FrameworksImage,
    altText: 'Code Image',
    caption: "Hear speakers present about the latest frameworks and topics!",
    header: 'Join'
  },
  {
    src:CodeInstructionImage,
    altText: 'Code Instruction Image',
    caption: 'Get advice from other enthusiasts!',
    header: 'Learn'
  },
  {
    src:LaptopCodeImage,
    altText: 'Laptop Code Image',
    caption: 'Share your latest project!',
    header: 'Share'
  }
];

class HeroCarousel extends Component {

  render() {

    return (
      <UncontrolledCarousel autoPlay={false} items={items} />
    );
  }
}


export default HeroCarousel;
