"""
=====================================================================
🌟 Python Singleton Example 🌟
---------------------------------------------------------------------
📝 Explain:  This is one way to implement a singleton in Python.
In this method, we consider the get instance method and if the user 
calls this method, we return that instance. In that case, we also 
check the uniqueness of the instance.

🚀 Purpose: Ensure only one instance of a class exists.
=====================================================================
"""

#=========================
#	  IMPLEMENTATION
#=========================

class Singleton :
    _instance = None 
    
    def __init__ (self):
        raise RuntimeError("please use get_instance for getting instance of this class instead of create it directly  ")
    
    @classmethod
    def get_instance(cls):
        if cls._instance is None : 
            cls.instance = cls.__new__(cls)
        return cls._instance 
    
    
#=========================
#	       USAGE
#=========================

A = Singleton.get_instance() 
B = Singleton.get_instance()   
print(id(A))
print(id(B))