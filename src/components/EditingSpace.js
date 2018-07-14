import React from 'react';
import PropTypes from 'prop-types';

import Block from './Block';

const EditingSpaceContext = React.createContext();

class EditingSpace extends React.Component {
  _createBlock = (block, id) => {
    return (
      <EditingSpaceContext.Provider
        key={id}
        value={{ actions: this.props.actions }}
      >
        <Block id={id} block={block} />
      </EditingSpaceContext.Provider>
    );
  };
  render() {
    return (
      <div className="editing-space">
        {this.props.blocks.map((block, id) => {
          return this._createBlock(block, id);
        })}
      </div>
    );
  }
}

EditingSpace.propTypes = {
  block: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        dataUri: PropTypes.string.isRequired
      }),
      geometry: PropTypes.shape({
        sizeX: PropTypes.number.isRequired,
        sizeY: PropTypes.number.isRequired
      }).isRequired,
      type: PropTypes.string.isRequired
    })
  )
};

export default EditingSpace;
export { EditingSpaceContext };
