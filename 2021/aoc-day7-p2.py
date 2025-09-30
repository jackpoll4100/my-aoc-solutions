# Put comma separated input here:
crabs = ""

import math
crabs = crabs.split(",")
for x in range(len(crabs)):
    crabs[x] = int(crabs[x])
lca = []
for x in crabs:
    tempLca = []
    for y in crabs:
        sum1 = 0
        for z in range(abs(y-x)):
            sum1+=z+1
        tempLca.append(sum1)
    if sum(tempLca) < sum(lca) or len(lca) == 0:
        lca = tempLca
print(sum(lca))
