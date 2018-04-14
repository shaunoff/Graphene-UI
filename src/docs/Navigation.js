import React from 'react';
import PropTypes from 'prop-types';
import { NavLink} from "react-router-dom";
import SideNav from '../components/SideNav'

class Navigation extends React.Component {
  state = {
    activeTab: null
  }
  activeTab = (match,location,name) => {
    if(match && name !== this.state.activeTab){
      this.setState({activeTab: name})
    }
  }
  render(){
    return (
      <SideNav>
        <img style={{marginTop: "15px",marginBottom: "30px", maxWidth: '80%'}} src="/Graphene.png"/>
        {this.props.components.map( name => {
          return (
              <NavLink style={{ textDecoration: 'none' }} isActive={(match,location)=>{this.activeTab(match,location,name)}} key={name} to={`/${name}`}>
                <SideNav.Tab active={this.state.activeTab === name} title={name}/>
              </NavLink>
          )
        })}
      </SideNav>
    )
  }
}

export default Navigation;
