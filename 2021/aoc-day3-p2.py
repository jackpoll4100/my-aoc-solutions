# Put csv input here:
x = ""

y = x.split(",")
c = x.split(",")
b = 0
count = 0
while len(y) > 1 or len(c) > 1:
    count = 0
    for z in y:
        count += int(z[b])
    if count >= len(y)/2:
        y = y if len(y) == 1 else [num for num in y if num[b] == "1"]
    else:
        y = y if len(y) == 1 else [num for num in y if num[b] == "0"]
    count = 0
    for z in c:
        count += int(z[b])
    if count >= len(c)/2:
        c = c if len(c) == 1 else [num for num in c if num[b] == "0"]
    else:
        c = c if len(c) == 1 else [num for num in c if num[b] == "1"]
    b += 1
print("Result: " + str(int(y[0], 2)*int(c[0], 2)))
