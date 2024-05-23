$(document).ready(function() {
    // Gradient rules for different colors
    const gradients = {
        "#3498db": "linear-gradient(to right, #3498db, #2980b9)",
        "#2ecc71": "linear-gradient(to right, #2ecc71, #27ae60)",
        "#e74c3c": "linear-gradient(to right, #e74c3c, #c0392b)",
        "#ecf0f1": "linear-gradient(to right, #ecf0f1, #bdc3c7)",
        "#2c3e50": "linear-gradient(to right, #2c3e50, #34495e)"
    };

    // Handle color option click
    $('.color-option').on('click', function() {
        // Get the selected color
        var color = $(this).data('color');
        var gradient = gradients[color];

        // Update the background gradient of the .shoeBackground
        $('.shoeBackground').css('background', gradient);

        // Update the button color
        $('.add-to-cart').css('background-color', color);

        // Update the "New" tag color
        $('.new-tag').css('background-color', color);
    });

    // Additional dynamic updates can be added here
    // For example, updating the product info based on size selection
    $('select').on('change', function() {
        var size = $(this).val();
        $('.product-info').text('You have selected size: ' + size);
    });
});
