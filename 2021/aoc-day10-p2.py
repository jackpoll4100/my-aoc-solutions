# Put comma separated input here:
syntax = ""

syntax = syntax.split(',')
baddieSum = 0
lineScores = []
for line in syntax:
    dlStack = []
    lineScore = 0
    corruptFlag = False
    for char in line:
        if char in "{[(<":
            dlStack.append(char)
        else:
            top = dlStack.pop()
            if top == "[" and char != "]" or top == "{" and char != "}" or top == "(" and char != ")" or top == "<" and char != ">":
                if char == "]":
                    baddieSum += 57
                if char == ")":
                    baddieSum += 3
                if char == "}":
                    baddieSum += 1197
                if char == ">":
                    baddieSum += 25137
                corruptFlag = True
                break
    while len(dlStack) != 0 and not corruptFlag:
        top = dlStack.pop()
        lineScore *= 5
        if top == "(":
            lineScore += 1
        if top == "[":
            lineScore += 2
        if top == "{":
            lineScore += 3
        if top == "<":
            lineScore += 4
    if lineScore > 0:
        lineScores.append(lineScore)
print(baddieSum)
import statistics
print(statistics.median(lineScores))
