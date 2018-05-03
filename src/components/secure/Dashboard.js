import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<Grid container spacing={16}>
				<div>
				<Grid item xs={8}>
					<Link to='/profile'>
					<Card>
						<CardContent>
						<Typography color="textSecondary">View Profile</Typography>
						</CardContent>
					</Card>
					</Link>
				</Grid>
				</div>
				<div>
				<Grid item xs={12}>
					<Link to='/logout'>
					<Card>
						<CardContent>
						<Typography color="textSecondary">Logout</Typography>
						</CardContent>
					</Card>
				</Link>
				</Grid>
				</div>
				<div>
				<Grid item xs={8}>
					<Link to='/journals'>
					<Card>
						<CardContent>
						<Typography color="textSecondary">Your Journals</Typography>
						</CardContent>
					</Card>
					</Link>
				</Grid>
				</div>
				<div>
				<Grid item xs={8}>
					<Link to='/entries'>
					<Card>
						<CardContent>
						<Typography color="textSecondary">Your Entries</Typography>
						</CardContent>
					</Card>
					</Link>
				</Grid>
				</div>
				</Grid>
			</div>
		);
	}
}

export default connect()(Dashboard);
