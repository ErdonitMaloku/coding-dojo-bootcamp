using System;
public class BST
{
    public Node Root;
    public BST()
    {
        this.Root = null;

    }
    public void Add(int value)
    {
        Node NewNode = new Node(value);
        NewNode.Right = this.Root;
        this.Root = NewNode;
    }

    public void Display()
    {
        Node Runner = this.Root;
        while (Runner != null)
        {
            System.Console.WriteLine(Runner.Value);
            Runner = Runner.Right;
        }
    }

    public bool Contains(int value)
    {
        Node Runner = this.Root;
        while (Runner != null)
        {
            if (Runner.Value == value)
            {
                return true;
            }
            Runner = Runner.Right;
        }
        return false;
    }

    public int Max()
    {
        int MaxValue = Int32.MinValue;
        Node Runner = this.Root;
        while (Runner != null)
        {
            if (MaxValue < Runner.Value)
            {
                MaxValue = Runner.Value;
            }
            Runner = Runner.Right;
        }
        return MaxValue;
    }

    public int Min()
    {
        int MinValue = Int32.MaxValue;
        Node Runner = this.Root;
        while (Runner != null)
        {
            if (MinValue < Runner.Value)
            {
                MinValue = Runner.Value;
            }
            Runner = Runner.Right;
        }
        return MinValue;
    }
    public int Size()
    {
        var Runner = this.Root;
        int ListSize = 0;

        while (Runner != null)
        {
            ListSize++;
            Runner = Runner.Right;
        }
        return ListSize;
    }

    public bool IsEmpty()
    {
        Node Runner = this.Root;

        if (Runner == null)
        {
            return true;
        }
        return false;
    }
}