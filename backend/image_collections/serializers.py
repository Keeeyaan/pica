from rest_framework import serializers
from .models import ImagePost


class ImagePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagePost
        fields = ["id", "title", "content", "created_date"]
