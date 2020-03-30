
//Khai báo biến
let question = document.getElementById('question');
let dapAnA = document.getElementById('answerA');
let dapAnB = document.getElementById('answerB');
let dapAnC = document.getElementById('answerC');
let dapAnD = document.getElementById('answerD');
let cauhoi;
let dapAn1;
let dapAn2;
let dapAn3;
let dapAn4;
let chinhxac;
let Answer;
let comment;
let level = 1;
let point = 1000;
//Khai báo tập câu hỏi



//Kiểm tra câu trả lời
function DapAn(number) {
        document.getElementById(number).style.backgroundColor = 'yellow';
        Answer = number;
        console.log(Answer)
}
function check() {
    if (Answer == chinhxac) {
        document.getElementById('ketqua').innerHTML = 'Chúc mừng, bạn đã trả lời đúng !!' + '<br>' + comment;
    } else {
        document.getElementById('ketqua').innerHTML = 'Rất tiếc, bạn đã trả lời sai';
    }
}
function levelAndPoint()  {
    switch (level) {
        case 1 :
            point = 1000;
            break;
        case 2 :
            point = 2000;
            break;
        case 3 :
            point = 3000;
            break;
        case 4 :
            point = 3000;
            break;
        case 5 :
            point = 3000;
            break;
        case 6 :
            point = 3000;
            break;
        case 7 :
            point = 3000;
            break;
    }
    document.getElementById('level').innerHTML = 'Level : ' + level;
    document.getElementById('point').innerHTML = 'Point : ' + point;
}
levelAndPoint();
//update game
let stt =0;
function update() {
    cauhoi = q[stt].question;
    dapAn1 = q[stt].A;
    dapAn2 = q[stt].B;
    dapAn3 = q[stt].C;
    dapAn4 = q[stt].D;
    chinhxac = q[stt].correct;
    comment = q[stt].bonus;

}


//Hiển thị câu hỏi
function showQuestion() {
    update();
    question.value = cauhoi;
    dapAnA.innerHTML ='Đáp án A : ' + dapAn1;
    dapAnB.innerHTML ='Đáp án B : '+ dapAn2;
    dapAnC.innerHTML ='Đáp án B : '+ dapAn3;
    dapAnD.innerHTML ='Đáp án B : '+ dapAn4;
}
showQuestion();


//next question
function next() {
    document.getElementById('1').style.backgroundColor = 'aquamarine';
    document.getElementById('2').style.backgroundColor = 'aquamarine';
    document.getElementById('3').style.backgroundColor = 'aquamarine';
    document.getElementById('4').style.backgroundColor = 'aquamarine';
    if (Answer == chinhxac) {
        stt = stt + 1;
        level ++;
        levelAndPoint();
        document.getElementById('level').innerHTML = 'Level : ' + level;
        document.getElementById('point').innerHTML = 'Point : ' + point;
        showQuestion();
    } else {
        document.getElementById('ketqua').innerHTML = 'Bạn chưa trả lời chính xác câu hỏi hiện tại';
    }
}




