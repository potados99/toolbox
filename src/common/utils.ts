export default function range(start: number, endInclusive: number, step = 1) {
  return Array(endInclusive - start + 1)
    .fill(start)
    .map((x, y) => x + y * step);
}
