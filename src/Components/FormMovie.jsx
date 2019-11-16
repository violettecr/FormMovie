import React from 'react';

class FormMovie extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  title: '',
		  comment: '',
		  poster: '',
		}
		this.onChange = this.onChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		}
		
	  onChange(e) {
		this.setState({
		  [e.target.name]: e.target.value,
		});
		}

	  submitForm(e) {
		e.preventDefault();
		const url = "https://post-a-form.herokuapp.com/api/movies/";
		const config = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(this.state),
		};
		fetch(url, config)
		.then(res => res.json())
		.then(res => {
			if (res.error) {
				alert(res.error);
			} else {
				alert(`Movie added !`);
			}
		}).catch(e => {
			console.error(e);
			alert("Error adding movie");
		});
		}
		
	render() {
		return (
			<div className="FormEmployee">
			<h1>Favorite Movie</h1>

			<form onSubmit={this.submitForm}>
			  <fieldset>
				<legend>Info</legend>
				<div className="form-data">
				  <label htmlFor="title">Movie Name</label>
				  <input
					type="text"
					id="title"
					name="title"
					onChange={this.onChange}
					value={this.state.title}
				  />
				</div>
		  
				<div className="form-data">
				  <label htmlFor="comment">Comment</label>
				  <input
					type="textarea"
					id="comment"
					name="comment"
					onChange={this.onChange}
					value={this.state.comment}
				  />
				</div>
		  
				<div className="form-data">
				  <label htmlFor="poster">Poster URL</label>
				  <input
					type="text"
					id="poster"
					name="poster"
					onChange={this.onChange}
					value={this.state.poster}
				  />
				</div>
				<hr />
				<div className="form-data">
				  <input type="submit" value="Send" />
				</div>
			  </fieldset>
			</form>
		  </div>  
		)}
	}

export default FormMovie;