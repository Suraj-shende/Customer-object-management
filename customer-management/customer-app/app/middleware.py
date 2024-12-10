
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.http import JsonResponse

class JWTValidationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith('/api/') and not request.path.endswith('/token/'):
            try:
                auth = JWTAuthentication()
                auth.authenticate(request)
            except AuthenticationFailed as e:
                return JsonResponse({'error': str(e)}, status=401)
        return self.get_response(request)
