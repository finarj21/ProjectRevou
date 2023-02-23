// Menampilkan inputan pesan
function kirim(){
    var nama = document.getElementById("nama").value;
    var ttl = document.getElementById("ttl").value;
    var jk = document.getElementById("jk").value;
    var pesan = document.getElementById("pesan").value;
    var waktu = new Date();
    // var nama = document.forms["message-form"]["nama"].value;
    // var ttl = document.forms["message-form"]["ttl"].value;
    // var jk = document.forms["message-form"]["nama"].value;
    // var pesan = document.forms["message-form"]["pesan"].value;
    // var hasil = document.forms["message-form"]["nama"];
    if (nama != "" && ttl !="" && jk !="" && pesan !="") {
        document.getElementById("send-waktu").innerText=waktu;
        document.getElementById("send-nama").innerText=nama;
        document.getElementById("send-ttl").innerText=ttl;
        document.getElementById("send-jk").innerText=jk;
        document.getElementById("send-pesan").innerText=pesan;
        return false;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
        return false;
    }   
}