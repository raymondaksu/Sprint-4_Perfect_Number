number = int(input('Please enter a number: '))

def perfect_number(x):
    array = list()
    for i in range(1, x):
        if x % i == 0:
            array.append(i)

    if (sum(array) == x):
        print(f'{x} is a perfect number.')
    else:
        print(f'{x} is NOT a perfect number.')

perfect_number(number)