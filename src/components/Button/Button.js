import React from 'react';
import {Icon} from 'graphene-ui';

const styles = ({count}) => {
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
			onClick: ()=>{
				onClick && onClick()
				this.handleClick()
			}
		}
	}
  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <button
  				{...this.getButtonProps()}
  			>
          <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',height: '40px' ,padding: "0px 10px"}}>
            {this.props.icon && (
              <div style={{position: 'relative', top: '2px', left: '-10px', marginRight: '0px'}}>
                <Icon color="white" name={this.props.icon} />
              </div>
            )}
            {this.props.children}
          </div>
        </button>
        {this.props.count && (
          <div style={{color: '#6bada7', fontWeight: '600', textAlign: 'center',width: '20px',border: '2px solid #6bada7', padding: '9px 6px 10px 6px', borderRadius: '0px 4px 4px 0px'}}>
            {this.props.count}
          </div>
        )

      }

      </div>

    );
  }
}
export default Button
