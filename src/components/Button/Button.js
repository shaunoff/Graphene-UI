import React from 'react';
import Radium from 'radium'
import Icon from 'react-simple-line-icons';


const popAnimation = Radium.keyframes({
  '50%': { transform: 'scale(1.2)' }
})

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
      ':hover': {
        animation: 'x 0.8s ease',
        animationName: popAnimation
      },
      ':disabled': {
        background: '#ccc',
        color: "white",
        cursor: "not-allowed"
      }
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
    console.log(this.props)
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <button
  				{...this.getButtonProps()}
  			>
          <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',padding: '8px',}}>
            {this.props.icon && (
              <div style={{position: 'relative', marginRight: '10px'}}>
                <Icon color="white" name={this.props.icon} />
              </div>
            )}
            {this.props.children}
          </div>
        </button>
        {this.props.count && (
          <div style={{color: '#6bada7', fontWeight: '600', textAlign: 'center',width: '20px',border: '2px solid #6bada7', padding: '7px 6px 8px 6px', borderRadius: '0px 4px 4px 0px'}}>
            {this.props.count}
          </div>
        )

      }

      </div>

    );
  }
}
export default Radium(Button)
