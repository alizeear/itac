/*
  Analog input, analog output, serial output
 
 Reads an analog input pin, maps the result to a range from 0 to 255
 and uses the result to set the pulsewidth modulation (PWM) of an output pin.
 Also prints the results to the serial monitor.
 
 The circuit:
 * potentiometer connected to analog pin 0.
   Center pin of the potentiometer goes to the analog pin.
   side pins of the potentiometer go to +5V and ground
 * LED connected from digital pin 9 to ground
 
 created 29 Dec. 2008
 modified 9 Apr 2012
 by Tom Igoe
 
 This example code is in the public domain.
 
 */

// These constants won't change.  They're used to give names
// to the pins used:
const int analogInPin = A0;  // Analog input pin that the potentiometer is attached to
const int analogOutPin = 13; // Analog output pin that the LED is attached to

int sensorValue = 0;        // value read from the pot
int outputValue = 0;        // value output to the PWM (analog out)
int LED = 13; //port de la LED
int Seuil=510;
int test;
char msg = '  ';

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
  pinMode(LED,OUTPUT);
  Serial.print("Program Initiated\n");
}

void loop() {         
  //Permet d'allumer ou d'éteindre la LED manuellement
 
  while (Serial.available()>0){  
        msg=Serial.read();  
    }  
  
  // Turn LED on/off if we recieve 'Y'/'N' over serial  
  if (msg=='Y') {  
    digitalWrite(LED, HIGH);  // turn LED ON  
    Serial.print("LED Activated\n");  
    msg=' ';  
  } else if (msg=='N') {  
    digitalWrite(LED, LOW); // turn LED OFF 
    Serial.print("LED Desactivated\n");  
  }  
}
