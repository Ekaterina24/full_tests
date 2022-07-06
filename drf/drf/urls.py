from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter

from tests.views import *

router = DefaultRouter()

router.register(r'categories', CategoryViewSet, basename='categories')
router.register(r'tests', TestViewSet, basename='tests')
router.register(r'questions', QuestionViewSet)
router.register(r'answers', AnswerViewSet)
router.register(r'tests_relation_view', UserTestsRelationAllView, basename='relation')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('social_django.urls', namespace='social')),
    path('auth/', auth),
    path('tests_relation_q/', UserTestsRelationQView.as_view()),
    re_path('(?P<lang>(ru|en))/', include(router.urls)),
    path('category-create/', CategoryCreateViewSet.as_view()),
    path('test-create/', TestCreateViewSet.as_view()),
    path('question-create/', QuestionCreateViewSet.as_view()),
]

urlpatterns += router.urls

