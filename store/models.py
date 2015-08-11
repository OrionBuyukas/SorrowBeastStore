from django.db import models


# class StoreOwner(models.model):
#     # set up permissions
#     # extends authuser?
#     is_store_owner = models.BooleanField(default=True)
#
#


# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=255)
    product_description = models.TextField()
    product_price = models.DecimalField(max_digits=10, decimal_places=2, default=1.00)
    product_is_sold = models.BooleanField(default=False)
    product_is_new = models.BooleanField(default=True)
    product_add_date = models.DateTimeField(auto_now_add=True)
    product_image_link = models.CharField(max_length=255)

    def __str__(self):
        return self.product_name


class Image(models.Model):
    product = models.ForeignKey(Product)

#     title = models.CharField(max_length=600)
#     description = models.CharField(max_length=600)
    image = models.ImageField(upload_to='uploads')