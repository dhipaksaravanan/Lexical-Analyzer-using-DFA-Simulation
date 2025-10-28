// Keywords, operators, and DFA simulation for lexical analysis

const keywords = ["if", "else", "while", "for", "int", "float", "return"];
const operators = ["+", "-", "*", "/", "=", "==", "<", ">", "<=", ">="];

function analyze() {
  const input = document.getElementById("inputCode").value.trim();
  const tokens = tokenize(input);
  renderTokens(tokens);
}

// Simple tokenizer using DFA-like simulation
function tokenize(input) {
  const tokens = [];
  const words = input.split(/(\s+|[\+\-\*\/=<>;(){}])/).filter(Boolean);

  for (let word of words) {
    let states = ["q0"]; // Start at q0 (initial state)
    let tokenType = "";

    if (keywords.includes(word)) {
      states.push("q1_keyword");
      tokenType = "Keyword";
    } else if (/^[a-zA-Z_]\w*$/.test(word)) {
      // Identifier DFA
      states.push("q1_id");
      for (let i = 1; i < word.length; i++) {
        states.push(`q${i + 1}_id`);
      }
      tokenType = "Identifier";
    } else if (/^[0-9]+(\.[0-9]+)?$/.test(word)) {
      // Number DFA
      states.push("q1_num");
      if (word.includes(".")) states.push("q2_decimal");
      tokenType = "Number";
    } else if (operators.includes(word)) {
      states.push("q1_op");
      tokenType = "Operator";
    } else if (/^[;(){}]$/.test(word)) {
      states.push("q1_sym");
      tokenType = "Symbol";
    } else {
      states.push("q_err");
      tokenType = "Unknown";
    }

    tokens.push({ lexeme: word, tokenType, states });
  }

  return tokens;
}

function renderTokens(tokens) {
  const tbody = document.querySelector("#tokenTable tbody");
  tbody.innerHTML = "";
  tokens.forEach(({ lexeme, tokenType, states }) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${lexeme}</td>
      <td>${tokenType}</td>
      <td>${states.join(" → ")}</td>
    `;
    tbody.appendChild(row);
  });
}
