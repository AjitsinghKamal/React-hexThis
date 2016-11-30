import React from 'react';

class HexInput extends React.Component{
  constructor(){
    super()
    this._handleChange=this._handleChange.bind(this);
  }
  _handleChange(e){
    this.props.convert(e.target.value);
  }
  render(){
    const value=this.props.value;
    return(
        <div className="hex">
          <label ><span className="label">hex ( </span></label>
          <input value={value} type="text" onChange={this._handleChange} className="input-field" maxLength="7"/>
          <label ><span className="label"> ) </span></label>
        </div>
    );
  }
}

export default HexInput;
