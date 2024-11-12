// Function to update the total price and show the appropriate details
function updateTotal() {
    const radioButtons = document.getElementsByName('itemOption');
    let selectedValue = 0;

    // Find the selected radio button's value
    for (const radio of radioButtons) {
        if (radio.checked) {
            selectedValue = parseInt(radio.value);
            break;
        }
    }

    // Map selected values to corresponding details IDs
    const detailsMapping = { 
        10: 'details1', 
        15: 'details2', 
        20: 'details3' 
    };

    // Hide all additional details sections initially
    Object.values(detailsMapping).forEach(detailsId => {
        document.getElementById(detailsId).style.display = 'none';
    });

    // Display the selected additional details section
    const selectedDetailsId = detailsMapping[selectedValue];
    if (selectedDetailsId) {
        document.getElementById(selectedDetailsId).style.display = 'block';
    }

    // Update total price
    let totalPrice = calculatePrice(selectedValue);
    document.getElementById('total-price').innerText = `$${totalPrice}.00 USD`;
}

// Helper function to calculate price
function calculatePrice(selectedValue) {
    switch (selectedValue) {
        case 10:
            return 10;
        case 15:
            return 18;
        case 20:
            return 24;
        default:
            return 0;
    }
}

// Initialize default state on page load
document.addEventListener('DOMContentLoaded', () => {
    updateTotal();
});

function addToCart() {
    const selectedOption = document.querySelector('input[name="itemOption"]:checked');
    if (!selectedOption) {
        alert("Please select an item option.");
        return;
    }

    const selectedValue = selectedOption.value;
    const totalPrice = calculatePrice(parseInt(selectedValue));
    alert(`Item added to cart with total: $${totalPrice}.00 USD`);
}
