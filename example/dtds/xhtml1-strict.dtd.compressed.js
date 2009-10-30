unpack({
	Z : 'a|F|Y|J|K',
	Y : 'object|img|H|em|strong|dfn|code|q|samp|kbd|var|cite|abbr|acronym|sub|sup',
	X : 'p|O|div|P|Q|table|G|H|I|L',
	W : 'a|H|I|F|K|J',
	V : 'R|L',
	U : 'G|H|I|J|K',
	T : 'R|form|N|L',
	S : 'R|form|L',
	R : 'p|O|div|P|Q|fieldset|table',
	Q : 'pre|hr|blockquote|address',
	P : 'ul|ol|dl',
	O : 'h1|h2|h3|h4|h5|h6',
	N : 'M|K',
	M : 'a|G|H|I|J',
	L : 'noscript|K',
	K : 'ins|del|script',
	J : 'input|select|textarea|label|button',
	I : 'em|strong|dfn|code|q|samp|kbd|var|cite|abbr|acronym|sub|sup',
	H : 'tt|i|b|big|small',
	G : 'F;|object|img',
	F : 'br|span|bdo|map',
	E : 'A|B|C',
	D : 'accesskey|tabindex|onfocus|onblur',
	C : 'onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup',
	B : 'lang|xml:lang|dir',
	A : 'id|class|style|title',
	AA : 'align|char|charoff|valign'
}, 'script[id|charset|type|src|defer|xml:space]' + 
	'style[B|id|type|media|title|xml:space]' + 
	'object[E|declare|classid|codebase|data|type|codetype|archive|standby|height|width|usemap|name|tabindex][param|R|form|a|F|object|img|H|I|J|L]' + 
	'param[id|name|value|valuetype|type]' + 
	'p[E][a|F|object|img|H|I|J|K]' + 
	'a[E|D|charset|type|name|href|hreflang|rel|rev|shape|coords][F|object|img|H|I|J|K]' + 
	'br[A]' + 
	'span[E][a|F|object|img|H|I|J|K]' + 
	'bdo[A|C|B][a|F|object|img|H|I|J|K]' + 
	'map[B|C|A|name][S|area]' + 
	'h1[E][a|F|object|img|H|I|J|K]' + 
	'img[E|src|alt|longdesc|height|width|usemap|ismap]' + 
	'tt[E][a|F|object|img|H|I|J|K]' + 
	'i[E][a|F|object|img|H|I|J|K]' + 
	'b[E][a|F|object|img|H|I|J|K]' + 
	'big[E][a|F|object|img|H|I|J|K]' + 
	'small[E][a|F|object|img|H|I|J|K]' + 
	'em[E][a|F|object|img|H|I|J|K]' + 
	'strong[E][a|F|object|img|H|I|J|K]' + 
	'dfn[E][a|F|object|img|H|I|J|K]' + 
	'code[E][a|F|object|img|H|I|J|K]' + 
	'q[E|cite][a|F|object|img|H|I|J|K]' + 
	'samp[E][a|F|object|img|H|I|J|K]' + 
	'kbd[E][a|F|object|img|H|I|J|K]' + 
	'var[E][a|F|object|img|H|I|J|K]' + 
	'cite[E][a|F|object|img|H|I|J|K]' + 
	'abbr[E][a|F|object|img|H|I|J|K]' + 
	'acronym[E][a|F|object|img|H|I|J|K]' + 
	'sub[E][a|F|object|img|H|I|J|K]' + 
	'sup[E][a|F|object|img|H|I|J|K]' + 
	'input[E|D|type|name|value|checked|disabled|readonly|size|maxlength|src|alt|usemap|onselect|onchange|accept]' + 
	'select[E|name|size|multiple|disabled|tabindex|onfocus|onblur|onchange][optgroup|option]' + 
	'optgroup[E|disabled|label][option]' + 
	'option[E|selected|disabled|label|value]' + 
	'textarea[E|D|name|rows|cols|disabled|readonly|onselect|onchange]' + 
	'label[E|for|accesskey|onfocus|onblur][a|F|object|img|H|I|J|K]' + 
	'button[E|D|name|value|type|disabled][p|O|div|P|Q|table|F|object|img|H|I|L]' + 
	'h2[E][a|F|object|img|H|I|J|K]' + 
	'ins[E|cite|datetime][R|form|a|F|object|img|H|I|J|L]' + 
	'h3[E][a|F|object|img|H|I|J|K]' + 
	'del[E|cite|datetime][R|form|a|F|object|img|H|I|J|L]' + 
	'h4[E][a|F|object|img|H|I|J|K]' + 
	'h5[E][a|F|object|img|H|I|J|K]' + 
	'h6[E][a|F|object|img|H|I|J|K]' + 
	'div[E][R|form|a|F|object|img|H|I|J|L]' + 
	'ul[E][li]' + 
	'li[E][R|form|a|F|object|img|H|I|J|L]' + 
	'ol[E][li]' + 
	'dl[E][dt|dd]' + 
	'dt[E][a|F|object|img|H|I|J|K]' + 
	'dd[E][R|form|a|F|object|img|H|I|J|L]' + 
	'pre[E|xml:space][W]' + 
	'hr[E]' + 
	'blockquote[E|cite][S]' + 
	'address[E][a|F|object|img|H|I|J|K]' + 
	'fieldset[E][legend|R|form|a|F|object|img|H|I|J|L]' + 
	'legend[E|accesskey][a|F|object|img|H|I|J|K]' + 
	'table[E|summary|width|border|frame|rules|cellspacing|cellpadding][caption|col|colgroup|thead|tfoot|tbody|tr]' + 
	'caption[E][a|F|object|img|H|I|J|K]' + 
	'col[E|span|width|AA]' + 
	'colgroup[E|span|width|AA][col]' + 
	'thead[E|AA][tr]' + 
	'tr[E|AA][th|td]' + 
	'th[E|abbr|axis|headers|scope|rowspan|colspan|AA][R|form|a|F|object|img|H|I|J|L]' + 
	'form[E|action|method|enctype|onsubmit|onreset|accept|accept-charset][V]' + 
	'noscript[E][S]' + 
	'td[E|abbr|axis|headers|scope|rowspan|colspan|AA][R|form|a|F|object|img|H|I|J|L]' + 
	'tfoot[E|AA][tr]' + 
	'tbody[E|AA][tr]' + 
	'area[E|D|shape|coords|href|nohref|alt]' + 
	'base[href|id]'
);