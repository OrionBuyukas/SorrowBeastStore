from django.db import models
from django.contrib.auth.models import User, check_password


# class StoreOwner(models.model):
#     # set up permissions
#     # extends authuser?
#     is_store_owner = models.BooleanField(default=True)
#
#


# Create your models here.
class Customer(models.Model):
    user = models.ForeignKey(User)
    # photo = models.ImageField(upload_to='uploads')
    photo_link = models.CharField(max_length=250, default="/static/images/wolfin_1.jpg")

    def __str__(self):

        return self.user.username


class Address(models.Model):

    user = models.ForeignKey(Customer)
    street = models.CharField(max_length=250)
    city = models.CharField(max_length=25)
    state = models.CharField(max_length=25)
    zip = models.IntegerField()
    is_billing_address = models.BooleanField(default=True)
    is_shipping_address = models.BooleanField(default=True)


    def __str__(self):

        return "user:" + str(self.user) + "address id: " + str(self.id)

class PaymentInfo(models.Model):
    user = models.ForeignKey(Customer)
    payment_info = models.TextField()


class Order(models.Model):
    user = models.ForeignKey(Customer)
    address = models.ForeignKey(Address)
    # billing_address = models.ForeignKey(Address)
    payment_info = models.ForeignKey(PaymentInfo)
    order_list = models.TextField()
    is_fulfilled = models.BooleanField(default=False)
    cart_total = models.DecimalField(max_digits=15, decimal_places=2)
    is_gift = models.BooleanField(default=False)


# todo: add product keywords string, make description searchable
class Product(models.Model):
    product_name = models.CharField(max_length=255)
    product_description = models.TextField()
    product_price = models.DecimalField(max_digits=10, decimal_places=2, default=1.00)
    product_is_sold = models.BooleanField(default=False)
    product_is_new = models.BooleanField(default=True)
    product_add_date = models.DateTimeField(auto_now_add=True)
    product_image_link = models.CharField(max_length=255, default="/static/images/wolfin_1.jpg")

    def __str__(self):
        return self.product_name


class Image(models.Model):
    product = models.ForeignKey(Product)

#     title = models.CharField(max_length=600)
#     description = models.CharField(max_length=600)
    image = models.ImageField(upload_to='static/images') #uploads   /static/images

    def __str__(self):
        return self.product.product_name + "image"


class UserImage(models.Model):
    customer = models.ForeignKey(Customer)

#     title = models.CharField(max_length=600)
#     description = models.CharField(max_length=600)
    image = models.ImageField(upload_to='/static/images') #uploads

    def __str__(self):
        return self.product.product_name + "image"





class Auction(models.Model):
    #has product
    pass

class Bid(models.Model):
    #has auction, user, ammount, increment?

    pass



# class AuctionType(models.Model):
#
#     #make foreign key to a class of each auction type? keep boolean?
#
#     dutch = models.BooleanField(default=False)
#     blind = models.BooleanField(default=False)
#     standard = models.BooleanField(default=False)
#
#     pass
