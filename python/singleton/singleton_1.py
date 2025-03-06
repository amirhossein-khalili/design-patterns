
"""
=====================================================================
🌟 Python Singleton Example 🌟
---------------------------------------------------------------------
📝 Explain: This is one of the ways to implement a singleton in Python.
In this method, we check if an instance of the class does not exist,
we create it, if it does exist, we do not create a new instance and 
return the same.

🚀 Purpose: Ensure only one instance of a class exists.
=====================================================================
"""


#=========================
#	  IMPLEMENTATION
#=========================

class Singleton:
    _instance = None 

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance
    

#=========================
#	       USAGE
#=========================
    
A = Singleton() 
B = Singleton()   
print(id(A))
print(id(B))