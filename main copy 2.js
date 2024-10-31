
let myJson = "./dataTarget.json";


let historical_context = [
  "medieval", "renaissance", "colonial", "industrial revolution", "enlightenment", "modern", "early american", 
  "ancient", "victorian", "georgian", "middle ages", "classical", "age of reason", "imperial age", "byzantine", 
  "dark ages", "feudal", "early modern", "pre-colonial", "civil war", "revolution", "independence", "world war", 
  "exploration", "discovery", "treaty", "invasion", "conquest", "crusades", "expansion", "plague", "rebellion", 
  "uprising", "colonization", "industrialization", "migration", "diaspora", "abolition", "enfranchisement", 
  "capitalism", "trade", "commerce", "markets", "wealth", "industry", "labor", "business", "free market", 
  "enterprise", "merchant", "economy", "globalization", "corporation", "investment", "monopoly", "competition", 
  "currency", "stocks", "venture", "profit", "supply", "demand", "market forces", "inflation", "commodities", 
  "imperialism", "decolonization", "nationalism", "suffrage", "socialism", "communism", "feminism", "civil rights", 
  "indigenous rights", "environmentalism", "human rights", "genocide", "apartheid", "slavery", "emancipation", 
  "feudalism", "serfdom", "chivalry", "enlightenment philosophy", "scientific revolution", "romanticism", "reformation", 
  "counter-reformation", "cold war", "space race", "age of exploration", "mercantilism", "guilds", "agrarian society", 
  "urbanization", "consumerism", "modernism", "postmodernism", "information age", "digital revolution", "cybersecurity", 
  "biotechnology", "industrial decline", "sustainability", "global crises", "pandemics", "climate change", "nuclear age", 
  "democracy", "republic", "monarchy", "dictatorship", "feudal society", "dynasty", "empire", "scientific discovery", 
  "railroad expansion", "telecommunications", "internet revolution", "privacy", "transparency", "social justice"
];

let politics = [
  "monarchy", "republic", "democracy", "socialism", "communism", "dictatorship", "fascism", "anarchy", "oligarchy", 
  "parliament", "totalitarianism", "federalism", "theocracy", "autocracy", "liberalism", "conservatism", "feudalism", 
  "authoritarianism", "tyranny", "plutocracy", "liberty", "freedom", "justice", "equality", "rebellion", "revolt", 
  "resistance", "reform", "change", "rights", "revolution", "independence", "self-determination", "emancipation", 
  "insurrection", "defiance", "overthrow", "abolition", "protest", "civil disobedience", "struggle", "leader", 
  "ruler", "dictator", "emperor", "king", "laws", "policy", "imperial", "authority", "tyranny", "command", 
  "sovereignty", "government", "control", "dominion", "oppression", "governance", "rule", "regime", "bureaucracy", 
  "empowerment", "subjugation", "lobbying", "diplomacy", "propaganda", "election", "suffrage", "campaign", "coup d'état", 
  "senate", "congress", "assembly", "council", "municipality", "legislation", "judiciary", "executive", "citizenship", 
  "patriotism", "nationalism", "separatism", "militarism", "civil service", "public policy", "social contract", 
  "taxation", "welfare state", "judicial review", "checks and balances", "centralism", "localism", "unionism", 
  "populism", "elitism", "meritocracy", "paternalism", "imperialism", "colonialism", "human rights", "international law", 
  "geopolitics", "statecraft", "sanctions", "treaties", "alliances", "nonviolence", "peacekeeping", "national security", 
  "surveillance", "policing", "martial law", "emergency powers", "partisanship", "ideology", "sectarianism", "polarization", 
  "libertarianism", "progressivism", "traditionalism", "radicalism", "integration", "decentralization", "privatization"
];

let social_and_cultural_ideologies = [
  "peasants", "aristocracy", "working class", "bourgeoisie", "lords", "proletariat", "servants", "elite", "slaves", 
  "serfdom", "capitalist", "landowner", "tenant", "guild", "nobility", "gentry", "baron", "duke", "vassal", 
  "feudal lord", "estate", "indentured servant", "bourgeois", "plebeian", "african", "asian", "european", 
  "native american", "hispanic", "racism", "civilization", "savage", "barbarism", "ethnic", "tribal", 
  "multicultural", "segregation", "race", "colonial", "indigenous", "cultural superiority", "racial purity", 
  "ethnicity", "diaspora", "creole", "mestizo", "racialized", "inferiority", "nationalism", "exclusion", 
  "christianity", "islam", "judaism", "buddhism", "hinduism", "paganism", "atheism", "deism", "god", "church", 
  "priest", "monk", "prophet", "holy", "sacred", "temple", "missionary", "ritual", "ceremony", "pilgrimage", 
  "faith", "belief", "heresy", "doctrine", "orthodoxy", "salvation", "hell", "devotion", "martyrdom", 
  "caste", "clan", "family", "lineage", "ancestry", "hierarchy", "tradition", "patriarchy", "matriarchy", 
  "kinship", "solidarity", "community", "collectivism", "individualism", "identity", "stereotype", "discrimination", 
  "prejudice", "xenophobia", "assimilation", "acculturation", "ethnocentrism", "cultural relativism", 
  "social stratification", "cultural appropriation", "mythology", "folklore", "superstition", "legend", 
  "totemism", "animism", "shamanism", "ancestor worship", "polytheism", "monotheism", "syncretism", 
  "agnosticism", "spirituality", "witchcraft", "alchemy", "mysticism", "sorcery", "astrology", 
  "enlightenment", "philosophy", "idealism", "materialism", "realism", "nihilism", "existentialism", 
  "humanism", "transcendentalism", "romanticism", "secularism", "fundamentalism", "moral relativism", 
  "social contract", "moral code", "virtue ethics", "utilitarianism", "aesthetics", "ethics", "values", 
  "rites of passage", "social customs", "taboo", "manners", "hospitality", "social norms", "public opinion"
];

let gender = [
  "women", "men", "masculinity", "femininity", "patriarchy", "motherhood", "fatherhood", "equality", "feminism", 
  "matriarchy", "gender roles", "gender identity", "suffrage", "oppression", "womanhood", "manhood", "toxic masculinity", 
  "misogyny", "male dominance", "subordination", "sexuality", "gender norms", "gender binary", "non-binary", 
  "gender fluid", "transgender", "cisgender", "genderqueer", "intersex", "two-spirit", "gender expression", 
  "gender dysphoria", "sexual orientation", "queer", "gender non-conforming", "gender parity", "agender", "demiboy", 
  "demigirl", "androgyne", "third gender", "gender transition", "transfeminine", "transmasculine", "gender abolition", 
  "gender spectrum", "intersectionality", "gender variance", "misandry", "gender affirmation", "gender euphoria", 
  "gender fluidity", "pangender", "bigender", "gender performance", "hegemonic masculinity", "intersectional feminism", 
  "sexual dimorphism", "gender-affirming care", "neutrois", "sissy", "butch", "femme", "androcentrism", "sexism", 
  "gender pay gap", "glass ceiling", "gender segregation", "body positivity", "self-identification", "allyship", 
  "gender policing", "empowerment", "self-expression", "transmisogyny", "nonconforming", "gender inclusivity", 
  "feminist movement", "equal rights", "gender sensitivity", "social construct", "masculine-of-center", "feminine-of-center", 
  "gender fluidity", "queer theory", "masculine pride", "feminine pride", "machismo", "androgyny", "sexual autonomy", 
  "feminine mystique", "male privilege", "female empowerment", "LGBTQIA+", "socialization", "male gaze", 
  "heteronormativity", "gender equality", "gender stereotypes", "cisnormativity", "gender power dynamics", "inclusive language"
];

let abolitionism = [
  "abolition", "freedom", "emancipation", "anti-slavery", "slave trade", "underground railroad", "manumission", 
  "liberation", "abolitionist", "human rights", "civil rights", "abolitionist movement", "free soil", "antislavery society", 
  "freedom seekers", "fugitive slave", "emancipation proclamation", "13th amendment", "slave rebellion", "freedom papers", 
  "moral suasion", "radical abolition", "gradual emancipation", "immediate emancipation", "equal rights", "slave narrative", 
  "suffrage", "oppression", "resistance", "freedom fighters", "human dignity", "equal protection", "reparations", 
  "abolitionist literature", "slave auction", "plantation", "bondage", "servitude", "antislavery press", 
  "liberty", "justice", "William Lloyd Garrison", "Frederick Douglass", "Harriet Tubman", "Sojourner Truth", 
  "John Brown", "Quakers", "abolitionist speeches", "liberty laws", "freedom trail", "abolitionist pamphlet", 
  "black codes", "slave codes", "free black community", "abolitionist newspaper", "underground network", 
  "freedom suits", "abolitionist societies", "racial equality", "humanitarianism", "American Anti-Slavery Society", 
  "abolitionist conventions", "freedom songs", "abolitionist petitions", "freedom of movement", "abolitionist press", 
  "equal justice", "Amistad case", "slave revolt", "manumitted", "emancipator", "bonded labor", "racial justice", 
  "abolitionist publications", "liberty party", "moral obligation", "freedom fund", "civil disobedience", "slave emancipation", 
  "economic freedom", "colonization movement", "abolitionist campaigns", "abolitionist literature", "black abolitionists", 
  "abolitionist allies", "slave narratives", "anti-bondage", "slave liberation", "liberty bell", "abolitionist gatherings"
];


console.log("those are gender terms:", gender)

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok (status ${response.status})`);
    }
    const data = await response.json(myJson);   
    return data.slice(0, 25000);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
}

function showLoading() {
  const app = d3.select('.main');
  app.append('div')
    .attr('class', 'loading')
    .text('...LOADING...');
}

function hideLoading() {
  d3.select('.loading').remove();
}

showLoading();

const historyColor = "rgb(249, 88, 105)";
const politicColor = "rgb(45, 84, 174)";
const genderColor = "rgb(45, 103, 88)";
const socialColor = "rgb(208, 138, 105)";
const invisitageColor = "rgb(255, 255, 255)";


const dataPromise = fetchData(myJson)
  .then(data => {
  hideLoading();
  console.log("this is My data", data);

  // Fragment use. to reduce reflows and improve performance
  const fragment = document.createDocumentFragment();
  
  // select the main div
  const app = d3.select('.main-viz');
  let btnContainer = app.append('div').attr('class','btns')
  let btns = document.createElement('div')
  btns.id = 'allBtnContainer'
  btns.className = "allBtns"
  btnContainer.node().appendChild(btns);

  const mainContainer = app.append('div').attr('class', 'main-viz-container');
  let subContainer = document.createElement('div');
  subContainer.className = 'sub-container x1';


  
  // Loop through data and return only the name property
  const names = data.map(item => item.name);
  const type = data.map(item => item.objectType);
  console.log("–––––––>> Thos are Names:",  names);
  console.log("type:",  type);

  
  names.forEach((name, index) => {
    const div = document.createElement('div');
    div.className = 'sub-div-text x1';
    div.id = 'sub-div-text'
    div.style.fontSize = '0.5em';
    div.style.padding = "0.4em"

    let lowerCaseName = name.toLowerCase();
    let tokens = lowerCaseName.split(' ');
    console.log('this is my tokens', tokens);

    subContainer.appendChild(div);
    
    if ((index+1) % 1 === 0) {
      fragment.appendChild(subContainer);
      subContainer = document.createElement('div');
      subContainer.className = 'sub-container x1';
      //console.log("----->>> INDEX",index)
    }

    tokens.forEach(token => { 
      const span = document.createElement('span');
      if (historical_context.some(w => token.toLowerCase() === w.toLowerCase())) {
        span.textContent = token;
        span.style.background = `${historyColor}`;
        span.classList.add('historical');
      } else if (politics.some(w => token.toLowerCase() === w.toLowerCase())) {
        span.textContent = token;
        span.style.background = `${politicColor}`;
        span.classList.add('political');
      } else if (social_and_cultural_ideologies.some(w => token.toLowerCase() === w.toLowerCase())) {
        span.textContent = token;
        span.style.background = `${socialColor}`;
        span.classList.add('social');
      } else if (gender.some(w => token.toLowerCase() === w.toLowerCase())) {
        span.textContent = token;
        span.style.background = `${genderColor}`;
        span.classList.add('gender');
      } else {
        span.textContent = token;
        span.classList.add('notHighlight');
      }
      div.appendChild(span);
      div.appendChild(document.createTextNode(' '));

      div.addEventListener('mouseover', () => {
        const titel_div = document.createElement('div');
        titel_div.className = 'popUpDiv';
        titel_div.textContent = `    ${span.textContent.toLocaleUpperCase()}`;
        span.classList.forEach(className => {
          titel_div.classList.add(className);
          if (className === 'historical') {
            titel_div.style.backgroundColor = historyColor;
          } else if (className === 'political') {
            titel_div.style.backgroundColor = politicColor;
          } else if (className === 'social') {
            titel_div.style.backgroundColor = socialColor;
          } else if (className === 'gender') {
            titel_div.style.backgroundColor = genderColor;
          }
        });
        const menu_div = document.querySelector('.menu-left');
        menu_div.appendChild(titel_div);
        console.log('HI you iiiiiii');
      });

      div.addEventListener('mouseout', () => {
        const titel_div = document.querySelector('.popUpDiv');
        if (titel_div) {
          titel_div.remove();
        }
      });

    
    });

  }); 



    function createButton(category, color, className) {
        const button = document.createElement('button');
        button.textContent = `${category}`;
        button.style.backgroundColor = color;
        button.style.padding = '0.5em 2.5em 0.5em 2.5em';
        button.style.borderRadius = '1em'
        button.style.border = `0.1em solid ${color}`
        button.style.color = 'white'

        button.onmouseover = () => {
          button.style.backgroundColor = 'black';
          button.style.color = 'white';
          button.style.border = `0.1em solid ${color}`
          button.style.cursor = 'pointer';;
        };
        button.onmouseout = () => {
          button.style.backgroundColor = color;
          button.style.color = 'white';
          button.style.border = `0.1em solid ${color}`
        };
      
        button.addEventListener('click', () => {
          const spans = document.querySelectorAll(`.${className}`);
          spans.forEach(span => {
            if (span.style.backgroundColor === color) {
              span.style.backgroundColor = '';
            } else {
              span.style.backgroundColor = color;
            }
          });
          const rect = document.querySelector(`${className}`);
          if (rect) rect.classList.toggle('highlight');
        });
        return button;
      }

    function createIvisitageBtn(btnTitle, color, className) {
        const button = document.createElement('button');
        button.textContent = `${btnTitle}`;
        button.style.backgroundColor = color;
        button.style.padding = '0.5em 2.5em 0.5em 2.5em';
        button.style.borderRadius = '1em'
        button.style.border = `0.1em solid ${color}`

        button.onmouseover = () => {
          button.style.backgroundColor = 'black';
          button.style.color = 'white';
          button.style.border = `0.1em solid ${color}`
          button.style.cursor = 'pointer';;
        };
        button.onmouseout = () => {
          button.style.backgroundColor = color;
          button.style.color = 'black';
          button.style.border = `0.1em solid ${color}`
        };
      
        button.addEventListener('click', () => {
          const spans = document.querySelectorAll(`.${className}`);
          spans.forEach(span => {
            if (span.style.color === "black") {
              span.style.color = "white";
            } else {
              span.style.color = "black";
            }
          });
        });
        return button;
      }
      if (btns) {
        const buttonContainer = d3.select(btns).append('div').attr('class', 'button-container');
        const subButtonContainer = d3.select(btns).append('div').attr('class', 'subButton-container');
        subButtonContainer.node().appendChild(createIvisitageBtn('Invisitage', `${invisitageColor}`, 'notHighlight'));
        buttonContainer.node().appendChild(createButton('Politics', `${politicColor}`, 'political'));
        buttonContainer.node().appendChild(createButton('Gender', `${genderColor}`, 'gender'));
        buttonContainer.node().appendChild(createButton('Social', `${socialColor}`, 'social'));
        buttonContainer.node().appendChild(createButton('Historical', `${historyColor}`, 'historical'));
      } else {
        console.error('Element with ID "butnContainer" not found.');
      }

      
  let historicalCount = 0;
  let politicalCount = 0;
  let socialCount = 0;
  let genderCount = 0;

  function countWords(data) {
    data.forEach(item => {
      const tokens = item.name.toLowerCase().split(' ');
      tokens.forEach(token => {
        if (historical_context.some(w => token.toLowerCase() === w.toLowerCase())) {
          historicalCount++;
        }
        if (social_and_cultural_ideologies.some(w => token.toLowerCase() === w.toLowerCase())) {
          socialCount++;
        }
        if (politics.some(w => token.toLowerCase() === w.toLowerCase())) {
          politicalCount++;
        }
        if (gender.some(w => token.toLowerCase() === w.toLowerCase())) {
          genderCount++;
        }
      });
    });

    
  
    //secondary visualization div structure
    const secVizContainer = app.append('div').attr('class','sec-viz-container')
    const chartContainer = secVizContainer.append('div').attr('id','chartContainer').attr('class','chartContainer')
    secVizContainer.node().appendChild(chartContainer.node());

    // Bar for each group
    const totalCount = historicalCount + politicalCount + socialCount + genderCount;
    const historicalWidth = (historicalCount / totalCount) * 100;
    const politicalWidth = (politicalCount / totalCount) * 100;
    const socialWidth = (socialCount / totalCount) * 100;
    const genderWidth = (genderCount / totalCount) * 100;

    const barPadding = "0.5em"
    
    const stackedBar = chartContainer.append('div')
      .attr('class', 'stacked-bar')
      .style('display', 'flex')
      .style('width', '100%');
      
    stackedBar.append('div')
      .attr('class', 'rect-political')
      .style('width', `${politicalWidth}%`)
      .style('background-color', `${politicColor}`)
      .style('padding', `${barPadding}`);

    stackedBar.append('div')
      .attr('class', 'rect-gender')
      .style('width', `${genderWidth}%`)
      .style('background-color', `${genderColor}`)
      .style('padding', `${barPadding}`);

      
      stackedBar.append('div')
      .attr('class', 'rect-social')
      .style('width', `${socialWidth}%`)
      .style('background-color', `${socialColor}`)
      .style('padding', `${barPadding}`); 
      
      stackedBar.append('div')
        .attr('class', 'rect-historical')
        .style('width', `${historicalWidth}%`)
        .style('background-color', `${historyColor}`)
        .style('padding', `${barPadding}`)
    const textStackedBar = chartContainer.append('div')
      .attr('class', 'stacked-bar')
      .style('display', 'flex')
      .style('width', '100%');

    textStackedBar.append('div')
      .attr('class', 'rect-political')
      .style('width', `${politicalWidth}%`)
      .style('padding', `${barPadding}`)
      .text(`Potitics: ${politicalCount}`);

    textStackedBar.append('div')
      .attr('class', 'rect-gender')
      .style('width', `${genderWidth}%`)
      .style('padding', `${barPadding}`)
      .text(`Gender: ${genderCount}`);
      
    textStackedBar.append('div')
      .attr('class', 'rect-social')
      .style('width', `${socialWidth}%`)
      .style('padding', `${barPadding}`)
      .text(`Soical: ${socialCount}`);
 
    textStackedBar.append('div')
      .attr('class', 'rect-historical')
      .style('width', `${historicalWidth}%`)
      .style('padding', `${barPadding}`)
      .text(`History: ${historicalCount}`);
    }

  countWords(data);

 

  // Append the last sub-container if it has any children
  if (subContainer.children.length > 0) {
    fragment.appendChild(subContainer);
  }
  mainContainer.append(() => fragment);

}).catch(error => {
  hideLoading();
  console.error('Error:', error);
});


  

 
  
  