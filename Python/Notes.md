
# Variables:
1. Global Variable : Variables defined outside the function.. we can also use "global" keyword to change the scope of variable.
2. Local Variables: Variables defined inside the function.. Scope is limited within the function only
3. TypeCasting : x=str(3), x=3 print(type(x))
4. cannot write variable name with "-",number and space

# Comments:
1. Single Line Comment -> # This is comment
2. Multi- Line Comment -> # This is Line1 
                          # This is Line2
                          
"""
This is a comment
written in
more than just one line
"""

# Data Types:
1. Int, Float, Complex eg : aj
2. str
3. List- ["a","b"], Tuples - ("a","b","c")
4. range - range(6)
5. dict - {"name":"Tom","age":40}
6. bool - True, False
7. set - {"x","y","z"}
8.  bytearray,memoryview,NoneType,frozenset,bytes


# Casting:
1. x=int(2.8) => returns 2
2. x=int("3") => returns 3
3. x = float("5") => returns 5.0
4. x =str(8.9) => returns "8.9"



# Characters:
1. Escape Character : \ eg : "I am known for \"Automation\" Testing"


# Looping through string
1. No Chars in Pythin . So, it is string of length 1
2. for x in "Dubai" 
3. for x not in "Dubai"


# In Built Method:
1. len - Length.. Eg : len(x)
2. strip() --> removes the whitespaces from the beginning or the end
3. replace("old","new") --> replace() method replaces a string with another string
4. split() --> split() method splits the string into substrings if it finds instances of the separator
5. format() --> This method takes the passed arguments, formats them, and places them in the string where the placeholders {} are. 
Eg: age = 36
txt = "My name is John, and I am {}"
print(txt.format(age)), print(txt.format(quantity,age,color))


Eg: quantity = 3
itemno = 567
price = 49.95
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
print(myorder.format(quantity, itemno, price))

6. count() --> Returns the number of times a specified value occurs in a string
7. find()	--> Searches the string for a specified value and returns the position of where it was found
8. index() --> Searches the string for a specified value and returns the position of where it was found
9. 
 

# Slice 
It Return range of characters using slice. 
1. x="Dubai" print (b[2:5]) --> get chars from position 2 to 5(not included) First Character starts from position 0
2. print(b[:5]) --> get chars from start to position 5(not included) 
3. print(b[2:]) --> get chars from position 2 till end
4. Negative Indexing --> Use negative indexes to start the slice from the end of the string --> print(b[-5:-2])

5. 
