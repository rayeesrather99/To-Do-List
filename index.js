* {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  color: var(--text-color);
}

.container {
  margin: 20px;
  background-color: var(--container-background-color);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px;
  margin: 20px auto;
}

.input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 16px;
}

.add {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: var(--button-background-color);
  color: var(--button-text-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.add:hover {
  background-color: var(--button-hover-color);
}

.addList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.addList li {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
}

.addList li span {
  flex-grow: 1;
  color: #000;
}

.addList li button {
  background-color: #FF0303;
  color: #fff;
  border: none;
  width: 50px;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.addList li button:hover {
  background-color: #d32f2f;
}

/* Dark Mode */
:root {
  --background-color: #f5f5f5;
  --container-background-color: #fff;
  --text-color: #000;
  --button-background-color: #232323;
  --button-text-color: #fff;
  --button-hover-color: #D2001A;
}

body.dark-mode {
  --background-color: #232323;
  --container-background-color: #333;
  --text-color: #fff;
  --button-background-color: #D2001A;
  --button-text-color: #fff;
  --button-hover-color: #ff2e46;
}

.dark-mode-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
}

.dark-mode-toggle input {
  display: none;
}

.dark-mode-toggle label {
  display: inline-block;
  width: 60px;
  height: 34px;
  position: relative;
  background-color: #ccc;
  border-radius: 34px;
  cursor: pointer;
}

.dark-mode-toggle label::before {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fff;
  top: 4px;
  left: 4px;
  transition: transform 0.3s;
}

.dark-mode-toggle input:checked + label {
  background-color: #D2001A;
}

.dark-mode-toggle input:checked + label::before {
  transform: translateX(26px);
}

.dark-mode-toggle label::after {
  content: "☀️";
  position: absolute;
  font-size: 14px;
  color: #fff;
  top: 4px;
  left: 4px;
  line-height: 26px;
}

.dark-mode-toggle input:checked + label::after {
  content: "🌙";
  left: 30px;
}

footer {
  text-align: center;
  background-color: var(--container-background-color);
  padding: 10px;
  margin-top: 20px;
  font-size: 14px;
  border-radius: 5px;
}

footer a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: bold;
}

footer a:hover {
  color: var(--button-background-color);
}

/* search input  */
.search-container {
  text-align: center;
  margin-bottom: 20px;
}

.search-input {
  display: inline-block;
  width: 80%;
  max-width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 16px;
}

@media (max-width: 500px) {
  .container {
      max-width: 100%;
  }
}

@media (min-width: 501px) and (max-width: 800px) {
  .container {
      max-width: 80%;
  }
}

@media (min-width: 801px) {
  .container {
      max-width: 60%;
  }
}
