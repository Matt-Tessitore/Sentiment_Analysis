from django.db import models
from django.contrib.postgres.fields import JSONField


class Tweet(models.Model):
    tweet_id = models.CharField(max_length=30, primary_key=True)
    json_blob = JSONField()
    created_at = models.DateTimeField(auto_now_add=True)
    tweet_time = models.DateTimeField()


class TweetSentiment(models.Model):
    SENTIMENT_CHOICES = [
        ('positive', 2),
        ('neutral', 1),
        ('negative', 0)
    ]
    tweet_id = models.OneToOneField(
        Tweet,
        primary_key=True,
        on_delete=models.CASCADE,
    )
    cleaned_tweet = models.TextField()
    frequency = models.IntegerField()
    sentiment = models.IntegerField(choices=SENTIMENT_CHOICES)
