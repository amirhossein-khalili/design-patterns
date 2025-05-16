"""
=====================================================================
🌟 Python composite Example 🌟
---------------------------------------------------------------------
📝 Explain: composite

🚀 Purpose: When we want to create an object in the form of a tree to make it easier for the user to use it
=====================================================================
"""

# =========================
# 	  IMPLEMENTATION
# =========================

from abc import ABC, abstractmethod


class Being(ABC):
    def add(self, child: "Being"):
        raise NotImplementedError(f"{self.__class__.__name__} is not composite.")

    def remove(self, child: "Being"):
        raise NotImplementedError(f"{self.__class__.__name__} is not composite.")

    def get_childs(self) -> list:
        return []

    def is_composite(self) -> bool:
        return False

    @abstractmethod
    def execute(self):
        pass


class Animal(Being):
    def __init__(self, name):
        self.name = name

    def execute(self):
        print("i am animal")


class Human(Being):

    def __init__(self):
        self.children = []

    def is_composite(self):
        return True

    def add(self, child):
        self.children.append(child)

    def remove(self, child):
        self.children.remove(child)

    def get_childs(self):
        return self.children

    def execute(self):
        print("Human composite")
        for child in self.children:
            child.execute()


class Female(Human):
    def __init__(self, name):
        self.name = name

    def is_composite(self):
        return False

    def execute(self):
        print(f"my name is {self.name}")


class Female(Human):
    def __init__(self, name):
        self.name = name

    def is_composite(self):
        return False

    def execute(self):
        print(f"female name is {self.name}")


class Male(Human):
    def __init__(self, name):
        self.name = name

    def is_composite(self):
        return False

    def execute(self):
        print(f"male name is {self.name}")


# =========================
# 	       USAGE
# =========================


def composite_client():
    human = Human()

    h1 = Male("amir")
    h2 = Male("nader")
    h3 = Female("asma")

    human.add(h1)
    human.add(h2)
    human.add(h3)

    human.execute()


composite_client()
