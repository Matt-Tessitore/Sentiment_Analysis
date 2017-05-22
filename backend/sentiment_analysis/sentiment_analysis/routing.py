from channels.routing import route

channel_routing = [
    route("http.request", "services.consumers.http_consumer"),
]