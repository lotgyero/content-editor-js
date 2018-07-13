import React from 'react';
import Block from './Block';

const EditingSpaceContext = React.createContext ();

class EditingSpace extends React.Component{
  _createBlock=(block, id)=>{

    return(
        <EditingSpaceContext.Provider key={id} value={{actions: this.props.actions}}>
      <Block
        id={id}
        type={block.type}
        data={block.data}
        geometry={block.geometry}
        />
        </EditingSpaceContext.Provider>
    );
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


export default  EditingSpace ;
export { EditingSpaceContext };
