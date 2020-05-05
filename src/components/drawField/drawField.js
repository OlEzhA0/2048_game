import React from 'react';

class DrawField extends React.PureComponent {
  render() {
    const { gameField } = this.props;

    return (
      gameField.map(row => row.map((cell, i) => (
        <div
          className={cell === 0 ? 'cell' : `cell__${cell} cell`}
          key={i}
        >
          {cell === 0 ? '' : cell}
        </div>
      ))
      )
    )
  }
}


export default DrawField;