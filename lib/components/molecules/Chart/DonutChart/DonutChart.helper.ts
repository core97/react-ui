export function adjustRadiusForNewHeight(
  innerRadius: number,
  outerRadius: number,
  newHeight: number
) {
  // Calcula el factor de escala basado en la nueva altura en comparación con la altura original
  const scaleFactor = newHeight / 250;

  // Ajusta los radios usando el factor de escala
  const newOuterRadius = outerRadius * scaleFactor;
  const newInnerRadius = innerRadius * scaleFactor;

  return {
    innerRadius: newInnerRadius,
    outerRadius: newOuterRadius,
  };
}
