class YoutubeList extends React.Component{

}


class OneVideo extends React.Component{
	render(){
		return (
			<div className="clo-md4 profolio-item">
				<a href="{}" target="_black">
					<img src="{}" alt="" className="img-responsive youtube-img-radius"/>
				</a>
				<h4>
					<span className="youtube-title-font">12412412 </span>
				</h4>
				<span className="youtube-descriptyion">{}</span>
			</div>
		);
	}
}



ReactDom.render(
	<OneVideo />,
	document.getElementById('mainpage')
);