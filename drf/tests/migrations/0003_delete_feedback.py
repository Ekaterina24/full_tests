# Generated by Django 4.0.4 on 2022-05-09 19:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tests', '0002_test_owner_delete_useranswers'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Feedback',
        ),
    ]
