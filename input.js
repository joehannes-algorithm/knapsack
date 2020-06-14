import random from 'random';

const valueBoundary = random.int(2, 99);
const weightBoundary = random.int(2, 99);
const itemCount = random.int(1, 99);

function getValueOfItem(boundary = valueBoundary) {
  return random.int(1, boundary);
}

function getWeightOfItem(boundary = weightBoundary) {
  return random.int(1, boundary)
}

function getRucksackCapacity(itemCount, totalWeight) {
  return Math.ceil(totalWeight / random.int(1, itemCount));
}

export default function() {
  const itemValues = [...Array(itemCount)].map(nullish => getValueOfItem());
  const itemWeights = [...Array(itemCount)].map(nullish => getWeightOfItem());

  return [
    getRucksackCapacity(itemCount, itemWeights.reduce((p, c) => p + c, 0)),
    itemValues,
    itemWeights,
  ];
}
