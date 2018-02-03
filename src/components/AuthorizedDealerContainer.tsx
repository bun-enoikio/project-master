import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/util';
import { MainStore } from '../stores/mainStore';
import { Header, Segment, Container, Grid, Form, Button, Modal, Input, List, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

const StyleComponent = styled.div`
  .visit-website {
    color: black;
    text-decoration: underline;
  }
  .search-authorized-dealer {
    cursor: pointer;
    color: black;
    text-decoration: underline;
    font-weight: 300;
    padding-left: 0.5rem;
  }
`;
const StyleDivider = styled.div`
  border-top-width: 2px;
  background: black;
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

const StyleSegment = { padding: '5rem 0rem', margin: 0, backgroundColor: '#f8f8f8', borderRadius: 0 };

interface Props {
  mainStore: MainStore;
}
@observer
class AuthorizedDelaerContainer extends Component<Props, {}> {
  render() {
    return (
      <Segment style={StyleSegment} as={StyleComponent}>
        <Container>
          <Grid columns={2} stackable>
            <Grid.Column width={6}>
              <Header as="h3">YOUR AUTHORIZED DEALER</Header>
              <Header as="h6">
                SUBURBAN MAZDA OF TROY
                <Modal trigger={<a className="search-authorized-dealer">Not your dealer?.</a>} closeIcon>
                  <Modal.Header as={AuthorizedDealerModalHeader}>Search for an authorized Mazda dealer</Modal.Header>
                  <Modal.Content as={AuthorizedDealerModalContent}>
                    <Modal.Description>
                      <Grid centered>
                        <Grid.Column>
                          <Form>
                            <Form.Field>
                              <label>Please enter your zip to find a dealer:</label>
                              <Input placeholder="Enter 5 digit zip code" />
                            </Form.Field>
                          </Form>
                        </Grid.Column>
                      </Grid>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions as={AuthorizedDealerModalAction}>
                    <Button basic>Close</Button>
                    <Button color="red">Search now</Button>
                  </Modal.Actions>
                </Modal>
              </Header>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <p>1794 MAPLELAWN DR.TROY, MI 48084</p>
                    <p>248-649-2300</p>
                    <a href="/" className="visit-website">
                      VISIT WEBSITE
                    </a>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={4}>
              <p>SERVICE HOURS:</p>
              <p>MON, THU: 7:00 AM - 8:00 PM</p>
              <p>TUE, WED, FRI: 7:00 AM - 6:00 PM</p>
              <p>SAT: 8:00 AM - 3:00 PM</p>
              <Button color="black">SCHEDULE SERVICE</Button>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as="h3">RECALL NOTIFICATION</Header>
              <Divider as={StyleDivider} />
              <p>
                Would you like to receive important recall notifications about your vehicle via email? If at any point
                you decide you no longer wish to receive recall updates, you will be able unsubscribe from further
                notifications in the footer of the emails sent.
              </p>
              <Button color="black">SUBSCRIBE</Button>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
export default typedInject('mainStore')(AuthorizedDelaerContainer);
