
"""
=====================================================================
🌟 Python facade Example 🌟
---------------------------------------------------------------------
📝 Explain: facade

🚀 Purpose: Makes it easier for the client to use subsystems
=====================================================================
"""


#=========================
#	  IMPLEMENTATION
#=========================

class Memory :
    def save(self):
        print("this save some thing in memory")

class Ssd:
    def save(self):
        print("it save some thing on ssd")

class Cpu:
    def excute(self):
        print("excute some task")

class OsFacade:
    def __init__(self):
        self.memory = Memory()
        self.cpu = Cpu()
        self.ssd = Ssd()    
    
    def start(self):
        self.memory.save()
        self.cpu.excute()
        self.ssd.save()
        
#=========================
#	       USAGE
#=========================
    
def client():
    os_facade = OsFacade()
    os_facade.start()

client()