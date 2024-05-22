// PeopleList.js
import React from "react";
import { connect } from "react-redux";
import { fetchPeople, deletePerson, searchPeople } from "../redux/actions";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import VehicleList from "./VehicleList";

class PeopleList extends React.Component {
  state = {
    open: false,
    vehicleUrls: [],
  };
  
  componentDidMount() {
    this.props.fetchPeople();
  }

  handleSearch = (event) => {
    const searchQuery = event.target.value;
    this.props.searchPeople(searchQuery);
  };

  handleOpen = (vehicleUrls) => {
    this.setState({ vehicleUrls, open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { people } = this.props;

    return (
      <div>
        <h1>People List</h1>
        <TextField
          label="Search..."
          variant="outlined"
          style={{ marginBottom: "1rem" }}
          onChange={this.handleSearch}
        />
        <Grid container spacing={3}>
          {people &&
            people.map((person, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card variant="outlined">
                  <CardContent className="flex !flex-col !gap-4">
                    <Typography variant="h5" component="h2">
                      {person.name}
                    </Typography>
                    <Typography color="textSecondary">
                      Height: {person.height}
                    </Typography>
                    <Typography color="textSecondary">
                      Mass: {person.mass}
                    </Typography>
                    <Typography color="textSecondary">
                      Gender: {person.gender}
                    </Typography>
                    <Typography color="textSecondary">
                      Last Edited:{" "}
                      {`${new Date(
                        person.edited
                      ).toLocaleDateString()} ${new Date(
                        person.edited
                      ).toLocaleTimeString()}`}
                    </Typography>
                    <Button
                      onClick={() => this.handleOpen(person.vehicles)}
                      color="primary"
                      variant="contained"
                      style={{ marginTop: "1rem" }}
                    >
                      Show Vehicles
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>

        <Dialog onClose={this.handleClose} open={this.state.open}>
          <DialogTitle>Vehicle List</DialogTitle>
          <DialogContent>
            <VehicleList
              vehicleUrls={this.state.vehicleUrls}
              open={this.state.open}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  people: state.peopleReducer.people,
});

export default connect(mapStateToProps, {
  fetchPeople,
  deletePerson,
  searchPeople,
})(PeopleList);
