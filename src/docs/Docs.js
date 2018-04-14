import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';
import NavBar from '../components/NavBar'
import GrapheneTheme from '../styles/GrapheneTheme'
export default class Docs extends React.Component {
  render() {
    return (
      <GrapheneTheme>
        <Router>
          <div style={{minHeight: '100vh', width: '100%', background: 'rgb(248, 250, 251)'}}>
            {/* <NavBar/> */}
            <div style={{height: '100%', width: '100%', display: 'grid', gridTemplateColumns: '180px auto'}}>
              <Navigation components={componentData.map(component => component.name)} />
              <div style={{width: "calc(100% - 30px)", padding: "15px"}}>
                {componentData.map(component => {
                  return (
                    <Route key={component.name} path={`/${component.name}`} render={()=><ComponentPage component={component} />}/>
                  )
                }

                )}
              </div>

            </div>
          </div>
        </Router>
      </GrapheneTheme>
    )
  }
}
