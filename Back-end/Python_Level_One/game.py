import random
digits = list(range(10))
random.shuffle(digits)
theDigits = digits[:3]
print(theDigits)

def convert(guessy):

    #Adding inputs to a list
    guesslist = []
    for i in guessy:
        guesslist += i

    #Converting all strings in list to integers
    stringList = [int(i) for i in guesslist]

    return stringList



#Comparing
def main(inp,ai):
    for index in range(digits_length):
        if set(inp).intersection(ai):
            if inp == ai:
                return "MATCH"



            elif inp[index] != ai[index]:
                return "CLOSE"


        else:
            return "NOPE"




second = theDigits
digits_length = 3

x=1
while x <2:
    guess = input("What is your guess? ")
    first = convert(guess)
    convert(guess)
    print(main(first,second))
    if main(first,second) == "MATCH":
        x=10










#
# def checkNumber(inp,ai):
#
#         for index in range(digits_length):
#             if set(inp).intersection(ai):
#                 if inp[index] == ai[index]:
#                     return "you have guessed a correct number in the correct position"
#                     x = 4
#                     break
#
#                 elif inp[index] != ai[index]:
#                     return "you have guessed a correct number in the WRONG position"
#                     break
#
#             else:
#                 return "You haven't guessed any of the numbers correctly"
#                 break
#
#
# checkNumber(stringList,theDigits)



# for nums in stringList:
#     for guessed in theDigits:
#         if nums in stringList == len(theDigits):
#             print("Found")

# if stringList == theDigits:
#    print("correct")
# else:
#     print("Wrong")






#
