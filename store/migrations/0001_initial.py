# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('street', models.CharField(max_length=250)),
                ('city', models.CharField(max_length=25)),
                ('state', models.CharField(max_length=25)),
                ('zip', models.IntegerField(max_length=10)),
                ('is_billing_address', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Auction',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
            ],
        ),
        migrations.CreateModel(
            name='Bid',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('photo_link', models.CharField(default=b'/static/images/wolfin_1.jpg', max_length=250)),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('image', models.ImageField(upload_to=b'/static/images')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('order_list', models.TextField()),
                ('is_fulfilled', models.BooleanField(default=False)),
                ('cart_total', models.DecimalField(max_digits=15, decimal_places=2)),
                ('is_gift', models.BooleanField(default=False)),
                ('address', models.ForeignKey(to='store.Address')),
            ],
        ),
        migrations.CreateModel(
            name='PaymentInfo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('payment_info', models.TextField()),
                ('user', models.ForeignKey(to='store.Customer')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('product_name', models.CharField(max_length=255)),
                ('product_description', models.TextField()),
                ('product_price', models.DecimalField(default=1.0, max_digits=10, decimal_places=2)),
                ('product_is_sold', models.BooleanField(default=False)),
                ('product_is_new', models.BooleanField(default=True)),
                ('product_add_date', models.DateTimeField(auto_now_add=True)),
                ('product_image_link', models.CharField(default=b'/static/images/wolfin_1.jpg', max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='UserImage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('image', models.ImageField(upload_to=b'/static/images')),
                ('customer', models.ForeignKey(to='store.Customer')),
            ],
        ),
        migrations.AddField(
            model_name='order',
            name='payment_info',
            field=models.ForeignKey(to='store.PaymentInfo'),
        ),
        migrations.AddField(
            model_name='order',
            name='user',
            field=models.ForeignKey(to='store.Customer'),
        ),
        migrations.AddField(
            model_name='image',
            name='product',
            field=models.ForeignKey(to='store.Product'),
        ),
        migrations.AddField(
            model_name='address',
            name='user',
            field=models.ForeignKey(to='store.Customer'),
        ),
    ]
