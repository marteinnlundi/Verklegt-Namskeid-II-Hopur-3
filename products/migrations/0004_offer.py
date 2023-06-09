# Generated by Django 4.2.1 on 2023-05-08 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_delete_offer'),
    ]

    operations = [
        migrations.CreateModel(
            name='Offer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=100)),
                ('images', models.ImageField(max_length=999, upload_to='product_images')),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
            ],
        ),
    ]
