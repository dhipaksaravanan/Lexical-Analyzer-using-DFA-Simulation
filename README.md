# Lexical Analyzer using DFA Simulation

A web-based tool that simulates lexical analysis using a deterministic finite automaton (DFA).  
Users enter input text (lexemes) and the application displays the token type, the DFA states traversed, and the token table produced.

## Demo  
Visit the live demo here: [https://lexical-analyzer-using-dfa-simulati.vercel.app/](https://lexical-analyzer-using-dfa-simulati.vercel.app/)

## Features  
- Accepts an input string of lexemes.  
- Uses a DFA simulation to recognize different token types.  
- Displays a token table showing:  
  - Lexeme  
  - Token Type  
  - DFA States Traversed  
- Built as a learning/teaching aid for compiler theory / lexical analysis.

## Token Types (example)  
- Identifiers  
- Keywords  
- Operators  
- Constants / Numeric literals  
- Separators / Punctuation  
- Others (invalid lexeme)  

## How it works  
1. The user types or pastes an input string of lexemes.  
2. The underlying DFA transitions through states based on the current character.  
3. As tokens are recognized (or errors found), they are listed in the token table with the path of states.  
4. The end result provides visibility into how lexical analysis works under the hood.

## Technology Stack  
- Front-end: HTML5 / CSS3 / JavaScript (or your framework/library if applicable)  
- Automaton logic: JavaScript functions modelling state transitions for the DFA  
- UI: A clean table representation of tokens and state traversal  
- Hosting: Deployed on [Vercel](https://vercel.com/) (via the `.vercel.app` domain)

## Installation & Usage  
To run locally:  
```bash
# Clone this repository
git clone <repository-url>
cd lexical-analyzer-using-dfa

# (If using dependency manager)
npm install   # or yarn install

# Run in development mode
npm start     # or yarn start

# Open http://localhost:3000 (or whatever port) in your browser
