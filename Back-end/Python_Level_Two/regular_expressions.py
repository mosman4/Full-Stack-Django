import re


def multi_finder(patterns,phrase):

    for pat in patterns:
        print("Searching for {}".format(pat))
        print(re.findall(pat,phrase))
        print("\n")

thePattern = "we ds wed sdsf wee afa refe assa wefew ddsf ref sdfs"
thePhrase = ["we+"]
multi_finder(thePhrase,thePattern)













# lists = ["first","second"]
# text = "When was the second time you mass"
#
# for items in lists:
#     print("This list contains:" + items)
#     if re.search(items,text):
#         print(re.search(items,text).start())
#     else:
#         print("Not found")
