( function ( $ ) {
  $.fn.fontface = function ( options ) {
    var stacks = {
        serif: ", Times New Roman , serif",
        sansserif: ", Helvetica, Arial, sans-serif"
      },
      defaults = {
        filePath: "/fonts/", //change this to your font directory location
        fontFamily: "sans-serif",
        fontStack: false,
        fontStretch: "normal",
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal"
      },
      options = $.extend( defaults, options );

    options.fontFile = options.filePath + options.fileName;

    if ( options.fontStack || options.fontFamily === "sans-serif" ) {
      if ( options.fontStack && options.fontStack.indexOf( ", " ) === -1 ) {
        options.fontFamily = options.fontName + stacks[ options.fontStack ];
      }
      else if ( options.fontStack && options.fontStack.indexOf( ", " ) !== -1 ) {
        var concat = ( options.fontStack.substring( 0, 2 ) !== ", " ) ? "" : ", ";
        options.fontFamily = options.fontName + concat + options.fontStack;
      }
      else {
        options.fontFamily = options.fontName + stacks.sansserif
      }
    }

    if ( typeof options.fontFamily === "object" ) {
      options.fontFamily = options.fontFamily.join( ", " );
    }

    if ( $( "#jQueryFontFace" ).length === 0 ) { //haven't already made one
      $( "head" ).prepend( $( "<style type=\"text/css\" id=\"jQueryFontFace\"/>" ) );
    }

    var FF = {
      selector: function ( obj ) {
        var tag = obj.tagName,
          className = ( obj.className ) ? "." + obj.className.split( " " ).join( "." ) : "",
          id = ( $( obj ).attr( "id" ) ) ? "#" + $( obj ).attr( "id" ) : "";

        return tag + id + className;
      },
      create: function ( obj ) {
        var fontFace = "",
          rule = "",
          fontfamily = options.fontFamily.replace( /\s/g, "" ).replace( /,/g, "" ),
          fontfamilyStyleWeight = fontfamily + options.fontStyle + options.fontWeight,
          selector = FF.selector( obj );

        if ( !$( "#jQueryFontFace" ).data( fontfamilyStyleWeight ) ) {
          fontFace = [
						"@font-face {",
							"\tfont-family: \"" + options.fontName + "\";",
							"\tsrc: url('" + options.fontFile + ".eot');",
							"\tsrc: local('â˜º'), url('" + options.fontFile + ".woff') format('woff'), url('" + options.fontFile + ".ttf') format('truetype'), url('" + options.fontFile + ".svg#" + fontfamily + "') format('svg');",
							"\tfont-stretch: " + options.fontStretch + ";",
							"\tfont-style: " + options.fontStyle + ";",
							"\tfont-variant: " + options.fontVariant + ";",
							"\tfont-weight: " + options.fontWeight + ";",
						"}"
					].join( "\n" );
          $( "#jQueryFontFace" ).data( fontfamilyStyleWeight, true );
        }

        if ( !$( "#jQueryFontFace" ).data( selector ) ) {
          rule = [
						selector + " {",
							"\tfont-family: " + FF.quote( options.fontFamily ) + " !important;",
						"}"
					].join( "\n" );
          $( "#jQueryFontFace" ).data( selector, selector );
        }

        return ( fontFace.length || rule.length ) ? fontFace + "\n" + rule + "\n" : "";
      },
      quote: function ( string ) {
        var split = string.split( ", " ),
          length = split.length;
        for ( var i = 0; i < length; i += 1 ) {
          if ( split[ i ].indexOf( " " ) !== -1 ) {
            split[ i ] = '"' + split[ i ] + '"';
          }
        }
        return split.join( ", " );
      }
    };

    return this.each( function () {
      $( "#jQueryFontFace" ).text( $( "#jQueryFontFace" ).text() + FF.create( this ) );
    } );
  };
} )( jQuery );


$( document ).ready( function () {
  /*Futura Medium*/
  $( ".f-med" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura",
    fontWeight: "500",
    fontStyle: "normal"
  } );

  /*Futura Condensed Light Oblique*/
  $( ".f-cond-li-ob" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-CondensedLightOblique",
    fontWeight: "300",
    fontStyle: "italic"
  } );

  /*Futura Book Oblique*/
  $( ".f-book-ob" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-BookOblique",
    fontWeight: "normal",
    fontStyle: "italic"
  } );

  /*Futura Condensed Bold*/
  $( ".f-cond-bold" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-CondensedBold",
    fontWeight: "bold",
    fontStyle: "normal"
  } );

  /*Futura Extra Bold Oblique*/
  $( ".f-ex-bold-ob" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-ExtraBoldOblique",
    fontWeight: "800",
    fontStyle: "italic"
  } );

  /*Futura Condensed Extra Bold*/
  $( ".f-cond-ex-bold" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-CondensedExtraBold",
    fontWeight: "800",
    fontStyle: "normal"
  } );

  /*Futura Condensed Light*/
  $( ".f-cond-li" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-CondensedLight",
    fontWeight: "300",
    fontStyle: "normal"
  } );

  /*Futura Condensed Medium*/
  $( ".f-cond-med" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-Condensed",
    fontWeight: "500",
    fontStyle: "normal"
  } );

  /*Futura Medium Oblique*/
  $( ".f-med-ob" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-Oblique",
    fontWeight: "500",
    fontStyle: "italic"
  } );

  /*Futura Bold*/
  $( ".f-bold" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-Bold",
    fontWeight: "bold",
    fontStyle: "normal"
  } );

  /*Futura Extra Bold*/
  $( ".f-ex-bold" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-ExtraBold",
    fontWeight: "800",
    fontStyle: "normal"
  } );

  /*Futura Heavy*/
  $( ".f-heavy" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-Heavy",
    fontWeight: "900",
    fontStyle: "normal"
  } );

  /*Futura Heavy Oblique*/
  $( ".f-heavy-ob" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-HeavyOblique",
    fontWeight: "900",
    fontStyle: "italic"
  } );

  /*Futura light Oblique*/
  $( ".f-li-ob" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-LightOblique",
    fontWeight: "300",
    fontStyle: "italic"
  } );

  /*Futura bold Oblique*/
  $( ".f-bold-ob" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-BoldOblique",
    fontWeight: "bold",
    fontStyle: "italic"
  } );

  /*Futura Condensed Medium Oblique*/
  $( ".f-cond-med-ob" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-CondensedOblique",
    fontWeight: "500",
    fontStyle: "italic"
  } );

  /*Futura Condensed Extra Bold Oblique*/
  $( ".f-cond-ex-bold-ob" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-CondExtraBoldObl",
    fontWeight: "800",
    fontStyle: "italic"
  } );

  /*Futura Condensed Bold Oblique*/
  $( ".f-cond-bold-ob" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-CondensedBoldOblique",
    fontWeight: "bold",
    fontStyle: "italic"
  } );

  /*Futura Book*/
  $( ".f-book" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-Book",
    fontWeight: "normal",
    fontStyle: "normal"
  } );

  /*Futura Light*/
  $( ".f-li" ).fontface( {
    fontName: "Futura",
    fileName: "hinted-Futura-Light",
    fontWeight: "300",
    fontStyle: "normal"
  } );



} );
