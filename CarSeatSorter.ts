export class CarSeatSorter 
{
    //Here I orgainsed the values within the car seat array in descending order, to prevent local minimum being found with greedy algorithmn
    static sortSeatsDescending(carSeats: number[]) : number[]
    {
        return [...carSeats].sort((a, b) => b - a);
    }

    static sortSeatsAscending(carSeats: number[]) : number[]
    {
        return [...carSeats].sort((a, b) => a - b);
    }
}

