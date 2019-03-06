int pump = 2;
void setup() {
    pinMode(pump, OUTPUT);
    Serial.begin(9600);
}

void loop() {
  digitalWrite(pump, HIGH);
  int sensorValue = analogRead(A0);
  Serial.println(sensorValue);
  delay(1);
  while(sensorValue > 625){
    digitalWrite(pump, LOW);
    sensorValue = analogRead(A0);
    Serial.println(sensorValue);
    delay(1);
  }
}
