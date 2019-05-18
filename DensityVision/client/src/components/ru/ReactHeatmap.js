import h337 from 'heatmap.js';
import React, {Component} from 'react';
import '../../assets/styles/map.css';

class ReactHeatmap extends Component {
  componentDidMount(){
    const config = {
      container: document.getElementById('heatmapContainer'),
      maxOpacity: .5,
      minOpacity: 0,
      blur: .75,
      backgroundColor: 'rgba(255, 0, 0, 0)'
    };
    this.heatmapInstance = h337.create(config);
    this.heatmapInstance.setData(this.props.data)
    console.log(this.heatmapInstance.getData())
  } 
  componentDidUpdate(){
    if (this.heatmapInstance){
      this.heatmapInstance.addData(this.props.data.data)
      console.log(this.heatmapInstance.getData())
    }
  }
  render(){
    const divStyle = {
      height: '600px',
      width: '800px'
    }
    return (
      <div style = {divStyle} id = "heatmapContainer"></div>
    );
  }
}
export default ReactHeatmap;