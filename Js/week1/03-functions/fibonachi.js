function fibonacci_sequence(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      let fibSeq = [0, 1];
      for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
      }
      return fibSeq;
    }
  }
  
