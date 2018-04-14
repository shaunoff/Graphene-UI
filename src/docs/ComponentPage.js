import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';
import Tabs from '../components/Tabs'
import Segment from '../components/Segment'
import Divider from '../components/Divider'

const ComponentPage = ({component}) => {
  const {name, description, props, comps, examples} = component;
  console.log("hfdjkjfhjkd",component.comps)
  return (
    <div style={{width: '100%'}}>
      <h2 style={{color: '#6bada7'}}>{name}</h2>
      <p>{comps[0].description}</p>
      <Divider style={{paddingRight: '50px'}}/>
      <div style={{display: 'grid', gridColumnGap: '30px', gridTemplateColumns: 'calc(40% - 15px) calc(60% - 15px)'}}>
        <div>
          <h3>Example{examples.length > 1 && "s"}</h3>
          <Segment>


            {
              examples.length > 0 ?
              examples.map( example => <Example key={example.name} example={example} componentName={name} /> ) :
              "No examples exist."
            }
          </Segment>
        </div>

        <div>
          <h3>Props</h3>
          <Tabs>
            <Tabs.TabList>
              {comps.reverse().map((comp,index) => (
                <Tabs.Tab title={`${name}${index !== 0 ? '.'+comp.displayName : ""}`}/>
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
      </div>
    </div>

  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
