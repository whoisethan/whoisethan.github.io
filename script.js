function placeOrder() {
  const selectedItem = document.getElementById('item').value;
  const selectedQuantity = document.getElementById('quantity').value;

  if (selectedQuantity > 0) {
    document.getElementById('selected-item').innerText = `Item: ${selectedItem}`;
    document.getElementById('selected-quantity').innerText = `Quantity: ${selectedQuantity}`;
    document.getElementById('order-details').style.display = 'block';
    updateImage();  // Added this line to update the image when placing the order
  } else {
    alert('Please enter a valid quantity.');
  }
}

function confirmOrder() {
  const confirmed = confirm("Are you sure you want to confirm this order?");
  if (confirmed) {
    alert("Order confirmed! Thank you for your purchase.");
    resetOrder();
  }
}

function resetOrder() {
  // Reset selected item, quantity, and hide order details
  document.getElementById('selected-item').innerText = '';
  document.getElementById('selected-quantity').innerText = '';
  document.getElementById('order-details').style.display = 'none';

  // Reset item and quantity dropdowns
  document.getElementById('item').selectedIndex = 0;
  document.getElementById('quantity').selectedIndex = 0;

  // Reset item image
  document.getElementById('item-image').src = '';
}

function updateImage() {
  const selectedItem = document.getElementById('item');
  const selectedImage = selectedItem.options[selectedItem.selectedIndex].getAttribute('data-image');
  const itemImage = document.getElementById('item-image');

  itemImage.src = selectedImage;
}

function confirmOrder() {
  const confirmed = confirm("Are you sure you want to confirm this order?");
  if (confirmed) {
    window.location.href = 'returnable-options.html';
  }
}