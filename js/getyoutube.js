$( document ).ready(function() {
			jQuery.ajax({
					url: "https://www.googleapis.com/youtube/v3/search?",
					type: "GET",
					data: {
						//send the request to servlet
						'part':'snippet',
						'order':'date',
						'channelId':'UCQU5uVTG8h9LToACKrm1LMA',
						'q': "完整版",
						'maxResults':'20',
						'key':'AIzaSyBIqwwh5UIU9a0Nc4-J3k0C3OI4C5MUCXA'
					},
					dataType: 'jsonp',
					async: 'false',
					error: function( response ) {
						console.log( JSON.stringify( response ) );
					},
					success:function( response ) {
						//console.log( JSON.stringify( response.items ) );
						var result;
						var titlestart;
						var title;
						$.each(response.items, function(c,video)
						{
							titlestart = video.snippet.title.indexOf('【');
							var temp = video.snippet.title;
							title = temp.substr(titlestart);
							console.log( title );
							$('<div>').addClass('col-md-4 portfolio-item')
								.append(
									$('<a>',{
										href:'https://www.youtube.com/watch?v='+video.id.videoId,
										target:'_black'
									})
									.append(
										$('<img>').addClass('img-responsive youtube-img-radius')
										.attr('src',video.snippet.thumbnails.high.url)
									)
								)
								.append(
									$('<h4>').append(
										$('<span>').addClass('youtube-title-font').html(title)
									)
								)
								.append(
								 $('<div>').addClass('youtube-description').html(video.snippet.description.substring(0,50)+'...')
								)
								.appendTo('#mainpage');
								
						});
						
						
					}
				
				});
		
		
		});