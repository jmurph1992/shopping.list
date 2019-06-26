window.onload = function () {
	initShoppingList();
};

function initShoppingList() {
	let form = document.getElementById("item-form");

	form.addEventListener("submit", (event) => {
		handleItemForm(event, form);
	});
}

function handleItemForm(event, formRef) {
	if(event.preventDefault){
		event.preventDefault();
	}

	addItemToShoppingList();

	return false;
}

function addItemToShoppingList() {
	let itemName = document.getElementById("item-name");
	let itemAmount = document.getElementById("item-amount");

	let itemHtml = createListItemHtml();
	console.log("Item HTML: ", itemHtml);
	let itemListRef = document.getElementById("shopping-list");
	itemListRef.insertAdjacentHTML("afterend", itemHtml);
}

function createListItemHtml() {
	return `<li>
					Item Name - Amount
			  </li>
	`;
}