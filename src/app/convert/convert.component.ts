import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-convert',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './convert.component.html',
    styleUrl: './convert.component.scss'
})
export class ConvertComponent {
    celsius: number = 0;
    fahrenheit: number = 0;
    meter: number = 0;
    feet: number = 0;
    resultTemp: string = "";
    resultLength: string = "";

    //Convert from Celsius to Fahrenheit or the other way around.
    convertToFahrenheit() {
        //Calculation with data-binding.
        this.fahrenheit = this.celsius * 9 / 5 + 32;

        //Result-string to post as info.
        this.resultTemp = `${this.celsius.toFixed(2)} °C motsvarar ungefär ${this.fahrenheit.toFixed(2)} °F.`;
    }

    convertToCelsius() {
        //Calculation with data-binding.
        this.celsius = (this.fahrenheit - 32) * 5 / 9;
        //Result-string to post as info.
        this.resultTemp = `${this.fahrenheit.toFixed(2)} °F motsvarar ungefär ${this.celsius.toFixed(2)} °C.`;
    }

    //Convert from feet to meter or the other way around
    convertToMeter() {
        //Calculation with data-binding.
        this.meter = this.feet * 0.3048;

        //Result-string to post as info.
        this.resultLength = `${this.feet.toFixed(2)} feet motsvarar ungefär ${this.meter.toFixed(2)} meter.`;
    }

    convertToFeet() {
        //Calculation with data-binding.
        this.feet = this.meter / 0.3048;

        //Result-string to post as info.
        this.resultLength = `${this.meter.toFixed(2)} meter motsvarar ungefär ${this.feet.toFixed(2)} feet.`;
    }


}
