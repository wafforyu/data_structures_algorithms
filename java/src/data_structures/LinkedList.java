package data_structures;

public class LinkedList {
    public Node head; // head
     public class Node{ //Inner class
        byte data;
        public Node next;
        Node (byte d){ //Node constructor
            data = d;
            next = null; }
    }

    //O(n) TRAVERSE
    public void traverse(){
         Node temp = head;
         do{
             System.out.print(temp.data + " -> ");
             temp = temp.next;
         }while(temp != null);
    }

    //O(1) PUSH
    public void push(byte new_data){
        Node new_node = new Node(new_data); //create new node with new data
        new_node.next = head; //make new node point to head
        head = new_node; //move head to new node
    }

    //O(n) INSERT
    public void insertAfter(Node prev_node, byte new_data){
         if (prev_node == null){ //check if previous node exists
             System.out.println("Previous node is null");
             return;
         }
         Node new_node = new Node(new_data); //create new node with new data
         new_node.next = prev_node.next; //set new node point to previous node
         prev_node.next = new_node; //set previous node point to new node
    }

    //O(n) APPEND
    public void append(byte new_data){
        Node new_node = new Node(new_data); //create new node with new data
        if (head == null){ //check if linkedList is empty
            head = new Node(new_data); //add new node to populate empty linkedList
            return;
        }
        new_node.next = null; //set new node point to null
        Node last = head; //find last node by traversing from the head
        while (last.next != null) last = last.next; //while last pointer is not null---traverse
        last.next = new_node; //change last pointer to new node;
    }
}