import random

def guessing_game():
    number = random.randint(1, 10)
    guess = 0
    attempts = 0

    while guess != number and attempts < 5:
        guess = int(input("Guess a number between 1 and 10: "))
        attempts += 1

        if guess < number:
            print("Too low!")
        elif guess > number:
            print("Too high!")

    if guess == number:
        print(f"Congratulations! You guessed the number in {attempts} attempts.")
    else:
        print(f"Sorry, you ran out of attempts. The number was {number}.")

guessing_game()

