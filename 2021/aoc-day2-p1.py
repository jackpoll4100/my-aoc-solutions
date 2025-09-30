# Put csv input here:
input = ""

x = input.split(',')
hor = 0
vert = 0

for y in x:
    if y[0] == 'u':
        vert -= int(y[-1])
    elif y[0] == 'd':
        vert += int(y[-1])
    else:
        hor += int(y[-1])
    print("hor: " + str(hor))
    print("vert: " + str(vert))

print(hor*vert)
