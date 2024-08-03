def sum_dict_values(dictionary):
  """Sums up all the values in a dictionary.

  Args:
    dictionary: The dictionary to sum.

  Returns:
    The sum of all values in the dictionary.
  """

  return sum(dictionary.values())


my_dict = {'a': 10, 'b': 20, 'c': 30}
total_sum = sum_dict_values(my_dict)
print(total_sum)  