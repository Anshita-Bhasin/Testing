## Variables:

1. Global Variable : Variables defined outside the function.. we can also use "global" keyword to change the scope of variable.
2. Local Variables: Variables defined inside the function.. Scope is limited within the function only
3. TypeCasting : x=str(3), x=3 print(type(x))
4. Cannot write variable name with "-",number and space
5. Comments:
6. Single Line Comment -> # This is comment
7. Multi- Line Comment -> # This is Line1 # This is Line2
 """ This is a comment written in more than just one line """

## Data Types:
Int, Float, Complex eg : aj
str
1. List- ["a","b"], Tuples - ("a","b","c")
2. range - range(6)
3. dict - {"name":"Tom","age":40}
4. bool - True, False
5. set - {"x","y","z"}
6. bytearray,memory view,NoneType,frozenset,bytes

## Casting:
8. x=int(2.8) => returns 2
9. x=int("3") => returns 3
10. x = float("5") => returns 5.0
11. x =str(8.9) => returns "8.9"
12. Characters:
13. Escape Character : \ eg : "I am known for "Automation" Testing"

## Looping through string
No Chars in Pythin . So, it is string of length 1

1. for x in "Dubai"
2. for x not in "Dubai"


## In Built Method:
1. len - Length.. Eg : len(x)
2. strip() --> removes the whitespaces from the beginning or the end
3. replace("old","new") --> replace() method replaces a string with another string
4. split() --> split() method splits the string into substrings if it finds instances of the separator
5. format() --> This method takes the passed arguments, formats them, and places them in the string where the placeholders {} are. Eg: age = 36 txt = "My name is John, and I am {}" print(txt.format(age)), print(txt.format(quantity,age,color))
Eg: quantity = 3 itemno = 567 price = 49.95 myorder = "I want to pay {2} dollars for {0} pieces of item {1}." print(myorder.format(quantity, itemno, price))

6. count() --> Returns the number of times a specified value occurs in a string
7. find() --> Searches the string for a specified value and returns the position of where it was found
8. index() --> Searches the string for a specified value and returns the position of where it was found
9. Slice
10. It Return range of characters using slice.

x="Dubai" print (b[2:5]) --> get chars from position 2 to 5(not included) First Character starts from position 0
print(b[:5]) --> get chars from start to position 5(not included)
print(b[2:]) --> get chars from position 2 till end
Negative Indexing --> Use negative indexes to start the slice from the end of the string --> print(b[-5:-2])

## Operators
1. Arithmetic => +, -, /, *, **, //, %
2. Assignment => =, +=, -=, /=, %=, //=, **=, &=, ^=, >>=, <<=,

## Collections
There are 4 collections: List, Tuple, Set and Dictionary

# List: 
Ordered => If we add any item, it will be added in the end of the list
Changeable
Allow Duplicate value => Lists are indexed so it can have items with the same values
Data Type of list is object


 # List In Built Methods:
 1. pop()
2. remove()
3. exend()
4. len()
5. append()
6. insert()
7. del
8. clear()
9. 


2. Tuple
Ordered
Unchangeable
Allow Duplicate Members

3. Set
Not Ordered
Unchangeable
No Duplicate Members allowed

4. Dictionary
Ordered
Changeable
No Duplicate Members allowed
