export default async function calculateLetter(input) {
  // Wait for 3 seconds to give the user an opportunity to cancel
  await new Promise(resolve => setTimeout(resolve, 3000))

  return "T";
}
