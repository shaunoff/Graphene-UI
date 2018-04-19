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
    const value = event.target.value;
    this.setState({ value, error: "" });
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }

  render() {
    const { value, error, label,focus } = this.state;
    const { predicted, locked } = this.props;
    const active = focus || value.length
		console.log(active)
    return (
      <div style={styles.container}>
				<label style={{...styles.labelFloat, ...(active && styles.labelFloatActive)}}>Testy Westy</label>
        <input
          id={1}
					style={styles.input}
          type="text"
          value={value}
          onChange={this.changeValue.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && this.setState({ focus: true })}
          onBlur={() => !locked && this.setState({ focus: false })}
        />
        <label htmlFor={1} className={error && "error"}>
          {error || label}
        </label>
      </div>
    );
  }
}
export default Radium(Input)
