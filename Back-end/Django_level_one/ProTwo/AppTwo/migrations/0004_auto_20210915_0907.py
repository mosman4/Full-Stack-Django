# -*- coding: utf-8 -*-
# Generated by Django 1.11.17 on 2021-09-15 09:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AppTwo', '0003_auto_20210914_2229'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.CharField(max_length=254, unique=True),
        ),
    ]