# Put csv input here:
x = ""

y = x.split(",")
prev = 0
inc = 0
z = []
ind = 0
while ind + 2 < len(y):
    z.append(int(y[ind]) + int(y[ind + 1]) + int(y[ind + 2]))
    ind += 1
    
for val in z:
    if int(val) > prev and prev != 0:
        inc += 1
    prev = int(val)
        
print(inc)
