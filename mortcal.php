<?php
session_start();
?>
<?php

$toDisplay = "";
$fieldStyle = "";

if (isset($_SESSION['history']))
   {
   $history = $_SESSION['history'];
   }
else
    {
    $history = "";
    }


    if (empty($_POST) or ($_SESSION['errFlag'] == 99) )
       {
        $homeval = "";
        $downpayment = "";
        $intrstrate = "";
        $loanterm = "";
        $errFlag = 0;
        $fieldStyle = "";
        $calc = 0;
        $toDisplay = "To calculate fill in ALL the fields.";
        webPage($homeval, $downpayment, $intrstrate, $loanterm, $toDisplay, $fieldStyle, $history);

       }

    else
          {
           $homeval = $_POST['homeval'];
           $downpayment = $_POST['downpayment'];
           $intrstrate = $_POST['intrstrate'];
           $loanterm = $_POST['loanterm'];
           $errFlag = 0;
           $fieldStyle = "";
           if ($homeval =="" || $downpayment =="" || $intrstrate =="" || $loanterm =="")
               {
               $errFlag = $errFlag + 1;
               $calc = 0;
               $fieldStyle = $fieldStyle . 'input[name=homeval], input[name=downpayment], input[name=intrstrate], input[name=loanterm] {border-color: red;}';
               }
           if ($errFlag > 0)
               {
               $toDisplay = "Correct the field(s) marked in RED and resubmit.";
               $calc = 0;
               webPage($homeval, $downpayment, $intrstrate, $loanterm,  $toDisplay, $fieldStyle, $history);
               }


           else
               {
               $errFlag = 99;
               $calc = ((($homeval - $downpayment * ($intrstrate * .1) + $homeval - $downpayment)/$loanterm)/12 );
               $history = $history . $calc . "##";
               $toDisplay = "This is your new monthly mortgage calculation";
               webPage($homeval, $downpayment, $intrstrate, $loanterm, $toDisplay, $fieldStyle, $history, $calc);
               }
          }


          $_SESSION['errFlag'] = $errFlag;
          $_SESSION['history'] = $history;

          function webPage($homeval, $downpayment, $intrstrate, $loanterm, $toDisplay, $fieldStyle, $history)
              {
                $page = <<<STARTPAGE

<html>
<head>
<title>Morgage Calculator</title>
<title>Regstration</title>
<style type="text/css">
h1
     {
      text-align: center;
     }
</style>
<style type="text/css">$fieldStyle</style>
</head>
<body>
<h1>Mortgage Calculator</h1>
<h3>$toDisplay</h3>

  <form method = "post">
        <div class="rw-box">

          <label class="left-cell" for="homeval"> Home Value: </label>
          <input id="homeval" class="right-cell" type="number" step="any" name="homeval" value="$homeval" placeholder="300000" size="10" tabindex="1">
            <span class="symbol">$</span>

        </div>

        <div class="rw-box">
          <label class="left-cell" for="downpayment"> Down payment: </label>
          <input id="downpayment" class="right-cell" type="number" step="any" name="downpayment" value="$downpayment" placeholder="10000" size="10" tabindex="2">
          <span class="symbol">$</span>
        </div>


        <div class="rw-box">
        	<label class="left-cell" for="intrstsrate"> Interest Rate: </label>
        	<input type="number" step="any" id="intrstsrate" class="right-cell" name="intrstrate" value="$intrstrate" placeholder="2.75" size="4" tabindex="3">
        	<span class="symbol">%</span>
        </div>

        <div class="rw-box">
        	<label class="left-cell" for="loanterm"> Loan Term: </label>
        	<input id="loanterm" class="right-cell" type="number" step="any" name="loanterm" value="$loanterm" placeholder="30" size="4" tabindex="4">
    	    <span class="symbol">years</span>
        </div>

        <div class="rw-box button">
          <input type="submit" tabindex="10" value="Calculate" class="styled-button" name="cal">
        </div>
    </form>

    </body>


STARTPAGE;

        if ($history != "")
            {
            $page = $page . "<h3>Estimated Monthly Payment:</h3>";
            $morts = explode('##', $history);
            foreach ($morts as $mort)
                {
                 $page = $page . " $mort <br>";
                }
            }
        $page = $page . "</body></html>";
    echo ($page);
        }

    ?>
