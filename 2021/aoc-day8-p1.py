# Put comma separated input here:
input1 = ""

input1 = input1.split(",")
count = 0
def z(stringy):
    if len(stringy) == 4 or len(stringy) == 2 or len(stringy) == 3 or len(stringy) == 7:
        return True
    else:
        return False
for x in input1:
    y = x.split(" ")
    if z(y[-1]):
        count+=1
    if z(y[-2]):
        count+=1
    if z(y[-3]):
        count+=1
    if z(y[-4]):
        count+=1
print(count)
