// function to accept ride request from rider

export async function acceptRideRequest(req, res, rides, drives) {
  const { driver_Id } = req.params;
  const { ride_Id, time } = req.body;

  const driverobj = {
    drives_number: 1,
    driver_Id,
    time,
    status: "accepted",
    drive_list: [{ ride_Id, time, status: "accepted" }],
  };

  // Find the ride in the rides array
  const rideIndex = rides.findIndex(
    (ride) => ride.ride_Id === parseInt(ride_Id)
  );

  if (rides[rideIndex].status === "requested") {
    rides[rideIndex].status = "accepted";
    const Drive_Index = drives.findIndex(
      (drive) => drive.driver_Id === parseInt(driver_Id)
    );
    if (Drive_Index === -1) {
      drives.push(driverobj);
      res.status(200).json({ message: "Ride request accepted successfully" });
    } else {
      drives[Drive_Index].drives_number = drives[Drive_Index].drives_number + 1;
      drives[Drive_Index].status = "accepted";
      drives[Drive_Index].time = time;
      drives[Drive_Index].drive_list.push({
        ride_Id,
        time,
        status: "accepted",
      });
      res.status(200).json({ message: "Ride request accepted successfully" });
    }
  } else {
    return res
      .status(400)
      .json({ error: `Ride request with id ${ride_Id} not found` });
  }
}

// function to reject ride request from rider
export async function cancelRideRequest(req, res, rides, drives) {
  const { driver_Id } = req.params;
  const { ride_Id, time } = req.body;

  // Find the ride in the rides array
  const rideIndex = rides.findIndex(
    (ride) => ride.ride_Id === parseInt(ride_Id)
  );

  if (rideIndex !== -1) {
    if (rides[rideIndex].status === "requested") {
      rides[rideIndex].status = "cancelled";

      const Drive_Index = drives.findIndex(
        (drive) => drive.driver_Id === parseInt(driver_Id)
      );
      if (Drive_Index === -1) {
        res
          .status(200)
          .json({ message: "Ride request cancelled successfully" });
      } else {
        drives[Drive_Index].status = "cancelled";
        drives[Drive_Index].time = time;
        drives[Drive_Index].drive_list.push({
          ride_Id,
          time,
          status: "cancelled",
        });
        res
          .status(200)
          .json({ message: "Ride request cancelled successfully" });
      }
    } else {
      return res
        .status(400)
        .json({
          error: `Ride request with id ${ride_Id} not in requested status`,
        });
    }
  } else {
    return res
      .status(400)
      .json({ error: `Ride request with id ${ride_Id} not found` });
  }
}

// function to emit the driver location to the server constantly

// function to check id driver has reached the rider pickup location with checking the distance

// function to check if driver has reached the destination with checking the distance
