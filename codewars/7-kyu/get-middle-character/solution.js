function getMiddle(s) {
  const length = s.length
  const half = length / 2
  if (length % 2) return s.charAt(Math.floor(half))
  return s.charAt(half - 1) + s.charAt(half)
}
