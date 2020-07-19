var value = document.getElementsByClassName('number');
var sell = document.getElementsByClassName('sell');
var buy = document.getElementsByClassName('buy');

var items = [
    {
        name : 'ბურგერი',
        price : 2,
        img : 'images/burger.png',
        id : 1
    },
    {
        name : 'ყავა',
        price : 4,
        img : 'images/coffee.png',
        id : 2
    },
    {
        name : 'წიგნი',
        price : 15,
        img : 'images/book.png',
        id : 3
    },
    {
        name : 'ვიდეო თამაში',
        price : 60,
        img : 'images/game.png',
        id : 4
    },
    {
        name : 'ქველმოქმედება',
        price : 100,
        img : 'images/redcross.png',
        id : 5
    },
    {
        name : 'ყურსასმენები',
        price : 200,
        img : 'images/headphones.png',
        id : 6
    },
    {
        name : 'ჯორდანები',
        price : 200,
        img : 'images/jordans.png',
        id : 7
    },
    {
        name : 'სკეიტბორდი',
        price : 300,
        img : 'images/board.png',
        id : 8
    },
    {
        name : 'დრონი',
        price : 800,
        img : 'images/drone.png',
        id : 9
    },
    {
        name : 'მოდური ჩანთა',
        price : 1000,
        img : 'images/bag.png',
        id : 10
    },
    {
        name : '4კ ტელევიზორი',
        price : 10000,
        img : 'images/tv.png',
        id : 11
    },
    {
        name : 'ალმასის ბეჭედი',
        price : 10000,
        img : 'images/ring.png',
        id : 12
    },
    {
        name : 'როლექსი',
        price : 15000,
        img : 'images/watch.png',
        id : 13
    },
    {
        name : 'კატერი',
        price : 30000,
        img : 'images/boat.png',
        id : 14
    },
    {
        name : 'ტესლა',
        price : 70000,
        img : 'images/tesla.png',
        id : 15
    },
    {
        name : 'შვეულმფრენი',
        price : 150000,
        img : 'images/copter.png',
        id : 16
    },
    {
        name : 'ფერარი',
        price : 200000,
        img : 'images/ferrari.png',
        id : 17
    },
    {
        name : 'ლამბორგინი',
        price : 200000,
        img : 'images/lambo.png',
        id : 18
    },
    {
        name : 'ბარი',
        price : 300000,
        img : 'images/bar.png',
        id : 19
    },
    {
        name : 'პიცის რესტორანი',
        price : 500000,
        img : 'images/pizza.png',
        id : 20,
    },    {
        name : 'სახლი სანაპიროზე',
        price : 5000000,
        img : 'images/house.png',
        id : 21
    },
    {
        name : 'გამანადგურებელი',
        price : 15000000,
        img : 'images/f15.png',
        id : 22
    },
    {
        name : 'იახტა',
        price : 16000000,
        img : 'images/yacht.png',
        id : 23
    }
]

var cart = [
    {
        name : 'სახელმწიფო',
        price : 1,
        img : 'images/flag.webp',
        id : 23
    }
]
for (var i = 0; i < items.length; i++){
    console.log(items);
}
cart.push(items[0]);
console.log(cart);
