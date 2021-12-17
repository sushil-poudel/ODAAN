<!DOCTYPE html>
<html lang="en">
    <head>
        <title>

        </title>
        <!-- META STARTS -->
            <meta charset="UTF-8">
            <meta http-eqiv="X-UA-Compatible" content="IE-edge">
            <meta name="viewport" conent="width=device-width">
            <link rel="shortcut icon" type="image/x-icon" href="img/site_logo.png">
        
        
            <meta property="og:title" content=""/>
            <meta property="og:type"   content="website" />
            <meta property="og:url"    content="" />
            <meta property="og:site_name" content=""/>
            <meta property="og:image" content=""/>
            <meta property="og:image:alt" content="">
            <meta property="og:description" content="">
        <!-- META ENDS -->


        <!-- COMPONENTS STARTS -->
        <!-- COMPONENTS ENDS -->

        <!-- IMPORT GOOGLE FONTS STARTS -->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <!-- IMPORT GOOGLE FONTS ENDS -->

        <!-- SITE STYLE STARTS -->
            <link href="css/global.css" rel="stylesheet">
            <link href="css/thestyles.css" rel="stylesheet">
            <link href="css/responsive.css" rel="stylesheet">
        <!-- SITE STYLE ENDS -->

        <!-- IMPORT FONT AWESOME STARTS  -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <!-- IMPORT FONT AWESOME ENDS -->

        <!-- IMPORT BOOTSTRAP ICONS STARTS  -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <!-- IMPORT BOOTSTRAP ICONS ENDS -->

        <!-- IMPORT SLICK SLIDER CSS STARTS  -->

            <!-- Add the slick-theme.css if you want default styling -->
            <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
            <!-- Add the slick-theme.css if you want default styling -->
            <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>

        <!-- IMPORT SLICK SLIDER CSS ENDS -->

        <!-- UIkit CSS STARTS -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.9.3/dist/css/uikit.min.css" />
        <!-- UIKIT CSS ENDS -->
        
        
      
    </head>
    <body>
        <!------------------------------------- Wrapper Starts ------------------------------------->
    <div id="wrapper">

    <!--------------------------------- Header Wrapper Starts ---------------------------------->
    <header id="header-wrapper">                
        <div class="custom-container no-top-bottom-padding">
            <div class="navbar-container">
                <div class="logo-container">
                    <a href="index.php"> <img src="assets/img/logo/logo.png" alt="logo"></a>
                </div>
                <div class="nav-container">
                    <div class="nav-content">
                        <ul class="mainmenu-container">
                            <li class="submenu-container">
                                <a href="about.php">about odaan <span><i class="fa fa-angle-down"></i></span> </a>
                                <ul class="dropdown-menu-own">
                                    <li> <a href="about.php"> why choose us </a> </li>
                                    <li>  <a href="message-ceo.php">message from founder </a></li>
                                    <li><a href="contact.php"> contact us</a></li>
                                </ul>
                            </li>
                        
                            <li class="submenu-container">
                                <a href="room-type.php">type of rooms  <span><i class="fa fa-angle-down"></i></span> </a>
                                <ul class="dropdown-menu-own">
                                    <li> <a href="#">standard room </a> </li>
                                    <li> <a href="#">superior room</a> </li>
                                    <li> <a href="#">junior suite</a> </li>
                                </ul>
                            </li>
                            <li class="submenu-container">
                                <a href="menu.php">our menu</a>
                                
                            </li>
                            <li class="submenu-container"><a href="events.php">our events <span><i class="fa fa-angle-down"></i></span></a>
                                <ul class="dropdown-menu-own">
                                    <li>  <a href="#">view events</a> </li>
                                    <li> <a href="#"> buy a ticket</a> </li>
                                </ul>
                            </li>
                            <li class="submenu-container"><a href="gallery.php">gallery</a></li>
                            <li class="common-button-container submenu-container"><a href="#"><button><i class="fas fa-phone-square-alt"></i> +977 9861248976</button>  </a></li>
                        </ul> 
                    </div>
                </div> 
                <div class="openbtn"  onclick="openNav()">&#9776;</div>
            </div> 
        </div>               
    </header>

    
   
    <!---------------------------------- Header Wrapper Ends ----------------------------------->


       
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <div class="nav-section">
        <div class="navigation">
           
            <ul uk-accordion>
                
                <li>
                    <a class="uk-accordion-title" href="about.php">about odaan</a>
                    <div class="uk-accordion-content">
                        <ul class="sub-menu">
                            <li>
                                <a href="#">Why Choose Us</a>
                            </li>
                            <li>
                                <a href="#">message from founder</a>
                            </li>
                            <li>
                                <a href="#">contact us </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="room-type.php">types of rooms </a>
                    <div class="uk-accordion-content">
                        <ul class="sub-menu">
                            <li>
                                <a href="#">standard room</a>
                            </li>
                            <li>
                                <a href="#">superor room </a>
                            </li>
                            <li>
                                <a href="#">junior suite </a>
                            </li>
                        </ul>
                    </div>
                </li>
          
                <li>
                    <a class="uk-accordion-title" href="event.php">our events </a>
                    <div class="uk-accordion-content">
                        <ul class="sub-menu">
                            <li>
                                <a href="#">view events </a>
                            </li>
                            <li>
                                <a href="#">buy a ticket </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li> <a href="menu.php">our menu</a> </li>
                <li> <a href="gallery.php">gallery</a> </li>
            </ul>
        </div>
    </div>
</div>



    <!-------------------------------- Content Wrapper Starts ---------------------------------->
    <div id="content-wrapper">

