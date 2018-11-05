export default async function fetchJSON(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
