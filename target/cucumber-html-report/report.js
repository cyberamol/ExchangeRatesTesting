$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ConversionRates.feature");
formatter.feature({
  "name": "Get and validate conversion rates for past and future dates using Foreign Exchange Rates API",
  "description": "  Description: Validate that Foreign Exchange Rates API is fit for consumption for financial reasons",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate that API responds with correct status code when queried with different parameter combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"\u003cEndPoint\u003e\" \"\u003cQueryParam\u003e\" \"\u003cBaseCurrency\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API Should respond with status code as \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Response should contain not null values for \"\u003cBaseCurrency\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "QueryParam",
        "BaseCurrency",
        "StatusCode"
      ]
    },
    {
      "cells": [
        "latest",
        "symbols",
        "GBP",
        "200"
      ]
    },
    {
      "cells": [
        "latest",
        "symbols",
        "USD,GBP",
        "200"
      ]
    },
    {
      "cells": [
        "latest",
        "base",
        "GBP",
        "200"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that API responds with correct status code when queried with different parameter combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"latest\" \"symbols\" \"GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with symbols \u003d GBP");
formatter.write("Response received : {\"base\":\"EUR\",\"rates\":{\"GBP\":0.89673},\"date\":\"2020-06-01\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027GBP\u0027 , returned a valid actual value \u00270.89673\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that API responds with correct status code when queried with different parameter combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"latest\" \"symbols\" \"USD,GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with symbols \u003d USD,GBP");
formatter.write("Response received : {\"base\":\"EUR\",\"rates\":{\"USD\":1.1116,\"GBP\":0.89673},\"date\":\"2020-06-01\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"USD,GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027USD\u0027 , returned a valid actual value \u00271.1116\u0027");
formatter.write("Response currency : \u0027GBP\u0027 , returned a valid actual value \u00270.89673\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that API responds with correct status code when queried with different parameter combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"latest\" \"base\" \"GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d GBP");
formatter.write("Response received : {\"base\":\"GBP\",\"rates\":{\"GBP\":1.0,\"HKD\":9.6088008654,\"IDR\":18110.7802794598,\"ILS\":4.343224828,\"DKK\":8.3134276761,\"INR\":93.6045409432,\"CHF\":1.1916630424,\"MXN\":27.2679624859,\"CZK\":29.9521595129,\"SGD\":1.7473487003,\"THB\":39.2581936592,\"HRK\":8.4635285984,\"EUR\":1.1151628695,\"MYR\":5.3532278389,\"NOK\":12.0314921994,\"CNY\":8.8462524952,\"BGN\":2.1810355402,\"PHP\":62.390017062,\"PLN\":4.9377181537,\"ZAR\":21.633379055,\"CAD\":1.6981700177,\"ISK\":168.3895933001,\"BRL\":6.6102394255,\"RON\":5.4015143912,\"NZD\":1.9876662987,\"TRY\":8.4465781227,\"JPY\":133.5407536271,\"RUB\":86.3557592586,\"KRW\":1521.5728257112,\"USD\":1.2396150458,\"AUD\":1.8386805393,\"HUF\":385.2330132816,\"SEK\":11.6685066854},\"date\":\"2020-06-01\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027GBP\u0027 , returned a valid actual value \u00271.0\u0027");
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Confirm that API responds with correct base value for currency based on input",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"\u003cEndPoint\u003e\" \"\u003cQueryParam\u003e\" \"\u003cBaseCurrency\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Response should contain base currency as \"\u003cBaseCurrency\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Response should contain value \"1.0\" for \"\u003cBaseCurrency\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Response should contain not null values for \"\u003cCheckCurrencies\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "QueryParam",
        "BaseCurrency",
        "CheckCurrencies"
      ]
    },
    {
      "cells": [
        "latest",
        "base",
        "GBP",
        "INR,AUD"
      ]
    },
    {
      "cells": [
        "latest",
        "base",
        "INR",
        "PHP,AUD"
      ]
    },
    {
      "cells": [
        "latest",
        "base",
        "AUD",
        "INR,USD"
      ]
    },
    {
      "cells": [
        "latest",
        "base",
        "HKD",
        "INR,AUD"
      ]
    },
    {
      "cells": [
        "latest",
        "base",
        "NZD",
        "INR,AUD"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Confirm that API responds with correct base value for currency based on input",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"latest\" \"base\" \"GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d GBP");
formatter.write("Response received : {\"base\":\"GBP\",\"rates\":{\"GBP\":1.0,\"HKD\":9.6088008654,\"IDR\":18110.7802794598,\"ILS\":4.343224828,\"DKK\":8.3134276761,\"INR\":93.6045409432,\"CHF\":1.1916630424,\"MXN\":27.2679624859,\"CZK\":29.9521595129,\"SGD\":1.7473487003,\"THB\":39.2581936592,\"HRK\":8.4635285984,\"EUR\":1.1151628695,\"MYR\":5.3532278389,\"NOK\":12.0314921994,\"CNY\":8.8462524952,\"BGN\":2.1810355402,\"PHP\":62.390017062,\"PLN\":4.9377181537,\"ZAR\":21.633379055,\"CAD\":1.6981700177,\"ISK\":168.3895933001,\"BRL\":6.6102394255,\"RON\":5.4015143912,\"NZD\":1.9876662987,\"TRY\":8.4465781227,\"JPY\":133.5407536271,\"RUB\":86.3557592586,\"KRW\":1521.5728257112,\"USD\":1.2396150458,\"AUD\":1.8386805393,\"HUF\":385.2330132816,\"SEK\":11.6685066854},\"date\":\"2020-06-01\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027GBP\u0027 matches with expected base currency : \u0027GBP\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain value \"1.0\" for \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.Response_should_contain_value(String,String)"
});
formatter.write("Field : \u0027GBP\u0027 , Actual value \u00271.0\u0027 matches with Expected value \u00271.0");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"INR,AUD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027INR\u0027 , returned a valid actual value \u002793.60454\u0027");
formatter.write("Response currency : \u0027AUD\u0027 , returned a valid actual value \u00271.8386805\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Confirm that API responds with correct base value for currency based on input",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"latest\" \"base\" \"INR\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d INR");
formatter.write("Response received : {\"base\":\"INR\",\"rates\":{\"GBP\":0.0106832424,\"HKD\":0.1026531488,\"IDR\":193.4818556554,\"ILS\":0.0463997236,\"DKK\":0.088814363,\"INR\":1.0,\"CHF\":0.0127308251,\"MXN\":0.2913102528,\"CZK\":0.3199861803,\"SGD\":0.0186673497,\"THB\":0.4194047988,\"HRK\":0.0904179275,\"EUR\":0.0119135552,\"MYR\":0.0571898306,\"NOK\":0.1285353475,\"CNY\":0.0945066597,\"BGN\":0.0233005313,\"PHP\":0.6665276752,\"PLN\":0.0527508399,\"ZAR\":0.2311146322,\"CAD\":0.0181419619,\"ISK\":1.7989468417,\"BRL\":0.0706187901,\"RON\":0.0577056875,\"NZD\":0.0212347209,\"TRY\":0.0902368415,\"JPY\":1.4266482404,\"RUB\":0.9225595082,\"KRW\":16.255331316,\"USD\":0.013243108,\"AUD\":0.0196430699,\"HUF\":4.1155376587,\"SEK\":0.1246574853},\"date\":\"2020-06-01\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"INR\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027INR\u0027 matches with expected base currency : \u0027INR\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain value \"1.0\" for \"INR\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.Response_should_contain_value(String,String)"
});
formatter.write("Field : \u0027INR\u0027 , Actual value \u00271.0\u0027 matches with Expected value \u00271.0");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"PHP,AUD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027PHP\u0027 , returned a valid actual value \u00270.6665277\u0027");
formatter.write("Response currency : \u0027AUD\u0027 , returned a valid actual value \u00270.01964307\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Confirm that API responds with correct base value for currency based on input",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"latest\" \"base\" \"AUD\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d AUD");
formatter.write("Response received : {\"base\":\"AUD\",\"rates\":{\"GBP\":0.5438682678,\"HKD\":5.2259218826,\"IDR\":9849.8786996604,\"ILS\":2.362142164,\"DKK\":4.5214095099,\"INR\":50.9085395439,\"CHF\":0.6481077147,\"MXN\":14.8301795245,\"CZK\":16.2900291121,\"SGD\":0.9503275109,\"THB\":21.3512857836,\"HRK\":4.6030446385,\"EUR\":0.6065016982,\"MYR\":2.9114507521,\"NOK\":6.5435468219,\"CNY\":4.8111960213,\"BGN\":1.1861960213,\"PHP\":33.9319505095,\"PLN\":2.6854682193,\"ZAR\":11.765708394,\"CAD\":0.923580786,\"ISK\":91.5817564289,\"BRL\":3.5950994663,\"RON\":2.9377122756,\"NZD\":1.0810286269,\"TRY\":4.5938258127,\"JPY\":72.62857836,\"RUB\":46.9661572052,\"KRW\":827.5351770985,\"USD\":0.6741872877,\"AUD\":1.0,\"HUF\":209.5160116448,\"SEK\":6.3461305192},\"date\":\"2020-06-01\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"AUD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027AUD\u0027 matches with expected base currency : \u0027AUD\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain value \"1.0\" for \"AUD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.Response_should_contain_value(String,String)"
});
formatter.write("Field : \u0027AUD\u0027 , Actual value \u00271.0\u0027 matches with Expected value \u00271.0");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"INR,USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027INR\u0027 , returned a valid actual value \u002750.90854\u0027");
formatter.write("Response currency : \u0027USD\u0027 , returned a valid actual value \u00270.6741873\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Confirm that API responds with correct base value for currency based on input",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"latest\" \"base\" \"HKD\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d HKD");
formatter.write("Response received : {\"base\":\"HKD\",\"rates\":{\"GBP\":0.1040712586,\"HKD\":1.0,\"IDR\":1884.8116984855,\"ILS\":0.4520048744,\"DKK\":0.8651888818,\"INR\":9.7415423896,\"CHF\":0.1240178727,\"MXN\":2.8378111762,\"CZK\":3.1171589392,\"SGD\":0.1818487785,\"THB\":4.0856496257,\"HRK\":0.8808100737,\"EUR\":0.1160564034,\"MYR\":0.5571171589,\"NOK\":1.2521325364,\"CNY\":0.9206406313,\"BGN\":0.2269831138,\"PHP\":6.4930076017,\"PLN\":0.513874543,\"ZAR\":2.2514129867,\"CAD\":0.1767306911,\"ISK\":17.5245169152,\"BRL\":0.6879359369,\"RON\":0.5621424012,\"NZD\":0.2068589334,\"TRY\":0.8790460164,\"JPY\":13.8977543086,\"RUB\":8.9871525561,\"KRW\":158.3519990715,\"USD\":0.129008298,\"AUD\":0.1913537979,\"HUF\":40.0916845587,\"SEK\":1.2143561771},\"date\":\"2020-06-01\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"HKD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027HKD\u0027 matches with expected base currency : \u0027HKD\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain value \"1.0\" for \"HKD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.Response_should_contain_value(String,String)"
});
formatter.write("Field : \u0027HKD\u0027 , Actual value \u00271.0\u0027 matches with Expected value \u00271.0");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"INR,AUD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027INR\u0027 , returned a valid actual value \u00279.741543\u0027");
formatter.write("Response currency : \u0027AUD\u0027 , returned a valid actual value \u00270.1913538\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Confirm that API responds with correct base value for currency based on input",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"latest\" \"base\" \"NZD\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d NZD");
formatter.write("Response received : {\"base\":\"NZD\",\"rates\":{\"GBP\":0.5031025583,\"HKD\":4.834212298,\"IDR\":9111.5798922801,\"ILS\":2.1850875224,\"DKK\":4.1825067325,\"INR\":47.0926840215,\"CHF\":0.5995287253,\"MXN\":13.7185816876,\"CZK\":15.069008079,\"SGD\":0.8790956014,\"THB\":19.7508976661,\"HRK\":4.2580228905,\"EUR\":0.5610412926,\"MYR\":2.6932226212,\"NOK\":6.0530745063,\"CNY\":4.4505722621,\"BGN\":1.0972845601,\"PHP\":31.3885771993,\"PLN\":2.4841786355,\"ZAR\":10.8838083483,\"CAD\":0.8543536804,\"ISK\":84.7172351885,\"BRL\":3.3256283662,\"RON\":2.7175157092,\"NZD\":1.0,\"TRY\":4.2494950628,\"JPY\":67.1846947935,\"RUB\":43.4458034111,\"KRW\":765.5071813285,\"USD\":0.6236535009,\"AUD\":0.9250448833,\"HUF\":193.8117145422,\"SEK\":5.8704555655},\"date\":\"2020-06-01\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"NZD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027NZD\u0027 matches with expected base currency : \u0027NZD\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain value \"1.0\" for \"NZD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.Response_should_contain_value(String,String)"
});
formatter.write("Field : \u0027NZD\u0027 , Actual value \u00271.0\u0027 matches with Expected value \u00271.0");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"INR,AUD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027INR\u0027 , returned a valid actual value \u002747.092686\u0027");
formatter.write("Response currency : \u0027AUD\u0027 , returned a valid actual value \u00270.9250449\u0027");
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate results when incorrect/invalid endpoint is invoked",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidEndpoint"
    },
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as ?base\u003d\"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API Should respond with status code as \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Error message should be displayed as \"\u003cErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "StatusCode",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "BKG",
        "400",
        "Base \u0027BKG\u0027 is not supported."
      ]
    },
    {
      "cells": [
        "123",
        "400",
        "Base \u0027123\u0027 is not supported."
      ]
    },
    {
      "cells": [
        "@#$",
        "400",
        "Base \u0027@#$\u0027 is not supported."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate results when incorrect/invalid endpoint is invoked",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidEndpoint"
    },
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as ?base\u003d\"BKG\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d BKG");
formatter.write("Response received : {\"error\":\"Base \u0027BKG\u0027 is not supported.\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027400\u0027 matches with expected status code : \u0027400\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed as \"Base \u0027BKG\u0027 is not supported.\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.error_message_should_be_displayed_as(String)"
});
formatter.write("Expected error message received : \u0027{\"error\":\"Base \u0027BKG\u0027 is not supported.\"}\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate results when incorrect/invalid endpoint is invoked",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidEndpoint"
    },
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as ?base\u003d\"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d 123");
formatter.write("Response received : {\"error\":\"Base \u0027123\u0027 is not supported.\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027400\u0027 matches with expected status code : \u0027400\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed as \"Base \u0027123\u0027 is not supported.\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.error_message_should_be_displayed_as(String)"
});
formatter.write("Expected error message received : \u0027{\"error\":\"Base \u0027123\u0027 is not supported.\"}\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate results when incorrect/invalid endpoint is invoked",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidEndpoint"
    },
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as ?base\u003d\"@#$\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d @#$");
formatter.write("Response received : {\"error\":\"Base \u0027@#$\u0027 is not supported.\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027400\u0027 matches with expected status code : \u0027400\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed as \"Base \u0027@#$\u0027 is not supported.\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.error_message_should_be_displayed_as(String)"
});
formatter.write("Expected error message received : \u0027{\"error\":\"Base \u0027@#$\u0027 is not supported.\"}\u0027");
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate that API returns data for specific past date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PastConversionRates"
    },
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"\u003cEndPoint\u003e\" \"\u003cQueryParam\u003e\" \"\u003cBaseCurrency\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Response should contain date as \"\u003cResponseDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Response should contain not null values for \"\u003cCheckCurrencies\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Response should contain base currency as \"\u003cBaseCurrency\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "QueryParam",
        "BaseCurrency",
        "ResponseDate",
        "CheckCurrencies"
      ]
    },
    {
      "cells": [
        "2020-06-01",
        "base",
        "INR",
        "2020-06-01",
        "AUD,GBP"
      ]
    },
    {
      "cells": [
        "2020-05-31",
        "base",
        "USD",
        "2020-05-31",
        "NZD,INR"
      ]
    },
    {
      "cells": [
        "2019-12-31",
        "base",
        "USD",
        "2019-12-31",
        "NZD,INR"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that API returns data for specific past date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PastConversionRates"
    },
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"2020-06-01\" \"base\" \"INR\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/ with base \u003d INR");
formatter.write("Response received : {\"base\":\"INR\",\"rates\":{\"GBP\":0.0106832424,\"HKD\":0.1026531488,\"IDR\":193.4818556554,\"ILS\":0.0463997236,\"DKK\":0.088814363,\"INR\":1.0,\"CHF\":0.0127308251,\"MXN\":0.2913102528,\"CZK\":0.3199861803,\"SGD\":0.0186673497,\"THB\":0.4194047988,\"HRK\":0.0904179275,\"EUR\":0.0119135552,\"MYR\":0.0571898306,\"NOK\":0.1285353475,\"CNY\":0.0945066597,\"BGN\":0.0233005313,\"PHP\":0.6665276752,\"PLN\":0.0527508399,\"ZAR\":0.2311146322,\"CAD\":0.0181419619,\"ISK\":1.7989468417,\"BRL\":0.0706187901,\"RON\":0.0577056875,\"NZD\":0.0212347209,\"TRY\":0.0902368415,\"JPY\":1.4266482404,\"RUB\":0.9225595082,\"KRW\":16.255331316,\"USD\":0.013243108,\"AUD\":0.0196430699,\"HUF\":4.1155376587,\"SEK\":0.1246574853},\"date\":\"2020-06-01\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain date as \"2020-06-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.Response_should_contain_expected_date(String)"
});
formatter.write("Expected Date 2020-06-01 matches with actual response date 2020-06-01");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"AUD,GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027AUD\u0027 , returned a valid actual value \u00270.01964307\u0027");
formatter.write("Response currency : \u0027GBP\u0027 , returned a valid actual value \u00270.010683242\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"INR\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027INR\u0027 matches with expected base currency : \u0027INR\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that API returns data for specific past date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PastConversionRates"
    },
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"2020-05-31\" \"base\" \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/ with base \u003d USD");
formatter.write("Response received : {\"base\":\"USD\",\"rates\":{\"GBP\":0.8089798851,\"HKD\":7.7538613506,\"IDR\":14610.003591954,\"ILS\":3.5079920977,\"DKK\":6.6937859195,\"INR\":75.5230783046,\"CHF\":0.9626436782,\"MXN\":22.0635775862,\"CZK\":24.1747485632,\"SGD\":1.4109195402,\"THB\":31.8103448276,\"HRK\":6.8130387931,\"EUR\":0.8979885057,\"MYR\":4.3475215517,\"NOK\":9.6875,\"CNY\":7.1350574713,\"BGN\":1.7562859195,\"PHP\":50.4947916667,\"PLN\":3.9955998563,\"ZAR\":17.4424389368,\"CAD\":1.3721264368,\"ISK\":135.4166666667,\"BRL\":5.3568606322,\"RON\":4.3546156609,\"NZD\":1.6040768678,\"TRY\":6.8337823276,\"JPY\":107.1210488506,\"RUB\":70.4396551724,\"KRW\":1235.8207614943,\"USD\":1.0,\"AUD\":1.4979346264,\"HUF\":313.1555316092,\"SEK\":9.4172054598},\"date\":\"2020-05-29\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain date as \"2020-05-31\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.Response_should_contain_expected_date(String)"
});
formatter.write("Expected Date 2020-05-29 matches with actual response date 2020-05-29");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"NZD,INR\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027NZD\u0027 , returned a valid actual value \u00271.6040769\u0027");
formatter.write("Response currency : \u0027INR\u0027 , returned a valid actual value \u002775.52308\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027USD\u0027 matches with expected base currency : \u0027USD\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that API returns data for specific past date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PastConversionRates"
    },
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"2019-12-31\" \"base\" \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/ with base \u003d USD");
formatter.write("Response received : {\"base\":\"USD\",\"rates\":{\"GBP\":0.7573437778,\"HKD\":7.7864518426,\"IDR\":13882.4995549226,\"ILS\":3.4578066584,\"DKK\":6.6507922378,\"INR\":71.3788499199,\"CHF\":0.9661741143,\"MXN\":18.8892647321,\"CZK\":22.6170553676,\"SGD\":1.3451130497,\"THB\":29.7445255474,\"HRK\":6.6223072815,\"EUR\":0.890154887,\"MYR\":4.090528752,\"NOK\":8.7803097739,\"CNY\":6.9614562934,\"BGN\":1.7409649279,\"PHP\":50.6498130675,\"PLN\":3.7892113228,\"ZAR\":14.0442406979,\"CAD\":1.299448104,\"ISK\":120.8830336479,\"BRL\":4.019672423,\"RON\":4.2576108243,\"NZD\":1.4823749332,\"TRY\":5.9500623108,\"JPY\":108.5454869147,\"RUB\":62.271942318,\"KRW\":1153.889976856,\"USD\":1.0,\"AUD\":1.4238027417,\"HUF\":294.2228947837,\"SEK\":9.299270073},\"date\":\"2019-12-31\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain date as \"2019-12-31\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.Response_should_contain_expected_date(String)"
});
formatter.write("Expected Date 2019-12-31 matches with actual response date 2019-12-31");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"NZD,INR\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027NZD\u0027 , returned a valid actual value \u00271.4823749\u0027");
formatter.write("Response currency : \u0027INR\u0027 , returned a valid actual value \u002771.37885\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027USD\u0027 matches with expected base currency : \u0027USD\u0027");
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate that API returns data for today when queried for a future date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FutureConversionRates"
    },
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"\u003cEndPoint\u003e\" \"\u003cQueryParam\u003e\" \"\u003cBaseCurrency\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Response should contain date as \"\u003cResponseDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Response for future date should match with response for today",
  "keyword": "And "
});
formatter.step({
  "name": "Response should contain not null values for \"\u003cCheckCurrencies\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "QueryParam",
        "BaseCurrency",
        "ResponseDate",
        "CheckCurrencies"
      ]
    },
    {
      "cells": [
        "2020-06-03",
        "base",
        "EUR",
        "Today",
        "NZD,INR"
      ]
    },
    {
      "cells": [
        "2020-12-31",
        "base",
        "EUR",
        "Today",
        "NZD,INR"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that API returns data for today when queried for a future date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FutureConversionRates"
    },
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"2020-06-03\" \"base\" \"EUR\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/ with base \u003d EUR");
formatter.write("Response received : {\"base\":\"EUR\",\"rates\":{\"GBP\":0.89673,\"HKD\":8.6165,\"IDR\":16240.48,\"ILS\":3.8947,\"DKK\":7.4549,\"INR\":83.938,\"CHF\":1.0686,\"MXN\":24.452,\"CZK\":26.859,\"SGD\":1.5669,\"THB\":35.204,\"HRK\":7.5895,\"MYR\":4.8004,\"NOK\":10.789,\"CNY\":7.9327,\"BGN\":1.9558,\"PHP\":55.947,\"SEK\":10.4635,\"PLN\":4.4278,\"ZAR\":19.3993,\"CAD\":1.5228,\"ISK\":151.0,\"BRL\":5.9276,\"RON\":4.8437,\"NZD\":1.7824,\"TRY\":7.5743,\"JPY\":119.75,\"RUB\":77.4378,\"KRW\":1364.44,\"USD\":1.1116,\"HUF\":345.45,\"AUD\":1.6488},\"date\":\"2020-06-01\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain date as \"Today\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.Response_should_contain_expected_date(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c2020-06-0[2]\u003e but was:\u003c2020-06-0[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.ConversionRatesAPISteps.Response_should_contain_expected_date(ConversionRatesAPISteps.java:183)\r\n\tat ✽.Response should contain date as \"Today\"(file:src/test/resources/features/ConversionRates.feature:65)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Response for future date should match with response for today",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_for_future_date_should_match_with_response_for_today()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Response should contain not null values for \"NZD,INR\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ConversionRatesAPISteps.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that API returns data for today when queried for a future date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FutureConversionRates"
    },
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"2020-12-31\" \"base\" \"EUR\"",
  "keyword": "When "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/ with base \u003d EUR");
formatter.write("Response received : {\"base\":\"EUR\",\"rates\":{\"GBP\":0.89673,\"HKD\":8.6165,\"IDR\":16240.48,\"ILS\":3.8947,\"DKK\":7.4549,\"INR\":83.938,\"CHF\":1.0686,\"MXN\":24.452,\"CZK\":26.859,\"SGD\":1.5669,\"THB\":35.204,\"HRK\":7.5895,\"MYR\":4.8004,\"NOK\":10.789,\"CNY\":7.9327,\"BGN\":1.9558,\"PHP\":55.947,\"SEK\":10.4635,\"PLN\":4.4278,\"ZAR\":19.3993,\"CAD\":1.5228,\"ISK\":151.0,\"BRL\":5.9276,\"RON\":4.8437,\"NZD\":1.7824,\"TRY\":7.5743,\"JPY\":119.75,\"RUB\":77.4378,\"KRW\":1364.44,\"USD\":1.1116,\"HUF\":345.45,\"AUD\":1.6488},\"date\":\"2020-06-01\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConversionRatesAPISteps.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain date as \"Today\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.Response_should_contain_expected_date(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c2020-06-0[2]\u003e but was:\u003c2020-06-0[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.ConversionRatesAPISteps.Response_should_contain_expected_date(ConversionRatesAPISteps.java:183)\r\n\tat ✽.Response should contain date as \"Today\"(file:src/test/resources/features/ConversionRates.feature:65)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Response for future date should match with response for today",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_for_future_date_should_match_with_response_for_today()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Response should contain not null values for \"NZD,INR\"",
  "keyword": "And "
});
formatter.match({
  "location": "ConversionRatesAPISteps.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.result({
  "status": "skipped"
});
});