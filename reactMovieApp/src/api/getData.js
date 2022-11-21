export default async function getData(url) {
  const data = await fetch(url);
  const movies = await data.json();
  return movies.results;
}
