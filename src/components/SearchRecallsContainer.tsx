import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Grid, Header, Form, Button, Container, Segment, Modal, Input, Responsive } from 'semantic-ui-react';
import styled from 'styled-components';
import { typedInject } from '../stores/util';
import { MainStore } from '../stores/mainStore';
import { action, observable } from 'mobx';

const StyleMakeAppointment = styled.a`
  white-space: nowrap;
  color: red;
  padding: 0 5px;
  text-decoration: underline;
  cursor: pointer;
`;
const BoldText = styled.p`
  font-weight: bold;
`;
const StyleSegment = styled.div`
  padding: 5rem 0 !important;
  margin: 0;
  border-radius: 0;
`;

const AuthorizedDealerModalHeader = styled.div`
  background: black;
  color: white;
`;
const AuthorizedDealerModalContent = styled.div`
  .recall-content-txt {
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.8px;
    color: black;
  }
`;
const AuthorizedDealerModalAction = styled.div`
  .authorized-dealer-md-button {
    padding: 15px 65px !important;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    color: white !important;
  }
`;
const UploadInputBox = styled.div`
  > input {
    width: 100px;
    height: 40px;
    overflow: hidden;
    position: absolute !important;
    background-color:transparent !important;
    width: 100px;
    padding: 0 0 0 100px !important;
    border: 0 !important;
  }
`;
const ButtonUpload = {
  display: 'table-cell',
  height: '40px',
  width: '100px',
  font: '12px/100% Arial, Helvetica, sans-serif',
  verticalAlign: 'middle',
  textAlign: 'center',
  backgroundColor: 'white',
  borderStyle: 'solid',
  color: 'black',
  '-webkit-box-sizing': 'border-box',
  '-moz-box-sizing': 'border-box',
  boxSizing: 'border-box',
  borderRadius: '5px'
}; 
const InputButton = () => {
  return (
    <Input as={UploadInputBox} name="imagefile[]" type="file" id="takePictureField" accept="image/*" capture="camcorder" />
  );
};


interface Props {
  mainStore: MainStore;
}

const ScanModal = () => {
  return (
    <Modal trigger={<Button content="SCAN" color="black" />} closeIcon>
      <Modal.Header as={AuthorizedDealerModalHeader}>SCAN VIN</Modal.Header>
      <Modal.Content as={AuthorizedDealerModalContent}>
        <Modal.Description>
          <Grid>
            <Grid.Column>
              <Header as="h4">How to scan the VIN barcode</Header>
              <p>Scan the VIN barcode located on the <span style={{textDecoration: 'underline'}}>driver side door frame.</span></p>
              <br/>
              <p>Center the barcode and fill up the entire screen width without cutting off any part of the code</p>
              <br/>
              <p>It's best to hold the phone in "landscape" mode and use the flash if you have one</p>
              <br/>
              <p>Once you've captured the image, tag "Use image" (iOS) or tap the blue checkmark (Adroid)</p>
            </Grid.Column>
          </Grid>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions as={AuthorizedDealerModalAction}>
        <Grid inverted columns={2} divided centered>
          <Grid.Row>
            <Grid.Column>
              <InputButton />
              <Header as="div" style={ButtonUpload}>SCAN</Header> 
              <Header as='h4' style={{padding: '0'}}>
                Learn More
              </Header>
            </Grid.Column>  
            <Grid.Column textAlign="right">
              <Button color="black" style={{ marginTop: '16px' }}>HELP</Button>
            </Grid.Column>  
          </Grid.Row>  
        </Grid>
      </Modal.Actions>
    </Modal>
  );
};
@observer
class SearchRecallsContainer extends Component<Props, {}> {
  @observable vinNumber: '';

  constructor(props) {
    super(props);
    this.vinNumber = '';
    // this.handleChange = this.handleChange.bind(this);
  }

  @action.bound
  handleChange = e => {
    this.vinNumber = e.target.value;
  };

  render() {
    const { recallResult } = this.props.mainStore;
    return (
      <Segment basic as={StyleSegment}>
        <Container>
          <Grid>
            <Grid.Row textAlign="center">
              <Grid.Column>
                <Header as="h3" style={{ letterSpacing: '2px' }}>
                  BECAUSE DRIVING MATTERS, SAFETY MATTERS.
                </Header>
                <p>
                  This site was create to make it easy for you to get accurate and timely information in the event that
                  your vehicle has a recall. If your vehicle is affected by a recall, please{' '}
                  <StyleMakeAppointment>schedule an appointment</StyleMakeAppointment> to have your vehicle repaired by
                  an authorized Mazda dealer as soon as possible.
                </p>
                <br />
                <BoldText>Check Recall by Vehicle Identification Number (VIN)</BoldText>
                <Form>
                  <Form.Field inline>
                    <input
                      placeholder="17-Character VIN"
                      name="vin"
                      value={this.vinNumber}
                      onChange={e => this.handleChange(e)}
                    />
                    <Responsive maxWidth={767} style={{ padding: '0', display: 'inline-block' }}>
                      <ScanModal />
                    </Responsive>
                    <Responsive minWidth={767} style={{ padding: '0', display: 'inline-block' }}>
                      <Button 
                        content="CHECK FOR RECALLS"
                        color="black"
                        onClick={() => this.props.mainStore.searchVinNumber(this.vinNumber)}
                      />
                    </Responsive>
                  </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
export default typedInject('mainStore')(SearchRecallsContainer);
