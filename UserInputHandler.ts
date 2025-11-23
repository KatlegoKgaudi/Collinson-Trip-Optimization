import * as readline from "node:readline";

export class UserInputHandler {

    /*I use the stable readline module from node in order to capture input as 
    opposed to inputPrompt as this is a console app, not a website with a GUI prompt functionality*/
    private static askQuestion(query: string): Promise<string> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise(resolve => {
            rl.question(query, answer => {
                rl.close();
                resolve(answer);
            });
        });
    }

    //this split the array using ',' delimiter and then checks if any of the values are Not a Number 
    private static parseNumberArray(input: string): number[] | null {
        const parts = input.split(",").map(x => x.trim());

        for (const p of parts) {
            if (isNaN(Number(p))) return null;
        }

        return parts.map(Number);
    }

    //This is what I use to capture user-input from console in order to acquire car seat array. 
    public static async promptForInput(message: string): Promise<number[]> {
        while (true) {
            const input = await this.askQuestion(
                message
            );

            const numbers = this.parseNumberArray(input);
            if (numbers !== null) return numbers;

            console.log("Invalid input. Example: 10, 7, 5");
        }
    }
}
