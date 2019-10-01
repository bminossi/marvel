<?php

echo '<head><script src="https://code.jquery.com/jquery-3.4.1.min.js"></script><script src="js/main.js"></script><link rel="stylesheet" href="css/grid.css"></link><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>';
echo '<div class="input-group input-group-lg">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-lg">Pesquisar Herói</span>
  </div>
  <input id ="pesquisa" type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
</div>';
echo '<div id="herois" class="wrapper"></div>';