(function main(){
  var names = ['Mąż','Żona','Iza Sikora','Krzysiek Sikora','Karolina Malinowska','Artur MalinowskI','Antoś Malinowski','Julek Malinowski','Lila Osowska','Stefan Osowski','Beata Górnik','Jurek Górnik','Piotrek Osowski','Ela Kowalewska','Andrzej Grudzień','Olek Kowalewski','Ola Wójcik','Sebastian Kowalewski','Osoba towarzysząca','Mirek Sikora','Monika Dziewulak','Artur Dziewulak','Wika Dziewulak','Staś Królikowski','Basia Marchow','Leszek Marchow','Karolina Szczepanowska','Dawid Kurowski','Marysia Janczak','Maciej Abramowski','Zuza Kudzinowska','Kasia Żołnowska','Karolina Ossowiecka','Stefan Dziembowski','Iwka Walczak','Piotr Komoda','Zosia Kisiel- Skurczyńska','Kuba Skurczyński','Dorota Ukleja','Janusz Ukleja','Mateusz Ukleja','Natalia Kanan','Paulina Szpinder','Łukasz Szpinder','Sylwia Pietrasik','Adam Pietrasik','Zuzia Pietrasik','Natalka Pietrasik','Sylwia Małczuk','Osoba towarzysząca','Zuza Krajewska','Maciek Biegała','Grażyna Złotkowska - Zapletal','Marek Zapletal','Marcin Zapletal','Asia Byszewska - Zapletal','Marysia Zapletal','Lucyna Łada','Ala Złotkowska - Wrona','Jarek Wrona','Gosia Jakubicz','Pawel Jakubicz','Monika Jakubicz','Szymon Jakubicz','Leszek Zapletal','Ania Zapletal','Paulina Zapletal','Aleksandra Olszewska','Martyna Zapletal','Filip Smolak','Marek Zagórski','Asia Zagórska','Agnieszka Zachara','Leoś Zachara','Zosia Dzierżanowska','Edward Dzierżanowski','Gosia Perzanowska','Zbigniew Perzanowski','Krysia Olszewska','Mariusz Olszewski','Marlena Olszewska','Mariusz Górski','Ewa Górska','Paweł Płóciennik','Kamila Żebrowska','Dorotka Michałowska','Osoba towarzysząca','Artur Piątkowski','Gabrysia Piątkowska','Paweł Wargalla','Asia Drychta','Sonia Dobrowolska','Sylwia Trędowicz','Tomek Burdan','Artur Dziobkowski','Kasia Dziobkowska','Ewelina Malinowska','Maciek Szymański','Karolina Pakalska','Dominik Robak','Bogdan Komorowski','Dominika Żebrowska','Mariusz Żebrwoski','Oleńka Żebrowska','Maciek Tylus','Kasia Kempa','Ania Bigdowska','Basia Kucharska','Ania Jurczak','Tomek Jurczak','Stanisław Łada','Ewa Łada','Jolanta Łada','Zdzisław Gniady','Grzegorz Suchcicki','Katarzyna Suchcicka','Andrzej Tkaczow','Agnieszka Tkaczow','Marek Mazur','Diana Carter','Monika Cebula','Osoba towarzysząca','Agata Łada','Waldemar Łada','Justyna Żyłowska','Jacek Żyłowski','Renata Wikowska','Jarek Witkowski','Beata Witkowska','Wotek Witkowski','Ania Kopczyńska','Filip Dutka','Marek Błaszczak','Hanna Błaszczak','Ania Białek','Michał Białek','Edyta Żebrowska','Michał Gołąbczyk','Osoba towarzysząca','Osoba towarzysząca','Osoba towarzysząca','Osoba towarzysząca','Osoba towarzysząca','Osoba towarzysząca','Osoba towarzysząca'];

  for (var i = 0; i<names.length; i++) {
    var name = names[i];
    processName(name);
  }
})();

function processName(name){
  var doc = app.activeDocument;

  var imieGroup = doc.layerSets.getByName('imie');
  var imieLayer = imieGroup.layers[0];
  imieLayer.textItem.contents = name;

  saveGroup(imieGroup, 'winieta ' + name)

}

function saveGroup(group, name){
  saveJpeg(name);
}

function saveJpeg(name) {
  var doc = app.activeDocument;

  var file = new File(doc.path + '/gen/' + name +'.jpg');

  var opts = new JPEGSaveOptions();
  opts.quality = 10;

  doc.saveAs(file, opts, true);
}
