//*********************************************************************************************************************************************
package stepDefinitions;

import base.TestBase;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import java.time.LocalDate;
import java.util.LinkedHashMap;
import java.util.Map;
import org.junit.Assert;
import utils.ConfigReader;
import utils.UtilityHelper;

//*********************************************************************************************************************************************
public class ConversionRatesAPISteps extends TestBase {
	String baseURI;
	String baseURILatest;
	
	@Before
	public void SetUp(Scenario s) {
		scn = s;
	}	

	// *************************************************************************************************************************************
	// Function Objective:constructor
	// *************************************************************************************************************************************
	public ConversionRatesAPISteps() {
		baseURI = ConfigReader.getInstance().getProperty("base_URI");
		baseURILatest = ConfigReader.getInstance().getProperty("base_URI_Latest");
	}

	// *************************************************************************************************************************************
	// Function Objective:Health check for API by validating response status code
	// *************************************************************************************************************************************
	@Given("^Foreign Exchange Rates API is accessible$")
	public void isForeignExchangeAPIAccessible() throws Throwable {
		scn.write("URI under test" + baseURILatest);
		isAPIAccessible(baseURILatest, 200);
		scn.write("API is up and running");
	}

	// *************************************************************************************************************************************
	// Function Objective:Hit endpoint as per inputs
	// *************************************************************************************************************************************
	@When("^API is hit with end point as \\?base=\"([^\"]*)\"$")
	public void api_is_hit_with_end_point_as(String baseCurrency) throws Throwable {
		scn.write("Hitting endpoint '" + baseURILatest + " with base = " + baseCurrency);
		hitEndpoint(baseURILatest, "base", baseCurrency);
		scn.write("Response received : " + getResponse().asString());
	}

	// *************************************************************************************************************************************
	// Function Objective:Hit endpoint based on query parameters input
	// *************************************************************************************************************************************
	@When("^API is hit with end point as \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void api_is_hit_with_end_point_as(String endPoint, String queryParam, String baseCurrency) throws Throwable {
		try {
			if (endPoint.contains("latest")) {
				scn.write("Hitting endpoint '" + baseURILatest + " with " + queryParam + " = " + baseCurrency);
				hitEndpoint(baseURILatest, queryParam, baseCurrency);
			} else {
				scn.write("Hitting endpoint '" + baseURI + " with " + queryParam + " = " + baseCurrency);
				hitEndpoint(baseURI + endPoint, queryParam, baseCurrency);
			}
			scn.write("Response received : " + getResponse().asString());
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception caught : " + e.getMessage());
		}
	}

	// *************************************************************************************************************************************
	// Function Objective:Validate that response contains base currency as expected
	// *************************************************************************************************************************************
	@And("^Response should contain base currency as \"([^\"]*)\"$")
	public void response_should_contain_base_currency_as(String expBaseCurrency) throws Throwable {
		try {
			Assert.assertEquals(200, actStatusCode);
			logger.info("Actual status code : '" + actStatusCode + "' matches with expected status code : '200'");
			scn.write("Actual status code : '" + actStatusCode + "' matches with expected status code : '200'");
			String actBaseCurrency = getJsonPath().get("base");
			Assert.assertEquals(expBaseCurrency.trim(), actBaseCurrency.trim());
			logger.info("Actual response base currency : '" + actBaseCurrency
					+ "' matches with expected base currency : '" + expBaseCurrency + "'");
			scn.write("Actual response base currency : '" + actBaseCurrency
					+ "' matches with expected base currency : '" + expBaseCurrency + "'");
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception caught : " + e.getMessage());
		}
	}

	// *************************************************************************************************************************************
	// Function Objective:Validate that response status code is in line with the
	// expectation
	// *************************************************************************************************************************************
	@Then("^API Should respond with status code as \"([^\"]*)\"$")
	public void api_Should_respond_with_status_code_as(int expStatusCode) throws Throwable {
		Assert.assertEquals(expStatusCode,actStatusCode);
		logger.info("Actual status code : '" + actStatusCode + "' matches with expected status code : '" + expStatusCode
				+ "'");
		scn.write("Actual status code : '" + actStatusCode + "' matches with expected status code : '" + expStatusCode
				+ "'");
	}

	// *************************************************************************************************************************************
	// Function Objective:Validate that desired error message was contained in the
	// response message
	// *************************************************************************************************************************************
	@Then("^Error message should be displayed as \"([^\"]*)\"$")
	public void error_message_should_be_displayed_as(String expErrorMessage) throws Throwable {
		// Checking if value retrieved is expected
		Assert.assertEquals(bodyAsString.trim().contains(expErrorMessage.trim()), true);
		logger.info("Expected error message received : '" + bodyAsString + "'");
		scn.write("Expected error message received : '" + bodyAsString + "'");
	}

	// *************************************************************************************************************************************
	// Function Objective:Validate individual currency values from the response map
	// *************************************************************************************************************************************
	@And("^Response should contain value \"([^\"]*)\" for \"([^\"]*)\"$")
	public void Response_should_contain_value(String expValue, String field) throws Throwable {
		LinkedHashMap<String, String> ratesData = getResponseMap();
		String actValue = null;
		boolean matched = false;

		// iterate through the response map and compare actual and expected values
		try {
			for (Map.Entry m : ratesData.entrySet()) {
				if (m.getKey().equals(field.trim())) {
					actValue = m.getValue().toString();
					if (actValue.equals(expValue)) {
						logger.info("Field : '" + field + "' , Actual value '" + actValue
								+ "' matches with Expected value '" + expValue);
						scn.write("Field : '" + field + "' , Actual value '" + actValue 
								+ "' matches with Expected value '" + expValue);
						matched = true;
						break;
					}
				}
			}
			if (!matched) {
				logger.error("Field : '" + field + "' , Actual value '" + actValue
						+ "' does not match with Expected value '" + expValue);
				scn.write("Field : '" + field + "' , Actual value '" + actValue
						+ "' does not match with Expected value '" + expValue);				
			}
		} catch (Exception e) {
			logger.error("Exception caught during response map validation for field '" + field + "', exp value '"
					+ expValue + "'");
			scn.write("Exception caught during response map validation for field '" + field + "', exp value '"
					+ expValue + "'");			
			logger.error("Exception details : " + e.getMessage());
			throw new RuntimeException("Exception caught during response map validation for field '" + field
					+ "', exp value '" + expValue + "'");
		}
	}

	// *************************************************************************************************************************************
	// Function Objective:Validate that date contained in the response is in line
	// with the expectation
	// *************************************************************************************************************************************
	@And("^Response should contain date as \"([^\"]*)\"$")
	public void Response_should_contain_expected_date(String expDate) throws Throwable {
		String actResponseDate = null;
		try {
			actResponseDate = getJsonPath().get("date");

			// If Today is mentioned in the feature file step, programmatically calculate
			// today's date
			if (expDate.toLowerCase().contains("today")) {
				expDate = UtilityHelper.getTodaysDate().toString();
			}

			// Do weekend calculation and fetch correct working date
			expDate = UtilityHelper.getWorkingDate(LocalDate.parse(expDate));

			// Assert that dates match
			Assert.assertEquals(expDate, actResponseDate);
			scn.write("Expected Date " + expDate + " matches with actual response date " + actResponseDate);
		} catch (Exception e) {
			logger.error("Exception caught during date validation Exp date '" + expDate + "' , Actual date '"
					+ actResponseDate + "'");
			logger.error("Exception details : " + e.getMessage());
			throw new RuntimeException("Exception caught during date validation Exp date '" + expDate
					+ "' , Actual date '" + actResponseDate + "'");
		}
	}

	// *************************************************************************************************************************************
	// Function Objective:Validate that the response currency values are not empty
	// *************************************************************************************************************************************
	@And("^Response should contain not null values for \"([^\"]*)\"$")
	public void response_should_contain_not_null_values_for_Currencies(String checkCurrencies) throws Throwable {
		try {
			// Split to fetch multiple currencies input
			String[] currencies = checkCurrencies.split(",");
			String actValue = null;

			// Fetch response hashmap
			LinkedHashMap<String, String> currencyData = getResponseMap();

			// Iterate for each currency, get corresponding response map value and validate
			for (String currency : currencies) {
				for (Map.Entry m : currencyData.entrySet()) {
					if (m.getKey().equals(currency.trim())) {
						actValue = m.getValue().toString();
						if (actValue.isEmpty()) {
							logger.error("Response currency : '" + currency + "' , Actual value '" + actValue
									+ "' is black or empty");
							scn.write("Response currency : '" + currency + "' , Actual value '" + actValue
									+ "' is black or empty");							
							break;
						} else {
							logger.info("Response currency : '" + currency + "' , returned a valid actual value '"
									+ actValue + "'");
							scn.write("Response currency : '" + currency + "' , returned a valid actual value '"
									+ actValue + "'");							
							break;
						}
					}
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception caught : " + e.getMessage());
			scn.write("Exception caught : " + e.getMessage());
		}
	}

	// *************************************************************************************************************************************
	// Function Objective:Validate that response received when invoked with a future
	// date is same as that for current date
	// *************************************************************************************************************************************
	@And("^Response for future date should match with response for today$")
	public void response_for_future_date_should_match_with_response_for_today() throws Throwable {
		// Capture the already received response for future date
		String respFutureDate = bodyAsString;
		
		scn.write("Future date response : " + respFutureDate);

		// Hit endpoint again with today's date
		hitEndpoint(baseURI + UtilityHelper.getTodaysDate());

		// Get response and assert for correctness
		String respToday = bodyAsString;
		Assert.assertEquals(respFutureDate, respToday);
		
		scn.write("Current date response : " + respToday + ", matches with future date response");
	}
}
//*********************************************************************************************************************************************
