let calculator = {
    total: 0,
    add: function(num) {
        this.total += num;
    },
    subtract: function(num) {
        this.total -= num;
    },
    clear: function() {
        this.total = 0;
    },
};
