try:
    f = open("simple.txt","w")
    f.write("asasasasasa")
except:
    print("hel")
else:
    f.close()
    print("Done")
