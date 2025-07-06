const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const insertX = ['怪兽威利', '大老爹', '圣诞老人'];
const insertY = ['肯德基', '迪士尼乐园', '白宫'];
const insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了'];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener('click', result);

function result() {
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  let storyText = `今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 140 公斤的胖子，天气又辣么热。`;

  storyText = storyText.replaceAll(':inserta:', xItem);
  storyText = storyText.replaceAll(':insertb:', yItem);
  storyText = storyText.replaceAll(':insertc:', zItem);

  if (customName.value !== '') {
    let name = customName.value;
    storyText = storyText.replaceAll('李雷', name);
  }

  if (document.getElementById("american").checked) {
    let weight = Math.round(140 * 2.20462);
    let temperature = Math.round(34 * 9 / 5 + 32);

    storyText = storyText.replace('34 摄氏度', `${temperature} 华氏度`);
    storyText = storyText.replace('140 公斤', `${weight} 磅`);
  }

  story.textContent = storyText;
  story.style.visibility = 'visible';
}
