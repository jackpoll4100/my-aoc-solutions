# Put csv input here:
input = ""

x = input.split(',')
hor = 0
vert = 0
aim = 0
for y in x:
    if y[0] == 'u':
        aim -= int(y[-1])
    elif y[0] == 'd':
        aim += int(y[-1])
    else:
        hor += int(y[-1])
        vert += int(y[-1])*aim
    print("hor: " + str(hor))
    print("vert: " + str(vert))

print("answer: " + str(hor*vert))
