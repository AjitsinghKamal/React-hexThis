import React from 'react';

class RgbInput extends React.Component{
  constructor(){
    super()
    this._handleChange=this._handleChange.bind(this);
  }
  _handleChange(e){
    this.props.convert(e.target.value);
  }
  render(){
    return(
      <div className="rgb">
        <label><span className="label">rgb ( </span></label>
        <input value={this.props.value} type="text" onChange={this._handleChange} className="input-field" maxLength="11"/>
        <label><span className="label"> ) </span></label>
      </div>
    );
  }
}

export default RgbInput;
