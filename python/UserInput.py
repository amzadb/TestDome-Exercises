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
