
//This file contains all quiz questions and answers
let questions = [
    //History Questions
    {
    title: "Who was Taoiseach on VE Day, in 1945?",
    options: ["W.T. Cosgrave", "Eamon De Valera", "Seán Lemass", "Jack Lynch"],
    asked: false,
    correctAnswer: "Eamon De Valera",
    category: "History"

}, {
    title: "What was the name of Henry VIII's first wife?",
    options: ["Jane Seymour", "Anne Boleyn", "Catherine of Aragon", "Anne of Cleves"],
    asked: false,
    correctAnswer: "Catherine of Aragon",
    category: "History"
},
{
    title: "What year did the battle of Clontarf take place?",
    options: ["1014", "1023", "1145", "994"],
    asked: false,
    correctAnswer: "1014",
    category: "History"
},
{
    title: "Whose assassination in June 1914 sparked the First World War?",
    options: ["Woodrow Wilson", "Kaiser", "Lloyd George", "Archduke Franz Ferdinand"],
    asked: false,
    correctAnswer: "Archduke Franz Ferdinand",
    category: "History"
},
{
    title: "In what year was the Chernobyl disaster?",
    options: ["1981", "1975", "1989", "1986"],
    asked: false,
    correctAnswer: "1986",
    category: "History"
},
{
    title: "How many years did Nelson Mandela spend in prison?",
    options: ["27", "21", "24", "29"],
    asked: false,
    correctAnswer: "27",
    category: "History"
},
{
    title: "What year was Michael Collins killed?",
    options: ["1919", "1920", "1921", "1922"],
    asked: false,
    correctAnswer: "1922",
    category: "History"
},
{
    title: "Which country was the first to give women the right to vote, in 1893?",
    options: ["France", "Australia", "New Zealand", "United States"],
    asked: false,
    correctAnswer: "New Zealand",
    category: "History"
},
{
    title: "How many sitting US presidents have been assassinated?",
    options: ["5", "4", "3", "2"],
    asked: false,
    correctAnswer: "4",
    category: "History"
},
{
    title: "The Troubles in Northern Ireland were brought to an end in 1998 with the signing of what document?",
    options: ["The Good Friday Agreement", "Anglo Irish Agreement", "Sunningdale Agreement", "Schengen Agreement"],
    asked: false,
    correctAnswer: "The Good Friday Agreement",
    category: "History"
},
//Sports Questions
{
    title: "In football, which team has won the Champions League the most?",
    options: ["Barcelona", "AC Milan", "Real Madrid", "Liverpool"],
    asked: false,
    correctAnswer: "Real Madrid",
    category: "Sport"
},
{
    title: "In tennis, what piece of fruit is found at the top of the men's Wimbledon trophy?",
    options: ["Pineapple", "Orange", "Banana", "Strawberry"],
    asked: false,
    correctAnswer: "Pineapple",
    category: "Sport"
},

{
    title: "Who won the FIFA Women's World Cup in 2019?",
    options: ["Canada", "USA", "England", "Sweden"],
    asked: false,
    correctAnswer: "USA",
    category: "Sport"
},
{
    title: "In bowling, what is the term given for three consecutive strikes?",
    options: ["Couplet", "Trio", "Hat-trick", "Turkey"],
    asked: false,
    correctAnswer: "Turkey",
    category: "Sport"
},

{
    title: "How many players are there in a rugby league team?",
    options: ["15", "13", "14", "12"],
    asked: false,
    correctAnswer: "13",
    category: "Sport"
},
{
    title: "The LA Lakers and New York Knicks play which sport?",
    options: ["Basketball", "Baseball", "American Football", "Lacrosse"],
    asked: false,
    correctAnswer: "Basketball",
    category: "Sport"
},

{
    title: "Which country did F1 legend Ayrton Senna come from?",
    options: ["Colombia", "Argentina", "Brazil", "Peru"],
    asked: false,
    correctAnswer: "Brazil",
    category: "Sport"
},
{
    title: "A penalty in football is taken how many yards away from the goal?",
    options: ["10", "9", "11", "12"],
    asked: false,
    correctAnswer: "12",
    category: "Sport"
},

{
    title: "Katarina Johnson-Thompson is world champion in which sport?",
    options: ["Javelin", "Heptathlon", "Gymnastics", "Rowing"],
    asked: false,
    correctAnswer: "Heptathlon",
    category: "Sport"
},
{
    title: "How many clubs did David Beckham play for during his career?",
    options: ["4", "5", "6", "7"],
    asked: false,
    correctAnswer: "6",
    category: "Sport"
},
//General Knowledge Questions
{
    title: "What is the smallest country in the world?",
    options: ["Malta", "Vatican City", "Ireland", "Gibraltar"],
    asked: false,
    correctAnswer: "Vatican City",
    category: "General Knowledge"
},
{
    title: "Which is the only vowel not used as the first letter in a US State?",
    options: ["E", "A", "I", "U"],
    asked: false,
    correctAnswer: "E",
    category: "General Knowledge"
},

{
    title: "What is the hottest continent on Earth?",
    options: ["Asia", "Europe", "Africa", "South America"],
    asked: false,
    correctAnswer: "Africa",
    category: "General Knowledge"
},
{
    title: "What is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    asked: false,
    correctAnswer: "Nile",
    category: "General Knowledge"
},

{
    title: "What is the largest country in the world?",
    options: ["Australia", "USA", "China", "Russia"],
    asked: false,
    correctAnswer: "Russia",
    category: "General Knowledge"
},
{
    title: "Alberta is a province of which country?",
    options: ["USA", "New Zealand", "Canada", "Australia"],
    asked: false,
    correctAnswer: "Canada",
    category: "General Knowledge"
},

{
    title: "What is the capital of Chile?",
    options: ["Bogota", "Santiago", "Medellin", "Lima"],
    asked: false,
    correctAnswer: "Santiago",
    category: "General Knowledge"
},
{
    title: "Where would you find the River Thames?",
    options: ["London", "Dublin", "Edinburgh", "Cardiff"],
    asked: false,
    correctAnswer: "London",
    category: "General Knowledge"
},

{
    title: "How many countries still have the shilling as currency?",
    options: ["1", "2", "3", "4"],
    asked: false,
    correctAnswer: "4",
    category: "General Knowledge"
},
{
    title: "What is the highest mountain in Britain?",
    options: ["Snowdon", "Ben Nevis", "Scottish Highlands", "Slieve Donard"],
    asked: false,
    correctAnswer: "Ben Nevis",
    category: "General Knowledge"
},

//Music Questions
{
    title: "One Direction is known for being the runners-up in The X Factor in 2010, but who came first?",
    options: ["Leona Lewis", "JLS", "Matt Cardle", "Olly Murs"],
    asked: false,
    correctAnswer: "Matt Cardle",
    category: "Music"
},
{
    title: "Which singer has the most UK Number One singles ever?",
    options: ["Paul McCartney", "Tom Jones", "Elton John", "Elvis Presley"],
    asked: false,
    correctAnswer: "Elvis Presley",
    category: "Music"
},

{
    title: "What was Britney Spears’ first single called?",
    options: ["Baby One More Time", "Toxic", "Criminal", "Womanizer"],
    asked: false,
    correctAnswer: "Baby One More Time",
    category: "Music"
},
{
    title: "Who is the only singer to have ever performed more than one James Bond theme song?",
    options: ["Sam Smith", "Adele", "Shirley Bassey", "Alicia Keys"],
    asked: false,
    correctAnswer: "Shirley Bassey",
    category: "Music"
},

{
    title: "Who is the only musician ever to have been awarded the Nobel prize for literature?",
    options: ["John Lennon", "Billy Joel", "David Bowie", "Bob Dylan"],
    asked: false,
    correctAnswer: "Bob Dylan",
    category: "Music"
},
{
    title: "Which Beatles song was banned from the BBC for its lyrics?",
    options: ["I am the Walrus", "Here Comes the Sun", "And I Love Her", "Blackbird"],
    asked: false,
    correctAnswer: "I am the Walrus",
    category: "Music"
},

{
    title: "Who was the first female artist to achieve a UK number one with a self-written song?",
    options: ["Lily Allen", "Katie Tunstall", "Katie Bush", "Adele"],
    asked: false,
    correctAnswer: "Katie Bush",
    category: "Music"
},
{
    title: "What is the real name of U2’s guitarist, known as The Edge?",
    options: ["Mark Blumenthal", "David Evans", "Chris Bird", "Danny Fox"],
    asked: false,
    correctAnswer: "David Evans",
    category: "Music"
},

{
    title: "What was David Bowie’s real name?",
    options: ["David Jameson", "David Johnson", "David James", "David Jones"],
    asked: false,
    correctAnswer: "David Jones",
    category: "Music"
},
{
    title: "In what year did Elvis Presley die?",
    options: ["1975", "1976", "1977", "1978"],
    asked: false,
    correctAnswer: "1977",
    category: "Music"
},

//Television Questions
{
    title: "What is the capital of Westeros in Game of Thrones?",
    options: ["Winterfell", "Casterly Rock", "King's Landing", "Braavos"],
    asked: false,
    correctAnswer: "King's Landing",
    category: "Television"
},
{
    title: "Who presented TV quiz Blockbusters between 1983 and 1995?",
    options: ["Bob Holness", "Donna Ale", "Kaye Adams", "Rick Adams"],
    asked: false,
    correctAnswer: "Bob Holness",
    category: "Television"
},

{
    title: "In Netflix's Tiger King, what is the name of Carole Baskin's second husband who many believe she fed to the tigers?",
    options: ["Rupert Murdoch", "Don Lewis", "James Blake", "Danny Boyle"],
    asked: false,
    correctAnswer: "Don Lewis",
    category: "Television"
},
{
    title: "In Emmerdale, on New Year's Day in 2004, who died when The Woolpack pub's chimney came crashing down in a storm?",
    options: ["Dan Spencer", "Lydia Hart", "Trisha Dingle", "Aaron Livesy"],
    asked: false,
    correctAnswer: "Trisha Dingle",
    category: "Television"
},

{
    title: "In what Netflix series does actress Gillian Anderson play a sex therapist?",
    options: ["Sex Education", "Better Call Saul", "The Sinner", "Skins"],
    asked: false,
    correctAnswer: "Sex Education",
    category: "Television"
},
{
    title: "Who played Queen Elizabeth II in the first two seasons of The Crown?",
    options: ["Helena Bonham Carter", "Erin Doherty", "Olivia Colman", "Claire Foy"],
    asked: false,
    correctAnswer: "Claire Foy",
    category: "Television"
},

{
    title: "BBC Three series Normal People is based on a book but who is the author?",
    options: ["George R.R. Martin", "Sally Rooney", "John Steinbeck", "Ernest Hemingway"],
    asked: false,
    correctAnswer: "Sally Rooney",
    category: "Television"
},
{
    title: "The six main stars of Friends appeared in all 236 episodes. Who is the next most regular character to appear in the show?",
    options: ["Gunther", "Janice", "Ben", "Richard"],
    asked: false,
    correctAnswer: "Gunther",
    category: "Television"
},

{
    title: "Who does the voiceover on Love Island?",
    options: ["Ben Chilwell", "Iain Stirling", "James Bloom", "Dermot O'Leary"],
    asked: false,
    correctAnswer: "Iain Stirling",
    category: "Television"
},
{
    title: "In what year was the first episode of Coronation Street broadcasted on ITV?",
    options: ["1957", "1958", "1959", "1960"],
    asked: false,
    correctAnswer: "1960",
    category: "Television"
},





]