# create a node class
class Node:
    def __init__(self, data):
        self.data = data  # create data attribute to contain data
        self.next = None  # create pointer to point to next node

# create the linked list class
class SinglyLinkedList:
    def __init__(self):
        self.head = None # create head attribute for all linked lists

    def push(self, new_data):
        new_node = Node(new_data)  # create the new node
        new_node.next = self.head  # make new node point to old head
        self.head = new_node  # make the new node new head

    def insertAfter(self, position, new_data): # take position and new data
        temp = self.head # set temp as head to start from the beginning of the list
        i = 0
        while i < position: # loop through until the position has been reached
            i += 1
            temp = temp.next # this will allow you to move up the list
        new_node = Node(new_data) # create the new node
        new_node.next = temp.next
        temp.next = new_node

    def traverse(self):
        temp = self.head
        while temp:
            print(str(temp.data) + " ->", end=' ')
            temp = temp.next
