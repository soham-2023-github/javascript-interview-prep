class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (!node || node.value === value) {
      return node;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (!node.left && !node.right) {
        node = null;
        return node;
      }

      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }

      const minValue = this.findMinValue(node.right);
      node.value = minValue;
      node.right = this.removeNode(node.right, minValue);
      return node;
    }
  }

  findMinValue(node) {
    if (node.left) {
      return this.findMinValue(node.left);
    } else {
      return node.value;
    }
  }

  // Additional operations can be implemented, such as traversal algorithms: in-order, pre-order, post-order.

  // In-order traversal
  inOrderTraversal(node) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// Example usage:
const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(8);

tree.inOrderTraversal(tree.root); // Outputs: 3, 5, 8, 10, 15

console.log(tree.search(5)); // Outputs: Node { value: 5, left: Node {...}, right: Node {...} }

tree.remove(5);

tree.inOrderTraversal(tree.root); // Outputs: 3, 8, 10, 15
