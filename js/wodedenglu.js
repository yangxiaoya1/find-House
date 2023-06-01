var tabli = document.getElementsByClassName('tabLi');
var items = document.getElementsByClassName('item');
// console.log(items);
for (var i = 0; i < tabli.length; i++) {
    tabli[i].setAttribute('index', i);
    tabli[i].onclick = function () {
        var ind = this.getAttribute('index');
        for (var j = 0; j < tabli.length; j++) {
            tabli[j].className = 'tabLi';
            tabli[ind].className = 'tabLi active';

        }
        for (var k = 0; k < items.length; k++) {
            items[k].style.display = 'none';
            items[ind].style.display = 'block';
        }
    }
}

