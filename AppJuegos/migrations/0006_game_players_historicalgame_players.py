# Generated by Django 4.1.1 on 2022-11-19 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("AppJuegos", "0005_game_state_historicalgame_state_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="game",
            name="players",
            field=models.IntegerField(default=0, verbose_name="Jugadores"),
        ),
        migrations.AddField(
            model_name="historicalgame",
            name="players",
            field=models.IntegerField(default=0, verbose_name="Jugadores"),
        ),
    ]
