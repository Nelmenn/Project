from django.shortcuts import render

# blog/views.py
from django.views.generic import ListView
from django.views.generic import DetailView

from .models import Post


class BlogListView(ListView):
    model = Post
    template_name = 'home.html'

class BlogDetailView(DetailView):  # новое
    model = Post
    template_name = 'post_detail.html'
