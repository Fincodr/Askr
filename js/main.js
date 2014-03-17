/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Mika "Fincodr" Luoma-aho
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

// extend Array with clear method
Array.prototype.clear = function() {
  this.splice(0, this.length);
};

var App = {
  data: {
    // global variables
    'numbers': {
      words: [
        { se:'en', i:'', fi:'yksi' },
        { se:'ett', i:'', fi:'yksi' },
        { se:'två', i:'', fi:'kaksi' },
        { se:'tre', i:'', fi:'kolme' },
        { se:'fyra', i:'', fi:'neljä' },
        { se:'fem', i:'', fi:'viisi' },
        { se:'sex', i:'', fi:'kuusi' },
        { se:'sju', i:'', fi:'seitsemän' },
        { se:'åtta', i:'', fi:'kahdeksan' },
        { se:'nio', i:'', fi:'yhdeksän' },
        { se:'tio', i:'', fi:'kymmenen' },
        { se:'elva', i:'', fi:'yksitoista' },
        { se:'tolv', i:'', fi:'kaksitoista' },
        { se:'tretton', i:'', fi:'kolmetoista' },
        { se:'fjorton', i:'', fi:'neljätoista' },
        { se:'femton', i:'', fi:'viisitoista' },
        { se:'sexton', i:'', fi:'kuusitoista' },
        { se:'sjutton', i:'', fi:'seitsemäntoista' },
        { se:'arton', i:'', fi:'kahdeksantoista' },
        { se:'aderton', i:'(vanh.)', fi:'kahdeksantoista' },
        { se:'nitton', i:'', fi:'yhdeksäntoista' },
        { se:'tjugo', i:'', fi:'kaksikymmentä' },
        { se:'tjugoen', i:'', fi:'kaksikymmentäyksi' },
        { se:'tjugoett', i:'', fi:'kaksikymmentäyksi' },
        { se:'tjugotvå', i:'', fi:'kaksikymmentäkaksi' },
        { se:'trettio', i:'', fi:'kolmekymmentä' },
        { se:'fyrtio', i:'', fi:'neljäkymmentä' },
        { se:'femtio', i:'', fi:'viisikymmentä' },
        { se:'sextio', i:'', fi:'kuusikymmentä' },
        { se:'sjuttio', i:'', fi:'seitsemänkymmentä' },
        { se:'åttio', i:'', fi:'kahdeksankymmentä' },
        { se:'nittio', i:'', fi:'yhdeksänkymmentä' },
        { se:'ett hundra', i:'', fi:'sata' },
        { se:'ett hundraett', i:'', fi:'satayksi' },
        { se:'tvåhundra', i:'', fi:'kaksisataa' },
        { se:'ett tusen', i:'', fi:'tuhat' },
        { se:'ett hundratusen', i:'', fi:'satatuhatta' },
        { se:'en miljon', i:'', fi:'miljoona' },
        { se:'tre miljoner', i:'', fi:'kolme miljoonaa' },
        { se:'en miljard', i:'', fi:'miljardi' },
        { se:'två miljarder', i:'', fi:'kaksi miljardia' }
      ],
      opts: {
        order: 'random'
      }
    },
    'S1': {
      words: [
        { se:'en, ett', i:'', fi:'yksi' },
        { se:'två', i:'', fi:'kaksi' },
        { se:'tre', i:'', fi:'kolme' },
        { se:'fyra', i:'', fi:'neljä' },
        { se:'fem', i:'', fi:'viisi' },
        { se:'sex', i:'', fi:'kuusi' },
        { se:'sju', i:'', fi:'seitsemän' },
        { se:'åtta', i:'', fi:'kahdeksan' },
        { se:'nio', i:'', fi:'yhdeksän' },
        { se:'tio', i:'', fi:'kymmenen' },
        { se:'elva', i:'', fi:'yksitoista' },
        { se:'tolv', i:'', fi:'kaksitoista' },
        { se:'tretton', i:'', fi:'kolmetoista' },
        { se:'fjorton', i:'', fi:'neljätoista' },
        { se:'femton', i:'', fi:'viisitoista' },
        { se:'sexton', i:'', fi:'kuusitoista' },
        { se:'sjutton', i:'', fi:'seitsemäntoista' },
        { se:'arton (aderton)', i:'', fi:'kahdeksantoista' },
        { se:'nitton', i:'', fi:'yhdeksäntoista' },
        { se:'tjugo', i:'', fi:'kaksikymmentä' },
        { se:'tjugoen, tjugoett', i:'', fi:'kaksikymmentäyksi' },
        { se:'tjugotvå', i:'', fi:'kaksikymmentäkaksi' },
        { se:'trettio', i:'', fi:'kolmekymmentä' },
        { se:'fyrtio', i:'', fi:'neljäkymmentä' },
        { se:'femtio', i:'', fi:'viisikymmentä' },
        { se:'sextio', i:'', fi:'kuusikymmentä' },
        { se:'sjuttio', i:'', fi:'seitsemänkymmentä' },
        { se:'åttio', i:'', fi:'kahdeksankymmentä' },
        { se:'nittio', i:'', fi:'yhdeksänkymmentä' },
        { se:'(ett) hundra', i:'', fi:'sata' },
        { se:'(ett) hundraett', i:'', fi:'satayksi' },
        { se:'tvåhundra', i:'', fi:'kaksisataa' },
        { se:'(ett) tusen', i:'', fi:'tuhat' },
        { se:'(ett) hundratusen', i:'', fi:'satatuhatta' },
        { se:'en miljon', i:'', fi:'miljoona' },
        { se:'tre miljoner', i:'', fi:'kolme miljoonaa' },
        { se:'en miljard', i:'', fi:'miljardi' },
        { se:'två miljarder', i:'', fi:'kaksi miljardia' },
        { se:'en vän', i:'', fi:'ystävä' },
        { se:'vänner', i:'', fi:'ystäviä' },
        { se:'och', i:'', fi:'ja' },
        { se:'en bekant', i:'', fi:'tuttu' },
        { se:'bekanta', i:'', fi:'tuttava' },
        { se:'hjärtligt', i:'', fi:'sydämellisesti' },
        { se:'välkommen', i:'(yks.)', fi:'tervetuloa' },
        { se:'välkomna', i:'(mon)', fi:'tervetuloa' },
        { se:'till', i:'(prep.)', fi:'jonnekin, jollekin' },
        { se:'jag', i:'', fi:'minä' },
        { se:'heta, heter, hette, hetat', i:'', fi:'olla nimeltään' },
        { se:'jag heter', i:'', fi:'minun nimeni on' },
        { se:'vara, är, var, varit', i:'', fi:'olla' },
        { se:'jag är', i:'', fi:'minä olen' },
        { se:'den här', i:'', fi:'tämä' },
        { se:'en butik', i:'', fi:'kauppa' },
        { se:'en designbutik', i:'', fi:'designmyymälä' },
        { se:'rolig', i:'', fi:'hauska' },
        { se:'att', i:'', fi:'että' },
        { se:'vi', i:'', fi:'me' },
        { se:'sä', i:'', fi:'niin' },
        { se:'många', i:'', fi:'monta' },
        { se:'här', i:'', fi:'täällä, tässä' },
        { se:'i dag', i:'', fi:'tänään' },
        { se:'ha, har, hade, haft', i:'', fi:'olla jollakin' },
        { se:'en buffé', i:'', fi:'noutopöytä' },
        { se:'därborta', i:'', fi:'tuolla' },
        { se:'god, gott, goda', i:'', fi:'hyvä' },
        { se:'ta, tar, tog, tagit', i:'', fi:'ottaa' },
        { se:'en klock', i:'', fi:'kello' },
        { se:'höra, hör, hörde, hört', i:'', fi:'kuulla' },
        { se:'lite', i:'', fi:'vähän, hiukan' },
        { se:'musik', i:'', fi:'musiikki' },
        { se:'efter det', i:'', fi:'sen jälkeen' },
        { se:'lotta, lottar, lottade, lottat ut', i:'', fi:'arpoa' },
        { se:'en resa, resan, resor, resorna', i:'', fi:'matka' },
        { se:'Stockholm', i:'', fi:'Tukholma' },
        { se:'hoppas', i:'', fi:'toivoa' },
        { se:'ni', i:'', fi:'te' },
        { se:'en kväll', i:'', fi:'ilta' },
        { se:'i kväll', i:'', fi:'tänä iltana' },
        { se:'Hej!', i:'', fi:'Hei!' },
        { se:'nej mem', i:'', fi:'ei mutta' },
        { se:'bara', i:'', fi:'vain' },
        { se:'bra', i:'(taipum.)', fi:'hyvä, hyvin' },
        { se:'Hur står det till?', i:'', fi:'Mitä kuuluu?' },
        { se:'Det var länge sen sist.', i:'', fi:'Onpa siitä jo aikaa.' },
        { se:'Tack bara bra.', i:'', fi:'Kiitos hyvää.' },
        { se:'du', i:'', fi:'sinä' },
        { se:'då', i:'', fi:'sitten, silloin' },
        { se:'Och du då?', i:'', fi:'Entä sinä?' },
        { se:'Hur har du det?', i:'', fi:'Miten sinulla menee?' },
        { se:'Fint, tack.', i:'', fi:'Hienosti, kiitos.' },
        { se:'bo, bor, bodde, bott', i:'', fi:'asua' },
        { se:'fortfarande', i:'', fi:'edelleen' },
        { se:'i', i:'(prep.)', fi:'-ssa, -ssä' },
        { se:'Jakobstad', i:'', fi:'Pietarsaari' },
        { se:'nej', i:'(lauseen alussa)', fi:'ei' },
        { se:'Vasa', i:'', fi:'Vaasa' },
        { se:'jobba, jobbar, jobbade, jobbat', i:'', fi:'työskennellä' },
        { se:'en hovmäst', i:'', fi:'hovimestari' },
        { se:'som hovmästare', i:'', fi:'hovimestarina' },
        { se:'en restaurang', i:'', fi:'ravintola' },
        { se:'på', i:'', fi:'jossakin' },
        { se:'pä restaurang Le Monde', i:'', fi:'Le Monde nimisessä ravintolassa' },
        { se:'jaså', i:'', fi:'vai niin' },
        { se:'där', i:'', fi:'tuolla, tuossa' },
        { se:'känna, känner, kände, känt (till)', i:'', fi:'tietää, tuntea' },
        { se:'ett ställe', i:'', fi:'paikka' },
        { se:'fin, fint, fina', i:'', fi:'hieno' },
        { se:'komma, kommer, kom, kommit', i:'', fi:'tulla' },
        { se:'förresten', i:'', fi:'muuten' },
        { se:'en god vän ill mej', i:'', fi:'hyvä ystäväni' },
        { se:'Tjänare!', i:'', fi:'Terve!' },
        { se:'få, får, fick, fått', i:'', fi:'saada' },
        { se:'presentera', i:'', fi:'esitellä' },
        { se:'Får jag presentera…', i:'', fi:'Saanko esitellä…' },
        { se:'han', i:'', fi:'hän (miehestä)' },
        { se:'en affårsman', i:'', fi:'liikemies' },
        { se:'Det här är…', i:'', fi:'Tämä on…' },
        { se:'hon', i:'', fi:'hän (naisesta)' },
        { se:'från', i:'(prep.)', fi:'-sta, -stä' },
        { se:'trevlig', i:'', fi:'hauska' },
        { se:'träffas', i:'', fi:'tavata' },
        { se:'Trevligt att träffas.', i:'', fi:'Hauska tutustua/tavata.' },
        { se:'Tack detsamma.', i:'', fi:'Kiitos samoin.' },
        { se:'varifrån', i:'', fi:'mistä' },
        { se:'Varifrån kommer du?', i:'', fi:'Mistä olet kotoisin?' },
        { se:'men', i:'', fi:'mutta' },
        { se:'Esbo', i:'', fi:'Espoo' },
        { se:'ursäkta mej', i:'', fi:'anteeksi' },
        { se:'stå, står, stod, stått', i:'', fi:'seisoa' },
        { se:'gå, går, gick, gått', i:'', fi:'mennä' },
        { se:'hälsa, hälsar, hälsade, hälsat på', i:'', fi:'tervehtiä' },
        { se:'henne', i:'', fi:'häntä, häner (naisesta)' },
        { se:'För all del.', i:'', fi:'Kaikin mokomin.' },
        { se:'vad', i:'', fi:'mikä, mitä' },
        { se:'kul', i:'(taipum.)', fi:'kiva, hauska' },
        { se:'se, ser, såg, sett', i:'', fi:'nähdä' },
        { se:'dej', i:'', fi:'sinua, sinut' },
        { se:'Vad kul att se dej.', i:'', fi:'Onpa hauska nähdä sinua.' },
        { se:'Hejsan!', i:'', fi:'Hei!' },
        { se:'hur', i:'', fi:'miten, kuinka' },
        { se:'må, mår, mådde, mått', i:'', fi:'voida' },
        { se:'en familj', i:'', fi:'perhe' },
        { se:'dom', i:'', fi:'he, ne' },
        { se:'fint', i:'', fi:'hienosti' },
        { se:'börja, börjar, började, börjat', i:'', fi:'alkaa' },
        { se:'en skola, skolan, skolor, skolorna', i:'', fi:'koulu' },
        { se:'i höst', i:'', fi:'tänä syksynä' },
        { se:'höst', i:'', fi:'syksy' },
        { se:'säga, säger, sade, sagt', i:'', fi:'sanoa' },
        { se:'Säger du det?', i:'', fi:'Ihanko totta?' },
        { se:'en tid', i:'', fi:'aika' },
        { se:'Vad tiden går!', i:'', fi:'Kylläpä aika rientää!' },
        { se:'en musiker', i:'', fi:'muusikko' },
        { se:'spela', i:'', fi:'soittaa, pelata' },
        { se:'klassisk', i:'', fi:'klassinen' },
        { se:'nog', i:'', fi:'kyllä, kyllähän' },
        { se:'eller', i:'', fi:'vai, tai' },
        { se:'tycka, tycker, tyckte, tyckt om', i:'', fi:'pitää jostakin' },
        { se:'en trubadur', i:'', fi:'trubaduuri' },
        { se:'sjunga, sjunger, sjöng, sjungit', i:'', fi:'laulaa' },
        { se:'en visa', i:'', fi:'laulelma' },
        { se:'en gitarr', i:'', fi:'kitara' },
        { se:'en rikssvensk', i:'', fi:'ruotsinruotsalainen' },
        { se:'jag år född', i:'', fi:'olen syntynyt' },
        { se:'numera', i:'', fi:'nykyään' },
        { se:'en ateljé', i:'', fi:'ateljee' },
        { se:'också', i:'', fi:'myös' },
        { se:'en konstnår', i:'', fi:'taiteilija' },
        { se:'designa, designar, designade, designat', i:'', fi:'muotoilla, suunnitella' },
        { se:'en lampa, lampan, lampor, lamporna', i:'', fi:'lamppu' },
        { se:'speciellt', i:'', fi:'erityisesti, erityisen' },
        { se:'intresserad, intresserat, intresserade', i:'', fi:'kiinnostunut jostakin' },
        { se:'jag år intresserad av…', i:'', fi:'olen kiinnostunut…' },
        { se:'glas', i:'', fi:'lasi (yks.)' },
        { se:'glaset', i:'', fi:'lasia (mon.)' },
        { se:'ett material', i:'', fi:'materiaali' },
        { se:'som material', i:'', fi:'materiaalina' },
        { se:'sälja, säljer, sålde, sålt', i:'', fi:'myydä' },
        { se:'Lottas', i:'', fi:'Lotan' },
        { se:'titta, tittar, tittade, tittat på', i:'', fi:'katsoa jotakin' },
        { se:'de dår', i:'', fi:'nuo' },
        { se:'ljusblå, ljusblått', i:'', fi:'vaaleansininen' },
        { se:'blå', i:'', fi:'sininen' },
        { se:'ljus', i:'', fi:'vaalea, valoisa' },
        { se:'jättesnygg', i:'', fi:'tosihieno' },
        { se:'jättesnygga', i:'', fi:'tosihienoja' },
        { se:'Jättesnygga, va?', i:'', fi:'Tosihienoja, vai mitä?' },
        { se:'tycka, tycker, tyckte, tyckt', i:'', fi:'olla jotakin mieltä' },
        { se:'Det tycker jag med.', i:'', fi:'Niin minustakin.' },
        { se:'gilla, gillar, gillade, gillat', i:'', fi:'pitää (jostakin)' },
        { se:'din, ditt, dina', i:'', fi:'sinun' },
        { se:'en stil, stilen, stilar, stilarna', i:'', fi:'tyyli' },
        { se:'tala, talar, talade, talat', i:'', fi:'puhua' },
        { se:'på finska', i:'', fi:'suomeksi' },
        { se:'finska', i:'', fi:'suomen kieli' },
        { se:'en finne, finnen, finnar, finnarna', i:'', fi:'suomalainen' },
        { se:'finskan', i:'', fi:'suomalaiset' },
        { se:'ju', i:'', fi:'-han, -hän' },
        { se:'gift', i:'', fi:'naimisissa' },
        { se:'jag år ju gift', i:'', fi:'minähän olen naimisissa' },
        { se:'med', i:'(prep.)', fi:'kanssa' },
        { se:'så', i:'', fi:'joten, niinpä' },
        { se:'försöka, försöker, försökte, försökt', i:'', fi:'yrittää' },
        { se:'ett fall, fallet', i:'', fi:'tapaus' },
        { se:'i alla fall', i:'', fi:'joka tapauksessa' },
        { se:'vad duktigt', i:'', fi:'(tässä) hieno juttu' },
        { se:'förlåt', i:'', fi:'anteeksi' },
        { se:'måste', i:'', fi:'täytyy, pitää tehdä jotakin' },
        { se:'nu', i:'', fi:'nyt' },
        { se:'uppträda, uppträder, uppträdde, uppträtt', i:'', fi:'esiintyä' },
        { se:'en stund, stunden, stunder, stunderna', i:'', fi:'hetki' },
        { se:'om en stund', i:'', fi:'hetken kuluttua' },
        { se:'en dam, damen, damer, damerna', i:'', fi:'nainen' },
        { se:'en herre, herren, herrar, herrarna', i:'', fi:'herra' },
        { se:'min, mitt, mina', i:'', fi:'minun' },
        { se:'Mina damer och herrar!', i:'', fi:'Hyvät naiset ja herrat!' },
        { se:'avbryta, avbryter, avbröt, avbrutit', i:'', fi:'keskeyttää' },
        { se:'det är dags for något', i:'', fi:'on jonkin aika' },
        { se:'ett lotteri, lotteriet, lotterier, lotterierna', i:'', fi:'arvonta, arpajaiset' },
        { se:'den första', i:'', fi:'ensimmäinen' },
        { se:'till Sara', i:'', fi:'Saralle' },
        { se:'Grattis!', i:'', fi:'Onnea!' },
        { se:'vem', i:'', fi:'kuka' },
        { se:'den andra', i:'', fi:'toinen' },
        { se:'en vinnare, vinnaren, vinnare, vinnarna', i:'', fi:'voittaja' },
        { se:'en applåd, applåden, applåder, applåderna', i:'', fi:'taputus, aplodi' },
        { se:'för', i:'(prep.)', fi:'jollekin, jotakin varten' },
        { se:'Gratulerar!', i:'', fi:'Onneksi olkoon!' },
        { se:'Tervlig resa!', i:'', fi:'Hauskaa matkaa!' },
        { se:'ett namn, namnet, namnen', i:'', fi:'nimi' },
        { se:'mitt namn är...', i:'', fi:'nimeni on...' }
      ],
      opts: {
        order: 'smart'
      }
    },
    'T1': {
      words: [
        { se:'studera', i:'', fi:'opiskella' },
        { se:'studier, studierna', i:'', fi:'opinnot, opiskelu' },
        { se:'mina studier', i:'(mon.)', fi:'opintoni, opiskeluni' },
        { se:'en studerande', i:'', fi:'opiskelija' },
        { se:'en vuxen', i:'', fi:'aikuinen' },
        { se:'en vuxenstuderande', i:'', fi:'aikuisopiskelija' },
        { se:'en student', i:'', fi:'ylioppilas, opiskelija' },
        { se:'studietid', i:'', fi:'opiskeluaika' },
        { se:'en tid', i:'', fi:'aika' },
        { se:'studiekompis, studiekamrat', i:'', fi:'opiskelukaveri' },
        { se:'kompis, kamrat', i:'', fi:'kaveri' },
        { se:'studieledig', i:'', fi:'opintovapaalla' },
        { se:'en poäng', i:'', fi:'piste, idea, pointti' },
        { se:'en ledig', i:'', fi:'vapaa, avoin' },
        { se:'pä andra stadiet', i:'', fi:'toisella asteella' },
        { se:'i yrkesskolan', i:'', fi:'ammattikoulussa' },
        { se:'på yrkesinstitutet', i:'', fi:'ammattiopistossa' },
        { se:'på handelsinstitutet', i:'', fi:'kauppaopistossa' },
        { se:'på (vid) yrkeshögskolan', i:'', fi:'ammattikorkeakoulussa' },
        { se:'på (vid) högskolan', i:'', fi:'korkeakoulussa' },
        { se:'på universitetet', i:'', fi:'yliopistossa' },
        { se:'på öppna universitetet', i:'', fi:'avoimessa yliopistossa' },
        { se:'på arbis (arbetarinstitutet)', i:'', fi:'työväenopistossa' },
        { se:'jag har gått ut...', i:'', fi:'olen käynyt...' },
        { se:'en grundskola', i:'', fi:'peruskoulu' },
        { se:'en gymnasie', i:'', fi:'lukio' },
        { se:'en studentexamen', i:'', fi:'ylioppilastutkinto' },
        { se:'en grundexamen', i:'', fi:'perustutkinto' },
        { se:'företagsekonomi', i:'', fi:'liiketalous' },
        { se:'företagaren', i:'', fi:'yrittäjä' },
        { se:'specialyrkesexamen', i:'', fi:'erikoisammattitutkinto' },
        { se:'floristmästare', i:'', fi:'floristimestarin' },
        { se:'en mästare', i:'', fi:'mestari' },
        { se:'söka, sökte, sökt', i:'', fi:'hakea, etsiä' },
        { se:'sökte till högskolan', i:'', fi:'hain korkeakouluun' },
        { se:'kom in på universitetet', i:'', fi:'pääsin yliopistoon' },
        { se:'jag studerar i ...', i:'', fi:'opiskelen ...' },
        { se:'en kultur', i:'', fi:'kulttuuri' },
        { se:'jag studerar i ...branschen', i:'', fi:'opiskelen ...alalla' },
        { se:'en maskinteknik', i:'', fi:'konetekniikka' },
        { se:'en maskin', i:'', fi:'kone' },
        { se:'en teknik', i:'', fi:'tekniikka' },
        { se:'humanitisk', i:'', fi:'humanistinen' },
        { se:'en fakultet', i:'', fi:'tiedekunta' },
        { se:'avsluta', i:'', fi:'lopettaa' },
        { se:'distansstudier', i:'', fi:'etäopiskelua' },
        { se:'stälvstudier', i:'', fi:'itseopiskelua' },
        { se:'närstudier', i:'', fi:'lähiopetusta' },
        { se:'kontaktstudier', i:'', fi:'lähiopiskelua' },
        { se:'virtuella studier', i:'', fi:'virtuaaliopintoja' },
        { se:'inlärning i arbetet', i:'', fi:'työssäoppimista' },
        { se:'ett examensarbete', i:'', fi:'opinnäytetyö' },
        { se:'en kurs på tre studiepoäng', i:'', fi:'kolmen opintopisteen kurssi' },
        { se:'ett betyg, betyget, betygerna', i:'', fi:'koulutodistus' },
        { se:'ett intyg, intyget, intygerna', i:'', fi:'(muu) todistus' },
        { se:'ett  desprov, inträdesprovet, inträdesproven', i:'', fi:'pääsykoe' },
        { se:'en lunch', i:'', fi:'ruokatunti' },
        { se:'en matrast', i:'', fi:'ruokatunti' },
        { se:'en arbetspraktik', i:'', fi:'työharjoittelu' },
        { se:'ett arbete, arbetet, arbeten, arbetena', i:'', fi:'työ' },
        { se:'arbeta, arbetar, arbetade, arbetat', i:'', fi:'työskennellä' },
        { se:'avlägga, avlägger, avlade, avlagt', i:'', fi:'suorittaa' },
        { se:'bli, blir, blev, blivit', i:'', fi:'tulla (joksikin)' },
        { se:'bli underkänd', i:'', fi:'tulla hylätyksi' },
        { se:'underkän', i:'', fi:'hylätty' },
        { se:'bli godkänd', i:'', fi:'tulla hyväksytyksi' },
        { se:'godkänd', i:'', fi:'hyväksytty' },
        { se:'bli utexaminerad', i:'', fi:'valmistua' },
        { se:'en examen, examina', i:'', fi:'tutkinto' },
        { se:'en föreläsning, föreläsningen, föreläsningar, föreläsningarna', i:'', fi:'luento' },
        { se:'en högskoleutbildning', i:'', fi:'korkeakoulutus' },
        { se:'en utbildning', i:'', fi:'koulutus' },
        { se:'en högskola', i:'', fi:'korkeakoulu, yliopisto' },
        { se:'en lektion, lektionen, lektioner, lektionerna', i:'', fi:'oppitunti' },
        { se:'en studerande, studeranden, studerandena', i:'', fi:'opiskelija' },
        { se:'en studievecka, studieveckan, studieveckor, studieveckorna', i:'', fi:'opintoviikko' },
        { se:'en vecka, veckan, veckor, veckorna', i:'', fi:'viikko' },
        { se:'ett studiepoäng, studiepoänget, studiepoängen', i:'', fi:'opintopiste' },
        { se:'en tenta, tentan, tentor, tentorna', i:'', fi:'tentti' },
        { se:'en utbytesstudent, utbytesstudenten, utbytesstudenter, utbytesstudenterna', i:'', fi:'vaihto-opiskelija' },
        { se:'ett lärdomsprov, lärdomsprovet, lärdomsproven', i:'', fi:'opinnäytetyö' },
        { se:'ett läsår, läsåret, läsåren', i:'', fi:'lukuvuosi' },
        { se:'ett slutarbete, slutarbetet, slutarbeten, slutarbetena', i:'', fi:'lopputyö' },
        { se:'ett slut', i:'', fi:'loppu' },
        { se:'ett diplomarbete, diplomarbetet, diplomarbeten, diplomarbetena', i:'', fi:'diplomityö' },
        { se:'ett vitsord, vitsordet, vitsoren', i:'', fi:'arvosana' },
        { se:'ett betyg, betyget, betygen', i:'', fi:'todistus' },
        { se:'grundstudier, grundstudierna', i:'', fi:'perusopinnot' },
        { se:'en hösttermin, höstterminen, höstterminer, höstterminerna', i:'', fi:'syyslukukausi' },
        { se:'en vårtermin, vårterminen, vårterminerna', i:'', fi:'kevätlukukausi' },
        { se:'en termin, terminen, terminer, terminerna', i:'', fi:'lukukausi' },
        { se:'klara, klarar, klarade, klarat', i:'', fi:'selviytyä, pärjätä' },
        { se:'studera, studerar, studerade, studerat', i:'', fi:'opiskella' },
        { se:'plugga, pluggar, pluggade, pluggat', i:'', fi:'opiskella' },
        { se:'läsa, läser, läste, läst', i:'', fi:'opiskella' },
        { se:'en helt', i:'', fi:'täysin, kokonaan' },
        { se:'en del', i:'', fi:'osa' },
        { se:'studera på distans', i:'', fi:'etäopiskella' },
        { se:'på heltid', i:'', fi:'päätoimisesti' },
        { se:'på deltid', i:'', fi:'sivutoimisesti' },
        { se:'et utbildning, utbildningen, utbildningar, utbildningarna', i:'', fi:'koulutus' },
        { se:'valfri', i:'', fi:'valinnainen, vapaaehtoinen' },
        { se:'valfria studier', i:'', fi:'vapaavalintaiset opinnot' },
        { se:'yrkesstudier', i:'', fi:'ammattiopinnot' },
        { se:'ett yrke', i:'', fi:'ammatti' },
        { se:'omskolning', i:'', fi:'uudelleen koulutus' },
        { se:'ett biämne, biämnet, biämnen, biämnena', i:'', fi:'sivuaine' },
        { se:'ett förhör, förhöret, förhören', i:'', fi:'kuulustelu' },
        { se:'fördjupade kurser', i:'', fi:'syventävät kurssit' },
        { se:'en flicka, flickan, flickor, flickorna', i:'', fi:'tyttö' },
        { se:'en pojke, pojken, pojkar, pojkarna', i:'', fi:'poika' },
        { se:'en elev, eleven, elever, eleverna', i:'', fi:'oppilas' },
        { se:'en stad, staden, städer, städerna', i:'', fi:'kaupunki' },
        { se:'en parti, partiet, partier, partierna', i:'', fi:'puolue, osa' },
        { se:'en sko, skon, skor, skorna', i:'', fi:'kenkä' },
        { se:'ett hus, huset, hus, husen', i:'', fi:'talo' },
        { se:'en läkare, läkaren, läkare, läkarna', i:'', fi:'lääkäri' },
        { se:'en politiker, politikern, politiker, politikerna', i:'', fi:'poliitikko' }
      ],
      opts: {
        order: 'smart'
      }
    },
    'test': {
      words: [
        { se:'1', i:'', fi:'yksi' },
        { se:'2', i:'', fi:'kaksi' },
        { se:'3', i:'', fi:'kolme' },
        { se:'4', i:'', fi:'neljä' },
        { se:'5', i:'', fi:'viisi' }
      ],
      opts: {
        order: 'linear'
      }
    }
  },
  dbname: 'T1',
  order: 'linear',
  title: 'Swedish',
  db: [],
  idx: [],
  correct: [],
  wrong: [],
  q: [],
  a: [],
  num: 0,
  total: 0,
  last: null,
  qpp: 5,
  stats: {
    correct: 0,
    wrong: 0
  },

  _getRandomNumbers: function(min, max, count) {
    var out = [];
    do {
      var r = _.random(min,max);
      if (!_.contains(out,r)){
        out.push(r);
      }
    } while(out.length<count);
    return out;
  },

  _addWordsToDB: function(db){
    var _this = this;
    this.order = db.opts.order?db.opts.order:'linear';
    _.each(db.words, function(v){
      var o = {
        se: v.se,
        i: v.i,
        fi: v.fi
      };
      _this.db.push(o);
    });
  },

  _createIndexFromDB: function() {
    // create index of db
    for (var i=this.db.length-1; i>=0; --i){
      this.idx.push({
        idx: i,
        side: 0,
      });
      this.idx.push({
        idx: i,
        side: 1,
      });
    }
    this.total = this.idx.length;
  },

  _shuffleIndex: function() {
    this.idx = _.shuffle(this.idx);
  },

  _reset: function(){
    this.db.clear();
    this.idx.clear();
    this.correct.clear();
    this.wrong.clear();
    this.stats.correct = 0;
    this.stats.wrong = 0;
    this.num = 0;
  },

  _next: function(){
    if (this.db.length!==0) {

      this.last = this.idx.pop();

      this.q.clear();
      this.a.clear();

      if (this.num<this.total) {
        this.num++;
        var q, a;
        switch (this.last.side) {
          case 0:
            q = this.db[this.last.idx].se;
            q = q.split(',');
            a = this.db[this.last.idx].fi;
            a = a.split(',');
            break;
          case 1:
            q = this.db[this.last.idx].fi;
            q = q.split(',');
            a = this.db[this.last.idx].se;
            a = a.split(',');
            break;
        }
        // note: always takes the first word
        this.q.push(q[0].trim());
        var w1 = a[0].trim();
        var w2;
        var word;
        this.a.push(w1);
        if (this.order==='smart') {
          var w1match, w2match;
          for (var i=0; i!=this.db.length; ++i) {
            if (i!==this.last.idx) {
              if (this.last.side===0) {
                w2 = this.db[i].fi.split(',');
              } else {
                w2 = this.db[i].se.split(',');
              }
              w1match = w1.replace('en ', '').replace('ett ', '').replace('på ', '').replace('i ', '');
              w2match = w2[0].trim().replace('en ', '').replace('ett ', '').replace('på', '').replace('i ', '');
              if (w1match.substring(0,1)===w2match.substring(0,1)) {
                word = w2[0].trim();
                if (!_.contains(this.a, word)) {
                  this.a.push(word);
                  if (this.a.length===this.qpp) {
                    break;
                  }
                }
              }
            }
          }
        }
        if (this.a.length<this.qpp) {
          // fill with random words
          do {
            var r = _.random(0, this.db.length-1);
            if (this.last.side===0) {
              w2 = this.db[r].fi.split(',');
            } else {
              w2 = this.db[r].se.split(',');
            }
            word = w2[0].trim();
            if (!_.contains(this.a, word)) {
              this.a.push(word);
            }
          } while (this.a.length<this.qpp);
        }
        this.a = _.shuffle(this.a);
      } else {
        // show end results
        this.q.push('Correct: ' + ((this.stats.correct/this.total)*100).toFixed(0) + '%');
        this.a.push('');
        this.a.push('');
        this.a.push('');
        this.a.push('');
      }

    }
  },

  _show: function(){
    /*
    console.log('--------------------------');
    console.log(this.num + ' / ' + this.total + ' (' + this.idx.length + ')');
    console.log('--------------------------');
    console.log('Q: ', this.q[0]);
    console.log('A1:', this.a[0]);
    console.log('A2:', this.a[1]);
    console.log('A3:', this.a[2]);
    console.log('A4:', this.a[3]);
    */
    var i;
    $('#Q').text(this.q[0]);
    if (this.a[0].length===0) {
      for (i=0; i!=this.qpp; ++i) {
        $('#A'+(i+1)).hide();
      }
      $('#skip').text('< restart >');
    } else {
      for (i=0; i!=this.qpp; ++i) {
        $('#A'+(i+1)).text(this.a[i]);
        $('#A'+(i+1)).show();
      }
      $('#skip').text('< skip >');
    }
    $('#status').text(this.title + ', ' + this.dbname + ': [ ' + this.num + ' / ' + this.total + ' ] - Correct: ' + this.stats.correct + ' (' + ((this.stats.correct/this.total)*100).toFixed(0) + '%) - Wrong: ' + this.stats.wrong);
  },

  _answer: function(choice) {
    var _this = this;
    console.log(choice);
    if (choice===0) {
      if ($('#skip').text() !== '< skip >') {
        this.init();
      } else {
        // skip, add currect question one times back to the index
        this.idx.push(this.last);
        // and shuffle again (if required)
        if (this.order!=='linear') {
          this.idx = _.shuffle(this.idx);
        }
        this.num--;
        this._next();
        this._show();
      }
    } else {
      // check if the answer was correct
      var q, a;
      switch (this.last.side) {
        case 0:
          q = this.db[this.last.idx].se;
          q = q.split(',');
          a = this.db[this.last.idx].fi;
          a = a.split(',');
          break;
        case 1:
          q = this.db[this.last.idx].fi;
          q = q.split(',');
          a = this.db[this.last.idx].se;
          a = a.split(',');
          break;
      }
      if (this.a[choice-1]===a[0].trim()) {
        // correct answer
        this.stats.correct++;
        $('#A'+choice).removeClass("btn-default");
        $('#A'+choice).addClass("btn-success");
        setTimeout(function(){
          $('#A'+choice).removeClass("btn-success");
          $('#A'+choice).addClass("btn-default");
          _this._next();
          _this._show();
        }, 500);
      } else {
        // wrong answer
        this.stats.wrong++;
        var correct = -1;
        for (var i=0; i<this.qpp; ++i) {
          if (this.a[i]===a[0].trim()) {
            correct = i+1;
            break;
          }
        }
        // skip, add currect question two times back to the index
        this.idx.push(this.last);
        var last = _.clone(this.last, true);
        last.side = last.side===0?1:0;
        this.idx.push(last);
        // and shuffle again (if required)
        if (this.order!=='linear') {
          this.idx = _.shuffle(this.idx);
        }
        this.total+=2;
        $('#A'+choice).removeClass("btn-default");
        $('#A'+choice).addClass("btn-danger");
        setTimeout(function(){
          // show correct
          $('#A'+correct).removeClass("btn-default");
          $('#A'+correct).addClass("btn-success");
          setTimeout(function(){
            $('#A'+choice).removeClass("btn-danger");
            $('#A'+choice).addClass("btn-default");
            $('#A'+correct).removeClass("btn-success");
            $('#A'+correct).addClass("btn-default");
            _this._next();
            _this._show();
          }, 2000);
        }, 500);
      }
    }
  },

  _start: function() {
    this._next();
    this._show();
  },

  setup: function(){
    var _this = this;

    $(window).on('load', function() {
      FastClick.attach(document.body);
    });

    $(window).on('hashchange', function() {
      // do we have a new hash?
      var newHash = window.location.hash.substring(1);
      if (newHash && this.dbname!==newHash) {
        _this.init();
      }
    });

    $('#skip').click(function(){
      _this._answer(0);
    });

    function createCallback(i) {
      return function(){
        _this._answer(i);
      };
    }

    for (var i=0; i!=this.qpp; ++i) {
      $('#A'+(i+1)).click( createCallback(i+1) );
    }
  },

  init: function(){
    // reset
    this._reset();

    // do we have a new hash?
    var newHash = window.location.hash.substring(1);
    if (newHash && this.dbname!==newHash) {
      this.dbname = newHash;
    }

    // build database
    if (!this.dbname) {
      this.dbname = 'T1';
    }

    this._addWordsToDB(this.data[this.dbname]);
    this._createIndexFromDB();
    if (this.order!=='linear') {
      this._shuffleIndex();
    }

    // start quiz
    this._start();
  }
};

$(document).ready(function(){
  App.setup();
  App.init();
});

