# Create a sample list  
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
  
# 1. Indexing and Slicing  
print("Original List:", my_list)  
print("First element:", my_list)  
print("Last element:", my_list[-1])  
print("Slice from index 2 to 5:", my_list[2:5])  
  
# 2. Append and Extend  
my_list.append(11)  
print("After appending 11:", my_list)  
my_list.extend([12, 13, 14])  
print("After extending with [12, 13, 14]:", my_list)  
  
# 3. Insert and Remove  
my_list.insert(3, 3.5)  
print("After inserting 3.5 at index 3:", my_list)  
my_list.remove(5)  
print("After removing 5:", my_list)  
  
# 4. Sort and Reverse  
my_list.sort()  
print("Sorted list:", my_list)  
my_list.reverse()  
print("Reversed list:", my_list)  
  
# 5. Index and Count  
print("Index of 8:", my_list.index(8))  
print("Count of 3:", my_list.count(3))  
  
# 6. Pop and Clear  
popped_element = my_list.pop(3)  
print("Popped element:", popped_element)  
print("After popping:", my_list)  
my_list.clear()  
print("After clearing:", my_list)
