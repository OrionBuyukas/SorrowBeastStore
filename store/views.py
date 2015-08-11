from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from models import *
import json
# Create your views here.

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

    product_list = Product.objects.all()
    products = []
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
def item_details(request):
    #change method to GET to allow bookmarking?

    if request.POST:
        print("details!")
        item = Product.objects.filter(pk=request.POST["productId"])[0]
        images = Image.objects.filter( item.product.id=request.POST["productId"])
        print(item)
        product_details = []

        for image in images:
            image = {
                "alt": item.description,
                "src": image.image.url,

            }
        product_details.append(image)
        #todo: make request for all item details in product.
        #todo: fetch all product images, large format

        product = {
            "product_name": item.product_name,
            "productId": item.id,
            "product_description": item.product_description,
            "product_add_date": item.product_add_date.strftime("%A %d. %B %Y"),
            "product_is_sold": item.product_is_sold,
            "product_is_new": item.product_is_new,
            "product_image_link": item.product_image_link,
            "product_price": item.product_price, #'{:20,.02f}'.format(item.product_price),

        }
        product_details.append(product)
    return HttpResponse(json.dumps(product_details, indent=4), content_type='application/json')

@csrf_exempt
def photo_loader(request):
    # if request.POST:
    #     image = request.FILES['file']
    #     path = '/media/uploads/' + image.name
    #     with open("SorrowBeast" + path, 'wb+') as destination:
    #         for chunk in image.chunks():
    #             destination.write(chunk)
    #         print(destination)

    print("posting")
    img = Image()
    img.image = request.FILES['file']
    # img.title
    img.save()
    return redirect('index.html')




#
# def img_upload(request):
#     if request.POST:
#         print(request.FILES)
#         user_id = request.user.id
#         user = get_object_or_404(User, id=user_id)
#         dancer = user.dancer
#         image = request.FILES['file']
#         path = '/static/uploads/'+ str(user_id) + "_" + image.name
#         with open("dancematch_app" + path, 'wb+') as destination:
#             for chunk in image.chunks():
#                 destination.write(chunk)
#             print(destination)



        # dancer.img_path = path
        # dancer.save()
        #
        # return HttpResponseRedirect("/profile_ajax/")

#add to cart
# product.user = request.user



# def img_upload(request):
#     if request.POST:
#         print(request.FILES)
#         # user_id = request.user.id
#         # user = get_object_or_404(User, id=user_id)
# items = Product.objects.filter(id= request.POST["productId"])
#         # user = user.
#         image = request.FILES['file']
#         # path = '/static/uploads/'+ str(user_id) + "_" + image.name   # + "_" + images.length()
#         path = "/static/uploads/"
#         with open(""
#                   ""
#                   "store" + path, 'wb+') as destination:
#             for chunk in image.chunks():
#                 destination.write(chunk)
#             print(destination)
#         .img_path = path
#         image.save()
#
#
#       #display images
#     # images = Image.objects.filter( requestPost[product.id])
#
#
#         return HttpResponse("/image_loader/")