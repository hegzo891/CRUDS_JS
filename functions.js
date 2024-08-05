let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let total = document.getElementById("total");
let count = document.getElementById("count");
let submit = document.getElementById("submit");
let category = document.getElementById("category");
let discount = document.getElementById("discount");

function getTotal(){
   if(price.value != '')
   {
    let res = (+price.value + +taxes.value + +ads.value) - +discount.value;
    total.innerHTML= res;
    total.style.backgroundColor = "green";
}else{
    total.style.backgroundColor = "red";
    total.innerHTML = "";
}
}

// the create function
let datapro;
if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product);
}else{
    datapro = [];
}

submit.onclick = function(){
    let newpro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
        discount:  discount.value
    };

    datapro.push(newpro);
    localStorage.setItem("product", JSON.stringify(datapro));
    clearInputs();
    showdata();    
}


// clear inputs
function clearInputs(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    category.value = '';
    count.value = '';
    discount.value = '';
    total.value = ''
};

//read

function showdata(){
    let table = '';
    for(let i = 0; i < datapro.length; i++)
    {
        
    }
}