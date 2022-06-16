const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecats.com'
];

const googleSearch = (searchinput, db) => {
    const matches = db.filter(website => website.includes(searchinput));
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

// console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;
