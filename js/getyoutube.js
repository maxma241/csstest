function getPlayVeryBig(){
	$("#mainpage").empty();
	jQuery.ajax({
					url: "https://www.googleapis.com/youtube/v3/search?",
					type: "GET",
					data: {
						//send the request to servlet
						'part':'snippet',
						'order':'date',
						'channelId':'UCQU5uVTG8h9LToACKrm1LMA',
						'q': "完整版",
						'maxResults':'9',
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
							//解析json生圖片,標題,影片描述
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
	
}


function getGeniusRushRushRush(){
	$("#mainpage").empty();
	jQuery.ajax({
					url: "https://www.googleapis.com/youtube/v3/search?",
					type: "GET",
					data: {
						//send the request to servlet
						'part':'snippet',
						'order':'date',
						'channelId':'UCeUYStrCWlFnPqmKpxw-A0Q',
						'q': "1080P",
						'maxResults':'9',
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
							//解析json生圖片,標題,影片描述
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
										$('<span>').addClass('youtube-title-font').html(video.snippet.title)
									)
								)
								.append(
								 $('<div>').addClass('youtube-description').html(video.snippet.description.substring(0,50)+'...')
								)
								.appendTo('#mainpage');
								
						});
						
						
					}
				
				});
	
}
