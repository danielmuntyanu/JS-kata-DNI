export default function calculateLetter(input) {
  input = Number(input);
  
  const letters = [
    "T", "R", "W", "A", "G", "M", "Y", 
    "F", "P", "D", "X", "B", "N",
    "J", "Z", "S", "Q", "V", "H", "L", 
    "C", "K", "E"
  ]

  const index = input % 23;

  return letters[index];
}
