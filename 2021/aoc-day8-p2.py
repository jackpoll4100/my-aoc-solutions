# Put comma separated input here:
input1 = ""

input1 = input1.split(",")
count = 0
globalSol = 0
for x in input1:
    z = x.split(" ")
    i = z[0:10]
    num0 = []
    num1 = []
    num2 = []
    num3 = []
    num4 = []
    num5 = []
    num6 = []
    num7 = []
    num8 = []
    num9 = []
    for y in i:
        if len(y) == 2 and len(num1) == 0:
            num1.append(y[0])
            num1.append(y[1])
        if len(y) == 3 and len(num7) == 0:
            num7.append(y[0])
            num7.append(y[1])
            num7.append(y[2])
        if len(y) == 4 and len(num4) == 0:
            num4.append(y[0])
            num4.append(y[1])
            num4.append(y[2])
            num4.append(y[3])
        if len(y) == 7 and len(num8) == 0:
            num8.append(y[0])
            num8.append(y[1])
            num8.append(y[2])
            num8.append(y[3])
            num8.append(y[4])
            num8.append(y[5])
            num8.append(y[6])
    for y in i:
        if len(y) == 5:
            count1 = 0;
            count4 = 0
            for q in y:
                if q in num1:
                    count1 += 1
                if q in num4:
                    count4 += 1
            if count1 == 2 and len(num3) == 0:
                num3.append(y[0])
                num3.append(y[1])
                num3.append(y[2])
                num3.append(y[3])
                num3.append(y[4])
            elif count4 == 3 and count1 != 2 and len(num5) == 0:
                num5.append(y[0])
                num5.append(y[1])
                num5.append(y[2])
                num5.append(y[3])
                num5.append(y[4])
            elif count4 == 2 and len(num2) == 0:
                num2.append(y[0])
                num2.append(y[1])
                num2.append(y[2])
                num2.append(y[3])
                num2.append(y[4])
        if len(y) == 6:
            count1 = 0;
            count4 = 0
            for q in y:
                if q in num1:
                    count1 += 1
                if q in num4:
                    count4 += 1
            if count1 < 2 and len(num6) == 0:
                num6.append(y[0])
                num6.append(y[1])
                num6.append(y[2])
                num6.append(y[3])
                num6.append(y[4])
                num6.append(y[5])
            elif count4 == 3 and count1 == 2 and len(num0) == 0:
                num0.append(y[0])
                num0.append(y[1])
                num0.append(y[2])
                num0.append(y[3])
                num0.append(y[4])
                num0.append(y[5])
            elif count4 == 4 and len(num9) == 0:
                num9.append(y[0])
                num9.append(y[1])
                num9.append(y[2])
                num9.append(y[3])
                num9.append(y[4])
                num9.append(y[5])
    numArr = [num0,num1,num2,num3,num4,num5,num6,num7,num8,num9]
    i = [z[-4], z[-3], z[-2], z[-1]]
    solution = 0
    counter = 3
    for y in i:
        for q in range(10):
            if len(y) == 4:
                solution += 4*(10**counter)
                counter -= 1
                break
            elif len(y) == 2:
                solution += 1*(10**counter)
                counter -= 1
                break
            elif len(y) == 3:
                solution += 7*(10**counter)
                counter -= 1
                break
            elif len(y) == 7:
                solution += 8*(10**counter)
                counter -= 1
                break
            elif set(y).issubset(numArr[q]):
                if not q == 8:
                    solution += q*(10**counter)
                    counter -= 1
                    break
    globalSol += solution
print(globalSol)
