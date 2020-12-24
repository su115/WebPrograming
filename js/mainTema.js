let init = document.getElementById("swe")
init.addEventListener("onclick", LightTema)
//alert("init")
function DarkTema() {
    Header(true)
    Body(true)
    changePicture(true)
    Navigation(true)
    Submenu(true)
    Footer(true)
    //alert("not problem")
    //Button( "LightTema")
    //alert("workDark")
    DarkOn()
}
function LightTema() {
    Header(false)
    changePicture(false)
    Body(false)
    Navigation(false)
    Submenu(false)
    Footer(false)
    //Button("DarkTema")
    LightOn()
    //alert("workLight")
}
function DarkOn() {
    let th = document.getElementById("dark")
    let tt = document.getElementById("light")
    tt.style.display = "none"
    th.style.display = "block"
    //alert("dark ON!!")
}
function LightOn() {
    let th = document.getElementById("dark")
    let tt = document.getElementById("light")
    th.style.display = "none"
    tt.style.display = "block"
    //alert("light ON!!")
}
function Button(str) {
    let th = document.getElementById("swe")
    th.innerHTML = str
    th.style.position = "abosulte"
    th.style.background = "green"
    if (str == "DarkTema") {
        th.removeEventListener("onclick", LightTema)
        th.addEventListener("onclick", DarkTema)
        //alert("must remove")
    }
    if (str == "LightTema") {
        th.removeEventListener("onclick", DarkTema)
        th.addEventListener("onclick", LightTema)

    }

}
function Header(tema) {
    let el = document.getElementById("header")
    if (tema) {
        el.style.background = "url(../img/newBG.jpg)center no-repeat"
        el.style.color = "#A6A6A6";
    }
    if (!tema) {
        el.style.background = "url(../img/lbg.jpg)center no-repeat"
        el.style.color = "#D9D9D9"
    }
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "top,center"
    el.style.position = "relative"
    //el.style.color="#D9D9D9"//"#8C7276"

}
function Body(tema) {
    let body = document.getElementById("body")
    body.style.display = "block"
    body.style.fontFamily = "Arial"
    body.style.fontSize = "120px"
    if (tema) {
        body.style.backgroundColor = "black"

    }
    else {
        body.style.backgroundColor = "#594246"//"#D9D9D9"//"#8C7276"
    }


}
function Navigation(tema) {
    let container = document.getElementById("container")

    //variables
    let bg = "red"
    let nav_inner_color = "green"
    if (tema) {
        bg = "#262626"
        nav_inner_color = "white"
    }
    if (!tema) {
        bg = "blanchedalmond"//"#8C7276"
        //nav_inner_color = "black"//"orange"
    }
    container.style.backgroundColor = bg
    container.style.position = "sticky"
    container.style.opacity = ".8"
    //lets change by for
    //let elements = document.getElementsById("ni"+i)
    //alert(elements[0])
    for (let i = 1; i < 5; i++) {
        let element = document.getElementById("ni" + i)
        //element.style.color = nav_inner_color
        element.style.textDecoration = "none"
        element.style.opacity = "0.5"
        element.style.transition = "display linear 2s"
        if (tema) {
            element.style.color = "white"
        }
        else {
            element.style.color = "black"
            if (element.id == "ni5") {
                element.style.display = "none"
            }
            if (element.id == "ni6") {
                element.style.display = "block"
            }
        }

    }
}

function Submenu(tema) {
    //var child_elements = document.getElementsByClassName("nav_inner_sub")
    //alert (child_elements)
    for (let i = 1; i < 5; i++) {
        let child_element = document.getElementById("nw" + i)
        child_element.style.color = "white"
        child_element.style.opacity = "1"
        child_element.style.padding = "10px"
        child_element.style.paddingRight = "110px"
        child_element.style.textDecoration = "none"
        if (tema) {
            child_element.style.backgroundColor = "#404040"
        }
        else {
            child_element.style.backgroundColor = "#261717"
            //child_element.style.color="b"
        }
    }

}

function changePicture(tema) {
    let str = "picture"
    let txt = "txt"
    let colors = { 1: "white", 2: "red", 3: "blue", 4: "black" }
    for (let i = 1; i < 5; i++) {
        let obj = document.getElementById(str + i)
        obj.style.marginLeft = "2%"
        obj.style.marginRight = "4%"
        obj.style.width = "450px"
        obj.style.height = "300px"
        obj.style.display = "flex"
        obj.style.alignItems = "flex-end"
        obj.style.backgroundSize = "cover"

        let text = document.getElementById(txt + i)
        text.style.textDecoration = "none"
        text.style.fontSize = "60px"
        text.style.paddingBottom = "20px"
        text.style.paddingLeft = "20px"
        if (tema) {
            obj.style.background = "url(./img/ee" + i + ".jpg)center no-repeat"
            text.style.color = "#B6E7F2"
        } else {

            obj.style.background = "url(./img/lle" + i + ".jpg)center no-repeat"
            text.style.color = colors[i]//"#BAE02A"//"#A9BF04" ///"#594246"
        }
    }

}

function Footer(tema) {
    let footer = document.getElementById("footer")

    footer.style.height = "100px"
    footer.style.marginTop = "20px"
    footer.style.display = "flex"
    footer.style.justifyContent = "space-between"
    footer.style.alignItems = "center"
    if (tema) {
        footer.style.background = "#262626"
        footer.style.color = "white"
    }
    else {
        footer.style.color = "black"
        footer.style.background = "blanchedalmond"
    }

}