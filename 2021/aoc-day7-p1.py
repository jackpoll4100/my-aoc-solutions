# Put comma separated input here:
crabs = ""

crabs = crabs.split(",")
for x in range(len(crabs)):
    crabs[x] = int(crabs[x])
import statistics
average = statistics.median(crabs)
print(average)
fuelCost = 0
for x in crabs:
    fuelCost += abs(average - x)
print(fuelCost)
