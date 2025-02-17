export default function fontSizeCalc(
  normal: string,
  numberToAdd: number,
): string {
  const normalInInt = parseInt(normal.slice(0, normal.length - 2));

  if (normalInInt < 12) return "12px";
  if (normalInInt > 22) return `${22 + numberToAdd}px`;

  return `${normalInInt + numberToAdd}px`;
}
