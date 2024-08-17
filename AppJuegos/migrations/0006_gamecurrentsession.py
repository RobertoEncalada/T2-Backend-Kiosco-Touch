# Generated by Django 4.1.1 on 2024-06-26 22:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('AppJuegos', '0005_alter_game_name_alter_historicalgame_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='GameCurrentSession',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('kiosko_numero', models.CharField(max_length=100)),
                ('game_id', models.CharField(max_length=100)),
                ('gano', models.BooleanField(blank=True, null=True)),
                ('fecha_hora_startgame', models.DateTimeField()),
                ('fecha_hora_finalgame', models.DateTimeField(blank=True, null=True)),
                ('award_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='AppJuegos.award')),
                ('ticket_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AppJuegos.ticket')),
            ],
            options={
                'verbose_name': 'Partida en Curso',
                'verbose_name_plural': 'Partidas en Curso',
                'ordering': ['id'],
            },
        ),
    ]
