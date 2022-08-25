mylist=["java","python","javascript","ruby"]

print(mylist)


mylist.append("groovy")
print(mylist)

mylist.append("java")
print(mylist)

#len() => To check the length . Eg : len(listname)
print(len(mylist))

newList=["apple",1,'java',True]
print(newList)

print(type(newList))

list2=list(("java",2,"python"))
print(list2)

# Access List Items
print(list2[2])

# Negative Indexing => When we want to start from the end, -1 for the last item in the list
print(list2[-1])

# Range in list, will start from the range at left and will return till (range at right -1).
# for 2:5, it will return from 2to 4
# If we want to return till end, then no value should be given after :
print(newList[2:5])

print(newList[1:])

print(newList[-4:-1])

# Check if item exist
if 'java' in newList:
    print("Value found in the List")

# Changing the value

mylist[3]="Anshita";
print(mylist)

# Changing the range of items

mylist[1:2]=["India","Dubai","Canada"]
print(mylist)

mylist[1:2]=["India","Dubai",""]
print(mylist)

mylist[1:2]=[]
print(mylist)

# If we insert more items than we replace,
# the new items will be inserted where we specified, and the remaining items will move accordingly

#insert() =>  To insert a new value without replacing the existing value, insert() method is used.

x=[1,2,3]
x.insert(0,0)
print(x)


x[0]=-1
print(x)

# append() => Add value at the end of the list - append()

y =['A','B','C']
y.append('D')
print(y)

# insert() => To add value at specific position without deleting any existing value , use insert(index,value). Eg:

z =["abc","test","number"]
z.insert(1,"sdet")
print(z)


# extend() => To combine 2 ist or list with any iterable objects/collection like tuple, set, dictionary..
# we can use extend()

a =[1,2,3,4]
b=["DXB","DEL","LDN","NYC"]
print(a)
# print((a.extend(b)))  --> does not return
print(a)


# Remove() specific item => Mention the item , which needs to be removed

item=["Emirates","Indigo","Vistara","AirIndia"]
print(item)
item.remove("Indigo")
print(item)


# Pop() => removes at specific index . If no index is provided, then removes the last item

item2=["testing","dev","BA","design"]
print(item2.pop(2))
print(item2)

print(item2.pop())
print(item2)

# del() keyword also works like pop to remove value at specific index but it can also delete the whole list
Example=["CSE","EC","Chemical","Mechanical"]
del Example[0]

print(Example)
del Example

# Clear() => clears the whole list, there is no content but list is still there
Test1=["1",2,"3",4]
print(Test1)
Test1.clear()
print(Test1)

print(len(Test1))

