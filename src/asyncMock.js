const products = [
    {
      id: 1,
      title: 'Café Espresso',
      price: '1500',
      category: 'café',
      description: 'Café espresso intenso con un sabor rico y robusto.',
      image: './assets/menu/cafeespresso.jpg',
    },
    {
      id: 2,
      title: 'Café Latte',
      price: '1800',
      category: 'café',
      description: 'Café latte suave con una capa cremosa de leche vaporizada.',
      image: './assets/menu/cafelatte.jpg',
    },
    {
      id: 3,
      title: 'Café Mocha',
      price: '2000',
      category: 'café',
      description: 'Café con sabor a chocolate y un toque de crema.',
      image: './assets/menu/cafemocha.jpg',
    },
    {
      id: 4,
      title: 'Donut Glaseado',
      price: '500',
      category: 'donas',
      description: 'Donut glaseado con una capa dulce y esponjosa.',
      image: './assets/menu/donutglaseado.jpg',
    },
    {
      id: 5,
      title: 'Donut de Chocolate',
      price: '600',
      category: 'donas',
      description: 'Donut cubierto con una rica capa de chocolate.',
      image: './assets/menu/donutdechocolate.jpg',
    },
    {
      id: 6,
      title: 'Donut con Relleno de Crema',
      price: '650',
      category: 'donas',
      description: 'Donut relleno con crema suave y cubierta de azúcar.',
      image: './assets/menu/donutrellenoconcrema.jpg',
    },
    {
      id: 7,
      title: 'Café Americano',
      price: '1600',
      category: 'café',
      description: 'Café negro fuerte con un sabor limpio y robusto.',
      image: './assets/menu/cafeamericano.jpg',
    },
    {
      id: 8,
      title: 'Donut de Azúcar y Canela',
      price: '550',
      category: 'donas',
      description: 'Donut espolvoreado con azúcar y canela, crujiente por fuera y suave por dentro.',
      image: './assets/menu/donutdecanela.jpg',
    },
    {
      id: 9,
      title: 'Café Caramel Macchiato',
      price: '1900',
      category: 'café',
      description: 'Café con leche y un toque de caramelo.',
      image: './assets/menu/cafecaramelmachiatto.jpg',
    },
  ];
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id === Number(id));
  };
  
  export const getCategory = (category) => {
    return products.filter((product) => product.category === category);
  };
  