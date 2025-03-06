"""
====================================================================
🌟 Factory Method Pattern - File Editing Example 🌟
--------------------------------------------------------------------
This script demonstrates the **Factory Method Pattern** in Python.

🔹 **Overview**:
    - `FileFactory (Abstract Class)`: Defines an abstract `make()` method 
      that must be implemented by subclasses.
    - `AbstractFileEditor (Abstract Class)`: Defines a common `edit()` method 
      for all file types.
    - `JsonFile` & `XmlFile (Concrete Factories)`: Implement `make()` to 
      create specific file editor instances.
    - `Json` & `Xml (Concrete Products)`: Implement `edit()` to provide 
      custom editing behavior.

🔹 **How It Works**:
    1️⃣ The client calls `client(file, format)`, passing a filename and format.
    2️⃣ A factory (`JsonFile` or `XmlFile`) is selected based on the format.
    3️⃣ The factory’s `call_edit()` method invokes `make()` to create a 
       corresponding `Json` or `Xml` editor instance.
    4️⃣ The `edit()` method of the editor is called to process the file.

🔹 **Example Usage**:
    ```
    print(client('example.json', 'json'))
    ➡️ Output: "i am editing a json named: example.json"

    print(client('document.xml', 'xml'))
    ➡️ Output: "i am editing a xml named: document.xml"
    ```

🚀 **Purpose**: Demonstrates the Factory Method pattern for file editing.  
====================================================================
"""



#=========================
#	  IMPLEMENTATION
#=========================

from abc import ABC, abstractmethod

class FileFactory(ABC):
    def __init__(self, file):
        self.file = file

    @abstractmethod
    def make(self):
        pass
    
    def call_edit(self):
        product = self.make()
        result = product.edit()
        return result

class AbstractFileEditor(ABC):
    def __init__(self, file):
        self.file = file
    
    @abstractmethod
    def edit(self):
        pass
    
class JsonFile(FileFactory):
    def make(self):
        # Pass the file attribute to the product's constructor
        return Json(self.file)
    
class Json(AbstractFileEditor):
    def __init__(self, file):
        super().__init__(file)
        
    def edit(self):
        # Use self.file within the f-string
        return f'i am editing a json named: {self.file}'
    
class XmlFile(FileFactory):
    def make(self):
        return Xml(self.file)
    
class Xml(AbstractFileEditor):
    def __init__(self, file):
        super().__init__(file)
        
    def edit(self):
        return f'i am editing a xml named: {self.file}'
    
    
#=========================
#	       USAGE
#=========================

def client(file, format):
    formats = {
        "json": JsonFile,
        "xml": XmlFile
    }
    
    result = formats[format](file)
    return result.call_edit()

# Test the implementation:
print(client('amir', 'xml'))
