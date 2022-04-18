using System;

namespace trees
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
            BST BinarySearchTree = new BST();
            BST BinarySearchTree1 = new BST();
            BinarySearchTree.Add(10);
            BinarySearchTree.Add(20);
            BinarySearchTree.Display();
            System.Console.WriteLine(BinarySearchTree.Contains(2));
            System.Console.WriteLine(BinarySearchTree1.IsEmpty());
        }
    }
}
