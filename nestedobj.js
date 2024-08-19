var product={
    Brand:"Apple Iphone 14 pro Max",
    Stock:{
        aval:true,
        aval2:false,
    },
    color:"purple",
    fnadd:function(){
        var a=10;
        var b=20;
        console.log(a+b);
    },
    cost:90000,
    area:{
        area1:"Bza",
        area2:"Mum",
        area3:"Hyd",
    }
}

console.log(product);
console.log(product.Stock.aval)

product.Stock.aval="Not available";
console.log(product);
product.fnadd()