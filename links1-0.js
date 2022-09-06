// ==UserScript==
// @name         IMDBLINKS
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  try to take over the world!
// @author       rafaelcastromon
// @match        https://www.imdb.com/title/tt4298958/?ref_=hm_tpks_tt_i_1_pd_tp1_cp
// @icon         https://www.google.com/s2/favicons?domain=imdb.com
// @match          *://*.imdb.com/title/tt*/*
// @grant        none
// ==/UserScript==



function LocalOndeColocarBtn() {
  const localAdc = document.getElementsByClassName('sc-f20690b4-1');
    const pai = localAdc[0];

  return pai
};


function escreverTela() {
    let tituloCortado;

  if(document.querySelector('.sc-dae4a1bc-0')){
    let pegaTituloOri = document.getElementsByClassName('sc-dae4a1bc-0');
    let pTitulo = pegaTituloOri[0].textContent;
    tituloCortado = pTitulo.slice(16);

  }else {
    let pegaTituloTra = document.getElementsByClassName('sc-b73cd867-0');
    let pTitulo = pegaTituloTra[0].textContent;
    tituloCortado = pTitulo;

  };


  const pname = window.location.pathname;
  const pnameCortado = pname.slice(7);
  const pnameCB = pnameCortado.slice(0, -1);
  const pnameCBT = pnameCB.slice(2);



  const paiLink = LocalOndeColocarBtn()

  //Letterboxd
  const letterboxdI = document.createElement('IMG');
  const letterboxdA = document.createElement('a');

  letterboxdA.setAttribute("href", `https://letterboxd.com/search/films/${tituloCortado}`)
  letterboxdI.src = 'https://letterboxd.com/favicon.ico';
  letterboxdA.setAttribute('target', '_blank');
  letterboxdI.setAttribute('style', 'width:16px;');
  letterboxdA.appendChild(letterboxdI);
  paiLink.appendChild(letterboxdA);

  //Youtube
  const youtubeI = document.createElement('IMG');
  const youtubeA = document.createElement('a');

  youtubeA.setAttribute("href", `https://www.youtube.com/results?search_query=${tituloCortado}%20trailer`)
  youtubeI.src = 'https://youtube.com/s/desktop/7449ebf7/img/favicon_32x32.png';
  youtubeA.setAttribute('style', 'margin-left:5px');
  youtubeA.setAttribute('target', '_blank');
  youtubeI.setAttribute('style', 'width:16px;');
  youtubeA.appendChild(youtubeI);
  paiLink.appendChild(youtubeA);

   //Filmow
  const filmowI = document.createElement('IMG');
  const filmowA = document.createElement('a');

  filmowA.setAttribute("href", `https://filmow.com/buscar/?csrfmiddlewaretoken=5LT89wVHRAU1uwJ1avKpZDg3dkjIGG9d&q=${tituloCortado}`)
  filmowI.src = 'https://ui.fstatic.com/static/favicon.ico';
  filmowA.setAttribute('style', 'margin-left:5px');
  filmowA.setAttribute('target', '_blank');
  filmowI.setAttribute('style', 'width:16px;');
  filmowA.appendChild(filmowI);
  paiLink.appendChild(filmowA);

  //MKO
  const mKOI = document.createElement('IMG');
  const mKOA = document.createElement('a');

  mKOA.setAttribute("href", `https://makingoff.org/forum/index.php?app=core&module=search&do=search&andor_type=&sid=e10ae67d4ba76f492e3f641e0888c0c2&search_app_filters[forums][sortKey]=date&search_app_filters[forums][searchInKey]=&search_term=${pnameCB}`)
  mKOI.src = 'https://makingoff.org/forum/favicon.ico';
  mKOA.setAttribute('style', 'margin-left:5px;');
  mKOA.setAttribute('target', '_blank');
  mKOI.setAttribute('style', 'width:16px;');
  mKOA.appendChild(mKOI);
  paiLink.appendChild(mKOA);

  //MKOOLD
  const mKObI = document.createElement('IMG');
  const mKObA = document.createElement('a');

  mKObA.setAttribute("href", `https://indice.makingoff.org/index.php?origem=busca&search_term=${pnameCB}`)
  mKObI.src = 'https://makingoff.org/forum/favicon.ico';
  mKObA.setAttribute('style', 'margin-left:5px;');
  mKObA.setAttribute('target', '_blank');
  mKObI.setAttribute('style', 'width:16px;');
  mKObA.appendChild(mKObI);
  paiLink.appendChild(mKObA);

  //RARBG
  const rarbgI = document.createElement('IMG');
  const rarbgA = document.createElement('a');

  rarbgA.setAttribute("href", `https://rarbgproxied.org/torrents.php?search=${pnameCB}`)
  rarbgI.src = 'https://www.google.com/s2/favicons?domain=rarbgproxied.org/torrents.php';
  rarbgA.setAttribute('style', 'margin-left:5px;');
  rarbgA.setAttribute('target', '_blank');
  rarbgI.setAttribute('style', 'width:16px;');
  rarbgA.appendChild(rarbgI);
  paiLink.appendChild(rarbgA);

   //OpenSubtile
  const oSTI = document.createElement('IMG');
  const oSTA = document.createElement('a');

  oSTA.setAttribute("href", `https://www.opensubtitles.org/en/search/sublanguageid-all/imdbid-${pnameCBT}`)
  oSTI.src = 'https://www.google.com/s2/favicons?domain=www.opensubtitles.org';
  oSTA.setAttribute('style', 'margin-left:5px;');
  oSTA.setAttribute('target', '_blank');
  oSTI.setAttribute('style', 'width:16px;');
  oSTA.appendChild(oSTI);
  paiLink.appendChild(oSTA);



};
escreverTela();

