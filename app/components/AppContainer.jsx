import React from 'react';
import ReactDOM from 'react-dom';
import HexInput from './HexInput.jsx';
import RgbInput from './RgbInput.jsx';
import AppFooter from './AppFooter.jsx';

//regex for hex code matching
const full_reg=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;   //full hex
const short_reg=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;           //short-hand hex

class AppContainer extends React.Component{
  constructor(){
    super();
    this.state={
      hex:"#5E9FA3",
      rgb:"94,159,163",
    };
    this._handleHex=this._handleHex.bind(this);
    this._handleRgb=this._handleRgb.bind(this);
  }

  _handleHex(value){
    let val=value.replace(short_reg, (m,r,g,b) => r+r+g+g+b+b);
    const splitVal=full_reg.exec(val);
    let rMap;
    if(splitVal){
      rMap=splitVal.map((v , i , ar)=>{
        if(i>0 && i<4 )
          return parseInt(v,16);
      });
    }
    this.setState({
      hex:value,
      rgb:(rMap)?rMap[1]+','+rMap[2]+','+rMap[3]:this.state.rgb,
    })
  }

  _handleRgb(value){
    let splitVal=value.split(',').map( v => parseInt(v,10));
    let hMap;
    if(splitVal.length===3 && splitVal.every((v)=> v <= 255 && v >= 0)){
      hMap=splitVal.reduce((a , v)=>{
          let newV=v.toString(16).toUpperCase();
          return newV.length===1?a+'0'+newV:a+newV;
        },'#');
    }
    this.setState({
      hex:(hMap)?hMap:this.state.hex,
      rgb:value,
    })
  }

  render(){
    const hex=(this.state.hex==='')?'#':this.state.hex;
    const rgb=this.state.rgb;
    return(
      <div className="app-bg" style={{background:`rgb(${rgb})`}}>
        <div className="card center dum-bg"></div>
        <div className="card center input-box" style={{background:`rgba(${rgb},0.6)`}}>
          <HexInput value={hex} convert={this._handleHex}/>
          <RgbInput value={rgb} convert={this._handleRgb}/>
        </div>
        <AppFooter/>
      </div>
    )
  }
}

export default AppContainer;
