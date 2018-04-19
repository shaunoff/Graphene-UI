import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';
import {Tabs, Segment, Divider} from 'graphene-ui'

const ComponentPage = ({component}) => {
  const {name, description, props, comps, examples} = component;
  return (
    <div style={{width: '100%'}}>
      <h2 style={{color: '#6bada7'}}>{name}</h2>
      <p>{comps[0].description}</p>
      <Divider style={{paddingRight: '50px'}}/>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>
          <h3>Props</h3>
          <Tabs>
            <Tabs.TabList>
              {comps.reverse().map((comp,index) => (
                <Tabs.Tab key={comp.displayName} title={`${name}${index !== 0 ? '.'+comp.displayName : ""}`}/>
              ))}
            </Tabs.TabList>
            <Tabs.TabPanel>
              {comps.map(comp => (
                <Tabs.Panel>
                  <React.Fragment>
                    <div style={{margin: '10px'}}>{comp.description}</div>
                    {comp.props ?
                    <Props props={comp.props} /> :
                    "This component accepts no props."
                    }
                  </React.Fragment>
                </Tabs.Panel>
              ))}
            </Tabs.TabPanel>
          </Tabs>
        </div>
        <div>
          <h3>Example{examples.length > 1 && "s"}</h3>
          <div style={{height: '100%', width: '100%', display: 'grid', gridTemplateColumns: '600px auto'}}>
            <Segment>
              {
                examples.length > 0 ?
                examples.map( example => <Example key={example.name} example={example} componentName={name} /> ) :
                "No examples exist."
              }
            </Segment>
          </div>

        </div>
      </div>
    </div>

  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
