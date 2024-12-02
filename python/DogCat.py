class Animal:
    def speak(self):
        print("Animal speaking")


class Dog(Animal):
    def bark(self):
        print("Dog barking")

    def speak(self):
        print("Dog speaking")


class Cat(Animal):
    def meow(self):
        print("Cat meowing")

    def speak(self):
        print("Cat speaking")

class DogCat(Cat, Dog):
    pass

d = DogCat()
d.speak()
d.bark()
d.meow()