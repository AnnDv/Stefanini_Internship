export default async function getData(url) {
  try {
    const data = await fetch(url);
    const movies = await data.json();
    return movies.results;
  } catch (err) { console.log(err); }
  return null;
}
