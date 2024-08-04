import random

def guessing_game(difficulty):
  if difficulty == "easy":
    range_min, range_max = 1, 10
  elif difficulty == "medium":
    range_min, range_max = 1, 50
  elif difficulty == "hard":
    range_min, range_max = 1, 100
  else:
    print("Invalid difficulty level. Defaulting to medium.")
    range_min, range_max = 1, 50

  number = random.randint(range_min, range_max)
  guess = 0
  attempts = 0

  while guess != number:
    guess = int(input(f"Guess a number between {range_min} and {range_max}: "))
    attempts += 1

    if guess < number:
      print("Too low!")
    elif guess > number:
      print("Too high!")
  
  print(f"Congratulations! You guessed the number in {attempts} attempts.")

difficulty = input("Choose a difficulty level (easy, medium, hard): ").lower()
guessing_game(difficulty)
