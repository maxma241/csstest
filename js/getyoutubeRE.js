        // -YoutubeList
//    -OneVideo

class YoutubeList extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:[],};
    }

    getTvProgramVideos(){
        console.log("getTvProgramVideos");
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
                  this.setState({data: data.items});
                  // console.log(data);
                  // console.log( this.state.data);
                  // console.log( JSON.stringify(this.state.data) );
                }.bind(this),
                error: function(xhr, status, err) {
                  console.error(this.props.url, status, err.toString());
                }.bind(this)
          });
    }

    componentDidMount(){
        this.getTvProgramVideos();
    }

    
    render(){
        var tvVideos = this.state.data.map(function(videos){
                            console.log(videos.snippet.thumbnails.high.url);
                            var titlestart = videos.snippet.title.indexOf('【');
                            var temp = videos.snippet.title;
                            var title = temp.substr(titlestart);
                            return(
                                <OneVideo 
                                    vimg={videos.snippet.thumbnails.high.url}
                                    vtitle={title}
                                    vid={'https://www.youtube.com/watch?v='+videos.id.videoId}
                                    vds={videos.snippet.description.substring(0,35)}
                                    key={videos.id.videoId}
                                >
                                </OneVideo>
                            );
                        });
        return (
            <div className="row" id="mainpage">
                {tvVideos}
            </div>
        );
    }
}


class OneVideo extends React.Component{
    render(){
        return (
            <div className="col-md4 portfolio-item">
                <a href={this.props.vid} target="_black">
                    <img src={this.props.vimg} alt="" className="img-responsive youtube-img-radius"/>
                </a>
                <h4>
                    <span className="youtube-title-font">{this.props.vtitle} </span>
                </h4>
                <span className="youtube-description">{this.props.vds}</span>
            </div>
        );
    }
}



ReactDOM.render(
    <YoutubeList />,
    document.getElementById('videosfield')
);