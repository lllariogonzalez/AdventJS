function createChristmasTree(ornaments, height) {
  ornaments = ornaments.repeat(height**2);
  let lastIndex = 0;
  let result = '';
  let arr = " ".repeat(height).split("").keys()
  for(let i of arr) {
    result += `${' '.repeat(height - i - 1)}${ornaments
      .slice(lastIndex, lastIndex + i + 1)
      .split('')
      .join(' ')}\n`;
    lastIndex += i + 1;
  }
  result +=" ".repeat(height-1)+'|\n'
  return result
}