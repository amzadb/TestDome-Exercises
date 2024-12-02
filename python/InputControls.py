# Here is an example of how to implement two types of 
# user input controls in Python: TextInput and NumericInput
# 
# The NumericInput class inherits from the TextInput class
# and overrides the add() method 
# so that each non-numeric character is ignored. 
# This means that the input variable in the example above can only 
# be used to enter numeric values.
# 
# You can use these two classes to create user interfaces 
# that accept different types of input. 
# For example, you could use a TextInput class to create 
# a text box where users can enter their name, 
# and a NumericInput class to create a text box 
# where users can enter their age.

class TextInput:
    def __init__(self):
        self.value = ""

    def add(self, char):
        self.value += char

    def get_value(self):
        return self.value

class NumericInput(TextInput):
    def add(self, char):
        if char.isdigit():
            super().add(char)

if __name__ == '__main__':
    input = NumericInput()
    input.add("1")
    input.add("a")
    input.add("0")
    print(input.get_value()) 