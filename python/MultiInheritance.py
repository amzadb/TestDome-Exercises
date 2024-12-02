class Animal:
    def __init__(self, species):
        self.species = species

    def make_sound(self):
        pass

class Mammal(Animal):
    def __init__(self, species, fur_color):
        super().__init__(species)
        self.fur_color = fur_color

    def give_birth(self):
        print(f"{self.species} gives birth to live young")

    def make_sound(self):
        print(f"{self.species} mammal sound")

class Bird(Animal):
    def __init__(self, species, feather_color):
        super().__init__(species)
        self.feather_color = feather_color

    def lay_eggs(self):
        print(f"{self.species} lays eggs")

    def make_sound(self):
        print(f"{self.species} bird sound")

class Platypus(Mammal, Bird):
    def __init__(self, fur_color, feather_color):
        # Call constructors of both base classes
        Mammal.__init__(self, "Platypus", fur_color)
        Bird.__init__(self, "Platypus", feather_color)

# The make_sound method is not defined in Platypus, relying on the MRO

# Create an instance of Platypus
perry = Platypus(fur_color="Brown", feather_color="Gray")

# Access attributes and methods from both base classes
print(f"Perry the Platypus has fur color: {perry.fur_color}")
print(f"Perry the Platypus has feather color: {perry.feather_color}")

# The make_sound method will use the MRO mechanism
perry.make_sound()  # Calls the method from the Mammal class, as it comes first in the MRO

perry.give_birth()  # Calls the method from the Mammal class
perry.lay_eggs()    # Calls the method from the Bird class