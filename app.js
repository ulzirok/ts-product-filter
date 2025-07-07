var products = [
    { id: 1, name: "Смартфон", category: "electronics" },
    { id: 2, name: "Футболка", category: "clothes" },
    { id: 3, name: "Ноутбук", category: "electronics" },
    { id: 4, name: "Книга", category: "books" },
    { id: 5, name: "Куртка", category: "clothes" }
];
var selectCategory = document.getElementById('category');
var ulProductList = document.getElementById('productList');
function renderProducts(productsArgs) {
    ulProductList.innerHTML = '';
    productsArgs.forEach(function (product) {
        var li = document.createElement("li");
        li.textContent = product.name;
        ulProductList.appendChild(li);
    });
}
selectCategory.addEventListener('change', function () {
    var selectedCategory = selectCategory.value;
    var filteredProduct = selectedCategory === 'all' ? products : products.filter(function (product) {
        return product.category === selectedCategory;
    });
    renderProducts(filteredProduct);
});
renderProducts(products);
