function add_value() {
    let masukin = document.getElementById("Masukin");
    let masukinvalue = masukin.value ;

    if (masukinvalue !== "") {
        let span = document.createElement("SPAN");
        span.className = "Konten_Span";
        span.innerHTML = masukinvalue ;

        let spantutup = document.createElement("SPAN");
        spantutup.className = "Konten_Span_Tutup";
        spantutup.innerHTML = "\u00D7";

        span.appendChild(spantutup);
        
        spantutup.addEventListener("click", function () {
            span.classList.add("Konten_None");
        });

        let konten = document.getElementById("Konten");
        konten.appendChild(span);
    }

    masukin.value = "" ;
}

masukin.addEventListener("keyup", function(event){
    if (event.keycode === 13 && masukin.value !== ""){
        document.getElementById("Masukin_tombol").click();
    }
});