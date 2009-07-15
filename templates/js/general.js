(function($){
	var currentPage, currentHash;

	function getPos(n, ro) {
		var x = 0, y = 0, e, r;

		if (n) {
			r = n;
			while (r && r != ro && r.nodeType) {
				x += r.offsetLeft || 0;
				y += r.offsetTop || 0;
				r = r.offsetParent;
			}

			r = n.parentNode;
			while (r && r != ro && r.nodeType) {
				x -= r.scrollLeft || 0;
				y -= r.scrollTop || 0;
				r = r.parentNode;
			}
		}

		return {x : x, y : y};
	}

	function resizeUI() {
		$('#doc3').css('height', (window.innerHeight || document.documentElement.clientHeight) - $('#hd').height() - 12);
	}

	function scrollToHash(hash) {
		if (hash) {
			$(hash).each(function() {
				$('#detailsView')[0].scrollTop = getPos(this, $('#detailsView')[0].firstChild).y - 40;
			});
		}
	}

	function loadURL(url) {
		var parts = /^([^#]+)(#.+)?$/.exec(url), hash = parts[2];

		// In page link, no need to load anything
		if (parts[1] == currentPage) {
			if (hash)
				scrollToHash(hash);
			else
				 $('#detailsView')[0].scrollTop = 0;

			return;
		}

		currentPage = parts[1];

		$("#classView a.selected").removeClass('selected');
		$("#classView a[href='" + currentPage.replace(/^.*\/([^\/]+)$/, '$1') + "']:not(.aliasLink)").addClass('selected');

		$.get(parts[1], "", function(data) {
			data = /<body[^>]*>([\s\S]+)<\/body>/.exec(data);

			if (data) {
				$('#detailsView').html(data[1])[0].scrollTop = 0;
				scrollToHash(hash);
			}
		});
	}

	$().ready(function(){
		$("#browser").treeview();
		$(window).resize(resizeUI).trigger('resize');

		window.setInterval(function() {
			var hash = document.location.hash;

			if (hash != currentHash && hash) {
				loadURL(hash.replace(/\-/g, '#').substring(1));
				currentHash = hash;
			}
		}, 100);

		$("a").live("click", function(e) {
			var url = e.target.href;

			if (url.indexOf('class_') != -1) {
				document.location.hash = e.target.href.replace(/^.*\/([^\/]+)/, '$1').replace(/#/g, '-');

				loadURL(url);
			}

			e.preventDefault();
		});
	});
})(jQuery);