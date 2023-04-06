from rest_framework import serializers
from .models import UserInfo, rideInfo, riderInfo, vehicleInformation


class UserInfoSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserInfo 
		fields = '__all__'


class loginSerializer(serializers.Serializer):
	phoneNumber = serializers.CharField()


class rideInfoSerializer(serializers.ModelSerializer):
	class Meta:
		model = rideInfo
		fields = '__all__'


class riderInfoSerializer(serializers.ModelSerializer):
	class Meta:
		model = riderInfo
		fields = '__all__'


class vehicleInformationSerializer(serializers.ModelSerializer):
	class Meta:
		model = vehicleInformation
		fields = '__all__'
