import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/util';
import { MainStore } from '../stores/mainStore';
import { Grid, Image, Segment, Container } from 'semantic-ui-react';
const Slider = require('react-slick').default;
import styled from 'styled-components';

const StyleComponent = styled.div`
  height: 483px;
  margin: 0 auto;
  padding: 20px 20px 20px 20px;
  background-color: lightgray !important;
  .message-box {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 22px;
    .text-1 {
      text-align: center;
    }
    .text-2 {
      padding-top: 20px;
    }
    .img-1 {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
  }
`;
const StyleSegment = { padding: '5rem 0rem', margin: 0, borderRadius: 0 };

interface Props {
  mainStore: MainStore;
}
@observer
class CarouselComponent extends Component<Props, {}> {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Segment basic style={StyleSegment} as={StyleComponent}>
        <Container>
          <Grid>
            <Grid.Column>
              <div className="carousel">
                <Slider {...settings}>
                  <div>
                    <Image src="http://via.placeholder.com/350x293" size="big" />
                  </div>
                  <div>
                    <Image src="http://via.placeholder.com/350x293" size="big" />
                  </div>
                </Slider>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default typedInject('mainStore')(CarouselComponent);
