import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/util';
import { MainStore } from '../stores/mainStore';
import { Container, Segment } from 'semantic-ui-react';
import TopNav from './TopNav';
import Footer from './Footer';
import MainContainer from './MainContainer';

interface Props {
  mainStore: MainStore;
}
@observer
class App extends Component<Props, {}> {
  render() {
    return (
      <div>
        <TopNav />
        <MainContainer />
        <Footer />
      </div>
    );
  }
}
export default typedInject('mainStore')(App);
