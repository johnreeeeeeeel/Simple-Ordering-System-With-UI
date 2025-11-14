let bill = 0;
let orders = [];

function order(choice) {
    let name = "";
    let price = 0;

    if (choice === 1) {
        name = "Burger";
        price = 50;
    } else if (choice === 2) {
        name = "Fries";
        price = 30;
    } else if (choice === 3) {
        name = "Drink";
        price = 20;
    }

    orders.push({ name: name, price: price });
    bill += price;

    updateList();
}

function updateList() {
    const list = document.getElementById("orderList");
    list.innerHTML = "";

    if (orders.length === 0) {
        list.innerHTML = `<p id="noOrderYetNotice">No order yet</p>`;
        document.getElementById("total").textContent = "Total: ₱0";
        return;
    }

    orders.forEach((item, i) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₱${item.price}
            <i class="bi bi-x-lg remove-item" onclick="deleteItem(${i})"></i>
        `;
        list.appendChild(li);
    });

    document.getElementById("total").textContent = "Total: ₱" + bill;
}

function deleteItem(index) {
    bill -= orders[index].price;
    orders.splice(index, 1);
    updateList();
}

function viewTotal() {
    if (orders.length === 0) {
        alert("No items ordered yet!");
    } else {
        alert("Your total bill is ₱" + bill);
    }

    resetOrders();
}

function resetOrders() {
    bill = 0;
    orders = [];
    updateList();
}

// DISABLE RIGHT CLICK
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
