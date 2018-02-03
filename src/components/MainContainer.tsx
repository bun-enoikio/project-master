import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/util';
import { MainStore } from '../stores/mainStore';
import CarouselComponent from './CarouselComponent';
import SearchRecallsContainer from './SearchRecallsContainer';
import AuthorizedDealerContainer from './AuthorizedDealerContainer';
import TakataAirBagContainer from './TakataAirBagContainer';
import RecallResultContainer from './RecallResultsContainer';

interface Props {
  mainStore: MainStore;
}
@observer
class MainContainer extends Component<Props, {}> {
  render() {
    const { recallResult } = this.props.mainStore;
    return (
      <div>
        {recallResult.length === 0 ? '': <RecallResultContainer/ >}
        <SearchRecallsContainer />
        <CarouselComponent />
        <TakataAirBagContainer />
        <AuthorizedDealerContainer />
      </div>
    );
  }
}
export default typedInject('mainStore')(MainContainer);
