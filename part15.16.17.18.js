'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('diagnosis');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener(
  'click',
  () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
      return;
    }
    resultDivision.innerText = '';
   
    // headerDivision の作成
    const headerDivision = document.createElement('div');
    headerDivision.setAttribute('class', 'card-header text-bg-primary');
    headerDivision.innerText = '診断結果';

    // bodyDivision の作成
    const bodyDivision = document.createElement('div');
    bodyDivision.setAttribute('class', 'card-body');

    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'card-text');
    const result = assessment(userName);
    paragraph.innerText = result;
    bodyDivision.appendChild(paragraph);

    // resultDivision に Bootstrap のスタイルを適用する
    resultDivision.setAttribute('class', 'card');

    // headerDivision と bodyDivision を resultDivision に差し込む
    resultDivision.appendChild(headerDivision);
    resultDivision.appendChild(bodyDivision);
    tweetDivision.innerText = '';
    const anchor = document.createElement('a');
    const hrefValue = 
    'https://twitter.com/intent/tweet?button_hashtag=あなたの新しい試み診断&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="診断結果の文章" data-show-count="false">Tweet #あなたの新しい試み診断</a><script async src="https://platform.twitter.com/widgets.js';

    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('class', 'twitter-hashtag-button');
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #あなたの新しい試み';

    tweetDivision.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivision.appendChild(script);
  }
);

userNameInput.addEventListener(
  'keydown',
  (event) => {
    if(event.conde === 'Enter') {
      assessmentButton.dispatchEvent(new Event('click'))
    }
  }
)

const answers = [
'###username###の新たしい試みは初めての一人カラオケです。',
'###username###の新たしい試みは初めての一人旅です。',
'###username###の新たしい試みは初めてのバイトです。',
'###username###の新たしい試みは初めての一人定食屋です。',
'###username###の新たしい試みは初めての美容院です。',
'###username###の新たしい試みは初めての一人寿司です。',
'###username###の新たしい試みは初めての一人カラオケです。',
'###username###の新たしい試みは高校で同好会に入ることです。',
'###username###の新たしい試みは高校で部活に入ることです。',
'###username###の新たしい試みは自転車で遠い場所に旅です。',
'###username###の新たしい試みは海外旅行です。',
'###username###の新たしい試みはが高校のイベントに参加することです。',
'###username###の新たしい試みは富士山に登ることです。',
'###username###の新たしい試みは積みゲーを全て消費することです。',
'###username###の新たしい試みはゴルフです。',
'###username###の新たしい試みはジムに行くことです。',
];
function assessment(userName) {
let sum0fCharCode = 0;
for (let i = 0; i < userName.length; i++) {
 sum0fCharCode = sum0fCharCode + userName.charCodeAt(i); 
}
const index = sum0fCharCode % answers.length;
let result = answers[index];
result = result.replaceAll('###username###', userName);
return result;
}


console.log(assessment('太郎'));
console.log(assessment('次郎'));
console.log(assessment('太郎'));