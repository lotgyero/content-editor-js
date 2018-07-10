import React from 'react';
import Block from './Block';
class EditingSpace extends React.Component{
  _createBlock=(block)=>{
    console.log('Create block', block);
    return(<Block type={block.type} data={block.data}/>);
  };
  render(){
    console.log('componets bloks', this.props);
    return(
      <div>
      {this.props.blocks.map(block =>{
        return this._createBlock(block);
      })
      }
      </div>
    );
  }
}

export { EditingSpace };
