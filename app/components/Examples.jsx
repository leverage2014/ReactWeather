var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
// 	render: function(){
// 		return (
// 			<h3>Examples components</h3>
// 		);
// 	}
// });

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example locaitons to try out:</p>
			<ol>
				<li>
					<Link to="/?location=Philiadelphia">Philiadelphia, PA</Link>
				</li>
				<li>
					<Link to="/?location=Rio">Rio, Brazil</Link>
				</li>
			</ol>
		</div>
     );
}

module.exports = Examples;