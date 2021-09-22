#include "DHT.h"

#define DHTPIN 7
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);  
  dht.begin();
}

void loop() {
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  Serial.print("Humidity:="); 
  Serial.println(humidity);
  
  Serial.print("Temperature="); 
  Serial.println(temperature);

  Serial.println("");

  delay(1000);
}
