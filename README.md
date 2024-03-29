## Overview

1. [Description](#description)
2. [Deployment Link](#deployment-link)
3. [Installation](#installation)
4. [Technologies Used](#technologies)
5. [Deliverables](#deliverables)
6. [Planning/Build Process](#planning)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Key Learnings & Takeaways](#takeaways)
10. [Future Improvements](#future-improvements)

---

## <a name="description"></a> 1. Description

I started this project to refamiliarise myself with JavaScript and React.js after taking a break to learn some other programming languages. I wanted to build an online version of the Hangman game where a player attempts to guess the letters of an unknown random word.
Each letter of the word is visually represented by a dash when the player starts guessing which letters are in the word, one at a time. If the player guesses a letter that is part of the answer, the letter appears above the corresponding dash. If the letter is not in the answer, a new part of a stick figure appears.

<img src='./src/assets/images/startpage.jpg' alt='start page of game' height=450> <img src='./src/assets/images/game.jpg' alt='game' height=450>

For each incorrect guess, a new part of the Hangman figure, attached to a scaffold appears on the screen. The stick figure shows up in 6 different parts:

1. head
2. body
3. left arm
4. right arm
5. left leg
6. right leg

<img src='./src/assets/images/steps.jpg' alt='steps of stick figure appearing on screen'  width=500>

The game is won if all the letters of the random word are guessed correctly before the Hangman figure is finished i.e. with less than 6 wrong guesses. The game is lost after 6 wrong guesses at which point the Hangman figure is completed. The object of the game is to guess the unknown word before the stick figure is hung.

## <a name="deployment-link"></a> 2. Deployment link

http://hangman.katieloesch.co.uk

## <a name="installation"></a> 3. Installation

- package manager used: npm - v9.5.0
  - https://www.npmjs.com/package/npm
- to install dependencies, run:

```zsh
npm install
```

<br>

## <a name="technologies"></a> 4. Technologies Used

- This application is based in ReactJS (v18.2.0), JavaScript, JSX and SCSS.
  - it was created using the 'create-react-app' command
  - https://create-react-app.dev/

```zsh
npx create-react-app .
```

### UI

- fonts:
  - 'Mitr' designed by Cadson Demak
    - source: Font Squirrel
      - https://www.fontsquirrel.com/fonts/mitr
    - also available from Google Fonts:
      - https://fonts.google.com/specimen/Mitr
    - .woff files: assets/fonts directory
- icons:
  - iconify
    - https://icon-sets.iconify.design/
  - fontawesome
    - https://fontawesome.com/
- gifs:
  - [CodingNepal](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqblN2dkhHdVRxemFLT2JSZVFIN204MTllZ0xqd3xBQ3Jtc0tsb0FNRWU5eVZyU0xfdnlkN2dfNWFoT1dfRllDY0IyLVpGcTd1bTVQVjY1MWJBMGFZWTdER1JVV1Q0WGN0S2hIdzZqa2ptQnQ3T09rN1J2NTJ0REhfNFJsTm9zUkRiRlh5bEt3djNhb0tHaUlyY2lnWQ&q=https%3A%2F%2Fcodingnepalweb.com%2Fcustom-projects%2Fhangman-game-images.zip&v=hSSdc8vKP1I)
- hangman svg:
  - https://github.com/bradtraversy/vanillawebprojects/blob/master/hangman/index.html
  - https://github.com/bradtraversy/vanillawebprojects/blob/master/hangman/style.css

### Additional tools used:

- Git / GitHub
  - used for version control
  - https://git-scm.com/
  - https://github.com/https://github.com/
- Visual Studio Code (VSCode)
  - code editor used for writing CSS, JSX and JavaScript
- Google Chrome browser
  - used for launching the website and displaying the application Google Chrome
- Google Chrome Developer Tools: For troubleshooting and debugging
  - https://www.google.com/intl/en_uk/chrome/
- Hostinger: provider used to host the game online
  - https://www.hostinger.co.uk
- Excalidraw
  - used for building the wireframe
  - https://excalidraw.com/
- chatGTP
  - https://chat.openai.com/
  - used to retrieve data for the api files (animals.js, cities.js and animals.js)
  - source for remaining api (words.js): https://drive.google.com/file/d/1V3qIVPEtiJSlGEAqF_dMTF2HRGt_eq2U/view

### Resources and tutorials:

- List of random words (./src/api/words.js) by [codingNepal](https://drive.google.com/file/d/1V3qIVPEtiJSlGEAqF_dMTF2HRGt_eq2U/view)
- YouTube: [Build Hangman With React](https://www.youtube.com/watch?v=jj0W8tYX_q8) by [Traversy Media](https://www.youtube.com/@TraversyMedia)
- YouTube: [This Is A Great Beginner React/TypeScript Project](https://www.youtube.com/watch?v=-ONUyenGnWw&t=2s) by [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)
- Youtube: [Build A Hangman Game in HTML CSS and JavaScript | Hangman Game in HTML CSS and JavaScript](https://www.youtube.com/watch?app=desktop&v=hSSdc8vKP1I) by [CodingNepal](https://www.youtube.com/@CodingNepal)

## <a name="deliverables"></a> 5. Deliverables

### MVP

- a working game hosted online
- a git repository hosted on Github, including:

  - a link to the hosted game
  - frequent commits dating back to the very beginning of the project
  - code that is well-formatted and well-commented
  - semantic markup for HTML and CSS while adhering to best practices
  - adherence to KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles

- a Hangman game with the following features:

  - selection of a random word from a list of random words when the page loads
  - visually display a dash for each letter of the random word
  - if the player enters a letter that is in the random word, that letter should appear above the corresponding dash or dashes
  - if the player enters the same letter more than once they should be notified
  - if the player guesses all the letters of the words with 5 or fewer incorrect guesses, a message should be displayed to let the player know they've won
  - if the player makes 6 incorrect guesses, a message should be displayed to let the player know they've lost the game
  - for each wrong guess a new part of a Hangman figure should appear on the screen and the 6th wrong guess completes the figure
  - after winning or losing a game the player can start a new game by clicking a button

- the website should also:
  - include contact information -> email, GitHub, LinkedIn and other relevant links
  - have a mobile-responsive design

### Stretch Goals

- option to display a hint about the unknown random word
- different categories for random words for player to pick from
- animations
- sound effects
- scoreboard to keep track of wins and losses

## <a name="planning"></a>6. Planning / Build Process

This was a solo project I built over the course of 5 days.

### User Stories

- As a user, I should see a number of dashes corresponding to the letters of the random word I'm trying to guess.
- As a user, I should be able to enter letters to guess a random word.
- As a user, I should be able to tell if my guess is correct or not.
- As a user, I should see the correct letters guessed appear above the dashes on the screen.
- As a user, I should be able to see the incorrect letters I guessed appear on the screen separately from the correct letters.
- As a user, I should be notified if I enter the same letter more than once to guess the same word.
- As a user, I should be able to tell when I've won the game and when I've lost.
- As a user, I should be able to start a new game after winning or losing.
- As a user, I should have the option to get a hint about the random word I'm trying to guess.
- As a user, I should be able to easily find the developer's contact information including email, LinkedIn and GitHub accounts.
- As a user, I should be able to navigate the website from any device.

### Day 1 - 22/01/2024

I started this project by setting up a react app using the 'create-react-app' command.

```zsh
npx create-react-app .
```

After removing unnecessary files from the newly created project, I made a 'components' folder to store all the different react components needed for the game.

- header -> for the title and game instructions
- figure -> for the hangman figure
- hint -> for a hint about the random word that can be optionally displayed on the screen
- modal -> to notify the player when they win or lose the game
- notification -> to notify the player when they enter the same letter twice
- wrong letters -> to display the wrong letters guessed
- word -> to display the dashes and correct letters guessed
- contact icons -> to display links to LinkedIn/GitHub/portfolio/email

I also created a wireframe on Excalidraw to get an idea of the basic layout of the website.

<img src="./src/assets/images/wireframe.jpg" alt="wireframe" width="450">

### Day 2 - 23/01/2024

On the second day, I decided to add a keyboard component to the game to optionally display buttons for guessing letters in case the user doesn't want to type on their keyboard and would rather click on letter buttons on the screen.

<img src="./src/assets/images/keys.jpg" alt="keys" width="400">

I also worked on the modal notifying the player when they win or lose and started doing some styling for the different React components using SCSS.

### Day 3 - 24/01/2024

On the next day, I continued working on the keyboard because I wanted the buttons for the letters that had already been guessed to appear faded on the screen.

<img src="./src/assets/images/keys_faded.jpg" alt="keys faded after clicking them" width="400">

I achieved this by conditionally adding a class of 'faded' to each button. The className would be added to the button only if the letter on the button was included in the array of letters that were correct guesses or in the array of letters that were wrong guesses.

```JSX
<button className={`btn btn-letter ${(correctLetters.includes(letter.toLowerCase()) ||
                                      wrongLetters.includes(letter.toLowerCase()))
                                      && 'faded'}`}
                    key={`key-${index}`}
                    onClick={() => handleKeyClick(letter)}
 >
  {letter.toUpperCase()}
</button>

```

I then added a different styling for the keys that have the 'faded' class in the SCSS file to give them a more faded colour than the other keys.

```SCSS
 .btn-letter {

    background-color: rgb(97,69,106);
    border: 1px solid rgb(202, 171, 215);
    color: rgb(202, 171, 215);;

    &.faded {
        border: 1px solid rgb(120, 83, 132);
        color: rgb(120, 83, 132);
    }
  }
```

I also started writing media queries to make the website accessible from different devices and added the icons for my contact information linking to my:

- LinkedIn profile
- email address
- GitHub profile
- portfolio website
- this GitHub repository with the code for the game

<img src="./src/assets/images/contact.jpg" alt="contact icons" width=250>

### Day 4 - 25/01/2024

On day 4 I finished the remaining media queries for the responsive design and deployed the project using Hostinger. I also started writing the content for this readme.md file.

### Day 5 - 26/01/2024

On the final day working on this project, I finished writing the readme.md file and decided to add different categories the user can pick from when a random word is selected. I created new files for 3 additional categories:

- animals.js
- films.js
- cities.js

I used chatGTP to generate information to display as a hint for each word.<br>
(The api file I originally used (words.js) was not generated with chatGTP, it was downloaded from [codingNepal](https://drive.google.com/file/d/1V3qIVPEtiJSlGEAqF_dMTF2HRGt_eq2U/view))

<img src="./src/assets/images/category.jpg" alt="category display" width=200>
<br>
<img src="./src/assets/images/dropdown.jpg" alt="category dropdown menu" width=200>

## 7. <a name="challenges"></a> Challenges

## 8. <a name="wins"></a> Wins

- fully responsive design
- keyboard with fading effect

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

## <a name="future-improvements"></a> 10. Future Improvements

- option for multiple players
- scoreboard to keep track of wins and losses
- sound effects + animations
