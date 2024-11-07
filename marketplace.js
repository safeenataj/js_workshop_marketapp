// Sample advertisements data with specific image URL for Samsung Galaxy S21 in Ad 1
const advertisementsData = [
    { 
        title: 'SAMSUNG', 
        model: 'Samsung Galaxy S21', 
        price: '$799', 
        description: 'Latest Samsung Galaxy model with high-end features.', 
        image: 'https://www.bing.com/th?id=OPEC.2prQZfCnGqELYw474C474&o=5&pid=21.1&w=130&h=195&qlt=100&dpr=1&pcl=f5f5f5', 
        contact: 'shama.safeenataj@gmail.com' 
    },
    { 
        title: 'APPLE', 
        model: 'iPhone 14', 
        price: '$999', 
        description: 'New Apple iPhone 14 in Yellow, featuring enhanced camera and battery.', 
        image: 'https://images.ctfassets.net/nproz1mx87a8/2R3g1MI1TTbj5A5xbCku1Q/bbdbffcd2f56cf52261124e17b218c35/Apple-iPhone-14-Yellow-T2---front-back.png?&h=352&fm=webp&q=98/', 
        contact: 'shama.safeenata2j@gmail.com' 
    },
    { 
        title: 'GOOGLE', 
        model: 'Google Pixel 7', 
        price: '$599', 
        description: 'Google Pixel with the latest AI features.', 
        image: 'https://www.elgiganten.se/image/dv_web_D1800010021258986/525080/google-pixel-7-smartphone-8256gb-obsidian--pdp_main-640.jpg', 
        contact: 'shama.safeenataj3@gmail.com' 
    },
    { 
        title: 'ONE PLUS', 
        model: 'OnePlus 10', 
        price: '$729', 
        description: 'OnePlus flagship model with smooth performance.', 
        image: 'https://www.elgiganten.se/image/dv_web_D180001002951767/492406/oneplus-10-pro-5g-smartphone-12256gb-emerald-forest--pdp_main-640.jpg', 
        contact: 'shama.safeenataj4@gmail.com' 
    },
    { 
        title: 'XIAOMI', 
        model: 'Xiaomi Mi 11', 
        price: '$699', 
        description: 'Affordable flagship with excellent performance.', 
        image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/mi-11-ultra/pc-specs-header.png', 
        contact: 'contact5@example.com' 
    },
    { 
        title: 'SONY', 
        model: 'Sony Xperia 5 IV', 
        price: '$949', 
        description: 'Sony’s compact flagship with advanced camera technology.', 
        image: 'https://www.elgiganten.se/image/dv_web_D180001002841922/350986/sony-xperia-5-iii-5g-smartphone-svart--pdp_main-640.jpg', 
        contact: 'contact6@example.com' 
    }
];

// Function to display advertisements without the "View More" button KDSKJJ
function displayAds(filter = '') {
    const adsContainer = document.getElementById('adsContainer');
    adsContainer.innerHTML = ''; // Clear previous content

    advertisementsData
        .filter(ad => ad.title.toLowerCase().includes(filter.toLowerCase())) // Case-insensitive filter
        .forEach((ad, index) => {
            // Create the advertisement card
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');
            card.innerHTML = `
                <div class="card">
                    <img src="${ad.image}" class="card-img-top" alt="${ad.title}" style="width: 100%; height: 600px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${ad.title}</h5>
                        <p class="card-text"><strong>Model:</strong> ${ad.model}</p>
                        <p class="card-text"><strong>Price:</strong> ${ad.price}</p>
                        <p class="card-text">${ad.description}</p>
                        <p class="card-text">Contact: <span id="contact-${index}">***</span></p>
                        <button class="btn btn-primary toggle-contact" data-index="${index}">Show Contact</button>
                        <button class="btn btn-secondary details" data-index="${index}">Details</button>
                    </div>
                </div>
                <div class="details-tab" id="details-tab-${index}" style="display:none; padding: 15px; background-color: #f8f9fa; margin-top: 10px;">
                    <h5>Details for ${ad.title} - ${ad.model}</h5>
                    <p><strong>Model:</strong> ${ad.model}</p>
                    <p><strong>Price:</strong> ${ad.price}</p>
                    <p><strong>Description:</strong> ${ad.description}</p>
                    <p><strong>Contact:</strong> ${ad.contact}</p>
                </div>
            `;
            adsContainer.appendChild(card);
        });

    // Attach event listeners for toggling contact and showing details
    document.querySelectorAll('.toggle-contact').forEach(button => {
        button.addEventListener('click', toggleContact);
    });
    document.querySelectorAll('.details').forEach(button => {
        button.addEventListener('click', showDetails);
    });
}

// Toggle contact information visibility
function toggleContact(event) {
    const index = event.target.getAttribute('data-index');
    const contactElement = document.getElementById(`contact-${index}`);
    if (contactElement.textContent === '***') {
        contactElement.textContent = advertisementsData[index].contact;
        event.target.textContent = 'Hide Contact';
    } else {
        contactElement.textContent = '***';
        event.target.textContent = 'Show Contact';
    }
}

// Show or hide the details tab for each advertisement
function showDetails(event) {
    const index = event.target.getAttribute('data-index');
    const detailsTab = document.getElementById(`details-tab-${index}`);

    // Toggle visibility of the details tab
    if (detailsTab.style.display === 'none') {
        detailsTab.style.display = 'block';
        event.target.textContent = 'Hide Details';
    } else {
        detailsTab.style.display = 'none';
        event.target.textContent = 'Details';
    }
}

// Filter advertisements as user types
document.getElementById('filterInput').addEventListener('input', (event) => {
    displayAds(event.target.value);
});

// Initial display of advertisements
displayAds();
