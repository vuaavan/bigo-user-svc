const colors = [
  "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure",
  "Beige", "Bisque", "Black", "Blue", "Brown",
  "Cadet", "Chartreuse", "Chocolate", "Coral", "Crimson",
  "Cyan", "Gray", "Green", "Khaki", "Magenta",
  "Maroon", "Navy", "Olive", "Orange", "Pink",
  "Purple", "Red", "Silver", "Teal", "White",
  "Yellow", "Ivory", "Lavender", "Lime", "Mint",
  "Peach", "Plum", "Rose", "Sapphire", "Tan",
  "Turquoise", "Violet", "Wheat", "Coral", "Steel"
];

const fruits = [
  "Apple", "Apricot", "Avocado", "Banana", "Blackberry",
  "Blueberry", "Boysenberry", "Cherry", "Coconut", "Cranberry",
  "Date", "Dragonfruit", "Elderberry", "Fig", "Grapefruit",
  "Grapes", "Guava", "Honeydew", "Kiwi", "Lemon",
  "Lime", "Mango", "Melon", "Nectarine", "Orange",
  "Papaya", "Passionfruit", "Peach", "Pear", "Pineapple",
  "Plum", "Pomegranate", "Raspberry", "Strawberry", "Tangerine",
  "Watermelon", "Jackfruit", "CustardApple", "Durian", "Gooseberry",
  "Kumquat", "Lingonberry", "Loquat", "Mulberry", "Olive",
  "Persimmon", "Quince", "Starfruit", "Dragonfruit", "Rhubarb"
];

const animals = [
  "Aardvark", "Antelope", "Armadillo", "Baboon", "Bat",
  "Bear", "Beaver", "Bison", "Booby", "Buffalo",
  "Camel", "Capybara", "Caribou", "Cat", "Cheetah",
  "Chimpanzee", "Clam", "Cougar", "Cow", "Crab",
  "Deer", "Dolphin", "Donkey", "Dove", "Dragonfly",
  "Eagle", "Elephant", "Ferret", "Flamingo", "Fox",
  "Frog", "Giraffe", "Goat", "Goldfish", "Goose",
  "Gorilla", "Hawk", "Hedgehog", "Hippopotamus", "Horse",
  "Hyena", "Iguana", "Jaguar", "Kangaroo", "Koala",
  "Lion", "Lizard", "Lynx", "Mole", "Monkey",
  "Moose", "Mouse", "Octopus", "Opossum", "Ostrich",
  "Otter", "Parrot", "Penguin", "Pony", "Rabbit"
];

const adjectives = [
  "Spicy", "Sweet", "Savory", "Grilled", "Baked",
  "Fried", "Smoky", "Tangy", "Zesty", "Crunchy",
  "Creamy", "Exotic", "Rustic", "Fancy", "Classic",
  "Bold", "Refreshing", "Rich", "Succulent", "Luscious"
];

const cuisines = [
  "Italian", "Mexican", "Chinese", "Indian", "French",
  "Japanese", "Thai", "Greek", "Spanish", "American",
  "Mediterranean", "Lebanese", "Turkish", "Vietnamese", "Brazilian",
  "Korean", "Moroccan", "Ethiopian", "Peruvian", "Caribbean",
  "Cuban", "Pakistani", "SriLankan", "Hungarian", "Polish",
  "Portuguese", "Russian", "German", "Swedish", "Australian",
  "British", "Nepalese", "Filipino", "Singaporean", "Indonesian"
];


const alliterations = [
  "Bold", "Crispy", "Delicious", "Fiery", "Flavorful",
  "Golden", "Juicy", "Lush", "Savory", "Spicy",
  "Sweet", "Tender", "Tasty", "Zesty", "Zingy"
];

const geos = [
  "Tropical", "Mediterranean", "American", "European", "Asian",
  "African", "Latin", "Pacific", "Indian", "NorthAfrican",
  "SouthAmerican", "MiddleEastern", "Caribbean", "CentralAsian", "Russian",
  "British", "Australian", "Polynesian", "Nepalese", "Baltic"
];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateDishName() {
  const categories = [colors, fruits, animals, cuisines, adjectives, alliterations, geos];
  
  // Randomly select one category and then pick one item from that category
  function getRandomFromCategory() {
    const randomCategory = getRandomElement(categories);
    return getRandomElement(randomCategory);
  } 
   
   
   
  return `${getRandomFromCategory()} ${getRandomFromCategory()} ${getRandomFromCategory()}`;
}
console.log(generateDishName());
