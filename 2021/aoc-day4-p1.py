import re

# Put comma separated input here:
callouts=""
callouts = callouts.split(',')

# Put comma separated input here:
boards = ""

pattern = re.compile(r'(,){2,}')
boards = re.sub(pattern, ',', boards)
boards = boards.split(',')
boardMatrix = []
tempBoard = []
tempRow = []
count = 0
for x in boards:
    tempRow.append(x)
    count += 1
    if count%5==0:
        tempBoard.append(tempRow)
        tempRow = []
    if count%25==0:
        count = 0
        boardMatrix.append(tempBoard)
        tempBoard = []
winningBoard = []
leadingSet = []
breakOut = False
for y in callouts:
    leadingSet.append(y)
    for z in boardMatrix:
        i = 0
        while i < 5:
            check =  all(item in leadingSet for item in [z[0][i], z[1][i], z[2][i], z[3][i], z[4][i]])
            if check:
                winningBoard = z
                breakOut = True
                break
            i += 1
        for a in z:
            check =  all(item in leadingSet for item in a)
            if check:
                winningBoard = z
                breakOut = True
                break
        if breakOut:
            break
    if breakOut:
        break
print(winningBoard)
print(leadingSet)
sum = 0
for b in winningBoard:
    for c in b:
        if c not in leadingSet:
            sum += int(c)
print(sum*int(leadingSet[-1]))
