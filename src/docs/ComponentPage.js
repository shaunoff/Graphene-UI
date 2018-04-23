import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';
import {Tabs, Segment, Divider} from 'graphene-ui'

const getMainComp = (comps, name) => {
  return comps.filter(comp => comp.displayName === name)[0]
}

const getRestSort = (comps,name) => {
  return comps.filter(comp => comp.displayName !== name).sort((a,b) => a.displayName == b.displayName ? 0 : a.displayName < b.displayName ? -1 : 1)
}

const compsArray = (comps,name) => {
  console.log(getMainComp(comps,name))
  console.log(getRestSort(comps,name))
  console.log([getMainComp(comps,name), ...getRestSort(comps,name)])
  return [getMainComp(comps,name), ...getRestSort(comps,name)]
}


const ComponentPage = ({component}) => {
  const {name, comps, examples} = component;
  const sortedComps = compsArray(comps,name)
  console.log(sortedComps)
  return (
    <div style={{width: '100%'}}>
      <h2 style={{color: '#6bada7'}}>{name}</h2>
      <p>{getMainComp(comps,name).description}</p>
      <Divider style={{paddingRight: '50px'}}/>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>
          <h3>Props</h3>
          <Tabs>
            <Tabs.TabList>
              {sortedComps.map((comp,index) => (
                <Tabs.Tab key={comp.displayName} title={`${name}${index !== 0 ? '.'+comp.displayName : ""}`}/>
              ))}
            </Tabs.TabList>
            <Tabs.TabPanel>
              {sortedComps.map((comp,index) => (
                <Tabs.Panel key={index}>
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
          <div style={{height: '100%', width: '100%', display: 'flex', flexDirection:'column'}}>

              {
                examples.length > 0 ?
                examples.map( example => (
                  <Segment key={example.name} style={{marginBottom: '20px'}}>
                    <Example key={example.name} example={example} componentName={name} />
                  </Segment>
                  )
                ) :
                "No examples exist."
              }

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
