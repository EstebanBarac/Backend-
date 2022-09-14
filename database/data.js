const products = [
  {
    id: 1,
    title: "Remera",
    price: 200,
    thumbnail:
      "hhhttps/img1.com",
  },
  {
    id: 2,
    title: "Buzo",
    price: 350,
    thumbnail:
      "hhhttps/img2.com",
  },
  {
    id: 3,
    title: "Zapatillas",
    price: 400,
    thumbnail:
      "hhhttps/img3.com",
  },
];

class Products {
  constructor() {
    this.products = products;
  }
  async getAll() {
    return this.products;
  }
  async getById(number) {
    return this.products.find((product) => product.id === number);
  }
  async getFindIndex(id) {
    return this.products.findIndex((product) => product.id === Number(id));
  }
  async deleteProduct(id) {
    return this.products.filter((product) => product != id);
  }
}

module.exports = Products;
