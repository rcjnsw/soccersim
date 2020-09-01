/**
 * @license
 * Copyright 2020 RoboCupJunior Australia
 */

/**
 * @fileoverview Generating JavaScript for soccer simulation blocks.
 */
'use strict';

goog.provide('Blockly.JavaScript.rcja');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['motor_set_speed'] = function(block) {
  var arg = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_NONE) || '0';
  var code = 'setMotorSpeed(' + arg + ');\n';
  return code;
};

Blockly.JavaScript['ball_get_angle'] = function(block) {
  var code = 'getBallAngle()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ball_get_distance'] = function(block) {
  var code = 'getBallDistance()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['compass_get_heading'] = function(block) {
  var code = 'getCompassHeading()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['print'] = function(block) {
  var arg = Blockly.JavaScript.valueToCode(block, 'print_input', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'print(' + arg + ');\n';
  return code;
};

Blockly.JavaScript['on_program_start'] = function(block) {
  var arg = Blockly.JavaScript.statementToCode(block, 'start_input');
  var code = 'onProgramStart() {\n' + arg + '}\n';
  return code;
};