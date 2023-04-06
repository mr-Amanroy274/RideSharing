from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view 

from django.conf import settings
from twilio.rest import Client
from random import randint


from .serializer import UserInfoSerializer, loginSerializer
from .models import UserInfo, otp



class authenticateUser(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = loginSerializer(data=data)
            if serializer.is_valid():
                phoneNumber = serializer.validated_data['phoneNumber']
                try:
                    user = UserInfo.objects.get(phoneNumber=phoneNumber)
                except UserInfo.DoesNotExist:
                    return Response({
                        "status": 404,
                        "message": "Phone number not found",
                        "paylaod": {},
                    })
                serializer = UserInfoSerializer(user) 
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    'payload': serializer.data
                })
        except Exception as e:
            print(e)
            return Response({
                "message": "Internal server error",
                "payload": {}
            }, status=500)



class sendOTP(APIView):
    def post(self, request):
        try:
            data = request.data
            phoneNumber = data['phoneNumber']
            otp_value = randint(100000, 999999)

            new_otp = otp.objects.create(
                phoneNumber = phoneNumber,
                otp = otp_value
            )

            client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)

            message = client.messages.create(
                body = "Your OTP for ride sharing app is "+ str(otp_value),
                from_ = settings.TWILIO_FROM_NUMBER,
                to = phoneNumber
            )
            return Response({
                "message" :" OTP sent",
                "payload" :{},
                "response": "true",
            },status=200)

        except Exception as e:
            print(e)
            return Response({
                "message": "Something went wrong",
                "payload": {},
                "response": "fasle",
            })


@api_view(['POST'])
def verifyOTP(request):
    try:
        data = request.data
        phoneNumber = data['phoneNumber']
        otp_value = data['otp']

        user = otp.objects.filter(phoneNumber=phoneNumber, otp=otp_value).last()
        if user is None:
            return Response({
                "message": "OTP didnot matched",
                "payload": {},
                "response": "false"
            },status=404)

        return Response({
            "message" : "OTP verified",
            "paylaod" : {},
            "response" :"true",   
        },status=200)
        
    except Exception as e:
        print(e)
        return Response({
            "message": "Something went wrong",
            "payload" : {},
        }, status=400)
