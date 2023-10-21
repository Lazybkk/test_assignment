from django.db import models


class Product(models.Model):
    text = models.TextField(blank=False, null=False)
    date_posted = models.DateField(auto_now=True)
