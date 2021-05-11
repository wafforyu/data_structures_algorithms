from data_structures.linked_list.linked_list_review import SinglyLinkedList

if __name__ == '__main__':
    n = SinglyLinkedList()

    n.push(5)
    n.push(4)
    n.push(3)
    n.push(2)
    n.push(1)

    n.traverse()
    print()
    n.insertAfter(2, 0)

    n.traverse()

