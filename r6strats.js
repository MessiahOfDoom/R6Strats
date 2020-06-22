var mode_attacker = true;

function set_mode(is_attacker){
    mode_attacker = is_attacker;
    document.getElementById('buttonATK').className = is_attacker ? 'btnActive' : 'btnInactive';
    document.getElementById('buttonDEF').className = is_attacker ? 'btnInactive' : 'btnActive';
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll(){
    var arr = mode_attacker ? strats.attacker : strats.defender
    var i = randomInteger(0, arr.length - 1);
    return arr[i];
}

function display_roll(){
    r = roll();
    document.getElementById('stratName').value = r.name;
    document.getElementById('stratChallenge').value = r.challenge;
}
