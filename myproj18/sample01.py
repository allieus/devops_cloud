
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self) -> str:
        return self.name


p1 = Person("Steve", 10)
print(p1)
