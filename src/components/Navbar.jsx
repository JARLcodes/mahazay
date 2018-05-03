import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Person from '@material-ui/icons/Person';
import CheckBox from '@material-ui/icons/CheckBox';
import Poll from '@material-ui/icons/Poll';
import ImportContacts from '@material-ui/icons/ImportContacts';
import LibraryBooks from '@material-ui/icons/LibraryBooks';


const styles = {
  root: {
    flex: 1, 
    flexGrow: 1,
    justifyContent: 'space-between'
  }
};

export default class Navbar extends Component {
    
    render () {
        return (
            <div className={styles.root}>
                <AppBar position="static" className={styles.appbar}>
                    <Toolbar>
                        <Button color="inherit">
                            <ArrowBack />
                            Back
                        </Button>
                        <Typography variant="display4" color="inherit">
                            Mahazay
                        </Typography>
                        <Button color="inherit">
                            <ImportContacts />
                            Journals
                        </Button>
                        <Button color="inherit">
                            <LibraryBooks />
                            Entries
                        </Button>
                        <Button color="inherit">
                            <CheckBox />
                            Tracker
                        </Button>
                        <Button color="inherit">
                            <Poll />
                            Insights
                        </Button>
                        <Button color="inherit">
                            <Person />
                            Logout
                        </Button>
                    </Toolbar>
            </AppBar>
            </div>
        )
    }
}