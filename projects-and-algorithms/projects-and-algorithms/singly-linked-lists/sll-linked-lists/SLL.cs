using System;
public class SLL
{
    public Node Head;


    public void AddFront(int value)
    {
        Node NewNode = new Node(value);
        NewNode.Next = this.Head;
        this.Head = NewNode;

    }


    public void RemoveFront()
    {
        Node NodeToRemove = this.Head;
        this.Head = NodeToRemove.Next;
        NodeToRemove.Next = this.Head;
    }


    public bool Contains(int value)
    {
        var Runner = this.Head;

        while (Runner != null)
        {
            if (Runner.Value == value)
            {
                return true;
            }

            Runner = Runner.Next;
        }

        return false;
    }


    public int? Front()
    {
        if (this.Head != null)
        {
            return this.Head.Value;
        }
        return null;
    }


    public int Length()
    {
        var Runner = this.Head;
        int counter = 0;

        while (Runner != null)
        {
            counter++;
            Runner = Runner.Next;
        }
        return counter;
    }


    public int Max()
    {
        int max = this.Head.Value;
        Node Runner = this.Head;

        while (Runner != null)
        {
            if (Runner.Value > max)
            {
                max = Runner.Value;

            }

            Runner = Runner.Next;
        }
        return max;
    }


    public int Min()
    {
        int min = Int32.MaxValue;
        Node Runner = this.Head;

        while (Runner != null)
        {
            if (Runner.Value < min)
            {
                min = Runner.Value;

            }

            Runner = Runner.Next;
        }
        return min;
    }


    public double Average()
    {
        double Sum = 0.0;
        Node Runner = this.Head;
        int ListLength = Length();

        while (Runner != null)
        {
            Sum += Runner.Value;
            Runner = Runner.Next;
        }
        double Average = Sum / ListLength;

        return Average;
    }

    public string Display()
    {
        string PointersContainer = "";

        var Runner = this.Head;
        while (Runner.Next != null)
        {
            PointersContainer += Runner.Value + " ";

            //Console.Write(Runner.Value + " ");
            Runner = Runner.Next;
        }
        PointersContainer += Runner.Value;
        Console.WriteLine(PointersContainer);

        return PointersContainer;
    }
}