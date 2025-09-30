# Put comma separated input here:
fish = ""

fish = fish.split(",");
for x in range(80):
    fishLimit = len(fish)
    for y in range(fishLimit):
        if int(fish[y]) > 0:
            fish[y] = int(fish[y])-1
        else:
            fish[y] = 6
            fish.append(8)
print(len(fish))
