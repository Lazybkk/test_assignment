"""Redirect HTTP requests to another server."""
from mitmproxy import http


def request(flow: http.HTTPFlow) -> None:
    # pretty_host takes the "Host" header of the request into account,
    # which is useful in transparent mode where we usually only have the IP
    # otherwise.
    print("ahihi")
    if flow.request.pretty_host == "example.org":
        flow.request.host = "mitmproxy.org"

# -*- coding: utf-8 -*-
# from mitmproxy.options import Options
# from mitmproxy.proxy.config import ProxyConfig
# from mitmproxy.proxy.server import ProxyServer
# from mitmproxy.tools.dump import DumpMaster
#
#
# class Addon(object):
#
#     def request(self, flow):
#         # do something in response
#         pass
#
#     def response(self, flow):
#         # do something in response
#         pass
#
#
# class ProxyMaster(DumpMaster):
#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)
#
#     def run(self):
#         try:
#             DumpMaster.run(self)
#         except KeyboardInterrupt:
#             self.shutdown()
#
#
# if __name__ == "__main__":
#     options = Options(listen_host='0.0.0.0', listen_port=8080, http2=True)
#     config = ProxyConfig(options)
#     master = ProxyMaster(options, with_termlog=False, with_dumper=False)
#     master.server = ProxyServer(config)
#     master.addons.add(Addon())
#     master.run()
#
