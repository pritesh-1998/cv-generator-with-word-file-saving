# Generated by Django 3.2.9 on 2021-12-04 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('create', '0003_alter_resumedata_fname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resumedata',
            name='fname',
            field=models.CharField(blank=True, default='name', max_length=100, null=True),
        ),
    ]