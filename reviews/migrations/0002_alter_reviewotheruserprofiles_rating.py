# Generated by Django 3.2.23 on 2023-11-30 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reviewotheruserprofiles',
            name='rating',
            field=models.IntegerField(null=True),
        ),
    ]
