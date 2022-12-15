var qu = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]


var l = 0;
var q = ['1. Wat zijn zones?',
    '2. Wat zijn de tropen?',
    '3. Wat zijn etages?',
    '4. Wat is biodiversiteit?',
    '5. Wat is een voorbeeld van een Natuurlijke hulpbron (1)',
    '6. Wat betekenen duurzaam en herbebossing?',
    '7. Hoe wordt het amazonegebied ook wel genoemd?',
    '8. Welk punt is waar over het amazonegebied?',
    '9. Waardoor verdwijnt het Braziliaanse regenwoud?',
    '10. Waar van Brazilie is dichtbevolkt? en dunbevolkt?',
    '11. Een ligging van tropische regenwouden is in ...',
    '12. Waar liggen de tropische regenwouden? tussen ...',
    '13. Welke is juist? De bossen in het amazonegebied zijn belangrijk omdat ...',
    '14. Welke activiteit in het amazonegebied is NIET JUIST?',
    '15. Welk punt over Mali is NIET JUIST?',
    '16. Alleen op plaatsen waar water is, groeien ...',
    '17. De sahel is het gebied tussen ... en ...',
    '18. Welk begrip over Mali is waar?',
    '19. Wat betekent Kalaallit Nunaat?',
    '20. Is groenland een koud of tropisch land?',
    '21. Welke vegetaties groeien in groenland?',
    '22. De hoofdstad van Groenland is ...',
    '23. Welk punt over Groenland is NIET JUIST?',
    '24. Wat betekent extensieveeteelt?',
    '25. Wat is overbeweiding?',
    '26. Wat is permafrost?',
    '27. Welk landschip is er NIET in Groenland?',
    '28. Welk werelddeel heeft GEEN tropisch klimaat?',
    '29. Waar wonen de meeste Chinezen?',
    '30. Welk deel van china is dunbevolkt?',
    '31. "Een hoogegebergte met toppen van meer dan 8000m hoog", hoe heet deze gebergte?',
    '32. Welke is GEEN woestijn?'];
var ans = [{ a: 'gebieden', b: 'landen', c: 'wereldelen', d: 'bedrijven', e: '1' },
{ a: 'gebieden waar het veel regent', b: 'de koude klimaten', c: 'de warme klimaten', d: 'warme luchtstreek bij de evenaar', e: '4' },
{ a: 'verschillende hoogtes van bomen', b: 'boomsoorten', c: 'kasten', d: 'struiksoorten', e: '1' },
{ a: 'verschillende soorten bomen', b: 'insecten', c: 'verschillende diersoorten', d: 'veeteelt', e: '3' },
{ a: 'plastic', b: 'goud', c: 'zwarte aarde', d: 'gras', e: '2' },
{ a: 'het zuinig zijn - het kappen van bos', b: 'ervoor zorgen dat iets blift bestaan - het planten van gras', c: 'ervoor zorgen dat iets blijft bestaan - jonge bomen aanplanten na houtkap', d: 'zuinig zijn - gras planten', e: '3' },
{ a: 'longen van de aarde', b: 'ondoordringbaar bos', c: 'groen van de aarde', d: 'plagen', e: '1' },
{ a: 'ligt in de tropen', b: 'slecht voor dieren', c: 'heel droog en warm', d: 'altijd onder water', e: '1' },
{ a: 'door bosbranden', b: 'door houtkap', c: 'door dieren', d: 'door bomen', e: '1' },
{ a: 'noorden - zuiden', b: 'oosten - noorden', c: 'zuiden - oosten', d: 'oosten - westen', e: '4' },
{ a: 'Noord-Amerika', b: 'Europa', c: 'Zuid-Amerika', d: 'Midden-Amerika', e: '3' },
{ a: 'Brazilie en Amerika', b: 'SteenboksKeerkring en kreeftskeerkring', c: 'Noordpool en Zuidpool', d: 'Nederland en Rusland', e: '2' },
{ a: 'ze de longen van de aarde zijn', b: 'ze groen zijn', c: 'Ze water produceren', d: 'Ze groot zijn', e: '1' },
{ a: 'goudwinning', b: 'veeteelt', c: 'camperen', d: 'ontbossing', e: '3' },
{ a: 'het is een arm land', b: 'het is groter dan Canada', c: 'het is droog', d: 'het regent een tijd per maand', e: '2' },
{ a: '(palm)bomen)', b: 'mossen', c: 'appelbomen', d: 'bossen', e: '1' },
{ a: 'de savanne in "t zuiden en de Sahara in het noorden', b: 'Verenigde staten en Rusland', c: 'Nederland en Egypte', d: 'Iran en Irak', e: '2' },
{ a: 'het is een rijk land', b: 'het is groter dan Canada', c: 'het is erg nat', d: 'het regent een tijd per maand', e: '4' },
{ a: 'land van de mensen', b: 'kale mensen', c: 'Groenland', d: 'een koud gebied', e: '1' },
{ a: 'tropisch', b: 'o/', c: 'warm', d: 'koud', e: '4' },
{ a: 'mossen', b: 'hoge bomen', c: 'cactussen', d: 'woestijnrozen', e: '1' },
{ a: 'Nuuku', b: 'Nuke', c: 'Nuuk', d: 'Nork', e: '3' },
{ a: 'groenland is koud', b: 'het is het kleinste land ter wereld', c: 'het is een eiland', d: 'neerslag komt in de vorm van sneeuw', e: '2' },
{ a: 'veeteelt met weinig vee per hectare', b: 'uitbreiding van veeteelt', c: 'te veel dieren', d: 'te veel landbouw', e: '1' },
{ a: 'achteruitgang van plantengroei door vee', b: 'te veel veeteelt', c: 'te veel grondbewerking', d: 'achteruitgang van diersoorten', e: '1' },
{ a: 'warm klimaat', b: 'koud klimaat', c: 'Altijd bevroren ondergrond', d: 'bevroren glas', e: '3' },
{ a: 'toendra', b: 'permafrost', c: 'Zeeijs', d: 'steppe', e: '4' },
{ a: 'Azie', b: 'Europa', c: 'Zuid-Amerika', d: 'deels in AUstralie', e: '3' },
{ a: 'oosten', b: 'westen', c: 'noorden', d: 'zuiden', e: '1' },
{ a: 'oosten', b: 'noorden', c: 'zuiden', d: 'westen', e: '4' },
{ a: 'De toemoekhoemak geb.', b: 'De himalaya geb.', c: 'Cantabrisch geb.', d: 'Penninisch geb.', e: '2' },
{ a: 'De Sahara', b: 'De taklamakan', c: 'De atakama', d: 'De Amoer', e: '4' },
]
var csi;

document.getElementById("title").innerHTML = q[0];
document.getElementById("op1").innerHTML = ans[0].a;
document.getElementById("op2").innerHTML = ans[0].b;
document.getElementById("op3").innerHTML = ans[0].c;
document.getElementById("op4").innerHTML = ans[0].d;

function next() {
    let a;
    if(l != 31){
        for (let i = 1; i < 5; i++) {
            const cb = document.getElementById('iop' + i);
            if (cb.checked == true && i == ans[l].e) {
                csi = true;
                document.getElementById("title").innerHTML = q[l];
                document.getElementById("op1").innerHTML = ans[l].a;
                document.getElementById("op2").innerHTML = ans[l].b;
                document.getElementById("op3").innerHTML = ans[l].c;
                document.getElementById("op4").innerHTML = ans[l].d;
                qu[l] = true;
            } else if ((cb.checked == true || cb.checked == false) && i != ans[l].e) {
                csi = false;
                qu[l] = false;
            }
        }
        console.log(csi)
        console.log(csi ? "correct" : "incorrect")
    
        l = l + 1;
        console.log(l)
    
        document.getElementById("title").innerHTML = q[l];
        document.getElementById("op1").innerHTML = ans[l].a;
        document.getElementById("op2").innerHTML = ans[l].b;
        document.getElementById("op3").innerHTML = ans[l].c;
        document.getElementById("op4").innerHTML = ans[l].d;
    } else {
        document.getElementById("qchange").style.display = "none";
     /*   document.getElementById("res").className = "results";
        for(let u = 1;u<33;u++){
            if(qu[u-1] == true){document.getElementById("q"+u).innerHTML = qu[u-1]}else{document.getElementById("q"+u).innerHTML = qu[u-1]+ " ___ correct answer: "+ ans[u-1].e}
            //document.getElementById("q"+u) = (qu[u-1]? qu[u-1]:qu[u-1]+ " ___ correct answer: "+ ans[u-1].e)
        }*/
    }


    //document.getElementById('qchange').innerHTML = divcontent[i - 1];
}

function validateAnswer() {
    var checkboxes = document.getElementsByName("ans");
    var numberOfCheckedItems = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked)
            numberOfCheckedItems++;
    }
    if (numberOfCheckedItems > 1) {
        console.log("error")//document.getElementById('err').style.display = 'unset';
        return false;
    }
}  