/*
 * The MIT License (MIT)
 * Copyright (c) 2015 Antonio Carlos Barbosa. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window */

define(function (require, exports, module) {
    'use strict';

    var snippets = {};
    var cdncss = '   <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">\n';

    var cdnjs = '  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>\n' +
        '    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>\n' +
        '    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>\n';

    // Bootstrap 4 - I. LAYOUT 


    snippets.bs4 = '<!doctype html>\n' +
        '\n' +
        '<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->\n' +
        '<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->\n' +
        '<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->\n' +
        '<!--[if gt IE 8]><!-->\n' +
        '<html class="no-js" lang="">\n' +
        '<!--<![endif]-->\n' +
        '\n' +
        '<head>\n' +
        '    <meta charset="utf-8">\n' +
        '    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n' +
        '    <title>[INSERT SITE TITLE HERE]</title>\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
        '    <meta name="description" content="[ENTER SITE DESCRIPTION HERE]">\n' +
        '    <meta name="author" content="[ENTER AUTHOR INFO HERE]">\n' +
        '\n' +
        '    <link rel="apple-touch-icon" href="[INSERT apple-tuch-icon.png]">\n' +
        '    <style>\n' +
        '        body {\n' +
        '            padding-top: 50px;\n' +
        '            padding-bottom: 20px;\n' +
        '        }\n' +
        '    </style>\n' +
        cdncss +
        '\n' +
        '    <! -- WE ASSUME YOU ARE USING A main.css FOR CSS CUSTOMIZATION -->\n' +
        '    <!-- link rel="stylesheet" href="./css/main.css"> -->\n' +
        '    <! -- DOWNLOAD LAST VERSION IN http://modernizr.com/ -->\n' +
        '    <!-- script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script> -->\n' +
        '</head>\n' +
        '\n' +
        '<body>\n' +
        '\n' +
        '    <!--[if IE]>\n' +
        '        <script src="https://cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>\n' +
        '        <script src="https://cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>\n' +
        '    <![endif]-->\n' +
        '\n' +
        '    <!-- Start coding here -->\n' +
        '\n' +
        '\n' +
        '    <!-- Coding End -->\n' +
        '\n' +
        cdnjs +
        '</body>\n' +
        '\n' +
        '</html>\n';

    snippets.bs4html = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="utf-8">\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
        cdncss +
        '\n' +
        '    <title>Minimum Bootstrap HTML Skeleton</title>\n<!--  -->\n<style>\n\n</style>\n\n' +
        '</head>\n' +
        '\n' +
        '<body>\n' +
        '\n' +
        cdnjs +
        '\n<script>\n\n</script>\n' +
        '</body>\n' +
        '</html>\n';

    snippets.bs4html5template = '<!DOCTYPE html>\n' +
        '<html lang="">\n' +
        '	<head>\n' +
        '		<meta charset="utf-8">\n' +
        '		<meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
        '		<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        '		<title>Title Page</title>\n' +
        '\n' +
        '		<!-- Bootstrap CSS -->\n' +
        cdncss +
        '\n' +
        '		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n' +
        '		<!-- WARNING: Respond.js doesn t work if you view the page via file:// -->\n' +
        '		<!--[if lt IE 9]>\n' +
        '			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>\n' +
        '			<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>\n' +
        '		<![endif]-->\n' +
        '	</head>\n' +
        '	<body>\n' +
        '		<h1 class="text-center">Hello World</h1>\n' +
        '\n' +
        cdnjs +
        '	</body>\n' +
        '</html>\n';

    // Container 
    snippets.bs4container = '<div class="container">\n</div>\n';
    snippets.bs4containerfluid = '<div class="container-fluid">\n</div>\n';

    // Clearfix

    snippets.bs4clearfix = '<div class="clearfix">\n\n' +
        '</div>\n';


    // Grid System

    snippets.bs4row = '<div class="row">\n\n</div>\n';
    snippets.bs4rowcol = '<div class="row">\n' +
        '	<div class="col-xs- col-sm- col-md- col-lg-">\n' +
        '		\n' +
        '	</div>\n' +
        '</div>\n';


    snippets.bs4col1 = '<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">\n\n</div>\n';

    snippets.bs4col2 = '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">\n\n</div>\n';

    snippets.bs4col3 = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">\n\n</div>\n';

    snippets.bs4col4 = '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">\n\n</div>\n';

    snippets.bs4col5 = '<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">\n\n</div>\n';

    snippets.bs4col6 = '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">\n\n</div>\n';

    snippets.bs4col7 = '<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">\n\n</div>\n';

    snippets.bs4col8 = '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">\n\n</div>\n';

    snippets.bs4col9 = '<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">\n\n<div>\n';

    snippets.bs4col10 = '<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">\n\n</div>\n';

    snippets.bs4col11 = '<div class="col-xs-11 col-sm-11 col-md-11 col-lg-11">\n\n</div>\n';

    snippets.bs4col12 = '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n\n</div>\n';



    // Media

    snippets.bs4media = '<div class="media">\n' +
        '	  <a class="media-left" href="#">\n' +
        '		 <img class="media-object" data-src="..." src="" alt="Generic placeholder image"/>\n' +
        '	</a>\n' +
        '	<div class="media-body">\n' +
        '		<h4 class="media-heading">Media heading</h4>\n' +
        '		<p>Text goes here...</p>\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4medianesting = '       <div class="media">\n' +
        '           <div class="media-left">\n' +
        '                 <a href="#" title="">\n' +
        '                   <img class="media-object" data-src="..." alt="Generic placeholder image"/>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="media-body">\n' +
        '                <h4 class="media-heading">Media heading</h4>\n' +
        '                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
        '                <div class="media">\n' +
        '                    <a class="media-left" href="#" title="">\n' +
        '                      <img class="media-object" data-src="..." src="#" alt="Generic placeholder image"/>\n' +
        '                   </a>\n' +
        '                    <div class="media-body">\n' +
        '                        <h4 class="media-heading">Nested media heading</h4> \n' +
        '                        <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
        '                    </div>\n' +
        '               </div>\n' +
        '            </div>\n' +
        '         </div>\n';



    snippets.bs4medialeft = '<div class="media">\n' +
        '  <div class="media-left">\n' +
        '    <a href="#" title="">\n' +
        '      <img class="media-object" data-src="..." alt="Generic placeholder image"/>\n' +
        '    </a>\n' +
        '  </div>\n' +
        '  <div class="media-body">\n' +
        '    <h4 class="media-heading">Middle aligned media</h4>\n' +
        '    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
        '    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n' +
        '  </div>\n' +
        ' </div>\n';

    snippets.bs4mediamiddle = '<div class="media">\n' +
        '  <div class="media-left media-middle">\n' +
        '    <a href="#" title="">\n' +
        '      <img class="media-object" data-src="..." alt="Generic placeholder image"/>\n' +
        '    </a>\n' +
        '  </div>\n' +
        '  <div class="media-body">\n' +
        '    <h4 class="media-heading">Middle aligned media</h4>\n' +
        '    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
        '    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n' +
        '  </div>\n' +
        ' </div>\n';

    snippets.bs4mediabottom = '<div class="media">\n' +
        '  <div class="media-left media-bottom">\n' +
        '    <a href="#" title="">\n' +
        '      <img class="media-object" data-src="..." alt="Generic placeholder image"/>\n' +
        '    </a>\n' +
        '  </div>\n' +
        '  <div class="media-body">\n' +
        '    <h4 class="media-heading">Middle aligned media</h4>\n' +
        '    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
        '    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n' +
        '  </div>\n' +
        ' </div>\n';

    snippets.bs4medialist = '<ul class="media-list">\n' +
        '  <li class="media">\n' +
        '    <div class="media-left">\n' +
        '      <a href="#">\n' +
        '        <img class="media-object" data-src="..." alt="Generic placeholder image"/>\n' +
        '      </a>\n' +
        '    </div>\n' +
        '    <div class="media-body">\n' +
        '       <h4 class="media-heading">Media heading</h4>\n' +
        '    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
        '    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n' +
        '        <div class="media">\n' +
        '        <a class="media-left" href="#">\n' +
        '          <img class="media-object" data-src="..." alt="Generic placeholder image"> \n' +
        '        </a>' +
        '        <div class="media-body">\n' +
        '          <h4 class="media-heading">Nested media heading</h4>\n' +
        '           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. </p><!-- Media Moi -->' +
        '          <div class="media">\n' +
        '            <div class="media-left">\n' +
        '              <a href="#">\n' +
        '                <img class="media-object" data-src="..." alt="Generic placeholder image"/>\n' +
        '              </a>\n' +
        '            </div>\n' +
        '            <div class="media-body">\n' +
        '              <h4 class="media-heading">Nested media heading</h4>\n' +
        '           <p>              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '      <!-- Nested media object -->\n' +
        '      <div class="media">\n' +
        '        <div class="media-left">\n' +
        '          <a href="#">\n' +
        '            <img class="media-object" data-src="..." alt="Generic placeholder image">\n' +
        '          </a>\n' +
        '        </div>\n' +
        '        <div class="media-body">\n' +
        '          <h4 class="media-heading">Nested media heading</h4>\n' +
        '       <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis </p>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </li>\n' +
        '  <li class="media">\n' +
        '      <div class="media-body">\n' +
        '      <h4 class="media-heading">Media heading</h4>\n' +
        '       <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.<p>\n' +
        '    </div>\n' +
        '    <div class="media-right">  \n' +
        '      <a href="#">\n' +
        '        <img class="media-object" data-src="..." alt="Generic placeholder image"/>\n' +
        '      </a>\n' +
        '    </div>\n' +
        '  </li>\n' +
        '</ul>\n';

    // Responsive DOW == GIẤU && UP == Hiển Thị 

    snippets.bs4xshidden = 'hidden-xs-down';
    snippets.bs4smhidden = 'hidden-sm-down';
    snippets.bs4mdhidden = 'hidden-md-down';
    snippets.bs4lghidden = 'hidden-lg-down';
    snippets.bs4xlhidden = 'hidden-xl-down';

    snippets.bs4xsup = 'hidden-xs-up';
    snippets.bs4smup = 'hidden-sm-up';
    snippets.bs4mdup = 'hidden-md-up';
    snippets.bs4lgup = 'hidden-lg-up';
    snippets.bs4xlup = 'hidden-xl-up';


    // II. Content
    // Typography

    // Typography

    snippets.h1 = '<h1 class="h1">h1. Element HTML H1</h1>\n';
    snippets.h2 = '<h2 class="h2">h2. Element HTML H2</h2>\n';
    snippets.h3 = '<h3 class="h3">h3. Element HTML H3</h3>\n';
    snippets.h4 = '<h4 class="h4">h4. Element HTML H4</h4>\n';
    snippets.h5 = '<h5 class="h5">h5. Element HTML H5</h5>\n';
    snippets.h6 = '<h6 class="h6">h6. Element HTML H6</h6>\n';


    snippets.display_1 = '<h1 class="display-1">Display 1</h1>\n';
    snippets.display_2 = '<h1 class="display-2>Display 2</h1>\n';
    snippets.display_3 = '<h1 class="display-3">Display 3</h1>\n';

    snippets.lead = '<p class="lead"> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>\n';


    snippets.p = '<p>You can use the mark tag to <mark>highlight</mark> text.</p>\n';
    snippets.p_del = '<p><del>This line of text is meant to be treated as deleted text.</del></p>\n';
    snippets.p_s = '<p><s>This line of text is meant to be treated as no longer accurate.</s></p>\n';
    snippets.p_ins = '<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\n';
    snippets.p_u = '<p><u>This line of text will render as underlined</u></p>\n';
    snippets.p_small = '<p><small>This line of text is meant to be treated as fine print.</small></p>\n';
    snippets.p_strong = '<p><strong>This line rendered as bold text.</strong></p>\n';
    snippets.p_em = '<p><em>This line rendered as italicized text.</em></p>\n';
    snippets.p_abbr = '<p><abbr title="attribute">attr</abbr></p>\n';
    snippets.blockquotes = '<blockquote class="blockquote">\n' +
        ' <p class="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
        '</blockquote>\n';


    // Code

    snippets.p_code = '<pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>\n';
    snippets.p_var = '<var>y</var> = <var>m</var><var>x</var> + <var>b</var>\n';

    snippets.p_input = 'To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>\n';
    snippets.p_output = '<p><samp>This text is meant to be treated as sample output from a computer program.</samp></p>\n';


    // Images

    snippets.bs4image = '<img src="#" class="img-responsive" alt="Image">\n';

    snippets.bs4thumbnailcontent = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">\n' +
        '	<div class="thumbnail">\n' +
        '		<img data-src="#" alt="">\n' +
        '		<div class="caption">\n' +
        '			<h3>Title</h3>\n' +
        '			<p>\n' +
        '				...\n' +
        '			</p>\n' +
        '			<p>\n' +
        '				<a href="#" class="btn btn-primary">Action</a>\n' +
        '				<a href="#" class="btn btn-secondary">Action</a>\n' +
        '			</p>\n' +
        '		</div>\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4thumbnail = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">\n' +
        '	<a href="#" class="thumbnail">\n' +
        '		<img data-src="#" alt="">\n' +
        '	</a>\n' +
        '</div>\n';

    snippets.bs4imagerounded = '<img src="[ENTER IMAGE HERE]" class="img-rounded" alt="Cinque Terre" width="304" height="236">\n';

    snippets.bs4imagecircle = '<img src="[ENTER IMAGE HERE]" class="img-circle" alt="Cinque Terre" width="304" height="236">\n';

    snippets.bs4imagethumbnail = '<img src="[ENTER IMAGE HERE]" class="img-thumbnail" alt="Cinque Terre" width="304" height="236">\n';

    snippets.bs4imageresponsive = '<img class="img-responsive" src="[ENTER IMAGE HERE]" alt="Chania">\n';

    // Tables





    // Figures

    snippets.bs4Figures = '    <figure class="figure">\n' +
        '        <img src="...png" class="figure-img img-fluid img-rounded" alt="A generic square -"/>\n' +
        '        <figcaption class="figure-caption">A caption for the above image.</figcaption>\n' +
        '    </figure>\n';

    // Alerts

    var alertbody = '\n <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span> </button>\n' +
        ' <strong>Warning!</strong> Better check yourself, youre <a href="#" class="alert-link">not looking too good</a>\n' +
        '</div>\n\n';

    snippets.bs4alertdanger = '<div class="alert alert-danger alert-dismissible fade in" role="alert">\n' + alertbody;

    snippets.bs4alertinfo = '<div class="alert alert-info alert-dismissible fade in" role="alert">\n' + alertbody;

    snippets.bs4alertsuccess = '<div class="alert alert-success alert-dismissible fade in" role="alert">\n' + alertbody;

    snippets.bs4alertwarning = '<div class="alert alert-warning alert-dismissible fade in" role="alert">\n' + alertbody;

    snippets.bs4alert = '<div class="alert">\n' +
        '	<button type="button" class="close" data-dismiss="alert" aria-hidden="true" role="alert">&times;\n' +
        '</button>\n' +
        '<strong>INSERT TITLE HERE</strong> INSERT BODY HERE\n' +
        '</div>\n';
    // Badge

    snippets.bs4badge = '<span class="badge">INSERT BADGE HERE</span>';

    // Breadcrumbs

    snippets.bs4breadcrumbs = '<ol class="breadcrumb" style="margin-bottom: 5px;">\n' +
        '<li>\n' +
        '   <a href="#">[Home]</a>\n' +
        '</li>\n' +
        '<li>\n' +
        '   <a href="#">[About]</a>\n' +
        '</li>}\n' +
        '<li class="active">[Contact]</li>\n' +
        '</ol>\n';


    // progress 

    snippets.bs4progress = '<progress class="progress progress-striped" value="10" max="100">10%</progress>\n' +
        '<progress class="progress progress-striped progress-success" value="25" max="100">25%</progress>\n' +
        '<progress class="progress progress-striped progress-info" value="50" max="100">50%</progress>\n' +
        '<progress class="progress progress-striped progress-warning" value="75" max="100">75%</progress>\n' +
        '<progress class="progress progress-striped progress-danger" value="100" max="100">100%</progress>\n';



    // Buttons

    snippets.bs4buttondanger = '<button type="button" class="btn btn-danger">[button]</button>\n';
    snippets.bs4buttondisabled = '<button type="button" class="btn btn-secondary" disabled>[button]</button>\n';
    snippets.bs4buttoninfo = '<button type="button" class="btn btn-info">[button]</button>\n';
    snippets.bs4buttonprimary = '<button type="button" class="btn btn-primary">[button]</button>\n';
    snippets.bs4buttonsuccess = '<button type="button" class="btn btn-success">[button]</button>\n';
    snippets.bs4buttonwarning = '<button type="button" class="btn btn-warning">[button]</button>\n';
    snippets.bs4button = '<button type="button" class="btn btn-secondary">[button]</button>\n';

    // button size lg 

    snippets.bs4buttonlgdanger = '<button type="button" class="btn btn-lg btn-danger">[button]</button>\n';
    snippets.bs4buttonlgdisabled = '<button type="button" class="btn btn-lg btn-secondary" disabled>[button]</button>\n';
    snippets.bs4buttonlginfo = '<button type="button" class="btn btn-lg btn-info">[button]</button>\n';
    snippets.bs4buttonlgprimary = '<button type="button" class="btn btn-lg btn-primary">[button]</button>\n';
    snippets.bs4buttonlgsuccess = '<button type="button" class="btn btn-lg btn-success">[button]</button>\n';
    snippets.bs4buttonlgwarning = '<button type="button" class="btn btn-lg btn-warning">[button]</button>\n';
    snippets.bs4buttonlg = '<button type="button" class="btn btn-lg btn-secondary">[button]</button>\n';


    // button size sm 


    snippets.bs4buttonsmdanger = '<button type="button" class="btn btn-sm btn-danger">[button]</button>\n';
    snippets.bs4buttonsmdisabled = '<button type="button" class="btn btn-sm btn-secondary" disabled>[button]</button>\n';
    snippets.bs4buttonsminfo = '<button type="button" class="btn btn-sm btn-info">[button]</button>\n';
    snippets.bs4buttonsmprimary = '<button type="button" class="btn btn-sm btn-primary">[button]</button>\n';
    snippets.bs4buttonsmsuccess = '<button type="button" class="btn btn-sm btn-success">[button]</button>\n';
    snippets.bs4buttonsmwarning = '<button type="button" class="btn btn-sm btn-warning">[button]</button>\n';
    snippets.bs4buttonsm = '<button type="button" class="btn btn-sm btn-secondary">[button]</button>\n';

    // Buttons Outline

    snippets.bs4buttonoutlineprimary = '<button type="button" class="btn btn-primary-outline">Primary</button>\n';

    snippets.bs4buttonoutlinesecondary = '<button type="button" class="btn btn-secondary-outline">secondary</button>\n';

    snippets.bs4buttonoutlinesuccess = '<button type="button" class="btn btn-success-outline">success</button>\n';

    snippets.bs4buttonoutlineinfo = '<button type="button" class="btn btn-info-outline">success</button>\n';

    snippets.bs4buttonoutlinewarning = '<button type="button" class="btn btn-warning-outline">warning</button>\n';

    snippets.bs4buttonoutlinedanger = '<button type="button" class="btn btn-danger-outline">danger</button>\n';


    // buttons check box - button radio
    snippets.bs4buttoncheckbox = '<div class="btn-group" data-toggle="buttons">\n' +
        '<label class="btn btn-primary active">\n' +
        '<input type="checkbox" name="options" id="option1" autocomplete="off" checked> Radio 1\n' +
        '</label>\n' +
        '<label class="btn btn-primary">\n' +
        '<input type="checkbox" name="options" id="option2" autocomplete="off"> Radio 2\n' +
        '</label>\n' +
        '<label class="btn btn-primary">\n' +
        '<input type="checkbox" name="options" id="option3" autocomplete="off"> Radio 3\n' +
        '</label>\n' +
        '</div>\n';

    snippets.bs4buttonradio = '<div class="btn-group" data-toggle="buttons">\n' +
        '<label class="btn btn-primary active">\n' +
        '<input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1\n' +
        '</label>\n' +
        '<label class="btn btn-primary">\n' +
        '<input type="radio" name="options" id="option2" autocomplete="off"> Radio 2\n' +
        '</label>\n' +
        '<label class="btn btn-primary">\n' +
        '<input type="radio" name="options" id="option3" autocomplete="off"> Radio 3\n' +
        '</label>\n' +
        '</div>\n';




    // button link 


    snippets.bs4blocklinkbuttondanger = '<a class="btn btn-lg btn-block btn-danger" href="#" role="button">button</a>\n';

    snippets.bs4blocklinkbuttondisabled = '<a class="btn btn-lg btn-block btn-secondary" href="#" disabled role="button">button</a>\n';

    snippets.bs4blocklinkbuttoninfo = '<a class="btn btn-lg btn-block btn-info" href="#" role="button">button</a>\n';

    snippets.bs4blocklinkbuttonprimary = '<a class="btn btn-lg btn-block btn-primary" href="#" role="button">button</a>\n';

    snippets.bs4blocklinkbuttonsuccess = '<a class="btn btn-lg btn-block btn-success" href="#" role="button">button</a>\n';

    snippets.bs4blocklinkbuttonwarning = '<a class="btn btn-lg btn-block btn-warning" href="#" role="button">button</a>\n';

    snippets.bs4blocklinkbutton = '<a class="btn btn-lg btn-block btn-secondary" href="#" role="button">button</a>\n';


    snippets.bs4linkbuttongroupvertical = '<div class="btn-group-vertical">\n' +
        '	<a class="btn btn-secondary" href="#" role="button">Top</a>\n' +
        '	<a class="btn btn-secondary" href="#" role="button">Middle</a>\n' +
        '	<a class="btn btn-secondary" href="#" role="button">Bottom</a>\n' +
        '</div>\n';

    snippets.bs4linkbuttongroup = '<div class="btn-group" role="group" aria-label="Basic example">\n' +
        '	 <a class="btn btn-secondary" href="#" role="button">Left</a>\n' +
        '	<a class="btn btn-secondary" href="#" role="button">Middle</a>\n' +
        '	<a class="btn btn-secondary" href="#" role="button">Right</a>\n' +
        '</div>\n';

    snippets.bs4linkbuttoninfo = '<a class="btn btn-info" href="#" role="button">button</a>\n';

    snippets.bs4linkbuttonprimary = '<a class="btn btn-primary" href="#" role="button">button</a>\n';

    snippets.bs4linkbuttonsuccess = '<a class="btn btn-success" href="#" role="button">button</a>\n';

    snippets.bs4linkbuttonwarning = '<a class="btn btn-warning" href="#" role="button">button</a>\n';

    snippets.bs4linkbutton = '<a class="btn btn-secondary" href="#" role="button">button</a>\n';


    // button group


    snippets.bs4buttongroup = '<div class="btn-group" role="group" aria-label="Basic example">\n' +
        '  <button type="button" class="btn btn-secondary">Left</button>\n' +
        '  <button type="button" class="btn btn-secondary">Middle</button>\n' +
        '  <button type="button" class="btn btn-secondary">Right</button>\n' +
        '</div>\n';


    snippets.bs4buttontoolbar = '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">\n' +
        '	  <div class="btn-group" role="group" aria-label="First group">\n' +
        '     <button type="button" class="btn btn-secondary">1</button>\n' +
        '     <button type="button" class="btn btn-secondary">2</button>\n' +
        '     <button type="button" class="btn btn-secondary">3</button>\n' +
        '   </div>\n' +
        '	<div class="btn-group" role="group" aria-label="Second group">\n' +
        '      <button type="button" class="btn btn-secondary">1</button>\n' +
        '      <button type="button" class="btn btn-secondary">2</button>\n' +
        '      <button type="button" class="btn btn-secondary">3</button>\n' +
        '   </div>\n' +
        '	<div class="btn-group" role="group" aria-label="Third group">\n' +
        '       <button type="button" class="btn btn-secondary">1</button>\n' +
        '       <button type="button" class="btn btn-secondary">2</button>\n' +
        '       <button type="button" class="btn btn-secondary">3</button>\n' +
        '   </div>\n' +
        '</div>';


    snippets.bs4buttongroupnesting = '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">\n' +
        '     <button type="button" class="btn btn-secondary">1</button>\n' +
        '     <button type="button" class="btn btn-secondary">2</button>\n' +
        '  <div class="btn-group" role="group">\n' +
        '      <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown</button>\n' +
        '      <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">\n' +
        '        <a class="dropdown-item" href="#">Dropdown link</a>\n' +
        '        <a class="dropdown-item" href="#">Dropdown link</a>\n' +
        '      </div>\n' +
        '  </div>\n' +
        '</div>';

    snippets.bs4buttongroupvertical = '<div class="btn-group-vertical">\n' +
        '	<button type="button" class="btn btn-secondary">[Top]</button>\n' +
        '	<button type="button" class="btn btn-secondary">[Middle]</button>\n' +
        '   <button type="button" class="btn btn-secondary">[Bottom]</button>\n' +
        '</div>\n';



    // button dropdowns

    snippets.bs4buttongdropdowns =
        '<div class="btn-group">\n' +
        '  <button type="button" class="btn btn-secondary ">Action</button>\n' +
        '  <button type="button" class="btn btn-secondary  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '    <span class="sr-only">Toggle Dropdown</span>\n' +
        '  </button>\n' +
        '  <div class="dropdown-menu">\n' +
        '    <a class="dropdown-item" href="#">Action</a>\n' +
        '    <a class="dropdown-item" href="#">Another action</a>\n' +
        '    <a class="dropdown-item" href="#">Something else here</a>\n' +
        '    <div class="dropdown-divider"></div>\n' +
        '    <a class="dropdown-item" href="#">Separated link</a>\n' +
        '  </div>\n' +
        '</div>\n';



    snippets.bs4buttongdropdownsprimary = '<div class="btn-group">\n' +
        '  <button type="button" class="btn btn-primary ">Action</button>\n' +
        '  <button type="button" class="btn btn-primary  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '    <span class="sr-only">Toggle Dropdown</span>\n' +
        '  </button>\n' +
        '  <div class="dropdown-menu">\n' +
        '    <a class="dropdown-item" href="#">Action</a>\n' +
        '    <a class="dropdown-item" href="#">Another action</a>\n' +
        '    <a class="dropdown-item" href="#">Something else here</a>\n' +
        '    <div class="dropdown-divider"></div>\n' +
        '    <a class="dropdown-item" href="#">Separated link</a>\n' +
        '  </div>\n' +
        '</div>\n';

    snippets.bs4buttongdropdownssuccess = '<div class="btn-group">\n' +
        '  <button type="button" class="btn btn-success ">Action</button>\n' +
        '  <button type="button" class="btn btn-success  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '    <span class="sr-only">Toggle Dropdown</span>\n' +
        '  </button>\n' +
        '  <div class="dropdown-menu">\n' +
        '    <a class="dropdown-item" href="#">Action</a>\n' +
        '    <a class="dropdown-item" href="#">Another action</a>\n' +
        '    <a class="dropdown-item" href="#">Something else here</a>\n' +
        '    <div class="dropdown-divider"></div>\n' +
        '    <a class="dropdown-item" href="#">Separated link</a>\n' +
        '  </div>\n' +
        '</div>\n';
    snippets.bs4buttongdropdownsinfo = '<div class="btn-group">\n' +
        '  <button type="button" class="btn btn-info ">Action</button>\n' +
        '  <button type="button" class="btn btn-info  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '    <span class="sr-only">Toggle Dropdown</span>\n' +
        '  </button>\n' +
        '  <div class="dropdown-menu">\n' +
        '    <a class="dropdown-item" href="#">Action</a>\n' +
        '    <a class="dropdown-item" href="#">Another action</a>\n' +
        '    <a class="dropdown-item" href="#">Something else here</a>\n' +
        '    <div class="dropdown-divider"></div>\n' +
        '    <a class="dropdown-item" href="#">Separated link</a>\n' +
        '  </div>\n' +
        '</div>\n';
    snippets.bs4buttongdropdownswarning = '<div class="btn-group">\n' +
        '  <button type="button" class="btn btn-warning ">Action</button>\n' +
        '  <button type="button" class="btn btn-warning  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '    <span class="sr-only">Toggle Dropdown</span>\n' +
        '  </button>\n' +
        '  <div class="dropdown-menu">\n' +
        '    <a class="dropdown-item" href="#">Action</a>\n' +
        '    <a class="dropdown-item" href="#">Another action</a>\n' +
        '    <a class="dropdown-item" href="#">Something else here</a>\n' +
        '    <div class="dropdown-divider"></div>\n' +
        '    <a class="dropdown-item" href="#">Separated link</a>\n' +
        '  </div>\n' +
        '</div>\n';
    snippets.bs4buttongdropdownsdanger = '<div class="btn-group">\n' +
        '  <button type="button" class="btn btn-danger ">Action</button>\n' +
        '  <button type="button" class="btn btn-danger  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '    <span class="sr-only">Toggle Dropdown</span>\n' +
        '  </button>\n' +
        '  <div class="dropdown-menu">\n' +
        '    <a class="dropdown-item" href="#">Action</a>\n' +
        '    <a class="dropdown-item" href="#">Another action</a>\n' +
        '    <a class="dropdown-item" href="#">Something else here</a>\n' +
        '    <div class="dropdown-divider"></div>\n' +
        '    <a class="dropdown-item" href="#">Separated link</a>\n' +
        '  </div>\n' +
        '</div>\n';

    snippets.bs4buttongdropdownsdropup = '<div class="btn-group dropup">\n' +
        '  <button type="button" class="btn btn-danger ">Action</button>\n' +
        '  <button type="button" class="btn btn-danger  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '    <span class="sr-only">Toggle Dropdown</span>\n' +
        '  </button>\n' +
        '  <div class="dropdown-menu">\n' +
        '    <a class="dropdown-item" href="#">Action</a>\n' +
        '    <a class="dropdown-item" href="#">Another action</a>\n' +
        '    <a class="dropdown-item" href="#">Something else here</a>\n' +
        '    <div class="dropdown-divider"></div>\n' +
        '    <a class="dropdown-item" href="#">Separated link</a>\n' +
        '  </div>\n' +
        '</div>\n';






    // Jumbotron

    snippets.bs4jumbotron = '    <div class="jumbotron">\n' +
        '        <h1 class="display-3">Hello, world!</h1>\n' +
        '        <p class="lead">This is a simple hero unit, a simple </p>\n' +
        '        <hr class="m-y-2">\n' +
        '        <p>It uses utility classes for typography and spacing to .</p>\n' +
        '        <p class="lead">\n' +
        '            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\n' +
        '        </p>\n' +
        '    </div>\n';





    // Labels

    snippets.bs4labeldanger = '<span class="label label-danger">[Label]</span>\n';
    snippets.bs4labeldefault = '<span class="label label-default">[Label]</span>\n';
    snippets.bs4labelinfo = '<span class="label label-info">[Label]</span>\n';
    snippets.bs4labelsuccess = '<span class="label label-success">[Label]</span>\n';
    snippets.bs4labelwarning = '<span class="label label-warning">[Label]</span>\n';
    snippets.bs4label = '<span class="label label-[ENTER NAME HERE]">[Label]</span>\n';
    snippets.bs4labelprimary = '<span class="label label-primary">[Label]</span>\n';

    // Labels pill 

    snippets.bs4labelpilldefault = '<span class="label label-pill label-default">Default</span>\n';
    snippets.bs4labelpillprimary = '<span class="label label-pill label-primary">Primary</span>\n';
    snippets.bs4labelpillsuccess = '<span class="label label-pill label-success">Success</span>\n';
    snippets.bs4labelpillinfo = '<span class="label label-pill label-info">Info</span>\n';
    snippets.bs4labelpillwarning = '<span class="label label-pill label-warning">Warning</span>\n';
    snippets.bs4labelpilldanger = '<span class="label label-pill label-danger">Danger</span>\n';



    // Work with columns

    snippets.bs4col3equal = ' <div class="row">\n' +
        '  <div class="col-sm-4">.col-sm-4</div>\n' +
        '  <div class="col-sm-4">.col-sm-4</div>\n' +
        '  <div class="col-sm-4">.col-sm-4</div>\n' +
        '</div>\n';

    snippets.bs4col3unequal = ' <div class="row">\n' +
        '  <div class="col-sm-3">.col-md-3</div>\n' +
        '  <div class="col-sm-6">.col-md-6</div>\n' +
        '  <div class="col-sm-3">.col-md-3</div>\n' +
        '</div>\n';

    snippets.bs4col2equal = '<div class="row">\n' +
        '  <div class="col-sm-4">.col-sm-4</div>\n' +
        '  <div class="col-sm-8">.col-sm-8</div>\n' +
        '</div>\n';

    snippets.bs4col2nested = '<div class="row">\n' +
        '  <div class="col-sm-8">' +
        '    .col-sm-8' +
        '    <div class="row">' +
        '      <div class="col-sm-6">.col-sm-6</div>' +
        '      <div class="col-sm-6">.col-sm-6</div>' +
        '    </div>' +
        '  </div>' +
        '  <div class="col-sm-4">.col-sm-4</div>' +
        '</div>\n';

    snippets.bs4colmobdesk = '<div class="row">\n' +
        '  <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>\n' +
        '  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n' +
        '</div>\n' +
        '<div class="row">\n' +
        '  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n' +
        '  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n' +
        '  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n' +
        '</div>\n' +
        '<div class="row">\n' +
        '  <div class="col-xs-6">.col-xs-6</div>\n' +
        '  <div class="col-xs-6">.col-xs-6</div>\n' +
        '</div>\n';

    snippets.bs4colmobtabdesk = ' <div class="row">\n' +
        '  <div class="col-xs-12 col-sm-6 col-lg-8">.col-xs-12 .col-sm-6 .col-lg-8</div>\n' +
        '  <div class="col-xs-6 col-lg-4">.col-xs-6 .col-lg-4</div>\n' +
        '</div>\n' +
        '<div class="row">\n' +
        '  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n' +
        '  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n' +
        '  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n' +
        '</div>\n';

    snippets.bs4clearfloats = ' <div class="row">\n' +
        '  <div class="col-xs-6 col-sm-3">\n' +
        '    Column 1\n' +
        '    <br>\n' +
        '    Resize the browser window to see the effect.\n' +
        '  </div>\n' +
        '  <div class="col-xs-6 col-sm-3">Column 2</div>\n' +
        '  <!-- Add clearfix for only the required viewport -->\n' +
        '  <div class="clearfix visible-xs"></div>\n' +
        '  <div class="col-xs-6 col-sm-3">Column 3</div>\n' +
        '  <div class="col-xs-6 col-sm-3">Column 4</div>\n' +
        '</div>\n';

    snippets.bs4offsettingcol = ' <div class="row">\n' +
        '  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>\n' +
        '  <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0">\n' +
        '  .col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>\n' +
        '</div>\n';

    snippets.bs4pushandpullcol = ' <div class="row">\n' +
        '  <div class="col-sm-4 col-sm-push-8">.col-sm-4 .col-sm-push-8</div>\n' +
        '  <div class="col-sm-8 col-sm-pull-4">.col-sm-8 .col-sm-pull-4</div>\n' +
        '</div>\n';


    snippets.bs4thumbnailgallerysample = '<!--\n' +
        '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '  <title>Bootstrap Image Gallery Sample</title>\n' +
        '  <meta charset="utf-8">\n' +
        '  <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        cdncss + cdnjs +
        '</head>\n' +
        '<body>\n' +
        '\n' +
        '<div class="container">\n' +
        '  <h2>Image Gallery using Thumbnail Class</h2>\n' +
        '\n' +
        '  <div class="row">\n' +
        '    <div class="col-md-4">\n' +
        '      <a href="[ENTER IMAGE HERE]" class="thumbnail">\n' +
        '        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>    \n' +
        '        <img src="[ENTER IMAGE HERE]" alt="" style="width:150px;height:150px">\n' +
        '      </a>\n' +
        '    </div>\n' +
        '    <div class="col-md-4">\n' +
        '      <a href="[ENTER IMAGE HERE]" class="thumbnail">\n' +
        '        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>\n' +
        '        <img src="[ENTER IMAGE HERE]" alt="" style="width:150px;height:150px">\n' +
        '      </a>\n' +
        '    </div>\n' +
        '    <div class="col-md-4">\n' +
        '      <a href="[ENTER IMAGE HERE]" class="thumbnail">\n' +
        '        <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>      \n' +
        '        <img src="[ENTER IMAGE HERE]" alt="" style="width:150px;height:150px">\n' +
        '      </a>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>\n' +
        '</body>\n' +
        '</html>\n' +
        '-->\n';

    snippets.bs4responsiveembed16by9 = '  <div class="embed-responsive embed-responsive-16by9">\n' +
        '    <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/[YOUTUBE VIDEO ID]"></iframe>\n' +
        '  </div>\n';

    snippets.bs4responsiveembed4by3 = '  <div class="embed-responsive embed-responsive-16by9">\n' +
        '    <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/[YOUTUBE VIDEO ID]"></iframe>\n' +
        '  </div>\n';



    // Forms


    snippets.bs4formbase = '       <form action="page.php" method="POST" role="form" enctype="multipart/form-data">\n' +
        '            <fieldset class="form-group">\n' +
        '                 <label for="exampleInputEmail1">Email address</label>\n' +
        '                 <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">\n' +
        '                 <small class="text-muted">Well never share your email with anyone</small>\n' +
        '             </fieldset>\n' +
        '             <fieldset class="form-group">\n' +
        '                 <label for="exampleInputPassword1">Password</label>\n' +
        '                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n' +
        '             </fieldset>\n' +
        '             <fieldset class="form-group">\n' +
        '                 <label for="exampleSelect1">Example select</label>\n' +
        '                 <select class="form-control" id="exampleSelect1">\n' +
        '                     <option>1</option>\n' +
        '                     <option>2</option>\n' +
        '                     <option>3</option>\n' +
        '                     <option>4</option>\n' +
        '                     <option>5</option>\n' +
        '                 </select>\n' +
        '             </fieldset>\n' +
        '             <fieldset class="form-group">\n' +
        '                 <label for="exampleSelect2">Example multiple select</label>\n' +
        '                 <select multiple class="form-control" id="exampleSelect2">\n' +
        '                     <option>1</option>\n' +
        '                     <option>2</option>\n' +
        '                     <option>3</option>\n' +
        '                     <option>4</option>\n' +
        '                     <option>5</option>\n' +
        '                 </select>\n' +
        '             </fieldset>\n' +
        '             <fieldset class="form-group">\n' +
        '                 <label for="exampleTextarea">Example textarea</label>\n' +
        '                 <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>\n' +
        '             </fieldset>\n' +
        '             <fieldset class="form-group">\n' +
        '                 <label for="exampleInputFile">File input</label>\n' +
        '                 <input type="file" class="form-control-file" id="exampleInputFile">\n' +
        '                 <small class="text-muted">This is some placeholder block-level help text for the above input.</small>\n' +
        '             </fieldset>\n' +
        '             <div class="radio">\n' +
        '                 <label>\n' +
        '                     <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked> Opt\n' +
        '                 </label>\n' +
        '             </div>\n' +
        '             <div class="radio">\n' +
        '                 <label>\n' +
        '                     <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"> Option two can be s\n' +
        '                 </label>\n' +
        '             </div>\n' +
        '             <div class="radio disabled">\n' +
        '                 <label>\n' +
        '                     <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled> Option three is disabled\n' +
        '                 </label>\n' +
        '             </div>\n' +
        '             <div class="checkbox">\n' +
        '                 <label>\n' +
        '                     <input type="checkbox"> Check me out\n' +
        '                 </label>\n' +
        '             </div>\n' +
        '             <button type="submit" class="btn btn-primary">Submit</button>\n' +
        '         </form>\n';


    snippets.bs4forminline = '    <form class="form-inline" action="page.php" method="POST" enctype="multipart/form-data" role="form">\n' +
        '        <div class="form-group">\n' +
        '            <label for="exampleInputName2">Name</label>\n' +
        '            <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">\n' +
        '        </div>\n' +
        '        <div class="form-group">\n' +
        '            <label for="exampleInputEmail2">Email</label>\n' +
        '            <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">\n' +
        '       </div>\n' +
        '        <button type="submit" class="btn btn-primary">Send invitation</button>\n' +
        '    </form>\n';



    snippets.bs4forminlinehidden = '    <form class="form-inline" action="page.php" method="POST" enctype="multipart/form-data" role="form">\n' +
        '        <div class="form-group">\n' +
        '            <label class="sr-only" for="exampleInputEmail3">Email address</label>\n' +
        '            <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Enter email">\n' +
        '        </div>\n' +
        '        <div class="form-group">\n' +
        '            <label class="sr-only" for="exampleInputPassword3">Password</label>\n' +
        '            <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password">\n' +
        '        </div>\n' +
        '        <div class="checkbox">\n' +
        '            <label>\n' +
        '                <input type="checkbox"> Remember me\n' +
        '            </label>\n' +
        '        </div>\n' +
        '        <button type="submit" class="btn btn-primary">Sign in</button>\n' +
        '    </form>\n';

    snippets.bs4formgroup = '    <form class="form" action="page.php" method="POST" enctype="multipart/form-data" role="form">\n' +
        '           <div class="form-group">\n' +
        '                <label for="formGroupExampleInput">Group 1</label>\n' +
        '                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">\n' +
        '            </div>\n' +
        '            <div class="form-group">\n' +
        '               <label for="formGroupExampleInput1">Another label</label>\n' +
        '               <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">\n' +
        '          </div>\n' +
        '          <div class="form-group">\n' +
        '                <label for="formGroupExampleInput2">Group 2</label>\n' +
        '                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Example input">\n' +
        '            </div>\n' +
        '            <div class="form-group">\n' +
        '               <label for="formGroupExampleInput2">Another label</label>\n' +
        '               <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">\n' +
        '          </div>\n' +
        '       </form>\n';


    snippets.bs4formgrid = '<form class="form" action="page.php" method="POST" enctype="multipart/form-data" role="form">\n' +
        '            <div class="form-group row">\n' +
        '                <label for="inputEmail3" class="col-sm-2 form-control-label">Email</label>\n' +
        '                <div class="col-sm-10">\n' +
        '                   <input type="email" class="form-control" id="inputEmail3" placeholder="Email">\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="form-group row">\n' +
        '                <label for="inputPassword3" class="col-sm-2 form-control-label">Password</label>\n' +
        '                <div class="col-sm-10">\n' +
        '                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password">\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="form-group row">\n' +
        '                <label class="col-sm-2">Radios</label>\n' +
        '                <div class="col-sm-10">\n' +
        '                    <div class="radio">\n' +
        '                        <label>\n' +
        '                            <input type="radio" name="gridRadios" id="gridRadios1" value="option1" checked> Option one is this and that&mdash;be sure to include why it great\n' +
        '                        </label>\n' +
        '                    </div>\n' +
        '                    <div class="radio">\n' +
        '                        <label>\n' +
        '                            <input type="radio" name="gridRadios" id="gridRadios2" value="option2"> Option two can be something else and selecting it will deselect option one\n' +
        '                        </label>\n' +
        '                    </div>\n' +
        '                    <div class="radio disabled">\n' +
        '                        <label>\n' +
        '                            <input type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled> Option three is disabled\n' +
        '                        </label>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="form-group row">\n' +
        '                <label class="col-sm-2">Checkbox</label>\n' +
        '                <div class="col-sm-10">\n' +
        '                    <div class="checkbox">\n' +
        '                        <label>\n' +
        '                            <input type="checkbox"> Check me out\n' +
        '                        </label>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="form-group row">\n' +
        '                <div class="col-sm-offset-2 col-sm-10">\n' +
        '                    <button type="submit" class="btn btn-secondary">Sign in</button>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </form>\n';




    snippets.bs4form = '<form class="form" action="page.php" method="POST" enctype="multipart/form-data" role="form">\n' +
        '</form>\n';



    // Form Input


    snippets.bs4inputcheckbox = '    <div class="checkbox">\n' +
        '                    <label>\n' +
        '                        <input type="checkbox" value=""> Option one is this and that&mdash;be sure to include why itgreat\n' +
        '                   </label>\n' +
        '                </div>\n' +
        '               <div class="checkbox disabled">\n' +
        '                   <label>\n' +
        '                        <input type="checkbox" value="" disabled> Option two is disabled\n' +
        '                    </label>\n' +
        '                </div>\n' +
        ' </div>\n';

    snippets.bs4inputradio = '                <div class="radio">\n' +
        '                    <label>\n' +
        '                        <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked> Option one is this an\n' +
        '                    </label>\n' +
        '                </div>\n' +
        '                <div class="radio">\n' +
        '                    <label>\n' +
        '                        <input type="radio" name="exampleRadios" id="exampleRadios2" value="option2"> Option two can be something e\n' +
        '                    </label>\n' +
        '                </div>\n';

    snippets.bs4inputcheckboxinline =
        '    <div class="container">\n' +
        '        <label class="checkbox-inline">\n' +
        '            <input type="checkbox" id="inlineCheckbox1" value="option1"> 1\n' +
        '        </label>\n' +
        '        <label class="checkbox-inline">\n' +
        '            <input type="checkbox" id="inlineCheckbox2" value="option2"> 2\n' +
        '        </label>\n' +
        '        <label class="checkbox-inline">\n' +
        '            <input type="checkbox" id="inlineCheckbox3" value="option3"> 3\n' +
        '        </label>\n';

    snippets.bs4inputradioinline =
        '    <div class="container">\n' +
        '        <label class="checkbox-inline">\n' +
        '            <input type="radio" id="inlineCheckbox1" value="option1"> 1\n' +
        '        </label>\n' +
        '        <label class="checkbox-inline">\n' +
        '            <input type="radio" id="inlineCheckbox2" value="option2"> 2\n' +
        '        </label>\n' +
        '        <label class="checkbox-inline">\n' +
        '            <input type="radio" id="inlineCheckbox3" value="option3"> 3\n' +
        '        </label>\n';



    snippets.bs4inputtext = '<input type="text" name="" id="input" class="form-control" value="" required="required" pattern="" title="">\n';


    snippets.bs4inputsm = '<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">\n';
    snippets.bs4inputlabel = '<label for="input-id" class="col-sm-2">[label]</label>\n';

    snippets.bs4inputcolor = '<input type="color" name="color" id="color" style="width: 28px; height:28px;"  value=""/>\n';

    snippets.bs4inputdate = '<input type="date" name="date" id="date" class="form-control form-control-sm" value="" required="required" title="date">\n';
    snippets.bs4inputmonth = '<input type="month" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputtime = '<input type="time" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputweek = '<input type="week" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputemail = '<input type="email" name="email" id="email" class="form-control form-control-sm" value="" required="required" title="Email">\n';

    snippets.bs4inputhidden = '<input type="hidden" name="hidden" id="hidden" class="form-control" value="">\n';



    snippets.bs4inputnumber = '<input type="number" name="" id="input" class="form-control" value="" min="[MIN]" max="[MAX]" step="" required="required" title="">\n';

    snippets.bs4inputpassword = '<input type="password" name="password" id="password" class="form-control" required="required" title="password"/>\n';

    snippets.bs4inputradio = '<div class="radio">\n' +
        '	<label>\n' +
        '		<input type="radio" name="" id="input" value="" checked="checked">\n' +
        '		Radio Box\n' +
        '	</label>\n' +
        '</div>\n';


    snippets.bs4inputrange = '<input type="range" name="" id="input" class="form-control" value="" min="{5"} max="" step="" required="required" title="">\n';



    snippets.bs4inputreset = '<input type="reset" value="Reset" class="btn btn-secondary">\n';


    snippets.bs4inputsearch = '<input type="search" name="" id="input" class="form-control" value="" required="required" title="">\n';



    snippets.bs4inputselect = '<select name="" id="input" class="form-control">\n' +
        '	    <option value="">-- Select One --</option>\n' +
        '</select>\n';


    snippets.bs4inputsubmit = '<button type="submit" class="btn btn-primary">Submit</button>\n';


    snippets.bs4inputtel = '<input type="tel" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputurl = '<input type="url" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputtextarea = '<textarea name="" id="input" class="form-control" rows="3" required="required"></textarea>\n';


    // Input validation 

    snippets.bs4inputsuccess = '<div class="form-group has-success">\n' +
        '    <label class="form-control-label" for="inputSuccess1">Input with success</label>\n' +
        '    <input type="text" class="form-control form-control-success" id="inputSuccess1"/>\n' +
        '</div>';

    snippets.bs4inputwarning = '<div class="form-group has-warning">\n' +
        '    <label class="form-control-label" for="inputWarning">Input with success</label>\n' +
        '    <input type="text" class="form-control form-control-warning" id="inputWarning"/>\n' +
        '</div>'

    snippets.bs4inputdanger = '<div class="form-group has-danger">\n' +
        '    <label class="form-control-label" for="inputDanger">Input with success</label>\n' +
        '    <input type="text" class="form-control form-control-danger" id="inputDanger"/>\n' +
        '</div>'


    snippets.bs4inputcheckboxsuccess = ' <div class="checkbox has-success"> \n' +
        '     <label>\n' +
        '         <input type="checkbox" id="checkboxSuccess" value="option1">\n' +
        '          Checkbox with success\n' +
        '    </label>\n' +
        '</div>\n';

    snippets.bs4inputcheckboxwarning = ' <div class="checkbox has-warning"> \n' +
        '     <label>\n' +
        '         <input type="checkbox" id="checkboxWarning" value="option1">\n' +
        '          Checkbox with warning\n' +
        '    </label>\n' +
        '</div>\n';

    snippets.bs4inputcheckboxdanger = ' <div class="checkbox has-danger"> \n' +
        '     <label>\n' +
        '         <input type="checkbox" id="checkboxDanger" value="option1">\n' +
        '          Checkbox with danger\n' +
        '    </label>\n' +
        '</div>\n';


    snippets.bs4inputCheckboxes = '   <label class="c-input c-checkbox">\n' +
        '            <input type="checkbox">\n' +
        '            <span class="c-indicator"></span> Check this custom checkbox\n' +
        '        </label>\n' +
        '    </div>\n';

    snippets.bs4inputRadios = '    <div class="c-inputs-stacked">\n' +
        '       <label class="c-input c-radio">\n' +
        '            <input id="radioStacked1" name="radio-stacked" type="radio">\n' +
        '            <span class="c-indicator"></span> Toggle this custom radio\n' +
        '        </label>\n' +
        '        <label class="c-input c-radio">\n' +
        '            <input id="radioStacked2" name="radio-stacked" type="radio">\n' +
        '            <span class="c-indicator"></span> Or toggle this other custom radio\n' +
        '        </label>\n' +
        '    </div>\n';

    snippets.bs4inputRadiosinline = '<label class="c-input c-radio">\n' +
        '      <input id="radio1" name="radio" type="radio">\n' +
        '      <span class="c-indicator"></span>\n' +
        '      Toggle this custom radio\n' +
        '  </label>\n' +
        ' <label class="c-input c-radio">\n' +
        '      <input id="radio2" name="radio" type="radio">\n' +
        '      <span class="c-indicator"></span>\n' +
        '      Or toggle this other custom radio\n' +
        ' </label>\n';

    snippets.bs4InputSelectMenu = '        <select class="c-select">\n' +
        '            <option selected>Open this select menu</option>\n' +
        '            <option value="1">One</option>\n' +
        '            <option value="2">Two</option>\n' +
        '            <option value="3">Three</option>\n' +
        '        </select>\n';


    snippets.bs4InputFile = '        <label class="file">\n' +
        '            <input type="file" id="file" name="" multiple>\n' +
        '            <span class="file-custom"></span>\n' +
        '        </label>\n';


    // Input Groups

    snippets.bs4inputgroupaddonPrice = '<div class="input-group">\n' +
        '    <span class="input-group-addon">$</span>\n' +
        '   <input type="text" class="form-control" name="" placeholder="Price" aria-label="Amount (to the nearest dollar)">\n' +
        '   <span class="input-group-addon">.00</span>\n' +
        '</div>\n';

    snippets.bs4inputgroupaddon = '<div class="input-group">\n' +
        '  <span class="input-group-addon" id="basic-addon1">@</span>\n' +
        '  <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">\n' +
        '</div>\n';

    snippets.bs4inputgroupbtn = '<div class="col-lg-6">\n' +
        '    <div class="input-group">\n' +
        '      <input type="text" class="form-control" placeholder="Search for...">\n' +
        '      <span class="input-group-btn">\n' +
        '        <button class="btn btn-secondary" type="button">Go!</button>\n' +
        '      </span>\n' +
        '    </div>\n' +
        '  </div>\n';

    snippets.bs4inputgroup = '<div class="input-group">\n' +
        '	<input type="text" class="form-control" id="exampleInputAmount" placeholder="Search">\n' +
        '	<span class="input-group-btn">\n' +
        '		<button type="button" class="btn btn-secondary">Go!</button>\n' +
        '	</span>\n' +
        '</div>\n';


    snippets.bs4inputButtonsdropdowns = '   <div class="row"> \n' +
        '             <div class="col-lg-6">\n' +
        '            <div class="input-group">\n' +
        '                <div class="input-group-btn">\n' +
        '                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                        Action\n' +
        '                    </button>\n' +
        '                    <div class="dropdown-menu">\n' +
        '                        <a class="dropdown-item" href="#">Action</a>\n' +
        '                        <a class="dropdown-item" href="#">Another action</a>\n' +
        '                        <a class="dropdown-item" href="#">Something else here</a>\n' +
        '                        <div role="separator" class="dropdown-divider"></div>\n' +
        '                        <a class="dropdown-item" href="#">Separated link</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <input type="text" class="form-control" aria-label="Text input with dropdown button">\n' +
        '            </div>\n' +
        '      </div>\n' +
        '</div>\n';

    // List Groups



    snippets.bs4listgroup = '                        <ul class="list-group">\n' +
        '                            <li class="list-group-item">\n' +
        '                                <a href="#" class="list-group-link" title="#">   Item 2</a>\n' +
        '                            </li>\n' +
        '                            <li class="list-group-item">\n' +
        '                                <a href="#" class="list-group-link" title="#">   Item 2</a>\n' +
        '                            </li>\n' +
        '                            <li class="list-group-item">\n' +
        '                                <a href="#" class="list-group-link" title="#">   Item 2</a>\n' +
        '                            </li>\n' +
        '                            <li class="list-group-item">\n' +
        '                                <a href="#" class="list-group-link" title="#">   Item 2</a>\n' +
        '                            </li>\n' +
        '                            <li class="list-group-item">\n' +
        '                                <a href="#" class="list-group-link" title="#">   Item 2</a>\n' +
        '                            </li>\n' +
        '                            <li class="list-group-item">\n' +
        '                                <a href="#" class="list-group-link" title="#">   Item 2</a>\n' +
        '                              </li>\n' +
        '                             <li class="list-group-item">\n' +
        '                                 <a href="#" class="list-group-link" title="#">   Item 2</a>\n' +
        '                             </li>\n' +
        '                             <li class="list-group-item">\n' +
        '                                 <a href="#" class="list-group-link" title="#">   Item 2</a>\n' +
        '                             </li>\n' +
        '                             <li class="list-group-item">\n' +
        '                                 <a href="#" class="list-group-link" title="#">   Item 2</a>\n' +
        '                             </li>\n' +
        '                             <li class="list-group-item">\n' +
        '                                 <a href="#" class="list-group-link" title="#">   Item 2</a>\n' +
        '                             </li>\n' +
        '                         </ul>\n';

    snippets.bs4listgrouplink = '<div class="list-group">\n' +
        '	<a href="#" class="list-group-item active">Item 1</a>\n' +
        '	<a href="#" class="list-group-item">Item 2</a>\n' +
        '	<a href="#" class="list-group-item">Item 3</a>\n' +
        '</div>\n';


    snippets.bs4listgroupLabels = '    <ul class="list-group">\n' +
        '        <li class="list-group-item">\n' +
        '            <span class="label label-default label-pill pull-xs-right">14</span> Cras justo odio\n' +
        '        </li>\n' +
        '        <li class="list-group-item">\n' +
        '            <span class="label label-default label-pill pull-xs-right">2</span> Dapibus ac facilisis in\n' +
        '        </li>\n' +
        '        <li class="list-group-item">\n' +
        '            <span class="label label-default label-pill pull-xs-right">1</span> Morbi leo risus\n' +
        '        </li>\n' +
        '    </ul>\n';


    snippets.bs4listgroupButtonItems = '    <div class="list-group">\n' +
        '         <button type="button" class="list-group-item">Cras justo odio</button>\n' +
        '         <button type="button" class="list-group-item">Dapibus ac facilisis in</button>\n' +
        '         <button type="button" class="list-group-item">Morbi leo risus</button>\n' +
        '         <button type="button" class="list-group-item">Porta ac consectetur ac</button>\n' +
        '         <button type="button" class="list-group-item">Vestibulum at eros</button>\n' +
        '     </div>\n';


    snippets.bs4listgroupColor = '<ul class="list-group">\n' +
        '  <li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>\n' +
        '  <li class="list-group-item list-group-item-info">Cras sit amet nibh libero</li>\n' +
        '  <li class="list-group-item list-group-item-warning">Porta ac consectetur ac</li>\n' +
        '  <li class="list-group-item list-group-item-danger">Vestibulum at eros</li>\n' +
        '</ul>\n';


    snippets.bs4listgroupcontent = '    <div class="list-group">\n' +
        '        <a href="#" class="list-group-item active">\n' +
        '            <h4 class="list-group-item-heading">List group item heading</h4>\n' +
        '            <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n' +
        '        </a>\n' +
        '        <a href="#" class="list-group-item">\n' +
        '            <h4 class="list-group-item-heading">List group item heading</h4>\n' +
        '            <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n' +
        '        </a>\n' +
        '        <a href="#" class="list-group-item">\n' +
        '            <h4 class="list-group-item-heading">List group item heading</h4>\n' +
        '            <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n' +
        '        </a>\n' +
        '    </div>\n';


    // Modal 

    //   .modal(options)
    // .modal('toggle')
    // .modal('show')
    // .modal('hide')



    snippets.bs4Modal = '<!-- Button trigger modal --> \n' +
        '<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">\n' +
        '  Launch demo modal\n' +
        '</button>\n' +

        '<!-- Modal -->\n' +
        '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n' +
        '  <div class="modal-dialog" role="document">\n' +
        '    <div class="modal-content">\n' +
        '      <div class="modal-header">\n' +
        '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
        '          <span aria-hidden="true">&times;</span>\n' +
        '        </button>\n' +
        '        <h4 class="modal-title" id="myModalLabel">Modal title</h4>\n' +
        '      </div>\n' +
        '      <div class="modal-body">\n' +
        '        ...\n' +
        '      </div>\n' +
        '      <div class="modal-footer">\n' +
        '        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
        '        <button type="button" class="btn btn-primary">Save changes</button>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>\n';


    snippets.bs4ModalLg = '<!-- Large modal -->\n' +
        '<button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>\n' +

        '<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">\n' +
        '  <div class="modal-dialog modal-lg">\n' +
        '    <div class="modal-content">\n' +
        '      ...\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>\n';


    snippets.bs4ModalSm = '<!-- Large modal -->\n' +
        '<button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>\n' +

        '<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">\n' +
        '  <div class="modal-dialog modal-sm">\n' +
        '    <div class="modal-content">\n' +
        '      ...\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>\n';


    snippets.bs4ModalGird = '    <div id="gridSystemModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel" aria-hidden="true"> \n' +
        '        <div class="modal-dialog" role="document"> \n' +
        '            <div class="modal-content"> \n' +
        '                <div class="modal-header"> \n' +
        '            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> \n' +
        '                    <h4 class="modal-title" id="gridModalLabel">Modal title</h4> \n' +
        '                </div> \n' +
        '                <div class="modal-body"> \n' +
        '                    <div class="container-fluid bd-example-row"> \n' +
        '                        <div class="row"> \n' +
        '                            <div class="col-md-4">.col-md-4</div> \n' +
        '                            <div class="col-md-4 ">.col-md-4 </div> \n' +
        '                            <div class="col-md-4 ">.col-md-4</div> \n' +
        '                        </div> \n' +
        '                    </div> \n' +
        '               </div> \n' +

        '                <div class="modal-footer"> \n' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \n' +
        '                    <button type="button" class="btn btn-primary">Save changes</button> \n' +
        '                </div> \n' +
        '            </div> \n' +
        '        </div> \n' +
        '    </div> \n' +
        '    <div class="bd-example bd-example-padded-bottom"> \n' +
        '        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#gridSystemModal"> \n' +
        '            Launch demo modal \n' +
        '        </button> \n' +
        '    </div> \n';

    snippets.bs4ModalForm = '   <div class="bd-example">\n' +
        '       <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>\n' +

        '       <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n' +
        '           <div class="modal-dialog" role="document">\n' +
        '               <div class="modal-content">\n' +
        '                   <div class="modal-header">\n' +
        '                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
        '                           <span aria-hidden="true">&times;</span>\n' +
        '                       </button>\n' +
        '                       <h4 class="modal-title" id="exampleModalLabel">New message</h4>\n' +
        '                    </div>\n' +
        '                    <div class="modal-body">\n' +
        '                        <form>\n' +
        '                            <div class="form-group">\n' +
        '                                <label for="recipient-name" class="form-control-label">Recipient:</label>\n' +
        '                                <input type="text" class="form-control" id="recipient-name">\n' +
        '                            </div>\n' +
        '                            <div class="form-group">\n' +
        '                                <label for="message-text" class="form-control-label">Message:</label>\n' +
        '                                <textarea class="form-control" id="message-text"></textarea>\n' +
        '                            </div>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                    <div class="modal-footer">\n' +
        '                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
        '                        <button type="button" class="btn btn-primary">Send message</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n';









    // Local

    snippets.bs4local = '<link rel="stylesheet" media="screen" href="bootstrap.min.css">\n' +
        '<script src="jquery.js"></script>\n' +
        '<script src="bootstrap.min.js"></script>\n';

    snippets.bs4localcss = '<link rel="stylesheet" media="screen" href="bootstrap.min.css">\n';

    snippets.bs4localjs = '<script src="jquery.js"></script>\n' +
        '<script src="bootstrap.min.js"></script>\n';





    // Navigation Danh Sách Điều Hướng


    snippets.bs4navbase = '    <ul class="nav"> \n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Link</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Link</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Another link</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link disabled" href="#">Disabled</a>\n' +
        '            </li>\n' +
        '        </ul>\n';

    snippets.bs4navInline = '        <nav class="nav nav-inline">\n' +
        '            <a class="nav-link active" href="#">Active</a>\n' +
        '            <a class="nav-link" href="#">Link</a>\n' +
        '            <a class="nav-link" href="#">Another link</a>\n' +
        '            <a class="nav-link disabled" href="#">Disabled</a>\n' +
        '        </nav>\n';


    snippets.bs4navInlinelist = '        <ul class="nav nav-inline">\n' +
        '             <li class="nav-item">\n' +
        '                 <a class="nav-link" href="#">Link</a>\n' +
        '             </li>\n' +
        '             <li class="nav-item">\n' +
        '                 <a class="nav-link" href="#">Link</a>\n' +
        '             </li>\n' +
        '             <li class="nav-item">\n' +
        '                 <a class="nav-link" href="#">Another link</a>\n' +
        '             </li>\n' +
        '             <li class="nav-item">\n' +
        '                 <a class="nav-link disabled" href="#">Disabled</a>\n' +
        '             </li>\n' +
        '         </ul>\n';

    snippets.bs4navInlinelistTable = '        <ul class="nav nav-tabs">\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link active" href="#">Active</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Link</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Another link</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link disabled" href="#">Disabled</a>\n' +
        '            </li>\n' +
        '       </ul>\n';

    snippets.bs4navInlinelistPill = '        <ul class="nav nav-pills">\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link active" href="#">Active</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Link</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Another link</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link disabled" href="#">Disabled</a>\n' +
        '            </li>\n' +
        '        </ul>\n';

    snippets.bs4navInlinelistStacked = '        <ul class="nav nav-pills nav-stacked">\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link active" href="#">Active</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Link</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Another link</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Disabled</a>\n' +
        '            </li>\n' +
        '        </ul>\n';


    snippets.bs4navInlinedropdown = '        <ul class="nav nav-inline">\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link active" href="#">Active</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item dropdown">\n' +
        '                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>\n' +
        '                <div class="dropdown-menu">\n' +
        '                    <a class="dropdown-item" href="#">Action</a>\n' +
        '                    <a class="dropdown-item" href="#">Another action</a>\n' +
        '                    <a class="dropdown-item" href="#">Something else here</a>\n' +
        '                    <div class="dropdown-divider"></div>\n' +
        '                    <a class="dropdown-item" href="#">Separated link</a>\n' +
        '                </div>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Another link</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link disabled" href="#">Disabled</a>\n' +
        '            </li>\n' +
        '        </ul>\n';

    snippets.bs4navInlineTabsdropdown = '        <ul class="nav nav-tabs">\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link active" href="#">Active</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item dropdown">\n' +
        '                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>\n' +
        '                <div class="dropdown-menu">\n' +
        '                    <a class="dropdown-item" href="#">Action</a>\n' +
        '                    <a class="dropdown-item" href="#">Another action</a>\n' +
        '                    <a class="dropdown-item" href="#">Something else here</a>\n' +
        '                    <div class="dropdown-divider"></div>\n' +
        '                    <a class="dropdown-item" href="#">Separated link</a>\n' +
        '                </div>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Another link</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link disabled" href="#">Disabled</a>\n' +
        '            </li>\n' +
        '        </ul>\n';

    snippets.bs4navInlinePillsdropdown = '        <ul class="nav nav-pills">\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link active" href="#">Active</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item dropdown">\n' +
        '                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>\n' +
        '                <div class="dropdown-menu">\n' +
        '                    <a class="dropdown-item" href="#">Action</a>\n' +
        '                    <a class="dropdown-item" href="#">Another action</a>\n' +
        '                    <a class="dropdown-item" href="#">Something else here</a>\n' +
        '                    <div class="dropdown-divider"></div>\n' +
        '                    <a class="dropdown-item" href="#">Separated link</a>\n' +
        '                </div>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Another link</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link disabled" href="#">Disabled</a>\n' +
        '            </li>\n' +
        '        </ul>\n';


    snippets.bs4navInlineTabJs = '    <ul class="nav nav-tabs" id="myTab" role="tablist">\n' +
        '        <li class="nav-item">\n' +
        '            <a class="nav-link active" data-toggle="tab" href="#home" role="tab" aria-controls="home">Home</a>\n' +
        '        </li>\n' +
        '        <li class="nav-item">\n' +
        '            <a class="nav-link" data-toggle="tab" href="#profile" role="tab" aria-controls="profile">Profile</a>\n' +
        '        </li>\n' +
        '        <li class="nav-item">\n' +
        '            <a class="nav-link" data-toggle="tab" href="#messages" role="tab" aria-controls="messages">Messages</a>\n' +
        '        </li>\n' +
        '       <li class="nav-item">\n' +
        '            <a class="nav-link" data-toggle="tab" href="#settings" role="tab" aria-controls="settings">Settings</a>\n' +
        '        </li>\n' +
        '    </ul>\n' +

        '    <div class="tab-content">\n' +
        '        <div class="tab-pane active" id="home" role="tabpanel">1</div>\n' +
        '        <div class="tab-pane" id="profile" role="tabpanel">2</div>\n' +
        '        <div class="tab-pane" id="messages" role="tabpanel">3</div>\n' +
        '        <div class="tab-pane" id="settings" role="tabpanel">4</div>\n' +
        '    </div>\n' +
        '   <script>\n' +
        '        $(function () {\n' +
        '            $("#myTab a:last").tab("show")\n' +
        '        })\n' +
        '  </script>\n';

    // Navigation Thanh Điều Hướng Hoặc Thanh Có Chứa Danh Sách Điều Hướng
    // navbar-brand : thương hiệu công ty
    // navbar-nav  : Chứa danh sách điều hướng nhẹ
    //navbar-toggler : Chuyển đổi qua lại

    snippets.bs4navbar = '    <nav class="navbar navbar-light bg-faded">\n' +
        '        <a class="navbar-brand" href="#">Navbar</a>\n' +
        '        <ul class="nav navbar-nav">\n' +
        '            <li class="nav-item active">\n' +
        '                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Features</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Pricing</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">About</a>\n' +
        '            </li>\n' +
        '        </ul>\n' +
        '        <form class="form-inline pull-xs-right">\n' +
        '            <input class="form-control" type="text" placeholder="Search">\n' +
        '            <button class="btn btn-success-outline" type="submit">Search</button>\n' +
        '        </form>\n' +
        '    </nav>\n';

    snippets.bs4navbarBrand = '     <nav class="navbar navbar-light bg-faded">\n' +
        '         <a class="navbar-brand" href="#">Navbar</a>\n' +
        '     </nav>\n';



    snippets.bs4navbarNav = '    <nav class="navbar navbar-light bg-faded">\n' +
        '        <ul class="nav navbar-nav">\n' +
        '            <li class="nav-item active">\n' +
        '                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Features</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">Pricing</a>\n' +
        '            </li>\n' +
        '            <li class="nav-item">\n' +
        '                <a class="nav-link" href="#">About</a>\n' +
        '            </li>\n' +
        '        </ul>\n' +
        '    </nav>\n';




    snippets.bs4navbarColor = '<nav class="navbar navbar-light" style="background-color: #e3f2fd;">\n' +
        ' <!-- Navbar content -->\n' +
        '</nav>\n';


    snippets.bs4navbarColordark = '<nav class="navbar navbar-dark bg-inverse">\n' +
        ' <!-- Content -->\n' +
        '</nav>\n';

    snippets.bs4navbarColorprimary = '<nav class="navbar navbar-dark bg-primary">\n' +
        ' <!-- Navbar content -->\n' +
        '</nav>\n';

    snippets.bs4navbarFixedTop = ' <nav class="navbar navbar-fixed-top navbar-light bg-faded">\n' +
        '       Content navbar \n' +
        '    </nav>\n';



    snippets.bs4navbarFixedBottom = ' <nav class="navbar navbar-fixed-bottom  navbar-light bg-faded">\n' +
        '       Content navbar \n' +
        '    </nav>\n';

    snippets.bs4navbarCollapsed = '    <div class="collapse" id="exCollapsingNavbar">\n' +
        '        <div class="bg-inverse p-a-1">\n' +
        '            <h4>Collapsed content</h4>\n' +
        '            <span class="text-muted">Toggleable via the navbar brand.</span>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <nav class="navbar navbar-light bg-faded">\n' +
        '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">\n' +
        '            &#9776;\n' +
        '        </button>\n' +
        '    </nav>\n';


    // Page Header

    snippets.bs4page = '<nav>\n' +
        '   <ul class="pager">\n' +
        '    <li class="pager-prev"><a href="#">&larr; Previous</a></li>\n' +
        '    <li class="pager-next"><a href="#">Next &rarr;</a></li>\n' +
        '      </ul>\n' +
        '</nav>\n';

    snippets.bs4pageraligned = '<ul class="pager">\n' +
        '	<li class="previous"><a href="#">&larr; Older</a></li>\n' +
        '	<li class="next"><a href="#">Newer &rarr;</a></li>\n' +
        '</ul>\n';

    // Pagination


    snippets.bs4pagination = '<ul class="pagination">\n' +
        '	 <li class="page-item">\n' +
        '<a class="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span>  <span class="sr-only">Previous</span> </a> </li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">1</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">2</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">3</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">4</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">5</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">6</a></li>\n' +
        '     <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span>  <span class="sr-only">Next</span> </a> </li>' +
        '</ul>\n';

    snippets.bs4paginationactive = '<ul class="pagination">\n' +
        '	 <li class="page-item disabled">\n' +
        '<a class="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span>  <span class="sr-only">Previous</span> </a> </li>\n' +
        '	  <li class="page-item active"><a class="page-link " href="#">1</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">2</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">3</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">4</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">5</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">6</a></li>\n' +
        '     <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span>  <span class="sr-only">Next</span> </a> </li>' +
        '</ul>\n';

    snippets.bs4paginationsm = '<ul class="pagination  pagination-sm">\n' +
        '	 <li class="page-item">\n' +
        '<a class="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span>  <span class="sr-only">Previous</span> </a> </li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">1</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">2</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">3</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">4</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">5</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">6</a></li>\n' +
        '     <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span>  <span class="sr-only">Next</span> </a> </li>' +
        '</ul>\n';


    snippets.bs4paginationlg = '<ul class="pagination pagination-lg">\n' +
        '	 <li class="page-item">\n' +
        '<a class="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span>  <span class="sr-only">Previous</span> </a> </li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">1</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">2</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">3</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">4</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">5</a></li>\n' +
        '	  <li class="page-item"><a class="page-link" href="#">6</a></li>\n' +
        '     <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span>  <span class="sr-only">Next</span> </a> </li>' +
        '</ul>\n';




    // cards
    snippets.bs4cardcontent = '<div class="card">\n' +
        '<img class="card-img-top img-fluid" src="13233235_263790417304612_521539508_n.jpg" alt="Nhập hình ảnh">\n' +
        '<div class="card-block">\n' +
        ' <h4 class="card-title">Card title</h4>\n' +
        ' <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>\n' +
        '</div>\n' +
        '<ul class="list-group list-group-flush">\n' +
        ' <li class="list-group-item">Cras justo odio</li>\n' +
        '<li class="list-group-item">Dapibus ac facilisis in</li>\n' +
        ' <li class="list-group-item">Vestibulum at eros</li>\n' +
        '</ul>\n' +
        '<div class="card-block">\n' +
        ' <a href="#" class="card-link">Card link</a>\n' +
        '<a href="#" class="card-link">Another link</a>\n' +
        ' </div>\n' +
        '</div>\n';

    snippets.bs4cardlistitem =
        '<div class="card"> \n' +
        '<ul class="list-group list-group-flush">\n' +
        '  <li class="list-group-item">Cras justo odio</li>\n' +
        '  <li class="list-group-item">Dapibus ac facilisis in</li>\n' +
        '  <li class="list-group-item">Vestibulum at eros</li>\n' +
        '</ul>\n' +
        '</div>\n';

    snippets.bs4cardimg = '<div class="card">\n' +
        '	    <img class="card-img-top" data-src="..." alt="Card image cap">\n' +
        '		  <div class="card-block">\n' +
        '	     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>\n' +
        '  </div>\n' +
        '</div>\n';



    snippets.bs4cardlink = '<div class="card card-block">\n' +
        '  <h4 class="card-title">Card title</h4>\n' +
        '  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>\n' +
        '	    <a href="#" class="card-link">Card link</a>\n' +
        '       <a href="#" class="card-link">Another link</a>">\n' +
        '			card content\n' +
        '</div>\n';


    snippets.bs4cardinfo = '<div class="card card-info">\n' +
        '	  <div class="card-heading">\n' +
        '			<h3 class="card-title">card title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="card-body">\n' +
        '			card content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs4cardprimary = '<div class="card card-primary">\n' +
        '	  <div class="card-heading">\n' +
        '			<h3 class="card-title">card title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="card-body">\n' +
        '			card content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs4cardsuccess = '<div class="card card-success">\n' +
        '	  <div class="card-heading">\n' +
        '			<h3 class="card-title">card title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="card-body">\n' +
        '			card content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs4cardtable = '<div class="card card-default">\n' +
        '	<!-- Default card contents -->\n' +
        '	<div class="card-heading">card heading</div>\n' +
        '		<div class="card-body">\n' +
        '			<p>Text goes here...</p>\n' +
        '		</div>\n' +
        '\n' +
        '		<!-- Table -->\n' +
        '		<table class="table">\n' +
        '			<thead>\n' +
        '				<tr>\n' +
        '					<th>Heading 1</th>\n' +
        '				</tr>\n' +
        '				<tr>\n' +
        '					<th>Heading 2</th>\n' +
        '				</tr>\n' +
        '			</thead>\n' +
        '			<tbody>\n' +
        '				<tr>\n' +
        '					<td>Content 1</td>\n' +
        '				</tr>\n' +
        '				<tr>\n' +
        '					<td>Content 2</td>\n' +
        '				</tr>\n' +
        '			</tbody>\n' +
        '		</table>\n' +
        '</div>\n';

    snippets.bs4cardwarning = '<div class="card card-warning">\n' +
        '	  <div class="card-heading">\n' +
        '			<h3 class="card-title">card title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="card-body">\n' +
        '			card content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs4card =
        '<div class="card">\n' +
        '           <img class="card-img-top img-fluid" src="13233235_263790417304612_521539508_n.jpg" alt="Card image cap"/>\n' +
        '         <div class="card-block">\n' +
        '             <h4 class="card-title">Card title</h4>\n' +
        '             <p class="card-text">Some quick example text to build on the card title and make up thebulk of the cards content </p>\n' +
        '             <a href="#" class="btn btn-primary">Button</a>\n' +
        '         </div>\n' +
        '</div>\n';


    // Table



    snippets.bs4table = '<table class="table">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablehover = '<table class="table table-hover">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablehovercolor = '        .table-hover tbody tr:hover td,\n' +
        '        .table-hover tbody tr:hover th {\n' +
        '            background-color: #acb;\n' +
        '        }\n';


    snippets.bs4tablebordered = '    <table class="table table-bordered">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tableborderedcolor = '        .table {\n' +
        '            border: 2.5px solid red;\n' +
        '        }\n' +
        '        \n' +
        '        .table-bordered > thead > tr > th,\n' +
        '        .table-bordered > tbody > tr > th,\n' +
        '        .table-bordered > tfoot > tr > th,\n' +
        '        .table-bordered > thead > tr > td,\n' +
        '        .table-bordered > tbody > tr > td,\n' +
        '        .table-bordered > tfoot > tr > td {\n' +
        '            border: 2.5px solid red;\n' +
        '        }\n';



    // Bảng - Hàng Chứa Link bs4tablelinkrow

    snippets.bs4tablelinkrow = "    <div class=\"container\">\n";
    snippets.bs4tablelinkrow += "        <table class=\"table table-striped table-bordered table-hover\">\n";
    snippets.bs4tablelinkrow += "            <thead>\n";
    snippets.bs4tablelinkrow += "                <tr>\n";
    snippets.bs4tablelinkrow += "                    <th>Name<\/th>\n";
    snippets.bs4tablelinkrow += "                    <th>Company<\/th>\n";
    snippets.bs4tablelinkrow += "                    <th>Email<\/th>\n";
    snippets.bs4tablelinkrow += "                    <th>URL<\/th>\n";
    snippets.bs4tablelinkrow += "                <\/tr>\n";
    snippets.bs4tablelinkrow += "            <\/thead>\n";
    snippets.bs4tablelinkrow += "            <tbody data-link=\"row\" class=\"rowlink\">\n";
    snippets.bs4tablelinkrow += "                <tr>\n";
    snippets.bs4tablelinkrow += "                    <td><a href=\"#inputmask\">Carson<\/a><\/td>\n";
    snippets.bs4tablelinkrow += "                    <td>Magnis Dis Parturient Ltd<\/td>\n";
    snippets.bs4tablelinkrow += "                    <td>magna@elementumategestas.edu<\/td>\n";
    snippets.bs4tablelinkrow += "                    <td class=\"rowlink-skip\"><a href=\"#\">elementumategestas.edu<\/a><\/td>\n";
    snippets.bs4tablelinkrow += "                <\/tr>\n";
    snippets.bs4tablelinkrow += "                <tr>\n";
    snippets.bs4tablelinkrow += "                    <td><a href=\"#inputmask\">Salvador<\/a><\/td>\n";
    snippets.bs4tablelinkrow += "                    <td>Orci Corp.<\/td>\n";
    snippets.bs4tablelinkrow += "                    <td>elit.Nulla@nunc.org<\/td>\n";
    snippets.bs4tablelinkrow += "                    <td class=\"rowlink-skip\"><a href=\"#\">nunc.org<\/a><\/td>\n";
    snippets.bs4tablelinkrow += "                <\/tr>\n";
    snippets.bs4tablelinkrow += "                <tr>\n";
    snippets.bs4tablelinkrow += "                    <td><a href=\"#inputmask\">Jared<\/a><\/td>\n";
    snippets.bs4tablelinkrow += "                    <td>Nibh Enim Incorporated<\/td>\n";
    snippets.bs4tablelinkrow += "                    <td>amet@dapibusrutrumjusto.co.uk<\/td>\n";
    snippets.bs4tablelinkrow += "                    <td class=\"rowlink-skip\"><a href=\"#\">dapibusrutrumjusto.co.uk<\/a><\/td>\n";
    snippets.bs4tablelinkrow += "                <\/tr>\n";
    snippets.bs4tablelinkrow += "                <tr>\n";
    snippets.bs4tablelinkrow += "                    <td>Carson<\/td>\n";
    snippets.bs4tablelinkrow += "                    <td>Gravida Sagittis Associates<\/td>\n";
    snippets.bs4tablelinkrow += "                    <td>molestie.dapibus.ligula@Vivamus.ca<\/td>\n";
    snippets.bs4tablelinkrow += "                    <td class=\"rowlink-skip\"><a href=\"#\">Vivamus.ca<\/a><\/td>\n";
    snippets.bs4tablelinkrow += "                <\/tr>\n";
    snippets.bs4tablelinkrow += "\n";
    snippets.bs4tablelinkrow += "            <\/tbody>\n";
    snippets.bs4tablelinkrow += "        <\/table>\n";
    snippets.bs4tablelinkrow += "    <\/div>\n";
    snippets.bs4tablelinkrow += "\n";









    snippets.bs4addroundcardsolid = '<div class="card card-default addroundsolid">\n\n' +
        '</div>\n';

    snippets.bs4addroundsolid = '        .addroundsolid {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 2px solid #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundcarddashed = '<div class="card card-default addrounddashed">\n\n' +
        '</div>\n';

    snippets.bs4addrounddashed = '        .addrounddashed {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 2px dashed #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundcarddotted = '<div class="card card-default addrounddotted">\n\n' +
        '</div>\n';

    snippets.bs4addrounddotted = '        .addrounddotted {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 2px dotted #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundcarddouble = '<div class="card card-default addrounddouble">\n\n' +
        '</div>\n';

    snippets.bs4addrounddouble = '        .addrounddouble {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px double #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundcardgroove = '<div class="card card-default addroundgroove">\n\n' +
        '</div>\n';

    snippets.bs4addroundgroove = '        .addroundgroove {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px groove #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundcardridge = '<div class="card card-default addroundridge">\n\n' +
        '</div>\n';

    snippets.bs4addroundridge = '        .addroundridge {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px ridge #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundcardinset = '<div class="card card-default addroundinset">\n\n' +
        '</div>\n';

    snippets.bs4addroundinset = '        .addroundinset {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px inset #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundcardoutset = '<div class="card card-default addroundoutset">\n\n' +
        '</div>\n';

    snippets.bs4addroundoutset = '        .addroundoutset {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px outset #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundcardhidden = '<div class="card card-default addroundhidden">\n\n' +
        '</div>\n';

    snippets.bs4addroundhidden = '        .addroundhidden {\n' +
        '            border: 0px hidden #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';


    snippets.bs4tableborderedhcolor = '        .table-bordered > thead > tr > th,\n' +
        '        .table-bordered > tbody > tr > th,\n' +
        '        .table-bordered > tfoot > tr > th,\n' +
        '        .table-bordered > thead > tr > td,\n' +
        '        .table-bordered > tbody > tr > td,\n' +
        '        .table-bordered > tfoot > tr > td {\n' +
        '            border: 1px solid red;\n' +
        '            border-right-width: 0px;\n' +
        '            border-left-width: 0px;\n' +
        '        }\n';

    snippets.bs4tableborderedhover = '<table class="table table-bordered table-hover">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablecondensed = '<table class="table table-condensed">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablecondensedhover = '<table class="table table-condensed table-hover">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';


    snippets.bs4tableresponsive = '<div class="table-responsive">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tableresponsivehover = '<div class="table-responsive">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablestriped = '<table class="table table-striped">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablestripedbgcolor = '        .table-striped > tbody > tr:nth-child(2n+1) > td,\n' +
        '        .table-striped > tbody > tr:nth-child(2n+1) > th {\n' +
        '            background-color: #acbedc;\n' +
        '        }\n';

    snippets.bs4tablestripedcolumnodd = '        .table-striped-column > tbody > tr td:nth-of-type(odd) {\n' +
        '            background-color: #dceacb;\n' +
        '        }\n';

    snippets.bs4tablestripedcolumneven = '   .table-striped-column-odd > tbody > tr td:nth-of-type(even) {\n' +
        '       background-color: #dceacb;\n' +
        '   }\n';


    snippets.bs4tablestripedhover = '<table class="table table-striped table-hover">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablecontextual = '<table class="table">\n' +
        '    <thead>\n' +
        '      <tr>\n' +
        '        <th>[Title]</th>\n' +
        '        <th>[Title]</th>\n' +
        '        <th>[Title]</th>\n' +
        '      </tr>\n' +
        '    </thead>\n' +
        '    <tfoot>\n' +
        '      <tr>\n' +
        '        <th>[Title]</th>\n' +
        '        <th>[Title]</th>\n' +
        '        <th>[Title]</th>\n' +
        '      </tr>\n' +
        '    </foot>\n' +
        '    <tbody>\n' +
        '      <tr class="active">\n' +
        '        <td>[active data]</td>\n' +
        '        <td>[active data]</td>\n' +
        '        <td>[active data]</td>\n' +
        '      </tr>\n' +
        '      <tr class="success">\n' +
        '        <td>[success data]</td>\n' +
        '        <td>[success data]</td>\n' +
        '        <td>[success data]</td>\n' +
        '      </tr>\n' +
        '      <tr class="info">\n' +
        '        <td>[info data]</td>\n' +
        '        <td>[info data]</td>\n' +
        '        <td>[info data]</td>\n' +
        '      </tr>\n' +
        '      <tr class="warning">\n' +
        '        <td>[warning data]</td>\n' +
        '        <td>[warning data]</td>\n' +
        '        <td>[warning data]</td>\n' +
        '      </tr>\n' +
        '      <tr class="danger">\n' +
        '        <td>[danger data]</td>\n' +
        '        <td>[danger data]</td>\n' +
        '        <td>[danger data]</td>\n' +
        '      </tr>\n' +
        '    </tbody>\n' +
        '  </table>\n';


    snippets.bs4tablecontextualtdcoloractive = '        .table tbody tr > td.active {\n' +
        '            background-color: #ced0cd !important;\n' +
        '        }\n' +
        '\n' +
        '        .table-hover tbody tr:hover > td.active {\n' +
        '            background-color: #a5a7a5 !important;\n' +
        '        }\n' +
        '\n';

    snippets.bs4tablecontextualtdcolorsuccess = '        .table tbody tr > td.success {\n' +
        '            background-color: #dff0d8 !important;\n' +
        '        }\n' +
        '\n' +
        '        .table-hover tbody tr:hover > td.success {\n' +
        '            background-color: #d0e9c6 !important;\n' +
        '        }\n' +
        '        \n';

    snippets.bs4tablecontextualtdcolordanger = '        .table tbody tr > td.danger {\n' +
        '            background-color: #f2dede !important;\n' +
        '        }\n' +
        '        .table-hover tbody tr:hover > td.danger {\n' +
        '            background-color: #ebcccc !important;\n' +
        '        }\n' +
        '        \n';

    snippets.bs4tablecontextualtdcolorwarning = '        .table tbody tr > td.warning {\n' +
        '            background-color: #fcf8e3 !important;\n' +
        '        }\n' +
        '        .table-hover tbody tr:hover > td.warning {\n' +
        '            background-color: #faf2cc !important;\n' +
        '        }\n' +
        '        \n';

    snippets.bs4tablecontextualtdcolorinfo = '        .table tbody tr > td.info {\n' +
        '            background-color: #d9edf7 !important;\n' +
        '        }\n' +
        '        .table-hover tbody tr:hover > td.info {\n' +
        '            background-color: #c4e3f3 !important;\n' +
        '        }\n';

    snippets.bs4tablecontextualtdcolorall = snippets.bs4tablecontextualtdcoloractive +
        snippets.bs4tablecontextualtdcolorsuccess +
        snippets.bs4tablecontextualtdcolordanger +
        snippets.bs4tablecontextualtdcolorwarning +
        snippets.bs4tablecontextualtdcolorinfo;

    // Tabs

    snippets.bs4tabs = '<div role="tabpanel">\n' +
        '    <!-- Nav tabs -->\n' +
        '    <ul class="nav nav-tabs" role="tablist">\n' +
        '        <li role="presentation" class="active">\n' +
        '            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">home</a>\n' +
        '        </li>\n' +
        '        <li role="presentation">\n' +
        '            <a href="#tab" aria-controls="tab" role="tab" data-toggle="tab">tab</a>\n' +
        '        </li>\n' +
        '    </ul>\n' +
        '\n' +
        '    <!-- Tab panes -->\n' +
        '    <div class="tab-content">\n' +
        '        <div role="tabpanel" class="tab-pane active" id="home">...</div>\n' +
        '        <div role="tabpanel" class="tab-pane" id="tab">...</div>\n' +
        '    </div>\n' +
        '</div>\n';

    snippets.bs4tabhover = '    <!-- Nav pills -->\n' +
        '    <ul class="nav nav-pills">\n' +
        '        <li class="active"><a href="#tab-1" data-toggle="tab">Tab 1</a>\n' +
        '        </li>\n' +
        '        <li><a href="#tab-2" data-toggle="tab">Tab 2</a>\n' +
        '        </li>\n' +
        '        <li><a href="#tab-3" data-toggle="tab">Tab 3</a>\n' +
        '        </li>\n' +
        '        <li><a href="#tab-4" data-toggle="tab">Tab 4</a>\n' +
        '        </li>\n' +
        '    </ul>\n\n' +
        '    <!-- Tab panes -->\n' +
        '    <div class="tab-content well">\n' +
        '        <div class="tab-pane active" id="tab-1">Content 1</div>\n' +
        '        <div class="tab-pane" id="tab-2">Content 2</div>\n' +
        '        <div class="tab-pane" id="tab-3">Content 3</div>\n' +
        '        <div class="tab-pane" id="tab-4">Content 4</div>\n' +
        '    </div>    \n' +
        '    <!-- Move this line to the last line of js declaration area -->\n' +
        '    <script src="https://cdn.rawgit.com/tonystar/bootstrap-hover-tabs/v3.1.1/bootstrap-hover-tabs.js"></script>\n';
    // HTML5 Tamplate


    // Wells

    snippets.bs4welllg = '<div class="well well-lg">\n\n' +
        '</div>\n';

    snippets.bs4wellsm = '<div class="well well-sm">\n\n' +
        '</div>\n';

    snippets.bs4well = '<div class="well">\n\n' +
        '</div>\n';

    // Carousel


    // Sample Images
    //
    // https://pixabay.com/static/uploads/photo/2015/06/15/06/17/flowers-809927_640.jpg
    // https://pixabay.com/static/uploads/photo/2014/02/10/16/07/tulips-263513_640.jpg
    // https://pixabay.com/static/uploads/photo/2014/04/10/10/00/tulip-320774_640.jpg
    //

    snippets.bs4carousel = '    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n' +
        '        <ol class="carousel-indicators">\n' +
        '            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"> </li>\n' +
        '            <li data-target="#carousel-example-generic" data-slide-to="1"> </li>\n' +
        '            <li data-target="#carousel-example-generic" data-slide-to="2"> </li>\n' +
        '        </ol>\n' +
        '        <div class="carousel-inner">\n' +
        '            <div class="item active">\n' +
        '                <img src="[INSERT IMAGE HERE]" alt="First slide"/>\n' +
        '            </div>\n' +
        '            <div class="item">\n' +
        '                <img src="[INSERT IMAGE HERE]" alt="Second slide"/>\n' +
        '            </div>\n' +
        '            <div class="item">\n' +
        '                <img src="[INSERT IMAGE HERE]" alt="Third slide"/>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>\n' +
        '        <a class="right carousel-control" href="#carousel-example-generic" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>\n' +
        '    </div>\n';

    // CDN

    snippets.bs4cdn = cdncss + cdnjs;

    snippets.bs4cdnjs = cdnjs;

    snippets.bs4cdncss = cdncss;

    snippets.bs4cdnmodernizr = '<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js">\n';

    snippets.bs4cdndatatablecss = '<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.9/css/jquery.dataTables.min.css">';

    snippets.bs4cdndatatablejs = '<script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>';

    snippets.bs4cdnjasnycss = '<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/css/jasny-bootstrap.css">';

    snippets.bs4cdnjasnyjs = '<script type="text/javascript" language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min.js"></script>';

    snippets.bs4cdncsvimportjs = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/0.71/jquery.csv-0.71.min.js"></script>';

    // Portfolio Sample

    //
    // Site Blocks
    //









    snippets.bs4portfoliocss = '<!-- External Styles -->\n' +
        '<link href="assets/css/ionicons.css" rel="stylesheet"/>\n' +
        '<link href="assets/css/font-awesome.css" rel="stylesheet"/>\n' +
        '<link href="assets/js/source/jquery.fancybox.css" rel="stylesheet"/>\n' +
        '<link href="assets/js/animate.min.css" rel="stylesheet"/>\n' +
        '<link href="assets/css/animations.min.css" rel="stylesheet"/>\n' +
        '<link href="assets/css/style-blue.css" rel="stylesheet"/>\n' +
        '<link href="assets/js/vegas/jquery.vegas.min.css" rel="stylesheet"/>\n' +
        '<!-- End External Styles -->\n';

    snippets.bs4portfoliolibs = '<!-- External Libs -->\n' +
        '<script src="assets/js/vegas/jquery.vegas.min.js"></script>\n' +
        '<script src="assets/js/jquery.easing.min.jsj"></script>\n' +
        '<script src="assets/js/source/jquery.fancybox.js"></script>\n' +
        '<script src="assets/js/jquery.isotope.js"></script>\n' +
        '<script src="assets/js/appear.min.js"></script>\n' +
        '<script src="js/wow.min.js"></script>\n' +
        '<script src="assets/js/animations.min.js"></script>\n' +
        '<!-- End External Libs -->\n';

    snippets.bs4portfoliojs = '<!-- jQuery Functions inside tag <script> -->\n' +
        '$(document).ready(function () {\n' +
        '    // IMAGE BACKGROUND SLIDE SHOW\n' +
        '    $.vegas(\'slideshow\', {\n' +
        '        backgrounds: [\n' +
        '            {\n' +
        '                src: \'assets/img/background/1.jpg\',\n' +
        '                fade: 1000,\n' +
        '                delay: 12000\n' +
        '                },\n' +
        '            {\n' +
        '                src: \'assets/img/background/2.jpg\',\n' +
        '                fade: 1000,\n' +
        '                delay: 12000\n' +
        '                },\n' +
        '            {\n' +
        '                src: \'assets/img/background/3.jpg\',\n' +
        '                fade: 1000,\n' +
        '                delay: 12000\n' +
        '                }\n' +
        '            ]\n' +
        '    })(\'overlay\', {\n' +
        '        /** SLIDESHOW OVERLAY IMAGE **/\n' +
        '        src: \'assets/js/vegas/overlays/11.png\'\n' +
        '    });\n' +
        '    // OUR WORK - IMAGE EFFECTS\n' +
        '    $(\'.fancybox-media\').fancybox({\n' +
        '        openEffect: \'elastic\',\n' +
        '        closeEffect: \'elastic\',\n' +
        '        helpers: {\n' +
        '            title: {\n' +
        '                type: \'inside\'\n' +
        '            }\n' +
        '        }\n' +
        '    });\n' +
        '    $(window).load(function () {\n' +
        '        var $container = $(\'#work-div\');\n' +
        '        $container.isotope({\n' +
        '            filter: \'*\',\n' +
        '            animationOptions: {\n' +
        '                duration: 750,\n' +
        '                easing: \'linear\',\n' +
        '                queue: false\n' +
        '            }\n' +
        '        });\n' +
        '        $(\'.caegories a\').click(function () {\n' +
        '            $(\'.caegories .active\').removeClass(\'active\');\n' +
        '            $(this).addClass(\'active\');\n' +
        '            var selector = $(this).attr(\'data-filter\');\n' +
        '            $container.isotope({\n' +
        '                filter: selector,\n' +
        '                animationOptions: {\n' +
        '                    duration: 750,\n' +
        '                    easing: \'linear\',\n' +
        '                    queue: false\n' +
        '                }\n' +
        '            });\n' +
        '            return false;\n' +
        '        });\n' +
        '    });\n' +
        '}); \n' +
        'new WOW().init();\n' +
        '<!-- jQuery Function </script> -->\n';

    snippets.bs4portfoliomenu = '<!-- Replace or adapt body tag as follow     \n' +
        '    <body data-spy="scroll" data-target="#menu-section">\n' +
        '-->\n' +
        '\n' +
        '<!--MENU SECTION START-->\n' +
        '<div class="navbar navbar-inverse navbar-fixed-top scroll-me" id="menu-section">\n' +
        '    <div class="container">\n' +
        '        <div class="navbar-header">\n' +
        '            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n' +
        '                <span class="icon-bar"></span>\n' +
        '                <span class="icon-bar"></span>\n' +
        '                <span class="icon-bar"></span>\n' +
        '            </button>\n' +
        '            <a class="navbar-brand" href="#">YOUR BRAND</a>\n' +
        '        </div>\n' +
        '        <div class="navbar-collapse collapse">\n' +
        '            <ul class="nav navbar-nav navbar-right">\n' +
        '                <li><a href="#home">HOME</a>\n' +
        '                </li>\n' +
        '                <li><a href="#services">SERVICES</a>\n' +
        '                </li>\n' +
        '                <li><a href="#pricing">PRICING</a>\n' +
        '                </li>\n' +
        '                <li><a href="#work">WORK</a>\n' +
        '                </li>\n' +
        '                <li><a href="#team">TEAM</a>\n' +
        '                </li>\n' +
        '                <li><a href="#contact">CONTACT</a>\n' +
        '                </li>\n' +
        '                <li><a href="#signup">SIGN UP</a>\n' +
        '                </li>\n' +
        '            </ul>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!--MENU SECTION END-->\n';


    snippets.bs4portfoliocarouseltext = '<!-- Text Corousel -->\n' +
        '<div class="row">\n' +
        '    <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 ">\n' +
        '        <div id="carousel-slider" data-ride="carousel" class="carousel slide  animate-in" data-anim-type="fade-in-up">\n' +
        '            <div class="carousel-inner">\n' +
        '                <div class="item active">\n' +
        '                    <h3>Mussum ipsum cacilds</h3>\n' +
        '                    <p>ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. </p>\n' +
        '                </div>\n' +
        '                <div class="item">\n' +
        '                    <h3>Suco de cevadiss</h3>\n' +
        '                    <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. </p>\n' +
        '                </div>\n' +
        '                <!-- Add more Items as you want ... -->\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- End Text Carousel -->\n';

    snippets.bs4portfoliosocialbuttons = '<!-- Social Buttons -->\n' +
        '<div class="row animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-8 col-lg-offset-2 scroll-me">\n' +
        '        <p>[INSERT A FIXED TEXT HERE]</p>\n' +
        '        <div class="social">\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-facebook "></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-twitter"></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-google-plus "></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-linkedin "></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-pinterest "></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-github "></i></a>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- End Social Buttons -->\n';

    snippets.bs4portfolioservices = '<!-- SERVICE SECTION START -->\n' +
        '<div class="row text-center header">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 animate-in" data-anim-type="fade-in-up">\n' +
        '        <h3>Our Services</h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-iphone"></i>\n' +
        '            <h3>iPhone Applications</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consecteturtellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-wrench"></i>\n' +
        '            <h3>Tools Development</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consecteturtellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-cloud"></i>\n' +
        '            <h3>Cloud Support</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellusnec, porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-android-chat"></i>\n' +
        '            <h3>Chat Applications</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-social-wordpress"></i>\n' +
        '            <h3>Word Press Portal</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-android-call"></i>\n' +
        '            <h3>VOIP Systems</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellusnec, porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-university"></i>\n' +
        '            <h3>e-Learning Portals</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-map"></i>\n' +
        '            <h3>Geo-processing Systems</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-cash"></i>\n' +
        '            <h3>Financial Apps</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec, porttitor  nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!--SERVICE SECTION END-->\n';

    snippets.bs4portfoliopricetable = '<!-- PRICING SECTION START -->\n' +
        '<div class="row text-center header animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n' +
        '        <h3>Pricing Options</h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row pad-bottom animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">\n' +
        '        <div class="row db-padding-btm db-attached">\n' +
        '            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '                <div class="light-pricing">\n' +
        '                    <div class="price">\n' +
        '                        <sup>$</sup>199\n' +
        '                        <small>per month</small>\n' +
        '                    </div>\n' +
        '                    <div class="type">STARTER</div>\n' +
        '                    <ul>\n' +
        '                        <li><i class="glyphicon glyphicon-user"></i>30 Users </li>\n' +
        '                        <li><i class="glyphicon glyphicon-folder-open"></i>150 Projects </li>\n' +
        '                        <li><i class="glyphicon glyphicon-tower"></i>Lead Required</li>\n' +
        '                        <li><i class="glyphicon glyphicon-time"></i>3 year minimum</li>\n' +
        '                    </ul>\n' +
        '                    <div class="pricing-footer">\n' +
        '                        <a href="#" class="btn button-custom btn-custom-one">ORDER</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '                <div class="light-pricing popular">\n' +
        '                    <div class="price">\n' +
        '                        <sup>$</sup>499\n' +
        '                        <small>per month</small>\n' +
        '                    </div>\n' +
        '                    <div class="type">PROFESSIONAL</div>\n' +
        '                    <ul>\n' +
        '                        <li><i class="glyphicon glyphicon-user"></i>50 Users </li>\n' +
        '                        <li><i class="glyphicon glyphicon-folder-open"></i>300 Projects </li>\n' +
        '                        <li><i class="glyphicon glyphicon-tower"></i>Lead Required</li>\n' +
        '                        <li><i class="glyphicon glyphicon-time"></i>2 year minimum</li>\n' +
        '                    </ul>\n' +
        '                    <div class="pricing-footer">\n' +
        '                        <a href="#" class="btn button-custom btn-custom-one">ORDER</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '                <div class="light-pricing">\n' +
        '                    <div class="price">\n' +
        '                        <sup>$</sup>1.999\n' +
        '                        <small>per year</small>\n' +
        '                    </div>\n' +
        '                    <div class="type">EXPERT</div>\n' +
        '                    <ul>\n' +
        '                        <li><i class="glyphicon glyphicon-user"></i>250 Users </li>\n' +
        '                        <li><i class="glyphicon glyphicon-folder-open"></i>500 Projects </li>\n' +
        '                        <li><i class="glyphicon glyphicon-tower"></i>Lead Required</li>\n' +
        '                        <li><i class="glyphicon glyphicon-time"></i>1 year minimum</li>\n' +
        '                    </ul>\n' +
        '                    <div class="pricing-footer">\n' +
        '                        <a href="#" class="btn button-custom btn-custom-one">ORDER</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '                <div class="light-pricing">\n' +
        '                    <div class="price">\n' +
        '                        <sup>$</sup>12,599\n' +
        '                        <small>one time</small>\n' +
        '                    </div>\n' +
        '                    <div class="type">CORPORATE</div>\n' +
        '                    <ul>\n' +
        '                        <li><i class="glyphicon glyphicon-user"></i>Unlimited Users </li>\n' +
        '                        <li><i class="glyphicon glyphicon-folder-open"></i>Unlimited Projects </li>\n' +
        '                        <li><i class="glyphicon glyphicon-tower"></i>Lead not Required</li>\n' +
        '                        <li><i class="glyphicon glyphicon-time"></i>No Obligation</li>\n' +
        '                    </ul>\n' +
        '                    <div class="pricing-footer">\n' +
        '                        <a href="#" class="btn button-custom btn-custom-one">ORDER</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- PRICING SECTION END -->\n';

    snippets.bs4portfoliowork = '<!-- WORK SECTION START -->\n' +
        '<div class="row text-center header animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n' +
        '        <h3>Our Works</h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row text-center animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pad-bottom">\n' +
        '        <div class="caegories">\n' +
        '            <a href="#" data-filter="*" class="active btn btn-custom btn-custom-two btn-sm">All</a>\n' +
        '            <a href="#" data-filter=".hotsite" class="btn btn-custom btn-custom-two btn-sm">Hotsite</a>\n' +
        '            <a href="#" data-filter=".website" class="btn btn-custom btn-custom-two btn-sm">Website</a>\n' +
        '            <a href="#" data-filter=".iphone" class="btn btn-custom btn-custom-two btn-sm">iPhone</a>\n' +
        '            <a href="#" data-filter=".android" class="btn btn-custom btn-custom-two btn-sm">Android</a>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row text-center animate-in" data-anim-type="fade-in-up" id="work-div">\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 iphone">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/1.jpg">\n' +
        '                <img src="assets/img/work/1.jpg" class="img-responsive img-rounded 1" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Lorem ipsum dolor sit amet</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 hotsite website">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/2.jpg">\n' +
        '                <img src="assets/img/work/2.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Integer blandit odio congue leo tristique tempus</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 iphone">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/3.jpg">\n' +
        '                <img src="assets/img/work/3.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Morbi mollis lectus et ipsum</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 hotsite">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/4.jpg">\n' +
        '                <img src="assets/img/work/4.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Ut tincidunt tortor sit amet sagittis sagittis</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 website">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/5.jpg">\n' +
        '                <img src="assets/img/work/5.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Aliquam sit amet libero eget nibh varius ultricies</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 android">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/6.jpg">\n' +
        '                <img src="assets/img/work/6.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Nunc eget ipsum eget odio ultrices molestie</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- WORK SECTION END -->\n';

    snippets.bs4portfolioteam = '<!-- TEAM SECTION START -->\n' +
        '<div class="row text-center header animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n' +
        '        <h3>Our Team</h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '        <div class="team-wrapper">\n' +
        '            <div class="team-inner" style="background-image: url(\'assets/img/team/1.jpg\')">\n' +
        '                <a href="#" target="_blank"> <i class="ion-star"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="description">\n' +
        '                <h3> Larissa Carpenter</h3>\n' +
        '                <h5> <strong> Chief Executive Officer </strong></h5>\n' +
        '                <p>Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. </p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '        <div class="team-wrapper">\n' +
        '            <div class="team-inner" style="background-image: url(\'assets/img/team/2.jpg\')">\n' +
        '                <a href="#" target="_blank"> <i class="ion-monitor"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="description">\n' +
        '                <h3> John Doe</h3>\n' +
        '                <h5> <strong> Desktop Developer & Designer </strong></h5>\n' +
        '                <p>Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim.</p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '        <div class="team-wrapper">\n' +
        '            <div class="team-inner" style="background-image: url(\'assets/img/team/3.jpg\')">\n' +
        '                <a href="#" target="_blank"> <i class="ion-iphone"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="description">\n' +
        '                <h3> Michael Lordman</h3>\n' +
        '                <h5> <strong> Mobile Developer & Designer </strong></h5>\n' +
        '                <p>Pharetra in mattis molestie, volutpat elementum justo.</p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '        <div class="team-wrapper">\n' +
        '            <div class="team-inner" style="background-image: url(\'assets/img/team/4.jpg\')">\n' +
        '                <a href="#" target="_blank"> <i class="ion-briefcase"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="description">\n' +
        '                <h3> James Shang</h3>\n' +
        '                <h5> <strong> Sales Representative </strong></h5>\n' +
        '                <p>Cevadis im ampola pa arma uma pindureta. Nam varius eleifend, sed viverra nisl condimentum ut.</p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- TEAM SECTION END -->\n';

    snippets.bs4portfoliocontact = '<!-- CONTACT SECTION START -->\n' +
        '<div class="row text-center header animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n' +
        '        <h3>Contact Details </h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="contact-wrapper">\n' +
        '            <h3>We Are Social</h3>\n' +
        '            <p>\n' +
        '                Aliquam tempus ante placerat, consectetur tellus nec, porttitor nulla.\n' +
        '            </p>\n' +
        '            <div class="social-below">\n' +
        '                <a href="#" class="btn button-custom btn-custom-two"> Facebook</a>\n' +
        '                <a href="#" class="btn button-custom btn-custom-two"> Twitter</a>\n' +
        '                <a href="#" class="btn button-custom btn-custom-two"> Google +</a>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="contact-wrapper">\n' +
        '            <h3>Quick Contact</h3>\n' +
        '            <h4><strong>Email : </strong> info@yuordomain.com </h4>\n' +
        '            <h4><strong>Call : </strong> +55-15-2102-6500 </h4>\n' +
        '            <h4><strong>Skype : </strong> YourSkypeHere </h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="contact-wrapper">\n' +
        '            <h3>Address : </h3>\n' +
        '            <h4>Rua Fernando Silva, 190</h4>\n' +
        '            <h4>Brazil</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!--CONTACT SECTION END-->\n';

    snippets.bs4portfoliosignupform = '<!-- SECTION SIGN UP START -->\n' +
        '<!--\n' +
        '    Must use follow <style>\n' +
        '\n' +
        '        .contact-page {\n' +
        '            padding-top: 20px;\n' +
        '            background: #a02d12;\n' +
        '            margin-top: -10px;\n' +
        '        }\n' +
        '        .center {\n' +
        '            font-size: 12px;\n' +
        '            margin-top: 0;\n' +
        '            margin-bottom: 10px;\n' +
        '            text-align: center;\n' +
        '            color: #fff;\n' +
        '            text-transform: uppercase;\n' +
        '        }\n' +
        '-->\n' +
        '<div class="contact-page">\n' +
        '    <div class="container">\n' +
        '        <div class="center">\n' +
        '            <h2>Sign up to be notified</h2>\n' +
        '        </div>\n' +
        '        <div class="row contact-wrap">\n' +
        '            <div class="status alert alert-success" style="display: none"></div>\n' +
        '            <form id="main-contact-form" class="contact-form" name="contact-form" method="post" action="[change.php]">\n' +
        '                <div class="wow fadeInDown">\n' +
        '                    <div class="col-sm-5 col-sm-offset-1">\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Name *</label>\n' +
        '                            <input type="text" name="name" class="form-control" required="required">\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Email *</label>\n' +
        '                            <input type="email" name="email" class="form-control" required="required">\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Phone *</label> \n' +
        '                            <input type="tel" class="form-control" value="" required="required">\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Company Name</label>\n' +
        '                            <input type="text" class="form-control">\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="wow fadeInRight">\n' +
        '                    <div class="col-sm-5">\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Subject *</label>\n' +
        '                            <input type="text" name="subject" class="form-control" required="required">\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Message *</label>\n' +
        '                            <textarea name="message" id="message" required="required" class="form-control" rows="8"></textarea>\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <button type="submit" name="submit" class="btn btn-primary btn-lg" required="required">Submit Message</button>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </form>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- SECTION SIGN UP END -->\n';

    snippets.bs4portfoliocopyright = '<section id="copyright">\n' +
        '    <div class="container">\n' +
        '        <div class="footer-div center">\n' +
        '            &copy; 2015 YourDomain | <a href="http://www.YourDomain.com/" target="_blank">by Your Company Here</a>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</section>    \n';

    snippets.bs4portfoliosignupcss = '        .contact-page {\n' +
        '            padding-top: 20px;\n' +
        '            background: #a02d12;\n' +
        '            margin-top: -10px;\n' +
        '        }\n' +
        '        \n' +
        '        .center {\n' +
        '            font-size: 12px;\n' +
        '            margin-top: 0;\n' +
        '            margin-bottom: 10px;\n' +
        '            text-align: center;\n' +
        '            color: #fff;\n' +
        '            text-transform: uppercase;\n' +
        '        }\n';

    // Bootsketch : Wireframe theme for Bootstrap 3 Support - https://github.com/Yago/Bootsketch

    snippets.bs4sketchcss = '<link href="sketch/css/bootsketch.css" rel="stylesheet" />\n';
    snippets.bs4sketchjs = '<script src="sketch/js/vendors.min.js"></script>\n';

    // Bootwatch Templates

    snippets.bs4bootswatchcerulean = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/cerulean/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchcosmo = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/cosmo/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchcustom = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/custom/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchcyborg = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/cyborg/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchdarkly = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/darkly/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchflatly = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/flatly/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchjournal = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/journal/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchlumen = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/lumen/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchpaper = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/paper/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchreadble = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/readable/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchsandstone = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/sandstone/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchsimplex = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/simplex/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchslate = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/slate/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchspacelab = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/spacelab/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchsuperhero = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/superhero/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchunited = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/united/bootstrap.min.css" rel="stylesheet" />\n';
    snippets.bs4bootswatchyeti = '<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.5/yeti/bootstrap.min.css" rel="stylesheet" />\n';

    // Data Table and Table Smples- datatable.net


    snippets.bs4datatableinit = '$(document).ready(function() {\n' +
        '$(\'#example \').DataTable();\n' +
        '} );\n';

    snippets.bs4tablesampleheader = '            <thead>\n' +
        '                <tr>\n' +
        '                    <th>Name</th>\n' +
        '                    <th>Position</th>\n' +
        '                    <th>Office</th>\n' +
        '                    <th>Age</th>\n' +
        '                    <th>Start date</th>\n' +
        '                    <th>Salary</th>\n' +
        '                </tr>\n' +
        '            </thead>\n';

    snippets.bs4tablesamplefooter = '            <tfoot>\n' +
        '                <tr>\n' +
        '                    <th>Name</th>\n' +
        '                    <th>Position</th>\n' +
        '                    <th>Office</th>\n' +
        '                    <th>Age</th>\n' +
        '                    <th>Start date</th>\n' +
        '                    <th>Salary</th>\n' +
        '                </tr>\n' +
        '            </tfoot>\n';

    snippets.bs4tablesample = '<table class="table">\n' +
        '    <thead>\n' +
        '        <tr>\n' +
        '            <th>Name</th>\n' +
        '            <th>Position</th>\n' +
        '            <th>Office</th>\n' +
        '            <th>Age</th>\n' +
        '            <th>Start date</th>\n' +
        '            <th>Salary</th>\n' +
        '        </tr>\n' +
        '    </thead>\n' +
        '\n' +
        '    <tfoot>\n' +
        '        <tr>\n' +
        '            <th>Name</th>\n' +
        '            <th>Position</th>\n' +
        '            <th>Office</th>\n' +
        '            <th>Age</th>\n' +
        '            <th>Start date</th>\n' +
        '            <th>Salary</th>\n' +
        '        </tr>\n' +
        '    </tfoot>\n' +
        '\n' +
        '    <tbody>\n' +
        '        \n' +
        '        [insert data here Ex: bs4tablesamplerows10 .. bs4tablesamplerows50]\n' +
        '        \n' +
        '    </tbody>\n' +
        '</table>\n';

    snippets.bs4tablesamplerows10 = '            <tr>\n' +
        '                <td>Tiger Nixon</td>\n' +
        '                <td>System Architect</td>\n' +
        '                <td>Edinburgh</td>\n' +
        '                <td>61</td>\n' +
        '                <td>2011/04/25</td>\n' +
        '                <td>$320,800</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Garrett Winters</td>\n' +
        '                <td>Accountant</td>\n' +
        '                <td>Tokyo</td>\n' +
        '                <td>63</td>\n' +
        '                <td>2011/07/25</td>\n' +
        '                <td>$170,750</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Ashton Cox</td>\n' +
        '                <td>Junior Technical Author</td>\n' +
        '                <td>San Francisco</td>\n' +
        '                <td>66</td>\n' +
        '                <td>2009/01/12</td>\n' +
        '                <td>$86,000</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Cedric Kelly</td>\n' +
        '                <td>Senior Javascript Developer</td>\n' +
        '                <td>Edinburgh</td>\n' +
        '                <td>22</td>\n' +
        '                <td>2012/03/29</td>\n' +
        '                <td>$433,060</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Airi Satou</td>\n' +
        '                <td>Accountant</td>\n' +
        '                <td>Tokyo</td>\n' +
        '                <td>33</td>\n' +
        '                <td>2008/11/28</td>\n' +
        '                <td>$162,700</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Brielle Williamson</td>\n' +
        '                <td>Integration Specialist</td>\n' +
        '                <td>New York</td>\n' +
        '                <td>61</td>\n' +
        '                <td>2012/12/02</td>\n' +
        '                <td>$372,000</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Herrod Chandler</td>\n' +
        '                <td>Sales Assistant</td>\n' +
        '                <td>San Francisco</td>\n' +
        '                <td>59</td>\n' +
        '                <td>2012/08/06</td>\n' +
        '                <td>$137,500</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Rhona Davidson</td>\n' +
        '                <td>Integration Specialist</td>\n' +
        '                <td>Tokyo</td>\n' +
        '                <td>55</td>\n' +
        '                <td>2010/10/14</td>\n' +
        '                <td>$327,900</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Colleen Hurst</td>\n' +
        '                <td>Javascript Developer</td>\n' +
        '                <td>San Francisco</td>\n' +
        '                <td>39</td>\n' +
        '                <td>2009/09/15</td>\n' +
        '                <td>$205,500</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Sonya Frost</td>\n' +
        '                <td>Software Engineer</td>\n' +
        '                <td>Edinburgh</td>\n' +
        '                <td>23</td>\n' +
        '                <td>2008/12/13</td>\n' +
        '                <td>$103,600</td>\n' +
        '            </tr>\n';

    snippets.bs4tablesamplerows20 = snippets.bs4tablesamplerows10 + '                <tr>\n' +
        '                    <td>Jena Gaines</td>\n' +
        '                    <td>Office Manager</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>30</td>\n' +
        '                    <td>2008/12/19</td>\n' +
        '                    <td>$90,560</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Quinn Flynn</td>\n' +
        '                    <td>Support Lead</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>22</td>\n' +
        '                    <td>2013/03/03</td>\n' +
        '                    <td>$342,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Charde Marshall</td>\n' +
        '                    <td>Regional Director</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>36</td>\n' +
        '                    <td>2008/10/16</td>\n' +
        '                    <td>$470,600</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Haley Kennedy</td>\n' +
        '                    <td>Senior Marketing Designer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>43</td>\n' +
        '                    <td>2012/12/18</td>\n' +
        '                    <td>$313,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Tatyana Fitzpatrick</td>\n' +
        '                    <td>Regional Director</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>19</td>\n' +
        '                    <td>2010/03/17</td>\n' +
        '                    <td>$385,750</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Michael Silva</td>\n' +
        '                    <td>Marketing Designer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>66</td>\n' +
        '                    <td>2012/11/27</td>\n' +
        '                    <td>$198,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Paul Byrd</td>\n' +
        '                    <td>Chief Financial Officer (CFO)</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>64</td>\n' +
        '                    <td>2010/06/09</td>\n' +
        '                    <td>$725,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Gloria Little</td>\n' +
        '                    <td>Systems Administrator</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>59</td>\n' +
        '                    <td>2009/04/10</td>\n' +
        '                    <td>$237,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Bradley Greer</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>41</td>\n' +
        '                    <td>2012/10/13</td>\n' +
        '                    <td>$132,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Dai Rios</td>\n' +
        '                    <td>Personnel Lead</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>35</td>\n' +
        '                    <td>2012/09/26</td>\n' +
        '                    <td>$217,500</td>\n' +
        '                </tr>\n';

    snippets.bs4tablesamplerows30 = snippets.bs4tablesamplerows20 + '                <tr>\n' +
        '                    <td>Jenette Caldwell</td>\n' +
        '                    <td>Development Lead</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>30</td>\n' +
        '                    <td>2011/09/03</td>\n' +
        '                    <td>$345,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Yuri Berry</td>\n' +
        '                    <td>Chief Marketing Officer (CMO)</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>40</td>\n' +
        '                    <td>2009/06/25</td>\n' +
        '                    <td>$675,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Caesar Vance</td>\n' +
        '                    <td>Pre-Sales Support</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>21</td>\n' +
        '                    <td>2011/12/12</td>\n' +
        '                    <td>$106,450</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Doris Wilder</td>\n' +
        '                    <td>Sales Assistant</td>\n' +
        '                    <td>Sidney</td>\n' +
        '                    <td>23</td>\n' +
        '                    <td>2010/09/20</td>\n' +
        '                    <td>$85,600</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Angelica Ramos</td>\n' +
        '                    <td>Chief Executive Officer (CEO)</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>47</td>\n' +
        '                    <td>2009/10/09</td>\n' +
        '                    <td>$1,200,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Gavin Joyce</td>\n' +
        '                    <td>Developer</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>42</td>\n' +
        '                    <td>2010/12/22</td>\n' +
        '                    <td>$92,575</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Jennifer Chang</td>\n' +
        '                    <td>Regional Director</td>\n' +
        '                    <td>Singapore</td>\n' +
        '                    <td>28</td>\n' +
        '                    <td>2010/11/14</td>\n' +
        '                    <td>$357,650</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Brenden Wagner</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>28</td>\n' +
        '                    <td>2011/06/07</td>\n' +
        '                    <td>$206,850</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Fiona Green</td>\n' +
        '                    <td>Chief Operating Officer (COO)</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>48</td>\n' +
        '                    <td>2010/03/11</td>\n' +
        '                    <td>$850,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Shou Itou</td>\n' +
        '                    <td>Regional Marketing</td>\n' +
        '                    <td>Tokyo</td>\n' +
        '                    <td>20</td>\n' +
        '                    <td>2011/08/14</td>\n' +
        '                    <td>$163,000</td>\n' +
        '                </tr>\n';

    snippets.bs4tablesamplerows40 = snippets.bs4tablesamplerows30 + '                <tr>\n' +
        '                    <td>Michelle House</td>\n' +
        '                    <td>Integration Specialist</td>\n' +
        '                    <td>Sidney</td>\n' +
        '                    <td>37</td>\n' +
        '                    <td>2011/06/02</td>\n' +
        '                    <td>$95,400</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Suki Burks</td>\n' +
        '                    <td>Developer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>53</td>\n' +
        '                    <td>2009/10/22</td>\n' +
        '                    <td>$114,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Prescott Bartlett</td>\n' +
        '                    <td>Technical Author</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>27</td>\n' +
        '                    <td>2011/05/07</td>\n' +
        '                    <td>$145,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Gavin Cortez</td>\n' +
        '                    <td>Team Leader</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>22</td>\n' +
        '                    <td>2008/10/26</td>\n' +
        '                    <td>$235,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Martena Mccray</td>\n' +
        '                    <td>Post-Sales support</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>46</td>\n' +
        '                    <td>2011/03/09</td>\n' +
        '                    <td>$324,050</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Unity Butler</td>\n' +
        '                    <td>Marketing Designer</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>47</td>\n' +
        '                    <td>2009/12/09</td>\n' +
        '                    <td>$85,675</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Howard Hatfield</td>\n' +
        '                    <td>Office Manager</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>51</td>\n' +
        '                    <td>2008/12/16</td>\n' +
        '                    <td>$164,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Hope Fuentes</td>\n' +
        '                    <td>Secretary</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>41</td>\n' +
        '                    <td>2010/02/12</td>\n' +
        '                    <td>$109,850</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Vivian Harrell</td>\n' +
        '                    <td>Financial Controller</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>62</td>\n' +
        '                    <td>2009/02/14</td>\n' +
        '                    <td>$452,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Timothy Mooney</td>\n' +
        '                    <td>Office Manager</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>37</td>\n' +
        '                    <td>2008/12/11</td>\n' +
        '                    <td>$136,200</td>\n' +
        '                </tr>\n';

    snippets.bs4tablesamplerows50 = snippets.bs4tablesamplerows40 + '                <tr>\n' +
        '                    <td>Jackson Bradshaw</td>\n' +
        '                    <td>Director</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>65</td>\n' +
        '                    <td>2008/09/26</td>\n' +
        '                    <td>$645,750</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Olivia Liang</td>\n' +
        '                    <td>Support Engineer</td>\n' +
        '                    <td>Singapore</td>\n' +
        '                    <td>64</td>\n' +
        '                    <td>2011/02/03</td>\n' +
        '                    <td>$234,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Bruno Nash</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>38</td>\n' +
        '                    <td>2011/05/03</td>\n' +
        '                    <td>$163,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Sakura Yamamoto</td>\n' +
        '                    <td>Support Engineer</td>\n' +
        '                    <td>Tokyo</td>\n' +
        '                    <td>37</td>\n' +
        '                    <td>2009/08/19</td>\n' +
        '                    <td>$139,575</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Thor Walton</td>\n' +
        '                    <td>Developer</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>61</td>\n' +
        '                    <td>2013/08/11</td>\n' +
        '                    <td>$98,540</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Finn Camacho</td>\n' +
        '                    <td>Support Engineer</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>47</td>\n' +
        '                    <td>2009/07/07</td>\n' +
        '                    <td>$87,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Serge Baldwin</td>\n' +
        '                    <td>Data Coordinator</td>\n' +
        '                    <td>Singapore</td>\n' +
        '                    <td>64</td>\n' +
        '                    <td>2012/04/09</td>\n' +
        '                    <td>$138,575</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Zenaida Frank</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>63</td>\n' +
        '                    <td>2010/01/04</td>\n' +
        '                    <td>$125,250</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Zorita Serrano</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>56</td>\n' +
        '                    <td>2012/06/01</td>\n' +
        '                    <td>$115,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Jennifer Acosta</td>\n' +
        '                    <td>Junior Javascript Developer</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>43</td>\n' +
        '                    <td>2013/02/01</td>\n' +
        '                    <td>$75,650</td>\n' +
        '                </tr>\n';

    snippets.bs4datatablesampledata = '<table id="example" class="table table-striped" cellspacing="0" width="100%">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>Name</th>\n' +
        '                <th>Position</th>\n' +
        '                <th>Office</th>\n' +
        '                <th>Age</th>\n' +
        '                <th>Start date</th>\n' +
        '                <th>Salary</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        ' \n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>Name</th>\n' +
        '                <th>Position</th>\n' +
        '                <th>Office</th>\n' +
        '                <th>Age</th>\n' +
        '                <th>Start date</th>\n' +
        '                <th>Salary</th>\n' +
        '            </tr>\n' +
        '        </tfoot>\n' +
        ' \n' +
        '        <tbody>\n' +
        snippets.bs4tablesamplerows50 +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4csvimportjs = '       $(document).ready(function() {\n' +
        '\n' +
        '            if (isAPIAvailable()) {\n' +
        '                $(\'#files\').bind(\'change\', handleFileSelect);\n' +
        '            }\n' +
        '\n' +
        '        });\n' +
        '\n' +
        '        function isAPIAvailable() {\n' +
        '            if (window.File && window.FileReader && window.FileList && window.Blob) {\n' +
        '                return true;\n' +
        '            } else {\n' +
        '                document.writeln(\'The HTML5 APIs used in this form are only available in the following browsers:<br />\');\n' +
        '                document.writeln(\' - Google Chrome: 13.0 or later<br />\');\n' +
        '                document.writeln(\' - Mozilla Firefox: 6.0 or later<br />\');\n' +
        '                document.writeln(\' - Internet Explorer: Not supported (partial support expected in 10.0)<br />\');\n' +
        '                document.writeln(\' - Safari: Not supported<br />\');\n' +
        '                document.writeln(\' - Opera: Not supported\');\n' +
        '                return false;\n' +
        '            }\n' +
        '        }\n' +
        '\n' +
        '        function handleFileSelect(evt) {\n' +
        '            var files = evt.target.files;\n' +
        '            var file = files[0];\n' +
        '            var reader = new FileReader();\n' +
        '            reader.readAsText(file);\n' +
        '            reader.onload = function(event) {\n' +
        '                var csv = event.target.result;\n' +
        '                var data = $.csv.toArrays(csv);\n' +
        '                var html = \'<thead>\';\n' +
        '                var thend = \'</thead>\';\n' +
        '                var rowtag = \'th\';\n' +
        '\n' +
        '                for (var row in data) {\n' +
        '                    html += \'<tr>\';\n' +
        '                    for (var item in data[row]) {\n' +
        '                        html += \'<\' + rowtag + \'>\' + data[row][item] + \'</\' + rowtag + \'>\';\n' +
        '                    }\n' +
        '                    html += \'</tr>\';\n' +
        '                    html += thend;\n' +
        '                    thend = \'\';\n' +
        '                    rowtag = \'td\';\n' +
        '                }\n' +
        '                $(\'#contents\').html(html);\n' +
        '                $(\'#contents\').DataTable();\n' +
        '            };\n' +
        '            reader.onerror = function() {\n' +
        '                alert(\'Unable to read \' + file.fileName);\n' +
        '            };\n' +
        '        }\n';

    snippets.bs4fileupload = '        <div class="fileinput fileinput-new input-group" data-provides="fileinput">\n' +
        '            <div class="form-control" data-trigger="fileinput"><i class="glyphicon glyphicon-file fileinput-exists"></i> <span class="fileinput-filename"></span></div>\n' +
        '            <span class="input-group-addon btn btn-secondary btn-file"><span class="fileinput-new">Select file</span><span class="fileinput-exists">Change</span>\n' +
        '            <input id="files" type="file" class="file" name="files[]">\n' +
        '            </span>\n' +
        '            <a href="#" class="input-group-addon btn btn-secondary fileinput-exists" data-dismiss="fileinput">Remove</a>\n' +
        '        </div>        \n';

    // Bootstrap 3 Media Queries

    /*==========  Mobile First Method  ==========*/

    snippets.bs4mqfmdesktops = '@media only screen and (min-width : 992px) {\n\n}\n';
    snippets.bs4mqfmextrasmalldevices = '@media only screen and (min-width : 480px) {\n\n}';
    snippets.bs4mqfmiphoneretina = '@media only screen and (min-width : 320px) {\n\n}\n';
    snippets.bs4mqfmlargedevices = '@media only screen and (min-width : 1200px) {\n\n}\n';
    snippets.bs4mqfmmediumdevices = '@media only screen and (min-width : 992px) {\n\n}\n';
    snippets.bs4mqfmphones = '@media only screen and (min-width : 480px) {\n\n}';
    snippets.bs4mqfmsmalldevices = '@media only screen and (min-width : 768px) {\n\n}\n';
    snippets.bs4mqfmtablets = '@media only screen and (min-width : 768px) {\n\n}\n';
    snippets.bs4mqfmwidescreen = '@media only screen and (min-width : 1200px) {\n\n}\n';

    /*==========  Non-Mobile First Method  ==========*/

    snippets.bs4mqdesktops = '@media only screen and (max-width : 992px) {\n\n}\n';
    snippets.bs4mqextrasmalldevices = '@media only screen and (max-width : 480px) {\n\n}\n';
    snippets.bs4mqiphoneretina = '@media only screen and (max-width : 320px) {\n\n}\n';
    snippets.bs4mqlargedevices = '@media only screen and (max-width : 1200px) {\n\n}\n';
    snippets.bs4mqmediumdevices = '@media only screen and (max-width : 992px) {\n\n}\n';
    snippets.bs4mqphones = '@media only screen and (max-width : 480px) {\n\n}\n';
    snippets.bs4mqsmalldevices = '@media only screen and (max-width : 768px) {\n\n}\n';
    snippets.bs4mqtablets = '@media only screen and (max-width : 768px) {\n\n}\n';
    snippets.bs4mqwidescreens = '@media only screen and (max-width : 1200px) {\n\n}\n';

    // Ipsum Lorem

    snippets.bs4lorem = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet nisl. Praesent sed leo congue, fringilla eros eu, tempus metus. Nam mollis odio ipsum, non vehicula ipsum accumsan sodales. Morbi varius vitae elit euismod cursus. Donec a dapibus justo, in facilisis nisi. Suspendisse ut turpis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui risus, tincidunt at odio ut, ultrices dignissim ipsum. Cras ultrices erat nec leo luctus varius. Nulla sollicitudin tincidunt nulla, ut porta mauris volutpat vitae. Suspendisse ornare dolor sit amet massa venenatis pulvinar.</p>\n';


    /*============ Jasny Bootstrap ===================*/

    // Jasny Bootstrap
    //
    // Bring Bootstrap's components to life with over a dozen custom jQuery plugins. Easily include them all, or one by one.
    //
    // Author: Arnold Daniels - arnold@jasny.net
    // http://www.jasny.net/
    // Project: https://github.com/jasny/bootstrap
    //


    // Jasny CDN
    //--------------------------------------------------------------------------

    snippets.bs4jsncdncss = '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/css/jasny-bootstrap.min.css">\n';
    snippets.bs4jsncdnjs = '<script src="//cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min.js"></script>\n';

    // Bootstrap Minimum Jasny Templates
    //--------------------------------------------------------------------------

    snippets.bs4jsnhtml = "<!DOCTYPE html>\n\n";
    snippets.bs4jsnhtml += "<html lang=\"en\">\n\n";
    snippets.bs4jsnhtml += "<head>\n\n";
    snippets.bs4jsnhtml += "    <meta charset=\"utf-8\">\n\n";
    snippets.bs4jsnhtml += "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n";
    snippets.bs4jsnhtml += "    <meta name=\"description\" content=\"\">\n\n";
    snippets.bs4jsnhtml += "    <meta name=\"author\" content=\"\">\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "    <title>Bootstrap Jasny Minimum HTML Template<\/title>\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "    <link rel=\"stylesheet\" media=\"screen\" href=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.5\/css\/bootstrap.min.css\">\n\n";
    snippets.bs4jsnhtml += "    <link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/dist\/css\/jasny-bootstrap.min.css\">\n\n";
    snippets.bs4jsnhtml += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu-reveal\/navmenu-reveal.css\"-->\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "    <style>\n\n";
    snippets.bs4jsnhtml += "    <\/style>\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n\n";
    snippets.bs4jsnhtml += "    <!--[if lt IE 9]><script src=\"..\/..\/docs-assets\/js\/ie8-responsive-file-warning.js\"><\/script><![endif]-->\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n\n";
    snippets.bs4jsnhtml += "    <!--[if lt IE 9]>\n\n";
    snippets.bs4jsnhtml += "      <script src=\"https:\/\/oss.maxcdn.com\/libs\/html5shiv\/3.7.0\/html5shiv.js\"><\/script>\n\n";
    snippets.bs4jsnhtml += "      <script src=\"https:\/\/oss.maxcdn.com\/libs\/respond.js\/1.4.2\/respond.min.js\"><\/script>\n\n";
    snippets.bs4jsnhtml += "    <![endif]-->\n\n";
    snippets.bs4jsnhtml += "    \n\n";
    snippets.bs4jsnhtml += "<\/head>\n\n";
    snippets.bs4jsnhtml += "<body>\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/jquery\/1.11.3\/jquery.min.js\"><\/script>\n\n";
    snippets.bs4jsnhtml += "    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.5\/js\/bootstrap.min.js\"><\/script>\n\n";
    snippets.bs4jsnhtml += "    <script src=\"http:\/\/www.jasny.net\/bootstrap\/dist\/js\/jasny-bootstrap.min.js\"><\/script>\n\n";
    snippets.bs4jsnhtml += "    \n\n";
    snippets.bs4jsnhtml += "<\/body>\n\n";
    snippets.bs4jsnhtml += "<\/html>\n\n";


    snippets.bs4jsnhtmlnavbar = "<!DOCTYPE html>\n";
    snippets.bs4jsnhtmlnavbar += "<html lang=\"en\">\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "<head>\n";
    snippets.bs4jsnhtmlnavbar += "    <meta charset=\"utf-8\">\n";
    snippets.bs4jsnhtmlnavbar += "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n";
    snippets.bs4jsnhtmlnavbar += "    <meta name=\"description\" content=\"\">\n";
    snippets.bs4jsnhtmlnavbar += "    <meta name=\"author\" content=\"\">\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <title>Bootstrap Jasny Minimum HTML Template<\/title>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <link rel=\"stylesheet\" media=\"screen\" href=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.5\/css\/bootstrap.min.css\">\n";
    snippets.bs4jsnhtmlnavbar += "    <link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/dist\/css\/jasny-bootstrap.min.css\">\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu-reveal\/navmenu-reveal.css\"-->\n";
    snippets.bs4jsnhtmlnavbar += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu-push\/navmenu-push.css\"-->\n";
    snippets.bs4jsnhtmlnavbar += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu\/navmenu.css\"-->\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <style>\n";
    snippets.bs4jsnhtmlnavbar += "        body {\n";
    snippets.bs4jsnhtmlnavbar += "            padding-top: 50px;\n";
    snippets.bs4jsnhtmlnavbar += "        }\n";
    snippets.bs4jsnhtmlnavbar += "        \n";
    snippets.bs4jsnhtmlnavbar += "        .starter-template {\n";
    snippets.bs4jsnhtmlnavbar += "            padding: 40px 15px;\n";
    snippets.bs4jsnhtmlnavbar += "            text-align: center;\n";
    snippets.bs4jsnhtmlnavbar += "        }\n";
    snippets.bs4jsnhtmlnavbar += "    <\/style>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n";
    snippets.bs4jsnhtmlnavbar += "    <!--[if lt IE 9]><script src=\"..\/..\/docs-assets\/js\/ie8-responsive-file-warning.js\"><\/script><![endif]-->\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n";
    snippets.bs4jsnhtmlnavbar += "    <!--[if lt IE 9]>\n";
    snippets.bs4jsnhtmlnavbar += "      <script src=\"https:\/\/oss.maxcdn.com\/libs\/html5shiv\/3.7.0\/html5shiv.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbar += "      <script src=\"https:\/\/oss.maxcdn.com\/libs\/respond.js\/1.4.2\/respond.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbar += "    <![endif]-->\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "<\/head>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "<body>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <div class=\"navbar navbar-inverse navbar-fixed-top\">\n";
    snippets.bs4jsnhtmlnavbar += "        <div class=\"container\">\n";
    snippets.bs4jsnhtmlnavbar += "            <div class=\"navbar-header\">\n";
    snippets.bs4jsnhtmlnavbar += "                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n";
    snippets.bs4jsnhtmlnavbar += "                    <span class=\"icon-bar\"><\/span>\n";
    snippets.bs4jsnhtmlnavbar += "                    <span class=\"icon-bar\"><\/span>\n";
    snippets.bs4jsnhtmlnavbar += "                    <span class=\"icon-bar\"><\/span>\n";
    snippets.bs4jsnhtmlnavbar += "                <\/button>\n";
    snippets.bs4jsnhtmlnavbar += "                <a class=\"navbar-brand\" href=\"#\">Project name<\/a>\n";
    snippets.bs4jsnhtmlnavbar += "            <\/div>\n";
    snippets.bs4jsnhtmlnavbar += "            <div class=\"collapse navbar-collapse\">\n";
    snippets.bs4jsnhtmlnavbar += "                <ul class=\"nav navbar-nav\">\n";
    snippets.bs4jsnhtmlnavbar += "                    <li class=\"active\"><a href=\"#\">Home<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbar += "                    <li><a href=\"#about\">About<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbar += "                    <li><a href=\"#contact\">Contact<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbar += "                <\/ul>\n";
    snippets.bs4jsnhtmlnavbar += "            <\/div>\n";
    snippets.bs4jsnhtmlnavbar += "            <!--\/.nav-collapse -->\n";
    snippets.bs4jsnhtmlnavbar += "        <\/div>\n";
    snippets.bs4jsnhtmlnavbar += "    <\/div>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <div class=\"container\">\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "        <div class=\"starter-template\">\n";
    snippets.bs4jsnhtmlnavbar += "            <h1>Bootstrap starter template<\/h1>\n";
    snippets.bs4jsnhtmlnavbar += "            <p class=\"lead\">Use this document as a way to quickly start any new project.\n";
    snippets.bs4jsnhtmlnavbar += "                <br> All you get is this text and a mostly barebones HTML document.<\/p>\n";
    snippets.bs4jsnhtmlnavbar += "        <\/div>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <\/div>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/jquery\/1.11.3\/jquery.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbar += "    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.5\/js\/bootstrap.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbar += "    <script src=\"http:\/\/www.jasny.net\/bootstrap\/dist\/js\/jasny-bootstrap.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "<\/body>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "<\/html>\n";


    snippets.bs4jsnhtmlnavbaroffcanvas = "<!DOCTYPE html>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "<html lang=\"en\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "<head>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <meta charset=\"utf-8\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <meta name=\"description\" content=\"\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <meta name=\"author\" content=\"\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <title>Bootstrap Jasny Minimum HTML Template<\/title>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <link rel=\"stylesheet\" media=\"screen\" href=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.5\/css\/bootstrap.min.css\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/dist\/css\/jasny-bootstrap.min.css\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu-reveal\/navmenu-reveal.css\"-->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu-push\/navmenu-push.css\"-->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu\/navmenu.css\"-->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <style>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        body {\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            padding-top: 80px;\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            padding-bottom: 20px;\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        }\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        \n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        @media (min-width: 992px) {\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            .navbar {\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                padding-right: 15px;\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            }\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        }\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <\/style>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!--[if lt IE 9]><script src=\"..\/..\/docs-assets\/js\/ie8-responsive-file-warning.js\"><\/script><![endif]-->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!--[if lt IE 9]>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "      <script src=\"https:\/\/oss.maxcdn.com\/libs\/html5shiv\/3.7.0\/html5shiv.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "      <script src=\"https:\/\/oss.maxcdn.com\/libs\/respond.js\/1.4.2\/respond.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <![endif]-->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "<\/head>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "<body>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <div class=\"container\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <div class=\"navbar navbar-fixed-top navbar-default\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            <div class=\"navbar-header\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"offcanvas\" data-target=\".navbar-offcanvas\" data-canvas=\"body\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <span class=\"icon-bar\"><\/span>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <span class=\"icon-bar\"><\/span>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <span class=\"icon-bar\"><\/span>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                <\/button>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                <a class=\"navbar-brand\" href=\"#\">Project name<\/a>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            <\/div>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            <div class=\"navbar-offcanvas offcanvas\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                <a class=\"navmenu-brand\" href=\"#\">Project name<\/a>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                <ul class=\"nav navbar-nav\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <li><a href=\"#\">Home<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <li><a href=\"#\">Projects<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <li><a href=\"#\">Portfolio<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <li class=\"active\"><a href=\"#\">Our Team<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <li class=\"dropdown\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">More... <b class=\"caret\"><\/b><\/a>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                        <ul class=\"dropdown-menu\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li><a href=\"#\">Action<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li><a href=\"#\">Another action<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li><a href=\"#\">Something else here<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li class=\"divider\"><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li class=\"dropdown-header\">Nav header<\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li><a href=\"#\">Separated link<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li><a href=\"#\">One more separated link<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                        <\/ul>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                <\/ul>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            <\/div>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <\/div>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <!-- Main component for a primary marketing message or call to action -->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <div class=\"jumbotron\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            <h1>Offcanvas Navbar example<\/h1>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            <p>This example demonstrates using the offcanvas plugin with the navbar.<\/p>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <\/div>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <p>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            By default the navbar is show on the right side of the screen. You can show it on the left side instead by adding <code>.navmenu-fixed-left<\/code> to the <code>.navbar-offcanvas<\/code>.\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <\/p>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <\/div>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/jquery\/1.11.3\/jquery.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.5\/js\/bootstrap.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <script src=\"http:\/\/www.jasny.net\/bootstrap\/dist\/js\/jasny-bootstrap.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "<\/body>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "<\/html>\n";









    // Container
    //-------------------------------------------------------------------------------------

    // Added .container-smooth a container to use the same max-width for all viewport sizes. This means that the container size won't jump at media query breakpoints.
    snippets.bs4jsncontainer = '<div class="container container-smooth">\n\n</div>\n\n\n';

    // Buttons
    //-------------------------------------------------------------------------------------

    // Standard button with label
    snippets.bs4jsnbtnleft = '<button type="button" class="btn btn-labeled btn-secondary"><span class="btn-label"><i class="glyphicon glyphicon-arrow-left"></i></span>Left</button>\n';

    // Standard button with label on the right side
    snippets.bs4jsnbtnright = '<button type="button" class="btn btn-labeled btn-secondary">Right<span class="btn-label btn-label-right"><i class="glyphicon glyphicon-arrow-right"></i></span></button>\n';

    // Success button with label
    snippets.bs4jsnbtnsuccess = '<button type="button" class="btn btn-labeled btn-success"><span class="btn-label"><i class="glyphicon glyphicon-ok"></i></span>Success</button>\n';

    // Danger button with label
    //    snippets.<button type="button" class="btn btn-labeled btn-danger"><span class="btn-label"><i class="glyphicon glyphicon-remove"></i></span>Danger</button>
    // = '<button type="button" class="btn btn-labeled btn-danger"><span class="btn-label"><i class="glyphicon glyphicon-remove"></i></span>Danger</button>\n';


    // Navmenu
    //--------------------------------------------------------------------------------------


    // Body padding required
    // The fixed navmenu will overlay your other content, unless you add padding to the left or right of the <body>. Try out your own values or use our snippet below. Tip: By default, the navmenu is 300px wide.
    //
    // @media (min-width: 992px) {
    //   body {
    //     padding-left: 300px;
    //  }
    // }
    snippets.bs4jsnnavmenumediaquery = "@media (min-width: 992px) {\n";
    snippets.bs4jsnnavmenumediaquery += "  body {\n";
    snippets.bs4jsnnavmenumediaquery += "    padding-left: 300px;\n";
    snippets.bs4jsnnavmenumediaquery += "  }\n";
    snippets.bs4jsnnavmenumediaquery += "}\n";

    // Default

    snippets.bs4jsnnavmenu = "<nav class=\"navmenu navmenu-default\" role=\"navigation\">\n\n";
    snippets.bs4jsnnavmenu += "  <a class=\"navmenu-brand\" href=\"#\">Brand<\/a>\n\n";
    snippets.bs4jsnnavmenu += "\n\n";
    snippets.bs4jsnnavmenu += "  <ul class=\"nav navmenu-nav\">\n\n";
    snippets.bs4jsnnavmenu += "    <li class=\"active\"><a href=\"#\">Link<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "    <li><a href=\"#\">Link<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "    <li class=\"dropdown\">\n\n";
    snippets.bs4jsnnavmenu += "      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"><\/b><\/a>\n\n";
    snippets.bs4jsnnavmenu += "      <ul class=\"dropdown-menu navmenu-nav\" role=\"menu\">\n\n";
    snippets.bs4jsnnavmenu += "        <li><a href=\"#\">Action<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "        <li><a href=\"#\">Another action<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "        <li><a href=\"#\">Something else here<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "        <li><a href=\"#\">Separated link<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "        <li><a href=\"#\">One more separated link<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "      <\/ul>\n\n";
    snippets.bs4jsnnavmenu += "    <\/li>\n\n";
    snippets.bs4jsnnavmenu += "  <\/ul>\n\n";
    snippets.bs4jsnnavmenu += "<\/nav>\n\n";


    // navmenu BODY
    var navmenubody = "        <a class=\"navmenu-brand visible-md visible-lg\" href=\"#\">Project name<\/a>\n";
    navmenubody += "        <ul class=\"nav navmenu-nav\">\n";
    navmenubody += "            <li class=\"active\"><a href=\"#\">Home<\/a><\/li>\n";
    navmenubody += "            <li><a href=\"#\">Components<\/a><\/li>\n";
    navmenubody += "            <li><a href=\"#\">Programming<\/a><\/li>\n";
    navmenubody += "            <li><a href=\"#\">Tutorials<\/a><\/li>\n";
    navmenubody += "        <\/ul>\n";
    navmenubody += "        <ul class=\"nav navmenu-nav\">\n";
    navmenubody += "            <li><a href=\"#\">Link<\/a><\/li>\n";
    navmenubody += "            <li><a href=\"#\">Link<\/a><\/li>\n";
    navmenubody += "            <li><a href=\"#\">Link<\/a><\/li>\n";
    navmenubody += "            <li class=\"dropdown\">\n";
    navmenubody += "                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"><\/b><\/a>\n";
    navmenubody += "                <ul class=\"dropdown-menu navmenu-nav\">\n";
    navmenubody += "                    <li><a href=\"#\">Action<\/a><\/li>\n";
    navmenubody += "                    <li><a href=\"#\">Another action<\/a><\/li>\n";
    navmenubody += "                    <li><a href=\"#\">Something else here<\/a><\/li>\n";
    navmenubody += "                    <li class=\"divider\"><\/li>\n";
    navmenubody += "                    <li class=\"dropdown-header\">Nav header<\/li>\n";
    navmenubody += "                    <li><a href=\"#\">Separated link<\/a><\/li>\n";
    navmenubody += "                    <li><a href=\"#\">One more separated link<\/a><\/li>\n";
    navmenubody += "                <\/ul>\n";
    navmenubody += "            <\/li>\n";
    navmenubody += "        <\/ul>\n";
    navmenubody += "    <\/div>\n";
    navmenubody += "\n";
    navmenubody += "    <div class=\"navbar navbar-default navbar-fixed-top hidden-md hidden-lg\">\n";
    navmenubody += "        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"offcanvas\" data-target=\".navmenu\">\n";
    navmenubody += "            <span class=\"icon-bar\"><\/span>\n";
    navmenubody += "            <span class=\"icon-bar\"><\/span>\n";
    navmenubody += "            <span class=\"icon-bar\"><\/span>\n";
    navmenubody += "        <\/button>\n";
    navmenubody += "        <a class=\"navbar-brand\" href=\"#\">Project name<\/a>\n";
    navmenubody += "    <\/div>\n";
    navmenubody += "\n";
    navmenubody += "    <div class=\"container\">\n";
    navmenubody += "        <div class=\"page-header\">\n";
    navmenubody += "            <h1>Navmenu Template<\/h1>\n";
    navmenubody += "        <\/div>\n";
    navmenubody += "        <p class=\"lead\">This example shows the navmenu element. If the viewport is <b>less than 992px<\/b> the menu will be placed the off canvas and will be shown with a slide in effect.<\/p>\n";
    navmenubody += "        <p>Also take a look at the examples for a navmenu with <a href=\"..\/navmenu-push\">push effect<\/a> and <a href=\"..\/navmenu-reveal\">reveal effect<\/a>.<\/p>\n";
    navmenubody += "    <\/div>\n";
    navmenubody += "\n";

    var navmenuoffcanvas = "        <a class=\"navmenu-brand\" href=\"#\">Project name<\/a>\n\n";
    navmenuoffcanvas += "        <ul class=\"nav navmenu-nav\">\n\n";
    navmenuoffcanvas += "            <li><a href=\"#\">Home<\/a><\/li>\n\n";
    navmenuoffcanvas += "            <li><a href=\"#\">Components<\/a><\/li>\n\n";
    navmenuoffcanvas += "            <li class=\"active\"><a href=\"#\">Programming<\/a><\/li>\n\n";
    navmenuoffcanvas += "            <li><a href=\"#\">Tutorials<\/a><\/li>\n\n";
    navmenuoffcanvas += "        <\/ul>\n\n";
    navmenuoffcanvas += "        <ul class=\"nav navmenu-nav\">\n\n";
    navmenuoffcanvas += "            <li><a href=\"#\">Link<\/a><\/li>\n\n";
    navmenuoffcanvas += "            <li><a href=\"#\">Link<\/a><\/li>\n\n";
    navmenuoffcanvas += "            <li><a href=\"#\">Link<\/a><\/li>\n\n";
    navmenuoffcanvas += "            <li class=\"dropdown\">\n\n";
    navmenuoffcanvas += "                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"><\/b><\/a>\n\n";
    navmenuoffcanvas += "                <ul class=\"dropdown-menu navmenu-nav\">\n\n";
    navmenuoffcanvas += "                    <li><a href=\"#\">Action<\/a><\/li>\n\n";
    navmenuoffcanvas += "                    <li><a href=\"#\">Another action<\/a><\/li>\n\n";
    navmenuoffcanvas += "                    <li><a href=\"#\">Something else here<\/a><\/li>\n\n";
    navmenuoffcanvas += "                    <li class=\"divider\"><\/li>\n\n";
    navmenuoffcanvas += "                    <li class=\"dropdown-header\">Nav header<\/li>\n\n";
    navmenuoffcanvas += "                    <li><a href=\"#\">Separated link<\/a><\/li>\n\n";
    navmenuoffcanvas += "                    <li><a href=\"#\">One more separated link<\/a><\/li>\n\n";
    navmenuoffcanvas += "                <\/ul>\n\n";
    navmenuoffcanvas += "            <\/li>\n\n";
    navmenuoffcanvas += "        <\/ul>\n\n";
    navmenuoffcanvas += "    <\/div>\n\n";
    navmenuoffcanvas += "    <div class=\"canvas\">\n\n";
    navmenuoffcanvas += "        <div class=\"navbar navbar-default navbar-fixed-top\">\n\n";
    navmenuoffcanvas += "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"offcanvas\" data-recalc=\"false\" data-target=\".navmenu\" data-canvas=\".canvas\">\n\n";
    navmenuoffcanvas += "                <span class=\"icon-bar\"><\/span>\n\n";
    navmenuoffcanvas += "                <span class=\"icon-bar\"><\/span>\n\n";
    navmenuoffcanvas += "                <span class=\"icon-bar\"><\/span>\n\n";
    navmenuoffcanvas += "            <\/button>\n\n";
    navmenuoffcanvas += "        <\/div>\n\n";
    navmenuoffcanvas += "\n\n";
    navmenuoffcanvas += "        <div class=\"container\">\n\n";
    navmenuoffcanvas += "            <div class=\"page-header\">\n\n";
    navmenuoffcanvas += "                <h1>Off Canvas Reveal Menu Template<\/h1>\n\n";
    navmenuoffcanvas += "            <\/div>\n\n";
    navmenuoffcanvas += "            <p class=\"lead\">This example demonstrates the use of the offcanvas plugin with a reveal effect.<\/p>\n\n";
    navmenuoffcanvas += "            <p>On the contrary of the push effect, the menu doesn't move with the canvas.<\/p>\n\n";
    navmenuoffcanvas += "            <p>You get the reveal effect by wrapping the content in a div and setting the <code>canvas<\/code> option to target that div.<\/p>\n\n";
    navmenuoffcanvas += "            <p>Note that in this example, the navmenu doesn't have the <code>offcanvas<\/code> class, but is placed under the canvas by setting the <code>z-index<\/code>.<\/p>\n\n";
    navmenuoffcanvas += "            <p>Also take a look at the examples for a navmenu with <a href=\"..\/navmenu\">slide in effect<\/a> and <a href=\"..\/navmenu-push\">push effect<\/a>.<\/p>\n\n";
    navmenuoffcanvas += "        <\/div>\n\n";
    navmenuoffcanvas += "\n\n";

    // Fixed to left or right
    // Add either .navmenu-fixed-left or .navmenu-fixed-right.

    snippets.bs4jsnnavmenufixedleft = "    <div class=\"navmenu navmenu-default navmenu-fixed-left offcanvas-sm\">" + navmenubody;
    snippets.bs4jsnnavmenufixedright = "    <div class=\"navmenu navmenu-default navmenu-fixed-right offcanvas-sm\">" + navmenubody;
    snippets.bs4jsnnavmenuoffcanvasreveal = "    <div class=\"navmenu navmenu-default navmenu-fixed-left\">\n" + navmenuoffcanvas;
    snippets.bs4jsnnavmenuoffcanvaspush = "    <div class=\"navmenu navmenu-default navmenu-fixed-left offcanvas\">" + navmenuoffcanvas;




    // Dữ liệu 

    snippets.bs4jsninputmask = '<input type="text" class="form-control" data-mask="999-99-999-9999-9" placeholder="ISBN">\n';

    snippets.bs4jsnfileselect = "    <div class=\"fileinput fileinput-new input-group\" data-provides=\"fileinput\">\n";
    snippets.bs4jsnfileselect += "        <div class=\"form-control\" data-trigger=\"fileinput\"><i class=\"glyphicon glyphicon-file fileinput-exists\"><\/i> <span class=\"fileinput-filename\"><\/span><\/div>\n";
    snippets.bs4jsnfileselect += "        <span class=\"input-group-addon btn btn-secondary btn-file\"><span class=\"fileinput-new\">Select file<\/span><span class=\"fileinput-exists\">Change<\/span>\n";
    snippets.bs4jsnfileselect += "        <input type=\"file\" name=\"...\">\n";
    snippets.bs4jsnfileselect += "        <\/span>\n";
    snippets.bs4jsnfileselect += "        <a href=\"#\" class=\"input-group-addon btn btn-secondary fileinput-exists\" data-dismiss=\"fileinput\">Remove<\/a>\n";
    snippets.bs4jsnfileselect += "    <\/div>\n";
    snippets.bs4jsnfileselect += "\n";

    snippets.bs4jsnbtnfileselect = "    <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n";
    snippets.bs4jsnbtnfileselect += "  <span class=\"btn btn-secondary btn-file\"><span class=\"fileinput-new\">Select file<\/span><span class=\"fileinput-exists\">Change<\/span><input type=\"file\" name=\"...\"><\/span>\n";
    snippets.bs4jsnbtnfileselect += "  <span class=\"fileinput-filename\"><\/span>\n";
    snippets.bs4jsnbtnfileselect += "  <a href=\"#\" class=\"close fileinput-exists\" data-dismiss=\"fileinput\" style=\"float: none\">&times;<\/a>\n";
    snippets.bs4jsnbtnfileselect += "<\/div>\n";

    snippets.bs4jsnuploadimage = "<div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n";
    snippets.bs4jsnuploadimage += "  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\" style=\"width: 200px; height: 150px;\"><\/div>\n";
    snippets.bs4jsnuploadimage += "  <div>\n";
    snippets.bs4jsnuploadimage += "    <span class=\"btn btn-secondary btn-file\"><span class=\"fileinput-new\">Select image<\/span><span class=\"fileinput-exists\">Change<\/span><input type=\"file\" name=\"...\"><\/span>\n";
    snippets.bs4jsnuploadimage += "    <a href=\"#\" class=\"btn btn-secondary fileinput-exists\" data-dismiss=\"fileinput\">Remove<\/a>\n";
    snippets.bs4jsnuploadimage += "  <\/div>\n";
    snippets.bs4jsnuploadimage += "<\/div>\n";

    // Thư viện bổ sung bổ sung
    // Phong cách sử dụng ngoài khóa học - https://rawgit.com/acbarbosa1964/bootstrap-course-template/master/index.html
    //

    snippets.bs4cdnanimatecss = '<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css">\n';
    snippets.bs4cdnanimationscss = '<link rel="stylesheet" media="screen" href="http://cdn.akoake.com/v/animations/2.1/css/animations.min.css">\n';
    snippets.bs4cdnanimationsjs = '<script src="http://cdn.akoake.com/v/animations/2.1/js/animations.min.js"></script>\n';
    snippets.bs4cdnappearjs = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.appear/0.3.3/jquery.appear.min.js"></script>\n';
    snippets.bs4cdnbackbonejs = '<script src="http://cdn.akoake.com/v/animations/2.1/js/backbone.js"></script>\n';
    snippets.bs4cdneasingjs = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>\n';
    snippets.bs4cdnfancyboxcss = '<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css">\n';
    snippets.bs4cdnfancyboxjs = '<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.js"></script>\n';
    snippets.bs4cdnfontawesomecss = '<link rel="stylesheet" media="screen" href="http://cdn.akoake.com/v/font-awesome/4.4.0/css/font-awesome.min.css">\n';
    snippets.bs4cdnfoodcart = '<link rel="stylesheet" media="screen" href="http://cdn.akoake.com/bbb/foodcart.css">\n';
    snippets.bs4cdnioniconscss = '<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">\n';
    snippets.bs4cdnisotopejs = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/2.2.2/isotope.pkgd.min.js"></script>\n';
    snippets.bs4cdnpagecurlcss = '<link rel="stylesheet" media="screen" href="http://cdn.akoake.com/v/animations/2.1/css/animations.min.css">\n';
    snippets.bs4cdnsmoothscrolljs = '<script src="http://cdn.akoake.com/v/animations/2.1/js/smoothscroll.min.js"></script>\n';
    snippets.bs4cdnstylebluecss = '<link rel="stylesheet" media="screen" href="http://cdn.akoake.com/bbb/style-blue.css">\n';
    snippets.bs4cdnstylegreencss = '<link rel="stylesheet" media="screen" href="http://cdn.akoake.com/bbb/style-green.css">\n';
    snippets.bs4cdnstyleredcss = '<link rel="stylesheet" media="screen" href="http://cdn.akoake.com/bbb/style-red.css">\n';
    snippets.bs4cdnstylesolidblackcss = '<link rel="stylesheet" media="screen" href="http://cdn.akoake.com/bbb/style-solid-black.css">\n';
    snippets.bs4cdnstylesolidredcss = '<link rel="stylesheet" media="screen" href="http://cdn.akoake.com/bbb/style-solid-red.css">\n';
    snippets.bs4cdnstyleyellowcss = '<link rel="stylesheet" media="screen" href="http://cdn.akoake.com/bbb/style-yellow.css">\n';
    snippets.bs4cdnvegascss = '<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/vegas/2.1.3/vegas.min.css">\n';
    snippets.bs4cdnvegasjs = '<script src="https://cdnjs.cloudflare.com/ajax/libs/vegas/2.1.3/vegas.min.js"></script>\n';
    snippets.bs4cdnwowjs = '<script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>\n';









    module.exports = snippets;
});
