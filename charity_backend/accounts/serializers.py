from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from rest_framework.validators import UniqueValidator
from django.contrib.auth import authenticate
from .models import User
from rest_framework.authtoken.models import Token
from django.contrib.auth.password_validation import validate_password


# Serializer to Register User
class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True, validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    # password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = (
            "username",
            "password",
            "email",
            "first_name",
            "last_name",
            "role",
        )

    # def validate(self, attrs):
    #     if attrs["password"] != attrs["password2"]:
    #         raise serializers.ValidationError(
    #             {"password": "Password fields didn't match."}
    #         )
    #     return attrs

    # # def create(self, validated_data):
    # #     user = User.objects.create(
    # #         username=validated_data["username"],
    # #         email=validated_data["email"],
    # #         first_name=validated_data["first_name"],
    # #         last_name=validated_data["last_name"],
    # #     )
    # #     user.set_password(validated_data["password"])
    # #     user.save()
    #     return user


class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=150, required=True)
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = (
            "username",
            "password",
        )

    def validate(self, data):
        username = data.get("username")
        password = data.get("password")

        user = authenticate(username=username, password=password)

        if user:
            data["user"] = user
        else:
            raise serializers.ValidationError("Invalid credentials")

        return data
