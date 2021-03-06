/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var realName = document.getElementById('name1');
realName.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var realPos = document.getElementById('position2');
realPos.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
var newAlias = document.getElementById('alias3');
newAlias.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var pVerse = document.getElementsByClassName('profile');
pVerse[0].innerHTML = 'Am I black or am I white? Am I straight or Gay? Controversy.'


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
pVerse[1].innerHTML = 'Knowing is not enough, we must apply.'


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var maceWin = document.getElementsByClassName('alias');
maceWin[2].innerHTML = 'Mace Windu'


/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/
var truName = document.createElement('div');
truName.id ='name7';
truName.innerHTML = 'David Ige';
document.getElementById('nameParent').appendChild(truName);
 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/
var quote = document.createElement('div');
quote.id = 'alias8';
quote.innerHTML = 'Stay Thirsty My Friends.';
document.getElementById('aliasParent').appendChild(quote);


//Final Boss
/*9. Create your own profile.*/

