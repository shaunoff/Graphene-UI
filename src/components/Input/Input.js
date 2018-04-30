import React from "react";
import styles from './styles'
import Radium from 'radium'

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Label"
    };
  }

  changeValue(event) {
    const {name} = this.props
    const value = event.target.value;
    this.setState({ value, error: "" },
      this.props.onChange && this.props.onChange(name, value)
    );
  }

  render() {
    const { value, error, label,focus } = this.state;
    const { locked ,name} = this.props;
    const active = focus || value.length
    return (
      <div style={styles.container}>
				<label style={{...styles.labelFloat, ...(active && styles.labelFloatActive)}}>{label}</label>
        <input
          id={1}
					style={styles.input}
          type="text"
          value={value}
          onChange={this.changeValue.bind(this)}
          onFocus={() => !locked && this.setState({ focus: true })}
          onBlur={() => !locked && this.setState({ focus: false })}
        />
        {/* <label htmlFor={1} className={error && "error"}>
          {error || label}
        </label> */}
      </div>
    );
  }
}
export default Radium(Input)
