# Generated by Django 4.1.1 on 2024-06-24 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AppJuegos', '0003_alter_user_managers_historicaluser_date_joined_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='name',
            field=models.CharField(choices=[('Tragamonedas', 'Tragamonedas'), ('Tragamonedas2', 'Tragamonedas2')], default='Tragamonedas', max_length=50, verbose_name='Nombre'),
        ),
        migrations.AlterField(
            model_name='historicalgame',
            name='name',
            field=models.CharField(choices=[('Tragamonedas', 'Tragamonedas'), ('Tragamonedas2', 'Tragamonedas2')], default='Tragamonedas', max_length=50, verbose_name='Nombre'),
        ),
    ]
