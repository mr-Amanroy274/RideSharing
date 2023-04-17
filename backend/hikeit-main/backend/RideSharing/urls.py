from django.urls import path
from . import views
from .authenticate import authenticateUser, sendOTP, verifyOTP
from .main import matchUsers


urlpatterns = [
	path('createuser/', views.createUser,name='Create_user'),
	#path('', views.index, name='index'),
	path('matchuser',matchUsers),
	path('login', authenticateUser.as_view()),
	path('', views.userInformation.as_view()),# --> this handles all the get post put and delete request
	path('sendotp', sendOTP.as_view()),
	path('verifyotp', verifyOTP),
	#path('users/', views.getUserInfo, name='Get_all_users'),
	path('users/<str:phoneNumber>', views.getOneUserInfo, name='Get_single_user_info'),
	
	path('update/<str:phoneNumber>', views.updateUser, name='Update_user_info'),
	path('delete/<str:phoneNumber>', views.deleteUser, name='delete_user'),

]








urlpatterns = [
	path('createuser/', views.createUser,name='Create_user'),
	#path('', views.index, name='index'),
	path('matchuser',matchUsers),
	path('login', authenticateUser.as_view()),
	path('', views.userInformation.as_view()),# --> this handles all the get post put and delete request
	path('sendotp', sendOTP.as_view()),
	path('verifyotp', verifyOTP),
	#path('users/', views.getUserInfo, name='Get_all_users'),
	path('users/<str:phoneNumber>', views.getOneUserInfo, name='Get_single_user_info'),
	
	path('update/<str:phoneNumber>', views.updateUser, name='Update_user_info'),
	path('delete/<str:phoneNumber>', views.deleteUser, name='delete_user'),

]
