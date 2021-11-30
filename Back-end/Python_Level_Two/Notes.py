class St():
    def __init__(self,author,title,year):
        self.author=author
        self.title=title
        self.year=year

    def __str__(self):
        return "author: {} title: {} year: {}".format(self.author,self.title,self.year)

    def __len__(self):
        return self.year

    def __del__(self):
        print("Fuck you deleting it for")

f = St("Me","Not ur busi",2001)
print(f)
del f


class Animal():
    def __init__(self):
        print("ANIMAL CREATED")

    def whoAmI(self):
        print("ANIMAL")

    def eat(self):
        print("EATING")

#mya = Animal().whoAmI()


class Dog(Animal):

    def __init__(self):
        print("Dog created")
    def bark(self):
        print("Hoe hoe")

# x = Dog()
# x.whoAmI()
# x.eat()
# x.bark()











class Doggy():

    def __init__(self, breed = "BigBig"):
        self.breed = breed


x = Doggy()
#print(x.breed)

class Circle():
    pi = 3.14


    def __init__(self,radius = 1):
        self.radius = radius

    def area(self):
        return self.radius*self.radius*Circle.pi

    def setRadius(self,newR):
        self.radius = newR

mycir = Circle(3)
mycir.setRadius(99)
# print(mycir.area())



# name = "Hello beautiful people"
#
# def greet():
#     name = "Ali"
#     def hello():
#         print("Hello", name)
#     hello()
#
# greet()
