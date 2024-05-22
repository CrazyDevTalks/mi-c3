// VehicleList.js
import React from "react";
import { connect } from "react-redux";
import { fetchVehicles } from "../redux/actions";
import { Card, CardContent, Typography } from "@mui/material";

class VehicleList extends React.Component {
  componentDidMount() {
    console.log(this.props.vehicleUrls);
    this.props.fetchVehicles(this.props.vehicleUrls);
  }

  render() {
    const { vehicles } = this.props;
    
    if (this.props.open)
      return (
        <div>
          {vehicles && vehicles.length > 0 ? (
            vehicles.map((vehicle, index) => (
              <Card key={index} variant="outlined" style={{marginBottom:"1rem"}}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {vehicle.name}
                  </Typography>
                  <Typography color="textSecondary">
                    Model: {vehicle.model}
                  </Typography>
                  <Typography color="textSecondary">
                    Manufacturer: {vehicle.manufacturer}
                  </Typography>
                  <Typography color="textSecondary">
                    Vehicle Class: {vehicle.vehicle_class}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <h3>No Owned Vehicles...</h3>
          )}
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  vehicles: state.vehicleReducer.vehicles,
});

export default connect(mapStateToProps, { fetchVehicles })(VehicleList);
