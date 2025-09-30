# Put comma separated input here:
map1 = ""

map1 = map1.split(",")
bs = []
for x in range(len(map1)):
    for y in range(len(map1[x])):
        neighbors = []
        if x != 0:
            neighbors.append(int(map1[x-1][y]))
        if y != 0:
            neighbors.append(int(map1[x][y-1]))
        if x+1 != len(map1):
            neighbors.append(int(map1[x+1][y]))
        if y+1 != len(map1[x]):
            neighbors.append(int(map1[x][y+1]))
        flag = False
        for z in neighbors:
            if z <= int(map1[x][y]):
                flag = True
            if flag == True:
                break
        if not flag:
            bs.append(int(map1[x][y]))
print(sum(bs)+len(bs))
