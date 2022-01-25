console.log("This is Sruti's Birth day Colsole.log");

const audioSruti = new Audio('Audio/birthdayRingtone.mp3');
const audioPiano = new Audio('Audio/pianoTone.mp3');
let btsWish = false;
let btsConcert = false;

const giftContainer = document.getElementById('giftContainer');
const giftClose = document.getElementById('giftClose');
const LightMode = document.getElementById('LightMode');
const body = document.getElementById('body');
const darkLightMode = document.getElementById('darkLightMode');
const birthDayWishContainer = document.getElementById('birthDayWishContainer');

LightMode.addEventListener('click', () => {
    body.classList.add('lightMode');
    body.classList.remove('darkMode');
    html = `<img src="others/darkMode.png" id="darktMode" alt="">`;
    darkLightMode.innerHTML = html;
    const darkMode = document.getElementById('darktMode');
    darkMode.addEventListener('click', () => {
        body.classList.remove('lightMode');
        body.classList.add('darkMode');
        html = ``;
        darkLightMode.innerHTML = html;
        birthDayWishContainer.classList.add('mt-50');
    });
});

giftClose.addEventListener('click', () => {
    audioPiano.play();
    html = `
    <div class="giftContainer" id="giftContainer">
       <img src="others/gift_open.png" class="giftOpen" alt="gift_open">
     </div>`;
    giftContainer.innerHTML = html;

    setTimeout(() => {
        html = `<h1 class="birthDayWishH3 f-size-100">3</h1>`;
        giftContainer.innerHTML = html;
    }, 2000);

    setTimeout(() => {
        html = `<h1 class="birthDayWishH3 f-size-100">2</h1>`;
        giftContainer.innerHTML = html;
    }, 3000);

    setTimeout(() => {
        html = `<h1 class="birthDayWishH3 f-size-100">1</h1>`;
        giftContainer.innerHTML = html;
    }, 4000);

    setTimeout(() => {
        html = `
        <div class="giftCodeContainer">
          <div class="giftCode">
             <p>BTS Wish code</p>
             <p>XDR-HYT-11S</p>
             <p>BTS Live Concert Ticket</p>
             <p>G1Y-F24-56M</p>
             <p>S Code</p>
             <p>MYD-SRT-MSJ</p>
          </div>
        </div>`;
        giftContainer.innerHTML = html;
        funcInput();
    }, 5000);
});

function funcInput() {
    const inputTagContainer = document.getElementById('inputTagContainer');
    html = `<input type="text" placeholder="Enter Code here" id="codeInput" class="form-control" autocomplete="off">`;
    inputTagContainer.innerHTML = html;
    const codeInput = document.getElementById('codeInput');
    const btsGiftContainer = document.getElementById('btsGiftContainer');
    codeInput.addEventListener('input', () => {
        let code = codeInput.value;
        if (code == 'XDR-HYT-11S' && btsWish == false) {
            btsWish = true;
            codeInput.classList.add('is-valid');
            codeInput.classList.remove('is-invalid');
            btsGiftContainer.classList.add('height-118rem');
            html = `
                <div class="rm left">
                    <img src="BTS/rm.png" alt="rm">
                    <div class="message rmWish">
                        <p> This is RM Happy Birthday Sruti</p>
                    </div>
                </div>

                <div class="v right">
                    <div class="message vWish">
                        <p>생일 축하해 스루티 💜💜💜💜</p>
                    </div>
                    <img src="BTS/v.png" alt="v">
                </div>

                <div class="jimin left">
                    <img src="BTS/jimin.png" alt="jimin">
                    <div class="message jiminWish">
                        <p>지민입니다. 생일 축하합니다. 너의 모든 꿈이 이루어진다</p>
                    </div>
                </div>

                <div class="jin right">
                    <div class="message jinWish">
                        <p>헤이 군대 생일 축하해</p>
                    </div>
                    <img src="BTS/jin.png" alt="jin">
                </div>

                <div class="jk left">
                    <img src="BTS/jk.png" alt="jk">
                    <div class="message jkWish">
                        <p>생일 축하해 스루티. 나는 너를 보라색으로 만들었다 💜💜💜</p>
                    </div>
                </div>

                <div class="jhope right">
                    <div class="message jhopeWish">
                        <p>생일 축하해 스루티티티티티티티티티.....</p>
                    </div>
                    <img src="BTS/jhope.png" alt="jhope">
                </div>

                <div class="suga left">
                    <img src="BTS/suga.png" alt="suga">
                    <div class="message sugaWish">
                        <p>생일 축하합니다 행복하고 번영하는 삶을 기원합니다.. </p>
                    </div>
                </div>`;
            btsGiftContainer.innerHTML = html;

            const btsGifWishVideo = document.getElementById('btsGifWishVideo');
            html = ` <div class="iframeContainer">
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/DD3LeYSk7Lw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>`;
            btsGifWishVideo.innerHTML = html;
            btsConcertContainer.innerHTML = ``;
            wishMeContainer.innerHTML = ``;
        }
        else if (code == 'G1Y-F24-56M' && btsConcert == false) {
            btsConcert = true;
            codeInput.classList.add('is-valid');
            codeInput.classList.remove('is-invalid');
            const btsConcertContainer = document.getElementById('btsConcertContainer');
            html = `
                <div class="video">
                    <button class="liveBtn">LIVE</button>
                    <video src="others/video.MP4" controls autoplay></video>
                </div>
                <div class="chatContainer" id="chatContainer">
                    <div class="heading">
                        <h4 class="center">Live chats</h4>
                    </div>
                    <div id="allChats"> </div>
                    <div class="sendMsgContainer">
                        <img src="others/sd.png" alt="">
                        <input type="text" placeholder="Send message to BTS" autocomplete="off" id="sendInp">
                        <img src="others/send.png" alt="" id="sendBtn">
                    </div>
                </div>`;
            btsConcertContainer.innerHTML = html;

            const sendBtn = document.getElementById('sendBtn');
            const sendInp = document.getElementById('sendInp');
            sendBtn.addEventListener('click', () => {
                sendInp.value = `Unsuccess Server error (~_~) errorcode->752 try again`;
            });
            $.getScript('chatMessage.js', () => {
                let html = ``;
                const allChats = document.getElementById('allChats');
                messages.forEach((msg) => {
                    html += `
                            <div class="chats">
                                <img src="users/user${msg.user}.jpg" alt="user1">
                                <p>${msg.message}</p>
                            </div>`;
                    allChats.innerHTML = html;
                });

                setInterval(() => { chatContainer.scrollBy(0, 45); }, 1000)
            });
            btsGiftContainer.innerHTML = ``;
            btsGifWishVideo.innerHTML = ``;
            wishMeContainer.innerHTML = ``;
            btsGiftContainer.classList.remove('height-118rem');
        }
        else if (code == 'MYD-SRT-MSJ') {
            audioSruti.play();
            audioPiano.pause();
            codeInput.classList.add('is-valid');
            codeInput.classList.remove('is-invalid');
            btsGiftContainer.innerHTML = ``;
            btsGifWishVideo.innerHTML = ``;
            btsConcertContainer.innerHTML = ``;
            const wishMeContainer = document.getElementById('wishMeContainer');
            html = `
            <div class="img">
                <img src="sruti/sruti1.JPG" alt="sruti" class="srutiImg">
                <img src="sruti/sruti2.JPG" alt="sruti" class="srutiImg">
                <img src="sruti/sruti3.jpg" alt="sruti" class="srutiImg">
                <img src="sruti/sruti4.jpg" alt="sruti" class="srutiImg">
                <img src="sruti/sruti5.jpg" alt="sruti" class="srutiImg">
                <img src="sruti/sruti8.jpg" alt="sruti" class="srutiImg">
           </div>
           <img src="others/stand.png" alt="">
            <div class="wishMessageMe">
                <h3>Happy Birthday Miss Thinker</h3>
                <p>Janis ami ei khane ki lik bo buje te parchi na eta nia ami 17 ber liklam er delete kor lam eta 18 no try kor chi jani na etow delete hobe ki na . Mane bujte parchi na ki vabe perfect Wish kor bo toke. Ei nia vab chi and Likchi but pore mone hoche eh ki sob Ulta palta likha chi 🙃🙃🙃 First te sob korea te like chilam . and ota translate kore sob ulta palta meaning hochilo ja ami boli ei ni 🙃🙃🙃 ter por english te like chilam to o tow delete kore dilam english gulo pore amer mone halo jano ami birat attiude dhaka chi toke 🙃🙃🙃 Ei 18 no ber ase ami Nije confused Ki vabe toke properly wish kori ami 🙃🙃🙃 . Ami sotti buje parchi na tobe ha ei tuku bol bo Happy Birthday and ha cow er Composition(like:- be happy in you life , be healthy in you life and so on...) er bolchi na Becuse tui oi gulo Deserve koris . Dhak ami tor birthday er din Ki sob ulta palta bolchi je ami confused ero sob ulta palta kotha 😅😅😅 sorry for that . And also sorry for mood kharap kora er janno ei sob ulta palta bole . er ha ei khane aber spelling Mistake Khujte bose jas na😂😂😂 er ha kichu kota jeta na bole parlam na...😂😂😂</p>
                <ul>
                    <li>Janis tui cholo balai kaki ke "tatu" boltis🤣🤣🤣</li>
                    <li>Kurkura ke "turture"🤣🤣🤣</li>
                    <li>Er Sruti ke boltis "tuti"🤣🤣🤣</li>
                </ul>
         </div>`;
            wishMeContainer.innerHTML = html;
        }
        else {
            codeInput.classList.add('is-invalid');
            codeInput.classList.remove('is-valid');
            btsGiftContainer.innerHTML = ``;
            btsGifWishVideo.innerHTML = ``;
            btsConcertContainer.innerHTML = ``;
            wishMeContainer.innerHTML = ``;
            btsGiftContainer.classList.remove('height-118rem');
            if (btsConcert && btsWish) {
                if (code == 'G1Y-F24-56M' || code == 'XDR-HYT-11S') {
                    html = `<h2 class="center">Code expired <br> You have alrady used both code <br>You can only use S-code</h2>`;
                    btsGiftContainer.innerHTML = html;
                }
            }
        }
    });
}