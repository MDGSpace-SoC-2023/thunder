//code for sending ride request

export async function rideRequest(req, res , drives) {
  const {
    rider_id,
    pickup_lat,
    pickup_long,
    destination_lat,
    destination_long,
    distance,
    time,
  } = req.body;
  // finding ride index
  const ride_Index = rides.findIndex((ride) => ride.rider_id === rider_id);

  if (ride_Index !== -1) {
    rides[ride_Index].ride_number = rides[ride_Index].ride_number + 1;
    rides[ride_Index].pickup_lat = pickup_lat;
    rides[ride_Index].pickup_long = pickup_long;
    rides[ride_Index].destination_lat = destination_lat;
    rides[ride_Index].destination_long = destination_long;
    rides[ride_Index].distance = distance;
    rides[ride_Index].time = time;
    rides[ride_Index].status = "requested";
    res.status(200).json({
      status: "success",
      message: "Ride request updated successfully",
    });
  } else {
    rides.push({
      ride_number: 1,
      rider_id: rider_id,
      pickup_lat: pickup_lat,
      pickup_long: pickup_long,
      destination_lat: destination_lat,
      destination_long: destination_long,
      distance: distance,
      time: time,
      status: "requested",
    });
    res
      .status(200)
      .json({ status: "success", message: "Ride request sent successfully" });
  }

  res
    .status(200)
    .json({ status: "success", message: "Ride request sent successfully" });
}

//code for canceling the ride request

export async function cancelRide(req, res) {
  const { rider_id } = req.params;
  const rideToCancel = rides.findIndex(
    (ride) => ride.rider_id === parseInt(rider_id)
  );

  if (rideToCancel !== -1) {
    rides[rideToCancel].status = "Cancelled";
    res.status(200).json({
      status: "success",
      message: "Ride request cancelled successfully",
    });
  } else {
    res.status(404).json({ status: "error", message: "Ride not found" });
  }
}
