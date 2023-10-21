# Final-Exam

Code Academy final exam

- Stepai pasidaryti nauja projekta:
- atsidaryti folderi skirta projektui
- atsidaryti "new terminal"
- irasyti: npm create vite@latest
- pasirinkti "react" ir paskui "javascript"
- sukurtame projekte irasyti "npm install" įrašo packagus t.y. node_modules (papildomi failai, be kurių neveiks aplikaciją)
- tada isirasyti "npm install proptypes" tai irasys proptypes packagus.
- tada isisrasyti "npm install "react-router-dom" tai irasys reactnpm packagus kurie leis vaikscioti per puslapius (link).
- pasileisti projekta su "npm run dev" tai paleidžia vite scriptą, kuris startuoja mūsų aplikaciją

- cd "folder" - pereina į kitą folderį
- cd .. - grįžta atgal
- ls - atvaizduoja failus folderyje
- index.css - naudojamas globaliem stiliam (šriftas, padding, margin, background spalva ir t.t.)
- 1rem = 16px (root level font-size 16px), 2rem = 32px, 1.5rem = 24px
- 1rem = 18px (root level font-size 18px), 2rem = 34px, 1.5rem = 26px
- em (parent level font-size)
- props can be optional or required
- .map() is used for iterating elements
- when iterating elements with map key is required and should be unique
- import {useState} from 'react'; - importuojam iš react bibliotekos
- const [count, setCount] = useState(1); - priskiriam naują state ir pradinę reikšmę 1
- onClick - click hanlderis - paspaudimas ant elemento
- setState iškvietimas padaro rerender, kuris atnaujiną informaciją
- useEffect - pirmas argumentas callback funkcija () => {}, antras argumentas dependancy array []
- 1 būsena. Kai dependancy masyvas yra tuščias useEffect suveiks tik vieną kartą. Dažniausiai naudojama duomenų gavimui
- 2 būsena. Kai dependancy masyvas yra papildytas tam tikrais parametrais, suveikia kai parametrų reikšmė pakinta
- 3 būsena. Kai nėra dependancy masyvo. Suveikia ant kiekvieno rerenderio pvz. kai pakinta bet koks state
- input onChange handleris iškviečiamas kas kartą, kai rašau tekstą (char)
- onChange={(e) => setName(e.target.value)} - e (eventas); e.target.value (reikšmė)
- input reikalingi value ir onChange parametrai
- form naudojama event.preventDefault(); kad išvengti page refresh
- git repozitorijoje spaudžia "Code" ir kopijuojam linką
- atsidarom terminalą ir savo norimam folderyje rašome 'git clone https://github.com/rokasandreikenas/react-FEUA8.git' (sukeičiat repozitorijos linką su savo)
- instaliuojam "react-router-dom"; importuojam ir panaudojam "BrowserRouter" main.jsx faile
- <Route path="/" element={} />
