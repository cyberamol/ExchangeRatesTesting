package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)

//Configure Cucumber options with desired options
@CucumberOptions(features = "src/test/resources/features", glue = "stepDefinitions", tags = "@UAT", monochrome = true, plugin = {
		"pretty", "html:target/cucumber-html-report", "json:target/cucumber-reports/cucumber.json",
		"junit:target/cucumber-reports/cucumber.xml",
		"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:" })

public class TestRunner {
}
