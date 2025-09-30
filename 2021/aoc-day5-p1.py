# Put input here:
lines = ""

lines = lines.split(';')
list1 = []
for x in lines:
    y = x.split(" -> ")
    y[0] = y[0].split(",")
    y[1] = y[1].split(",")
    if int(y[0][0]) == int(y[1][0]) and int(y[0][1]) > int(y[1][1]):
        temp = y[0][1]
        y[0][1] = y[1][1]
        y[1][1] = temp
    if int(y[0][1]) == int(y[1][1]) and int(y[0][0]) > int(y[1][0]):
        temp = y[0][0]
        y[0][0] = y[1][0]
        y[1][0] = temp
    if int(y[0][0]) == int(y[1][0]) or y[0][1] == y[1][1]:
        list1.append(y)

matrix = [ [ 0 for i in range(1000) ] for j in range(1000) ]
result = []
for z in list1:
    if int(z[0][0]) == int(z[1][0]):
        index = int(z[0][1])-1
        while index < int(z[1][1]):
            matrix[int(z[0][0])-1][index] += 1
            if matrix[int(z[0][0])-1][index] > 1 and [int(z[0][0])-1, index] not in result:
                result.append([int(z[0][0])-1, index])
            index += 1
    else:
        index = int(z[0][0])-1
        while index < int(z[1][0]):
            matrix[index][int(z[1][1])-1] += 1
            if matrix[index][int(z[1][1])-1] > 1 and [index, int(z[1][1])-1] not in result:
                result.append([index, int(z[1][1])-1])
            index += 1
count = 0
alternateCount = 0
string = ""
rangeX = 0
rangeY = 0
for x in matrix:
    rangeY = 0
    for y in x:
        if rangeY < 300 and rangeX < 300 and rangeY > 200 and rangeX > 200:
            string += str(y)
        if y > 1:
            count += 1
        if y > 0:
            alternateCount += y-1
        rangeY += 1
    rangeX += 1
    if rangeX>200 and rangeX<300:
        string += "\n"
print(len(result))
print(count)
print(len(lines))
print(string)
