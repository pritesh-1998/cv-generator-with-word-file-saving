# Generated by Django 3.2.9 on 2021-12-04 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('create', '0005_auto_20211204_1241'),
    ]

    operations = [
        migrations.AddField(
            model_name='resumedata',
            name='languages',
            field=models.CharField(blank=True, default='English', max_length=200, null=True),
        ),
    ]
