from functools import lru_cache
from tweepy import StreamListener, OAuthHandler, Stream

import settings


@lru_cache()
def get_stream():
    auth = OAuthHandler(settings.CONSUMER_KEY,
                        settings.CONSUMER_SECRET)
    auth.set_access_token(settings.ACCESS_TOKEN,
                          settings.ACCESS_TOKEN_SECRET)

    listener = TwitterStreamListener()

    stream = Stream(auth=auth, listener=listener)
    return stream


class TwitterStreamListener(StreamListener):

    def on_status(self, status):
        print(status.text)



if __name__ == '__main__':
    x = get_stream()
    y = x.filter(track=['python'])
    print(y)
