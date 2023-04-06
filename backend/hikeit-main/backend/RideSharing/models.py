from django.db import models
from cloudinary.models import CloudinaryField
#from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.


class UserInfo(models.Model):
	#id= models.AutoField(primary_key=True)
	first_name = models.CharField(max_length=15)
	last_name = models.CharField(max_length=20)
	phoneNumber = models.CharField(max_length=14, unique=True)
	current_address = models.CharField(max_length=50)
	dob = models.CharField(max_length=10)
	user_profile = CloudinaryField()
	isRider = models.BooleanField(default=False, blank=True)
	created_at = models.DateTimeField(auto_now=True)

	USERNAME_FIELD = "phoneNumber"

	def __str__(self):
		return f"Name: {self.first_name} {self.last_name} Phone Number:{self.phoneNumber} and created at {self.created_at}"


class otp(models.Model):
	phoneNumber = models.CharField(max_length=14)
	otp = models.CharField(max_length=6)


class rideInfo(models.Model):
	OPEN = 'O'
	OCCUPIED = 'OC'
	CANCLLED = 'X'
	COMPLETE = 'C'

	STATUS = [(OPEN, 'Open'),
	(OCCUPIED, 'Occupied'),(CANCLLED,'Canclled'), (COMPLETE,'Complete')]

	rideId = models.AutoField(primary_key=True)
	status = models.CharField(default=OPEN, max_length=2, choices=STATUS)
	user_id = models.ForeignKey(UserInfo, on_delete=models.CASCADE)
	destination = models.JSONField(default=dict)
	destinationName = models.CharField(max_length=70, blank=True)
	destinationPlaceId = models.CharField(max_length=50, blank=True)
	origin = models.JSONField(default=dict)
	originName = models.CharField(max_length=70, blank=True)
	originPlaceId = models.CharField(max_length=50, blank=True)
	vehicletype = models.CharField(max_length=10, blank=True)
	timestamp = models.DateTimeField(auto_now=True)


class riderInfo(models.Model):
	user_id = models.ForeignKey(UserInfo, on_delete=models.CASCADE)

	# Riders identification
	citizenship_number = models.CharField(unique=True, max_length=20)
	citizenship_photo_back = models.ImageField(upload_to="citizenshipPictures")
	citizenship_photo_front = models.ImageField(upload_to="citizenshipPictures")
	id_confirmation_photo = models.ImageField(upload_to="idConfirmationPictures")

	timestamp = models.DateTimeField(auto_now=True)



class vehicleInformation(models.Model):
	# vehicle information with billbook

	CAR = "B"
	BIKE = "A"
	VEHICLE_TYPE = [(BIKE, "Bike"), (CAR, "car")]

	user_id = models.ForeignKey(UserInfo, on_delete=models.CASCADE)
	vehicle_type = models.CharField(max_length=1, choices=VEHICLE_TYPE)
	vehicle_number = models.CharField(unique=True, max_length=21)
	vehicle_photo = models.ImageField(upload_to="vehiclePictures")
	billbook_page2 = models.ImageField(upload_to="billbookPictures")
	billbook_page3 = models.ImageField(upload_to="billbookPictures")
	billbook_page9 = models.ImageField(upload_to="billbookPictures")

	# license information
	license_number = models.IntegerField(unique=True)
	license_photo = models.ImageField(upload_to="LicensePictures")

	timestamp = models.DateTimeField(auto_now=True)

class test1(models.Model):
	image = CloudinaryField('image')
