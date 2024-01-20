//code for sending ride request

async function rideRequest(req, res) {
  const {
    rider_id,
    pickup_lat,
    pickup_long,
    destination_lat,
    destination_long,
    distance,
    time,
  } = req.body;

  rideData = {
    ride_Id: ride.length + 1,
    rider_id,
    pickup_lat,
    pickup_long,
    destination_lat,
    destination_long,
    distance,
    time,
    status: "Requested",
  };

  rides.push(rideData);
  res
    .status(200)
    .json({ status: "success", message: "Ride request sent successfully" });
}

//code for canceling the ride request

async function cancelRide(req, res) {
  const { rider_id } = req.params;
  const rides = rides.find((ride) => {
    if (ride.rider_id == rider_id) {
      ride.status = "Cancelled";
    }
  });

  res.status(200).json({
    status: "success",
    message: "Ride request cancelled successfully",
  });
}
exports = {
  rideRequest,
  cancelRide,
};
