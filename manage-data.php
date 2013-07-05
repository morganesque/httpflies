#!/usr/bin/php
<?php

$json = file_get_contents('js/data-v1.json');
$data = json_decode($json);

/*
    Adding in the latin.
*/
$latin = file('latin.txt');
$new = array();
foreach($latin as $l)
{
    $p = strpos($l, ' ');
    $text = substr($l, $p);
    $code = substr($l, 0, $p);
    $starred = false;

    if (strpos($code,'*'))
    {
        $code = substr($code,0,3);
        $starred = true;
    }

    $new[$code] = array($text,$starred);
}

foreach($data as $k=>$d)
{
    $data[$k]->latin = $new[$d->code][0];
    $data[$k]->starred = $new[$d->code][1];
}

$out = json_encode($data);
echo $out;
?>