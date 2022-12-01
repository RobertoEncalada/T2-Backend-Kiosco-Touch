# Generated by Django 4.1.1 on 2022-11-30 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AppJuegos', '0008_historicalmatch_award_historicalmatch_win_match_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='historicalprobabilidad',
            old_name='porcent_win',
            new_name='percent_win',
        ),
        migrations.RenameField(
            model_name='probabilidad',
            old_name='porcent_win',
            new_name='percent_win',
        ),
        migrations.AlterField(
            model_name='historicalstyles',
            name='description_winner',
            field=models.CharField(default='HAS GANADO!', max_length=200, null=True, verbose_name='descripcion ganador juego'),
        ),
        migrations.AlterField(
            model_name='historicalstyles',
            name='title_winner',
            field=models.CharField(default='JUEGA OTRA VEZ!', max_length=150, null=True, verbose_name='titulo del ganador'),
        ),
        migrations.AlterField(
            model_name='styles',
            name='description_winner',
            field=models.CharField(default='HAS GANADO!', max_length=200, null=True, verbose_name='descripcion ganador juego'),
        ),
        migrations.AlterField(
            model_name='styles',
            name='title_winner',
            field=models.CharField(default='JUEGA OTRA VEZ!', max_length=150, null=True, verbose_name='titulo del ganador'),
        ),
    ]
