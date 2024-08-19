class Products {
  productname = 'Apple';
  Brand = 'Apple 14 Pro Max';
  Price = '150000';
  Rating = '4.5';

  display() {
    console.log(this.productname, this.Brand, this.Price, this.Rating);
  }

  changeprice(newprice) {
    this.price = newprice;
    this.display();
  }
}

var product1 = new Products();
var product2 = new Products();

// console.log(product1);
// console.log(product2);

product2.Brand = 'Sampsung';
product2.Price = '100000';
product2.Rating = 4.6;
product2.productname = 'Sumsung S24 Ultra';

console.log(product2);

product1.changeprice(60000);

console.log(product1);
console.log(product2);
console.log(product1);
console.log(product2);
