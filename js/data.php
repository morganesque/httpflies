<?php
header('Content-Type: application/javascript');
echo 'var data = ';
include ('data-v2.json');
echo ';';
?>

function findData(code)
{
    for (var i = data.length - 1; i >= 0; i--) 
    {    
        if (code == data[i].code) return data[i];
    };
}