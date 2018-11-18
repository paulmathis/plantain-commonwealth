export async function fetchJSON(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

// Checks if any string in an object is empty
export function checkEmpty(obj) {
  const keys = Object.keys(obj);
  return keys.some(key => obj[key].length === 0);
}
