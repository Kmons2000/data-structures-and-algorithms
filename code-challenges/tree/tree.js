'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// TODO: delete me!
let postOrderArr = [];

module.exports = class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);

    if(this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if(node.left === null)
        node.left = newNode;
      else
        this.insertNode(node.left, newNode);
    }
    else
    if(node.right === null)
      node.right = newNode;
    else
      this.insertNode(node.right, newNode);
  }

  getRootNode() {
    return this.root;
  }

  inorder() {
    var inOrderArr = [];
    helper(this.root);
    return inOrderArr;

    function helper(node) {
      if(node !== null)
      {
        helper(node.left);
        inOrderArr.push(node.value);
        helper(node.right);
      }
    }
  }

  preorder() {
    var preOrderArr = [];
    this.visitPreorder(value => preOrderArr.push(value));
    return preOrderArr;
  }

  visitPreorder(callback) {
    visitor(this.root);

    function visitor(node) {
      if (node === null) return;
      callback(node.value);
      visitor(node.left);
      visitor(node.right);
    }
  }

  postorder(node) {
    if(node !== null)
    {
      this.postorder(node.left);
      this.postorder(node.right);
      postOrderArr.push(node.value);
      return postOrderArr;
    }
  }
};
