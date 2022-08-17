from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = 'index.html'

class CoursesView(TemplateView):
    template_name = 'coures.html'