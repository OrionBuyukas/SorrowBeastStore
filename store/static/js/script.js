/**
 * Created by orion on 8/6/15.
 */

//user login and create validation
//var regForm = document.getElementById('registerUser');
//regForm.onsubmit = function(e) {
//
//    var errors = [];
//    var email = document.getElementById('email');
//    var first_name = document.getElementById('first_name');
//    var last_name = document.getElementById('last_name');
//    var username = document.getElementById('username');
//    var password = document.getElementById('password');
//    var reenterpass = document.getElementById('reenterpassword');
//
//                    if (last_name.value.length<1){
//                    last_name.classList.add("error");
//                    errors.push("Last name is a required field");
//                    document.getElementById("lnInvalid").innerHTML = "Last name is a required field"
//
//                }
//
//                if (first_name.value.length < 1){
//                    first_name.classList.add("error");
//                    errors.push("First name is a required field");
//                    document.getElementById("fnInvalid").innerHTML = "First name is a required field"
//
//                }
//                if (username.value.length < 1){
//                    username.classList.add("error");
//                    errors.push("username required field");
//                    document.getElementById("usernm").innerHTML = "Username is a required field"
//
//                }
//
//                if (password.value.length < 1) {
//                    password.classList.add("error");
//                    errors.push("Password Too Short");
//                    document.getElementById("pass").innerHTML = "Password required field"
//                }
//}
//
//
//                if (password.value != reenterpass.value){
//                    reenterpass.classList.add("error");
//                    errors.push("Password doesn't match");
//                    document.getElementById("repass").innerHTML = "Password doesn't match"
//                }
//
//                if (email.value.length < 1) {
//                    email.classList.add("error");
//                    errors.push("Email is a required field.");
//                    document.getElementById("emailInvalid").innerText = "Email is a required field"
//                }
//
//                if (email.value.indexOf("@") == -1) {
//                    email.classList.add("error");
//                    errors.push("Email must contain an @ symbol.");
//                    document.getElementById("emailInvalid").innerText = "Enter a valid email";
//
//    if (errors.length == 0) {
//        e.preventDefault();
//        createUser()
//    } else {
//        e.preventDefault();
//        console.log(errors)
//    }
//};


//create user and go home or go to add address complete form
//var checkoutStatus = document.getElementById()

function createUser() {

    var url = 'create_user';

    //if checkout show complete purchase add address billing, the other option return home
    var show =  showProducts;
    var user = {
        "email": document.getElementById('email').value,
     "first_name": document.getElementById('first_name').value,
     "last_name": document.getElementById('last_name').value,
     "username": document.getElementById('username').value,
     "password": document.getElementById('password').value,
    };
    console.log(user);
    sendPost(user, url, show);
    document.getElementById("registerUser").innerHTML = "";

}

//validate address



function addAddress(){
    //get user in backend
    var isBillAdrs = document.getElementById('isBillingAddress');
    var addAdressForm = document.getElementById("addAddressForm");
    var checkoutForm = document.getElementById("checkoutForm");
    var formTitle = document.getElementById('formTitle');
    var show = '';
    var url = 'add_address/';
    var address = {

        "street": document.getElementById().value,
        "city": document.getElementById().value,
        "state": document.getElementById().value,
        "zip": document.getElementById().value,

    }

    if (isBillAdrs.checked == false) {

        //show address form cleared

        sendPost(address, url, show);
        addAddressForm.innerHTML = "";
        formTitle.innerText = "Add Billing Address";
        isBillAdrs.checked = true;

    } else {
        //show checkout form which has billing info and ship time then sends
        sendPost(address, url, show);
        checkoutForm.style.display = "block";
        addAdressForm.style.display = "none";

    }


}


function checkout() {

}


//todo change input money to cents in model, convert to currency format in browser.
// input money as an integer
//function format2(n, currency) {
//    var n = n
//    n = n/100
//    return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
//}

//todo add ability to sort products by add date, price, name in javascript

//todo add search function


//todo make ajax load only load 6 product tiles at a time


function drawProducts(products, appendToDivId) {
    var productList = products;
    var productDetail = document.getElementById(appendToDivId);
    var detailsList = [];


    for(var i=0; i<productList.length; i++){
        var detailsBox = document.createElement('div');
        var speclist = document.createElement('ul');
        var name = document.createElement('li');
        var price = document.createElement('li');
        var description = document.createElement('li');


        //images could be a from separate image list?
        var image = document.createElement('img');
        image.setAttribute('src', productList[i].product_image_link);
        image.setAttribute('alt', productList[i].product_description);
        detailsBox.appendChild(image);


        name.innerText = productList[i].product_name;
        speclist.appendChild(name);
        description.innerText = productList[i].product_description;
        speclist.appendChild(description);
        price.innerText = "$" + productList[i].product_price;
        speclist.appendChild(price);

    }
        for (var i=0; i<detailsList.length; i++) {
            speclist.appendChild(detailsList[i]);
        }
        detailsBox.appendChild(speclist);
        productDetail.appendChild(detailsBox);

}


//todo show product controls if logged in as admin, check admin credentials repeatedly
//todo render all product tiles with additional editing controls




    //var addProduct

//var addEventsProductList = function() {
//    var productsListContainer = document.getElementById("productSelection");
//var bindEvents = function(productItem, itemDetails) {
//  console.log("Bind list item events");
//  //select productListContainer's children
//
//  var productDetails = productsListContainer.querySelector("button.details");
//
//    //add event handler to each product's childrens detail button
//  productDetails.onclick = productDetail;
//
//};
//
//var productDetail = function () {
//    console.log("product detail view");
//    var detailsTile = this.parentNode;
//    // open details view gray out background
//    var backDrop = document.getElementById('detailView');
//
//    //detailsTile.appendChild(backDrop)
//
//    backDrop.setAttribute('display', 'block');
//    //backDrop.innerText = JSONData[]
//
//    //add event listener to close view
//    document.addEventListener('click', backDrop.setAttribute('display', 'none'))
//};
//
//
//for (var i = 0; i<productsListContainer.children.length; i++) {
//bindEvents(productsListContainer.children[i], productDetail())
//}
//
//};
//
//var bindEvents = function(productItem, itemDetails) {
//  console.log("Bind list item events");
//  //select taskListItem's children
//
//  var productDetails = productsListContainer.querySelector("button.details");
//  //var addToCart = productsListContainer.querySelector("button.add");
//  //  var checkbox = bind to if checked do event from outer scope outside products container
//
//  //bind editTask to edit button
//
//    //bind checkBoxEventHandler to checkbox
//  //checkBox.onchange = checkBoxEventHandler;
//
//  //bind productDetail to details button
//  productDetails.onclick = productDetail;
//
//}






var showProductDetail = function(id) {
    console.log(id);
    var xhr = new XMLHttpRequest();

    xhr.onload = productDetail;
    xhr.open('GET', 'item_details.html/'+ id + '/' , true);//xhr.open('POST', 'item_details.html', true);
    xhr.send()
};

var productDetail = function() {
    console.log(this.responseText);
 var JSONData = JSON.parse(this.responseText);

    console.log(JSONData);
    var overlay = document.createElement("div");
    var detailBox = document.createElement("div");
    var detail = document.createElement('div');
    var body = document.getElementById('body');
    var detailsUL = document.createElement('ul');
    var detailsLiName = document.createElement('li');
    var detailsLiPrice = document.createElement('li');
    var detailsLiDescription = document.createElement('li');
    var detailsLI = document.createElement('li');



    overlay.id = "overlay";
    overlay.style.display= 'block';
    body.appendChild(overlay);
    //overlay.setAttribute('display', 'block');



    var img = document.createElement("img");
    img.setAttribute("src", JSONData.product_image_link);
    //img.setAttribute("alt", JSONData.product_image_alt);

    detailBox.appendChild(img);

    detailBox.style.display = 'block';
    //add event listener to hide overlay and details
    var closeBtn = document.createElement('span');
    closeBtn.innerText = "X";
    closeBtn.addEventListener('click', function(){overlay.style.display='none'; detailBox.style.display = 'none'});

    overlay.appendChild(closeBtn);
    //img.appendChild(closeBtn);

    //create div that holds product info and button
    detailBox.setAttribute('id', 'details');

    //make list of details then loop through is there a way to enumerate a javaScript object
    //detail.setAttribute('id', 'detail');
    //detailsLiName.innerText = JSONData.product_name;
    detailsLiName.innerHTML = "<h3><strong>" + JSONData.product_name + "</strong></h3>";  //list heading?
    //detailsLiName.setAttribute('id', 'detailsName')

    detailsUL.appendChild(detailsLiName);
    detailsLiDescription.innerHTML = "<em>" + JSONData.product_description + "</em>";
    detailsUL.appendChild(detailsLiDescription);
    detailsLI.innerText =  "$" + JSONData.product_price;
    detailsUL.appendChild(detailsLI);
    detailBox.appendChild(detailsUL);


    detailBox.appendChild(detail);
    console.log(detailBox);
    //overlay.appendChild(detail);
    var addButton = document.createElement('button');

        addButton.setAttribute('onclick', 'addToCart(' + productId + ')');
        addButton.innerText = "Add To Cart";

        detailBox.appendChild(addButton);

    body.appendChild(detailBox);

//var img = document.createElement('img');
//    var details = document.getElementById('details');
    //var crtBtn = document.createElement('button');
    //var li = document.createElement('li');
    //var input = document.createElement('input');
    //var ul = document.getElementById("productDetails");

    //document.getElementById("overlay").style.display = 'block';
    //
    //
    //details.setAttribute('display', 'block');


        //li.innerText = JSONData.product_name;
        //ul.appendChild(li);
        //details.appendChild(ul);


        //crtBtn.innerText = "Add to Cart";
        //crtBtn.setAttribute("onclick", addToCart());
        //details.appendChild(crtBtn);

        //input.type = 'hidden';
        //input.value = JSONData.productId;
        //details.appendChild(input);




};

 // JSON get

//var JSONData = "oops"
//iffie?
var showProducts = function() {
var xhr = new XMLHttpRequest();

    xhr.onload = createProductTile;


xhr.open('GET', 'store_data.html', true);
xhr.send();
};



function createProductTile  () {
    console.log("createProductTile");
    // converts JSON data string into product tiles, adds them to products selection div
//var JSONData = JSON.parse(this.responseText);
var JSONData = JSON.parse(this.responseText);
  console.log(JSONData);

var productSelection = document.getElementById("productSelection");

    productSelection.innerHTML = "";


    for (var i = 0; i< JSONData.length; i++) {


        var product_container = document.createElement("div");
        var details_btn = document.createElement("button");
        var is_new_tg = document.createElement("div");
        var soldTag = document.createElement("div");
        var itemName = document.createElement("div");
        var productIdTag = document.createElement("input");
        var image = document.createElement('img');

        var productId = JSONData[i].productId;
        //console.log("productId " + productId)

        product_container.setAttribute('class', 'productcontainer');
        //product_container.setAttribute('display', 'block')
        //product_container.setIdAttribute()
        //product_container.innerText

        itemName.className = "titleBanner";
        itemName.innerText = JSONData[i].product_name;
        product_container.appendChild(itemName);

        productIdTag.name = productId.toString();
        productIdTag.setAttribute('type', 'hidden');
        productIdTag.setAttribute('value', productId.toString());
        product_container.appendChild(productIdTag);

        image.setAttribute('src', JSONData[i].product_image_link);
        image.setAttribute('alt', JSONData[i].product_description);
        product_container.appendChild(image);


        if (JSONData[i].product_is_new == true) {
            is_new_tg.setAttribute('class', 'is_new');
            is_new_tg.innerText = 'NEW!';
            product_container.appendChild(is_new_tg)
        }


        if (JSONData[i].product_is_sold == true) {
            soldTag.className = 'sold';
            soldTag.innerHTML = 'SOLD!';
        }

        details_btn.setAttribute("class", "button");
        details_btn.setAttribute("name", "details");
        details_btn.setAttribute("onclick", "showProductDetail(" + productId +")"); //sendDetails

        details_btn.innerText = 'Details';



        product_container.appendChild(details_btn);
//createAddToCartButton(product_container, productId)
        var addButton = document.createElement('button');

        addButton.setAttribute('onclick', 'addToCart(' + productId + ')');
        addButton.innerText = "Add To Cart";

        product_container.appendChild(addButton);


        document.getElementById("productSelection").appendChild(product_container);}
        //productSelection.innerHTML += product_container}
    //

        //
        //
        //
        //    for (var i = 0; i<productData.length; i++) {
        //        var productSelection = document.getElementById("productSelection");
        //        var product_container = document.createElement("div")
        //        var details_btn = document.createElement("button");
        //        var is_new_tg = document.createElement("div");
        //        var test_tg = document.createElement("div")
        //
        //
        //        product_container.setAttribute('class','productcontainer');
        //        //product_container.setAttribute('display', 'block')
        //        //product_container.setIdAttribute()
        //
        //
        //        if (productData[i].product_is_new == true) {
        //        is_new_tg.setAttribute('class', 'is_new');
        //        is_new_tg.innerText = 'NEW!';
        //        product_container.appendChild(is_new_tg)
        //        }
        //        details_btn.setAttribute("class", "button");
        //        details_btn.setAttribute("name", "details");
        //        details_btn.setAttribute("action", "");
        //        details_btn.innerText = 'Details';
        //
        //        product_container.appendChild(details_btn);
        //
        //
        //
        //
        //
        //
        //
        //    document.getElementById("productSelection").appendChild(product_container);}


// event listeners
//addButton.onclick = addTask
//function showProductDetail() {

};

function checkUserAuthentication() {
    console.log("check auth!");
    var xhr = new XMLHttpRequest();
    xhr.onload = checkAuth;

xhr.open('GET', 'checkauth.html', true);
xhr.send();
}

function checkAuth() {
    var JSONData = JSON.parse(this.responseText);
    var navbar = document.getElementById('nav');
    var login = document.createElement('a');
    var register = document.createElement('a');

    if (JSONData.is_user_auth == true){
        var welcome = document.createTextNode("WELCOME" + JSONData.username);
        navbar.appendChild(welcome)
    } else {

        login.innerText = "Login";
        login.setAttribute('href', login.html);
        navbar.appendChild(login);

        register.innerText = "Register";
        register.setAttribute('href', 'register.html');
        navbar.appendChild(register);
    }

}


function init () {
    //document.getElementById("product").addEventListener("click",showProductDetail() ); //add function to show detail
    //();

    showProducts();
    getCart();
    //checkUserAuthentication()



}

//loads init function of event listeners on load completion
//document.addEventListener("DOMContentLoaded", init);
document.addEventListener("DOMContentLoaded", init());

//events
//function showProductDetail() {
//    //enlarges image fades out screen
//
//}

//shopping cart functions

//send to cart form data

//function createAddToCartButton(elementToAppendTo, productId) {
//    var button = document.createElement('button');
//
//    button.setAttribute('onclick', addToCart(productId));
//    button.innerText = "Add To Cart";
//
//elementToAppendTo.appendChild('button')
//
//    return
//}


function addToCart(product_id) {
    console.log("add to cart!");
    var url = 'addtocart.html';
    var show = getCart;
    var item = {
        "action": "ADD_TO_CART",
        "product_id": product_id
    };
    console.log(item);
    sendPost(item, url, show);
}

function removeFromCart(product_id) {
    console.log("remove from cart!")    ;
    var url = 'removefromcart.html';
    var show = viewCart; //getCart
    var item = {
        "action": "REMOVE_FROM_CART",
        "product_id": product_id,
    }
    console.log(item)
    sendPost(item, url, show)
}


function getCart() {
console.log("get cart!");
    var xhr = new XMLHttpRequest();
    xhr.onload = cartNav;

xhr.open('GET', 'cart.html', true);
xhr.send();
};

function cartNav() {
    console.log("cart Nav!");
    var JSONData = JSON.parse(this.responseText);
    console.log(JSONData);

    var nav = document.getElementById("cartStatus");
    nav.innerHTML="";
        var cartSize = document.createElement('span');
        var vewCart = document.createElement('button');


        cartSize.innerText = JSONData.cart_size;
        //viewCart.setAttribute('click', )
        vewCart.innerText = "View Cart"
        vewCart.setAttribute('onclick', 'viewCart()');
        //vewCart.addEventListener('onclick', 'viewCart()');
        nav.appendChild(cartSize);
        nav.appendChild(vewCart);

}

//var viewCart = function() {
function viewCart() {
    console.log("view cart!");
 var xhr = new XMLHttpRequest();
    xhr.onload = cartView;
    xhr.open("GET", 'viewcart.html', true);
    xhr.send();
};

//var cartView = function() {
function cartView() {
    console.log("cart view!");
    console.log(this.responseText);
    var JSONData = JSON.parse(this.responseText);
    console.log(JSONData);
    return drawCartView(JSONData);

};

//draw cart view make a table that shows item buttons etc
function drawCartView(JSONData) {
    console.log("draw cart!");
    //var nav = document.getElementById("cartStatus");
    //var cartControls = document.createElement('div');
    var createTable = document.createElement('table');
    var tableRow = document.createElement('tr');
    var checkout = document.createElement('button');
    var checkoutTD = document.createElement('td');
    var emptyTH = document.createElement('th');
    var nameTH = document.createElement('th');
    var descriptTH = document.createElement('th');
    var priceTH = document.createElement('th');
    //table data image (css resize 50px), name, description, price, remove button

    var overlay = document.createElement("div");

    overlay.id = "overlay";
    overlay.style.display= 'block';
    document.getElementById('body').appendChild(overlay);


    var viewCartTable = document.getElementById('checkout');

    viewCartTable.innerHTML = '';
    viewCartTable.style.display = 'block';

    emptyTH.innerText = "X";
    emptyTH.addEventListener('click', function () {
        var cartHide = document.getElementById("checkout");
        cartHide.style.display = 'none';
        overlay.style.display='none';
        getCart();
    });
    tableRow.appendChild(emptyTH);

    nameTH.innerText = "Name";
    tableRow.appendChild(nameTH);

    descriptTH.innerText = "Description";
    tableRow.appendChild(descriptTH);

    priceTH.innerText = "Price";
    tableRow.appendChild(priceTH);

    viewCartTable.appendChild(tableRow);

    for (var i= 0; i<JSONData.products.length; i++) {
        var createRow = document.createElement('tr');
        var imageTD = document.createElement('td');
        var createimg = document.createElement('img');
        var nameTD = document.createElement('td');
        var descriptionTD = document.createElement('td');
        var priceTD = document.createElement('td');
        var removeFromCartTD = document.createElement('td');
        var removeFromCartButton = document.createElement('button');

        createimg.setAttribute('src', JSONData.products[i].product_image_link);
        createimg.setAttribute('alt', JSONData.products[i].product_description);
        imageTD.appendChild(createimg);
        createRow.appendChild(imageTD);

        nameTD.innerText = JSONData.products[i].product_name;
        createRow.appendChild(nameTD);

        descriptionTD.innerText = JSONData.products[i].product_description;
        createRow.appendChild(descriptionTD);

        priceTD.innerText = "$" + JSONData.products[i].product_price;
        createRow.appendChild(priceTD);

        removeFromCartButton.setAttribute('onclick', "removeFromCart(" + JSONData.products[i].product_id + ")");
        removeFromCartButton.innerText = "Remove";
        removeFromCartTD.appendChild(removeFromCartButton);
        createRow.appendChild(removeFromCartTD);

        viewCartTable.appendChild(createRow);
    }

    checkout.setAttribute('onclick', showCheckOut);
    checkout.innerText = "Checkout!";
    checkoutTD.appendChild(checkout);

    //table row total/bottom row
    var tableRowTotal = document.createElement('tr');
    tableRowTotal.innerHTML = "<th scope='row'></th> <td></td> <td>Total:</td> <td>$" + JSONData.total_price + "</td>";
    tableRowTotal.className = 'tabletotal'
    tableRowTotal.appendChild(checkoutTD);
    viewCartTable.appendChild(tableRowTotal);
}

//checkout
function showCheckOut(){
    //todo show login/register. #view=register redirects to #view=login, if user authenticated redirect to add address
}

function showView(view) {
        console.log("view:" + view)
        var divList = document.querySelectorAll("#checkoutContainer .view");
        for (var d = 0; d < divList.length; d++) {
            divList[d].classList.remove("selected");
        }
        document.getElementById(view).classList.add("selected");
    }

    function hashChanged(e) {
        console.log(e);
        var hash = window.location.hash;
        hash = hash.split("#")[1];
        console.log(hash)
        var pairList = hash.split("&");
        console.log(pairList)
        for (var i = 0; i < pairList.length; i++) {
            var pair = pairList[i];
            var parts = pair.split("=");
            var key = parts[0];
            var value = parts[1];

            if (key == "view") {
                if (value == "addresses")
                showView(value);
                getAddresses();
            }
            else {
                showView(value);
            }
        }
    }
    function hashinit() {
        window.addEventListener("hashchange", hashChanged);
        showView("login")
    }
    document.addEventListener("DOMContentLoaded", hashinit);


//checkout event listeners
//document.getElementById('isShippingAddress').addEventListener('onchange', console.log("checked"))

    //function() {
//        console.log("checked?")
//         document.getElementById("addShippingAddressDiv").style.display = 'block'
//     }); //oncheck

//document.getElementById('isShippingAddress').onchange = showShipping;
//function showShipping() {
//    console.log("checked")
//     if(this.checked) {
//         console.log("checked")
//         document.getElementById("addShippingAddressDiv").style.display = 'block'
//     } else {document.getElementById("addShippingAddressDiv").style.display = 'none'}
//}


function deleteAddress(id) {
    console.log("delete address!");
    var url = 'add_address/';
    var show = getAddresses;
    var item = {
        "action": "DELETE",
        "address_id": id
    };
    console.log(item);
    sendPost(item, url, show);
}

var getAddresses = function() {
var xhr = new XMLHttpRequest();

    xhr.onload = showAddresses;


xhr.open('GET', 'addresses/', true);
xhr.send();
};



function showAddresses  () {
    console.log("addressses!");
    var JSONData = JSON.parse(this.responseText);
    console.log(JSONData);
    //create box?
    var addressesTab = document.getElementById('addresses');
    var previousAddresses = document.getElementById('previousAddresses')

    //get addresses, populate box, if no addresses display none.
    if (JSONData) {
        for (var i=0; i<JSONData.length; i++) {

            console.log('street: + ' + JSONData[i]['street'])
            var addressDiv = document.createElement('div')
            var checkboxShipTo = document.createElement('input').setAttribute('type', 'checkbox');
            var checkboxIsBilling = document.createElement('input').setAttribute('type', 'checkbox');
            var addressHiddenId = document.createElement('input').setAttribute('type', 'hidden');
            var UL = document.createElement('ul');
            var streetLi = document.createElement('li');
            var cityLi = document.createElement('li');
            var stateLi = document.createElement('li');
            var zipLi = document.createElement('li');
            var deleteBtn = document.createElement('button');

            //deleteBtn.setAttribute('onclick', "deleteAddress(" + JSONData[i]['addressId'] + ")")



            addressDiv.setAttribute('class', 'address ' + JSONData[i]['addressId');

            //add class of billing address then hide all checkboxes of is billing except selected

            //addClassName('address' + addressID ) then query that classname when gathering inputs for submission
            streetLi.innerText = 'street: + ' + JSONData[i]['street'];
            UL.appendChild(streetLi);

            cityLi.innerTe

            previousAddresses.appendChild(UL)




            //add name and value
            checkboxIsBilling.setAttribute('id', "billingAddress:" + JSONData[i]['addressId']);
            checkboxIsBilling.setAttribute('class', 'billing checkbox show');
            checkboxIsBilling.addEventListener('onchange', showHideBillingCheckBox );


            //checkboxShipTo.setAttribute('id', "address:" + JSONData[i]['addressId']);
            checkboxShipTo.setAttribute('id', "shippingAddress:" + JSONData[i]['addressId']);
            checkboxShipTo.setAttribute('class', 'shipping checkbox show');
            checkboxShipTo.addEventListener('onchange', showHideShippingCheckBox );

        }
    } else { previousAddresses.innerText = 'No Previous Addresses'}

}


//on button click, get past addresses through quesry save changes see adjust addresses
function getPastAddressses() {


}





function showChecked(eventObject) {
        //make default display none, but class show is
        var divList = document.querySelectorAll("#previousAddresses .billing .checkbox");
        for (var d = 0; d < divList.length; d++) {
            divList[d].classList.remove("show");
        }
        document.getElementById(eventObject).classList.add("show");
}

function showHideBillingCheckBox(e) {
    //pass event object id to checked?
    var eventObject = e.target;
    showChecked(eventObject)
}

function adjustAddress() {
    var addressesTab = document.getElementById('addresses');
    var previousAddresses = document.getElementById('previousAddresses');
    var inputList = document.querySelector('#previousAddresses input');

    for (var i=0; i<inputList.length; i++){
        if (inputList[i].getAttribute('type') == 'checkbox') {
            if (inputList[i].getAttribute('checked') == true) {
               var inputValue = inputList[i].getAttribute('value');
            if (inputValue == "shippingAddress") {
                var idString = inputList[i].getAttribute('id');
                var addressId = idString.split(":")[1]
            }
            }
        }
    }
}

//Buttons and Controls

function showInventoryControls() {
    if (document.getElementById('inventorycontrols').style.display === 'none'){
        console.log("show inventory");
    document.getElementById('inventorycontrols').style.display = 'block';}
    else {
    document.getElementById('inventorycontrols').style.display = 'none';}
}

function showHideAddProduct() {
    var addProductFields = document.getElementById("addProduct");

    if (addProductFields.style.display === 'none' ) {
        addProductFields.style.display = 'block'
    } else {
       addProductFields.style.display = 'none'
    }
}


// data transfer functions

function sendPost(item, url, show) {

    var xhr = new XMLHttpRequest();
    var form_data = new FormData();

    for (var key in item) {
        form_data.append(key, item[key]);
    }
    xhr.onload = show;
    xhr.open("POST", url);    //xhr.open("GET", url);
    xhr.send(form_data)
}


function sendAddProduct() {
    var url = 'store_data.html';
    var show =  showProducts;
    var product = {
        "action": document.getElementById("addProductbtn").value,
        "productId": document.getElementById("productId").value,
        "product_name": document.getElementById("product_name").value,
        "product_description": document.getElementById("product_description").value,
        "product_image_link":document.getElementById("product_image_link").value,
        //"product_add_date":
        //"product_is_sold":
        //"product_is_new":
    };
    console.log(product);
    sendPost(product, url, show);
    document.getElementById("addProduct").innerHTML = "";

}

//upload photo
//var photoSubmit = document.getElementById('photo-submit');
//photoSubmit.addEventListener('onclick', photoSubmitter);

function photoSubmitter() {
var form = document.getElementById('photoForm');
var photoFile = document.getElementById('photo');
//var productId = document.getElementById();
var uploadButton = document.getElementById('photo-submit');

form.onsubmit = function(event) {
    console.log("photo upload!")
    event.preventDefault();
    var formData = new FormData();
    formData = {
        "productId": 1,
            "file": photoFile.value,
    };
    //formData.append("file", photoFile.value);

//formData.append(name, file, filename);

// Blobs
//formData.append("file", blob, photoFile.name);

// Strings
//formData.append("productId", 1);
console.log(formData)
var xhr = new XMLHttpRequest();
    //Open the connection.
xhr.open('POST', 'photo_loader.html', true);
    // Set up a handler for when the request finishes.
xhr.onload = function () {
  if (xhr.status === 200) {
    // File uploaded.
    uploadButton.innerHTML = 'Upload';
  } else {
    alert('An error occurred!');
  }
};
    // Send the Data.
xhr.send(formData);}};


//
//};


//var form = document.getElementById('file-form');
//var fileSelect = document.getElementById('file-select');
//var uploadButton = document.getElementById('upload-button');
//form.onsubmit = function(event) {
//    event.preventDefault();
//
//    var formData = new FormData()
//    formData.append(name, file, filename)
//    var xhr = new XMLHttpRequest();
//    //Open the connection.
//    xhr.open('POST', 'photo_loader', true);
//    // Set up a handler for when the request finishes.
//    xhr.onload = function () {
//        if (xhr.status === 200) {
//            // File(s) uploaded.
//            uploadButton.innerHTML = 'Upload';
//        } else {
//            alert('An error occurred!');
//        }
//    };
//    // Send the Data.
//    xhr.send(formData);
//};
//
//
//var form = document.getElementById('file-form');
//var fileSelect = document.getElementById('file-select');
//var uploadButton = document.getElementById('upload-button');
//form.onsubmit = function(event) {
//  event.preventDefault();
//
//
//  // Update button text.
//  uploadButton.innerHTML = 'Uploading...';
//
//var files = fileSelect.files;
//    // Create a new FormData object.
//var formData = new FormData();
//    // Loop through each of the selected files.
//for (var i = 0; i < files.length; i++) {
//  var file = files[i];
//
//  // Check the file type.
//  if (!file.type.match('image.*')) {
//    continue;
//  }
//
//  // Add the file to the request.
//  formData.append('photos[]', file, file.name);
//}
//
// // Files
//formData.append(name, file, filename);
//
//// Blobs
//formData.append(name, blob, filename);
//
//// Strings
//formData.append(name, value);
//    // Set up the request.
//var xhr = new XMLHttpRequest();
//    //Open the connection.
//xhr.open('POST', 'photo_loader.html', true);
//    // Set up a handler for when the request finishes.
//xhr.onload = function () {
//  if (xhr.status === 200) {
//    // File(s) uploaded.
//    uploadButton.innerHTML = 'Upload';
//  } else {
//    alert('An error occurred!');
//  }
//};
//    // Send the Data.
//xhr.send(formData);
//
//};
//

//
//var form = document.getElementById('file-form');
//var fileSelect = document.getElementById('file-select');
//var uploadButton = document.getElementById('upload-button');
//form.onsubmit = function(event) {
//  event.preventDefault();
//
//
//  // Update button text.
//  uploadButton.innerHTML = 'Uploading...';
//
//var files = fileSelect.files;
//    // Create a new FormData object.
//var formData = new FormData();
//    // Loop through each of the selected files.
//for (var i = 0; i < files.length; i++) {
//  var file = files[i];
//
//  // Check the file type.
//  if (!file.type.match('image.*')) {
//    continue;
//  }
//
//  // Add the file to the request.
//  formData.append('photos[]', file, file.name);
//}
//
// // Files
//formData.append(name, file, file.name);
//
//// Blobs
//formData.append(name, blob, file.name);
//
//// Strings
//formData.append(name, value);
//    // Set up the request.
//var xhr = new XMLHttpRequest();
//    //Open the connection.
//xhr.open('POST', 'photo_loader.html', true);
//    // Set up a handler for when the request finishes.
//xhr.onload = function () {
//  if (xhr.status === 200) {
//    // File(s) uploaded.
//    uploadButton.innerHTML = 'Upload';
//  } else {
//    alert('An error occurred!');
//  }
//};
//    // Send the Data.
//xhr.send(formData);
//
//};
