/*
	navtag
*/
class NavTag extends React.Component{
	render(){
		return(
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
	                        <a href="#" id="playbig">綜藝玩很大</a>
	                    </li>
						<li>
	                        <a href="#" id="geniusrush">天才衝衝衝</a>
	                    </li>
	                </ul>
	            </div>
        </div>
		);
	}
}


ReactDOM.render(
    <NavTag />,
    document.getElementById('navtag')
);