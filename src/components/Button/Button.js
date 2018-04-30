import React from 'react';
import {Icon} from 'graphene-ui';

const styles = ({count,style}) => {
  return {
      fontFamily: 'quicksand',
      fontSize: '16px',
      position: 'relative',
      fontWeight: '500',
      background: '#6bada7',
      borderRadius: `4px ${count ? "0px 0px" : "4px 4px"} 4px`,
      border: '0px',
      color: 'white',
      margin: '10 0px 10px 10px',
      ...style
  }
}


class Button extends React.Component {
  handleClick = () => {
    console.log("clicked oioio")
  }
	getButtonProps = () =>{
		const {onClick, style} = this.props
		return {
			disabled: this.props.disabled,
			style : {...(styles(this.props))},
			onMouseDown: (event)=>{
        event.preventDefault()
				onClick && onClick()
				this.handleClick()
			}
		}
	}
  renderLeftIcon(){
    const children = React.Children.count(this.props.children)
    return (
      <div style={{position: 'relative',left: children === 0 ? '0px' : "-10px", marginRight: '0px'}}>
        <Icon color="white" name={this.props.icon} />
      </div>
    )
  }
  renderRightIcon(){
    const children = React.Children.count(this.props.children)
    return (
      <div style={{position: 'relative', left: children === 0 ? '0px' : "10px", marginRight: '0px'}}>
        <Icon color="white" name={this.props.icon} />
      </div>
    )
  }
  render() {
    const children = React.Children.count(this.props.children)
    return (
      <div style={{display: 'flex', alignItems: 'center',margin: '10px 10px 10px 0px'}}>
        <button style={{padding: '0px'}}
  				{...this.getButtonProps()}
  			>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',height: '35px' ,padding: "0px 6px"}}>
            {this.props.icon && this.props.iconPosition !== 'right' && this.renderLeftIcon()}
            <div>
              {this.props.children}
            </div>
            {this.props.icon && this.props.iconPosition === 'right' && this.renderRightIcon()}
          </div>
        </button>
        {this.props.count && (
          <div style={{color: '#6bada7', fontWeight: '600', textAlign: 'center',width: '20px',border: '2px solid #6bada7', padding: '7px 6px 7px 6px', borderRadius: '0px 4px 4px 0px'}}>
            {this.props.count}
          </div>
        )

      }

      </div>

    );
  }
}
export default Button
