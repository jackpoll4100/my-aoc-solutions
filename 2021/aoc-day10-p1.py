# Put comma separated input here:
syntax = ""

syntax = syntax.split(',')
baddieSum = 0
for line in syntax:
    dlStack = []
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
                break
print(baddieSum)
