for (let i = 0; i < updateField.length; i++) {
  let row = [];
  for (let j = 0; j < updateField[i].length; j++) {
    if (updateField[i][j] === 0) {
      row.unshift(0)
      continue;
    }

    if (updateField[i][j] !== 0 && j + 1 === updateField[i].length) {
      row.push(updateField[i][j])
    }

    if (j + 1 === updateField[i].length) {
      continue
    }

    if (updateField[i][j] === updateField[i][j + 1]) {
      const double = updateField[i][j] * 2;
      row.push(0, double);
      j++
    } else {
      row.push(updateField[i][j]);
    }
  }
  currentField.push(row);
}