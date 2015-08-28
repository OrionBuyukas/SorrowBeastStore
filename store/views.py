from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from models import *
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
import json


# Create your views here.
@login_required
def create_blog(request):
    pass

@login_required
def edit_blog(request):
    pass

@login_required
def add_comment(request):
    pass

@login_required
def edit_comment(request):
    pass



def cart_items(cart):
    items = []
    for item in cart:
        prod = Product.objects.get(id=int(item))
        product = {
            "product_name": prod.product_name,
            "productId": prod.id,
            "product_description": prod.product_description,
            # "product_add_date": item.product_add_date.strftime("%A %d. %B %Y"),
            # "product_is_sold": item.product_is_sold,
            # "product_is_new": item.product_is_new,
            # "product_image_link": item.product_image_link,
        }
        items.append(product)
    print(items)

    return items

def cart_total(cart):
    total_price = 0
    for item in cart:
        total_price += Product.objects.get(id=int(item)).product_price
    print(total_price)
    return total_price


def view_cart(request):
    print("calling view cart")
    cart = request.session['cart']
    request.session.set_expiry(0)
    cart_sum = cart_total(cart)
    cart_data = {"cart": cart, "cart_size": len(cart),  "total_price": str(cart_sum)}  # "cart_items": cart_items(cart),
    products = []
    for item in cart:
        product = Product.objects.get(id=int(item))
        product_data = {
            "product_name": product.product_name,
            "product_id": product.pk,
            "product_price": str(product.product_price),
            "product_description": product.product_description,
            "product_image_link": product.product_image_link,
        }
        products.append(product_data)
    cart_data["products"] = products

    print(cart_data)
    return HttpResponse(json.dumps(cart_data, indent=4), content_type='application/json')


#
# #todo: make purchase, changes status of product with id to sold...deletes later.



@csrf_exempt
def add_to_cart(request):
    # if 'cart' not in request.session:
    #     cart = []
    #     request.session['cart'] = []
    cart = request.session['cart']
    request.session.set_expiry(0)
    if request.POST["action"] == "ADD_TO_CART":
        #make it so each cart item is unique
        if int(request.POST['product_id']) not in cart:
            cart.append(int(request.POST['product_id']))
        # else:
        #     "Item is already in cart" #create a way to send message back, or validate in javascript browser side

    data = {"cart_size": len(cart), "cart": cart}
    print data
    return HttpResponse(json.dumps(data, indent=4), content_type='application/json')


@csrf_exempt
def remove_from_cart(request):
    #cart = request.session['cart']
    request.session.set_expiry(0)
    item_to_remove = request.POST['product_id']
    if request.POST["action"] == "REMOVE_FROM_CART":
        #get index of lowest occurance of product_id
        item_index = request.session['cart'].index(int(item_to_remove))

        #pop that index off the cart
        request.session['cart'].pop(item_index)

    return HttpResponse()





@csrf_exempt
def cart_init(request):
     #todo: add cart to session, init cart

    print('cart!')
    if 'cart' not in request.session:
        cart = []
        request.session['cart'] = []

    cart = request.session['cart']
    request.session.set_expiry(0)

    # if request.POST["action"] == "ADD_TO_CART":
    #     cart.append(int(request.POST['product_id']))

    data = {"cart_size": len(cart), "cart": cart}

    print(data)

    return HttpResponse(json.dumps(data, indent=4), content_type='application/json')


@csrf_exempt
def store(request):

    if request.POST:
        print("request post")

        if request.POST["productId"] == "0":
            product = Product()
        else:
            product = Product.objects.filter(id=request.POST["productId"])[0]

        if request.POST["action"] == "DELETE":
            product.delete()
        else:
            print("add product")
            product.product_name = request.POST["product_name"]
            product.product_description = request.POST["product_description"]
            product.product_description = request.POST["product_image_link"]
            product.save()

            # img = Image()
            # img.image = request.POST['file']
            # img.product = Product.get.object(id=product.id)
            # img.save()
            # product.product_image_link = img.image.url
            # product.save()

    product_list = Product.objects.all()
    products = []

    print("displaying all the stuff")
    for item in product_list:
        prod = {
            "product_name": item.product_name,
            "productId": item.id,
            "product_description": item.product_description,
            "product_add_date": item.product_add_date.strftime("%A %d. %B %Y"),
            "product_is_sold": item.product_is_sold,
            "product_is_new": item.product_is_new,
            "product_image_link": item.product_image_link,
        }
        products.append(prod)


    return HttpResponse(json.dumps(products, indent=4), content_type='application/json')


@csrf_exempt
def item_details(request, id):
    #change method to GET to allow bookmarking?

    print("details!")
    items = Product.objects.filter(pk=id)
    product = {}

    images = Image.objects.filter(product__id=id)
    # images = Image.objects.filter(product__id=id)[0] get single item not a list?
    if images:
        # img_urls = []
        for i, value in enumerate(images):
            key = "image" + str(i)
            product[key] = value.image.url
        #     img_urls.append(image.image.url)
        #     print(image.image.url)

        # product_details.append(image)
    #todo: make request for all item details in product.
    #todo: fetch all product images, large format


    for item in items:
        product["product_name"] = item.product_name,
        product["productId"] = item.id,
        product["product_description"] = item.product_description,
        product["product_add_date"] = item.product_add_date.strftime("%A %d. %B %Y"),
        product["product_is_sold"] = item.product_is_sold,
        product["product_is_new"] = item.product_is_new,
        product["product_image_link"] = item.product_image_link, #image_urls[0]
        product["product_image_alt"] = item.product_description,
        product["product_price"] = str(item.product_price), #'{:20,.02f}'.format(item.product_price), str()?

    print(product)
    print(images)
    return HttpResponse(json.dumps(product, indent=4), content_type='application/json')


@csrf_exempt
def photo_loader(request):
    # if request.POST:
    #     image = request.FILES['file']
    #     path = '/media/uploads/' + image.name
    #     with open("SorrowBeast" + path, 'wb+') as destination:
    #         for chunk in image.chunks():
    #             destination.write(chunk)
    #         print(destination)

    #make function that saves image and product

    print("posting")
    img = Image()
    img.image = request.FILES['file']
    img.product = Product.objects.get(id=request.POST['productId'])
    # img.title
    img.save()
    #
    # item = Product.get.object(id=request.Post['productId'])
    # print(item)
    # item.product_image_link = img.image.url
    # item.save()

    # return HttpResponse("image posting", content_type="text/plain")
    # return HttpResponse(json.dumps(product, indent=4), content_type='application/json')
    return HttpResponse()
    # return redirect('index.html')



def gen_items_list(cart):
    cartItems = cart_items(cart)
    items_list = ""
    for item in cartItems:
        items_list += ","
        items_list += item.name
    return items_list


# def logged_in(request):
#     output = {"user_id": 0}
#     if request.user.is_authenticated():
#         output["user_id"] = request.user.id
#         renterList = Renter.objects.filter(user = request.user)
#         managerList = Manager.objects.filter(user = request.user)
#         if (len(renterList) > 0):
#             renter = renterList[0]
#             output["building_id"] = renter.building.id
#             output["renter_id"] = renter.id
#         if (len(managerList) > 0):
#             manager = managerList[0]
#             output["manager_id"] = manager.id
#     return HttpResponse(json.dumps(output))
#


# def send_address(request):
#
#
#     "user"
#
#
#     "street":
#         "city":
#     "state":
#     "zip":
#     "is_billing_address":
#     "is_shipping_address":
#

# def add_address(request):



# show addresses with checkbox for which one
def add_address(request):
    addressList = {}
    if request.user.is_authenticated():
        customer = Customer.objects.filter(user=request.user)
        addresses = Address.objects.filter(user=customer)
    if request.POST["action"] == "DELETE":
        address_to_delete = Address.objects.filter(id=int(request.POST["address_id"]))[0]
        address_to_delete.delete()
    # if request.POST

    # if addresses:
    #     shipAddress = []
    #     billAddress = []
    #     for address in addresses:
    #         if address.is_shipping_address:
    #             shp_adrs = {
    #             "street": address.street,
    #             "city": address.city,
    #             "state": address.state,
    #             "zip": address.zip,
    #             "is_billing_address": address.is_billing_address,
    #             "is_shipping_address": address.is_shipping_address}
    #             shipAddress.append(shp_adrs)
    #         if address.is_shipping_address:



        return HttpResponse(json.dumps(addressList, indent=4), content_type='application/json')
@csrf_exempt
def address_holder(request):


    if 'address_list' not in request.session:
        address_list = []
        request.session['address_list'] = []

    address_list = request.session['address_list']
    request.session.set_expiry(0)

    # if request.POST["action"] == "ADD_TO_CART":
    #     cart.append(int(request.POST['product_id']))

    data = {"address_list": address_list}

    print(data)

    return HttpResponse(json.dumps(data, indent=4), content_type='application/json')
# @csrf_exempt
# def add_to_address_list(request):
#
#     address_list = request.session['address_list']
#     request.session.set_expiry(0)
#     if request.POST["action"] == "NEW_BILL_ADDRESS":
#     if request.POST["action"] == "NEW_SHIP_ADDRESS":
#
#
#     if request.POST["action"] == "ADD_ADDRESSES":
#
#
#
#         if int(request.POST['address_id']) not in address_list:
#             address_list.append(int(request.POST['address_id']))
#         # else:
#         #     "Item is already in cart" #create a way to send message back, or validate in javascript browser side
#
#     data = {"address_list": address_list}
#     print data
#     return HttpResponse(json.dumps(data, indent=4), content_type='application/json')

def show_addresses(request):
    addressList = []
    if request.user.is_authenticated():
        customer = Customer.objects.filter(user=request.user)
        addresses = Address.objects.filter(user=customer)
    if addresses:

        for address in addresses:
            # if address.is_shipping_address:
                adrs = {
                "addressId": address.id,
                "street": address.street,
                "city": address.city,
                "state": address.state,
                "zip": address.zip,
                "is_billing_address": address.is_billing_address,
                "is_shipping_address": address.is_shipping_address}
                addressList.append(adrs)

    return HttpResponse(json.dumps(addressList, indent=4), content_type='application/json')






# def checkout(request):
#     #todo create Order model, save address in Address model, create new User, clear 'cart', change mainpage to show sold items
#
#
# #checkout
# #get cart, review/edit/compile order, get user/create user, check if they have address/create address, get payment info, create order, change product values
# #refresh homepage, showing sold items
#     cart = request.session['cart']
#     request.session.set_expiry(0)
# # if user not in session:
# #     login or
# #     user = User()
# #
# # if user does not have address
#
#     if request.user.is_authenticated():
#         customer = Customer.objects.filter(user = request.user)
#
#     if Address.objects.filter(user=customer):
#         #show addresss
#
#         address = Address()
# #
# # if user does not have billing address
#     if not address.is_billing_address:
#         billing_address = Address()
#         else: billing_address = address
# #
#     new_order = Order()
#     user = customer
#     address = address
#     billing_address = billing_address
#     payment_info = biling info
#     order_list = gen_items_list(cart)
#     is_fulfilled = False
#     cart_total = cart_total(cart)


# # mark products as sold
#     for item in cart:
#         product = Product.objects.get(id=int(item))
#         product.product_is_sold = True
#         product.product_is_new = False
#         product.save()
# clear cart
# request.session['cart'] = []


# redirect home alert order successful

def verify_user(request):
    #login
    pass

@csrf_exempt
def register_new_user(request):
    if request.POST:

        customer = Customer()
        customer.user.last_name = request.post["last_name"]
        customer.user.first_name = request.post["first_name"]
        customer.user.username = request.post["username"]
        customer.user.email = request.post["email"]
        customer.user.set_password(request.POST["password"])
        customer.save()

        # user_image = UserImage()
        # user_image.image = request.POST["file"]
        # user_image.customer = customer
        # user_image.save()
        #
        # customer.photo_link = user_image.image.url
        customer.save()

    return HttpResponseRedirect('/') #hashchange or show login view

def login_view(request):
    if request.POST:
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return HttpResponseRedirect("/")

    # return HttpResponseRedirect('login.html') #or register


def check_user_auth(user):
    if user.is_authenticated():
        return True
    else:
        return False

def check_user_ajax(request, user):

    jsondata = {}
    if request.user.is_authenticated():

        jsondata["username"] = request.user.username
        jsondata["is_user_auth"] = True
    else:
        jsondata["is_user_auth"] = False

    print(jsondata)

    return HttpResponse(json.dumps(jsondata, indent=4), content_type='application/json')
    # if request.POST:
    #     print("details!")
    #     item = Product.objects.filter(pk=request.POST["productId"])[0]
    #     # images = Image.objects.filter(products__id=request.POST["productId"])
    #     print(item)
    #     product_details = []
    #
    #     # for image in images:
    #     #     image = {
    #     #         "alt": item.description,
    #     #         "src": image.image.url,
    #     #
    #     #     }
    #     # product_details.append(image)
    #     #todo: make request for all item details in product.
    #     #todo: fetch all product images, large format
    #
    #     product = {
    #         "product_name": item.product_name,
    #         "productId": item.id,
    #         "product_description": item.product_description,
    #         "product_add_date": item.product_add_date.strftime("%A %d. %B %Y"),
    #         "product_is_sold": item.product_is_sold,
    #         "product_is_new": item.product_is_new,
    #         "product_image_link": item.product_image_link,
    #         "product_price": item.product_price, #'{:20,.02f}'.format(item.product_price),
    #
    #     }
    #     product_details.append(product)
    #     return HttpResponse(json.dumps(product_details, indent=4), content_type='application/json')


#
# @csrf_exempt
# def item_details(request, id):
#     #change method to GET to allow bookmarking?
#
#     print("details!")
#     items = Product.objects.filter(pk=id)
#     images = Image.objects.filter(product__id=id)
#     # img_urls = []
#     # for image in images:
#     #     img_urls.append(image.image.url)
#     #     print(image.image.url)
#
#     # product_details.append(image)
#     #todo: make request for all item details in product.
#     #todo: fetch all product images, large format
#     for item in items:
#         for image in images:
#             product = {
#                 "product_name": item.product_name,
#                 "productId": item.id,
#                 "product_description": item.product_description,
#                 "product_add_date": item.product_add_date.strftime("%A %d. %B %Y"),
#                 "product_is_sold": item.product_is_sold,
#                 "product_is_new": item.product_is_new,
#                 "product_image_link": image.image.url, #image_urls[0]
#                 "product_image_alt": item.product_description,
#                 "product_price": str(item.product_price), #'{:20,.02f}'.format(item.product_price), str()?
#                 # "alternate_image_urls_list": img_urls,
#
#             }
#         # product_details.append(product)
#
#         print(product)
#         return HttpResponse(json.dumps(product, indent=4), content_type='application/json')
