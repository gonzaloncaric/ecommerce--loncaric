const products = [{
        id: 30,
        name: "T-Shirt Summer Vibes",
        stock: 0,
        cost: 89.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 1500,
        image: [
            "https://res.cloudinary.com/no-procede/image/upload/v1637827927/ecommerce-loncaric/AdobeStock_236655481_ovq4kh.jpg"
        ],
        sales: 0,
        createdAt: "2021-09-18T05:11:04.952Z",
        updatedAt: "2021-09-18T19:39:05.347Z",
        categoryId: 9,
        brandId: 95,
        packingId: null,
        category: {
            name: "T-Shirt",
            id: 9
        },
        brand: {
            id: 95,
            name: "Brand"
        },
        reviews: []
    },
    {
        id: 29,
        name: "Loose Knit 3/4 Sleeve",
        stock: 100,
        cost: 119.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 1500,
        image: [
            "https://res.cloudinary.com/no-procede/image/upload/v1637827927/ecommerce-loncaric/AdobeStock_118120200_w7scyn.jpg"
        ],
        sales: 0,
        createdAt: "2021-09-18T05:11:04.952Z",
        updatedAt: "2021-09-18T19:39:05.347Z",
        categoryId: 9,
        brandId: 95,
        packingId: null,
        category: {
            name: "Sweeter",
            id: 9
        },
        brand: {
            id: 95,
            name: "Brand"
        },
        reviews: [{
            "comment": "Good",
            "rating": "4"
        }]
    },
    {
        id: 76,
        name: "Basic Slim Fit T-Shirt",
        stock: 92,
        cost: 79.99,
        description: "Se muestra con tonos amarillo verdoso de intensidad media. En la nariz encontramos frutas blancas maduras, peras, manzanas y banana, frutas tropicales, con notas de la maduración en barricas sobre las borras como vainilla, manteca y miel. Buen volumen, complejo, maduro, con una entrada untuosa en la boca, buen desarrollo y largo final. Se repiten las notas frutales del aroma.",
        capacity: 750,
        image: [
            "https://res.cloudinary.com/no-procede/image/upload/v1637827927/ecommerce-loncaric/AdobeStock_136908398_rjzcce.jpg"
        ],
        sales: 0,
        createdAt: "2021-09-18T05:11:04.952Z",
        updatedAt: "2021-09-20T16:10:21.030Z",
        categoryId: 1,
        brandId: 10,
        packingId: null,
        category: {
            name: "T-Shirt",
            id: 1
        },
        brand: {
            id: 10,
            name: "Brand"
        },
        reviews: []
    },
    {
        id: 170,
        name: "Loose Textured T-Shirt",
        stock: 100,
        cost: 119.99,
        description: "Rojo violáceo, profundo y vivaz con visos azulados. Nariz de frutos rojos y negros como cerezas, cassis, ciruelas y moras, integrados con los aromas de maduración en barrica como vainilla, tabaco y chocolate. Entrada en boca sedosa, buena estructura, con una marcada presencia de frutas rojas, taninos amables y dulces, concluyendo en un largo final de boca.",
        capacity: 750,
        image: [
            "https://res.cloudinary.com/no-procede/image/upload/v1637827927/ecommerce-loncaric/AdobeStock_173519034_xhh4jb.jpg"
        ],
        sales: 0,
        createdAt: "2021-09-18T05:11:04.952Z",
        updatedAt: "2021-09-20T16:10:21.032Z",
        categoryId: 1,
        brandId: 10,
        packingId: null,
        category: {
            name: "T-Shirt",
            id: 1
        },
        brand: {
            id: 10,
            name: "Brand"
        },
        reviews: []
    }
];

module.exports = {
    products,
}