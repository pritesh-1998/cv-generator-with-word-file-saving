# Generated by Django 3.2.9 on 2021-12-04 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('create', '0006_resumedata_languages'),
    ]

    operations = [
        migrations.AddField(
            model_name='resumedata',
            name='score1',
            field=models.CharField(blank=True, default='100', max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='resumedata',
            name='score2',
            field=models.CharField(blank=True, default='100', max_length=100, null=True),
        ),
    ]