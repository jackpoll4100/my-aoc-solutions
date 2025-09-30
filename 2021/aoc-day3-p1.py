# Put csv input here:
x = ""

y = x.split(",")
hold = [0,0,0,0,0,0,0,0,0,0,0,0]
recs = len(y)
for z in y:
    for a in range(12):
        hold[a] += int(z[a])
gamma = ""
epsilon = ""
for b in hold:
    if b > recs/2:
        gamma += "1"
        epsilon += "0"
    else:
        gamma += "0"
        epsilon += "1"
print("Result: " + str(int(gamma, 2) * int(epsilon, 2)))
