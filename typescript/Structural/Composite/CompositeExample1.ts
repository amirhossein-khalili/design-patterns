interface ProductComponent {
  showName(): void;
}

class Product implements ProductComponent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  showName(): void {
    console.log(`this product name is ${this.name}`);
  }
}

class Category implements ProductComponent {
  name: string;
  products: ProductComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addProduct(product: ProductComponent) {
    this.products.push(product);
  }

  showName(): void {
    console.log(`Catergoy name is :${this.name}`);
    for (const product of this.products) {
      product.showName();
    }
  }
}

const shoe = new Product("shoe");
const watch = new Product("watch");

const tshirt = new Product("tshirt");
const pants = new Product("pants");
const clothes = new Category("clothes");
clothes.addProduct(tshirt);
clothes.addProduct(watch);

shoe.showName();
watch.showName();
clothes.showName();
