<?php
// header('Content-Type: application/javascript');
echo 'var data = ';
include ('data-v2.json');
echo ';';
?>

for (var i = data.length - 1; i >= 0; i--) 
{
    var code = data[i].code;
    // console.log([i,code]);
    if (code.match(/\dxx/))
    {
        data.splice(i,1);
        // console.log('removing');
    } else {
        data[i].hue = (i/data.length)*360;
    }
}

function shuffle(array) {
    var tmp, current, top = array.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}

data = shuffle(data);

function findData(code)
{
    for (var i = data.length - 1; i >= 0; i--) 
    {    
        if (code == data[i].code) return data[i];
    };
}

function findNext(code)
{
    console.log('finding: '+code);
    for (var i = data.length - 1; i >= 0; i--) 
    {    
        if (code == data[i].code) {
            var c = i+1;
            if (c == data.length) c = 0;
            return data[c];
        }
    };
}

function findPrev(code)
{
    for (var i = data.length - 1; i >= 0; i--) 
    {    
        if (code == data[i].code) {
            var c = i-1;
            if (c == -1) c = data.length - 1;
            return data[c];
        }
    };
}