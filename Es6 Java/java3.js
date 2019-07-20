let products = [
     {
        pname: "Product 1",
        price:  "",
        pcode:  "prod",
        description: "This is product 1",
        manufacturer: "ASUS",
        stocks: "20",  
        supplier: "ASUS",
        expdate: "",
        url: "",
        imgurl: "prod1.jpg",


    },
    
    {
        pname: "Product 2",
        price:  "",
        pcode:  "prod",
        description: "This is product 2",
        manufacturer: "ASUS",
        stocks: "20",  
        supplier: "ASUS",
        expdate: "",
        url: "",
        imgurl: "prod1.jpg",


    },
    {
        pname: "Product 3",
        price:  "",
        pcode:  "prod",
        description: "This is product 3",
        manufacturer: "ASUS",
        stocks: "20",  
        supplier: "ASUS",
        expdate: "",
        url: "",
        imgurl: "prod1.jpg",


    },
    
    {
        pname: "Product 4",
        price:  "",
        pcode:  "prod",
        description: "This is product 4",
        manufacturer: "ASUS",
        stocks: "20",  
        supplier: "ASUS",
        expdate: "",
        url: "",
        imgurl: "prod1.jpg",
    },
    {
        pname: "Product 5",
        price:  "",
        pcode:  "prod",
        description: "This is product 5",
        manufacturer: "ASUS",
        stocks: "20",  
        supplier: "ASUS",
        expdate: "",
        url: "",
        imgurl: "prod1.jpg",
    },
    {
        pname: "Product 6",
        price:  "",
        pcode:  "prod",
        description: "This is product 6",
        manufacturer: "ASUS",
        stocks: "20",  
        supplier: "ASUS",
        expdate: "",
        url: "",
        imgurl: "prod1.jpg",
    },
    {
        pname: "Product 7",
        price:  "",
        pcode:  "prod",
        description: "This is product 7",
        manufacturer: "ASUS",
        stocks: "20",  
        supplier: "ASUS",
        expdate: "",
        url: "",
        imgurl: "prod1.jpg",
    },
    {
        pname: "Product 8",
        price:  "",
        pcode:  "prod",
        description: "This is product 8",
        manufacturer: "ASUS",
        stocks: "20",  
        supplier: "ASUS",
        expdate: "",
        url: "",
        imgurl: "prod1.jpg",
    }
    
    

    
    
]
let output = "";
products.forEach(function(item){

    
    if (item.imgurl == undefined)
    {
        item.imgurl = "https://via.placeholder.com/300"
    }
    output += `
    <div class="card">
    <img src="${item.imgurl}" class="card-img-b" alt="...">
    <div class="card-body">
      <h1 class="card-title">${item.pname}</h5>
      <p class="card-text">${item.description}</p>
      <a href="${item.url}" class="btn btn-success">Buy Now</a>
    </div>
    </div>
  
    `
});


document.getElementById('cards').innerHTML = output