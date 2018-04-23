import React from 'react';
import { NavLink,withRouter} from "react-router-dom";
import {SideNav} from 'graphene-ui'

class Navigation extends React.Component {
  render(){
    return (
      <SideNav>
        <img style={{marginTop: "15px",marginBottom: "30px", maxWidth: '80%'}} src="Graphene.png" alt="Graphene.png"/>
        {this.props.components.map( name => {
          return (
              <NavLink style={{ textDecoration: 'none' }} key={name} to={`/${name}`}>
                <SideNav.Tab active={this.props.location.pathname === `/${name}`} title={name}/>
              </NavLink>
          )
        })}
      </SideNav>
    )
  }
}

export default withRouter(Navigation);
