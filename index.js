let butt = document.getElementsByTagName('button')[0];
let peachmult = 0;
let audio = document.getElementsByTagName('audio')[0];
butt.addEventListener('click',function(e) {
    let array = [document.getElementById('a'), document.getElementById('b'), document.getElementById('c')]
    let array2 = [Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5)];
    let numb=0;
    if (parseInt(document.getElementById('mon').value) >= parseInt(document.getElementById('bet').value)) {
        document.getElementById('mon').value = parseInt(document.getElementById('mon').value)-parseInt(document.getElementById('bet').value)
        while (numb<3) {
            if (array2[numb]===1) {
                array[numb].src= 'lui.png';
            }
            if (array2[numb]===2) {
                array[numb].src= 'mar.png';
            }
            if (array2[numb]===3) {
                array[numb].src= 'peach.png';
            }
            if (array2[numb]===4) {
                array[numb].src= 'bow-wow.jpg';
            }
            if (array2[numb]===5) {
                array[numb].src= 'star.jpg';
            }
            numb++;
        }
        if (array2[0] == array2[1] && array2[1] == 1 && array2[1] == array2[2]) {
            document.getElementById('mon').value = parseInt(document.getElementById('mon').value) + 9 * parseInt(document.getElementById('bet').value);
            audio.src = 'lugi.mp3';
            audio.play();
            countdown=0
            while (countdown<10) {
                countdown++
            }
            alert(9 * parseInt(document.getElementById('bet').value)
                +" Pontos!");
            if (peachmult > 0) {
                document.getElementById('mon').value = parseInt(document.getElementById('mon').value) + 9 * parseInt(document.getElementById('bet').value);
                alert("Peach multiplica: " + 9 * parseInt(document.getElementById('bet').value)*2 + " Pontos!");
            }
        } else if (array2[0] == array2[1] && array2[1] == 2 && array2[1] == array2[2]) {
            document.getElementById('mon').value = parseInt(document.getElementById('mon').value) + 10 * parseInt(document.getElementById('bet').value);
            audio.src = 'oiram.mp3';
            audio.play();
            countdown=0
            while (countdown<10) {
                countdown++
            }
            alert(10 * parseInt(document.getElementById('bet').value)
                +" Pontos!");
            if (peachmult > 0) {
                document.getElementById('mon').value = parseInt(document.getElementById('mon').value) + 10 * parseInt(document.getElementById('bet').value);
                alert("Peach multiplica: " + 10 * parseInt(document.getElementById('bet').value)*2 +" Pontos!");
            }
        } else if (array2[0] == array2[1] && array2[1] == 3 && array2[1] == array2[2]) {
            peachmult+=3;
            audio.src = 'peachy.mp3';
            audio.play();
            countdown = 0
            while (countdown < 10) {
                countdown++
            }
            alert("Peach multiplicará seus próximos 3 turnos!");
        } else if (array2[0] == array2[1] && array2[1] == 4 && array2[1] == array2[2]) {
            document.getElementById('mon').value = parseInt(document.getElementById('mon').value) - 1000;
            audio.src = 'bow.mp3';
            audio.play();
            countdown = 0
            while (countdown < 10) {
                countdown++
            }
            alert("Você perdeu 1000 Pontos!");
            if (peachmult > 0) {
                peachmult=0;
                alert("Bowser sequestrou Peach! Seu multiplicador acaba mais cedo!");
            }
        } else if (array2[0] == array2[1] && array2[1] == 5 && array2[1] == array2[2]) {
            document.getElementById('mon').value = parseInt(document.getElementById('mon').value) + 20 * parseInt(document.getElementById('bet').value);
            audio.src = 'starman.mp3';
            audio.play();
            countdown = 0
            while (countdown < 10) {
                countdown++
            }

            alert(20 * parseInt(document.getElementById('bet').value)
                + " Pontos!");
            if (peachmult > 0) {
                document.getElementById('mon').value = parseInt(document.getElementById('mon').value) + 20 * parseInt(document.getElementById('bet').value);
                alert("Peach multiplica: " + 20 * parseInt(document.getElementById('bet').value)
                    *2+" Pontos!");
            }
        }
        if (peachmult>0) {
            peachmult--;
        }
    } else {
        alert("Sem pontos para jogar!");
    }
});