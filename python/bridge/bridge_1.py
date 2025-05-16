"""
=====================================================================
🌟 Python Bridge Example 🌟
---------------------------------------------------------------------
📝 Explain: Bridge

🚀 Purpose: This pattern is suitable for when we want to create different states and we divide our component into two parts and thus create different states.
=====================================================================
"""

# =========================
# 	  IMPLEMENTATION
# =========================

import abc


class Shape(abc.ABC):

    def __init__(self, color):
        self.color = color

    def show(self):
        self.color.paint(self.__class__.__name__)


class Circule(Shape):
    pass


class Squere(Shape):
    pass


class Triangle(Shape):
    pass


class Color(abc.ABC):

    def paint(self, shapeName):
        pass


class Blue(Color):
    def paint(self, shapeName):
        print(f" this is blue {shapeName}")


class Black(Color):

    def paint(self, shapeName):
        print(f"this is black {shapeName}")


# =========================
# 	       USAGE
# =========================


bl = Blue()
cir = Circule(bl)
cir.show()
