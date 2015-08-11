# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('product_name', models.CharField(max_length=255)),
                ('product_description', models.TextField()),
                ('product_is_sold', models.BooleanField(default=False)),
                ('product_is_new', models.BooleanField(default=True)),
                ('product_add_date', models.DateTimeField(auto_now_add=True)),
                ('product_image_link', models.CharField(max_length=255)),
            ],
        ),
    ]
