const crochetPatterns = [
    {
        title: 'Snorlax',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/621009c4fa200a486dfcb8d7/1647008949205-CG3DQRZ3ALUAQ4HOUL0O/Snorlax+Amigurumi+by+loopycathrine?format=2500w',
        author: 'Cathrine Johansson',
        description: 'Amigurumi Snorlax',
        categories: ['Intermediate', 'Amigurumi'],
        link: 'https://www.loopycathrine.com/amigurumi-patterns/2017/04/08/snorlax-amigurumi-pattern'
    },
    {
        title: 'Piplup',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/621009c4fa200a486dfcb8d7/1645828313906-3IZ94Y8KYLFS642M7D5Y/Piplup+Amigurumi+by+loopycathrine?format=2500w',
        author: 'Cathrine Johansson',
        description: 'Amigurumi Piplup',
        categories: ['Intermediate', 'Amigurumi'],
        link: 'https://www.loopycathrine.com/amigurumi-patterns/2020/02/17/piplup-amigurumi-pattern'
    },
    {
        title: 'Beanie Hat',
        imageUrl: '',
        author: 'Cherilyn Q',
        description: 'Beanie Hat. Easy 1 row repeat pattern.',
        categories: ['Easy', 'Hats'],
        link: 'https://www.youtube.com/watch?v=o0YCzR0TmtA&t=130s'
    },
    {
        title: 'BB Beanie',
        imageUrl: 'https://www.woodsandwool.com/wp-content/uploads/2021/03/woodsandwool_basic_baby_beanie_5_pin-722x1024.jpg',
        author: 'Woods and Wool',
        description: 'This is a baby beanie hat. Perfect for baby shower gifts and for loved ones.',
        categories: ['Easy', 'Hats'],
        link: 'https://www.woodsandwool.com/free-crochet-pattern-bb-beanie/'
    },
    {
        title: 'Chunky Tassel Crochet Scarf',
        imageUrl: 'https://i0.wp.com/persialou.com/wp-content/uploads/2017/11/header-3.jpg',
        author: 'Alexis Middleton',
        description: 'I love the look of that ribbed stitch paired with lots and lots of tassels. This crocheted rib stitch is one of my favorite stitches to work. It is super easy to do and creates a nice, stretchy fabric. This finished scarf is just over six feet long and about 10 inches wide, but if you want an even longer or wider scarf, the pattern is easy to adapt. Ready to get crocheting?',
        categories: ['Easy', 'Scarves'],
        link: 'https://persialou.com/crochet-scarf-pattern-chunky-tassel/'
    },
    {
        title: 'Crochet Duille Scarf',
        imageUrl: 'https://www.crochetwithcarrie.com/wp-content/uploads/2022/01/crochet-scarf.jpg',
        author: 'CrochetWithCarrie',
        description: 'Learn to crochet this easy, oversized, crochet Duille Scarf. Designed to be extra oversized, this scarf will blanket you in so much coziness this winter.',
        categories: ['Easy', 'Scarves'],
        link: 'https://www.crochetwithcarrie.com/crochet-duille-scarf/'
    },
    {
        title: 'Hooded Scarf with Keyhole',
        imageUrl: 'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/2A39EB577866493A87B96414B60EACFC/B_91249_1.jpg',
        author: 'Michaels and Lion Brand®',
        description: 'This fun hooded keyhole scarf will keep you warm and fashionable in Spring, Fall, or whenever you need an extra layer. Pick up your needles and your favorite color of Lion Brand® Wool-Ease® yarn and get stitching!',
        categories: ['Easy', 'Scarves'],
        link: 'https://www.michaels.com/project/lion-brand-wool-ease-hooded-crochet-scarf-with-keyhole-B_91249'
    },
    {
        title: 'Colorful Tunisian Scarf',
        imageUrl: 'https://tlycblog.com/wp-content/uploads/2022/11/Blog-Post-Cover-Image-61.png',
        author: 'TL Yarn Crafts',
        description: 'Looking for an easy but fun introduction to Tunisian crochet? You’ve found it – it’s the Bestie Scarf! Pair the luxury of merino wool with the playful fuzziness of mohair for a super scarf that’ll get you through the coldest winter days.',
        categories: ['Easy', 'Scarves'],
        link: 'https://tlycblog.com/bestie-scarf-free-tunisian-crochet-pattern/'
    },
    {
        title: 'Christmas Tree Pixel Square',
        imageUrl: 'http://repeatcrafterm.wpengine.com/wp-content/uploads/2015/08/ChristmasTree2.jpg',
        author: 'Repeat Crafter Me',
        description: 'Part of the Crochet Christmas Character Afghan.',
        categories: ['Intermediate', 'Other'],
        link: 'https://www.repeatcrafterme.com/2015/08/crochet-christmas-tree-pixel-square.html'
    },
];

var sortedPatterns = sortPatternsAlphabetically(crochetPatterns);

// sorts the patterns alphabetically -- add functionality later 
function sortPatternsAlphabetically(patterns) {
    return patterns.slice().sort(function(a, b) {
        var titleA = a.title.toUpperCase(); // Convert to uppercase for case-insensitive comparison
        var titleB = b.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var patternList = document.getElementById('pattern-list');
    var categoryList = document.querySelectorAll('.category-list li');
    // adds click functionbility to each list item
    categoryList.forEach(function(category) {
        category.addEventListener('click', function() {
            var selectedCategory = this.textContent;
            displayPatternsByCategory(selectedCategory);
        });
    });

    displayPatternsByCategory('All'); // Display all patterns initially
});

// creates card; called for each pattern
function createCard(pattern) {
    var patternLink = document.createElement('a');
    patternLink.href = pattern.link; // Sets the link URL

    // creates the card container
    var cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    // creates the card element
    var card = document.createElement('div');
    card.classList.add('card');

    // create card-front
    var cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    // create the image element
    var patternImage = document.createElement('img');
    patternImage.src = pattern.imageUrl;
    patternImage.classList.add('pattern-img');

    // create the pattern name element
    var patternName = document.createElement('h4');
    patternName.classList.add('pattern-name');
    patternName.textContent = pattern.title;

    // Create the pattern by element
    var patternBy = document.createElement('p');
    patternBy.classList.add('pattern-by');
    patternBy.textContent = 'By ' + pattern.author;

    // append to card front
    cardFront.appendChild(patternImage);
    cardFront.appendChild(patternName);
    cardFront.appendChild(patternBy);

    // create card back
    var cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    // create pattern description
    var patternDescription = document.createElement('p');
    patternDescription.classList.add('pattern-description');
    patternDescription.textContent = pattern.description;

    // append pattern description to card back
    cardBack.appendChild(patternDescription);

    // append card front and card back to card
    card.appendChild(cardFront);
    card.appendChild(cardBack);

    // append card to card container
    cardContainer.appendChild(card);

    // append card container to anchor element
    patternLink.appendChild(cardContainer);

    return patternLink;
}

// displays pattern by chosen category
function displayPatternsByCategory(category) {
    var patternList = document.getElementById('pattern-list');
    var filteredPatterns = [];
    
    if (category === 'All') {
        filteredPatterns = sortedPatterns;
    } else {
        filteredPatterns = sortedPatterns.filter(function(pattern) {
            return pattern.categories.includes(category);
        });
    }

    // remove from pattern list
    while (patternList.firstChild) {
        patternList.removeChild(patternList.firstChild);
    }

    // add filtered patterns to the list
    filteredPatterns.forEach(function(pattern) {
        var patternCard = createCard(pattern);
        patternList.appendChild(patternCard);
    });
}

// search functionality
function performSearch() {
    var searchTerm = document.getElementById("patternSearch").value.toLowerCase();
    var searchResults = searchPatterns(searchTerm);

    var patternList = document.getElementById('pattern-list');
    var allPatterns = patternList.getElementsByClassName('card-container');

    for (var i = 0; i < allPatterns.length; i++) {
        var pattern = allPatterns[i];
        var patternTitle = pattern.querySelector('.pattern-name').textContent.toLowerCase();

        if (patternTitle.includes(searchTerm)) {
            pattern.style.display = "block";
        } else {
            pattern.style.display = "none";
        }
    }
}

function searchPatterns(searchTerm) {
    return sortedPatterns.filter(pattern => pattern.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

function displaySearchResults(results) {
    var patternList = document.getElementById('pattern-list');
    patternList.innerHTML = ''; // Clear the current pattern list

    results.forEach(function(pattern) {
        var patternCard = createCard(pattern); // Use the createCard function to generate the card
        patternList.appendChild(patternCard);
    });
}
document.getElementById("searchButton").addEventListener("click", performSearch);

