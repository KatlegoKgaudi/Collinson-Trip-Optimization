import { CarSeatSorter } from './CarSeatSorter.js';

export class TravelOptimizer 
{
    //This is the function I use to calculate the amount of passengers by looping and adding all values to one variable
    static CalculatePassengerCount(peopleArray: number[] ) : number 
    {
        if(peopleArray.length <= 0) 
        {
            throw new Error(`Please provide a list of people you want to transport`);
        }

        let numPassenger = 0;

        for(let i = 0; i <= peopleArray.length - 1; i++)
        {
            if(peopleArray[i] <= 0 )
            {
                throw new Error(`A Person cannot be negative or null`);  
            }
            numPassenger += peopleArray[i]; 
        }

        return numPassenger;
    }

    /*greedy algorithmn that uses the most car seat capacity first hence the sorted descending 
    order seat logic to assist this function in it's calculation */ 
    static CalculateMinimumCars(carSeats: number[], passengersCount: number) : number 
    {
        if(carSeats.length <= 0) 
        {
            throw new Error(`A car with seats has not been provided`);
        }

        let carsUsed = 0;
        
        const sortedCarSeats = CarSeatSorter.sortSeatsDescending(carSeats); 

        for (const carSeat of sortedCarSeats) 
        {
            if(carSeat <= 0)
            {
                throw new Error(`car seat cannot be negative or null`);    
            }

            passengersCount -= carSeat;
            carsUsed++;

            if (passengersCount <= 0) 
            {
                return carsUsed;
            }
        }

        if(passengersCount >= 1) 
        {
            throw new Error(`Not enough cars available for all the required passengers as ${carsUsed}/${carSeats.length} cars have been used but: ${passengersCount} passenger's who still need a lift`);
        }

        return carsUsed; 
    }
}