
#include <SoftwareSerial.h>

SoftwareSerial hc06(2,3);
int ms =255; //motorspeed
byte state = LOW;
int pump = 6;

void setup() {
    Serial.begin(9600);
    pinMode(pump, OUTPUT);
    hc06.begin(9600);
    pinMode(5, OUTPUT);
    pinMode(4, INPUT);
    attachInterrupt(digitalPinToInterrupt(4),interrupt1, RISING);
}

void loop() {
  digitalWrite(pump, HIGH);
  
  int sensorValue = analogRead(A0);
  
  hc06.println(sensorValue);
  Serial.println(sensorValue);
  
  delay(1000);
  
  if(sensorValue > 625){
    delay(1000);
    analogWrite (5,ms);
    delay(1000);
    analogWrite (5,0);
    delay(5000);
    
    digitalWrite(pump, LOW);
    sensorValue = analogRead(A0);
    
    hc06.println(sensorValue);
    Serial.println(ms);
    
    delay(1);
  }
}
void interrupt1(){
  state = !state; 
  //when the button is untouched the fan remains on
  //when the button is pushed the fan turns off
}
