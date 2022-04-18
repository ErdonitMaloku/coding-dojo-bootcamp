using System;

namespace singly_linked_lists
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
            SLL SinglyLinkedList = new SLL();
            SinglyLinkedList.AddFront(15);
            SinglyLinkedList.AddFront(20);
            SinglyLinkedList.AddFront(5);
            SinglyLinkedList.AddFront(25);

            //SinglyLinkedList.RemoveFront();
            SinglyLinkedList.Display();
            System.Console.WriteLine(SinglyLinkedList.Contains(2));
            System.Console.WriteLine("Length of list is: " + SinglyLinkedList.Length());
            System.Console.WriteLine("Max value is: " + SinglyLinkedList.Max());
            System.Console.WriteLine("Min value is: " + SinglyLinkedList.Min());
            System.Console.WriteLine("Average of list values is: " + SinglyLinkedList.Average());


        }
    }
}
