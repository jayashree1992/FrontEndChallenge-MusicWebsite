export function uniqueCategories(albums) {
  const categories = albums.map(album => album.category);
  return Array.from(new Set(categories));
}

// formated genre for url
export function formatGenre(genre) {
  const formattedGenre = genre.replace(/[^a-zA-Z0-9 ]/g, '');
  return formattedGenre.replace(/\s+/g, '-').toLowerCase();
}
