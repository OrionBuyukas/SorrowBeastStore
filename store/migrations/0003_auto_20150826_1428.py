# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_auto_20150813_1215'),
    ]

    operations = [
        migrations.AddField(
            model_name='address',
            name='is_shipping_address',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(upload_to=b'static/images'),
        ),
    ]
