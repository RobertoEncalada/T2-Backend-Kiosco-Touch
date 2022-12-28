# Generated by Django 4.1 on 2022-09-02 18:46

from django.db import migrations
from django.contrib.auth.hashers import make_password
from datetime import date




class Migration(migrations.Migration):

    dependencies = [
        ('AppJuegos', '0001_initial'),
    ]

    def insert_data(apps, schema_editor):
        Permission = apps.get_model('AppJuegos', 'Permission')
        Rol = apps.get_model('AppJuegos', 'Rol')
        User = apps.get_model('AppJuegos', 'User')
        RolPermission = apps.get_model('AppJuegos', 'RolPermission')
        Game = apps.get_model('AppJuegos', 'Game')
        Styles = apps.get_model('AppJuegos', 'Styles')
        Publicity = apps.get_model('AppJuegos', 'Publicity')
        PG = apps.get_model('AppJuegos', 'Publicity_game')
        TicketConfig = apps.get_model('AppJuegos', 'TicketConfiguration')

		# ==================================================================================================================
		# Client permissions
        
        client_create_permission = Permission(name='Crear Cliente')
        client_view_permission = Permission(name='Ver Cliente')
        client_edit_permission = Permission(name='Editar Cliente')
        client_delete_permission = Permission(name='Eliminar Cliente')

        # ==================================================================================================================
		# Award permissions

        award_create_permission = Permission(name='Crear Premio')
        award_view_permission = Permission(name='Ver Premio')
        award_edit_permission = Permission(name='Editar Premio')
        award_delete_permission = Permission(name='Eliminar Premio')

		# ==================================================================================================================
        # Ticket permissions

        ticket_create_permission = Permission(name='Crear Ticket')
        ticket_view_permission = Permission(name='Ver Ticket')
        ticket_edit_permission = Permission(name='Editar Diseño del Ticket')
        ticket_delete_permission = Permission(name='Eliminar Ticket')
        ticket_print_permission = Permission(name='Imprimir Ticket')

        # ==================================================================================================================
        # AwardCondition permissions

        award_condition_create_permission = Permission(name='Crear Condición de Premio')
        award_condition_view_permission = Permission(name='Ver Condición de Premio')
        award_condition_edit_permission = Permission(name='Editar Condición de Premio')
        award_condition_delete_permission = Permission(name='Eliminar Condición de Premio')

        game_date_permission = Permission(name='Modificar Fecha del Juego')
        game_publicity_permission = Permission(name='Modificar Publicidad del Juego')
        game_savescreen_permission = Permission(name='Modificar Salvapantallas del Juego')
        game_scanner_permission = Permission(name='Modificar Presentación de Escaneo del Juego')
        game_design_permission = Permission(name='Modificar Diseño del Juego')
        game_winners_permission = Permission(name='Modificar Presentación de Ganadores del Juego')
        game_probability_permission = Permission(name='Modificar Probabilidades del juego')
        

                
        client_create_permission.save()
        client_view_permission.save()
        client_edit_permission.save()
        client_delete_permission.save()

        award_create_permission.save()
        award_view_permission.save()
        award_edit_permission.save()
        award_delete_permission.save()

        ticket_create_permission.save()
        ticket_view_permission.save()
        ticket_edit_permission.save()
        ticket_delete_permission.save()
        ticket_print_permission.save()

        award_condition_create_permission.save()
        award_condition_view_permission.save()
        award_condition_edit_permission.save()
        award_condition_delete_permission.save()

        game_date_permission.save()
        game_publicity_permission.save()
        game_savescreen_permission.save()
        game_scanner_permission.save()
        game_design_permission.save()
        game_winners_permission.save()
        game_probability_permission.save()
        
		# ==================================================================================================================
        
        
        admin_rol = Rol(name='Administrador', description='Administrador del sistema')
        admin_rol.save()

        admin_user = User(
            username='admin',
            cedula='0000000000',
            names='Administrador',
            surnames='Sistema',
            email = 'admin@admin.com',
            password=make_password('admin'),
            phone='0000000000',
            sex='M',
            address='Administrador',
            rol= admin_rol
        )
        admin_user.save()

        # Creating a Game

        game_tragamonedas = Game(
            start_date =  "2022-11-08T00:00:00",
            end_date = "2029-12-13T12:12:00",
        )

        game_tragamonedas.save()

        #Create default Styles
        
        default_styles = Styles(
            game_id = Game.objects.all().first(),
            color_text = 'White',
            font_letter ='Arial',
            title_button_screensaver='Click para Jugar'
            
        )
        default_styles.save()

        #Create defaul publicity
        default_publicity_top = Publicity(
            created = date.today()
        )
        default_publicity_bottom = Publicity(
            created = date.today()
        )
        default_publicity_top.save()
        default_publicity_bottom.save()

        #Ticket configuration
        default_ticket_config = TicketConfig()
        default_ticket_config.save()


        
        RolPermission_1 =  RolPermission(rol_id=admin_rol.id, permission_id=client_create_permission.id)
        RolPermission_2 =  RolPermission(rol_id=admin_rol.id, permission_id=client_view_permission.id)
        RolPermission_3 =  RolPermission(rol_id=admin_rol.id, permission_id=client_edit_permission.id)
        RolPermission_4 =  RolPermission(rol_id=admin_rol.id, permission_id=client_delete_permission.id)

        RolPermission_5 =  RolPermission(rol_id=admin_rol.id, permission_id=award_create_permission.id)
        RolPermission_6 =  RolPermission(rol_id=admin_rol.id, permission_id=award_view_permission.id)
        RolPermission_7 =  RolPermission(rol_id=admin_rol.id, permission_id=award_edit_permission.id)
        RolPermission_8 =  RolPermission(rol_id=admin_rol.id, permission_id=award_delete_permission.id)

        RolPermission_9 = RolPermission(rol_id=admin_rol.id, permission_id=ticket_create_permission.id)
        RolPermission_10 = RolPermission(rol_id=admin_rol.id, permission_id=ticket_view_permission.id)
        RolPermission_11 = RolPermission(rol_id=admin_rol.id, permission_id=ticket_edit_permission.id)
        RolPermission_12 = RolPermission(rol_id=admin_rol.id, permission_id=ticket_delete_permission.id)
        RolPermission_13 = RolPermission(rol_id=admin_rol.id, permission_id=ticket_print_permission.id)

        RolPermission_14 = RolPermission(rol_id=admin_rol.id, permission_id=award_condition_create_permission.id)
        RolPermission_15 = RolPermission(rol_id=admin_rol.id, permission_id=award_condition_view_permission.id)
        RolPermission_16 = RolPermission(rol_id=admin_rol.id, permission_id=award_condition_edit_permission.id)
        RolPermission_17 = RolPermission(rol_id=admin_rol.id, permission_id=award_condition_delete_permission.id)

        RolPermission_18 = RolPermission(rol_id=admin_rol.id, permission_id=game_date_permission.id)
        RolPermission_19 = RolPermission(rol_id=admin_rol.id, permission_id=game_publicity_permission.id)
        RolPermission_20 = RolPermission(rol_id=admin_rol.id, permission_id=game_savescreen_permission.id)
        RolPermission_21 = RolPermission(rol_id=admin_rol.id, permission_id=game_scanner_permission.id)
        RolPermission_22 = RolPermission(rol_id=admin_rol.id, permission_id=game_design_permission.id)
        RolPermission_23 = RolPermission(rol_id=admin_rol.id, permission_id=game_winners_permission.id)
        RolPermission_24 = RolPermission(rol_id=admin_rol.id, permission_id=game_probability_permission.id)

		# ==================================================================================================================

        RolPermission_1.save()
        RolPermission_2.save()
        RolPermission_3.save()
        RolPermission_4.save()

        RolPermission_5.save()
        RolPermission_6.save()
        RolPermission_7.save()
        RolPermission_8.save()

        RolPermission_9.save()
        RolPermission_10.save()
        RolPermission_11.save()
        RolPermission_12.save()
        RolPermission_13.save()

        RolPermission_14.save()
        RolPermission_15.save()
        RolPermission_16.save()
        RolPermission_17.save()

        RolPermission_18.save()
        RolPermission_19.save()
        RolPermission_20.save()
        RolPermission_21.save()
        RolPermission_22.save()
        RolPermission_23.save()
        RolPermission_24.save()

		# ==================================================================================================================
    
        PG_1 = PG(None)
        PG_2 = PG(None)
        PG_3 = PG(None)
        PG_4 = PG(None)
        PG_5 = PG(None)
        PG_6 = PG(None)
        PG_7 = PG(None)
        PG_8 = PG(None)
        PG_9 = PG(None)
        PG_10 = PG(None)
        
        PG_1.save()
        PG_2.save()
        PG_3.save()
        PG_4.save()
        PG_5.save()
        PG_6.save()
        PG_7.save()
        PG_8.save()
        PG_9.save()
        PG_10.save()

    operations = [
        migrations.RunPython(insert_data),
    ]
