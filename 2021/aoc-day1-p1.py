# Put csv input here:
x = ""

y = x.split(",")
prev = 0
inc = 0
for val in y:
    if int(val) > prev and prev != 0:
        inc += 1
    prev = int(val)
print(inc)
