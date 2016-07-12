/*
*   -Bscomponent
		-menu  //上面那條
		-下半部
import NavTag from 'pagenav.js';
import {YoutubeList, OneVideo} from 'getyoutubeRE.js';
*/


class Bscomponent extends React.Component {

	constructor(props){
        super(props);
        this.state = {data:[],title:"綜藝玩很大"};
    }

     componentWillMount(){
        this.getTvProgramVideos();
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

    getTvProgramVideostwo(){
        console.log("getTvProgramVideostwo");
         $.ajax({
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

    Play(title){
		if(title !== undefined){
			this.setState({title: title});
			this.getTvProgramVideos();
		}
    }

	Rush(title){
		if(title !== undefined){
			this.setState({title: title});
			this.getTvProgramVideostwo();
		}
	}

	render(){


		return(
			<div>
				<NavTag 
					getPlay={this.Play.bind(this)}
					getRush={this.Rush.bind(this)}
				/>
				<div className="container" id="pageContent">
					<PageHeader pagetitle={this.state.title} />
					<span id="videosfield">
						<YoutubeList allvideos={this.state.data}/>
		        	</span>
					<hr/>
					{/*<Pagination/>
					<hr/>*/}
					<Footer/>
				</div>
			</div>
		);
	}
}


        // -YoutubeList
//    -OneVideo

class YoutubeList extends React.Component{
    
    
    render(){
        var tvVideos = this.props.allvideos.map(function(videos){
                            //console.log(videos.snippet.thumbnails.high.url);
                            if(videos.snippet.title.includes('【')){
                            	 var titlestart = videos.snippet.title.indexOf('【');
                            	 var temp = videos.snippet.title;
                           		 var title = temp.substr(titlestart);
                            }
                            if(videos.snippet.title.includes('1080P')){
                            	titlestart = videos.snippet.title.indexOf('1080P');
                            	temp = videos.snippet.title;
                           		title = temp.substr(0,titlestart);
                            }  
                            return(
                                <OneVideo 
                                    vimg={videos.snippet.thumbnails.high.url}
                                    vtitle={title}
                                    vid={'https://www.youtube.com/watch?v='+videos.id.videoId}
                                    vds={videos.snippet.description.substring(0,54)+'...'}
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
            <div className="col-md-4 portfolio-item">
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



class NavTag extends React.Component{

	constructor(props){
        super(props);
        this.state = {playtitle:"綜藝玩很大",
        			  geniustitle:"天才衝衝衝"};
    }

	getP(e){
		e.preventDefault();
		console.log(this);
		console.log(this.state.playtitle);
		this.props.getPlay(this.state.playtitle);
	}
	getR(e){
		e.preventDefault();
		this.props.getRush(this.state.geniustitle);
	}

	render(){
		return(
			<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div className="container">
		            <div className="navbar-header">
		                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		                    <span className="sr-only">Toggle navigation</span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <a className="navbar-brand" href="#">綜藝節目表</a>
		            </div>

		            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		                <ul className="nav navbar-nav">
		                    <li>
		                        <a href="#" id="playbig" onClick={this.getP.bind(this)}>
		                        	<span>{this.state.playtitle}</span>
		                        </a>
		                    </li>
							<li>
		                        <a href="#" id="geniusrush" onClick={this.getR.bind(this)}>
		                        	<span>{this.state.geniustitle}</span>
		                        </a>
		                    </li>
		                </ul>
		            </div>
	        	</div>
           </nav>	
		);
	}
}


class PageHeader extends React.Component{
	render(){
		return(
			<div className="row">
	            <div className="col-lg-12">
	                <h1 className="page-header title-shadow" id="programtitle">
	            		{this.props.pagetitle}
	                </h1>
	            </div>
	        </div>
		);
	}
}


class Pagination extends React.Component{
	render(){
		return(
			<div className="row text-center">
	            <div className="col-lg-12">
	                <ul className="pagination">
	                    <li>
	                        <a href="#">&laquo;</a>
	                    </li>
	                    <li className="active">
	                        <a href="#">1</a>
	                    </li>
	                    <li>
	                        <a href="#">2</a>
	                    </li>
	                    <li>
	                        <a href="#">3</a>
	                    </li>
	                    <li>
	                        <a href="#">4</a>
	                    </li>
	                    <li>
	                        <a href="#">5</a>
	                    </li>
	                    <li>
	                        <a href="#">&raquo;</a>
	                    </li>
	                </ul>
	            </div>
	        </div>
		);
	}
}

class Footer extends React.Component{
	render(){
		return(
			 <footer>
	            <div className="row">
	                <div className="col-lg-12">
	                    <p>Copyright &copy; maxma youtube test 2016</p>
	                </div>
	            </div>
	        </footer>
		);
	}
}


var TestDOM = ReactDOM.render(
    <Bscomponent />,
    document.getElementById('iambody')
);