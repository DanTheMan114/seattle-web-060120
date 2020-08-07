class Node {
    constructor(info){
        this.info = info
        this.next = null
    }
}

class Stack {
    constructor(){
        this.head = null
    }

    push(data){
        let nodeToInsert = new Node(data)
        if(this.head === null){
            this.head = nodeToInsert
        } else {
            const traverseList = (node) => {
                if(node.next === null){
                    node.next = nodeToInsert
                } else {
                    traverseList(node.next)
                }
            }
            traverseList(this.head)
        }
    }

    pop(){
        let nodeToReturn = this.head
        this.head = this.head.next
        return nodeToReturn
    }

    peek(){
        return this.head.info
    }
}

stack = new Stack()
stack.push(1)
stack.push(3)
stack.push(5)
stack.push(10)
console.log(stack)
let node = stack.pop()
let node2 = stack.pop()
let node3 = stack.pop()
console.log(stack)
let peekValue = stack.peek()
console.log("Peek does not remove the node.")
console.log(stack)
console.log(node.info, "<- Node 1 ", node2.info, "<- Node 2 ", node3.info, "<- Node 3 popped ", peekValue, "<- node peeked" )