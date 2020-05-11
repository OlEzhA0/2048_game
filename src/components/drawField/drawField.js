import React from 'react';

class DrawField extends React.PureComponent {
  render() {
    const { gameField } = this.props;

    return (
      gameField.map(row => row.map((cell, i) => {
        return (
          <div
            className={cell === 0
              ? 'cell'
              : typeof cell === 'string' && cell.includes('new__item')
                ? `cell__${parseFloat(cell)} new__item`
                : `cell__${parseFloat(cell)} cell`}
            key={i}
          >
            {cell === 0 ? '' : parseFloat(cell)}
          </div>
        )
      })
      )
    )
  }
}


export default DrawField;