"""
=====================================================================
🌟 Python Proxy Example 🌟
---------------------------------------------------------------------
📝 Explain: Proxy

🚀 Purpose: It is suitable for when we want our client to not have direct access to our component or service and some processing to be done before the user has access.
=====================================================================
"""

# =========================
# 	  IMPLEMENTATION
# =========================
import time
from abc import abstractmethod


class AbstractServer:
    @abstractmethod
    def recieve(self):
        pass


class Server(AbstractServer):

    def recieve(self):
        print("proccess started")
        time.sleep(1)
        print("proccess done")


class LogProxy:

    def __init__(self, server):
        self._server = server

    def recieve(self):
        print("this is logging service that logs the requests befor main service")
        self._server.recieve()


# =========================
# 	       USAGE
# =========================


def cleint_server(server, proxy):
    s = server()
    p = proxy(s)
    p.recieve()


cleint_server(Server, LogProxy)
