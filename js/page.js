/*
*   -Bscomponent
		-menu  //上面那條
		-下半部

*/
class Bscomponent extends React.Component {
	render(){
		return(
			<div>
				<PageHeader/>
				<VideoField/>
				<hr/>
				{/*<Pagination/>
				<hr/>*/}
				<Footer/>
			</div>
		);
	}
}

class PageHeader extends React.Component{
	render(){
		return(
			<div className="row">
	            <div className="col-lg-12">
	                <h1 className="page-header title-shadow" id="programtitle">綜藝玩很大
	            
	                </h1>
	            </div>
	        </div>
		);
	}
}

class VideoField extends React.Component{
	render(){
		return(
			<span id="videosfield">
        	</span>
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


ReactDOM.render(
    <Bscomponent />,
    document.getElementById('pageContent')
);