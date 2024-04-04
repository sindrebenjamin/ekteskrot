export function calculateDiscount(price: number, discount: number) {
  const calc = Math.round((discount / price) * 100);
  return 100 - calc;
}
