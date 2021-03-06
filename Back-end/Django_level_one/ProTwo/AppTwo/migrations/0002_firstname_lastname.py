# -*- coding: utf-8 -*-
# Generated by Django 1.11.17 on 2021-09-14 21:42
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('AppTwo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='FirstName',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('First_Name', models.CharField(max_length=265, unique=True)),
                ('topic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AppTwo.Topic')),
            ],
        ),
        migrations.CreateModel(
            name='LastName',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Last_Name', models.CharField(max_length=265, unique=True)),
                ('topic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AppTwo.Topic')),
            ],
        ),
    ]
