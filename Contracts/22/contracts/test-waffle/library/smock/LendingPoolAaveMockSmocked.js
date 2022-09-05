// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Array = require("rescript/lib/js/belt_Array.js");

function mockDepositToReturn(_r) {
  ((_r.smocked.deposit.will.return()));
  
}

function depositCalls(_r) {
  var array = _r.smocked.deposit.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        asset: param[0],
                        amount: param[1],
                        onBehalfOf: param[2],
                        referralCode: param[3]
                      };
              }));
}

function mockWithdrawToReturn(_r, _param0) {
  ((_r.smocked.withdraw.will.return.with([_param0])));
  
}

function withdrawCalls(_r) {
  var array = _r.smocked.withdraw.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        asset: param[0],
                        amount: param[1],
                        _to: param[2]
                      };
              }));
}

var uninitializedValue;

exports.uninitializedValue = uninitializedValue;
exports.mockDepositToReturn = mockDepositToReturn;
exports.depositCalls = depositCalls;
exports.mockWithdrawToReturn = mockWithdrawToReturn;
exports.withdrawCalls = withdrawCalls;
/* No side effect */