from rest_framework.decorators import api_view
from rest_framework.response import Response
from math import radians, cos, sin, asin, sqrt

from .serializer import rideInfoSerializer
from .models import rideInfo


def haversine_distance(lat1, lon1, lat2, lon2):
    R = 6372.8 # Earth radius in kilometers
    
    # Convert latitudes and longitudes from degrees to radians
    d_lat = radians(lat2 - lat1)
    d_lon = radians(lon2 - lon1)
    lat1 = radians(lat1)
    lat2 = radians(lat2)
    
    # Apply haversine formula
    a = sin(d_lat/2)**2 + cos(lat1)*cos(lat2)*sin(d_lon/2)**2
    c = 2*asin(sqrt(a))
    return R*c

# {"destination": {"lat": 27.6999738, "lng": 85.2890594}, "destinationName": "Kalanki, Kathmandu 44600, Nepal",
#  "origin": {"lat": 27.6931052, "lng": 85.28065389999999}, "originName": "Kalimati, Kathmandu 44600, Nepal",
# }

@api_view(['POST'])
def matchUsers(request):
    data = request.data
    # Get current user's location from request
    user_destination, user_origin = data['destination'], data['origin']

    # Get all users except current user
    all_users = rideInfo.objects.exclude(destination=user_destination, origin=user_origin)
    
    # Calculate distances between current user and all other users
    distances = []
    for user in all_users:
        serializer = rideInfoSerializer(user, many=False)
        data = serializer.data
        print(data)
        distance = haversine_distance(user_origin['lat'], user_origin['lng'], data['origin']['lat'], data['origin']['lng'])
        distances.append((user, distance))
        print("distance = "+ str(distance))
    
    # Sort users by distance
    distances.sort(key=lambda x: x[1])
    print(distances)
    
    # Return the nearest five users
    nearest_users = [rideInfoSerializer(user[0]).data for user in distances[:5]]
    return Response({
        "payload": nearest_users,
        "message": "Five nearest rider in ascending order of distance in KM "
    }, status=200)


