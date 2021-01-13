var jawab = new Array;
var done = new Array;
var score = 0

jawab[1] = "A";

function Engine(question,answer){
	if(answer != jawab[question]){
		if (!done[question]){
			done[question] = -1;
			alert("Jawaban anda salah! \n skor anda sekarang:" + score);}
		else{
			alert("Anda sudah pernah menjawab soal ini!")}
	else{
		if(!done[question]){
			done[question] = -1;
			score++
			alert("Benar! \n Skor Anda Sekarang :" +score);}
		else{
			alert("Anda sudah pernah menjawab soal ini!")}
		}
	}
}

function NextLevel() {
	if(score>10){
		alert("Anda mendapatkan nilai SEMPURNA!");
	}
	if (score >= 7 && score <= 11){
		alert("Akeses diterima! klik tombol..")
	}
	else{
		alert("Akses di tolak! anda membutuhkan 7 point point untuk lanjut ke tahap selanjutnya")
	}
}