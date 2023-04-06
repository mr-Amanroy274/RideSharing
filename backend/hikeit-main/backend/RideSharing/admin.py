from django.contrib import admin

# Register your models here.

from .models import UserInfo, rideInfo, riderInfo, vehicleInformation, test1

admin.site.register(UserInfo)
admin.site.register(rideInfo)
admin.site.register(riderInfo)
admin.site.register(vehicleInformation)
admin.site.register(test1)
