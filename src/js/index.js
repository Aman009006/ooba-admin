let state = true

const allUser = document.getElementById('all__user')
const allOrder = document.getElementById('ordered')
const user = document.getElementById('all__users__content')
const order = document.getElementById('all__ordered__content')


function allUsers(){
    allUser.classList.add('active')
    allOrder.classList.remove('active')
    user.classList.remove('none')
    order.classList.add('none')
}
function allOrders(){
    allUser.classList.remove('active')
    allOrder.classList.add('active')
    order.classList.remove('none')
    user.classList.add('none')
}