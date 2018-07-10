import React from 'react';
import Block from './Block';
class EditingSpace extends React.Component{
  _createBlock=(block, id)=>{
    console.log('Create block', block);
    return(<Block key={id} type={block.type} data={block.data}/>);
  };
  render(){
    console.log('componets bloks', this.props);
    return(
      <div>
        {this.props.blocks.map((block,  id)=>{
          return this._createBlock(block, id);
      })
      }
      </div>
    );
  }
}

export { EditingSpace };
