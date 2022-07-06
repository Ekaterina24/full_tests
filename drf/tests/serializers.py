from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
#     test = serializers.SlugRelatedField(many=True, read_only=True, slug_field='title')

    class Meta:
        model = Category
        fields = ('id', 'title', 'description', 'test')


class CategoryCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title', 'description', 'test')


class TestSerializer(serializers.ModelSerializer):
#     owner = serializers.HiddenField(default=serializers.CurrentUserDefault())
#     questions = serializers.SlugRelatedField(many=True, read_only=True, slug_field='text')

    class Meta:
        model = Test
        fields = ('id', 'title', 'questions', 'readers')


class TestCreateSerializer(serializers.ModelSerializer):
#     owner = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Test
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
#     answer = serializers.SlugRelatedField(many=True, read_only=True, slug_field='text')

    class Meta:
        model = Question
        fields = ('id', 'text', 'answer')


class QuestionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'


class UserTestRelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTestRelation
        fields = ('test', 'like', 'in_bookmarks', 'rate')


