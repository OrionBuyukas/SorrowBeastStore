/**
 * Created by orion on 8/6/15.
 */

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
//function showAllSongs() {
//    content = document.getElementById("all-songs");
//    hideOtherContent();
//    var xhr = new XMLHttpRequest();
//    xhr.onload = reqAllSongsListener;
//    xhr.open("get", "/api_all/");
//    xhr.send();
//}
//
//function reqAllSongsListener() {
//    console.log(this.responseText);
//    var list = JSON.parse(this.responseText);
//    var songList = document.getElementById("all-songs-list");
//    songList.innerHTML="";
//
//    for (i=0; i <list.length; i++) {
//        var song = document.createElement("a");
//        id = list[i].id;
//        song.setAttribute("href", "#");
//        song.setAttribute("data-id", id);
//        song.addEventListener("click", function(e){
//            showSongDetails(e.target.getAttribute("data-id"));
//        });
//        song.innerHTML=list[i].name;
//        songList.appendChild(song);
//    }
//}
//





var showProductDetail = function(id) {
    var xhr = new XMLHttpRequest();
    var form_data = new FormData();

    form_data.append("productId", id);
    xhr.onload = productDetail;
    xhr.open('POST', 'item_details.html', true);
    xhr.send(form_data)
};

var productDetail = function() {
 var JSONData = JSON.parse(this.responseText);

 console.log(JSONData)

        var img = document.createElement('img');
        var details = document.getElementById('details');
        var crtBtn = document.createElement('button');
        var li = document.createElement('li');
        var input = document.createElement('input');
        var ul = document.getElementById("productDetails");

        //document.getElementById("overlay").style.display = 'block';


        details.style.display = 'block';


        li.innerText = JSONData.product_name;
        ul.appendChild(li);



        crtBtn.innerText = "Add to Cart";
        crtBtn.setAttribute("onclick", addToCart());
        details.appendChild(crtBtn);

        input.type = 'hidden';
        input.value = JSONData.productId;
        details.appendChild(input);




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
        var itemName = document.createElement("div")
        var productIdTag = document.createElement("input")

        var productId = JSONData[i].productId;
        console.log("productId " + productId)

        product_container.setAttribute('class', 'productcontainer');
        //product_container.setAttribute('display', 'block')
        //product_container.setIdAttribute()
        //product_container.innerText

        itemName.className = "titleBanner";
        itemName.innerText = JSONData[i].product_name;
        product_container.appendChild(itemName);

        productIdTag.name = productId.toString()
        productIdTag.setAttribute('type', 'hidden');
        productIdTag.setAttribute('value', productId.toString());
        product_container.appendChild(productIdTag)

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

function init () {
    //document.getElementById("product").addEventListener("click",showProductDetail() ); //add function to show detail
    //();
    createProductTile(showProducts);

}

//loads init function of event listeners on load completion
//document.addEventListener("DOMContentLoaded", init);
document.addEventListener("DOMContentLoaded", showProducts());

//events
//function showProductDetail() {
//    //enlarges image fades out screen
//
//}

//Buttons and Controls

function showInventoryControls() {
    if (document.getElementById('inventorycontrols').style.display === 'none'){
        console.log("show inventory")
    document.getElementById('inventorycontrols').style.display = 'block';}
    else {
    document.getElementById('inventorycontrols').style.display = 'none';}
}

function showHideAddProduct() {
    var addProductFields = document.getElementById("addProduct")

    if (addProductFields.style.display === 'none' ) {
        addProductFields.style.display = 'block'
    } else {
       addProductFields.style.display = 'none'
    }
}


// data transfer functions

function sendPost(item, url) {

    var xhr = new XMLHttpRequest();
    var form_data = new FormData();

    for (var key in item) {
        form_data.append(key, item[key]);
    }
    xhr.onload = showProducts;
    xhr.open("POST", url);    //xhr.open("GET", url);
    xhr.send(form_data)
}


function sendAddProduct() {
    var url = 'store_data.html';
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
    sendPost(product, url);
    document.getElementById("addProduct").innerHTML = "";


}

//upload photo

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


// probably dont need
//function sendDetailsRequest(item, url, id) {
//
//    var xhr = new XMLHttpRequest();
//    var form_data = new FormData();
//
//    for (var key in item) {
//        form_data.append(key, item[key]);
//    }
//    xhr.onload = showProductDetail(id);
//    xhr.open("POST", url);
//    xhr.send(form_data)
//
//}
//
//function sendDetails(id) {
//    var url = 'item_details.html';
//    console.log(id);
//    var product = {
//        "action": "DETAILS", //document.getElementById("details").value,
//        "productId": id,
//    };
//    console.log(product);
//    sendDetailsRequest(product, url, id);
//}