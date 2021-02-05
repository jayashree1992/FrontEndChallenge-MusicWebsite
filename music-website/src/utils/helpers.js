export function uniqueCategories(albums) {
  const categories = albums.map((album) => album.category);
  return Array.from(new Set(categories));
}
