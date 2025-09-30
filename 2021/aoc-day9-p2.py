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
            bs.append([int(map1[x][y]), x, y, 1])

explored = []
def neighborFinder(x, y):
    sumN = 0
    neighbors = []
    if x != 0 and int(map1[x-1][y]) > int(map1[x][y]) and int(map1[x-1][y]) != 9 and [x-1, y] not in explored:
        explored.append([x-1, y])
        sumN += 1+neighborFinder(x-1, y)
    if y != 0 and int(map1[x][y-1]) > int(map1[x][y]) and int(map1[x][y-1]) != 9 and [x, y-1] not in explored:
        explored.append([x, y-1])
        sumN += 1+neighborFinder(x, y-1)
    if x+1 != len(map1) and int(map1[x+1][y]) > int(map1[x][y]) and int(map1[x+1][y]) != 9 and [x+1, y] not in explored:
        explored.append([x+1, y])
        sumN += 1+neighborFinder(x+1, y)
    if y+1 != len(map1[x]) and int(map1[x][y+1]) > int(map1[x][y]) and int(map1[x][y+1]) != 9 and [x, y+1] not in explored:
        explored.append([x, y+1])
        sumN += 1+neighborFinder(x, y+1)
    return sumN
for x in range(len(bs)):
    bs[x][3] += neighborFinder(bs[x][1], bs[x][2])
    if bs[x][3] > 90:
        print(bs[x])
