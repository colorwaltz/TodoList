const songs = [
    {
        title:"빨간 피터",
        lyrics:"아무도 모르는 파란 길로"
    },
    {
        title:"수성의 하루",
        lyrics:"아물지 못하는 어제를 끌어안고"
    },
    {
        title:"로마네스크",
        lyrics:"나는 날 좋아할 수가 없네"
    },
    {
        title:"백치",
        lyrics:"빨간 해가 쏟아져도 어지러이 춤을 춰줘요"
    },
    {
        title:"남극",
        lyrics:"나는 아직 죽고 싶지 않아"
    },
    {
        title:"피난",
        lyrics:"이게 뭐야 나 이제야 너를 만났다 했는데"
    }
]

const lyrics = document.querySelector("#songs span:first-child");
const title = document.querySelector("#songs span:last-child");

const todaysSong = songs[Math.floor(Math.random() * songs.length)];


lyrics.innerText = `"${todaysSong.lyrics}"`;
title.innerText = todaysSong.title;