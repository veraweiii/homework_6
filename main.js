window.onLoad = () => {
    updateCartLabel();
}

// constructor for product
function roll(type, size, glaze, price, img) {
    this.type = type;
    this.size = size;
    this.glaze = glaze;
    this.price = price;
    this.img = img;
}


// Update number of items in cart
function updateCartLabel() {
    cartArray = localStorage.getItem("cartArray");
    cartArray = JSON.parse(cartArray);
    if (cartArray == null) {
        console.log("cartArray == null")
        cartArray = [];
        // localStorage.setItem("cartArray", JSON.stringify(cartArray));
    }
    let cartSize = cartArray.length;
    console.log(document.getElementById("cart-number"));
    if (cartArray.length > 0) {
        console.log(cartArray.length);
        console.log(document.getElementById("cart-number"));
        document.getElementById("cart-number").innerHTML = cartSize;
    }
    //document.getElementById("cart-number")[0].innerHTML = cartSize;
}
updateCartLabel();

// Update price when size selected
document.getElementById("size").addEventListener("change", function () {
    console.log(localStorage);
    if (document.getElementById("1-roll").checked) {
        document.getElementsByClassName("price")[0].innerHTML = "$2.99";
    } else if (document.getElementById("3-rolls").checked) {
        document.getElementsByClassName("price")[0].innerHTML = "$8.99";
    } else if (document.getElementById("6-rolls").checked) {
        document.getElementsByClassName("price")[0].innerHTML = "$11.99";
    } else if (document.getElementById("12-rolls").checked) {
        document.getElementsByClassName("price")[0].innerHTML = "$23.99";
    }
});

// Update image when glazing selected

if (document.getElementsByClassName("item-header")[0].innerHTML == "Original") {
    console.log("Hello")
document.getElementById("glazing").addEventListener("change", function () {
    if (document.getElementById("none").checked) {
        document.getElementsByClassName("item-image")[0].src = "img/original.png";
    } else if (document.getElementById("double-chocolate").checked) {
        document.getElementsByClassName("item-image")[0].src = "img/glaze/original-chocolate.png";
    } else if (document.getElementById("vanilla-milk").checked) {
        document.getElementsByClassName("item-image")[0].src = "img/glaze/original-vanilla.png";
    } else if (document.getElementById("sugar-milk").checked) {
        document.getElementsByClassName("item-image")[0].src = "img/glaze/original-sugar.png";
    }
    //console.log(document.getElementById("none").checked);
});
} else if (document.getElementsByClassName("item-header")[0].innerHTML == "Blackberry") {
    console.log("Hello")
document.getElementById("glazing").addEventListener("change", function () {
    if (document.getElementById("none").checked) {
        document.getElementsByClassName("item-image")[0].src = "img/original.png";
    } else if (document.getElementById("double-chocolate").checked) {
        document.getElementsByClassName("item-image")[0].src = "img/glaze/original-chocolate.png";
    } else if (document.getElementById("vanilla-milk").checked) {
        document.getElementsByClassName("item-image")[0].src = "img/glaze/original-vanilla.png";
    } else if (document.getElementById("sugar-milk").checked) {
        document.getElementsByClassName("item-image")[0].src = "img/glaze/original-sugar.png";
    }
    //console.log(document.getElementById("none").checked);
});
}



// Add item to cart
document.getElementById("cart-btn").addEventListener("click", function () {
    let size;
    let price;
    if (document.getElementById("1-roll").checked) {
        size = "1-roll";
        price = "$2.99";
    } else if (document.getElementById("3-rolls").checked) {
        size = "3-rolls";
        price = "$8.99";
    } else if (document.getElementById("6-rolls").checked) {
        size = "6-rolls";
        price = "$11.99";
    } else if (document.getElementById("12-rolls").checked) {
        size = "12-rolls";
        price = "$23.99";
    }

    let type;
    let img; 
    if (document.getElementById("none").checked) {
        type = "none";
        img = "img/original.png";
    } else if (document.getElementById("double-chocolate").checked) {
        type = "double-chocolate";
        img = "img/glaze/original-chocolate.png";
    } else if (document.getElementById("vanilla-milk").checked) {
        type = "vanilla-milk";
        img = "img/glaze/original-vanilla.png";
    } else if (document.getElementById("sugar-milk").checked) {
        type = "sugar-milk";
        img = "img/glaze/original-sugar.png";
    }

    let newRoll = new roll(
        "Original Cinnamon Roll",
        size,
        type,
        price,
        img
    );
    
    //document.getElementsByClassName("item-image").attr('src')
    //console.log(localStorage);
    cartArray = JSON.parse(localStorage.getItem("cartArray"));
    console.log(cartArray);
    if (cartArray == null) {
        console.log("thiscartArray == null");
        cartArray = [];
        localStorage.setItem("cartArray", JSON.stringify(cartArray))
    }
    cartArray.push(newRoll);
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    casdf

    updateCartLabel();
    // add code for item added notification
});



