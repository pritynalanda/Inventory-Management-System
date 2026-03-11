// LocalStorage se data load karna
let inventory = JSON.parse(localStorage.getItem('myInventory')) || [];

function displayItems() {
    const list = document.getElementById('inventoryList');
    list.innerHTML = '';
    
    inventory.forEach((item, index) => {
        list.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td><button class="delete-btn" onclick="deleteItem(${index})">Delete</button></td>
            </tr>
        `;
    });
}

function addItem() {
    const name = document.getElementById('itemName').value;
    const qty = document.getElementById('itemQty').value;

    if(name && qty) {
        inventory.push({ name, qty });
        localStorage.setItem('myInventory', JSON.stringify(inventory));
        displayItems();
        // Clear inputs
        document.getElementById('itemName').value = '';
        document.getElementById('itemQty').value = '';
    } else {
        alert("Please enter both Name and Quantity");
    }
}

function deleteItem(index) {
    inventory.splice(index, 1);
    localStorage.setItem('myInventory', JSON.stringify(inventory));
    displayItems();
}

// Initial display
displayItems();
