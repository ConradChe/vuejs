const app = new Vue({
  el: "#app",
  data: {
    books: [{
      id: 1,
      name: '《算法导论》',
      date: '2006-9',
      price: 85.00,
      count: 1
    }, {
      id: 2,
      name: '《算法导论2》',
      date: '2007-9',
      price: 95.00,
      count: 1
    }, {
      id: 3,
      name: '《算法导论3》',
      date: '2011-9',
      price: 100.00,
      count: 1
    }, {
      id: 4,
      name: '《算法导论4》',
      date: '2015-9',
      price: 115.00,
      count: 1
    }, {
      id: 5,
      name: '《算法导论5》',
      date: '2018-9',
      price: 120.00,
      count: 1
    }]
  },
  methods: {
    getFinalPrice(price) {
      return price.toFixed(2);
    },
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeBook(index) {
      this.books.splice(index, 1);
    }
  },
  filters: {
    showPrice(price) {
      return price.toFixed(2);
    }
  },
  computed: {
    totalPrice() {
      // let totalPrice = 0;
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count;
      },0);
    }
  }

})