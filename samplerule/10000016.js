export function calculateSubscription(oldPlan, newPlan, daysUsed, totalDays) {
  let oldCostPerDay = oldPlan / totalDays;
  let newCostPerDay = newPlan / totalDays;
  let remainingDays = totalDays - daysUsed;
  let unusedAmount = oldCostPerDay * remainingDays;
  let newCharge = newCostPerDay * remainingDays;
  let finalAmount = newCharge - unusedAmount;
  return { unusedAmount, newCharge, finalAmount: finalAmount.toFixed(2) };
}
console.log(calculateSubscription(1000, 1500, 10, 30));