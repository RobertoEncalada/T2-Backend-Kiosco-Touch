from django.contrib import admin
from django.urls import path, include



from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('admin/', admin.site.urls),
    path('auth/', include('AppJuegos.api.Auth.AuthUrls')),
    path('api/', include('AppJuegos.api.User.UserUrl')),
    path('api/', include('AppJuegos.api.Permission.PermissionUrl')),
    path('api/', include('AppJuegos.api.Rol.RolUrl')),
    path('api/', include('AppJuegos.api.Award.AwardUrl')),
    path('api/', include('AppJuegos.api.ImagenesJuegos.ImagenesJuegosUrl')),
    path('api/', include('AppJuegos.api.Client.ClientUrl')),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
