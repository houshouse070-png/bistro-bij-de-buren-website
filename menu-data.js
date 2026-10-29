const CATEGORIES=[
 {id:"snacks",label:"Snacks & Frituur"},{id:"soep",label:"Soepen"},{id:"starters",label:"Voorgerechten"},
 {id:"flemish",label:"Flemish Way"},{id:"zee",label:"Uit de Zee"},{id:"wok",label:"Wok"},
 {id:"burgers",label:"Burgers"},{id:"pasta",label:"Pasta"},{id:"salades",label:"Salades"},
 {id:"kids",label:"Kids"},{id:"croques",label:"Croques"},{id:"pannenkoeken",label:"Pannenkoeken"},
 {id:"desserts",label:"Ijs & Desserten"}];
const MENU={
 snacks:[
  {n:"De Kroketterie — luxe frituurhapjes",p:"18,00",d:"14 stuks"},
  {n:"Calamares",p:"12,50",d:"9 stuks, met verse huisbereide tartaar"},
  {n:"Bitterballen Van Dobben",p:"12,00",d:"8 stuks, met mosterd"},
  {n:"Lookbroodjes",p:"12,00",d:"8 stuks"},
  {n:"Nacho's",p:"21,50",d:"Met gehakt, zure room, cheddar, pepers"},
  {n:"Fish and Chips",p:"16,00",d:"Met verse huisbereide tartaar"},
  {n:"Mini loempia's",p:"12,00",d:"8 stuks"}],
 soep:[
  {n:"Tomatensoep met balletjes",p:"8,50",d:"Verse San Marzano tomaten — met brood en boter"},
  {n:"Thaise currysoep",p:"18,00",d:"Kokosmelk, kip, groenten — met brood en boter"}],
 starters:[
  {n:"Kaaskroketjes",p:"10,00 / 18,00 / 27,00",d:"1, 2 of 3 stuks"},
  {n:"Garnaalkroketjes",p:"12,50 / 21,00 / 30,00",d:"1, 2 of 3 stuks"},
  {n:"Serranohamkroketjes",p:"10,00 / 18,00 / 27,00",d:"1, 2 of 3 stuks"},
  {n:"Trio van kroketjes",p:"29,00",d:"1 kaas, 1 garnaal, 1 serranoham"},
  {n:"Scampi Thaise wijze",p:"19,00",d:"Kruidenroom / flambée — 5 stuks"},
  {n:"Carpaccio Blonde d'Aquitaine",p:"23,00 / 31,00",d:"8 weken gerijpt — voorgerecht / hoofdgerecht"},
  {n:"Supplement frietjes van de chef",p:"6,50",d:"Truffelmayonaise en parmezaan"},
  {n:"Supplement frietjes, wedges, pasta, bistrogras of puree",p:"4,00"}],
 flemish:[
  {n:"Steak (300 gr)",p:"35,00"},{n:"Lady's steak (200 gr)",p:"25,00"},
  {n:"Saus bij steak",p:"4,00",d:"Stroganoff · peperroom · champignonroom · kruidenboter · béarnaise"},
  {n:"Spare Ribs",p:"31,00"},{n:"Videe",p:"26,00"},{n:"Bouletten in tomatensaus",p:"26,00"},
  {n:"Huisbereide Americain van Belgisch Wit-Blauw",p:"32,00"},
  {n:"Stoofvlees met Loonse siroop & bruin bier",p:"27,00"}],
 zee:[
  {n:"Sliptongetjes",p:"dagprijs",d:"3 stuks"},
  {n:"Scampi Thaise wijze / kruidenroom / flambée",p:"31,00",d:"8 stuks"},
  {n:"Zalmfilet met kruidenroom",p:"30,00"}],
 wok:[
  {n:"Kip wok",p:"28,00",d:"Noedels, verse groenten, sambal en Asian pesto"},
  {n:"Scampi wok",p:"29,50",d:"Noedels, verse groenten, gember en Asian pesto"},
  {n:"Surf & Turf",p:"29,50",d:"Runds en scampi, noedels, verse groenten, curry, gember, Asian pesto"}],
 burgers:[
  {n:"Italian Style",p:"25,00",d:"Kip, pesto, mozzarella, rucola"},
  {n:"Smokey Royal Bacon",p:"27,00",d:"100% rundsvlees, tomatenrelish, ei, sla, bacon, smokey BBQ, kaas"},
  {n:"Salmone",p:"27,00",d:"Zalm, tartaar, tomaat, look, ui, radijs, komkommer en sla"},
  {n:"Mexican Burger",p:"26,00",d:"Huisbereide tartaar, tomaat, rode ui, sla, guacamole, avocadoburger",v:1}],
 pasta:[
  {n:"Bolognaise",p:"17,00 / 21,00",d:"Klein / groot — spaghetti, gehakt, tomaat"},
  {n:"Genovese",p:"19,00 / 24,00",d:"Klein / groot — pesto, kastanjechampignons, parmezaan, rucola",v:1},
  {n:"Scampi",p:"31,00",d:"Tagliatelle, scampi, Italiaanse kruiden, courgette, tomaat, olijfolie"},
  {n:"Salmone",p:"29,00",d:"Tagliatelle, gerookte zalm, tuinkruiden, lichte room"},
  {n:"Zesbunder",p:"19,00 / 23,00",d:"Klein / groot — penne, spek, getomateerde kaassaus"},
  {n:"Linguini Italiano",p:"26,00",d:"Pasta met heerlijke verse groentjes",v:1},
  {n:"Pomodore",p:"26,00",d:"Penne met kip, tomatensaus en basilicum"}],
 salades:[
  {n:"Warme geitenkaas",p:"22,00",v:1},
  {n:"Warme geitenkaas — spekjes",p:"26,00"},
  {n:"Warme geitenkaas — scampi",p:"29,00"},
  {n:"Caesar",p:"24,00",d:"Kippenblokjes, parmezaan, tonijndressing"},
  {n:"Scampi balsamico",p:"29,00"},
  {n:"Griekse salade met calamares",p:"27,00",d:"Feta, olijven, tzatziki"},
  {n:"Supplement frietjes",p:"4,00"}],
 kids:[
  {n:"Curryworst met frietjes",p:"11,00 / 16,00",d:"1 of 2 stuks"},
  {n:"Kipfilet met frietjes en appelmoes",p:"16,00"},
  {n:"Fishsticks met frietjes en tartaar",p:"15,00"},
  {n:"Kleine spaghetti",p:"14,00"},
  {n:"Videe met frietjes",p:"16,00"},
  {n:"Boulet in tomatensaus met frietjes",p:"16,00"},
  {n:"Kindersteak (150 gr) met frietjes",p:"21,00"}],
 croques:[
  {n:"Croque Monsieur",p:"15,00"},{n:"Croque Madame",p:"18,00"},
  {n:"Croque Bolognaise",p:"19,00"},{n:"Croque Vol-au-vent",p:"20,00"},
  {n:"Croque Hawaii",p:"19,00",d:"Met verse ananas"}],
 pannenkoeken:[
  {n:"Suiker wit of bruin",p:"9,00"},{n:"Siroop of confituur",p:"9,00"},
  {n:"Nutella",p:"10,00"},{n:"Ijs en chocoladesaus",p:"14,50"},
  {n:"Ijs en advocaat",p:"14,50"},{n:"Ijs en vers fruit",p:"19,50"}],
 desserts:[
  {n:"Dame Blanche",p:"11,00"},{n:"Coupe Brésilienne",p:"11,00"},
  {n:"Coupe Advocaat",p:"11,00"},{n:"Coupe vers fruit",p:"14,00"},
  {n:"Kinderijsje",p:"8,00"},{n:"Chocolademoelleux met ijs",p:"12,00"},
  {n:"Limburgse appeltaart",p:"6,00"},
  {n:"Warme Limburgse appeltaart met ijs",p:"11,00"},
  {n:"Vers fruit",p:"14,00"},{n:"IJskoffie",p:"11,00"}]};
const NOTES={
 flemish:"Flemish Way gerechten zijn niet verkrijgbaar tussen 14:00 en 17:00. Inclusief frieten, kroketten, bistrogras of pasta. Supplement mayonaise 1,00.",
 zee:"Uit de zee gerechten zijn niet verkrijgbaar tussen 14:00 en 17:00. Inclusief frieten, kroketten, bistrogras of pasta.",
 burgers:"Extra sla en frietjes inbegrepen. Supplement spiced wedges 1,00.",
 salades:"Onze salades worden geserveerd met brood.",
 kids:"Vanaf 6 personen vragen we vriendelijk om te kiezen uit 4 hoofdgerechten. 1 tafel = 1 rekening.",
 pasta:"Voor een supplementje van 1,00 ontvangt u een meeneemdoosje. Vanaf 6 personen: keuze uit 4 hoofdgerechten, 1 tafel = 1 rekening.",
 croques:"Onze heerlijke croques zijn verkrijgbaar tot 16:30 en niet op zon- en feestdagen.",
 pannenkoeken:"2 pannenkoeken, elke dag van 14:00 tot 16:30. Supplement slagroom 1,50.",
 desserts:"Supplement slagroom 1,50 · supplement bolletje vanille-ijs 3,00.",
 wok:"Let op: de samenstelling van onze bereidingen kan wijzigen. Vraag gerust naar allergeneninformatie."};

function renderMenu(cat){
  const grid=document.getElementById("menuGrid");
  if(!grid) return;
  grid.innerHTML="";
  MENU[cat].forEach(d=>{
    const c=document.createElement("article");
    c.className="dish";
    c.innerHTML=`<div class="dish-top"><h3>${d.n}${d.v?'<span class="veg" title="Vegetarisch">🌱</span>':""}</h3><span class="dots"></span><span class="price">€ ${d.p}</span></div>${d.d?`<p class="desc">${d.d}</p>`:""}`;
    grid.appendChild(c);
  });
  const note=document.getElementById("menuNote");
  note.textContent=NOTES[cat]||"Prijzen in euro, incl. btw.";
  note.style.display=NOTES[cat]?"block":"none";
}
function initTabs(){
  const t=document.getElementById("tabs");
  if(!t) return;
  CATEGORIES.forEach((c,i)=>{
    const b=document.createElement("button");
    b.className="tab"+(i===0?" active":"");
    b.textContent=c.label;
    b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderMenu(c.id);};
    t.appendChild(b);
  });
  renderMenu("snacks");
}
document.addEventListener("DOMContentLoaded",initTabs);
