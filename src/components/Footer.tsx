import React, { Component } from 'react';
import styled from 'styled-components';
import { Segment, Container, Grid, Header, List, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const StyleComponent = styled.div`
  .a-link {
    color: white;
  }
  .a-link-mobile {
    font-size: 11px;
    color: white;
  }
`;
class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }} as={StyleComponent}>
        <Container>
          <Grid inverted centered>
            <Grid.Row only="computer tablet">
              <Grid.Column width={3}>
                <a className="a-link" href="https://www.mazdausa.com/">
                  MazdaUSA.com
                </a>
              </Grid.Column>
              <Grid.Column width={3}>
                <a className="a-link" href="/site/terms-of-use">
                  {`Terms & Conditions`}
                </a>
              </Grid.Column>
              <Grid.Column width={3}>
                <a className="a-link" href="/site/privacy">
                  Privacy Policy
                </a>
              </Grid.Column>
              <Grid.Column width={3}>
                <a className="a-link" href="https://www.mazdaseguridad.com">
                  Espanol
                </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row only="mobile">
              <Grid.Column width={10}>
                <a className="a-link-mobile" href="/site/terms-of-use">
                  TERMS AND CONDITIONS
                </a>
              </Grid.Column>
              <Grid.Column width={6}>
                <a className="a-link-mobile" href="/site/privacy">
                  PRIVACY POLICY
                </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <p>MAZDA USA © 2018. All rights reserved.</p>
            </Grid.Row>
            <Divider />
            <Grid.Row textAlign="center">
              <Grid.Column>
                <p>
                  There are two forms of moto vehicle recalls: (1) emission recalls, and (2) safety recalls. Automobile
                  manufactures and/or the U.S. Enviromental Protection Agency (EPA) can initiate an emissions recall
                  when a substantial number of a category of vehicles fails to meet the federal emissions standard. A
                  safety recall involving a moto vehicle or an item of moto vehicles equipment can either be
                  independently conducted by a manufacturer or ordered by the National Highway Traffic Safety
                  Administration (NHTSA) in order to repaire a safety-related defected or noncompliance with a federal
                  motor vehicle safety standard. Mazda works non-safety or a regulatory repair as an SSP.
                </p>
                <br />
                <p>
                  Warranty Extension Special Service Programs (SSPs) are voluntary campaigns to improve customer
                  satisfaction. Customers are contacted by email, and customer participation is voluntary. Special
                  Service Programs that have a Warranty Extension attached are not mandated recalls.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
export default Footer;
