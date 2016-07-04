// -YoutubeList
//	  -OneVideo

class YoutubeList extends React.Component{

	getTvProgramVideos(){
		 $.ajax({
	            url: "https://www.googleapis.com/youtube/v3/search?",
	            type: "GET",
	            data:{
	            	'part':'snippet',
					'order':'date',
					'channelId':'UCQU5uVTG8h9LToACKrm1LMA',
					'q': "完整版",
					'maxResults':'9',
					'key':'AIzaSyBIqwwh5UIU9a0Nc4-J3k0C3OI4C5MUCXA'
	            },
	            dataType: 'jsonp',
	            cache: false,
	            success: function(data) {
	              this.setState({data: data});
	            }.bind(this),
	            error: function(xhr, status, err) {
	              console.error(this.props.url, status, err.toString());
	            }.bind(this)
          });
	}

	getInitialState(){
		return{data:[]};
	}

	componentDidMount(){
		this.getTvProgramVideos();
	}
	render(){
		var tvVideos = this.state.data.map(function(videos){
			var titlestart = videos.snippet.title.indexof('【');
			var temp = videos.snippet.title;
			var title = temp.sub.str(titlestart);
			return(
				<OneVideo 
					vimg={videos.snippet.thumbnails.high.url}
					vtitle={title}
					vid={videos.id.videoId}
					vdsptn={videos.snippet.description.subString(0,45)+'...'}
				>
				</OneVideo>
			);
		});
		return (
			<div className="clo-md4 portfolio-item">
				{tvVideos}
			</div>
		)
	}
}


class OneVideo extends React.Component{
	render(){
		return (
			<a href="{}" target="_black">
				<img src="{}" alt="" className="img-responsive youtube-img-radius"/>
			</a>
			<h4>
				<span className="youtube-title-font">12412412 </span>
			</h4>
			<span className="youtube-descriptyion">{}</span>
		);
	}
}



ReactDOM.render(
	<OneVideo />,
	document.getElementById('mainpage')
);