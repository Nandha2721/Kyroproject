import { Grid } from '@mui/material';
import React, { Component } from 'react';
import SideNav from "/SideNav";

class MyProfile extends Component {
    render() {
        return (
            <div>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                        <SideNav/>
                </Grid>
                
                </Grid>
            </div>
        );
    }
}

export default MyProfile;