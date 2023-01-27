/*
     /Arduino Brushless Motor Control
     by Dejan, https://howtomechatronics.com
*/

#include <Servo.h>

Servo ESC;
Servo L_F_prop;// create servo object to control the ESC
Servo L_B_prop;
Servo R_F_prop;
Servo R_B_prop;

int escval1 = analogRead(A0);
int escval2 = analogRead(A1);
int escval3 = analogRead(A2);
int escval4 = analogRead(A3);

void setup() {
  Serial.begin(9600);
  L_F_prop.attach(3, 1000, 2000); // (pin, min pulse width, max pulse width in microseconds)
  L_B_prop.attach(5, 1000, 2000);
  R_F_prop.attach(6, 1000, 2000);
  R_B_prop.attach(9, 1000, 2000);
}

void loop() {
  escval1 = analogRead(A0);
  escval2 = analogRead(A1);
  escval3 = analogRead(A2);
  escval4 = analogRead(A3);
  escval1 = map(escval1, 0, 1023, 1000, 2000);
  escval2 = map(escval2, 0, 1023, 1000, 2000);
  escval3 = map(escval3, 0, 1023, 1000, 2000);
  escval4 = map(escval4, 0, 1023, 1000, 2000);
  Serial.println(escval1);
  Serial.println(escval2);
  Serial.println(escval3);
  Serial.println(escval4);
  L_F_prop.writeMicroseconds(escval1);
  L_B_prop.writeMicroseconds(escval2);
  R_F_prop.writeMicroseconds(escval3);
  R_B_prop.writeMicroseconds(escval4);
  delay(100);
}
