class AppException(Exception):
    def __init__(self, message: str):
        self.message = message
        super().__init__(self.message)


class AuthenticationException(AppException):
    pass


class AuthorizationException(AppException):
    pass


class NotFoundException(AppException):
    pass


class ValidationException(AppException):
    pass