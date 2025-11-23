import { TravelOptimizer } from "./TravelOptimizer";
import { UserInputHandler } from "./UserInputHandler";

async function main() 
{
    var messageCarSeats: string = 'Enter car seat capacities, e.g. "3, 5, 3" = 3 cars with 11 total seats: '
    var messagePassengers : string = 'Enter number of people to transport, e.g. "1, 2, 3" = 6 people: '
    
    const peopleToTransport = await UserInputHandler.promptForInput(messagePassengers);
    console.log("Parsed people to transport array:", peopleToTransport);

    const carSeats = await UserInputHandler.promptForInput(messageCarSeats);
    console.log("Parsed car seat array:", carSeats);

    try 
    {
        const passengerCount = TravelOptimizer.CalculatePassengerCount(peopleToTransport);
        const carsUsed = TravelOptimizer.CalculateMinimumCars(carSeats, passengerCount);
        console.log(`\nMinimum amount of cars needed: ${carsUsed}`);

    } catch (error: any) 
    {
        console.error(`Error: ${error.message}`);
    }
}

main();
