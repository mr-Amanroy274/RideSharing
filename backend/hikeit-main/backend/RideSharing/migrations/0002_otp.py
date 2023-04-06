# Generated by Django 4.1.6 on 2023-03-05 12:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('RideSharing', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='otp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phoneNumber', models.CharField(max_length=14)),
                ('otp', models.CharField(max_length=6)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='RideSharing.userinfo')),
            ],
        ),
    ]
