# Put comma separated input here:
fish = ""

fish = fish.split(",");

chumBuckets = [0,0,0,0,0,0,0,0,0]
for z in fish:
    chumBuckets[int(z)] += 1
for x in range(256):
    birthers = chumBuckets[0]
    for i in range(9):
        if i > 0:
            chumBuckets[i-1] += chumBuckets[i]
            chumBuckets[i] = 0
    chumBuckets[6] += birthers
    chumBuckets[0] -= birthers
    chumBuckets[8] += birthers
print(chumBuckets[0]+chumBuckets[1]+chumBuckets[2]+chumBuckets[3]+chumBuckets[4]+chumBuckets[5]+chumBuckets[6]+chumBuckets[7]+chumBuckets[8])
