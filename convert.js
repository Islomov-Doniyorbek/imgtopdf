let newImg, showImg;
function load(event) {
    showImg = document.querySelector("#show");

    showImg.src = URL.createObjectURL(event.target.files[0]);

    newImg = document.createElement("img")
    newImg.src = URL.createObjectURL(event.target.files[0]);

    showImg.onload() = () => {
        URL.revokeObjectURL(showImg.src)
    }
}

function pdf() {
    console.log(newImg);
    let doc = jsPDF();
    doc.addImage(newImg, 10, 10);
    doc.save("rasm.pdf")
}