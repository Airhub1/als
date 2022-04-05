import { useEffect } from "react";
import item from "./Footer";
import { footerData } from "./FooterData";

const PDF = () => {

    useEffect(() => {
    const button = document.getElementById("paper");
    button.addEventListener("click", () => {
    const result = confirm("Download the PDF file?");
        if(result){
        window.location.assign("https://drive.google.com/u/0/uc?id=19BR7TcoBUpdejv4Xood4ew_zay8FfJaX&export=download");
      }else{
      return;}
    });
    const button1 = document.getElementById("terms");
    button1.addEventListener("click", () => {
    const result = confirm("Download the PDF file?");
        if(result){
        window.location.assign("https://drive.google.com/u/0/uc?id=10v5jDVaIGncQofA41OIP2J_ZMmcBte-C&export=download");
    }else{
        return;}
    });
    const button2 = document.getElementById("privacy");
    button2.addEventListener("click", () => {
    const result = confirm("Download the PDF file?");
        if(result){
        window.location.assign("https://drive.google.com/u/0/uc?id=1wt_QvUzhN5qjZjjJ3qUrimLrAnX1X2qB&export=download");
    }else{
        return;}
    });
},[]);
}

export default PDF;