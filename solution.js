export default function(T, V, W) {
  const solution =  [];
  const data = [...Array(V.length)].map((nullish, i) => {
    return {
      val: V[i],
      weight: W[i],
      importance: V[i] / W[i]
    };
  });

  data.sort((a, b) => {
    return (a.importance < b.importance) ? 1 :
      (a.importance > b.importance) ? -1 : 0;
  });

  console.log(`Initial Capacity: ${T}`);
  console.log(`all items ...:`);
  console.log(data);

  let total = T;

  for (let [i, item] of data.entries()) {
    if (total >= item.weight) {
      solution.push(item);
      total -= item.weight;
    }
  }

  const totalWeightFitted = solution.reduce((acc, cur) => {
    return {
      weight: acc.weight + cur.weight,
    };
  }, { weight: 0 }).weight;
  const totalValueEquipped = solution.reduce((acc, cur) => {
    return {
      val: acc.val + cur.val,
    };
  }, { val: 0 }).val;

  console.log(`Total weight fitted: ${totalWeightFitted}`);
  console.log(`Total value equipped: ${totalValueEquipped}`);
  console.log('Fitted items ...:');
  console.log(solution);
}
