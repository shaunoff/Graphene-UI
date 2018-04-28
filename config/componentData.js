module.exports = [{"name":"Accordion","comps":[{"description":"","displayName":"Section","methods":[]},{"description":"A super lame component that says Hello with a custom message.","displayName":"Accordion","methods":[{"name":"handleClick","docblock":null,"modifiers":[],"params":[{"name":"index","type":null}],"returns":null},{"name":"getProps","docblock":null,"modifiers":[],"params":[],"returns":null}],"props":{"activeIndex":{"type":{"name":"array"},"required":false,"description":"The index of the current index"},"exclusive":{"type":{"name":"bool"},"required":false,"description":"Indicate whether there should only be pne panel open","defaultValue":{"value":"true","computed":false}},"width":{"type":{"name":"string"},"required":false,"description":"retuyghdfgjhdsgfjhd","defaultValue":{"value":"'100%'","computed":false}}}}],"code":"import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\nimport SectionComponent from './Section'\n\nconst Section = (props) => (\n  <SectionComponent {...props}/>\n)\n\n// Section.propTypes = {\n//   /** The index of the current index */\n//   activeIndex: PropTypes.string,\n//   /** Indicate whether there should only be pne panel open */\n//   exclusive: PropTypes.bool,\n//   /** retuyghdfgjhdsgfjhd */\n//   test: PropTypes.bool\n// };\n\n/** A super lame component that says Hello with a custom message. */\nclass Accordion extends Component {\n  static Section = Section\n  // static Content = Content\n  state = {\n    activeIndex: []\n  }\n  handleClick = (index) => {\n    if(this.props.exclusive){\n      this.setState(\n        ({activeIndex}) => ({activeIndex: activeIndex.includes(index) ? [] : [index]})\n      )\n    }\n    else{\n      this.setState(\n        ({activeIndex}) => {\n          return activeIndex.includes(index) ?\n          {activeIndex : activeIndex.filter(nums => nums !== index)}\n          :\n          {activeIndex: [...activeIndex,index]}\n        }\n      )\n    }\n  }\n  getProps = () => ({\n    handleClick: this.handleClick,\n    activeIndex : this.state.activeIndex\n  })\n  render() {\n    const {getProps} = this\n    return (\n      <div>\n        <div style={{borderRadius: '8px', border: '2px solid #ccc',width: this.props.width}}>\n            {this.props.children({getProps})}\n        </div>\n      </div>\n    );\n  }\n\n}\n\nAccordion.propTypes = {\n  /** The index of the current index */\n  activeIndex: PropTypes.array,\n  /** Indicate whether there should only be pne panel open */\n  exclusive: PropTypes.bool,\n  /** retuyghdfgjhdsgfjhd */\n  width: PropTypes.string\n};\nAccordion.defaultProps = {\n  exclusive: true,\n  width: '100%'\n};\n\n\nexport default Accordion;\n","examples":[{"name":"BasicAccordion","description":"A basic accordion","code":"import React, { Component } from 'react';\nimport {Accordion} from 'graphene-ui'\n\n/** A basic accordion */\nclass BasicAccordion extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<Accordion width=\"500px\">\n\t\t\t\t{({getProps}) => (\n\t\t\t\t\t<React.Fragment>\n\t\t\t\t\t\t<Accordion.Section {...getProps()} index={0} title=\"Section 1\">\n\t\t\t\t\t\t\tContent\n\t\t\t\t\t\t</Accordion.Section>\n\t\t\t\t\t\t<Accordion.Section {...getProps()} index={1} title=\"Section 2\">\n\t\t\t\t\t\t\tContent\n\t\t\t\t\t\t</Accordion.Section>\n\t\t\t\t\t</React.Fragment>\n\t\t\t\t)}\n\t\t\t</Accordion>\n\t\t);\n\t}\n\n}\n\nexport default BasicAccordion;\n"},{"name":"NonExclusive","description":"Non-Exlcusive Accordion","code":"import React, { Component } from 'react';\nimport {Accordion} from 'graphene-ui'\n\n/** Non-Exlcusive Accordion */\nclass NonExclusive extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<Accordion exclusive={false}>\n\t\t\t\t{({getProps}) => (\n\t\t\t\t\t<React.Fragment>\n\t\t\t\t\t\t<Accordion.Section {...getProps()} index={0} title=\"Section 1\">\n\t\t\t\t\t\t\tghjfdgjfdhgfkjdhgjkdfhgjkdfhgkfjd<br/>\n\t\t\t\t\t\t\tdfgdfgfdgdfgdfg<br/>\n\t\t\t\t\t\t\tgfgfgdfgdfdfg<br/>\n\t\t\t\t\t\t\tfghgdfhgdfhjgfdhjgfdsjhgfdhjgfdjhgfdhjfdfgg<br/>\n\t\t\t\t\t\t\tdfgdfgfdgdfgdfggfgdf<br/>\n\t\t\t\t\t\t\tfgdfg<br/>\n\t\t\t\t\t\t</Accordion.Section>\n\t\t\t\t\t\t<Accordion.Section {...getProps()} index={1} title=\"Section 2\">\n\t\t\t\t\t\t\tghjfdgjfdhgfkjdhgjkdfhgjkdfhgkfjd\n\t\t\t\t\t\t</Accordion.Section>\n\t\t\t\t\t\t<Accordion.Section {...getProps()} index={2} title=\"Section 3\">\n\t\t\t\t\t\t\tghjfdgjfdhgfkjdhgjkdfhgjkdfhgkfjd\n\t\t\t\t\t\t</Accordion.Section>\n\t\t\t\t\t\t<Accordion.Section {...getProps()} index={3} title=\"Section 4\">\n\t\t\t\t\t\t\tghjfdgjfdhgfkjdhgjkdfhgjkdfhgkfjd\n\t\t\t\t\t\t</Accordion.Section>\n\t\t\t\t\t</React.Fragment>\n\t\t\t\t)}\n\t\t\t</Accordion>\n\t\t);\n\t}\n\n}\n\nexport default NonExclusive;\n"}]},{"name":"Button","comps":[{"description":"","displayName":"Button","methods":[{"name":"handleClick","docblock":null,"modifiers":[],"params":[],"returns":null},{"name":"getButtonProps","docblock":null,"modifiers":[],"params":[],"returns":null}]}],"code":"import React from 'react';\nimport {Icon} from 'graphene-ui';\n\nconst styles = ({count}) => {\n  return {\n      fontFamily: 'quicksand',\n      fontSize: '16px',\n      position: 'relative',\n      fontWeight: '500',\n      background: '#6bada7',\n      borderRadius: `4px ${count ? \"0px 0px\" : \"4px 4px\"} 4px`,\n      border: '0px',\n      color: 'white',\n      margin: '10 0px 10px 10px',\n  }\n}\n\n\nclass Button extends React.Component {\n  handleClick = () => {\n    console.log(\"clicked oioio\")\n  }\n\tgetButtonProps = () =>{\n\t\tconst {onClick, style} = this.props\n\t\treturn {\n\t\t\tdisabled: this.props.disabled,\n\t\t\tstyle : {...(styles(this.props))},\n\t\t\tonMouseDown: (event)=>{\n        event.preventDefault()\n\t\t\t\tonClick && onClick()\n\t\t\t\tthis.handleClick()\n\t\t\t}\n\t\t}\n\t}\n  render() {\n    return (\n      <div style={{display: 'flex', alignItems: 'center',margin: '10px 10px 10px 0px'}}>\n        <button\n  \t\t\t\t{...this.getButtonProps()}\n  \t\t\t>\n          <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',height: '35px' ,padding: \"0px 10px\"}}>\n            {this.props.icon && (\n              <div style={{position: 'relative', top: '2px', left: '-10px', marginRight: '0px'}}>\n                <Icon color=\"white\" name={this.props.icon} />\n              </div>\n            )}\n            {this.props.children}\n          </div>\n        </button>\n        {this.props.count && (\n          <div style={{color: '#6bada7', fontWeight: '600', textAlign: 'center',width: '20px',border: '2px solid #6bada7', padding: '7px 6px 7px 6px', borderRadius: '0px 4px 4px 0px'}}>\n            {this.props.count}\n          </div>\n        )\n\n      }\n\n      </div>\n\n    );\n  }\n}\nexport default Button\n","examples":[{"name":"BasicButton","description":"Basic Button","code":"import React from 'react';\nimport { Button } from 'graphene-ui';\n\n/** Basic Button */\nexport default function BasicButton() {\n\treturn (\n\t\t<Button onClick={() => console.log('clicked')}>\n\t\t\tClick\n\t\t</Button>\n\t);\n}\n"},{"name":"CountButton","description":"Button with an Counter","code":"import React from 'react';\nimport { Button } from 'graphene-ui';\n\n/** Button with an Counter */\nexport default function BasicButton() {\n\treturn (\n\t\t<Button count={10} icon=\"like\" onClick={() => console.log('clicked')}>\n\t\t\tClick\n\t\t</Button>\n\t);\n}\n"},{"name":"IconButton","description":"Button with an Icon","code":"import React from 'react';\nimport { Button } from 'graphene-ui';\n\n/** Button with an Icon */\nexport default function BasicButton() {\n\treturn (\n\t\t<Button icon=\"arrowRightCircle\" onClick={() => console.log('clicked')}>\n\t\t\tClick\n\t\t</Button>\n\t);\n}\n"}]},{"name":"Carousel","comps":[{"description":"","displayName":"Panel","methods":[{"name":"forwardEnter","docblock":null,"modifiers":[],"params":[],"returns":null},{"name":"forwardExit","docblock":null,"modifiers":[],"params":[],"returns":null},{"name":"backEnter","docblock":null,"modifiers":[],"params":[],"returns":null},{"name":"backExit","docblock":null,"modifiers":[],"params":[],"returns":null}]},{"description":"","displayName":"Carousel","methods":[{"name":"handleAnimate","docblock":null,"modifiers":[],"params":[],"returns":null},{"name":"handleBack","docblock":null,"modifiers":[],"params":[],"returns":null},{"name":"handleChange","docblock":null,"modifiers":[],"params":[],"returns":null}],"props":{"activeIndex":{"type":{"name":"bool"},"required":false,"description":"The index of the current index"}}}],"code":"import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\nimport { TimelineMax, Power3 } from 'gsap';\nimport { Transition } from 'react-transition-group';\nimport {Icon} from 'graphene-ui';\n\nconst styles = {\n\tcontainer: {\n\t\twidth: '100%',\n\t\theight: '400px',\n\t\tdisplay: 'grid',\n\t\tgridTemplateColumns: '50px auto 50px',\n\t\tgridTemplateRows: 'auto 50px',\n\t\talignItems: 'center'\n\t},\n\tpanel: {\n\t\tposition: 'relative',\n\t\twidth: '100%',\n\t\theight: '100%',\n\t\tborder: '2px solid #ccc',\n\t\toverflow: 'hidden'\n\t}\n};\n\n// animateOpen = () => {\n//   var animation = new TimelineMax()\n//   animation\n//     .set(this.container, {opacity: 0})\n//     .from(this.container, duration/1000, {height: 0})\n//     .to(this.container, duration/1000, { opacity: 1 },`-=${duration/1000}`)\n// }\nclass Panel extends Component {\n\tforwardEnter = () => {\n\t\tthis.props.handleAnimate();\n\t\tconst width = this.panel.clientWidth;\n\t\tvar animation = new TimelineMax({\n\t\t\tonComplete: this.props.handleAnimate\n\t\t});\n\t\tanimation.from(this.panel, 2, { ease: Power3.easeInOut, x: width });\n\t};\n\tforwardExit = () => {\n\t\tconst width = this.panel.clientWidth;\n\t\tvar animation = new TimelineMax();\n\t\tanimation.to(this.panel, 2, { ease: Power3.easeInOut, x: `-${width}` });\n\t};\n\tbackEnter = () => {\n\t\tthis.props.handleAnimate();\n\t\tconst width = this.panel.clientWidth;\n\t\tvar animation = new TimelineMax({\n\t\t\tonComplete: this.props.handleAnimate\n\t\t});\n\t\tanimation.from(this.panel, 2, { ease: Power3.easeInOut, x: `-${width}` });\n\t};\n\tbackExit = () => {\n\t\tconst width = this.panel.clientWidth;\n\t\tvar animation = new TimelineMax();\n\t\tanimation.to(this.panel, 2, { ease: Power3.easeInOut, x: width });\n\t};\n\trender() {\n\t\tconst { index, activeIndex, forward, style } = this.props;\n\t\treturn (\n\t\t\t<Transition\n\t\t\t\ttimeout={2000}\n\t\t\t\tin={activeIndex === index}\n\t\t\t\tunmountOnExit\n\t\t\t\tonEntering={forward ? this.forwardEnter : this.backEnter}\n\t\t\t\tonExiting={forward ? this.forwardExit : this.backExit}\n\t\t\t>\n\t\t\t\t<div\n\t\t\t\t\tref={panel => (this.panel = panel)}\n\t\t\t\t\tstyle={{\n\t\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\t\twidth: '100%',\n\t\t\t\t\t\theight: '100%',\n\t\t\t\t\t\tdisplay: 'flex',\n\t\t\t\t\t\tjustifyContent: 'center',\n\t\t\t\t\t\talignItems: 'center',\n\t\t\t\t\t\t...style\n\t\t\t\t\t}}\n\t\t\t\t>\n\t\t\t\t\t{this.props.children}\n\t\t\t\t</div>\n\t\t\t</Transition>\n\t\t);\n\t}\n}\n\nclass Carousel extends Component {\n\tstate = {\n\t\tactiveIndex: 0,\n\t\tforward: true,\n\t\tanimating: false,\n\t\tlength: React.Children.count(this.props.children)\n\t};\n\t// componentDidMount(){\n\t//   const count = React.Children.count(this.props.children)\n\t//   //this.setState({length: count})\n\t// }\n\tcomponentDidMount() {\n\t\tif (this.props.interval) {\n\t\t\tsetInterval(this.handleChange, this.props.interval);\n\t\t}\n\t}\n\thandleAnimate = () => {\n\t\tthis.setState(({ animating }) => ({ animating: !animating }));\n\t};\n\thandleBack = () => {\n\t\tif (this.state.animating) {\n\t\t\treturn;\n\t\t}\n\t\tthis.setState({ forward: false }, () => {\n\t\t\tconst newStage =\n\t\t\t\tthis.state.activeIndex - 1 < 0\n\t\t\t\t\t? this.state.length - 1\n\t\t\t\t\t: this.state.activeIndex - 1;\n\t\t\tthis.setState({ activeIndex: newStage });\n\t\t});\n\t};\n\thandleChange = () => {\n\t\tif (this.state.animating) {\n\t\t\treturn;\n\t\t}\n\t\tthis.setState({ forward: true }, () => {\n\t\t\tconst newStage =\n\t\t\t\tthis.state.activeIndex + 1 > this.state.length - 1\n\t\t\t\t\t? 0\n\t\t\t\t\t: this.state.activeIndex + 1;\n\t\t\tthis.setState({ activeIndex: newStage });\n\t\t});\n\t};\n\tstatic Panel = Panel;\n\trender() {\n\t\tconst { activeIndex, length, forward } = this.state;\n\t\tconst { handleAnimate } = this;\n\t\tconst lengthArray = [...Array(length)];\n\t\tconst children = React.Children.map(this.props.children, (child, index) => {\n\t\t\treturn React.cloneElement(child, {\n\t\t\t\tindex,\n\t\t\t\tactiveIndex,\n\t\t\t\tforward,\n\t\t\t\thandleAnimate\n\t\t\t});\n\t\t});\n\t\treturn (\n\t\t\t<div style={styles.container}>\n\t\t\t\t<div\n\t\t\t\t\tstyle={{ display: 'flex', justifyContent: 'center' }}\n\t\t\t\t\tonClick={this.handleBack}\n\t\t\t\t>\n\t\t\t\t\t<Icon size=\"30px\" name=\"arrowLeftCircle\" />\n\t\t\t\t</div>\n\t\t\t\t<div style={styles.panel}>{children}</div>\n\t\t\t\t<div\n\t\t\t\t\tstyle={{ display: 'flex', justifyContent: 'center' }}\n\t\t\t\t\tonClick={this.handleChange}\n\t\t\t\t>\n\t\t\t\t\t<Icon size=\"30px\" name=\"arrowRightCircle\" />\n\t\t\t\t</div>\n\t\t\t\t<div\n\t\t\t\t\tstyle={{\n\t\t\t\t\t\tgridRow: 2,\n\t\t\t\t\t\tgridColumnStart: 1,\n\t\t\t\t\t\tgridColumnEnd: 4,\n\t\t\t\t\t\tdisplay: 'flex',\n\t\t\t\t\t\tjustifyContent: 'center'\n\t\t\t\t\t}}\n\t\t\t\t>\n\t\t\t\t\t{lengthArray.map((dot, index) => (\n\t\t\t\t\t\t<div\n              key={index}\n\t\t\t\t\t\t\tstyle={{\n\t\t\t\t\t\t\t\tbackground: index === activeIndex ? '#585858' : 'none',\n\t\t\t\t\t\t\t\tmargin: '0px 6px',\n\t\t\t\t\t\t\t\twidth: '8px',\n\t\t\t\t\t\t\t\theight: '8px',\n\t\t\t\t\t\t\t\tborder: '2px solid #585858',\n\t\t\t\t\t\t\t\tborderRadius: '8px'\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t/>\n\t\t\t\t\t))}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t);\n\t}\n}\n\nCarousel.propTypes = {\n\t/** The index of the current index */\n\tactiveIndex: PropTypes.bool\n};\n\nexport default Carousel;\n","examples":[{"name":"BasicCarousel","description":"A basic Carousel","code":"import React, { Component } from 'react';\nimport {Carousel} from 'graphene-ui'\n\n/** A basic Carousel */\nclass BasicCarousel extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<Carousel >\n\t\t\t\t<Carousel.Panel>\n\t\t\t\t\tPanel 1\n\t\t\t\t</Carousel.Panel>\n\t\t\t\t<Carousel.Panel>\n\t\t\t\t\tPanel 2\n\t\t\t\t</Carousel.Panel>\n\t\t\t\t<Carousel.Panel>\n\t\t\t\t\tPanel 3\n\t\t\t\t</Carousel.Panel>\n\t\t\t\t<Carousel.Panel style={{background: 'red'}}>\n\t\t\t\t\tHello Stepgh\n\t\t\t\t</Carousel.Panel>\n\t\t\t</Carousel>\n\t\t);\n\t}\n\n}\n\nexport default BasicCarousel;\n"}]},{"name":"Divider","comps":[{"description":"","displayName":"Divider","methods":[]}],"code":"import React from 'react';\n\nconst Divider = ({style}) => (\n\t<div style={{marginTop: '10px', marginBottom: '10px', display:'flex', height: '2px', background: '#ccc', ...style}}></div>\n);\n\nexport default Divider;\n","examples":[]},{"name":"HelloWorld","comps":[{"description":"A super lame component that says Hello with a custom message.","displayName":"HelloWorld","methods":[],"props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}}}],"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** A super lame component that says Hello with a custom message. */\nfunction HelloWorld({message}) {\n  return <div>Hello {message}</div>\n}\n\nHelloWorld.propTypes = {\n  /** Message to display */\n  message: PropTypes.string\n};\n\nHelloWorld.defaultProps = {\n  message: 'World'\n};\n\nexport default HelloWorld;\n","examples":[{"name":"ExampleHelloWorld","description":"Custom message","code":"import React from 'react';\nimport HelloWorld from 'graphene-ui/HelloWorld';\n\n/** Custom message */\nexport default function ExampleHelloWorld() {\n  return (\n    <HelloWorld message=\"Pluralsight viewers!\" />\n  )\n}\n"}]},{"name":"Icon","comps":[{"description":"","displayName":"Icon","methods":[],"props":{"color":{"type":{"name":"string"},"required":false,"description":"Color of the icon","defaultValue":{"value":"\"#6bada7\"","computed":false}},"name":{"type":{"name":"string"},"required":true,"description":"The name of the icon"}}}],"code":"import React, {Component} from 'react'\nimport PropTypes from 'prop-types';\nimport icons from './icons'\n\nclass Icon extends Component {\n  render(){\n    const size = this.props.size || \"16px\"\n\t\tconst color = this.props.color || \"#6bada7\"\n\n    return(\n      <svg\n\t\t\t\txmlns=\"http://www.w3.org/2000/svg\" xmlnsXlink=\"http://www.w3.org/1999/xlink\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 20 20\" style={{width: `${size}`,height: `${size}`,enableBackground:'new 0 0 449.406 449.406', padding: '5px'}} xmlSpace=\"preserve\">\n\t      <g>\n\t\t\t\t\t{icons[this.props.name].paths && icons[this.props.name].paths.map(path => (\n\t\t\t\t\t\t<path key={path} d={path} fill={color}/>\n\t\t\t\t\t))}\n          {icons[this.props.name].circles && icons[this.props.name].circles.map((circle,index) => (\n\t\t\t\t\t\t<circle key={circle} cx={circle.x} cy={circle.y} r={circle.r} style={{...circle.style, stroke: color}}/>\n\t\t\t\t\t))}\n\t      </g>\n      </svg>\n\n    )\n  }\n}\n\nIcon.propTypes = {\n  /** Color of the icon*/\n  color: PropTypes.string,\n  /** The name of the icon*/\n  name: PropTypes.string.isRequired\n};\nIcon.defaultProps = {\n  color: \"#6bada7\",\n};\n\nexport default Icon\n","examples":[{"name":"BasicIcon","description":"A basic accordion","code":"import React, { Component } from 'react';\nimport {Icon} from 'graphene-ui'\n\n/** A basic accordion */\nclass BasicIcon extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<Icon name=\"comment\"/>\n\t\t);\n\t}\n\n}\n\nexport default BasicIcon;\n"}]},{"name":"Input","comps":[{"description":"","displayName":"Input","methods":[{"name":"changeValue","docblock":null,"modifiers":[],"params":[{"name":"event","type":null}],"returns":null},{"name":"handleKeyPress","docblock":null,"modifiers":[],"params":[{"name":"event","type":null}],"returns":null}]}],"code":"import React from \"react\";\nimport styles from './styles'\nimport Radium from 'radium'\n\nclass Input extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      focus: false,\n      value: props.value || \"\",\n      error: props.error || \"\",\n      label: props.label || \"Label\"\n    };\n  }\n\n  changeValue(event) {\n    const value = event.target.value;\n    this.setState({ value, error: \"\" });\n  }\n\n  handleKeyPress(event) {\n    if (event.which === 13) {\n      this.setState({ value: this.props.predicted });\n    }\n  }\n\n  render() {\n    const { value, error, label,focus } = this.state;\n    const { locked } = this.props;\n    const active = focus || value.length\n\t\tconsole.log(active)\n    return (\n      <div style={styles.container}>\n\t\t\t\t<label style={{...styles.labelFloat, ...(active && styles.labelFloatActive)}}>Testy Westy</label>\n        <input\n          id={1}\n\t\t\t\t\tstyle={styles.input}\n          type=\"text\"\n          value={value}\n          onChange={this.changeValue.bind(this)}\n          onKeyPress={this.handleKeyPress.bind(this)}\n          onFocus={() => !locked && this.setState({ focus: true })}\n          onBlur={() => !locked && this.setState({ focus: false })}\n        />\n        <label htmlFor={1} className={error && \"error\"}>\n          {error || label}\n        </label>\n      </div>\n    );\n  }\n}\nexport default Radium(Input)\n","examples":[{"name":"BasicInput","description":"ioioioooioio:","code":"import React from 'react';\nimport {Input} from 'graphene-ui';\n\n/** ioioioooioio: */\nexport default function ExampleInput() {\n  return <Input/>\n}\n"}]},{"name":"NavBar","comps":[{"description":"","displayName":"NavBar","methods":[],"props":{"style":{"type":{"name":"object"},"required":false,"description":"Navbar Componenet"},"message":{"type":{"name":"string"},"required":false,"description":"Navbar Componenet","defaultValue":{"value":"'World'","computed":false}}}}],"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n//import GrapheneContext from '../../styles/GrapheneContext'\n/** Navbar component sist at the top of the page */\n\nconst styles = {\n\tcontainer: {\n\t\tpaddingLeft: '20px',\n\t\tbackground: 'white',\n\t\theight: \"55px\",\n\t\tdisplay: 'flex',\n\t\talignItems: 'center',\n\t\tborderBottom: \"2px solid #ccc\"\n\t}\n}\n\nexport const NavBar = ({style}) => (\n\t\t<div style={{...styles.container, ...style}}>\n\t\t\t<img style={{maxHeight: '80%'}} src='Graphene.png' alt='Graphene.png'/>\n\t\t\thello\n\t\t</div>\n)\n\nNavBar.propTypes = {\n  /** Navbar Componenet */\n\tstyle: PropTypes.object,\n\t/** Navbar Componenet */\n  message: PropTypes.string\n};\n\nNavBar.defaultProps = {\n  message: 'World'\n};\n\n\n\n\nexport default NavBar;\n","examples":[{"name":"ExampleNavBar","description":"ioioioooioio:","code":"import React from 'react';\nimport {NavBar} from 'graphene-ui';\n\n/** ioioioooioio: */\nexport default function ExampleNavBar() {\n  return <NavBar style={{color: 'blue'}}/>\n}\n"}]},{"name":"Rating","comps":[{"description":"","displayName":"Rating","methods":[{"name":"changeTempScore","docblock":null,"modifiers":[],"params":[{"name":"score","type":null}],"returns":null},{"name":"setScore","docblock":null,"modifiers":[],"params":[{"name":"score","type":null}],"returns":null}],"props":{"stars":{"type":{"name":"number"},"required":false,"description":"The total number of stars","defaultValue":{"value":"5","computed":false}},"score":{"type":{"name":"number"},"required":false,"description":"The current rating","defaultValue":{"value":"1","computed":false}},"disabled":{"type":{"name":"bool"},"required":false,"description":"Prevent the rating from being changed"},"onClick":{"type":{"name":"custom","raw":"PropTypes.function"},"required":false,"description":"Callback triggered with current score","defaultValue":{"value":"()=>{}","computed":false}}}}],"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport Radium from 'radium'\nimport Star from './Star';\nimport StarFill from './StarFill';\n\n\n\n\n\nclass Rating extends React.Component {\n  state = {\n    score: this.props.score,\n    tempScore: null\n  }\n  changeTempScore = (score) => {\n    if(this.props.disabled) return\n    this.setState({tempScore: score})\n  }\n  setScore = (score) => {\n    if(this.props.disabled) return\n    this.setState({score},()=>this.props.onClick && this.props.onClick(score))\n\n  }\n  render() {\n    const stars = new Array(this.props.stars).fill(\"star\")\n    return (\n      <div style={{display: 'flex'}}>\n        {stars.map((star,index) => <Star key={index} index={index} setScore={this.setScore} changeTemp={this.changeTempScore} filled={index+1 <= this.state.score || index <= this.state.tempScore}/>)}\n      </div>\n    );\n  }\n}\n\nRating.propTypes = {\n  /** The total number of stars*/\n  stars: PropTypes.number,\n  /** The current rating*/\n  score: PropTypes.number,\n  /** Prevent the rating from being changed*/\n  disabled: PropTypes.bool,\n  /** Callback triggered with current score*/\n  onClick: PropTypes.function,\n};\nRating.defaultProps = {\n  stars: 5,\n  score: 1,\n  onClick: ()=>{}\n};\n\nexport default Radium(Rating)\n","examples":[{"name":"BasicRating","description":"Basic rating component","code":"import React from 'react';\nimport {Rating} from 'graphene-ui';\n\n/** Basic rating component */\nexport default function ExampleRating() {\n  return <Rating score={3}/>\n}\n"},{"name":"DisabledRating","description":"Disabled rating component","code":"import React from 'react';\nimport {Rating} from 'graphene-ui';\n\n/** Disabled rating component */\nexport default function ExampleRating() {\n  return <Rating disabled score={3}/>\n}\n"},{"name":"LargeRating","description":"large rating component","code":"import React from 'react';\nimport {Rating} from 'graphene-ui';\n\n/** large rating component */\nexport default function ExampleRating() {\n  return <Rating stars={10} score={3}/>\n}\n"},{"name":"RatingCallback","description":"Callback can be triggered with the current score","code":"import React from 'react';\nimport {Rating} from 'graphene-ui';\n\n/** Callback can be triggered with the current score */\nexport default function ExampleRating() {\n  return <Rating onClick={(score)=> alert(score)} score={3}/>\n}\n"}]},{"name":"Segment","comps":[{"description":"","displayName":"Segment","methods":[]}],"code":"import React from 'react';\n\nconst styles = {\n\twidth: '100%',\n\theight: '100%',\n\tpadding: '10px',\n\tbackground: 'white',\n\tborder: \"2px solid #ccc\",\n\tborderRadius: '8px',\n\toverflow: 'scroll',\n\tboxSizing: 'border-box'\n}\n\nconst Segment = ({children,style}) => (\n\t<div style={{...styles,...style}}>\n\t\t{children}\n\t</div>\n);\n\nexport default Segment;\n","examples":[]},{"name":"SideNav","comps":[{"description":"","displayName":"Tab","methods":[],"props":{"testy":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}}},{"description":"","displayName":"SideNav","methods":[],"props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}}}],"code":"import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\n\nconst inactiveStyle = {borderLeft: \"6px solid #f8fafb\", background:'#FFFFFF', display: 'flex', paddingTop: '15px', height: '40px', paddingBottom: '15px', flexDirection: 'row', width: '174px', alignItems: 'center'}\nconst activeStyle =   {borderLeft: \"6px solid #6bada7\", background:'#F8FAFB', display: 'flex', paddingTop: '15px', height: '36px', paddingBottom: '15px', borderTop: \"2px solid #ccc\", borderBottom: \"2px solid #ccc\", width: '178px',  alignItems: 'center'}\n\nconst Tab = ({title,active}) => {\n\treturn (\n\t\t<div style={{...(active ? activeStyle : inactiveStyle), fontWeight: \"500\",color: \"rgb(88,88,88)\",textDecoration: 'none'}}>\n\t\t\t{title}\n\t\t</div>\n\t)\n}\n\n\n\n\n\nclass SideNav extends Component {\n\tstatic Tab = Tab\n\trender() {\n\t\treturn (\n\t\t\t<div style={{minHeight: '100vh',textDecoration: 'none',paddingTop: '10px',borderRight:'2px solid #ccc',display: 'flex',flexDirection: 'column', width: '180px',background: 'white',alignItems: \"center\"}}>\n\t\t\t\t\t\t{this.props.children}\n\t\t\t</div>\n\t\t)\n\t}\n}\n\nSideNav.propTypes = {\n  /** Message to display */\n  message: PropTypes.string\n};\n\nSideNav.defaultProps = {\n  message: 'World'\n};\n\nTab.propTypes = {\n  /** Message to display */\n  testy: PropTypes.string\n};\n\nTab.defaultProps = {\n  testy: 'World'\n};\n\nexport default SideNav\n","examples":[]},{"name":"Slider","comps":[{"description":"","displayName":"Slider","methods":[{"name":"onSliderChange","docblock":null,"modifiers":[],"params":[{"name":"value","type":null}],"returns":null}]}],"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport RSlider, { Range } from 'rc-slider';\nimport 'rc-slider/assets/index.css';\n\n\n\n\nclass Slider extends React.Component {\n  state={\n    lowerBound: 20,\n    upperBound: 40,\n    value: [20, 40],\n  }\n  onSliderChange = (value) => {\n    this.setState({value})\n  }\n  render() {\n    return (\n      <Range allowCross={false} value={this.state.value} onChange={this.onSliderChange} />\n    );\n  }\n}\n\n\n\n\nexport default Slider\n","examples":[{"name":"BasicSlider","description":"ioioioooioio:","code":"import React from 'react';\nimport {Slider} from 'graphene-ui';\n\n/** ioioioooioio: */\nexport default function BasicSlider() {\n  return <Slider/>\n}\n"}]},{"name":"Switch","comps":[{"description":"","displayName":"Switch","methods":[{"name":"toggle","docblock":null,"modifiers":[],"params":[],"returns":null}],"props":{"on":{"type":{"name":"bool"},"required":false,"description":"state of the switch","defaultValue":{"value":"false","computed":false}},"onClick":{"type":{"name":"custom","raw":"PropTypes.function"},"required":false,"description":"Color of the icon"},"style":{"type":{"name":"custom","raw":"PropTypes.function"},"required":false,"description":"custom styles to switch container"}}}],"code":"import React, {Component} from 'react'\nimport PropTypes from 'prop-types';\nimport {Icon} from 'graphene-ui'\n\n\nclass Switch extends Component {\n  state = {\n    on: this.props.on\n  }\n  toggle = () => {\n    this.setState({on: !this.state.on}, () => {\n      this.props.onClick && this.props.onClick(this.state.on)\n    })\n  }\n  render(){\n    return(\n      <div onClick={this.toggle} style={{cursor: \"pointer\", height: '32px', width: '60px', border: '2px solid #ccc', borderRadius: '32px', ...this.props.style}}>\n        <div style={{transition:'all 0.3s ease', position: 'relative', left: `${this.state.on ? 28 : 0}px`, height: '24px', width: '24px', borderRadius: '30px',background: `#${this.state.on ? '6bada7' : 'ccc'}`,margin: '4px'}}></div>\n        <Icon name=\"user\"/>\n      </div>\n\n    )\n  }\n}\n\nSwitch.propTypes = {\n  /** state of the switch*/\n  on: PropTypes.bool,\n  /** Color of the icon*/\n  onClick: PropTypes.function,\n  /** custom styles to switch container*/\n  style: PropTypes.function\n};\nSwitch.defaultProps = {\n  on: false,\n};\n\nexport default Switch\n","examples":[{"name":"BasicInput","description":"ioioioooioio:","code":"import React from 'react';\nimport {Switch} from 'graphene-ui';\n\n/** ioioioooioio: */\nexport default function ExampleSwitch() {\n  return <Switch/>\n}\n"}]},{"name":"Table","comps":[{"description":"","displayName":"Header","methods":[]},{"description":"","displayName":"Body","methods":[]},{"description":"","displayName":"Row","methods":[]},{"description":"","displayName":"HeaderCell","methods":[]},{"description":"","displayName":"Cell","methods":[]},{"description":"","displayName":"Table","methods":[]}],"code":"import React, { Component } from 'react';\nimport styles from './styles';\n\nconst Header = ({children}) => (\n\t\t<div style={{...styles.row,...styles.header}}>\n\t\t\t{children}\n\t\t</div>\n\n);\n\nconst Body = ({children}) => {\n\tchildren = React.Children.map(children, (child,index) => React.cloneElement(child, {index, key: index}))\n\treturn (\n\t\t<div>\n\t\t\t{children}\n\t\t</div>\n\t)\n}\n\n\nconst Row = ({children,key,index}) => (\n\t\t<div key={index} style={{...styles.rowContent,...(index % 2 === 0 ? styles.evenRow : null)}}>\n\t\t\t{children}\n\t\t</div>\n);\n\nconst HeaderCell = ({children,title,style}) => (\n\t<div style={{...styles.headerCell, ...(style ? style : {flex: 1})}}>\n\t\t<div>{title || children}</div>\n\t</div>\n);\n\nconst Cell = ({children,style}) => (\n\t<div style={style ? style : {flex: 1}}>\n\t\t<div>{children}</div>\n\t</div>\n);\n\n\nclass Table extends Component {\n\tstatic Header = Header\n\tstatic HeaderCell = HeaderCell\n\tstatic Body = Body\n\tstatic Row = Row\n\tstatic Cell = Cell\n\trender() {\n\t\treturn (\n\t\t\t<div style={styles.container}>\n\t\t\t\t{this.props.children}\n\t\t\t</div>\n\t\t);\n\t}\n}\n\nexport default Table;\n","examples":[]},{"name":"Tabs","comps":[{"description":"","displayName":"TabList","methods":[],"props":{"tabListExample":{"type":{"name":"string"},"required":false,"description":"Put your message here","defaultValue":{"value":"'World'","computed":false}}}},{"description":"","displayName":"TabPanel","methods":[]},{"description":"","displayName":"Panel","methods":[]},{"description":"","displayName":"Tab","methods":[]},{"description":"","displayName":"Tabs","methods":[{"name":"changeIndex","docblock":null,"modifiers":[],"params":[{"name":"activeIndex","type":null}],"returns":null}]}],"code":"import React, { Component } from 'react';\nimport styles from './styles'\nimport PropTypes from 'prop-types';\n\nconst TabList = ({activeIndex,children,changeIndex}) => {\n\tconst childrenWithProps = React.Children.map(children, (child,index) => React.cloneElement(child, {activeIndex,index,changeIndex}))\n\treturn <div style={styles.tabsContainer}>{childrenWithProps}</div>\n}\n\nconst TabPanel = ({activeIndex,children}) => {\n\tconst childrenWithProps = React.Children.map(children, (child,index) => React.cloneElement(child, {activeIndex,index}))\n\treturn <div style={styles.panelContainer}>{childrenWithProps}</div>\n}\nconst Panel = ({activeIndex,children,index}) => {\n\tif(activeIndex === index){\n\t\treturn (\n\t\t\t<div style={{width: '100%', height: '100%'}}>\n\t\t\t\t{children}\n\t\t\t</div>\n\t\t)\n\t}\n\treturn null\n}\nconst Tab = ({activeIndex,children,title,index, changeIndex}) => {\n\treturn (\n\t\t<div onClick={()=>changeIndex(index)} style={{...styles.tabsBlock, ...(activeIndex===index ? styles.activeTabsBlock : null)}}>\n\t\t\t<span style={{fontWeight: 500, color: \"rgb(88, 88, 88)\"}}>{title}</span>\n\t\t</div>\n\t)\n}\n\n\nclass Tabs extends Component {\n\tstate = {\n\t\tactiveIndex: 0\n\t}\n\n\tchangeIndex = (activeIndex) => {\n\t\tthis.setState({activeIndex})\n\t}\n\tstatic TabList = TabList\n\tstatic Tab = Tab\n\tstatic Panel = Panel\n\tstatic TabPanel = TabPanel\n\trender() {\n\t\tconst {activeIndex} = this.state\n\t\tconst childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {activeIndex, changeIndex: this.changeIndex}))\n\t\treturn (\n\t\t\t<div style={styles.container}>\n\t\t\t\t{childrenWithProps}\n\t\t\t</div>\n\t\t);\n\t}\n\n}\n\n\nTabList.propTypes = {\n  /** Put your message here */\n  tabListExample: PropTypes.string\n};\n\nTabList.defaultProps = {\n  tabListExample: 'World'\n};\n\n\nexport default Tabs;\n","examples":[]}]