
console.log("Portfolio chargé !");
document.getElementById("downloadCV").addEventListener("click", function (event) {
    event.preventDefault();

    const pdfpath= "cv.pdf";

    let link = document.createElement("a");
    link.href = pdfpath;
    link.download = "Mon_CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    
    window.open(pdfpath, "_blank");
});
