class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!current.children.has(char)) {
          current.children.set(char, new TrieNode());
        }
        current = current.children.get(char);
      }
      current.isEndOfWord = true;
    }
  
    search(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!current.children.has(char)) {
          return false;
        }
        current = current.children.get(char);
      }
      return current.isEndOfWord;
    }
  
    startsWith(prefix) {
      let current = this.root;
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!current.children.has(char)) {
          return false;
        }
        current = current.children.get(char);
      }
      return true;
    }
  }
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");
const res=trie.search("orange")
console.log(res)

  
//suffix-------------------------------------------------------->

// class TrieNode {
//     constructor() {
//       this.children = new Map();
//       this.isEndOfWord = false;
//     }
//   }
  
//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
//     }
//     insert(word){
//         for(var i=0;i<word.length;i++){
//             var suffix=word.slice(i)
//             this.insertWord(suffix)
//         }
//     }
//     insertWord(word) {
//       let current = this.root;
//       for (let i = 0; i < word.length; i++) {
//         const char = word[i];
//         if (!current.children.has(char)) {
//           current.children.set(char, new TrieNode());
//         }
//         current = current.children.get(char);
//       }
//       current.isEndOfWord = true;
//     }
  
//     search(word) {
//       let current = this.root;
//       for (let i = 0; i < word.length; i++) {
//         const char = word[i];
//         if (!current.children.has(char)) {
//           return false;
//         }
//         current = current.children.get(char);
//       }
//       return current.isEndOfWord;
//     }
  
//     startsWith(prefix) {
//       let current = this.root;
//       for (let i = 0; i < prefix.length; i++) {
//         const char = prefix[i];
//         if (!current.children.has(char)) {
//           return false;
//         }
//         current = current.children.get(char);
//       }
//       return true;
//     }
//   }
// const trie = new Trie();
// trie.insert("apple");
// trie.insert("banana");
// trie.insert("orange");
// const res=trie.search("nge")
// console.log(res)