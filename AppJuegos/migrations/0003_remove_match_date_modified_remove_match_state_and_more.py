# Generated by Django 4.1.1 on 2022-12-31 03:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('AppJuegos', '0002_admin'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='match',
            name='date_modified',
        ),
        migrations.RemoveField(
            model_name='match',
            name='state',
        ),
        migrations.AlterField(
            model_name='match',
            name='award',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='award', to='AppJuegos.award'),
        ),
        migrations.AlterField(
            model_name='match',
            name='ticket',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='match_ticket', to='AppJuegos.ticket'),
        ),
        migrations.DeleteModel(
            name='HistoricalMatch',
        ),
    ]
