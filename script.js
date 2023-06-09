let data = JSON.parse(localStorage.getItem("data"));
let portal = document.getElementById("portal");
if (data === null) {
    score = 0;
    damage = 1;
    power = 1;
    obsidian = 0;
    isPortalSet = 0;
    enderPearl = 0;
    blazeRod = 0;
    blazePowder = 0;
    eyeOfEnder = 0;
    blazeHP = 10000;
    isEndPortalSet = 0;
    endSpikeQuantity = 0;
    endSpikeHP = 50000;
    enderDragonHP = 1000000;
    pickCounts = {
        stonePickCount: 0,
        ironPickCount: 0,
        goldPickCount: 0,
        diamondPickCount: 0,
    }
    swordCounts = {
        stoneSwordCount: 0,
        ironSwordCount: 0,
        goldSwordCount: 0,
        diamondSwordCount: 0
    }
} else {
    score = data.score;
    power = data.power;
    damage = data.damage;
    pickCounts = data.pickCounts;
    swordCounts = data.swordCounts;
    obsidian = data.obsidian;
    isPortalSet = data.isPortalSet;
    enderPearl = data.enderPearl;
    blazeRod = data.blazeRod;
    blazePowder = data.blazePowder;
    eyeOfEnder = data.eyeOfEnder;
    blazeHP = data.blazeHP;
    isEndPortalSet = data.isEndPortalSet;
    endSpikeQuantity = data.endSpikeQuantity;
    endSpikeHP = data.endSpikeHP;
    enderDragonHP = data.enderDragonHP;
}
function setToLocalStorage()
{
    let dataToLocalStoraged = {
        score: score,
        power: power,
        pickCounts: pickCounts,
        swordCounts: swordCounts,
        damage: damage,
        obsidian: obsidian,
        isPortalSet: isPortalSet,
        enderPearl: enderPearl,
        blazeRod: blazeRod,
        blazePowder: blazePowder,
        eyeOfEnder: eyeOfEnder,
        blazeHP: blazeHP,
        isEndPortalSet: isEndPortalSet,
        endSpikeQuantity: endSpikeQuantity,
        endSpikeHP: endSpikeHP,
        enderDragonHP: enderDragonHP
    }
    localStorage.setItem('data', JSON.stringify(dataToLocalStoraged));
}
function gEBI(variable)
{
    return document.getElementById(variable)
}
function addScore()
{
    score += power;
    setToLocalStorage(power);
    gEBI('score').innerHTML = score;
}
window.onload = function() {
    if (gEBI('power')) {
        gEBI('score').innerHTML = score;
        gEBI('obsidianCount').innerHTML = 'Ilość: ' + obsidian;
        gEBI('power').innerHTML = 'Siła = ' + power;
        gEBI('stonePickCount').innerHTML = 'Ilość: ' + data.pickCounts['stonePickCount'];
        gEBI('ironPickCount').innerHTML = 'Ilość: ' + data.pickCounts['ironPickCount'];
        gEBI('goldPickCount').innerHTML = 'Ilość: ' + data.pickCounts['goldPickCount'];
        gEBI('diamondPickCount').innerHTML = 'Ilość: ' + data.pickCounts['diamondPickCount'];
    }
    if (gEBI('damage')) {
        gEBI('score').innerHTML = score;
        gEBI('damage').innerHTML = "Obrażenia = " + damage;
        gEBI('stoneSwordCount').innerHTML = 'Ilość: ' + data.swordCounts['stoneSwordCount'];
        gEBI('ironSwordCount').innerHTML = 'Ilość: ' + data.swordCounts['ironSwordCount'];
        gEBI('goldSwordCount').innerHTML = 'Ilość: ' + data.swordCounts['goldSwordCount'];
        gEBI('diamondSwordCount').innerHTML = 'Ilość: ' + data.swordCounts['diamondSwordCount'];
        gEBI('enderPearlQuantity1').innerHTML = 'Ilość: ' + data.enderPearl;
        gEBI('enderPearlQuantity2').innerHTML = 'Ilość: ' + data.enderPearl;
        gEBI('blazeRodQuantity').innerHTML = 'Ilość: ' + data.blazeRod;
        gEBI('blazePowderQuantity').innerHTML = 'Ilość: ' + data.blazePowder;
        gEBI('eyeOfEnderQuantity').innerHTML = 'Ilość: ' + data.eyeOfEnder;
        gEBI('blazeHP').innerHTML = data.blazeHP;
    }
    if (gEBI('enderDragon')) {
        gEBI('endSpikeQuantity').innerHTML = endSpikeQuantity;
        gEBI('endSpikeHP').innerHTML = endSpikeHP;
        if (endSpikeQuantity >= 12){
            gEBI('endSpikeHP').innerHTML = '';
            gEBI('endSpikeHP2').innerHTML = 'Ostatni zniszczony! pora na smoka!';
            gEBI('endSpikeHP3').innerHTML = '';
            gEBI('enderDragonHP')

        }
    }
    if (isPortalSet === 1) {
        gEBI("portal").innerHTML = "<img onclick='goToNether()' id=\"portal\" src=\"photos/obsidianPortal.webp\" alt=\"\" class=\"portal\">\n"
        gEBI('portalText').innerHTML = "Teraz zbierz 12 oczu endera!";
        if (isEndPortalSet === 0 && eyeOfEnder >= 12) {
            gEBI('portalText').innerHTML = "Kliknij, aby zbudować portal!";
        }
    }
    if (isEndPortalSet === 1) {
        gEBI("endPortal").innerHTML = "<img src=\"photos/endPortal.webp\" alt=\"\" class=\"endPortal\" onclick=\"goToEnd()\">"
        gEBI('portalText').innerHTML = "Przygotuj się do walki ze smokiem!"
    }
}
function reset()
{
    localStorage.clear();
    location.reload()
}
function buyPickaxe(pickaxeCost, plusPower, count)
{
    if (score >= pickaxeCost) {
        score -= pickaxeCost;
        power += plusPower;
        pickCounts[count] += 1;
        setToLocalStorage(score);
        setToLocalStorage(power);
        setToLocalStorage(pickCounts);
        gEBI('score').innerHTML = score;
        gEBI('power').innerHTML = 'Siła = ' + power;
        gEBI(count).innerHTML = 'Ilość : ' + pickCounts[count];
    }
}
function buySword(swordCost, plusDamage, count)
{
    if (score >= swordCost){
        score -= swordCost;
        damage += plusDamage;
        swordCounts[count] += 1;
        gEBI("score").innerHTML = score;
        gEBI("damage").innerHTML = 'Obrażenia = ' + damage;
        gEBI(count).innerHTML = 'Ilość : ' + swordCounts[count];
        setToLocalStorage(score);
        setToLocalStorage(damage);
        setToLocalStorage(swordCounts);
    }
}
function buyObsidian()
{
    if (score >= 500000){
        score -= 500000;
        setToLocalStorage(score);
        obsidian += 1;
        setToLocalStorage(obsidian);
        gEBI("obsidianCount").innerHTML = "Ilość: " + obsidian;
        gEBI('score').innerHTML = score;
        if (isPortalSet === 0) {
            obsidian >= 10 ?  gEBI('portalText').innerHTML = "Kliknij, aby zbudować portal!" : '';
        }
    }
}
function buildPortal()
{
    let portalText = document.getElementById("portalText").innerHTML;
    if (isPortalSet === 0) {
        if (portalText === "Kliknij, aby zbudować portal!" && obsidian >= 10) {
            let portal = gEBI("portal");
            portal.innerHTML = "<img onclick='goToNether()' id=\"portal\" src=\"photos/obsidianPortal.webp\" alt=\"\" class=\"portal\">\n"
            obsidian -= 10;
            isPortalSet += 1;
            setToLocalStorage(obsidian)
            setToLocalStorage(isPortalSet)
            gEBI("obsidianCount").innerHTML = "Ilość: " + obsidian;
            gEBI('portalText').innerHTML = "Teraz zbierz 12 oczu endera!"
        }
    }
    if (isEndPortalSet === 0) {
        if (portalText === "Kliknij, aby zbudować portal!" && eyeOfEnder >= 12) {
            let endPortal = gEBI("endPortal");
            endPortal.innerHTML = "<img src=\"photos/endPortal.webp\" alt=\"\" class=\"endPortal\" onclick=\"goToEnd()\">"
            eyeOfEnder -= 12;
            isEndPortalSet += 1;
            setToLocalStorage(eyeOfEnder);
            setToLocalStorage(isEndPortalSet);
            gEBI("eyeOfEnderQuantity").innerHTML = "Ilość: " + eyeOfEnder;
            gEBI('portalText').innerHTML = "Przygotuj się do walki ze smokiem!";
        }
    }
}
function buyPearl()
{
    if (score >= 50000) {
        score -= 50000;
        enderPearl += 1;
        setToLocalStorage(enderPearl);
        setToLocalStorage(score);
        gEBI('enderPearlQuantity1').innerHTML = "Ilość: " + enderPearl;
        gEBI('score').innerHTML = score;
        gEBI('enderPearlQuantity2').innerHTML = "Ilość: " + enderPearl;
    }
}
function killBlaze()
{
    if (blazeHP - damage <= 0) {
        blazeHP = 10000;
        blazeRod += 1;
        setToLocalStorage(blazeRod)
        setToLocalStorage(blazeHP)
        gEBI('blazeHP').innerHTML = blazeHP;
        gEBI('blazeRodQuantity').innerHTML = 'Ilość: ' + blazeRod;
    } else {
        blazeHP -= damage;
        setToLocalStorage(blazeHP)
        gEBI('blazeHP').innerHTML = blazeHP;

    }
}
function blazeRodIntoPowder()
{
    if (blazeRod >= 1) {
        blazeRod -= 1;
        blazePowder += 2;
        setToLocalStorage(blazeRod);
        setToLocalStorage(blazePowder);
        gEBI('blazeRodQuantity').innerHTML = "Ilość: " + blazeRod;
        gEBI('blazePowderQuantity').innerHTML = "Ilość: " + blazePowder;
    }
}
function enderPearlIntoEyeOfEnder()
{
    if (blazePowder >= 1 && enderPearl >= 1) {
        blazePowder -= 1;
        enderPearl -= 1;
        eyeOfEnder += 1;
        setToLocalStorage(blazePowder);
        setToLocalStorage(enderPearl);
        setToLocalStorage(eyeOfEnder);
        gEBI('blazePowderQuantity').innerHTML = "Ilość: " + blazePowder;
        gEBI('enderPearlQuantity1').innerHTML = "Ilość: " + enderPearl;
        gEBI('enderPearlQuantity2').innerHTML = "Ilość: " + enderPearl;
        gEBI('eyeOfEnderQuantity').innerHTML = "Ilość: " + eyeOfEnder;

    }
}
function beatEndSpikes ()
{
    if (endSpikeHP - damage >= 0){
        endSpikeHP -= damage;
        setToLocalStorage(endSpikeHP);
        gEBI('endSpikeHP').innerHTML = endSpikeHP;
    } else {
        endSpikeHP = 50000;
        setToLocalStorage(endSpikeHP);
        gEBI('endSpikeHP').innerHTML = endSpikeHP;
        endSpikeQuantity += 1
        setToLocalStorage(endSpikeQuantity)
        gEBI('endSpikeQuantity').innerHTML = endSpikeQuantity;
    }
    if (endSpikeQuantity >= 12){
        gEBI('endSpikeHP').innerHTML = '';
        gEBI('endSpikeHP2').innerHTML = 'To był ostatni! pora na smoka!';
        gEBI('endSpikeHP3').innerHTML = '';
    }
}
function killEnderDragon ()
{
    if (enderDragonHP - damage >= 0) {
        enderDragonHP -= damage;
        setToLocalStorage(enderDragonHP);
        gEBI('enderDragonHP').innerHTML = enderDragonHP;
        if (endSpikeQuantity !== 12) {
            enderDragonHP <= 900000 ? enderDragonHP = 1000000 : '';
            setToLocalStorage(enderDragonHP);
            gEBI('enderDragonHP').innerHTML = enderDragonHP;
        }
    } else {
        enderDragonHP <= 0 ? window.location = "gg.html" : '';
    }

}
function goToNether()
{
    window.location = "nether.html";
}
function goToEarth()
{
    window.location = "index.html";
}
function goToEnd()
{
    window.location ="end.html";
}
function resetGame()
{
    window.location = "index.html";
    localStorage.clear();
}