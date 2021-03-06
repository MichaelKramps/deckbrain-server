var ascii = {};

module.exports = ascii;

ascii.enemies = {
	satyr: "               (    )<br>              ((((()))<br>              |o\\ /o)|<br>              ( (  _')<br>               (._.  /\\__<br>              ,\\___,/ '  ')<br>'.,_,,       (  .- .   .    )<br> \\   \\\\     ( '        )(    )<br>  \\   \\\\    \\.  _.__ ____( .  |<br>   \\  /\\\\   .(   .'  /\\  '.  )<br>    \\(  \\\\.-' ( /    \\/    \\)<br>     '  ()) _'.-|/\\/\\/\\/\\/\\|<br>         '\\\\ .( |\\/\\/\\/\\/\\/|<br>           '((  \\    /\\    /<br>           ((((  '.__\\/__.')<br>            ((,) /   ((()   )<br>             '..-,  (()('   /<br>              _//.   ((() .'<br>      _____ //,/' ___ ((( ', ___<br>                       ((  )<br>                        / /<br>                      _/,/'<br> pils               /,/,'<br>",
	crocodile: "                _ ___                /^^\\ /^\\  /^^\\_<br>    _          _@)@) \\            ,,/ '` ~ `'~~ ', `\\.<br>  _/o\\_ _ _ _/~`.`...'~\\        ./~~..,'`','',.,' '  ~:<br> / `,'.~,~.~  .   , . , ~|,   ,/ .,' , ,. .. ,,.   `,  ~\\_<br>( ' _' _ '_` _  '  .    , `\\_/ .' ..' '  `  `   `..  `,   \\_<br> ~V~ V~ V~ V~ ~\\ `   ' .  '    , ' .,.,''`.,.''`.,.``. ',   \\_<br>  _/\\ /\\ /\\ /\\_/, . ' ,   `_/~\\_ .' .,. ,, , _/~\\_ `. `. '.,  \\_<br> &lt; ~ ~ '~`'~'`, .,  .   `_: ::: \\_ '      `_/ ::: \\_ `.,' . ',  \\_<br>  \\ ' `_  '`_    _    ',/ _::_::_ \\ _    _/ _::_::_ \\   `.,'.,`., \\-,-,-,_,_,<br>   `'~~ `'~~ `'~~ `'~~  \\(_)(_)(_)/  `~~' \\(_)(_)(_)/ ~'`\\_.._,._,'_;_;_;_;_;",
	bat: "             \\                  /<br>    _________))                ((__________<br>   /.-------./\\\\    \\    /    //\\.--------.\\<br>  //#######//##\\\\   ))  ((   //##\\\\########\\\\<br> //#######//###((  ((    ))  ))###\\\\########\\\\<br>((#######((#####\\\\  \\\\  //  //#####))########))<br> \\##' `###\\######\\\\  \\)(/  //######/####' `##/<br>  )'    ``#)'  `##\\`->oo<-'/##'  `(#''     `(<br>          (       ``\\`..'/''       )<br>                     \\''(<br>                      `- )<br>                      / /<br>                     ( /\\<br>                     /\\| \\<br>                    (  \\<br>                        )<br>                       /<br>                      (<br>                      `   Ed Zahurak",
	fatBat: "              /|                                           |\\<br>             /||             ^               ^             ||\\<br>            / \\\\__          //               \\\\          __// \\<br>           /  |_  \\         | \\   /     \\   / |         /  _|  \\<br>          /  /  \\  \\         \\  \\/ \\---/ \\/  /         /  /     \\<br>         /  /    |  \\         \\  \\/\\   /\\/  /         /  |       \\<br>        /  /     \\   \\__       \\ ( 0\\ /0 ) /       __/   /        \\<br>       /  /       \\     \\___    \\ \\_/|\\_/ /    ___/     /\\         \\<br>      /  /         \\_)      \\___ \\/-\\|/-\\/ ___/      (_/\\ \\      `  \\<br>     /  /           /\\__)       \\/  oVo  \\/       (__/   ` \\      `  \\<br>    /  /           /,   \\__)    (_/\\ _ /\\_)    (__/         `      \\  \\<br>   /  '           //       \\__)  (__V_V__)  (__/                    \\  \\<br>  /  '  '        /'           \\   |{___}|   /         .              \\  \\<br> /  '  /        /              \\/ |{___}| \\/\\          `              \\  \\<br>/     /        '       .        \\/{_____}\\/  \\          \\    `         \\  \\<br>     /                ,         /{_______}\\   \\          \\    \\         \\<br>                     /         /{___/_\\___}\\   `          \\    `<br><br>                         Adrian Elhart",
	sodaMachine: "    _________    <br>   |         |   <br>   | 0 @ H M |   <br>   | P : $ ) |   <br>   | G % { 8 |   <br>   |  _____  |   <br>   | |_____| |   <br>   |_________|   ",
	computer: "    _________    <br>   |         |   <br>   | I: Kill |   <br>   |         |   <br>   | U: Die  |   <br>   |_________|   <br>  /___________\\  <br>                 ",
	drone: "                 <br>    /       \\    <br>   /\\  ___  /\\   <br>     \|   |/     <br>      |@ @|      <br>     /|___|\\     <br>   \\/       \\/   <br>    \\       /    ",
	sergeantDan: "            /^^^\<br>            |'''|<br>      ___   |||||<br>     |@_@|  |ooo|<br>    //   \\\\_|000|<br>    ||___  _ OOO|<br>    //   \\\\ |OOO|<br>  _//     \\\\_    ",
};

ascii.bodies = {
	marshmallow: [
		" ((O)) ", 
		"(O(O)O)", 
		" ((O)) ", 
		"   0   "],
	stickMan: [
		"__| |__", 
		"__ S __", 
		"  | |  ", 
		"  0 0  "],
	tank: [
		"|\\   /|", 
		"|  X  |", 
		"|/___\\|", 
		"0 0 0 0"],
	thief: [
		" /   \\ ",
		"| $$$ |",
		" \\___/ ",
		"  0 0  "
	],
	fighter: [
		"/     \\",
		"|  ^  |",
		"\\_____/",
		" 0   0 "
	],
	blank: [
		"       ",
		"       ",
		"       ",
		"       "
	]
};

ascii.armors = {
	baseballHat: [
		"  ( )> ",
		" |*_*| "
	],
	turban: [
		" (~^~) ",
		" |*_*| "
	],
	scavenger: [
		"  ___  ",
		" |*_*| "
	],
	platinumPlate: [
		" /'''\\ ",
		"/_###_\\"
	],
	magneticPlate: [
		"  / \\  ",
		" (_*_) "
	],
	blank: [
		"       ",
		"       "
	]
};

ascii.weapons = {
	punch: [
		"  __  ",
		" /  \\",
		"_\\  /",
		"___/ ",
		"     ",
		"     "
		
	],
	slap: [
		"     ",
		"   \\/",
		"   / ",
		"__/  ",
		"     ",
		"     "
		
	],
	grenades: [
		"  :: ",
		" (  )",
		"_/ / ",
		"__/  ",
		"     ",
		"     "
	],
	superPunch: [
		"  __ ",
		" // \\",
		"_\\ //",
		"__// ",
		"     ",
		"     "
		
	],
	napalm: [
		"     ",
		" ... ",
		"_| | ",
		"___| ",
		"     ",
		"     "
	],
	blank: [
		"     ",
		"     ",
		"     ",
		"     ",
		"     ",
		"     "
	]
};

ascii.items = {
	sandwiches: [
		"     ",
		" / \\ ",
		" \\ /_",
		"  \\__",
		"     ",
		"     "
	],
	springs: [
		"     ",
		" ==  ",
		" ==__",
		" ==__",
		"     ",
		"     "
	],
	nets: [
		"     ",
		" XX  ",
		" XX__",
		" XX__",
		"     ",
		"     "
	],
	jackets: [
		"     ",
		" 0   ",
		"\\_/__",
		"|_|__",
		"     ",
		"     "
	],
	smellingSalts: [
		"     ",
		"|..| ",
		"|..|_",
		"|..|_",
		"     ",
		"     "
	],
	chemicals: [
		" 00  ",
		"|oo| ",
		"|oo|_",
		"|oo|_",
		"     ",
		"     "
	],
	blank: [
		"     ",
		"     ",
		"     ",
		"     ",
		"     ",
		"     "
	]
};



// 00   /'''\        
//|oo| /_###_\ ...
//|oo|___| |___| |
//|oo|___ S _____|  
//       | |      
//       0 0      

//                 |
//    /       \    |
//   /\  ___  /\   |
//     \|   |/     |
//      |@ @|      |
//     /|___|\     |
//   \/       \/   |
//    \       /    |