interface Product {
  id: number;
  name: string;
  category: string;
}

const products: Product[] = [
  {id: 1, name: "Смартфон", category: "electronics"},
  {id: 2, name: "Футболка", category: "clothes"},
  {id: 3, name: "Ноутбук", category: "electronics"},
  {id: 4, name: "Книга", category: "books"},
  {id: 5, name: "Куртка", category: "clothes"}
]

const selectCategory = document.getElementById('category') as HTMLSelectElement
const ulProductList = document.getElementById('productList') as HTMLUListElement

function renderProducts(productsArgs:Product[]): void {
  ulProductList.innerHTML = ''
  productsArgs.forEach((product) => {
    const li = document.createElement("li")
    li.textContent = product.name
    ulProductList.appendChild(li)
  })
}

selectCategory.addEventListener('change', () => {
  const selectedCategory = selectCategory.value
  
  const filteredProduct = selectedCategory === 'all' ? products : products.filter((product) => {
    return product.category === selectedCategory
  })
  renderProducts(filteredProduct)
})

renderProducts(products)