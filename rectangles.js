function generateRectanglePositions(areas) {
  let positions = [];

  let currentPosition = [
    {
      width: areas[0],
      height: areas[0] / areas[0],
    },
  ];

  // Recursively generate all possible positions, starting with the first rectangle.
  function generatePositions(rectanglesLeft, currentPosition) {
    if (rectanglesLeft <= 1) {
      // We have reached the end of the list, so add the current position to the results.
      if (sumOfWidths(currentPosition) === sumOfHeights(currentPosition)) {
        positions.push(currentPosition);
      }
    } else {
      // For each possible width of the next rectangle...
      for (let width = 1; width <= areas[rectanglesLeft - 1]; width++) {
        let height = areas[rectanglesLeft - 1] / width;

        let newPosition = currentPosition.slice();
        newPosition.push({
          width: width,
          height: height,
        });

        // Recursively generate positions for the remaining rectangles.
        generatePositions(rectanglesLeft - 1, newPosition);
      }
    }
  }

  generatePositions(6, currentPosition);
  return positions;
}

function sumOfWidths(rectangles) {
  let sum = 0;
  for (let i = 0; i < rectangles.length; i++) {
    sum += rectangles[i].width;
  }

  return sum;
}

function sumOfHeights(rectangles) {
  let sum = 0;
  for (let i = 0; i < rectangles.length; i++) {
    sum += rectangles[i].height;
  }

  return sum;
}
const areas = [1, 2, 3, 4, 5, 6];

const positions = generateRectanglePositions(areas);
console.log(`the number of alternitaives is ${positions.length}`);
console.log(positions);
