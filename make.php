#!/usr/bin/php
<?php

$contents = file_get_contents('http://www.httpflies.tom/');

file_put_contents('flat.html', $contents);


?>
