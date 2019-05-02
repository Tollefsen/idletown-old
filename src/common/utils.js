const costNext = (costBase, rateGrowth, owned) => costBase * Math.pow(rateGrowth, owned)

const productionTotal = (productionBase, owned, multipliers) => (productionBase * owned) * multipliers

