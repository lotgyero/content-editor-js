import React from 'react';
import Block from './Block';
class EditingSpace extends React.Component{
  _createBlock=(block, id)=>{

    return(
      <Block
        key={id}
        id={id}
        type={block.type}
        data={block.data}
        geometry={block.geometry}
        blockSelect={this.props.blockSelect}
      blockMove={this.props.blockMove}
      blockResize={this.props.blockResize}
      />);
  };
  render(){

    return(
      <div className="editing-space">
        {this.props.blocks.map((block,  id)=>{
          return this._createBlock(block, id);
      })
      }
      </div>
    );
  }
}

export { EditingSpace };
