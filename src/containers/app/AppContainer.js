/*
 * @flow
 */

import React from "react";

import styled from "styled-components";
import { AuthActionFactory } from "lattice-auth";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import OpenLatticeLogo from "../../assets/images/logo_and_name.png";
import StyledButton from "../../components/buttons/StyledButton";
import * as Routes from "../../core/router/Routes";

// My Components
import EntityTypes from "../../components/EntityTypes";
import PropertyTypes from "../../components/PropertyTypes";
import AssociationTypes from "../../components/AssociationTypes";
import NavBar from "../../components/NavBar";

const { logout } = AuthActionFactory;

/*
 * styled components
 */

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 800px;
  position: relative;
`;

const AppHeaderOuterWrapper = styled.header`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 800px;
  position: relative;
`;

const AppHeaderInnerWrapper = styled.div`
  align-items: center;
  background-color: #fefefe;
  border-bottom: 1px solid #c5d5e5;
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  height: 100px;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: normal;
  margin: 0;
`;

const StyledActionButton = StyledButton.extend`
  position: absolute;
  right: 50px;
`;

const Logo = styled.img`
  position: absolute;
  left: 50px;
`;

/*
 * types
 */

type Props = {
  actions: {
    login: () => void,
    logout: () => void
  }
};

const Test = () => (
  <div>
    <NavBar />
    <p>Testing Life</p>
  </div>
);

const AppContainer = ({ actions }: Props) => (
  <AppWrapper>
    <AppHeaderOuterWrapper>
      <AppHeaderInnerWrapper>
        <Logo src={OpenLatticeLogo} height="50" />
        <Title>OpenLattice React App</Title>
        <StyledActionButton onClick={actions.logout}>Logout</StyledActionButton>
      </AppHeaderInnerWrapper>
    </AppHeaderOuterWrapper>
    <div className="container-fluid">
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/propertytypes" component={PropertyTypes} />
            <Route path="/entitytypes" component={EntityTypes} />
            <Route path="/associationtypes" component={AssociationTypes} />
            <Route path={Routes.ROOT} component={PropertyTypes} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </AppWrapper>
);
// PropertyTypes
// EntityTypes
// AssociationTypes
// Schemas

function mapDispatchToProps(dispatch: Function): Object {
  return {
    actions: bindActionCreators({ logout }, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AppContainer);
