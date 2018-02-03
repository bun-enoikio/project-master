import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/util';
import { MainStore } from '../stores/mainStore';
import styled from 'styled-components';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Responsive
} from 'semantic-ui-react';
const FontAwesome = require('react-fontawesome');

const StyledMenu = styled.div`
  .right-menu-item {
    padding-right: 80px;
  }
`;

const StyleMenuItem = {
  color: 'white',
  letterSpacing: '2px',
  cursor: 'pointer'
};

const StyleMenuItemMobile = {
  color: 'black',
  letterSpacing: '2px',
  cursor: 'pointer'
};
const MobileMenu = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div style={{ letterSpacing: '2px', paddingBottom: '10px' }}>
              SUBURBAN MAZDA OF TROY
            </div>
            <Button color="red">SCHEDULE SERVICE</Button>
          </Grid.Column>  
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column>
            <a style={StyleMenuItemMobile}>CHECK RECALLS</a>
          </Grid.Column>  
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column>
            <a style={StyleMenuItemMobile}>TAKATA RECALL INFO</a>
          </Grid.Column>  
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column>
            <a style={StyleMenuItemMobile}>TAKATA FAQS</a>
          </Grid.Column>  
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column style={{ paddingBottom: '15px' }}>
            <a style={StyleMenuItemMobile}>AUTHORIZED DEALER</a>
          </Grid.Column>  
        </Grid.Row>
      </Grid>  
    </Container>
  );
};
const MobiledSegment = props => {
  return (
    <Segment textAlign="center" style={{ borderRadius: '0', padding: '0'}}>
      <Segment inverted style={{ borderRadius: '0', paddingBottom: '0'}}>
        <Container>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column textAlign="left">
                <span>Logo</span>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <span onClick={props.toggle} style={{ cursor: 'pointer'}}>Menu</span>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>      
      </Segment>
    {props.visible && <MobileMenu /> }
    <Segment inverted style={{ borderRadius: '0'}} >
      <Container>
        <Header as="h1" inverted style={{ letterSpacing: '0.5rem'}} />
        <Header as="h2" content="MAZDA RECALL" inverted style={{ letterSpacing: '0.5rem' }} />
        <Header as="h2" content="INFORMATION CENTER" inverted style={{ letterSpacing: '0.5rem' }} />
      </Container>
    </Segment>
  </Segment>
  );
}

const DesktopMenu = () => (
  <Segment inverted textAlign="center" style={{ borderRadius: '0'}}>
    <Container textAlign="right">
      <div style={{ display: 'inline', textAlign: 'right' }}>
        <span style={{ margin: '0', paddingRight: '2rem', fontSize: '0.8rem', letterSpacing: '2px' }}>
          SUBURBAN MAZDA OF TROY
        </span>
        <Button color="red">SCHEDULE SERVICE</Button>
      </div>
    </Container>
    <Container>
      <Grid inverted style={{ paddingTop: '1rem' }} columns={4} divided>
        <Grid.Row only="computer tablet">
          <Grid.Column>
            <a style={StyleMenuItem}>CHECK RECALLS</a>
          </Grid.Column>
          <Grid.Column>
            <a style={StyleMenuItem}>TAKATA RECALL INFO</a>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <a style={StyleMenuItem}>TAKATA FAQS</a>
          </Grid.Column>
          <Grid.Column>
            <a style={StyleMenuItem}>AUTHORIZED DEALER</a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Container text>
      <Header as="h1" inverted style={{ letterSpacing: '0.5rem', marginBottom: 0, marginTop: '3rem' }} />
      <Header as="h2" content="MAZDA RECALL" inverted style={{ letterSpacing: '0.5rem' }} />
      <Header as="h2" content="INFORMATION CENTER" inverted style={{ letterSpacing: '0.5rem' }} />
    </Container>
  </Segment>
);

interface Props {
  mainStore: MainStore;
}
@observer
class TopNav extends Component<Props, {}> {
  state = {
    visible: false
  };
  toggleMenu = () => {
    if (this.state.visible) {
      this.setState({ visible: false });
    } else {
      this.setState({ visible: true });
    }
  }
  render() {
    return (
      <div>
        <Segment.Group>
          <Responsive as={Segment} maxWidth={767} style={{ padding: '0' }}>
            <MobiledSegment visible={this.state.visible} toggle={this.toggleMenu}/>
          </Responsive>
          <Responsive as={Segment} minWidth={767} style={{ padding: '0' }}>
            <DesktopMenu />
          </Responsive>
        </Segment.Group>
      </div>
    );
  }
}
export default typedInject('mainStore')(TopNav);
