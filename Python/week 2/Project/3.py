import random

def hangman():
  word_list = ["python", "programming", "computer", "science"]
  word = random.choice(word_list)
  word_length = len(word)
  display = "_" * word_length
  guessed_letters = []
  attempts = 6

  while attempts > 0:
    print(display)
    guess = input("Guess a letter: ").lower()

    if guess in guessed_letters:
      print("You already guessed that letter.")
    elif guess in word:
      index = word.find(guess)
      display = display[:index] + guess + display[index + 1:]
    else:
      attempts -= 1
      print(f"Incorrect. You have {attempts} attempts left.")

    guessed_letters.append(guess)

    if "_" not in display:
      print("Congratulations! You win!")
      break

  if "_" in display:
    print("You lose. The word was:", word)

hangman()
